import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createGame, observe, validateOrders } from '../src/game/engine.ts';
import { commitSave, deserializeSave, serializeSave } from '../src/game/save.ts';
import type { SaveGame } from '../src/game/types.ts';

const fresh = (): SaveGame => ({ version: 2, state: createGame(), orders: [], choice: 'home' });

test('seed zero is a supported reproducible save', () => {
  const save = { ...fresh(), state: createGame(0) };
  assert.deepEqual(deserializeSave(serializeSave(save)), save);
});

test('prior rules saves are explicitly rejected without rewriting the original', () => {
  const previous = JSON.stringify({ ...fresh(), version: 1 });
  assert.throws(() => deserializeSave(previous), /earlier prototype rules/);
  assert.equal(JSON.parse(previous).version, 1);
});

test('hold-at-all-costs drafts roundtrip and resolve reproducibly', () => {
  const save = fresh();
  save.orders = [{ unitId: 'leonidas', kind: 'stand', target: null, intent: 'balanced' }];
  assert.deepEqual(deserializeSave(serializeSave(save)), save);
  const next = commitSave(save);
  assert.deepEqual(deserializeSave(serializeSave(next)), next);
});

test('save replays complete exercise and restores editable drafts without world mutation', () => {
  let save = fresh();
  save.orders = [{ unitId: 'athenians', kind: 'move', target: 'thermopylae', intent: 'preserve' }];
  assert.deepEqual(deserializeSave(serializeSave(save)), save);
  const previous = structuredClone(save);
  save = commitSave(save);
  assert.deepEqual(previous.state, createGame());
  while (!save.state.outcome) {
    assert.deepEqual(deserializeSave(serializeSave(save)), save);
    save = commitSave(save);
  }
  assert.deepEqual(deserializeSave(serializeSave(save)), save);
});

test('unfinished invalid service-term drafts survive reload but cannot commit', () => {
  const save = fresh();
  save.orders = [{ unitId: 'corinthians', kind: 'move', target: 'boeotia', intent: 'balanced' }];
  assert.ok(validateOrders(observe(save.state, 'greek'), save.orders, save.choice).length);
  assert.deepEqual(deserializeSave(serializeSave(save)), save);
  assert.throws(() => commitSave(save), /restricted/);
  save.choice = 'forward';
  assert.doesNotThrow(() => commitSave(save));
});

test('malformed or inconsistent imports are rejected without altering live state', () => {
  const original = fresh();
  const changed = structuredClone(original);
  changed.state.units[0].strength = 1;
  assert.throws(() => deserializeSave(serializeSave(changed)), /turn record/);
  changed.state = original.state;
  changed.orders = [{ unitId: 'persian-main', kind: 'hold', target: null, intent: 'balanced' }];
  assert.throws(() => deserializeSave(serializeSave(changed)), /references/);
  assert.throws(() => deserializeSave('{'), /valid JSON/);
  assert.throws(() => deserializeSave('null'), /supported/);
  assert.throws(() => deserializeSave('x'.repeat(500_001)), /too large/);
  assert.deepEqual(original, fresh());
});

test('opponent commitment is independent of player drafts', () => {
  const hold = fresh(), move = fresh();
  move.orders = [{ unitId: 'leonidas', kind: 'move', target: 'phocis', intent: 'preserve' }];
  assert.deepEqual(commitSave(hold).state.history[0].persian, commitSave(move).state.history[0].persian);
});

test('imports cannot rewrite service terms after the first commitment', () => {
  const save = commitSave(fresh());
  save.choice = 'forward';
  assert.throws(() => deserializeSave(serializeSave(save)), /service terms/);
});
