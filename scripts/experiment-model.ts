import { AREAS, INITIAL_UNITS } from '../src/game/scenario.ts';
import { validateOrders } from '../src/game/engine.ts';
import type { CommitmentChoice, GameState, Observation, Order, Outcome } from '../src/game/types.ts';

export const POLICIES = ['hold', 'withdraw', 'concentrate', 'isthmus', 'forward-screen', 'forward-relief'] as const;
export type Policy = typeof POLICIES[number];
const move = (unitId: string, target: string, intent: Order['intent'] = 'balanced'): Order => ({ unitId, target, intent, kind: 'move' });

/** Fixed plans, not optimised play. Forward plans actually exercise the permission. */
export function greekPlan(view: Observation, policy: Policy, choice: CommitmentChoice): { orders: Order[]; skipped: number } {
  let proposed: Order[] = [];
  if (view.turn === 1) {
    if (policy === 'withdraw') proposed = [move('leonidas', 'boeotia', 'preserve'), move('athenian-fleet', 'euripus', 'preserve')];
    if (policy === 'concentrate') proposed = [move('athenians', 'thermopylae'), move('allied-fleet', 'euripus')];
    if (policy === 'isthmus') proposed = [move('leonidas', 'boeotia', 'preserve'), move('athenians', 'megara'), move('corinthians', 'corinth'), move('athenian-fleet', 'euripus', 'preserve')];
    if (policy === 'forward-screen') proposed = [move('leonidas', 'phocis'), move('athenians', 'thermopylae'), move('corinthians', 'boeotia'), move('allied-fleet', 'euripus')];
    if (policy === 'forward-relief') proposed = [move('leonidas', 'phocis'), move('corinthians', 'boeotia'), move('athenian-fleet', 'euripus', 'preserve')];
  }
  if (view.turn === 2) {
    if (policy === 'isthmus') proposed = [move('leonidas', 'megara'), move('athenian-fleet', 'saronic', 'preserve')];
    if (policy === 'forward-screen') proposed = [move('corinthians', 'megara', 'preserve')];
    if (policy === 'forward-relief') proposed = [move('athenians', 'megara'), move('corinthians', 'megara'), move('athenian-fleet', 'saronic', 'preserve')];
  }
  // After battle a planned formation may be gone or out of position. The stated
  // fallback is hold; count every omitted order so it cannot be mistaken for
  // successful execution of the intended plan.
  let orders: Order[] = [], skipped = 0;
  for (const order of proposed) {
    if (validateOrders(view, [...orders, order], choice).length) skipped++;
    else orders.push(order);
  }
  return { orders, skipped };
}

/** Old scorer, retained only in this diagnostic module for paired comparisons. */
export function attritionAssessment(state: GameState): Outcome['result'] {
  const own = state.units.filter(unit => unit.side === 'greek');
  if (!own.some(unit => unit.domain === 'land') || !own.some(unit => unit.domain === 'sea')) return 'defeat';
  const secure = ['land', 'sea'].every(domain => own.some(unit => unit.domain === domain && unit.supplied));
  const damage = ['land', 'sea'].every(domain => state.units.filter(unit => unit.side === 'persian' && unit.domain === domain).reduce((sum, unit) => sum + unit.strength, 0) <= .75 * INITIAL_UNITS.filter(unit => unit.side === 'persian' && unit.domain === domain).reduce((sum, unit) => sum + unit.strength, 0));
  return damage && secure && state.commitment !== 'broken' ? 'victory' : 'stalemate';
}

/** Candidate, not a historical claim: defend a connected southern foothold. */
export function positionalAssessment(state: GameState): Outcome['result'] {
  const southern = ['attica', 'megara', 'corinth'];
  const operational = state.units.filter(unit => unit.supplied && unit.strength >= 35 && unit.cohesion >= 35);
  const greek = state.units.filter(unit => unit.side === 'greek');
  if (!greek.some(unit => unit.domain === 'land') || !greek.some(unit => unit.domain === 'sea')) return 'defeat';
  const persianTerritory = southern.filter(area => state.control[area] === 'persian');
  const supportedBreakthrough = persianTerritory.length >= 2 && operational.some(unit => unit.side === 'persian' && unit.domain === 'land' && persianTerritory.includes(unit.area));
  if (supportedBreakthrough) return 'defeat';
  const greekTerritory = southern.filter(area => state.control[area] === 'greek');
  const connected = greekTerritory.some(area => AREAS.find(item => item.id === area)!.neighbors.some(neighbor => greekTerritory.includes(neighbor)));
  const secure = operational.some(unit => unit.side === 'greek' && unit.domain === 'land' && greekTerritory.includes(unit.area)) && operational.some(unit => unit.side === 'greek' && unit.domain === 'sea');
  // A stationary opponent has not tested the defence. This is diagnostic evidence
  // of contact, not a named battle requirement or an invisible casualty target.
  const contested = state.dispatches.some(item => item.side === 'greek' && item.kind === 'battle');
  return connected && secure && contested && state.commitment !== 'broken' ? 'victory' : 'stalemate';
}
