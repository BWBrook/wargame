# Wargame: command in ancient Greece

An evolving browser wargame about commanding land formations and naval squadrons
through intent, uncertain intelligence and delegated support. The first large
scenario will place the player in Greek coalition command during the invasion of
480 BC. The long-term aim is an open-source community wargame; publication and
licensing decisions remain separate from the current prototype work.

**Current phase:** the first six-turn command exercise is playable locally.
The initial fireside decisions through Q45, comparative synthesis and implementation
brief guide this small prototype, not a complete historical scenario. Its first
engineering checks pass; human playability and balance remain unvalidated.
Prototype 0.2 adds clearer onboarding, stable order controls, force/area overviews,
hold-at-all-costs orders and the recall/report repairs. Campaign scoring remains
under review; meeting the displayed attrition target is not proof of victory.

## Start here

- [First-playable brief](docs/first-playable.md): scope, provisional defaults,
  deferred systems and acceptance questions.
- [Comparative synthesis](docs/comparative-synthesis.md): findings across all
  thirteen cases, counterexamples and decisions superseded by the Greece setting.
- [First playtest](docs/playtest-001.md): verification, representative map, three
  reproducible opening policies and the next focused questions for Fable.
- [Repair and experiment record](docs/playtest-002.md): current changes, 7,200
  paired-policy games, rejected candidate changes and the next review question.
- [Handover](HANDOVER.md): implementation boundaries and the next work tranche.
- [Fireside discussion](fireside-discussion.md): Barry's recollections and the
  decision record; dated entries retain their original status for provenance.
- [Research log](research-log.md) and [parking lot](parking-lot.md): research history
  and possibilities, not additional implementation requirements.

The first exercise uses a deliberately schematic central-Greece area graph,
synthetic forces and six turns. It tests simultaneous orders, retreats, land–sea
support, qualitative advice and a sparse allied commitment. It is not a historical
reconstruction or a balance claim about the eventual 10–15-turn scenario.

## Local development

The prototype uses TypeScript with a Vite-served browser interface. From this
directory:

```sh
npm install
npm run dev
npm test
npm run build
npx playwright test
npm run exercise
npm run experiment
```

The development command serves the local game; the remaining commands run the
simulation/save tests, production build, browser checks, three diagnostic play
traces and the controlled experiment respectively. Playwright
may need its browser installed with `npx playwright install chromium` first.
See the current playtest record for verification and the limits of that evidence.
No live model API or credentials are required for the local heuristic opponent.

The game saves on this browser after an order or commitment changes. Use **Session →
Export save** for a portable backup or **Export play record** for review. Invalid
imports leave the current game intact. **New exercise** asks before replacing it.
This local prototype does not promise save compatibility across future rule changes.
Version-1 saves cannot resume under the repaired version-2 rules. They are kept for
download; start a new exercise explicitly after exporting anything you want to retain.

## Research history

The project began as comparative research for a possible fantasy wargame. Its
original evidence-gathering sequence is preserved below. The later fireside
decisions and current brief supersede the former pre-design phase restrictions.

The research sequence was:

1. Select a game Barry has played.
2. Research the game independently: history, rules, play experience, praise, criticism, and evidence of sustained engagement.
3. File a self-contained dossier and source ledger without asking Barry for a title-by-title evaluation.
4. Repeat across games that endured, games that were quickly abandoned, and mixed cases. A game's presence in the corpus does not imply approval.
5. When the corpus is judged sufficient, hold a cross-game fireside discussion: begin with Barry's unprompted recollections, then explore contrasts, recurring attractions, tolerated friction, and decisive blockers across titles.
6. Preserve Barry's direct recollections separately from dossier-derived interpretation.
7. Only after that discussion, conduct a separate comparative audit of the whole evidence base. Design implications for the proposed game belong to that later audit.

## Evidence discipline

- Claims should be traceable to sources and marked as publisher claims, contemporary opinion, retrospective opinion, or researcher interpretation.
- Editions and platforms must not be silently conflated.
- Praise, criticism, and uncertainty are recorded separately.
- Each dossier should distinguish an appealing feature from evidence that it actually supported repeated play.
- Negative and short-lived cases are first-class evidence. Record redeeming features as well as the frictions that outweighed them.
- Barry's evaluations are deliberately withheld during dossier production to reduce anchoring and hindsight contamination.
- Ideas in `parking-lot.md` are not decisions unless subsequently accepted in the discussion or brief.
- Individual case studies were kept independent of cross-game design prescriptions;
  the now-authorised synthesis is separate rather than retrofitted into them.

The original discussion protocol and completed initial decisions are in
[`fireside-discussion.md`](fireside-discussion.md).

## Case studies

| No. | Game | Type | Dossier | Source ledger |
| --- | --- | --- | --- | --- |
| 001 | *The Russian Campaign* | Tabletop strategic wargame | [Complete](research/001-the-russian-campaign/dossier.md) | [Complete](research/001-the-russian-campaign/sources.md) |
| 002 | *Victory in the Pacific* | Tabletop theatre-level naval wargame | [Complete](research/002-victory-in-the-pacific/dossier.md) | [Complete](research/002-victory-in-the-pacific/sources.md) |
| 003 | *Afrika Korps* | Tabletop operational wargame | [Complete](research/003-afrika-korps/dossier.md) | [Complete](research/003-afrika-korps/sources.md) |
| 004 | *The Ancient Art of War* | Computer real-time squad wargame | [Complete](research/004-the-ancient-art-of-war/dossier.md) | [Complete](research/004-the-ancient-art-of-war/sources.md) |
| 005 | *War of the Lance* | Computer fantasy grand-strategic wargame | [Complete](research/005-war-of-the-lance/dossier.md) | [Complete](research/005-war-of-the-lance/sources.md) |
| 006 | *Warlords* and *Warlords II* | Computer fantasy conquest-strategy lineage | [Complete](research/006-warlords-i-ii/dossier.md) | [Complete](research/006-warlords-i-ii/sources.md) |
| 007 | *Panzer General*, *Fantasy General*, and *Panzer Corps* | Computer operational-wargame design lineage | [Complete](research/007-panzer-fantasy-corps-lineage/dossier.md) | [Complete](research/007-panzer-fantasy-corps-lineage/sources.md) |
| 008 | *V for Victory: Gold-Juno-Sword* | Computer operational wargame | [Complete](research/008-v-for-victory-gold-juno-sword/dossier.md) | [Complete](research/008-v-for-victory-gold-juno-sword/sources.md) |
| 009 | *The Battle for Wesnoth* | Open-source fantasy turn-based tactics and campaign platform | [Complete](research/009-the-battle-for-wesnoth/dossier.md) | [Complete](research/009-the-battle-for-wesnoth/sources.md) |
| 010 | *Dungeons & Dragons: Conquest of Nerath* | Tabletop fantasy territorial-conquest wargame | [Complete](research/010-conquest-of-nerath/dossier.md) | [Complete](research/010-conquest-of-nerath/sources.md) |
| 011 | *Battle of the Bulge* and *Unity of Command* | Computer operational-wargame paired case | [Complete](research/011-battle-of-the-bulge-unity-of-command/dossier.md) | [Complete](research/011-battle-of-the-bulge-unity-of-command/sources.md) |
| 012 | *Commander: The Great War* | Computer World War I grand-strategy wargame | [Complete](research/012-commander-the-great-war/dossier.md) | [Complete](research/012-commander-the-great-war/sources.md) |
| 013 | *Dragons of Glory* | Tabletop fantasy grand-strategic wargame and campaign-history generator | [Complete](research/013-dragons-of-glory/dossier.md) | [Complete](research/013-dragons-of-glory/sources.md) |
