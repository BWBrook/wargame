# Wargame handover

20 September 2026. Repair-and-experiment tranche complete, including Barry's four
interface/order requests. Do not expand into the full historical scenario yet.

## Current state

The Narrow Sea 0.2 is a playable six-turn, eleven-area Greek coalition exercise.
Source is TypeScript; UI is local DOM/SVG served by Vite. No backend, paid model,
API key, generated artwork, publication or licence change is involved.

- `src/game/scenario.ts`: synthetic roster, schematic geography and capacities.
- `src/game/engine.ts`: immutable resolution, filtered observations, advice and
  validation. `ai.ts` uses only its own observation to select Persian orders.
- `src/game/save.ts`: JSON export/import, history replay validation and local
  save contract. Saves contain true state; this is not an anti-cheating platform.
- `src/main.ts` and `src/style.css`: map, controls, report desk and save UI.
- `tests/engine.test.ts`, `tests/save.test.ts`, `tests/browser/play.spec.ts`:
  simulation contracts and real-browser command flows.
- `scripts/exercise.ts`: three reproducible player-visible policy traces.
- `scripts/experiments.ts` and `experiment-model.ts`: 7,200 paired-seed policy
  games and offline candidate scoring. `ai.ts`'s optional preserve doctrine is
  experimental; the ordinary game's default opponent remains unchanged.

Verified 33 engine/save/experiment tests, 11 Chromium browser tests, TypeScript and
production bundle. Screenshots reviewed for new briefing and desktop/mobile tables.
The native dropdowns now retain DOM identity; selected units/disclosures persist.
See [playtest 002](docs/playtest-002.md) for current evidence and candidate rejection.
The first snapshot remains in [playtest 001](docs/playtest-001.md).

Save format/rules version is 2. Old browser saves are retained as unreadable raw
data for download, not silently migrated or erased. New exercise/import is explicit.

## Important abstractions

Six turns have no assigned historical duration. Areas are operational links, not
a researched movement map. Supply is controlled connectivity with cohesion decay.
Territorial control is public occupation news; contacts are dated, strength-banded
sightings. One reserve reacts to an ordinary enemy arrival at its declared adjacent
area. Simultaneous crossings meet at the earlier endpoint in authored area order;
retreat priority uses deterministic formation-ID order. Council recall is a disclosed
exception to ordinary movement; its capacity self-count defect is repaired.
Hold at all costs forbids retreat on battle defeat for that turn, causing destruction
if overrun; it adds no combat bonus or delaying mechanic. Reissue each turn. Capacity
and council withdrawals remain separate. These are fixtures, not general doctrine.

The legacy diagnostic target requires supplied Greek land and sea forces, an
unbroken commitment and 25% losses in each Persian domain. Its positive result now
says "Attrition target met — campaign unresolved"; it is NOT a valid campaign
victory measure. No named city is an automatic loss condition. All-hold still meets
this target; do not call the prototype balanced or the scoring repair finished.
The opponent is a small north-to-south heuristic, not yet adaptive theatre command.
The adviser is a pressure checklist plus dated-contact explanations, not yet a
calibrated plan-quality assessment. Ship-class differentiation, transport, sieges,
investment, wider diplomacy and historical validation are deferred.

## Next work

Ask Fable to distinguish invasion checked / resistance remains / defence defeated
using operational state evidence without a mandatory city. The tested positional
candidate covertly makes Megara necessary for victory and adds per-unit threshold
artefacts; it is not adopted. The preservation AI can deadlock rather than replan;
it is not adopted either. Forward-service plans now actually use the permission,
but neither tested plan benefits over the corresponding restricted home fallback.
Do not add naval service restrictions until that dilemma is better justified.

Prolonged-isolation exhaustion and Persian naval/land sustainment remain separate
future experiments, not delivered fixes. Barry can now assess interface clarity,
tables, orders and reports; export confusing play records. Avoid interpreting the
current score as strategic success. Do not add systems merely to change win rates.

Correspondence: project `wargame`, thread 38. Messages 157 and 267–270 contain the
initial critique and response; 281 records first implementation authorization;
286–288 contain Fable's first executable review and Astra's reproduction/pushback.
Use the board for asynchronous discussion, not as authority to widen the work.
