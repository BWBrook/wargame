# Sources: *The Battle for Wesnoth*

**Research date:** 2026-08-23  
**Mechanical baseline:** Official stable desktop release 1.18.8  
**Historical span:** Initial public release 0.1 (18 June 2003), stable 1.0 (2 October 2005), selected later releases, and the still-active project through the research date  
**Development boundary:** Release 1.19.27 is a beta on the odd-numbered development branch. Planned 1.20 content is not treated as shipped stable content.

## Source-quality key

- **Primary:** versioned game source or documentation, contemporary statement by a project lead, direct developer interview, official project record, or live first-party service.
- **Near-primary:** contemporary review with detailed play observations, first-party store metadata, or a maintained project wiki page whose version can drift.
- **Secondary:** independent review, later critical account, retrospective interview, or historical analysis.
- **Tertiary:** database or aggregate used for orientation rather than a central mechanical claim.
- **Community claim:** selected player testimony. Useful for identifying praise, friction, play practice, or longevity, but not representative without corroboration.

The game is a living, versioned object rather than a single frozen 2003 release. Current rules were checked against the 1.18.8 manual, configuration, campaign tree, multiplayer-era definitions, and selected scenario source. Historical reviews are assigned to the versions they actually encountered. Current store descriptions are not projected backwards, and the 1.19 development branch is not silently mixed with stable 1.18.

The official manual contains an income inconsistency. Its overview says that a village yields two gold directly, but the same manual's formula and the 1.18.8 configuration establish two base gold, one gold per village, and one unit level of village support before upkeep. The source-backed formula controls the dossier.

The current add-on-server page was downloaded and parsed on the research date. Counts are a dated inventory, not an estimate of quality, completion, current users, or unique playable campaigns. Steam, itch.io, MobyGames, and user-review values are similarly mutable and self-selected.

## Origins, design philosophy, and project history

### S01 — David White, “The History of, and Philosophy behind Wesnoth” and “Wesnoth Philosophy II”

- Type: first-person design history and design statement, written in 2003 and 2008; **primary for intention and origin**.
- URL: [Wesnoth Philosophy](https://wiki.wesnoth.org/WesnothPhilosophy)
- Used for: 18 June 2003 first-release date; failure of White's earlier over-complex *Civilization*-like project; *Master of Monsters* inspiration; the intended middle ground between triviality and unfinishable complexity; the important correction that KISS was principally an implementation rule, not a promise that every player-facing rule would be simple; the tiny original action vocabulary; army building, experience, and branching advancement; implicit magic rather than a separate spell system; defender-terrain-only ordinary hit chance; magical 70% hit chance; Francisco Muñoz's early art, race, and scenario contributions; AI-usable rules as an explicit constraint; and the later policy of retaining core mechanics while making the engine more flexible for community content.
- Caveat: this is the founder's account, not independent proof that the rules are easy, the AI effective, or every later feature consistent with the original ideal.

### S02 — FOSDEM 2008 David White interview and presentation

- Type: direct founder interview and conference slides; **primary for project recollection and 2008 architecture**.
- URLs: [FOSDEM interview](https://archive.fosdem.org/2008/interview/david%2Bwhite.html); [presentation PDF](https://archive.fosdem.org/2008/slides/maintracks/wesnoth.pdf)
- Used for: *Master of Monsters* and *Warsong/Langrisser* as simple-but-fun inspirations; June 2003 release of 0.1 with major gameplay features already present; standard C++ and minimal dependencies as an accidental portability enabler; cumulative polish through many small improvements; growth from one campaign into campaigns, WML authorship, and multiplayer; the add-on and community strategy for continued engagement; WML's broad role; the map editor's terrain-only boundary; the then-current AI's heuristic character; and the thin-server/replay lineage of networking.
- Version caveat: the slides describe approximately version 1.3/1.4. Python AI support, five- or six-faction counts, implementation size, dependencies, and server details are historical, not current specifications.

### S03 — Daniel Shumway, “Battle For Wesnoth and Open Source Design” (2014)

- Type: edited IRC interview with David White and other project contributors; **primary for developer recollection / secondary for reconstructed history**.
- URL: [Game Developer interview](https://www.gamedeveloper.com/audio/battle-for-wesnoth-and-open-source-design)
- Used for: 0.1 as a small but playable release with approximately two scenarios; early recognisability of the unit statistics and core rules; governance as a contributor collective rather than design by referendum; rejection of radical deterministic or real-time changes to the core game; the add-on server as a proving ground; the statement that almost every mainline campaign added after 1.0 originated as an add-on; the later addition of networking and plugin-like content architecture to an initially single-campaign project; the founder's retrospective doubt about how fully the AI-friendly design aim succeeded; and modular content as a good fit for open-source collaboration.
- Caveat: an edited retrospective eleven years after the first release. It is stronger for process and philosophy than for exact early-version chronology.

### S04 — Official project and Google Summer of Code records

- Type: maintained project page and 2014–15 organisational application; **primary for project identity and dated self-description**.
- URLs: [Project](https://wiki.wesnoth.org/Project); [SoC information](https://wiki.wesnoth.org/SoC_Information_for_Google)
- Used for: David White as original designer; collaborative project authorship; 1.0 release on 2 October 2005; the project's own description of simple core rules, WML, and community promotion of strong add-ons into mainline; and dated evidence of scale and recognition.
- Caveat: download totals, usual server load, and LinuxQuestions awards are project-submitted claims from 2014–15. They are time-qualified and not treated as current participation telemetry. The current project has no single stable “developer” credit comparable to a boxed game's credit page.

## Current stable rules and version boundary

### S05 — Versioned 1.18.8 manual, configuration, and campaign source

- Type: exact current-stable documentation and source; **primary**.
- URLs: [1.18.8 manual](https://raw.githubusercontent.com/wesnoth/wesnoth/1.18.8/doc/manual/manual.en.html); [game configuration](https://raw.githubusercontent.com/wesnoth/wesnoth/1.18.8/data/game_config.cfg); [campaign tree](https://github.com/wesnoth/wesnoth/tree/1.18.8/data/campaigns); [carryover macros](https://github.com/wesnoth/wesnoth/blob/1.18.8/data/core/macros/carryover-utils.cfg); [example first scenario from *A Tale of Two Brothers*](https://github.com/wesnoth/wesnoth/blob/1.18.8/data/campaigns/Two_Brothers/scenarios/01_Rooting_Out_a_Mage.cfg)
- Used for: turn and scenario loop; one unit per hex; recruitment from a keep into castle hexes; recall; movement and attack; melee/ranged retaliation categories; terrain defence; movement costs; resistances and six standard damage types; attacks as damage times strikes with separate hit checks; time of day and alignment; zones of control; abilities and weapon specials; healing, poison, rest, villages, upkeep, income, traits, experience, advancement and AMLA; help, combat forecasts, statistics, replays, save practice, and campaign guidance; seventeen current solo campaigns; the separate tutorial and multiplayer *World Conquest* content; base income 2, village income 1, village support 1, default recall cost 20, kill experience 8 per defeated unit level, poison 8, and rest healing 2; configurable carryover; and a concrete 40% carryover example.
- Important discrepancy: the manual twice says villages directly yield two gold, while its exact income formula and `game_config.cfg` establish one direct village gold plus one level of upkeep support. The formula and code control.
- Configuration caveat: scenario and campaign WML can override many defaults. The dossier says “default 20” recall cost and “configurable carryover,” not universal constants.

### S06 — Official rule, strategy, help, and authoring guidance

- Type: maintained project documentation; **primary for documented rules and project advice / near-primary where pages span versions**.
- URLs: [Getting Started](https://wiki.wesnoth.org/Gettingstarted); [Basic Strategy](https://wiki.wesnoth.org/BasicStrategy); [Defence and resistance](https://wiki.wesnoth.org/Defense_and_resistance); [FAQ](https://wiki.wesnoth.org/FAQ); [unit-type WML](https://wiki.wesnoth.org/UnitsWML); [scenario balancing guidance](https://wiki.wesnoth.org/BuildingScenariosBalancing)
- Used for: the tutorial and integrated help path; map, time, unit, objective, and economy displays; recruitment and recall; formations, rotation, healing, terrain, ZOC, target exposure, and enemy-move preview; later-scenario expectation of level-two and level-three veterans; advice against per-roll reloading; official account of random streaks; typical difficulty changes through money, higher-level enemy recruitment, and turn limits rather than smarter reasoning; editor limits; and the authoring warning that surprising reinforcements can become replay-dependent “tomato surprises.”
- Caveat: several pages retain old examples or wording. Exact numbers are checked against S05. The FAQ's assertion that no random-number flaw has been found is a project position, not an independently audited probability study.

### S07 — Download page, repository, release branches, and licence files

- Type: live first-party distribution and exact repository state; **primary**.
- URLs: [Download](https://wiki.wesnoth.org/Download); [GitHub repository at 1.18.8](https://github.com/wesnoth/wesnoth/tree/1.18.8); [1.18.8 README](https://github.com/wesnoth/wesnoth/blob/1.18.8/README.md); [1.18.8 copyright notice](https://github.com/wesnoth/wesnoth/blob/1.18.8/copyright); [copyright policy](https://wiki.wesnoth.org/Wesnoth:Copyrights)
- Used for: stable 1.18 and development 1.19 branch distinction; 1.18.8 and 1.19.27 as current versions on the research date; within-branch stable compatibility; official Windows, macOS, Linux/source availability; free and open-source status; GPL v2-or-later wording in the exact 1.18.8 repository; and mixed GPL/CC BY-SA asset licensing.
- Licence caveat: the Download page summarizes the program as GPL v3-or-later, while the exact 1.18.8 repository says GPL v2-or-later. GPL v2-or-later permits use under later GPL versions, but the dossier preserves the source wording rather than pretending every public page uses the same shorthand.

### S08 — Stable 1.18 and development 1.19 content definitions

- Type: exact release-source comparison and official roadmap; **primary**.
- URLs: [1.18.8 multiplayer eras](https://github.com/wesnoth/wesnoth/blob/1.18.8/data/multiplayer/eras.cfg); [1.18.8 multiplayer data](https://github.com/wesnoth/wesnoth/tree/1.18.8/data/multiplayer); [1.19.27 multiplayer eras](https://github.com/wesnoth/wesnoth/blob/1.19.27/data/multiplayer/eras.cfg); [1.19 roadmap](https://wiki.wesnoth.org/1.19_Roadmap)
- Used for: six balanced Default Era factions in stable 1.18.8—Loyalists, Rebels, Northerners, Undead, Knalgan Alliance, and Drakes; Dunefolk as a separate “Default + Dunefolk” era in 1.18; Dunefolk's completed move into the seven-faction Default Era in development 1.19; 1.19.27 as Beta 2; campaign additions and reworks in development; and the planned, not-yet-released 1.20 date.
- Important discrepancy: the current Steam description advertises seven balanced factions while the current stable 1.18.8 data defines six. The dossier follows the versioned source and treats seven as development-branch state.

## AI, multiplayer, and extensibility

### S09 — Official AI architecture documentation

- Type: technical project documentation; **primary for documented architecture**.
- URLs: [Wesnoth AI overview](https://wiki.wesnoth.org/Wesnoth_AI); [AI WML](https://wiki.wesnoth.org/AiWML); [Micro AIs](https://wiki.wesnoth.org/Micro_AIs); [RCA AI](https://wiki.wesnoth.org/RCA_AI)
- Used for: default RCA AI; its composite candidate-action architecture; C++ base with WML and Lua customisation; experimental AI additions; specialised Micro AIs for recruitment, healing, guardians, patrols, escorts, bottleneck defence, regrouping, animals, and other authored roles; aggression and caution parameters; attack-combination evaluation; the distinction between movement goals and attack selection; AI history; Lua as the recommended extension route; legacy Formula AI; and removal of the Python interface for security.
- Caveat: the wiki warns that AI implementation details changed markedly across versions. These pages document configuration and available components, not playing strength. No learning, adaptation, LLM integration, external move API, benchmark, or controlled win-rate evidence was located.

### S10 — WML, creation guides, and add-on server

- Type: project documentation and live first-party content service; **primary for affordances and current inventory**.
- URLs: [WML reference](https://wiki.wesnoth.org/WML); [Create portal](https://wiki.wesnoth.org/Create); [add-on type reference](https://wiki.wesnoth.org/AddonsWML); [1.18 add-on server](https://addons.wesnoth.org/1.18/)
- Used for: WML's control over scenarios, campaigns, units, UI, and data; Lua extension; built-in terrain-map editor; the extra work required for a complete scripted scenario; integrated add-on distribution; version-specific servers; and the live 1.18 inventory of 791 entries: 213 single-player campaigns, 24 multiplayer campaigns, 11 SP/MP campaigns, 85 multiplayer eras, 13 multiplayer factions, 87 multiplayer map packs, 83 multiplayer scenarios, 39 single-player scenarios, 155 modifications, 64 resources, 3 cores, and 14 other entries.
- Counting method: one row per server entry, grouped by the page's own type field, observed 2026-08-23.
- Caveat: entries include dependencies, incomplete work, experiments, old material, and content of radically different sizes. Traffic is not a completion or active-user measure. Branch-specific servers preserve compatibility but fragment discovery and impose porting work.

### S11 — Multiplayer documentation and current first-party storefronts

- Type: official/project documentation and first-party store pages; **primary or near-primary**.
- URLs: [multiplayer tutorial](https://wiki.wesnoth.org/MP_Tutorial); [Steam](https://store.steampowered.com/app/599390/Battle_for_Wesnoth/); [itch.io](https://wesnoth.itch.io/battle-for-wesnoth)
- Used for: local hot-seat, LAN/ad-hoc, official-server, and online play; observers, teams, fog/shroud, timers, human/AI mixing, and replays; cross-platform access; seventeen current solo campaigns; current update status; one-to-nine-player itch metadata; map editor and Steam Cloud availability; and current store aggregates.
- Version caveat: the Steam release date is the project's original 18 June 2003 date, not the date of the Steam listing. Steam's seven-faction sentence does not match stable 1.18.8; see S08. Itch's “average session” is platform metadata rather than measured Wesnoth telemetry.

## Independent reviews and player evidence

### S12 — Peterb, Tea Leaves review (12 March 2004)

- Type: independent pre-1.0 beta review with a founder response; **secondary, with primary clarification in comments**.
- URL: [review and comments](https://www.tleaves.com/2004/03/12/review-the-battle-for-wesnoth/index.html)
- Used for: unusually responsive interface and fast-animation option; readable overhead presentation; weapon choice and melee/ranged retaliation; zones of control; varied objectives; careful scenario construction; understated music; high polish for a GPL game; and contemporary criticism of the tutorial, recruitment explanation, terrain transparency, Mac context-menu failure, spelling, and AI compared with *Warlords*. David White's response is used to clarify the terrain lookup and magical/marksman exceptions.
- Version caveat: this reviews a 2004 beta. Tutorial, art, interface, writing, content, and AI complaints cannot be assigned unchanged to 1.18.8.

### S13 — Michael Scarpelli, Inside Mac Games review (26 October 2005)

- Type: detailed independent review near stable 1.0; **secondary**.
- URLs: [page 1](https://www.insidemacgames.com/historical/reviews/view.php%3FID%3D642.html); [page 2](https://www.insidemacgames.com/historical/reviews/view.php%3FID%3D642%26Page%3D2.html)
- Used for: strong value and content praise; named traits and veteran attachment; deep tactical play; active 2005 multiplayer and add-on ecosystem; dated/retro presentation; AI focus on weak units and direct rushing; difficulty changing enemy production rather than tactics; repeated failure at scenario six; forum advice to restart the campaign with a stronger veteran and gold position; and the way independent campaigns, add-ons, and multiplayer let a player route around one blocked campaign.
- Caveat: one reviewer, one 2005 Mac version, and one campaign. The “restart” episode is unusually valuable evidence of deferred campaign failure, not proof that every campaign or modern version has the same balance.

### S14 — GameFAQs user review (22 July 2009)

- Type: detailed selected user review; **community claim**.
- URL: [9/10 user review](https://gamefaqs.gamespot.com/pc/946479-battle-for-wesnoth/reviews/135490)
- Used for: simple/elegant core judgement; editor, random-map, content, and multiplayer praise; generic fantasy as familiar shorthand; turn limits and early-finish gold as pace mechanisms that can also force premature attacks; veteran and leader-protection dilemmas; tutorial/help; and favourable art/music assessment.
- Caveat: one enthusiastic review. Its 9/10 score and judgements are not representative.

### S15 — Jerry Williams, RPGFan review (30 May 2010)

- Type: long independent review; **secondary**.
- URL: [RPGFan review](https://www.rpgfan.com/review/the-battle-for-wesnoth/)
- Used for: 88/100 overall score; excellent two-battle tutorial; small rules working in combination; fifteen mainline campaigns in the reviewed version; reviewer's hundred-plus-hour content estimate; chance as the game's central controversy; statistical expected-versus-actual damage and encyclopaedia transparency; WML, add-ons, multiplayer, and community; long matches and pressure on newcomers; story as a gameplay framework and a chaptered history; controls and hotkeys; and the reviewer's on-and-off play over two years while observing art and audio improvement.
- Caveat: content count, graphics, audio, lobby culture, ladder, and campaign balance describe approximately the 1.8 era, not current 1.18. The hundred-hour figure is an estimate of possible content, not measured completion.

### S16 — Current Steam and itch.io audience evidence

- Type: mutable storefront aggregates and selected user testimony; **community claim**.
- URLs: [Steam reviews/store](https://store.steampowered.com/app/599390/Battle_for_Wesnoth/); [itch.io ratings and comments](https://wesnoth.itch.io/battle-for-wesnoth)
- Used for: on 2026-08-23, 94% positive among 3,201 English Steam reviews and 4.8/5 among 176 itch ratings; repeated long-play and decade-return anecdotes; praise for campaigns, tactics, names, music, and mods; and recurring complaints about misses, save-scumming pressure, long sessions, a dated interface, and learning burden.
- Sampling caveat: storefront reviewers are self-selected; Steam's sorting and language filters select what is visible; playtime measures launcher time, not focused play; itch comments are especially sparse. Aggregates can change after the research date.

### S17 — MobyGames review and rating record

- Type: database and small retrospective review archive; **tertiary/community claim**.
- URL: [MobyGames reviews](https://www.mobygames.com/game/21895/the-battle-for-wesnoth/reviews/)
- Used for: a small historical cross-check on favourable critical reception and preservation-era rating.
- Caveat: 4.1/5 from 47 ratings and four hosted reviews is too small and selected to stand for broad reception. It is supporting evidence only.

### S18 — Modern patient-gamer discussions

- Type: selected retrospective player essays and comments; **community claim**.
- URLs: [critical campaign review](https://www.reddit.com/r/patientgamers/comments/129hwvl/a_critical_review_of_battle_for_wesnoth/); [“Good, Bad, Ugly” review](https://www.reddit.com/r/patientgamers/comments/168ez6c/the_battle_for_wesnoth_the_good_the_bad_the_ugly/)
- Used for: modern descriptions of tactical depth, add-on breadth, RNG frustration, campaign foreknowledge, veteran/carryover compounding, campaign burnout, long waits in multiplayer, severe veteran skill gaps, and players whose main mode became cooperative or modified play. The second author's stopping point—one long campaign completed, a second abandoned—is direct adverse retention evidence despite overall enjoyment.
- Caveat: enthusiast-community posts are selected, version-unspecific, and often debated in their own comments. They identify plausible mechanisms and experiences, not prevalence.

## Excluded or limited evidence

- General encyclopaedia summaries were used only to locate stronger sources and are not cited for central claims.
- “Best free game” listicles and download portals were excluded unless they preserved an original document or a dated award record.
- Current concurrent-player trackers were not used: Steam is only one distribution channel, and the official, package-manager, standalone, and itch populations would be absent.
- No attempt was made to average scores across a 22-year, continuously revised object.
- Walkthroughs were not treated as proof that a scenario is objectively fair or unfair. Their existence instead confirms that campaign-specific foreknowledge has accumulated.
- No source supports a current learning AI, adaptive player model, LLM opponent, or supported external action API. WML/Lua customisation is an internal extension architecture, not the same thing.
- No representative retention, campaign-completion, reload-rate, add-on-completion, or multiplayer-concurrency dataset was located.

## Unresolved uncertainties

1. **No single remembered version:** Barry named the game but not a year, platform, campaign, or release. Stable 1.18.8 is therefore the current mechanical baseline; older review claims remain version-labelled.
2. **Campaign revision:** mainline campaign scripts, dialogue, difficulty, and roster expectations have been reworked repeatedly. A criticism of 2005 *Heir to the Throne* cannot be assumed to describe 1.18.8 exactly.
3. **Licence shorthand:** exact repository and live distribution pages use different GPL version summaries. The code's “GPL v2 or later” statement is the precise baseline.
4. **Village wording:** the current manual's prose conflicts with its own formula and the game configuration. Code and formula establish one direct village gold plus one level of upkeep support.
5. **Faction count:** stable 1.18.8 has six Default Era factions; development 1.19.27 has seven. Some current promotional copy has already moved to the seven-faction wording.
6. **AI strength:** architecture and configurability are well documented, but competence is not. Scenario scripting, resource advantages, Micro AIs, and the generic RCA opponent must not be collapsed into one verdict.
7. **Add-on abundance versus use:** 791 entries demonstrate an active publication substrate, not 791 complete, current, high-quality, or widely played experiences.
8. **Actual sustained engagement:** the project has exceptional historical duration and abundant individual long-play anecdotes, but those are not a cohort retention curve.
