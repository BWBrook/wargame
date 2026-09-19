# First playable: The Narrow Sea

Design brief, 19 September 2026. This is an implementation brief, not a historical
scenario specification or a claim that the acceptance checks below have passed.

## Purpose and authority

Test whether commanding a few land formations and naval squadrons under uncertain,
simultaneous orders is understandable and interesting in a browser. Barry authorised
implementation after the fireside discussion and the Astra–Fable exchange on the
Wargame correspondence board (discussion #38, messages 157 and 267–270), endorsing
both the critiques and the push-back against additional pre-implementation gates.
Fable is an external creative critic;
review should target consequential decisions and observed play, not become a gate
for routine implementation.

The first **large scenario** remains Greek coalition defence in **480 BC**. Its
eventual target is 10–15 turns, normally 10–15 minutes of human deliberation per turn,
roughly 2–3 hours overall. Those are playtesting targets, not a timer. The first
exercise below is much smaller and cannot validate that campaign's pacing or balance.

> We set the stage, but don't write the subsequent play.

Barry's Q45 principle governs authored openings, opponents, and victory conditions.

## Agreed requirements carried forward

| Requirement | Discussion evidence | First-exercise treatment |
| --- | --- | --- |
| Player commands military actions; staff handles routine support, exposing consequential choices | Q1–Q4, Q18–Q20 | Direct formation orders; concise support advice, no economic administration |
| Unknown enemy commitments and bounded combat variation; qualitative assessments rather than probability displays | Q5–Q8 | Hidden enemy orders, partial reports, separate assessment and confidence |
| Authored areas, map-wide commitment, no intelligence from hypothetical moves | Q9–Q11 | Editable draft orders followed by one simultaneous resolution; drafting cannot update sightings |
| Coherent formations, visible geographic capacity, converging attacks | Q29–Q31 | Small area graph and formation roster; geography constrains concentration |
| Defeat usually permits retreat; preservation versus aggression matters | Q32–Q33 | Intent affects exposure; losses, retreat and trapped outcomes have explanations |
| Squadrons are directly commanded and naval decisions matter alongside land decisions | Q36–Q37 | Connected sea areas and a land–sea supply dependency |
| Supply matters continuously but foregrounds operational pressure | Q40 | Staff describes supply condition and explains deterioration; no convoy handling |
| Single-player, readable map/reports, reliable save/resume | Q42 and its endorsed defaults | Browser interface, local heuristic opponent, saved state and draft orders |
| Coalition survival and checking the invasion matter more than reproducing named battles | Q44–Q45 | One allied commitment and an explicitly experimental outcome assessment |

The full decision record is [fireside-discussion.md](../fireside-discussion.md).
The [comparative synthesis](comparative-synthesis.md) explains the selection and its
counterexamples. Implementation defaults below are revisable hypotheses, not new
claims about Barry's preferences.

## Provisional exercise defaults

- Six turns on an eleven-area schematic central-Greece graph: Thessaly,
  Thermopylae, Phocis, Boeotia, Attica, Megara and Corinth on land; Pagasae
  approaches, Artemisium, Euboean waters and the Saronic Gulf at sea. Each side
  begins with three land formations and two squadrons.
- Synthetic forces and simplified connections. Place names supply orientation;
  roster, capacity, distances, supply and turn length are not a reconstruction of
  480 BC. No fixed number of historical days per turn is implied.
- Greek coalition command over assigned forces. The Persian opponent has an
  invasion objective and chooses operations; it does not replay a battle script.
- A small vocabulary of movement, holding and preservation/aggression intent,
  plus one predeclared reserve response to an adjacent approach per side.
  All sides commit before outcomes are resolved; the enemy must not inspect the
  player's draft or committed orders when choosing its own orders.
- One sparse, clearly signalled allied commitment with an operational consequence.
  This is a test of coalition agency, not a recurring council or a diplomacy game.
- A short post-turn report links observed actions to consequences: where contact
  occurred, why a force withdrew, losses suffered, routes threatened and support
  affected. It must not reveal unobserved enemy actions merely to explain everything.
- Seeded randomness and a separable simulation for reproducible failures. Tests may
  inspect internal numbers; the ordinary command interface does not display combat
  formulas or exact success probabilities.

The turn loop is **read reports → inspect forces/routes → draft and revise → commit
once → read aftermath**. Drafting may change advice based on the proposed plan, but
cannot change the underlying world, advance randomness or improve intelligence.
Advice should distinguish “favourable position” from “uncertain enemy strength”: a
favourable assessment is not the same thing as high confidence.

## Implementation boundary

Use a headless TypeScript simulation with a Vite-served DOM/SVG interface. An authored
area graph needs neither a 3D engine nor a tactical battlefield renderer. A local
heuristic opponent avoids an API key, model cost and network dependency in the first
play loop. Keep scenario data separate enough to revise the exercise without
building a speculative general-purpose scenario editor.

This prototype **defers, rather than rejects**:

- further constrained reactions and exceptional commanders (Q12–Q14), adviser appointments,
  accumulated experience and storied formations;
- recruitment, replacements, army–navy investment, broad economic control and
  multiple command-authority modes;
- sea transport and amphibious operations (Q38): sustaining troops and moving
  troops remain distinct future constraints;
- fortified cities, garrisons and sieges (Q41): an exercise area's field control is
  not evidence that defeating its army should capture a fortified city;
- broad diplomacy, occupation, Asia Minor's city-states and the wider Persian
  Empire, whose representation belongs to the scenarios that include them;
- the full 480 scenario, 479 follow-up, linked campaigns, first-invasion scenario,
  and the later Peloponnesian War;
- multiplayer, external-model opponents, editors, fantasy settings, heroes and
  quests, publication and an open-source licence decision.

## Acceptance and next review

The first experimental victory measure requires a supplied surviving Greek army
and fleet, an unbroken commitment, and at least 25% attrition separately in the
Persian army and fleet after six turns. Loss of all Greek land forces or all
squadrons ends the exercise early. No named city's loss automatically ends play.
These thresholds are fixtures to challenge in play, not an agreed general victory
system. The [first playtest record](playtest-001.md) records checks and weaknesses.

Automated checks should cover the material simulation contracts: legal moves and
capacity; simultaneous movement conflicts; viable versus blocked retreats; supply
changes caused by naval positions; reproducible resolution; draft isolation;
enemy-order independence; and save/resume of both game state and draft orders.
Browser checks should exercise the same loop through actual controls, including
reload, and check that reports and selectable formations remain readable.

Human play is a separate acceptance test. After a first run, ask:

1. Can the player form and revise a plan without looking up the rules repeatedly?
2. Is there a real land–sea allocation trade-off, with more than one plausible plan?
3. Can the player explain a retreat or supply failure from the report, while still
   recognising what remained unknown before commitment?
4. Does the allied commitment change a military decision without dominating attention?
5. Does defeat suggest a different plan, rather than a mandatory reload or a hidden
   trick? Does resuming a save restore enough context to continue comfortably?

Winning a smoke test or completing six turns establishes neither historical
plausibility nor enjoyable replay. Record observed friction and repair the most
decision-relevant problem before expanding scope.

**Fable's next useful review:** this brief, the initial map and one concrete play
trace, with three questions: is the topology offering genuine alternatives; is the
uncertainty intelligible; and is coalition pressure meaningful but proportionate?
An immediate reply is welcome but need not delay implementation. Barry's first
hands-on reaction is needed before treating the command experience as validated.
