# Wargame handover

19 September 2026. First implementation tranche complete; do not treat this as
approval to expand the prototype into the full historical scenario.

## Current state

The Narrow Sea is a playable six-turn, eleven-area Greek coalition exercise.
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

Verified 21 simulation/save tests, five Chromium browser tests, TypeScript and
production bundle; inspected desktop, mobile and after-turn screenshots. Independent
review caught and repaired simultaneous-retreat ownership and seed-zero save issues.
See [playtest 001](docs/playtest-001.md) for actual play evidence and limitations.

## Important abstractions

Six turns have no assigned historical duration. Areas are operational links, not
a researched movement map. Supply is controlled connectivity with cohesion decay.
Territorial control is public occupation news; contacts are dated, strength-banded
sightings. One reserve reacts to an ordinary enemy arrival at its declared adjacent
area. Simultaneous crossings meet at the earlier endpoint in authored area order;
retreat priority uses deterministic formation-ID order. Council recall is a disclosed
exception to ordinary movement. These are revisable fixtures, not general doctrine.

End-of-exercise victory requires supplied Greek land and sea forces, an unbroken
commitment and 25% losses in each Persian domain. No named city is an automatic
loss condition. All-hold still wins seed 480; do not call the prototype balanced.
The opponent is a small north-to-south heuristic, not yet adaptive theatre command.
The adviser is a pressure checklist plus dated-contact explanations, not yet a
calibrated plan-quality assessment. Ship-class differentiation, transport, sieges,
investment, wider diplomacy and historical validation are deferred.

## Next work

Ask Fable for a focused review of topology/opponent/outcome fit, report learnability
and allied commitment, using the actual map and trace. Barry should play a short
exercise and export a record if an outcome is puzzling. Repair the most consequential
observed friction before adding systems or enlarging the map. Agreement between
models does not establish enjoyable play.

Correspondence: project `wargame`, thread 38. Messages 157 and 267–270 contain the
initial critique and response; 281 records Barry's implementation authorization.
Use the board for asynchronous discussion, not as authority to widen the work.
