import { AREAS, AREA_BY_ID, INITIAL_UNITS, SCENARIO } from './scenario.ts';
import type { Advice, CommitmentChoice, GameState, Observation, Order, Side, Unit } from './types.ts';

const copy = <T>(value: T): T => structuredClone(value);
const other = (side: Side): Side => side === 'greek' ? 'persian' : 'greek';
const hold = (unit: Unit): Order => ({ unitId: unit.id, kind: 'hold', target: null, intent: 'balanced' });
const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));
const normalized = (view: Observation, orders: Order[]) => view.units.map(unit => copy(orders.find(order => order.unitId === unit.id) ?? hold(unit)));

function refreshContacts(state: GameState): void {
  for (const side of ['greek', 'persian'] as const) {
    const visible = new Set(state.units.filter(unit => unit.side === side).flatMap(unit => [unit.area, ...AREA_BY_ID[unit.area].neighbors]));
    const contacts = new Map(state.contacts[side].map(contact => [contact.area, contact]));
    for (const area of visible) {
      const strength = state.units.filter(unit => unit.side !== side && unit.area === area).reduce((total, unit) => total + unit.strength, 0);
      contacts.set(area, { area, band: strength === 0 ? 'clear' : strength < 80 ? 'light' : strength < 160 ? 'substantial' : 'strong', seenTurn: state.turn });
    }
    state.contacts[side] = [...contacts.values()].sort((a, b) => a.area.localeCompare(b.area));
  }
}

export function createGame(seed = SCENARIO.seed): GameState {
  const initialSeed = Number.isFinite(seed) ? seed >>> 0 : SCENARIO.seed;
  const state: GameState = {
    version: 1, initialSeed, rng: initialSeed, turn: 1, maxTurns: SCENARIO.turns,
    units: copy(INITIAL_UNITS), control: Object.fromEntries(AREAS.map(area => [area.id, ['thessaly', 'pagasae'].includes(area.id) ? 'persian' : 'greek'])),
    contacts: { greek: [], persian: [] }, dispatches: [], commitment: 'unsettled', history: [], outcome: null,
  };
  refreshContacts(state);
  return state;
}

export function observe(state: GameState, side: Side): Observation {
  return copy({ side, turn: state.turn, maxTurns: state.maxTurns, units: state.units.filter(unit => unit.side === side), contacts: state.contacts[side], control: state.control, dispatches: state.dispatches.filter(dispatch => dispatch.side === side || dispatch.side === 'both'), commitment: state.commitment, outcome: state.outcome });
}

export function validateOrders(view: Observation, orders: Order[], choice: CommitmentChoice): string[] {
  const errors: string[] = [];
  if (view.outcome) errors.push('This exercise has ended. Start a new exercise to issue orders.');
  if (!['forward', 'home'].includes(choice)) errors.push('Choose forward service or home defence.');
  const expected = view.commitment === 'home' ? 'home' : 'forward';
  if (view.commitment !== 'unsettled' && choice !== expected) errors.push('The first-turn coalition commitment cannot be changed.');
  if (!Array.isArray(orders)) return [...errors, 'Orders must be a list.'];
  const seen = new Set<string>();
  for (const order of orders) {
    if (!order || typeof order !== 'object') { errors.push('Malformed order.'); continue; }
    const unit = view.units.find(candidate => candidate.id === order.unitId && candidate.side === view.side);
    if (!unit) { errors.push(`Unknown or uncommanded formation: ${String(order.unitId)}.`); continue; }
    if (seen.has(unit.id)) errors.push(`Duplicate order for ${unit.name}.`);
    seen.add(unit.id);
    if (!['press', 'balanced', 'preserve'].includes(order.intent)) errors.push(`Invalid intent for ${unit.name}.`);
    if (!['hold', 'move', 'reserve'].includes(order.kind)) { errors.push(`Invalid order for ${unit.name}.`); continue; }
    if (order.kind === 'hold') {
      if (order.target !== null) errors.push(`A hold order for ${unit.name} must have no target.`);
      continue;
    }
    const target = order.target ? AREA_BY_ID[order.target] : null;
    if (!target || target.domain !== unit.domain || !AREA_BY_ID[unit.area].neighbors.includes(target.id)) errors.push(`${unit.name} needs an adjacent ${unit.domain} destination.`);
    if (unit.id === 'corinthians' && (choice === 'home' || view.commitment === 'broken') && !['megara', 'corinth'].includes(order.target ?? '')) errors.push('The Corinthian contingent is restricted to Megara and Corinth.');
  }
  if (orders.filter(order => order?.kind === 'reserve').length > 1) errors.push('Only one reserve response may be declared per side.');
  if (errors.length) return errors;
  const final = normalized(view, orders);
  // Check both possible reserve outcomes; hidden enemy movements never affect legality.
  for (const triggered of [false, true]) {
    const counts: Record<string, number> = {};
    for (const unit of view.units) {
      const order = final.find(candidate => candidate.unitId === unit.id)!;
      const target = order.kind === 'move' || (triggered && order.kind === 'reserve') ? order.target! : unit.area;
      counts[target] = (counts[target] ?? 0) + 1;
    }
    for (const [area, count] of Object.entries(counts)) if (count > AREA_BY_ID[area].capacity) errors.push(`${AREA_BY_ID[area].name} exceeds its friendly formation capacity${triggered ? ' if the reserve responds' : ''}.`);
  }
  return [...new Set(errors)];
}

export function advise(view: Observation, orders: Order[]): Advice {
  const reasons: string[] = [];
  for (const unit of view.units) {
    const order = orders.find(candidate => candidate.unitId === unit.id);
    if (!unit.supplied) reasons.push(`${unit.name} is beyond reliable support; cohesion will deteriorate until a controlled route is restored.`);
    if (unit.cohesion < 50) reasons.push(`${unit.name} has low cohesion; a supplied pause can help it recover.`);
    if (order?.target) {
      const contact = view.contacts.find(candidate => candidate.area === order.target);
      if (contact && contact.band !== 'clear') reasons.push(`${AREA_BY_ID[order.target]?.name}: ${contact.band} enemy presence reported${contact.seenTurn < view.turn ? ` ${view.turn - contact.seenTurn} turn(s) ago` : ' currently'}.`);
      else if (!contact || contact.seenTurn < view.turn) reasons.push(`${AREA_BY_ID[order.target]?.name}: no current strength report; absence of a fresh contact is not proof of safety.`);
      if (order.kind === 'reserve') reasons.push(`${unit.name} will respond only if an enemy ordinary move arrives at ${AREA_BY_ID[order.target]?.name}; otherwise it holds.`);
    }
  }
  if (view.side === 'greek' && ['unsettled', 'forward'].includes(view.commitment)) reasons.push('Forward service requires Greek control of Megara after turn 3. Home defence keeps the Corinthians within Megara and Corinth.');
  if (view.side === 'greek' && view.control.saronic !== 'greek') reasons.push('The Saronic route is lost: Attica no longer acts as a forward army supply source.');
  return { assessment: reasons.length ? 'Review the following operational pressures before committing.' : 'No immediate support or cohesion warnings. Enemy intentions remain uncertain.', confidence: 'Advice uses your formations and dated sightings only. It is not a battle forecast.', reasons };
}

export function resolveTurn(input: GameState, greekOrders: Order[], persianOrders: Order[], choice: CommitmentChoice): GameState {
  const greekView = observe(input, 'greek'), persianView = observe(input, 'persian');
  const errors = [...validateOrders(greekView, greekOrders, choice), ...validateOrders(persianView, persianOrders, choice)];
  if (errors.length) throw new Error(errors.join('\n'));
  const state = copy(input);
  const greek = normalized(greekView, greekOrders), persian = normalized(persianView, persianOrders);
  state.history.push({ turn: state.turn, greek: copy(greek), persian: copy(persian), choice });
  if (state.commitment === 'unsettled') state.commitment = choice;
  const orders = new Map([...greek, ...persian].map(order => [order.unitId, order]));
  const origins = new Map(state.units.map(unit => [unit.id, unit.area]));
  const destinations = new Map(state.units.map(unit => [unit.id, orders.get(unit.id)!.kind === 'move' ? orders.get(unit.id)!.target! : unit.area]));
  const dispatch = (side: Side | 'both', kind: GameState['dispatches'][number]['kind'], text: string) => state.dispatches.push({ turn: state.turn, side, kind, text });
  const random = () => { state.rng = (Math.imul(1664525, state.rng) + 1013904223) >>> 0; return state.rng / 4294967296; };
  for (const unit of state.units) {
    const order = orders.get(unit.id)!;
    if (order.kind === 'reserve' && state.units.some(enemy => enemy.side !== unit.side && orders.get(enemy.id)!.kind === 'move' && destinations.get(enemy.id) === order.target)) {
      destinations.set(unit.id, order.target!);
      dispatch(unit.side, 'movement', `${unit.name} responds to its predeclared reserve trigger at ${AREA_BY_ID[order.target!].name}.`);
    }
  }
  // Opposite-edge movements meet at the first endpoint in authored area order. Neither
  // mover receives prepared-terrain defence. This is a deterministic abstraction.
  const crossings = new Map<string, string>();
  for (const unit of state.units) for (const enemy of state.units) {
    if (unit.side === enemy.side || origins.get(unit.id) === destinations.get(unit.id)) continue;
    if (origins.get(unit.id) === destinations.get(enemy.id) && destinations.get(unit.id) === origins.get(enemy.id)) {
      const meeting = AREAS.find(area => area.id === unit.area || area.id === enemy.area)!.id;
      crossings.set(unit.id, meeting); crossings.set(enemy.id, meeting);
    }
  }
  for (const [id, area] of crossings) destinations.set(id, area);
  for (const unit of state.units) {
    unit.area = destinations.get(unit.id)!;
    if (unit.area !== origins.get(unit.id)) dispatch(unit.side, 'movement', `${unit.name} reaches ${AREA_BY_ID[unit.area].name}.`);
  }
  const retreating = new Set<string>();
  for (const area of AREAS) {
    const present = state.units.filter(unit => unit.area === area.id && unit.strength > 0);
    if (!present.some(unit => unit.side === 'greek') || !present.some(unit => unit.side === 'persian')) continue;
    const beforeBattle = new Map(present.map(unit => [unit.id, { strength: unit.strength, cohesion: unit.cohesion }]));
    const power = (side: Side) => present.filter(unit => unit.side === side).reduce((sum, unit) => {
      const intent = orders.get(unit.id)!.intent;
      const defending = origins.get(unit.id) === area.id && destinations.get(unit.id) === area.id && !crossings.has(unit.id);
      return sum + unit.strength * (.45 + unit.cohesion / 100 * .55) * unit.experience * (intent === 'press' ? 1.08 : intent === 'preserve' ? .94 : 1) * (defending ? area.defence : 1);
    }, 0);
    const greekPower = power('greek') * (.9 + .2 * random()), persianPower = power('persian') * (.9 + .2 * random());
    const winner: Side = greekPower >= persianPower ? 'greek' : 'persian';
    for (const unit of present) {
      const won = unit.side === winner, intent = orders.get(unit.id)!.intent;
      const loss = (won ? .10 : .24) * (intent === 'press' ? 1.25 : intent === 'preserve' ? .70 : 1);
      unit.strength = Math.max(0, Math.round(unit.strength * (1 - loss)));
      unit.cohesion = clamp(unit.cohesion - (won ? 10 : 25));
      if (!won) retreating.add(unit.id);
    }
    for (const side of ['greek', 'persian'] as const) {
      const own = present.filter(unit => unit.side === side);
      const prepared = own.some(unit => origins.get(unit.id) === area.id && !crossings.has(unit.id)) && area.defence > 1;
      const ownStrength = own.reduce((sum, unit) => sum + beforeBattle.get(unit.id)!.strength, 0);
      const enemyStrength = present.filter(unit => unit.side !== side).reduce((sum, unit) => sum + beforeBattle.get(unit.id)!.strength, 0);
      const loss = own.reduce((sum, unit) => sum + beforeBattle.get(unit.id)!.strength - unit.strength, 0);
      const concentration = enemyStrength > ownStrength * 1.3 ? ' The enemy brought a larger concentration.' : ownStrength > enemyStrength * 1.3 ? ' Your force held a concentration advantage.' : ' The opposing concentrations were broadly comparable.';
      dispatch(side, 'battle', `${area.name}: ${side === winner ? 'your force held the field' : 'your force was forced to retreat'}. Your force lost ${loss} strength points.${concentration}${own.some(unit => beforeBattle.get(unit.id)!.cohesion < 50) ? ' Low cohesion weakened your force.' : ''}${prepared ? ' Your prepared position helped the defence.' : ''}${own.some(unit => orders.get(unit.id)!.intent === 'press') ? ' Pressing increased commitment and casualties.' : ''}${own.some(unit => orders.get(unit.id)!.intent === 'preserve') ? ' Preservation reduced casualties at the cost of commitment.' : ''}${own.some(unit => crossings.has(unit.id)) ? ' Opposing movements met on the route; moving forces received no prepared defence bonus.' : ''} Experience and bounded battlefield uncertainty also affect resolution.`);
    }
  }
  const alive = (unit: Unit) => unit.strength >= 10;
  state.units = state.units.filter(alive);
  // Victorious and unopposed arrivals establish provisional occupation before
  // retreat paths are evaluated. Routed units do not capture their destination.
  for (const unit of state.units) if (!retreating.has(unit.id)) state.control[unit.area] = unit.side;
  // Resolve retreats after every battle, so a retreat cannot bypass a battle or
  // enter a position containing an enemy awaiting its own retreat.
  const retreat = (unit: Unit): void => {
    const target = [...AREA_BY_ID[unit.area].neighbors].sort((a, b) => Number(state.control[b] === unit.side) - Number(state.control[a] === unit.side) || a.localeCompare(b)).find(area =>
      !(unit.id === 'corinthians' && ['home', 'broken'].includes(state.commitment) && !['megara', 'corinth'].includes(area)) &&
      state.control[area] !== other(unit.side) &&
      !state.units.some(candidate => alive(candidate) && candidate.id !== unit.id && candidate.area === area && candidate.side !== unit.side) &&
      state.units.filter(candidate => alive(candidate) && candidate.id !== unit.id && candidate.area === area && candidate.side === unit.side).length < AREA_BY_ID[area].capacity);
    if (target) { unit.area = target; dispatch(unit.side, 'battle', `${unit.name} falls back to ${AREA_BY_ID[target].name}.`); }
    else { unit.strength = 0; dispatch(unit.side, 'battle', `${unit.name} has no safe adjacent retreat with available capacity and is lost.`); }
  };
  for (const unit of [...state.units].sort((a, b) => a.id.localeCompare(b.id))) if (retreating.has(unit.id)) retreat(unit);
  state.units = state.units.filter(alive);
  // Interceptions can crowd an endpoint beyond planned capacity: excess units
  // must withdraw by the same safe-adjacent rule, never silently overstack.
  for (const area of AREAS) for (const side of ['greek', 'persian'] as const) {
    const present = state.units.filter(unit => unit.area === area.id && unit.side === side).sort((a, b) => a.id.localeCompare(b.id));
    for (const unit of present.slice(area.capacity)) retreat(unit);
  }
  state.units = state.units.filter(alive);
  for (const unit of state.units) state.control[unit.area] = unit.side;
  if (state.turn === 3 && state.commitment === 'forward') {
    state.commitment = state.control.megara === 'greek' ? 'honoured' : 'broken';
    if (state.commitment === 'broken') {
      const corinthians = state.units.find(unit => unit.id === 'corinthians');
      if (corinthians) {
        // Explicit council recall exception, not ordinary retreat or transport.
        if (state.control.corinth === 'greek' && state.units.filter(unit => unit.area === 'corinth').length < AREA_BY_ID.corinth.capacity) corinthians.area = 'corinth';
        else corinthians.strength = 0;
      }
      dispatch('both', 'council', 'The forward-service promise failed: Megara was not held after turn 3. Surviving Corinthians are recalled directly to Corinth as an explicit council exception; if their home is unavailable, their contingent disbands. Coalition cohesion is broken.');
    } else dispatch('both', 'council', 'Megara is held after turn 3. The forward-service promise is honoured.');
  }
  for (const side of ['greek', 'persian'] as const) for (const domain of ['land', 'sea'] as const) {
    const bases = side === 'persian' ? [domain === 'land' ? 'thessaly' : 'pagasae'] : domain === 'sea' ? ['saronic'] : ['corinth', ...(state.control.attica === 'greek' && state.control.saronic === 'greek' ? ['attica'] : [])];
    const connected = new Set(bases.filter(base => state.control[base] === side));
    const queue = [...connected];
    for (let i = 0; i < queue.length; i++) for (const next of AREA_BY_ID[queue[i]].neighbors) if (state.control[next] === side && !connected.has(next)) { connected.add(next); queue.push(next); }
    for (const unit of state.units.filter(unit => unit.side === side && unit.domain === domain)) {
      unit.supplied = connected.has(unit.area);
      if (!unit.supplied) { unit.cohesion = clamp(unit.cohesion - 12); dispatch(side, 'supply', `${unit.name} lacks a controlled supply connection and loses cohesion, not manpower.`); }
      else if (origins.get(unit.id) === unit.area && !retreating.has(unit.id) && !state.dispatches.some(item => item.turn === state.turn && item.kind === 'battle' && item.side === side && item.text.startsWith(`${AREA_BY_ID[unit.area].name}:`))) unit.cohesion = clamp(unit.cohesion + 8);
    }
  }
  state.units = state.units.filter(alive);
  const viable = (domain: 'land' | 'sea') => state.units.some(unit => unit.side === 'greek' && unit.domain === domain);
  if (!viable('land') || !viable('sea')) {
    state.outcome = { result: 'defeat', title: 'The defence has collapsed', reason: 'The coalition no longer has both a surviving field army and a surviving fleet. This combined-arms requirement is specific to the exercise.' };
  } else if (state.turn >= state.maxTurns) {
    const checkedDomains = (['land', 'sea'] as const).map(domain => {
      const initial = INITIAL_UNITS.filter(unit => unit.side === 'persian' && unit.domain === domain).reduce((total, unit) => total + unit.strength, 0);
      const remaining = state.units.filter(unit => unit.side === 'persian' && unit.domain === domain).reduce((total, unit) => total + unit.strength, 0);
      return remaining <= initial * .75;
    });
    const checked = checkedDomains.every(Boolean);
    const secure = (['land', 'sea'] as const).every(domain => state.units.some(unit => unit.side === 'greek' && unit.domain === domain && unit.supplied));
    const victory = checked && secure && state.commitment !== 'broken';
    const attrition = ` Persian army attrition: ${checkedDomains[0] ? 'at least' : 'less than'} 25%; Persian fleet attrition: ${checkedDomains[1] ? 'at least' : 'less than'} 25%.`;
    state.outcome = { result: victory ? 'victory' : 'stalemate', title: victory ? 'The invasion is checked' : 'An unresolved campaign', reason: (victory ? 'The coalition retained a supplied field army and fleet, kept its commitment, and reduced both the invading army and fleet by at least one quarter.' : `Survival alone is not victory.${!checked ? ' Both the invading army and fleet must lose at least a quarter of their respective initial strength.' : ''}${!secure ? ' The coalition lacks a supplied field army or supplied fleet.' : ''}${state.commitment === 'broken' ? ' The coalition commitment is broken.' : ''}`) + attrition };
  }
  if (state.outcome) dispatch('both', 'outcome', `${state.outcome.title}. ${state.outcome.reason}`);
  state.turn++;
  refreshContacts(state);
  return state;
}
