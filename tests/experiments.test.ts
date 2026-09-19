import test from 'node:test';
import assert from 'node:assert/strict';
import { createGame, observe, resolveTurn, validateOrders } from '../src/game/engine.ts';
import { planOpponent } from '../src/game/ai.ts';
import { attritionAssessment, greekPlan, POLICIES, positionalAssessment } from '../scripts/experiment-model.ts';

test('experimental doctrine uses only observation and stops depleted assaults', () => {
  const state = createGame();
  const view = observe(state, 'persian');
  const before = structuredClone(view);
  state.units.filter(unit => unit.side === 'greek').forEach(unit => { unit.strength = 1; });
  assert.deepEqual(planOpponent(view, 'preserve'), planOpponent(observe(state, 'persian'), 'preserve'));
  assert.deepEqual(view, before);
  view.units.forEach(unit => { unit.strength = 20; });
  assert.ok(planOpponent(view, 'preserve').every(order => order.kind === 'hold'));
});

test('paired experiment plans remain legal and the control scorer matches the live scorer', () => {
  for (const doctrine of ['advance', 'preserve'] as const) for (const choice of ['home', 'forward'] as const) for (const policy of POLICIES) {
    let state = createGame(480);
    while (!state.outcome) {
      const plan = greekPlan(observe(state, 'greek'), policy, choice);
      const opponent = planOpponent(observe(state, 'persian'), doctrine);
      assert.deepEqual(validateOrders(observe(state, 'greek'), plan.orders, choice), []);
      assert.deepEqual(validateOrders(observe(state, 'persian'), opponent, choice), []);
      state = resolveTurn(state, plan.orders, opponent, choice);
    }
    assert.equal(attritionAssessment(state), state.outcome.result);
    const frozen = structuredClone(state);
    positionalAssessment(state);
    assert.deepEqual(state, frozen);
  }
});

test('forward experiments use the extra permission; home fallback is explicit', () => {
  for (const policy of ['forward-screen', 'forward-relief'] as const) {
    const view = observe(createGame(), 'greek');
    const forward = greekPlan(view, policy, 'forward');
    assert.ok(forward.orders.some(order => order.unitId === 'corinthians' && order.target === 'boeotia'));
    const home = greekPlan(view, policy, 'home');
    assert.ok(home.skipped > 0);
    assert.ok(!home.orders.some(order => order.unitId === 'corinthians' && order.target === 'boeotia'));
  }
});

test('candidate positional assessment does not make Corinth alone an automatic defeat', () => {
  const state = createGame();
  state.control.corinth = 'persian';
  state.dispatches.push({ turn: 1, side: 'greek', kind: 'battle', text: 'A battle was observed.' });
  assert.notEqual(positionalAssessment(state), 'defeat');
  state.control.megara = 'persian';
  const persian = state.units.find(unit => unit.id === 'persian-main')!;
  persian.area = 'megara';
  persian.supplied = true;
  assert.equal(positionalAssessment(state), 'defeat');
  persian.cohesion = 0;
  assert.equal(positionalAssessment(state), 'stalemate');
});
