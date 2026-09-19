import './style.css';
import { createGame, observe, validateOrders, advise } from './game/engine.ts';
import { AREAS, AREA_BY_ID } from './game/scenario.ts';
import { commitSave, deserializeSave, SAVE_KEY, serializeSave } from './game/save.ts';
import type { Area, Intent, Observation, Order, SaveGame, Unit } from './game/types.ts';

const root = document.querySelector<HTMLDivElement>('#app')!;
let save: SaveGame = { version: 1, state: createGame(), orders: [], choice: 'home' };
let selected = 'leonidas';
let notice = '';
let saveStatus = 'Local session';
let corruptSave: string | null = null;
let showBrief = false;
let confirmCommit = false;
let confirmRestart = false;
let showSession = false;
try {
  const stored = localStorage.getItem(SAVE_KEY);
  if (stored) {
    try { save = deserializeSave(stored); saveStatus = 'Resumed locally'; }
    catch (error) { corruptSave = stored; notice = `Saved exercise could not be loaded. ${(error as Error).message} Your original save has been kept. Download it before starting again.`; }
  } else showBrief = true;
} catch { notice = 'Browser storage is unavailable. Export a save to keep your exercise.'; }

function esc(value: unknown): string {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
}
function condition(unit: Unit): string { return unit.cohesion >= 75 ? 'Steady' : unit.cohesion >= 45 ? 'Shaken' : 'Disordered'; }
function strength(unit: Unit): string { return unit.strength >= 65 ? 'Effective' : unit.strength >= 35 ? 'Reduced' : 'Depleted'; }
function draft(unit: Unit): Order { return save.orders.find(order => order.unitId === unit.id) ?? { unitId: unit.id, kind: 'hold', target: null, intent: 'balanced' }; }

function persist(): void {
  if (corruptSave) { saveStatus = 'Original save preserved'; return; }
  try { localStorage.setItem(SAVE_KEY, serializeSave(save)); saveStatus = 'Saved on this browser'; }
  catch { saveStatus = 'Not saved — export a copy'; notice = 'Browser storage could not save this exercise. Use Export save in Session.'; }
}

function download(filename: string, body: string, mime = 'application/json'): void {
  const url = URL.createObjectURL(new Blob([body], { type: mime }));
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function stage(order: Order): void {
  save.orders = [...save.orders.filter(item => item.unitId !== order.unitId), order];
  notice = ''; persist(); render();
}

function map(view: Observation): string {
  const current = view.units.find(unit => unit.id === selected);
  const paths = AREAS.flatMap(area => area.neighbors.filter(id => area.id < id).map(id => {
    const other = AREA_BY_ID[id];
    return `<path class="connection ${area.domain}" d="M${area.x},${area.y} L${other.x},${other.y}"/>`;
  })).join('');
  const orders = save.orders.filter(order => order.kind !== 'hold' && order.target).map(order => {
    const unit = view.units.find(item => item.id === order.unitId);
    if (!unit) return '';
    const from = AREA_BY_ID[unit.area]; const to = AREA_BY_ID[order.target!];
    return `<path class="order-line ${order.kind === 'reserve' ? 'reserve' : ''}" d="M${from.x},${from.y} Q${(from.x + to.x) / 2 - 15},${(from.y + to.y) / 2 - 15} ${to.x},${to.y}" marker-end="url(#arrow)"/>`;
  }).join('');
  const regions = AREAS.map(area => {
    const contact = view.contacts.find(item => item.area === area.id && item.band !== 'clear');
    const own = view.units.filter(unit => unit.area === area.id);
    const possible = current && current.domain === area.domain && AREA_BY_ID[current.area].neighbors.includes(area.id);
    const owner = view.control[area.id] ?? 'neutral';
    return `<g class="area ${area.domain} ${owner} ${possible ? 'reachable' : ''}" data-area="${area.id}" role="button" tabindex="0" aria-label="${esc(area.name)}: ${esc(area.terrain)}. ${possible ? 'Available destination.' : 'Inspect area.'}">
      <circle class="area-halo" cx="${area.x}" cy="${area.y}" r="27"/>
      <circle class="area-centre" cx="${area.x}" cy="${area.y}" r="${area.domain === 'sea' ? 7 : 6}"/>
      <text class="area-name" x="${area.x}" y="${area.y + 30}" text-anchor="middle">${esc(area.name)}</text>
      <text class="area-capacity" x="${area.x}" y="${area.y + 46}" text-anchor="middle">${area.domain === 'land' ? 'LAND' : 'SEA'} · ${area.capacity} formations</text>
      ${contact ? `<g class="contact ${contact.seenTurn < view.turn ? 'old' : ''}"><rect x="${area.x + 19}" y="${area.y - 34}" width="33" height="24" rx="4"/><text x="${area.x + 35}" y="${area.y - 17}" text-anchor="middle">${contact.seenTurn < view.turn ? '?' : '⚑'}</text><title>${esc(contact.band)} enemy report, turn ${contact.seenTurn}; not an exact count</title></g>` : ''}
      ${own.map((unit, index) => `<g class="unit-token ${unit.id === selected ? 'selected' : ''}" data-unit="${unit.id}" tabindex="0" role="button" aria-label="Select ${esc(unit.name)}" transform="translate(${area.x - (own.length * 33) / 2 + index * 33},${area.y - 39})"><rect width="30" height="25" rx="4"/><path d="${unit.domain === 'sea' ? 'M5 16 L9 21 L22 21 L26 16 Z M15 5 L15 16 M16 5 L24 14 L16 14' : 'M7 5 L23 5 L23 15 Q15 23 7 15 Z M11 8 L19 16 M19 8 L11 16'}"/><title>${esc(unit.name)} · ${condition(unit)}</title></g>`).join('')}
    </g>`;
  }).join('');
  return `<svg id="theatre-map" viewBox="0 0 780 690" aria-label="Schematic theatre map. Select a formation, then an adjacent named area to draft a move.">
    <defs>
      <pattern id="water" width="40" height="32" patternUnits="userSpaceOnUse"><path d="M0 16 Q10 10 20 16 T40 16" fill="none" stroke="#8daeb3" stroke-width=".6" opacity=".45"/></pattern>
      <pattern id="paper" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".5" fill="#917d58" opacity=".13"/></pattern>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#b46c27"/></marker>
    </defs>
    <rect width="780" height="690" fill="#c0d4d3"/><rect width="780" height="690" fill="url(#water)"/>
    <path class="landmass" d="M0 0 H420 L410 55 L440 90 L395 135 L430 175 L410 205 L450 240 L420 285 L448 335 L482 370 L535 400 L555 454 L524 495 L469 480 L405 510 L350 544 L290 568 L260 600 L297 649 L250 690 H0 Z"/>
    <path class="landmass" d="M480 190 L501 210 L504 265 L526 310 L552 341 L559 377 L535 357 L508 322 L486 276 L475 228 Z"/>
    <path class="island" d="M465 534 L484 519 L501 532 L492 548 L471 550 Z"/>
    <path fill="url(#paper)" d="M0 0 H420 L410 205 L448 335 L555 454 L350 544 L297 649 L250 690 H0 Z"/>
    <g class="mountains"><path d="M45 180 l16 -30 16 30 m-7 0 16 -26 16 26 M50 395 l16 -30 16 30 m-5 0 16 -23 16 23 M140 415 l16 -30 16 30"/></g>
    <text class="sea-label" x="705" y="465" transform="rotate(-90 705 465)">AEGEAN SEA</text>
    <text class="map-note" x="24" y="660">SCHEMATIC · DISTANCES AND FORCES ARE PROVISIONAL</text>
    <g class="compass" transform="translate(715 75)"><path d="M0 -20 V20 M-12 8 L0 -20 L12 8"/><text y="-30" text-anchor="middle">N</text></g>
    ${paths}${orders}${regions}
  </svg>`;
}

function inspector(view: Observation): string {
  const unit = view.units.find(item => item.id === selected) ?? view.units[0];
  if (!unit) return '<p>No formations remain under your command.</p>';
  selected = unit.id;
  const order = draft(unit);
  const area = AREA_BY_ID[unit.area];
  return `<div class="eyebrow">FORMATION ORDERS</div>
    <label class="sr-only" for="formation">Formation</label>
    <select id="formation">${view.units.map(item => `<option value="${item.id}" ${item.id === selected ? 'selected' : ''}>${esc(item.name)}</option>`).join('')}</select>
    <p class="station">${unit.domain === 'sea' ? 'Squadron' : 'Land formation'} · ${esc(area.name)}</p>
    <div class="condition"><span>${strength(unit)}</span><span>${condition(unit)}</span><span class="${unit.supplied ? '' : 'warning'}">${unit.supplied ? 'Supplied' : 'Supply strained'}</span></div>
    <label for="order-kind">Standing instruction</label>
    <select id="order-kind" ${view.outcome ? 'disabled' : ''}>
      <option value="hold" ${order.kind === 'hold' ? 'selected' : ''}>Hold & recover</option>
      <option value="move" ${order.kind === 'move' ? 'selected' : ''}>Move / engage</option>
      <option value="reserve" ${order.kind === 'reserve' ? 'selected' : ''}>Reserve for one approach</option>
    </select>
    ${order.kind !== 'hold' ? `<label for="destination">${order.kind === 'reserve' ? 'Respond if attacked here' : 'Destination'}</label><select id="destination" ${view.outcome ? 'disabled' : ''}>${area.neighbors.map(id => `<option value="${id}" ${order.target === id ? 'selected' : ''}>${esc(AREA_BY_ID[id].name)}</option>`).join('')}</select>` : ''}
    <fieldset class="intent" ${view.outcome ? 'disabled' : ''}><legend>Combat intent</legend>
      ${(['preserve', 'balanced', 'press'] as Intent[]).map(value => `<label><input type="radio" name="intent" value="${value}" ${order.intent === value ? 'checked' : ''}/><span>${value === 'preserve' ? 'Preserve' : value === 'press' ? 'Press' : 'Measured'}</span></label>`).join('')}
    </fieldset>
    <p class="small">${order.intent === 'press' ? 'Commit aggressively; accept greater losses.' : order.intent === 'preserve' ? 'Protect the formation; concede ground more readily.' : 'Balance the chance of holding ground against losses.'}</p>
    ${order.kind === 'reserve' ? '<p class="small">One reserve order per side. Only an enemy arrival at this named area triggers the response. The commander acts after orders are locked.</p>' : ''}
    <button id="clear-order" class="text-button" ${view.outcome ? 'disabled' : ''}>Reset this order</button>
    <div class="area-description"><strong>${esc(area.terrain)} · capacity ${area.capacity}</strong><p>${esc(area.description)}</p></div>`;
}

function brief(): string {
  return `<dialog id="brief-dialog" open aria-labelledby="brief-title"><div class="dialog-content"><div class="eyebrow">YOUR FIRST COMMAND</div><h2 id="brief-title">The Narrow Sea</h2><p>You command five Greek formations. An invading army can use two land approaches, while its fleet pushes south. You have six turns to check that advance and retain a viable coalition.</p><ol><li>Select a blue formation on the map or in the orders panel.</li><li>Choose an adjacent destination, or hold. Pick a combat intent.</li><li>Read your staff assessment and review all draft orders.</li><li>Commit once. Both sides move; the enemy does not see your drafts.</li></ol><p>Choose the Corinthians’ service terms before the first commitment. Reports may be old or incomplete. Territory colours are public occupation news; enemy flags are sightings, not exact strength.</p><p class="small">A short, schematic command exercise. Six turns are not six historical weeks. Force values, routes and victory thresholds are test fixtures. No full diplomacy, siege or troop transport yet.</p><button class="primary" id="close-brief">Enter headquarters</button></div></dialog>`;
}

function render(): void {
  const view = observe(save.state, 'greek');
  if (!view.units.some(unit => unit.id === selected)) selected = view.units[0]?.id ?? '';
  const errors = view.outcome ? [] : validateOrders(view, save.orders, save.choice);
  const advice = advise(view, save.orders);
  const recent = view.dispatches.filter(item => item.turn === Math.max(0, view.turn - 1));
  root.innerHTML = `<header class="masthead"><div><div class="eyebrow">COALITION HEADQUARTERS · 480 BC</div><h1>The Narrow Sea</h1><p>A command exercise</p></div><div class="header-actions"><button id="help" class="ghost">Briefing</button><button id="session-toggle" class="ghost" aria-expanded="${showSession}">Session</button><div class="turn"><span>${view.outcome ? 'EXERCISE' : 'PLANNING'}</span><strong>${view.outcome ? 'Complete' : `Turn ${view.turn} / ${view.maxTurns}`}</strong></div></div></header>
    ${showSession ? `<section class="session-bar" aria-label="Session controls"><span>${esc(saveStatus)}</span><button id="export-save">Export save</button><button id="export-record">Export play record</button><label class="file-label" for="import-save">Import save<input id="import-save" type="file" accept=".json,application/json"/></label><button id="restart">New exercise</button>${corruptSave ? '<button id="recover-save">Download original save</button>' : ''}</section>` : ''}
    ${notice ? `<div class="notice" role="status">${esc(notice)}</div>` : ''}
    ${view.outcome ? `<section class="outcome ${view.outcome.result}" aria-live="polite"><div class="eyebrow">AFTER SIX TURNS, OR LOSS OF A VIABLE FORCE</div><h2>${esc(view.outcome.title)}</h2><p>${esc(view.outcome.reason)}</p><button id="restart-outcome">Try another plan</button><button id="export-record-outcome">Export play record</button></section>` : ''}
    <main class="workspace"><section class="theatre" aria-labelledby="theatre-title"><div class="map-heading"><h2 id="theatre-title">The theatre</h2><span>Draft freely · commit together</span></div>${map(view)}<div class="map-legend"><span><i class="greek-key"></i> Greek control</span><span><i class="persian-key"></i> Persian control</span><span><i class="draft-key"></i> Draft order</span><span>? Last-known contact</span></div></section>
    <aside class="orders-panel" aria-label="Formation command">${inspector(view)}</aside></main>
    <section class="command-desk"><div class="staff"><div class="eyebrow">AT THE COMMANDER’S TABLE</div><h2>Staff assessment</h2><p class="assessment">${esc(advice.assessment)}</p><p class="confidence"><span>Intelligence</span> ${esc(advice.confidence)}</p><ul>${advice.reasons.map(reason => `<li>${esc(reason)}</li>`).join('')}</ul><details><summary>Reports from the approaches</summary><ul class="contact-list">${view.contacts.filter(contact => contact.band !== 'clear').map(contact => `<li><strong>${esc(AREA_BY_ID[contact.area].name)}</strong> · ${esc(contact.band)} enemy presence · ${contact.seenTurn === view.turn ? 'current report' : `last seen turn ${contact.seenTurn}`}</li>`).join('') || '<li>No enemy contacts reported.</li>'}</ul></details></div>
    <div class="commit-panel"><div class="eyebrow">ALLIED COMMITMENT</div><h2>The Corinthian contingent</h2>
      ${view.turn === 1 && !view.outcome ? `<label for="commitment">Service terms</label><select id="commitment"><option value="home" ${save.choice === 'home' ? 'selected' : ''}>Keep the southern approaches</option><option value="forward" ${save.choice === 'forward' ? 'selected' : ''}>Request forward service</option></select><p class="small">Home service limits the contingent to Megara and Corinth. Forward service releases it for the wider theatre, provided Megara is still held after turn 3. Failure means withdrawal and a broken commitment.</p>` : `<p class="pledge-status">${({ unsettled: 'Awaiting your instruction', home: 'Home service · Megara and Corinth only', forward: 'Forward service · hold Megara through turn 3', honoured: 'Forward commitment honoured', broken: 'Commitment broken · contingent withdrawn' })[view.commitment]}</p>`}
      <details><summary>Exercise objective & support rules</summary><p class="small">At the end of turn 6, retain a supplied army and fleet, honour your commitment, and inflict at least 25% losses on each of the Persian army and fleet. These are provisional exercise thresholds, assessed at the end—not a live enemy-strength meter. Losing all land forces or all squadrons ends the exercise early.</p><p class="small">Supply follows continuously controlled routes. Corinth supplies the army; Attica is an alternative source while both Attica and the Saronic Gulf are held. The Saronic Gulf supplies your fleet. Isolated formations lose cohesion, not manpower. Unopposed supplied holds restore cohesion, not casualties.</p><p class="small">Capacity limits apply separately to each side. Opposite movements on one route meet at its northern endpoint, with no prepared-defence bonus for movers. A defeated force needs a safe adjacent retreat with space. Field control is not a siege result.</p></details>
      <details id="orders-review"><summary>Review orders · ${save.orders.length} drafted</summary><ul>${view.units.map(unit => { const order = draft(unit); return `<li><strong>${esc(unit.name)}</strong><br/>${order.kind === 'hold' ? 'Hold' : `${order.kind === 'reserve' ? 'Reserve for' : 'Move to'} ${esc(AREA_BY_ID[order.target!]?.name ?? '—')}`} · ${order.intent === 'balanced' ? 'measured' : order.intent}</li>`; }).join('')}</ul></details>
      ${errors.length ? `<div class="order-errors" role="alert"><strong>Revise these orders</strong><ul>${errors.map(error => `<li>${esc(error)}</li>`).join('')}</ul></div>` : ''}
      <button id="commit" class="primary commit" ${view.outcome || errors.length || corruptSave ? 'disabled' : ''}>${view.outcome ? 'Exercise complete' : `Commit turn ${view.turn}`} <span>→</span></button><p class="save-status" role="status">${esc(saveStatus)} · no timer</p>
    </div></section>
    <section class="dispatches" aria-labelledby="dispatch-title"><div class="eyebrow">AFTER ACTION</div><h2 id="dispatch-title">${view.turn === 1 ? 'Opening dispatch' : `Reports from turn ${Math.min(view.turn - 1, view.maxTurns)}`}</h2><div class="dispatch-list">${recent.map(item => `<article class="dispatch ${item.kind}"><span>${item.kind}</span><p>${esc(item.text)}</p></article>`).join('') || '<p>Your staff awaits the first commitment. Unchanged formations will hold their positions.</p>'}</div>${view.turn > 2 ? `<details><summary>Earlier dispatches</summary>${view.dispatches.filter(item => item.turn < view.turn - 1).map(item => `<p><strong>Turn ${item.turn}.</strong> ${esc(item.text)}</p>`).join('')}</details>` : ''}</section>
    <footer><span>THE NARROW SEA · PROTOTYPE 0.1</span><span>Local-first · synthetic force values · no historical outcome is scripted</span></footer>
    ${showBrief ? brief() : ''}
    ${confirmCommit ? `<dialog open id="commit-dialog" aria-labelledby="commit-title"><div class="dialog-content"><div class="eyebrow">ORDERS ARE READY</div><h2 id="commit-title">Commit turn ${view.turn}?</h2><p>All ${view.units.length} formations will act on their orders. Undrafted formations hold. Your opponent commits independently; resolution cannot be undone.</p><div class="dialog-actions"><button id="cancel-commit">Return to planning</button><button id="confirm-commit" class="primary">Resolve orders</button></div></div></dialog>` : ''}
    ${confirmRestart ? `<dialog open id="restart-dialog" aria-labelledby="restart-title"><div class="dialog-content"><h2 id="restart-title">Start a new exercise?</h2><p>This replaces the locally saved exercise. Export a save first if you want to keep it. The same starting seed lets you compare different plans.</p><button id="cancel-restart">Keep this exercise</button><button id="confirm-restart" class="primary">Start afresh</button></div></dialog>` : ''}`;
  bind(view);
  const dialog = root.querySelector<HTMLDialogElement>('dialog');
  if (dialog) { dialog.removeAttribute('open'); dialog.showModal(); dialog.addEventListener('cancel', () => { showBrief = false; confirmCommit = false; confirmRestart = false; render(); }); }
}

function bind(view: Observation): void {
  const on = (id: string, fn: () => void) => document.getElementById(id)?.addEventListener('click', fn);
  on('help', () => { showBrief = true; render(); });
  on('close-brief', () => { showBrief = false; render(); });
  on('session-toggle', () => { showSession = !showSession; render(); });
  on('export-save', () => download('narrow-sea-save.json', serializeSave(save)));
  const exportRecord = () => {
    const turns = save.state.history.map(record => `## Turn ${record.turn}\n\nCommitment: ${record.choice}\n\nOrders:\n${record.greek.map(order => `- ${order.unitId}: ${order.kind}${order.target ? ` → ${AREA_BY_ID[order.target].name}` : ''}; ${order.intent}`).join('\n')}\n\nReports:\n${view.dispatches.filter(item => item.turn === record.turn).map(item => `- ${item.text}`).join('\n')}`).join('\n\n');
    const log = `# The Narrow Sea — player-visible record\n\nSchematic six-turn exercise; not a historical reconstruction.\n\n${view.outcome ? `${view.outcome.title}: ${view.outcome.reason}\n\n` : ''}${turns || 'No turns committed.'}`;
    download('narrow-sea-play-record.md', log, 'text/markdown');
  };
  on('export-record', exportRecord); on('export-record-outcome', exportRecord);
  on('recover-save', () => { if (corruptSave) download('narrow-sea-original-save.json', corruptSave); });
  on('restart', () => { confirmRestart = true; render(); });
  on('restart-outcome', () => { confirmRestart = true; render(); });
  on('cancel-restart', () => { confirmRestart = false; render(); });
  on('confirm-restart', () => {
    save = { version: 1, state: createGame(), orders: [], choice: 'home' };
    selected = 'leonidas'; corruptSave = null; notice = ''; confirmRestart = false;
    persist(); render();
  });
  on('commit', () => { confirmCommit = true; render(); });
  on('cancel-commit', () => { confirmCommit = false; render(); });
  on('confirm-commit', () => {
    try { save = commitSave(save); notice = save.state.outcome ? 'Exercise complete. Review the outcome and dispatches.' : 'Orders resolved. Read the dispatches before your next commitment.'; persist(); }
    catch (error) { notice = (error as Error).message; }
    confirmCommit = false; render();
    document.querySelector('#dispatch-title')?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
  });
  document.querySelector('#import-save')?.addEventListener('change', async event => {
    const file = (event.target as HTMLInputElement).files?.[0]; if (!file) return;
    try {
      if (file.size > 500_000) throw new Error('This file is too large for an exercise save.');
      const imported = deserializeSave(await file.text());
      save = imported; corruptSave = null; selected = save.state.units.find(unit => unit.side === 'greek')?.id ?? '';
      notice = 'Save imported and its turn record verified.'; persist();
    } catch (error) { notice = `Import rejected; your current exercise is unchanged. ${(error as Error).message}`; }
    render();
  });
  document.querySelector('#formation')?.addEventListener('change', event => { selected = (event.target as HTMLSelectElement).value; render(); });
  document.querySelector('#commitment')?.addEventListener('change', event => { save.choice = (event.target as HTMLSelectElement).value as 'home' | 'forward'; persist(); render(); });
  const unit = view.units.find(item => item.id === selected);
  if (!unit || view.outcome) return;
  document.querySelector('#order-kind')?.addEventListener('change', event => {
    const kind = (event.target as HTMLSelectElement).value as Order['kind'];
    stage({ ...draft(unit), kind, target: kind === 'hold' ? null : draft(unit).target ?? AREA_BY_ID[unit.area].neighbors[0] });
    document.querySelector<HTMLSelectElement>('#order-kind')?.focus();
  });
  document.querySelector('#destination')?.addEventListener('change', event => { stage({ ...draft(unit), target: (event.target as HTMLSelectElement).value }); document.querySelector<HTMLSelectElement>('#destination')?.focus(); });
  document.querySelectorAll<HTMLInputElement>('input[name="intent"]').forEach(input => input.addEventListener('change', () => { stage({ ...draft(unit), intent: input.value as Intent }); document.querySelector<HTMLInputElement>(`input[value="${input.value}"]`)?.focus(); }));
  on('clear-order', () => { save.orders = save.orders.filter(order => order.unitId !== selected); persist(); render(); });
  document.querySelectorAll<SVGGElement>('[data-unit]').forEach(node => {
    const select = (event: Event) => { event.stopPropagation(); selected = node.dataset.unit!; notice = ''; render(); };
    node.addEventListener('click', select);
    node.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(event); } });
  });
  document.querySelectorAll<SVGGElement>('[data-area]').forEach(node => {
    const activate = () => {
      const area: Area = AREA_BY_ID[node.dataset.area!];
      if (area.id === unit.area) { stage({ ...draft(unit), kind: 'hold', target: null }); return; }
      if (area.domain === unit.domain && AREA_BY_ID[unit.area].neighbors.includes(area.id)) stage({ ...draft(unit), kind: 'move', target: area.id });
      else { notice = `${area.name}: ${area.description} Select a formation with a connected route to order a move here.`; render(); }
    };
    node.addEventListener('click', activate);
    node.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
  });
}

// Browser QA exposes only what this commander may see, never the full state.
Object.assign(window, { render_game_to_text: () => JSON.stringify({ ...observe(save.state, 'greek'), draftOrders: save.orders, selected }) });
render();
