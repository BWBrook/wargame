import { createGame, observe, resolveTurn } from '../src/game/engine.ts';
import { planOpponent } from '../src/game/ai.ts';
import { attritionAssessment, greekPlan, POLICIES, positionalAssessment } from './experiment-model.ts';

// Paired policies/seeds, no tuning loop. Terminal positions are scored twice;
// changing the evaluator cannot affect the moves that generated them.
console.log('| Doctrine | Service | Greek plan | Attrition V/S/D | Position V/S/D | Persian Corinth | Broken | Skipped orders | Forward orders executed |');
console.log('| --- | --- | --- | --- | --- | --- | --- | --- | --- |');
for (const doctrine of ['advance', 'preserve'] as const) for (const choice of ['home', 'forward'] as const) for (const policy of POLICIES) {
  const tally = { old: { victory: 0, stalemate: 0, defeat: 0 }, position: { victory: 0, stalemate: 0, defeat: 0 }, corinth: 0, broken: 0, skipped: 0, forward: 0 };
  for (let seed = 1; seed <= 300; seed++) {
    let state = createGame(seed);
    while (!state.outcome) {
      const plan = greekPlan(observe(state, 'greek'), policy, choice);
      tally.skipped += plan.skipped;
      tally.forward += plan.orders.filter(order => order.unitId === 'corinthians' && order.kind === 'move' && !['megara', 'corinth'].includes(order.target!)).length;
      state = resolveTurn(state, plan.orders, planOpponent(observe(state, 'persian'), doctrine), choice);
    }
    tally.old[attritionAssessment(state)]++;
    tally.position[positionalAssessment(state)]++;
    tally.corinth += Number(state.control.corinth === 'persian');
    tally.broken += Number(state.commitment === 'broken');
  }
  const counts = (row: typeof tally.old) => `${row.victory}/${row.stalemate}/${row.defeat}`;
  console.log(`| ${doctrine} | ${choice} | ${policy} | ${counts(tally.old)} | ${counts(tally.position)} | ${tally.corinth} | ${tally.broken} | ${tally.skipped} | ${tally.forward} |`);
}
