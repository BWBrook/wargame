import { createGame, observe, resolveTurn } from '../src/game/engine.ts';
import { planOpponent } from '../src/game/ai.ts';
import type { Order } from '../src/game/types.ts';

// Printed reports come only from the Greek observation, never the true-state log.
for (const posture of ['hold', 'concentrate', 'withdraw'] as const) {
  let state = createGame(480);
  console.log(`\nTHE NARROW SEA — seed 480 — ${posture}`);
  while (!state.outcome) {
    const view = observe(state, 'greek');
    const orders: Order[] = [];
    if (view.turn === 1 && posture === 'concentrate') {
      orders.push({ unitId: 'athenians', kind: 'move', target: 'thermopylae', intent: 'balanced' });
      orders.push({ unitId: 'allied-fleet', kind: 'move', target: 'euripus', intent: 'balanced' });
    }
    if (view.turn === 1 && posture === 'withdraw') {
      orders.push({ unitId: 'leonidas', kind: 'move', target: 'boeotia', intent: 'preserve' });
      orders.push({ unitId: 'athenian-fleet', kind: 'move', target: 'euripus', intent: 'preserve' });
    }
    state = resolveTurn(state, orders, planOpponent(observe(state, 'persian')), 'home');
    const report = observe(state, 'greek');
    console.log(`Turn ${view.turn}: ${report.units.length} surviving formations; coalition ${report.commitment}.`);
    for (const item of report.dispatches.filter(item => item.turn === view.turn && item.kind !== 'movement')) console.log(`  ${item.text}`);
  }
  console.log(`Outcome: ${observe(state, 'greek').outcome!.result} — ${observe(state, 'greek').outcome!.reason}`);
}
