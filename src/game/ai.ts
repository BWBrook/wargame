import { AREA_BY_ID } from './scenario.ts';
import { validateOrders } from './engine.ts';
import type { Observation, Order } from './types.ts';

/** Deterministic opponent: only public graph, own forces and dated contacts. */
export function planOpponent(view: Observation): Order[] {
  if (view.outcome) return [];
  const ranks: Record<string, number> = { thessaly: 0, thermopylae: 1, phocis: 1, boeotia: 2, attica: 3, megara: 4, corinth: 5, pagasae: 0, artemisium: 1, euripus: 2, saronic: 3 };
  const orders: Order[] = view.units.map(unit => ({ unitId: unit.id, kind: 'hold', target: null, intent: 'balanced' }));
  const choice = view.commitment === 'home' ? 'home' : 'forward';
  for (const unit of [...view.units].sort((a, b) => a.id.localeCompare(b.id))) {
    if (unit.cohesion < 45 && unit.supplied) continue;
    const candidates = AREA_BY_ID[unit.area].neighbors.filter(area => ranks[area] > ranks[unit.area]).sort((a, b) => {
      const strength = (area: string) => { const contact = view.contacts.find(item => item.area === area && item.seenTurn === view.turn); return contact?.band === 'strong' ? 3 : contact?.band === 'substantial' ? 2 : contact?.band === 'light' ? 1 : 0; };
      return ranks[b] - ranks[a] || strength(a) - strength(b) || a.localeCompare(b);
    });
    for (const target of candidates) {
      const index = orders.findIndex(order => order.unitId === unit.id);
      const previous = orders[index];
      orders[index] = { unitId: unit.id, kind: 'move', target, intent: unit.cohesion > 65 ? 'press' : 'balanced' };
      if (!validateOrders(view, orders, choice).length) break;
      orders[index] = previous;
    }
  }
  return orders;
}
