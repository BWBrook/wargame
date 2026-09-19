# First exercise: implementation checks and play evidence

19 September 2026. This is an engineering playtest and a small policy comparison,
not Barry's playtest, historical validation or evidence that the game is balanced.

## What is playable

`npm run dev` opens a six-turn Greek command exercise: five formations, eleven
areas, simultaneous orders, a named-area reserve, combat intent, retreats,
controlled-route supply and one Corinthian service commitment. Orders and drafts
save locally. Session controls export/import a replay-verified save or export a
player-visible Markdown record containing Greek orders and Greek dispatches.
The save file necessarily contains the complete simulation; it is not an
anti-cheating boundary. The UI, adviser and enemy policy receive filtered views.

The [opening map](prototype-map.png) is authored SVG, not a historical map source.
The eventual full 480 BC scenario still needs researched geography, force
composition, logistics and an appropriate time scale.

## Verification

- Native simulation/save tests cover observation isolation, deterministic replay,
  simultaneous conflict, reserves, capacity, retreats, naval-dependent supply,
  service commitments, outcomes and invalid imports. The seeded checks include
  30 complete opponent/replay runs and 80 mixed-order invariant runs.
- Five Chromium browser tests exercise draft/reload/commit, invalid draft recovery,
  import/export, six-turn completion/restart, unreadable-save preservation and a
  390-pixel mobile layout with keyboard selection. No page errors occurred in the
  instrumented draft/import flow.
- TypeScript checking and production bundling pass. Desktop, mobile and after-turn
  screenshots were inspected. The dropdowns are the practical mobile command
  surface; the overview map's small tokens are not a touch-optimised interface.

Run `npm test`, `npm run build`, `npm run test:browser` and `npm run exercise` to
repeat these checks. Generated browser screenshots remain under `test-results/`;
the representative map above is retained for review.

## Three reproducible opening policies

All use seed 480 and home service. Subsequent orders are measured holds; this is
deliberately a tiny diagnostic comparison, not a search over competent strategies.

| Policy | Turn-one orders | Observed six-turn result |
| --- | --- | --- |
| Hold | All formations hold | Victory; four formations remain, northern Spartans isolated |
| Concentrate | Athenians reinforce Thermopylae; allied squadron moves to Euboean waters | Stalemate; surviving land forces lack supply |
| Withdraw | Spartans withdraw to Boeotia; Athenian squadron withdraws to Euboean waters; both preserve | Victory; four formations remain |

The full player-visible dispatches print with `npm run exercise`. For the hold
policy, the short trace is:

1. Spartans hold Thermopylae; the Athenian squadron retreats from Artemisium.
2. Athenians retreat from Boeotia to Attica; the squadron retreats to the Saronic
   Gulf. The northern Spartans lose their supply connection.
3. Corinthians retreat from Megara to Corinth. The combined Greek fleet holds the
   Saronic Gulf.
4. Corinthians lose at Corinth and have no safe retreat. Its loss does **not**
   automatically end resistance: Attica can still supply the Athenians while the
   fleet retains the Saronic route.
5. The Greek fleet holds again; the isolated northern force continues losing cohesion.
6. The fleet holds. Surviving supplied forces and attrition in both enemy domains
   satisfy the exercise's provisional victory measure.

## Findings and repairs

An initial aggregate Persian-loss threshold allowed fleet attrition alone to count
as checking the whole invasion. The fixture now checks army and fleet separately.
This repairs a specific accounting flaw; it does not establish a convincing
campaign objective. All-hold still wins, which is the leading design concern.

Independent code review found that a successful friendly advance did not open a
retreat route until too late in simultaneous resolution; that ordering was repaired
and regression-tested. Save checks also caught seed-zero rejection and a reload
failure for temporarily illegal drafts. Drafts now remain editable after reload,
while committed turn histories still require valid, reproducible resolution.

## Fable's next bounded review

Read the [brief](first-playable.md), [synthesis](comparative-synthesis.md), map and
this trace. Then inspect the small engine only where needed to answer:

1. Does the topology create genuine military alternatives? In particular, is the
   all-hold victory a poor threshold, weak opponent, or an acceptable opening
   exercise that still fails to test active command?
2. Can a player connect decisions to retreat/supply outcomes from the information
   actually shown? Which one missing explanation most impairs learning?
3. Is the Corinthian commitment an operational dilemma or merely a checkbox? What
   is the smallest change worth testing before adding more political machinery?

Prefer a few ranked objections and one discriminating play experiment over a new
system catalogue. Barry's hands-on response remains the missing evidence on
clarity, attention cost and enjoyment. Do not expand to the full campaign yet.
