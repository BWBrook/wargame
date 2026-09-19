import test from 'node:test';
import assert from 'node:assert/strict';
import { advise, createGame, observe, resolveTurn, validateOrders } from '../src/game/engine.ts';
import { planOpponent } from '../src/game/ai.ts';
import { AREAS, AREA_BY_ID } from '../src/game/scenario.ts';
import type { GameState, Order } from '../src/game/types.ts';

const move = (unitId: string, target: string): Order => ({ unitId, kind: 'move', target, intent: 'balanced' });
const stand = (unitId: string): Order => ({ unitId, kind: 'stand', target: null, intent: 'balanced' });
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

test('council recall preserves a unit already at a full home, but rejects full or unsafe incoming recall', () => {
  const state = createGame(); state.turn = 3; state.commitment = 'forward';
  state.control.megara = 'persian';
  for (const unit of state.units.filter(unit => unit.side === 'greek' && unit.domain === 'land')) unit.area = 'corinth';
  const atHome = resolveTurn(state, [], [], 'forward');
  assert.equal(atHome.commitment, 'broken');
  assert.equal(own(atHome, 'corinthians').area, 'corinth');
  assert.equal(atHome.units.filter(unit => unit.area === 'corinth').length, 3);
  checkState(atHome);
  own(state, 'corinthians').area = 'attica';
  state.units.push({ ...own(state, 'athenians'), id: 'home-guard', name: 'Home guard' });
  const incomingFull = resolveTurn(state, [], [], 'forward');
  assert.ok(!incomingFull.units.some(unit => unit.id === 'corinthians'));
  assert.equal(incomingFull.units.filter(unit => unit.area === 'corinth').length, 3);
  checkState(incomingFull);
  state.units = state.units.filter(unit => !['home-guard', 'athenians', 'leonidas'].includes(unit.id));
  state.control.corinth = 'persian';
  own(state, 'persian-main').area = 'corinth';
  const unsafe = resolveTurn(state, [], [], 'forward');
  assert.ok(!unsafe.units.some(unit => unit.id === 'corinthians'));
  assert.equal(unsafe.control.corinth, 'persian');
  checkState(unsafe);
});

test('hold at all costs requires null target and balanced intent; advice states its consequence', () => {
  const view = observe(createGame(), 'greek');
  assert.deepEqual(validateOrders(view, [stand('leonidas')], 'home'), []);
  assert.ok(validateOrders(view, [{ ...stand('leonidas'), target: 'boeotia' }], 'home').length);
  for (const intent of ['press', 'preserve'] as const) assert.ok(validateOrders(view, [{ ...stand('leonidas'), intent }], 'home').length);
  assert.ok(advise(view, [stand('leonidas')]).reasons.some(reason => reason.includes('overrun rather than retreat') && reason.includes('no combat bonus')));
});

test('hold at all costs overrides a safe retreat and eliminates a defeated contingent', () => {
  const state = createGame();
  const enemy = [move('persian-main', 'thermopylae'), move('persian-guard', 'thermopylae')];
  const ordinary = resolveTurn(state, [], enemy, 'home');
  assert.equal(own(ordinary, 'leonidas').area, 'boeotia');
  const committed = resolveTurn(state, [stand('leonidas')], enemy, 'home');
  assert.ok(!committed.units.some(unit => unit.id === 'leonidas'));
  const report = observe(committed, 'greek').dispatches.filter(item => item.kind === 'battle').map(item => item.text).join('\n');
  assert.match(report, /Spartan contingent held at all costs as ordered and was overrun/);
  assert.match(report, /No reliable enemy casualty estimate/);
  assert.ok(!report.includes('Spartan contingent falls back'));
  const record = committed.history[0];
  assert.deepEqual(resolveTurn(createGame(), record.greek, record.persian, record.choice), committed);
  checkState(committed);
});

test('winning hold at all costs receives no power or casualty bonus, and is not sticky next turn', () => {
  const state = createGame();
  own(state, 'persian-main').strength = 40;
  const enemy = [move('persian-main', 'thermopylae')];
  const ordinary = resolveTurn(state, [], enemy, 'home');
  const committed = resolveTurn(state, [stand('leonidas')], enemy, 'home');
  assert.equal(own(committed, 'leonidas').area, 'thermopylae');
  assert.deepEqual(committed.units, ordinary.units);
  assert.equal(committed.rng, ordinary.rng);
  const next = resolveTurn(committed, [], [], 'home');
  assert.equal(next.history[1].greek.find(order => order.unitId === 'leonidas')!.kind, 'hold');
});

test('hold at all costs applies equally to defeated squadrons', () => {
  const state = createGame();
  const enemy = [move('phoenician-fleet', 'artemisium'), move('ionian-fleet', 'artemisium')];
  assert.equal(own(resolveTurn(state, [], enemy, 'home'), 'athenian-fleet').area, 'euripus');
  const committed = resolveTurn(state, [stand('athenian-fleet')], enemy, 'home');
  assert.ok(!committed.units.some(unit => unit.id === 'athenian-fleet'));
  assert.ok(observe(committed, 'greek').dispatches.some(item => item.text.includes('Athenian squadron held at all costs')));
  checkState(committed);
});

test('battle aftermath gives bands and uncertainty without enemy retreat destinations or exact losses', () => {
  const state = createGame(); own(state, 'persian-main').strength = 40;
  const won = resolveTurn(state, [], [move('persian-main', 'thermopylae')], 'home');
  const winningReports = observe(won, 'greek').dispatches.filter(item => item.kind === 'battle').map(item => item.text).join('\n');
  assert.match(winningReports, /Observed enemy losses were substantial/);
  assert.match(winningReports, /withdrawal destination and remaining strength are unconfirmed/);
  assert.ok(!winningReports.includes('Main contingent'));
  assert.ok(!winningReports.includes('falls back to Thessaly'));
  assert.ok(!winningReports.includes('Experience and bounded'));
  assert.ok(!/enemy (?:force )?lost \d/i.test(winningReports));
  const lost = resolveTurn(createGame(), [], [move('persian-main', 'thermopylae'), move('persian-guard', 'thermopylae')], 'home');
  const losingReports = observe(lost, 'greek').dispatches.filter(item => item.kind === 'battle').map(item => item.text).join('\n');
  assert.match(losingReports, /Withdrawal reports suggest light enemy losses, but the estimate is uncertain/);
  assert.match(losingReports, /subsequent dispositions are unconfirmed/);
  const persianView = observe(lost, 'persian');
  assert.ok(!persianView.dispatches.some(item => item.text.includes('Spartan contingent falls back')));
  const enemyStand = createGame();
  own(enemyStand, 'leonidas').area = 'boeotia';
  own(enemyStand, 'persian-main').area = 'thermopylae';
  own(enemyStand, 'persian-main').strength = 15;
  const overrun = resolveTurn(enemyStand, [move('leonidas', 'thermopylae')], [stand('persian-main')], 'home');
  const overrunReports = observe(overrun, 'greek').dispatches.filter(item => item.kind === 'battle').map(item => item.text).join('\n');
  assert.match(overrunReports, /Observed enemy losses were heavy/);
  assert.match(overrunReports, /Organized enemy resistance at the position collapsed/);
  assert.ok(!overrunReports.includes('Main contingent'));
  assert.ok(!overrunReports.includes('held at all costs as ordered'));
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
  assert.match(resolveTurn(state, [], [], 'home').outcome!.title, /campaign unresolved/);
  assert.match(resolveTurn(state, [], [], 'home').outcome!.reason, /does not establish that the invasion was checked/);
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
