import test from 'node:test';
import assert from 'node:assert/strict';
import { advise, createGame, observe, resolveTurn, validateOrders } from '../src/game/engine.ts';
import { planOpponent } from '../src/game/ai.ts';
import { AREAS, AREA_BY_ID } from '../src/game/scenario.ts';
import type { GameState, Order } from '../src/game/types.ts';

const move = (unitId: string, target: string): Order => ({ unitId, kind: 'move', target, intent: 'balanced' });
const own = (state: GameState, id: string) => state.units.find(unit => unit.id === id)!;
function checkState(state: GameState) {
  assert.deepEqual(JSON.parse(JSON.stringify(state)), state);
  for (const unit of state.units) {
    assert.ok(Number.isFinite(unit.strength) && Number.isFinite(unit.cohesion));
    assert.equal(AREA_BY_ID[unit.area].domain, unit.domain);
  }
  for (const area of AREAS) {
    const present = state.units.filter(unit => unit.area === area.id);
    assert.ok(new Set(present.map(unit => unit.side)).size <= 1, `coexistence at ${area.id}`);
    assert.ok(present.length <= area.capacity, `overcapacity at ${area.id}`);
  }
}

test('observations are isolated, side-filtered snapshots with no hidden internals', () => {
  const state = createGame();
  state.dispatches.push({ turn: 1, side: 'persian', text: 'Secret move', kind: 'movement' });
  const view = observe(state, 'greek');
  assert.ok(view.units.every(unit => unit.side === 'greek'));
  for (const key of ['rng', 'history', 'initialSeed']) assert.ok(!(key in view));
  assert.ok(!view.dispatches.some(item => item.text === 'Secret move'));
  view.units[0].strength = 0;
  view.control.thessaly = 'greek';
  assert.equal(state.units[0].strength, 85);
  assert.equal(state.control.thessaly, 'persian');
});

test('hidden true-state edits and Greek drafts do not change the Persian view or opponent', () => {
  const state = createGame(), changed = structuredClone(state);
  own(changed, 'athenians').strength = 17;
  own(changed, 'athenians').area = 'attica';
  changed.rng = 111;
  changed.history.push({ turn: 0, greek: [move('athenians', 'megara')], persian: [], choice: 'home' });
  assert.deepEqual(observe(changed, 'persian'), observe(state, 'persian'));
  assert.deepEqual(planOpponent(observe(changed, 'persian')), planOpponent(observe(state, 'persian')));
  assert.deepEqual(advise(observe(changed, 'persian'), []), advise(observe(state, 'persian'), []));
  const before = JSON.stringify(state);
  advise(observe(state, 'greek'), [move('athenians', 'attica')]);
  validateOrders(observe(state, 'greek'), [move('athenians', 'attica')], 'forward');
  assert.equal(JSON.stringify(state), before);
});

test('legality rejects wrong ownership, duplicates, domains, range and final capacity', () => {
  const state = createGame(), view = observe(state, 'greek');
  assert.ok(validateOrders(view, [move('persian-main', 'phocis')], 'forward').length);
  assert.ok(validateOrders(view, [move('athenians', 'attica'), move('athenians', 'megara')], 'forward').length);
  assert.ok(validateOrders(view, [move('athenians', 'saronic')], 'forward').length);
  assert.ok(validateOrders(view, [move('leonidas', 'corinth')], 'forward').length);
  own(state, 'corinthians').area = 'phocis';
  assert.ok(validateOrders(observe(state, 'greek'), [move('athenians', 'thermopylae'), move('corinthians', 'thermopylae')], 'forward').length);
  assert.deepEqual(validateOrders(observe(state, 'greek'), [move('leonidas', 'boeotia'), move('athenians', 'thermopylae'), move('corinthians', 'thermopylae')], 'forward'), []);
});

test('invalid resolution throws without mutation; valid resolution also preserves input', () => {
  const state = createGame(), before = JSON.stringify(state);
  assert.throws(() => resolveTurn(state, [move('leonidas', 'saronic')], [], 'home'));
  assert.equal(JSON.stringify(state), before);
  const next = resolveTurn(state, [], [], 'home');
  assert.equal(JSON.stringify(state), before);
  assert.equal(next.turn, 2);
  assert.notEqual(next, state);
});

test('opposite-edge moves meet once, cannot swap through and resolve field ownership', () => {
  const state = createGame(20);
  state.units = state.units.filter(unit => ['leonidas', 'athenian-fleet', 'persian-main', 'ionian-fleet'].includes(unit.id));
  own(state, 'leonidas').area = 'boeotia';
  own(state, 'persian-main').area = 'phocis';
  state.control.phocis = 'persian';
  const next = resolveTurn(state, [move('leonidas', 'phocis')], [move('persian-main', 'boeotia')], 'forward');
  assert.equal(next.dispatches.filter(item => item.kind === 'battle' && item.text.includes('Opposing movements')).length, 2);
  assert.ok(!next.units.some(unit => unit.side === 'persian' && unit.area === 'boeotia'));
  checkState(next);
});

test('predeclared reserve responds only to an ordinary enemy arrival', () => {
  const state = createGame();
  own(state, 'leonidas').area = 'phocis';
  const reserve: Order = { unitId: 'athenians', kind: 'reserve', target: 'thermopylae', intent: 'balanced' };
  const quiet = resolveTurn(state, [reserve], [], 'forward');
  assert.equal(own(quiet, 'athenians').area, 'boeotia');
  const active = resolveTurn(state, [reserve], [move('persian-main', 'thermopylae')], 'forward');
  assert.ok(active.dispatches.some(item => item.text.includes('predeclared reserve trigger')));
  assert.equal(active.history[0].greek.find(order => order.unitId === 'athenians')!.kind, 'reserve');
  checkState(active);
});

test('trapped defeated formations are lost, not teleported or co-located', () => {
  const state = createGame();
  own(state, 'leonidas').strength = 15;
  own(state, 'athenians').area = 'attica';
  state.control.boeotia = 'persian'; state.control.phocis = 'persian';
  const next = resolveTurn(state, [], [move('persian-main', 'thermopylae'), move('persian-guard', 'thermopylae')], 'home');
  assert.ok(!next.units.some(unit => unit.id === 'leonidas'));
  assert.ok(next.dispatches.some(item => item.text.includes('no safe adjacent retreat')));
  checkState(next);
});

test('retreats can use newly secured positions, but not enemy arrivals', () => {
  const state = createGame();
  own(state, 'leonidas').strength = 15;
  state.units = state.units.filter(unit => !['corinthians', 'persian-wing', 'allied-fleet'].includes(unit.id));
  own(state, 'athenians').area = 'attica';
  state.control.boeotia = 'persian'; state.control.phocis = 'persian';
  const incoming = [move('persian-main', 'thermopylae'), move('persian-guard', 'thermopylae')];
  const rescued = resolveTurn(state, [move('athenians', 'boeotia')], incoming, 'forward');
  assert.equal(own(rescued, 'leonidas').area, 'boeotia');
  assert.equal(rescued.control.boeotia, 'greek');
  checkState(rescued);
  // Without the allied arrival, the old hostile position is not a safe retreat.
  const trapped = resolveTurn(state, [], incoming, 'forward');
  assert.ok(!trapped.units.some(unit => unit.id === 'leonidas'));
  checkState(trapped);
  // Conversely, a newly occupied enemy destination closes an old friendly path.
  state.control.boeotia = 'greek';
  own(state, 'persian-guard').area = 'phocis';
  const cutOff = resolveTurn(state, [], [move('persian-main', 'thermopylae'), move('persian-guard', 'boeotia')], 'forward');
  assert.ok(!cutOff.units.some(unit => unit.id === 'leonidas'));
  assert.equal(cutOff.control.boeotia, 'persian');
  checkState(cutOff);
});

test('supply is connected ownership; losses are progressive cohesion, not manpower', () => {
  const state = createGame();
  own(state, 'athenians').area = 'attica';
  state.control.boeotia = 'persian'; state.control.phocis = 'persian';
  const next = resolveTurn(state, [], [], 'home');
  assert.equal(own(next, 'leonidas').supplied, false);
  assert.equal(own(next, 'leonidas').strength, 85);
  assert.equal(own(next, 'leonidas').cohesion, 78);
  assert.equal(own(next, 'corinthians').cohesion, 93);
});

test('Saronic loss removes Attica source but Corinth loss alone does not end resistance', () => {
  const state = createGame();
  state.control.corinth = 'persian'; state.control.megara = 'persian';
  state.units = state.units.filter(unit => unit.id !== 'corinthians');
  own(state, 'athenians').area = 'attica';
  const supplied = resolveTurn(state, [], [], 'forward');
  assert.equal(own(supplied, 'athenians').supplied, true);
  assert.equal(supplied.outcome, null);
  state.control.saronic = 'persian';
  own(state, 'allied-fleet').area = 'euripus';
  const isolated = resolveTurn(state, [], [], 'forward');
  assert.equal(own(isolated, 'athenians').supplied, false);
});

test('commitment freezes; forward failure recalls survivors without resurrecting dead', () => {
  const state = createGame();
  const first = resolveTurn(state, [], [], 'home');
  assert.throws(() => resolveTurn(first, [], [], 'forward'), /cannot be changed/);
  assert.ok(validateOrders(observe(first, 'greek'), [move('corinthians', 'boeotia')], 'home').length);
  const forward = createGame(); forward.turn = 3; forward.commitment = 'forward';
  own(forward, 'corinthians').area = 'thermopylae';
  forward.control.megara = 'persian';
  const recalled = resolveTurn(forward, [], [], 'forward');
  assert.equal(recalled.commitment, 'broken');
  assert.equal(own(recalled, 'corinthians').area, 'corinth');
  forward.units = forward.units.filter(unit => unit.id !== 'corinthians');
  assert.ok(!resolveTurn(forward, [], [], 'forward').units.some(unit => unit.id === 'corinthians'));
});

test('contact memory refreshes observed clear areas, retaining stale distant sightings', () => {
  const state = createGame();
  state.contacts.greek.push({ area: 'saronic', band: 'strong', seenTurn: 0 }, { area: 'pagasae', band: 'light', seenTurn: 0 });
  own(state, 'athenian-fleet').area = 'euripus';
  const next = resolveTurn(state, [], [], 'home');
  assert.equal(next.contacts.greek.find(contact => contact.area === 'saronic')!.band, 'clear');
  assert.equal(next.contacts.greek.find(contact => contact.area === 'pagasae')!.seenTurn, 0);
});

test('quiet survival is stalemate; objective damage plus supplied forces can win', () => {
  const state = createGame(); state.turn = 6; state.commitment = 'home';
  assert.equal(resolveTurn(state, [], [], 'home').outcome!.result, 'stalemate');
  for (const unit of state.units.filter(unit => unit.side === 'persian' && unit.domain === 'sea')) unit.strength = Math.round(unit.strength * .25);
  const navalOnly = resolveTurn(state, [], [], 'home');
  assert.equal(navalOnly.outcome!.result, 'stalemate');
  assert.match(navalOnly.outcome!.reason, /army attrition: less than 25%; Persian fleet attrition: at least 25%/);
  for (const unit of state.units.filter(unit => unit.side === 'persian')) unit.strength = Math.round(unit.strength * .7);
  assert.equal(resolveTurn(state, [], [], 'home').outcome!.result, 'victory');
  state.commitment = 'broken';
  assert.equal(resolveTurn(state, [], [], 'forward').outcome!.result, 'stalemate');
});

test('seeded runs terminate, bot orders stay legal, replay and invariants hold', () => {
  for (let seed = 0; seed < 30; seed++) {
    let state = createGame(seed);
    while (!state.outcome) {
      const orders = planOpponent(observe(state, 'persian'));
      assert.deepEqual(validateOrders(observe(state, 'persian'), orders, 'home'), []);
      state = resolveTurn(state, [], orders, 'home');
      checkState(state);
      assert.ok(state.history.length <= 6);
    }
    let replay = createGame(seed);
    for (const record of state.history) replay = resolveTurn(replay, record.greek, record.persian, record.choice);
    assert.deepEqual(replay, state);
    assert.throws(() => resolveTurn(state, [], [], 'home'), /ended/);
  }
});

test('mixed legal manoeuvres preserve capacity, domains and exclusive field occupation', () => {
  for (let seed = 0; seed < 80; seed++) {
    let state = createGame(seed), dice = seed;
    const random = () => { dice = (Math.imul(dice, 1664525) + 1013904223) >>> 0; return dice / 4294967296; };
    while (!state.outcome) {
      const view = observe(state, 'greek');
      let orders: Order[] = [];
      for (const unit of view.units) {
        const options = AREA_BY_ID[unit.area].neighbors;
        const target = options[Math.floor(random() * options.length)];
        const kind = random() < .25 ? 'reserve' : 'move';
        const candidate: Order[] = [...orders, { unitId: unit.id, kind, target, intent: random() < .5 ? 'preserve' : 'press' }];
        if (!validateOrders(view, candidate, 'forward').length) orders = candidate;
      }
      state = resolveTurn(state, orders, planOpponent(observe(state, 'persian')), 'forward');
      checkState(state);
      assert.ok(state.history.length <= 6);
    }
  }
});
