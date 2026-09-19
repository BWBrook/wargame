import { AREA_BY_ID } from './scenario.ts';
import { validateOrders } from './engine.ts';
import type { Observation, Order } from './types.ts';

/** Deterministic opponent: only public graph, own forces and dated contacts. */
export function planOpponent(view: Observation, doctrine: 'advance' | 'preserve' = 'advance'): Order[] {
  if (view.outcome) return [];
  const ranks: Record<string, number> = { thessaly: 0, thermopylae: 1, phocis: 1, boeotia: 2, attica: 3, megara: 4, corinth: 5, pagasae: 0, artemisium: 1, euripus: 2, saronic: 3 };
  const orders: Order[] = view.units.map(unit => ({ unitId: unit.id, kind: 'hold', target: null, intent: 'balanced' }));
  const choice = view.commitment === 'home' ? 'home' : 'forward';
  for (const unit of [...view.units].sort((a, b) => a.id.localeCompare(b.id))) {
    if (unit.cohesion < 45 && unit.supplied) continue;
    // Experimental preservation doctrine. Keep the shipped advance policy as
    // the control; scripts/experiments.ts compares them without mixing changes.
    if (doctrine === 'preserve' && unit.strength < 40) continue;
    const candidates = AREA_BY_ID[unit.area].neighbors.filter(area => ranks[area] > ranks[unit.area]).sort((a, b) => {
      const strength = (area: string) => { const contact = view.contacts.find(item => item.area === area && item.seenTurn === view.turn); return contact?.band === 'strong' ? 3 : contact?.band === 'substantial' ? 2 : contact?.band === 'light' ? 1 : 0; };
      return ranks[b] - ranks[a] || strength(a) - strength(b) || a.localeCompare(b);
    });
    for (const target of candidates) {
      const index = orders.findIndex(order => order.unitId === unit.id);
      const previous = orders[index];
      orders[index] = { unitId: unit.id, kind: 'move', target, intent: doctrine === 'preserve' ? 'balanced' : unit.cohesion > 65 ? 'press' : 'balanced' };
      if (!validateOrders(view, orders, choice).length) break;
      orders[index] = previous;
    }
  }
  if (doctrine === 'preserve') {
    // Judge the whole proposed concentration, not isolated units. Contacts are
    // estimates from this side's view; no true enemy units or Greek orders enter.
    const veto = new Set<string>();
    for (const order of orders.filter(order => order.kind === 'move')) {
      const contact = view.contacts.find(item => item.area === order.target && item.seenTurn === view.turn);
      const estimated = contact?.band === 'strong' ? 200 : contact?.band === 'substantial' ? 120 : contact?.band === 'light' ? 40 : 0;
      const concentration = view.units.filter(unit => {
        const planned = orders.find(item => item.unitId === unit.id)!;
        return (planned.kind === 'move' ? planned.target : unit.area) === order.target;
      }).reduce((sum, unit) => sum + unit.strength * (.45 + .55 * unit.cohesion / 100) * unit.experience, 0);
      if (concentration < estimated * AREA_BY_ID[order.target!].defence * .9) veto.add(order.target!);
    }
    for (const order of orders) if (order.kind === 'move' && veto.has(order.target!)) { order.kind = 'hold'; order.target = null; }
    // Vetoed departures may obstruct incoming allies; cancel those arrivals
    // until the plan is legal. This depends only on friendly capacity.
    for (let pass = 0; pass < view.units.length; pass++) {
      const destination = (id: string) => { const order = orders.find(item => item.unitId === id)!; return order.kind === 'move' ? order.target! : view.units.find(unit => unit.id === id)!.area; };
      const crowded = new Set(view.units.map(unit => destination(unit.id)).filter(area => view.units.filter(unit => destination(unit.id) === area).length > AREA_BY_ID[area].capacity));
      if (!crowded.size) break;
      for (const order of orders) if (order.kind === 'move' && crowded.has(order.target!)) { order.kind = 'hold'; order.target = null; }
    }
  }
  return orders;
}
