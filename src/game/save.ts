import { createGame, observe, resolveTurn } from './engine.ts';
import { AREA_BY_ID } from './scenario.ts';
import { planOpponent } from './ai.ts';
import type { CommitmentChoice, Order, SaveGame } from './types.ts';

// Stable storage slot: keep older saves detectable and recoverable after a rules change.
export const SAVE_KEY = 'wargame:narrow-sea:v1';

function canonical(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonical).join(',')}]`;
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    return `{${Object.keys(obj).sort().map(key => `${JSON.stringify(key)}:${canonical(obj[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function isChoice(value: unknown): value is CommitmentChoice {
  return value === 'home' || value === 'forward';
}

function checkOrders(value: unknown): asserts value is Order[] {
  if (!Array.isArray(value) || value.length > 20) throw new Error('Invalid orders in save.');
  for (const order of value) {
    if (!order || typeof order !== 'object' || typeof order.unitId !== 'string' ||
      !['hold', 'stand', 'move', 'reserve'].includes(order.kind) ||
      !['press', 'balanced', 'preserve'].includes(order.intent) ||
      !(order.target === null || typeof order.target === 'string')) throw new Error('Invalid order in save.');
  }
}

export function serializeSave(save: SaveGame): string {
  return JSON.stringify(save, null, 2);
}

/** Replay, rather than trust an imported snapshot's units, outcomes or reports. */
export function deserializeSave(text: string): SaveGame {
  if (text.length > 500_000) throw new Error('This file is too large for an exercise save.');
  let data: SaveGame;
  try { data = JSON.parse(text); } catch { throw new Error('This file is not valid JSON.'); }
  if (data && (data as { version: number }).version === 1) {
    throw new Error('This save uses the earlier prototype rules. Export the original for your records, then start a new exercise under the revised rules.');
  }
  if (!data || data.version !== 2 || !data.state || data.state.version !== 2 ||
    !isChoice(data.choice) || !Number.isInteger(data.state.initialSeed) ||
    data.state.initialSeed < 0 || data.state.initialSeed > 0xffffffff ||
    !Array.isArray(data.state.history) || data.state.history.length > 6) {
    throw new Error('This is not a supported Narrow Sea save.');
  }
  let replay = createGame(data.state.initialSeed);
  for (const record of data.state.history) {
    if (!record || record.turn !== replay.turn || !isChoice(record.choice)) throw new Error('Invalid turn sequence in save.');
    checkOrders(record.greek);
    checkOrders(record.persian);
    // Both order sets are subsequently validated by the resolver. Persisted
    // opponent orders make replay stable even if policy details later change.
    replay = resolveTurn(replay, record.greek, record.persian, record.choice);
  }
  if (canonical(replay) !== canonical(data.state)) throw new Error('The saved state does not match its turn record.');
  if (replay.commitment !== 'unsettled' && data.choice !== (replay.commitment === 'home' ? 'home' : 'forward')) {
    throw new Error('The saved service terms do not match the first commitment.');
  }
  checkOrders(data.orders);
  // In-progress drafts may temporarily violate capacity or service terms. They
  // must survive reload so the player can finish revising them. Check references
  // here; the resolver still requires the complete plan to be legal on commit.
  const own = observe(replay, 'greek').units;
  const seen = new Set<string>();
  for (const order of data.orders) {
    const unit = own.find(unit => unit.id === order.unitId);
    if (!unit || seen.has(order.unitId) ||
      (order.kind === 'stand' && order.intent !== 'balanced') ||
      (order.kind === 'hold' || order.kind === 'stand' ? order.target !== null :
        !order.target || !AREA_BY_ID[unit.area].neighbors.includes(order.target))) {
      throw new Error('Invalid draft order references.');
    }
    seen.add(order.unitId);
  }
  if (replay.outcome && data.orders.length) throw new Error('Finished games cannot contain draft orders.');
  return { version: 2, state: replay, orders: data.orders, choice: data.choice };
}

/** Commit uses the pre-commit Persian view; the policy never receives drafts. */
export function commitSave(save: SaveGame): SaveGame {
  const enemy = planOpponent(observe(save.state, 'persian'));
  const state = resolveTurn(save.state, save.orders, enemy, save.choice);
  return { version: 2, state, orders: [], choice: save.choice };
}
