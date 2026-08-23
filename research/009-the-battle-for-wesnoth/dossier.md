# Case 009: *The Battle for Wesnoth*

**Original design and programming:** David White  
**Crucial early art and content contribution:** Francisco Muñoz  
**Continuing developer:** The Battle for Wesnoth Project, a changing contributor collective  
**First public release:** Version 0.1, 18 June 2003  
**First stable release:** Version 1.0, 2 October 2005  
**Current research baseline:** Stable desktop release 1.18.8; development release 1.19.27 kept separate  
**Current stable platforms:** Windows, macOS, GNU/Linux distributions, and source  
**Form:** Free and open-source fantasy turn-based tactical strategy game, campaign engine, multiplayer game, and user-content platform  
**Research status:** Independent dossier complete; personal evaluation deferred to the corpus-wide fireside discussion  
**Comparative-design status:** Deliberately deferred

Source IDs refer to the separate [source ledger](sources.md).

## 1. Scope: a living game, not one frozen release

*The Battle for Wesnoth* is the first case in this corpus for which “the game” is a continuously revised public project spanning more than twenty-three years. Its unit statistics, campaigns, art, interface, artificial intelligence, multiplayer maps, add-on interfaces, and documentation have all changed. A review of a 2004 beta, stable 1.0 in 2005, version 1.8 in 2010, and stable 1.18 in 2026 does not describe four unrelated games, but neither does it describe one mechanically frozen object. [S01–S08]

This dossier therefore uses three boundaries:

| Evidence layer | Treatment |
| --- | --- |
| Stable 1.18.8 | Controls current rules, supplied content, Default Era factions, configuration defaults, and desktop availability |
| Development 1.19.27 | Used only to show in-progress evolution; no beta feature is projected into stable 1.18 |
| Earlier versions and reviews | Used for origin, historical reception, observed friction, and change over time, always with a date or version caveat |

This matters immediately. Stable 1.18.8 contains seventeen solo campaigns and six balanced Default Era multiplayer factions. The development 1.19 branch has moved the Dunefolk into Default Era, creating seven. Current Steam copy already advertises seven, but the versioned 1.18.8 data still says six. Planned campaign additions, revisions, and the 1.20 release are future state on the research date. [S05, S07–S08, S11]

Barry supplied the title but no platform, period, campaign, or personal evaluation. No remembered version is inferred, and no `barry-context.md` is needed. Presence in the corpus is not evidence that the game retained him or failed to do so.

## 2. Origin: simplicity as a way to finish something substantial

David White's origin account begins with a failed attempt at a highly elaborate *Civilization*-like game. It collapsed before becoming a polished, playable object. Replaying the Sega Genesis games *Master of Monsters* and *Warsong* showed him that a comparatively small system could still be engrossing. His stated aim for Wesnoth was a middle ground between free games that were trivial and projects whose complexity prevented them from becoming games at all. [S01–S02]

The project's famous KISS principle is easy to misstate. White explicitly described it first as an implementation discipline: add a feature only when its implementation was already clear and tractable. It was not simply “all player-facing rules must be easy.” The connection to game design was that rules should be practical to implement reliably and practical for the artificial opponent to use. That distinction helps explain why modern Wesnoth has only a few principal verbs yet a large space of interacting information. [S01]

The original vocabulary was small:

- move a unit;
- attack with a unit;
- recruit a new unit;
- recall a campaign survivor.

White centred the game on assembling an army, seeing individual members gain experience, and sometimes choosing an advancement branch. Magic would appear as attacks, resistances, weapon specials, and local abilities rather than a separate strategic spell system. Ordinary chance to hit would be a terrain lookup on the defender rather than a multi-variable accuracy formula. [S01]

Version 0.1 appeared on 18 June 2003. Later developer recollection describes about two playable scenarios, elves, humans, and orcs, one campaign—*Heir to the Throne*—and no multiplayer. White's 2008 presentation says that the major gameplay features were already present. Francisco Muñoz's early artwork, Undead and Human content, scenarios, and design ideas were crucial to turning the programmer-art prototype into an attractive public game. Stable 1.0 followed on 2 October 2005. [S01–S04]

The authorship after that point is necessarily distributed. White remained the founder, but art, music, campaigns, balancing, translations, networking, WML, AI, documentation, and releases became the work of a contributor community with changing maintainers. Calling every current decision “David White's design” would be as misleading as erasing the unusually coherent original core. [S03–S04]

## 3. Evolution without replacing the core

The durable pattern is a stable tactical grammar surrounded by accumulating content and infrastructure. White observed in 2008 that releases after roughly 0.8 often consisted of many individually small improvements whose combined effect was polish. His later design statement rejected radical changes to the core mechanics while favouring a more flexible engine for user-made play. The 2014 developer interview likewise describes proposals for deterministic combat or real-time play as possible forks or different games, not changes the project collective would impose on the established object. [S01–S03]

The largest historical expansions were therefore around the battle system:

- many independent campaigns instead of one;
- local and network multiplayer;
- a replay-based save and networking system;
- the Wesnoth Markup Language and later Lua extension;
- a map editor and integrated add-on server;
- increasingly configurable AI components and specialised Micro AIs;
- large-scale art, music, translation, interface, balance, and accessibility work. [S01–S03, S09–S11]

This is not stasis. Campaigns have been added, promoted from add-ons, revised, rebalanced, or removed; factions and units have changed; and the AI framework was substantially rebuilt. It is instead a policy of keeping the recognised game while increasing what can be made with it. Stable compatibility inside a release branch and separate add-on servers for different branches formalise that compromise. [S03, S07–S10]

## 4. The scenario loop

A conventional scenario proceeds through a readily stated loop:

1. Read the victory, defeat, and turn-limit conditions.
2. Inspect terrain, time of day, enemy leaders, villages, and the initial force.
3. Keep a recruiting leader on a keep and buy recruits—or, in a campaign, pay to recall survivors—into vacant connected castle hexes.
4. Move outward to take villages, form a defensible line, scout, and approach the objective.
5. Choose attacks, rotate damaged units, allocate kills for experience, and exploit terrain, resistance, alignment, abilities, and zones of control.
6. Complete the objective before the turn limit, then carry surviving units and scenario-defined gold into the next campaign battle. [S05–S06]

Play is sequential turn-based. A player activates units in any desired order; one unit occupies one hex. Movement and attack are handled directly on the map rather than in a separate tactical window. A unit newly recruited or recalled cannot move or attack in that turn. Entering an enemy zone of control normally ends movement, and taking a neutral or hostile village changes ownership and ends that unit's move. [S05–S06]

Objectives include killing a leader, reaching or escaping to a location, rescuing or escorting a character, surviving for a number of turns, securing an item, and scenario-specific puzzles or scripted tasks. WML permits much broader forms, but the common battle remains a bounded map with an explicit objective and deadline. [S05–S06, S10, S12–S15]

The default game has no technology tree, strategic base construction, production buildings, diplomacy, espionage, trade, research, or world-level economy. Villages are captured rather than developed. Recruitment draws immediately from a scenario-defined roster. The strategic richness is concentrated in force composition, positioning, timing, preservation, and scenario sequence rather than in governing an empire. [S01, S05–S06]

## 5. Units are pieces, characters, and campaign capital

Every unit type has level, hit points, movement, experience threshold, alignment, race, movement costs, terrain defence, damage resistances, attacks, and potentially abilities or weapon specials. The roster contains familiar fantasy roles but they are not interchangeable labels. A cavalry unit, skeleton, mage, troll, merman, bat, dwarf, elf, and heavy infantry unit can differ simultaneously in movement over several terrains, defence, resistances, time preference, attack range category, damage type, cost, and advancement. [S05–S06]

An individual recruited unit normally receives a random name and two traits. Common traits alter strength, movement, resilience, or experience requirement; race- and scenario-specific traits extend the set. A quick unit gains movement but loses some hit points. An intelligent unit advances with less experience. A loyal story unit costs no upkeep and can therefore become disproportionately valuable in a long campaign. These small variations create identity without requiring a separate inventory or skill tree for every soldier. [S05]

Experience comes from surviving combat and especially from making a kill. The default kill award is eight experience per defeated unit level, with a smaller special value for level-zero victims. Once the threshold is reached, the unit advances, heals fully, becomes stronger, and may offer a branch choice. A max-level unit can receive After Maximum Level Advancement, commonly a modest hit-point increase and full healing rather than another new class. Scenario authors can override the common pattern. [S05–S06]

Campaign survivors enter the recall list with level, experience, name, traits, and sometimes acquired objects intact. Recalling costs a default twenty gold regardless of level, so a veteran may be much more efficient to field than a new recruit—but also far more consequential to lose. Death is normally permanent within that campaign state. The manual explicitly warns that later scenarios assume access to level-two and level-three units. It also teaches players to weaken enemies with strong veterans, arrange the final blow for a developing unit, and rotate wounded or valuable troops behind a protective line. [S05–S06]

The resulting unit has three simultaneous meanings:

`present tactical capability + remembered individual + investment in future scenarios`

That compound identity is one of Wesnoth's most frequently praised features and the source of one of its sharpest campaign pressures. [S13–S18]

## 6. Terrain defence and damage resistance are separate questions

Ordinary chance to hit is taken from the defender's defence in its current terrain. An elf that has 70% defence in forest is hit on 30% of ordinary strikes there; moving that same elf onto poor ground can make it much easier to hit. The attacker's generic “skill” does not enter another accuracy formula. Magical attacks instead have a fixed 70% chance to hit, and marksman attacks have at least a 60% chance when used offensively. [S01, S05–S06, S12]

Whether a successful hit hurts badly is a different lookup. Resistance modifies damage from blade, pierce, impact, fire, cold, and arcane attacks. Skeletons can therefore be hard or easy to damage for reasons unrelated to the hex they occupy; a unit may be difficult to hit in terrain yet vulnerable when hit by the right damage type. Movement cost is another layer again. A forest can be excellent cover for an elf, slow for cavalry, and passable for an enemy whose damage type remains dangerous. [S05–S06]

This separation creates a large interaction space from compact rules:

| Question | Principal source |
| --- | --- |
| Can the unit reach the hex? | Movement points, terrain cost, ZOC, and abilities |
| How likely is each strike to land? | Defender's terrain defence, subject to weapon specials |
| How much does a hit inflict? | Base damage, time/alignment, leadership and specials, then target resistance |
| Can the defender answer? | Whether it has an attack in the same melee/ranged category |
| Is the exchange strategically acceptable? | Position after combat, exposure, XP, gold, objective, and campaign value |

The arithmetic is generally visible and stable enough to inspect, but choosing among the interactions can still be demanding. “The hit chance comes from one lookup” is not equivalent to “the battle has one consideration.”

## 7. Combat: weapon choice, retaliation, and granular chance

Most combat occurs between adjacent hexes. “Melee” and “ranged” describe retaliation categories, not literal map distance. When attacking, the player selects one of the unit's available weapons. The defender retaliates only if it has a weapon in the same category; an archer can sometimes shoot a club-wielding target without return fire, while choosing a dagger would invite a melee answer. [S05, S12]

An attack is shown as damage multiplied by number of strikes. Each strike receives a separate hit check, so 7×4 represents up to four independent seven-damage hits, not one 28-damage event. Weapon specials then alter the exchange: poison applies continuing damage, slow reduces damage and movement, drain returns health, charge doubles both inflicted and received damage, first strike changes order, berserk continues rounds, plague creates a corpse, and swarm changes the number of strikes with current health. [S05]

The attack dialogue supplies the available weapons, damage and hit chances, and a detailed Damage Calculations view including the probability that attacker or defender will die. The statistics screen compares actual and expected damage across play. Unit descriptions and the in-game encyclopaedia expose terrain modifiers, resistances, traits, abilities, attacks, and advancement paths. Wesnoth therefore makes random resolution explicit rather than hiding it behind animation. [S05–S06, S15]

Visible probability does not remove emotional variance. A four-strike veteran can miss every attack; a weak defender can land its unlikely retaliation; a unit one kill from advancement can die. At the scale of an army, repeated trials and reserve placement reward risk management. At the scale of a named, persistent individual, the same streak can feel like a disproportionate erasure of accumulated history. The official FAQ treats streaks as normal randomness and recommends better risk management; repeated reviews and player comments show that many players understand the probabilities and still experience the outcomes as severe. [S06, S13, S15–S18]

## 8. Zones of control, lines, rotation, and local support

A level-one-or-higher unit projects a zone of control over the six adjacent hexes. Entering an enemy ZOC normally consumes the rest of the mover's movement. Level-zero units project none; skirmishers ignore it. A continuous line can therefore shield healers, wounded troops, villages, or a retreat route even when the pieces do not physically fill every reachable hex. Corners and line ends are vulnerable because more enemies can concentrate attacks there. [S05–S06]

The defender's terrain controls both incoming hit chances and the accuracy of its retaliation. Attacking from good terrain can still matter because that is where the attacker stands while answering return blows. A productive turn is often not “advance every unit as far as possible,” but establish a line on favourable ground, expose a durable unit, keep injured veterans beyond enemy reach, then rotate or counterattack when the opponent's position is worse. The Show Enemy Moves facility makes exact exposure inspectable. [S05–S06]

Abilities add local geometry. Healing and cures support adjacent allies; leadership raises nearby lower-level units' damage; illumination alters local time of day; concealment and ambush depend on terrain; regeneration changes rotation needs; and teleport links controlled villages. White's original preference for implicit magic places much of the fantasy effect in formation and positioning. [S01, S05]

These auras are also an early example of a rule being simple for a human to state but hard for a general opponent to exploit. White's 2003 philosophy explicitly admitted that the AI used healing and leadership poorly while finding skirmishing much easier. [S01]

## 9. Time of day makes waiting and attacking asymmetric

The standard cycle is dawn, two daytime turns, dusk, and two night turns. Lawful units normally deal 25% more damage by day and 25% less at night; chaotic units reverse the pattern. Neutral units are unaffected. Liminal units are penalised at both full day and full night and fight normally around twilight. Scenarios can modify the schedule. [S05–S06]

Time does not merely reskin the map. It changes whether to hold a line, launch an attack, withdraw, rotate, or spend a turn positioning. Two factions can value the same terrain at different moments. Mixed armies create further choices because not every member reaches its damage peak together. Illumination can locally shift those relationships. [S05]

Turn limits prevent indefinite waiting. A lawful force may want daylight while the scenario demands rapid movement; a chaotic opponent can trade ground until night; finishing early may increase gold for the next battle. Time of day, scenario time, and campaign time are therefore three related but non-identical clocks. [S05–S06, S14–S15]

## 10. One resource, but several economic effects

Gold is the default strategic resource. It pays recruitment and recall and absorbs upkeep. Stable 1.18.8 supplies two base gold per turn. Each controlled village adds one direct gold and supports one level of non-loyal unit upkeep. Upkeep is usually equal to unit level, and loyal units do not incur it. The manual's compact formula is:

`income = 2 + villages − max(0, upkeep − villages)`

This means a newly captured village can improve marginal income by up to two while unpaid upkeep remains: one direct gold plus one unit level no longer charged. The manual's prose that calls this “two gold per village” obscures that split; the formula and exact configuration resolve it. [S05]

Villages are consequently several things at once:

- local income and army support;
- healing sites;
- capture points that end the capturer's movement;
- territorial stepping stones;
- sometimes teleport nodes;
- exposed objectives that pull formations apart. [S05–S06]

Campaign starting gold has a scenario-defined minimum plus any applicable carryover. Carryover percentage and whether it is added are configurable; there is no honest universal percentage. A current mainline scenario can, for example, specify 40%. Completing some scenarios early adds a substantial finish bonus and avoids spending further turns on upkeep, so local tempo can become future purchasing power. [S05–S06]

This creates a possible positive or negative feedback loop:

`strong early finish → more carried gold → larger or better-timed future army → easier preservation and earlier finish`

The reverse can also occur. A technically successful battle that consumes veterans, gold, and turns can deliver a campaign state that is much harder several scenarios later. [S13–S18]

## 11. The seventeen stable campaigns

The exact 1.18.8 source contains these seventeen solo campaigns:

1. *A Tale of Two Brothers*
2. *The South Guard*
3. *Heir to the Throne*
4. *Liberty*
5. *The Rise of Wesnoth*
6. *The Hammer of Thursagan*
7. *Descent into Darkness*
8. *Sceptre of Fire*
9. *Delfador's Memoirs*
10. *Legend of Wesmere*
11. *The Eastern Invasion*
12. *The Son of the Black-Eye*
13. *Northern Rebirth*
14. *Dead Water*
15. *Secrets of the Ancients*
16. *Under the Burning Suns*
17. *Winds of Fate* [S05]

The source tree also contains the tutorial and multiplayer *World Conquest*, which are not eighteenth and nineteenth solo campaigns. Some older lists include *An Orcish Incursion*, later removed, while the 1.19 development roadmap contains new and revised campaigns. Exact source controls the current count. [S05, S08]

Campaigns are independent rather than one mandatory serial campaign. They range across centuries, regions, races, military scales, and moral viewpoints. Peasant revolt, royal exile, undead transformation, dwarven history, oceanic peoples, desert survival, orcish leadership, and drake society all reuse the tactical grammar while changing roster, setting, objectives, and scripting. Together they can feel like chapters in a history of the same world; no cross-campaign roster or account-level progression connects them. [S05, S15]

Storytelling usually occurs through portraits, dialogue over the battlefield, journey maps, and inter-scenario text. The story frames battles and sometimes interrupts them with discoveries or conversation, but it is not primarily cinematic. RPGFan described it as a game with story rather than a story carrying occasional gameplay. The familiar elves, orcs, dwarves, undead, loyal knights, and disputed crown lower the initial lore cost, although that same familiarity can read as generic fantasy. Accumulated campaigns add specificity through history and perspective rather than through an unusual foundational cosmology. [S13–S15]

The campaigns are not one uniform quality tier. They came from different authors, periods, and add-on histories, and have been revised unevenly. The active 1.19 roadmap itself lists extensive reworks and additions. Quantity creates routes around a disliked campaign, but it also makes “the campaign experience” too broad for one judgement. [S03, S08, S13, S18]

## 12. Campaign persistence: attachment and deferred failure

Within a scenario, victory is explicit. Within a campaign, the real success condition can be stricter than the objective panel: win while preserving enough appropriate veterans and gold for unknown future scenarios. The current manual says later scenarios assume advanced units. It advises the player not to throw away experience and to restart a scenario with a new strategy rather than reload individual attacks until the random numbers cooperate. [S05–S06]

The 2005 Inside Mac Games review supplies unusually concrete adverse evidence. The reviewer reached a sixth scenario he could not pass, consulted the community, and was told that his earlier veteran and gold position was inadequate. He replayed the campaign several times and remained blocked. Lowering difficulty reduced enemy production without changing the basic opponent behaviour. This is not proof about modern 1.18 balance, but it shows how the campaign architecture can defer the visible consequence of earlier losses until recovery requires replaying hours. [S13]

Modern selected players describe the same structural possibility: protect veterans to prepare for later scenarios, but expose them to gain experience; use them because they are efficient, but risk irreplaceable campaign capital; accept losses now, but not know which unit branch a later battle expects. Scripted surprises can further reward replay with foreknowledge. Wesnoth's own scenario-design guidance warns authors against reinforcements that become “tomato surprises” after the first attempt. [S06, S18]

Independent campaigns soften this. A player blocked or exhausted by one can begin another with a fresh roster, download an add-on, play a standalone battle, or switch to multiplayer. The 2005 reviewer explicitly treated that abundance as relief from the failed campaign rather than merely a larger content count. [S13]

## 13. Tutorial, help, and information transparency

The current entry path recommends the tutorial, then an introductory campaign such as *A Tale of Two Brothers*. The manual describes the tutorial as two battles. By 2010 RPGFan considered it excellent and sufficient to teach the action grammar; the 2004 beta reviewer had found the earlier tutorial disorganised and recruitment poorly explained. This is clear evidence of improvement over time, not a contradiction about one object. [S05–S06, S12, S15]

The live battle screen exposes turn, gold, villages, units, upkeep, income, terrain, coordinates, time of day, selected-unit statistics, and a minimap. Menus provide objectives, statistics, unit list, status table, saving, help, recruitment, recall, and enemy-move previews. Unit descriptions form an integrated encyclopaedia. Hovering terrain shows movement and defence information; the combat dialogue provides weapon outcomes and detailed probability distributions. [S05–S06]

The game also retains replays and records expected versus actual damage. Those facilities cannot prove that an unlucky battle was enjoyable, but they make the random model inspectable. RPGFan specifically praised this numerical honesty as a counterweight to selective memory about failed attacks. [S05, S15]

Undo is appropriately constrained after an action reveals hidden information or initiates combat. Saves exist at scenario starts and mid-scenario, and replays can reconstruct play. The official documentation is permissive about playing for fun but normatively prefers strategic replanning over per-roll save-scumming. The very need for that advice demonstrates the pressure created when a named veteran's permanent loss is coupled to visible random rolls. [S05–S06]

The remaining learning burden is interaction rather than command discovery. A novice can move, recruit, and attack quickly, yet still has to learn terrain tables, resistance matchups, time cycles, retaliation categories, ZOC geometry, upkeep, healing, advancement branches, kill allocation, and future roster preservation. Wesnoth's accessibility is best described as low input friction with progressively discoverable rules, not low total cognitive demand. [S01, S05–S06, S12–S15]

## 14. The artificial opponent: heuristic, composite, and authorable

Making rules usable by an AI was an original design constraint. White deliberately avoided some systems he expected the opponent could not handle and restricted the earliest computer-controlled rosters accordingly. He also acknowledged that healing and leadership auras were difficult for the AI, and in 2014 called the overall success of the original aim debatable. [S01, S03]

The current default is the RCA AI. It is a C++ composite of components and candidate actions, configurable through WML and extendable or replaceable with Lua. In broad terms, candidate actions evaluate possible activities, receive scores, and execute the highest-priority available action before reevaluation. Attack selection can examine combinations, target value, kill chance, damage, loss, and resulting exposure. Scenario authors can tune aggression and caution and set movement goals. Those goals do not simply become attack targets. [S09]

Micro AIs add narrower behaviours that a general opponent cannot easily express: healer support, bottleneck defence, guardians, patrol and goto movement, messenger escort, assassin squads, protection, recruiting patterns, regrouping, lurkers, and animal packs. Several can be combined, although the documentation warns that contradictory components may conflict and that universal behaviour is not feasible. These tools allow an authored scenario to present behaviour beyond the generic opponent without claiming one omniscient general intelligence. [S09]

Campaign difficulty normally changes resources and circumstances: more enemy gold, higher-level recruitment, or fewer player turns. Scenario scripts, reinforcements, objectives, and Micro AIs may also change. The official FAQ does not describe difficulty as a stronger search or reasoning level. A hard scenario may therefore be challenging because a fixed heuristic system receives more force or because the author constructed a demanding situation. [S06, S09, S13]

Independent assessment is mixed. The 2004 reviewer preferred *Warlords*' computer opponent. The 2005 reviewer found a direct rush that reliably attacked weak units and became far less threatening when its production was reduced. Other reviewers saw sound strategy as able to overcome chance, but did not provide controlled AI tests. The evidence supports a functional, sometimes dangerous tactical opponent with a sophisticated customisation framework; it does not establish expert operational planning. [S12–S15]

No current learning mechanism, player modelling, adaptive policy, LLM integration, supported external move API, benchmark suite, or controlled win-rate evidence was located. WML and Lua allow deep internal scripting and replacement of components, but that is not yet a documented harness into which an external intelligent agent can simply be plugged. [S09]

## 15. Multiplayer is a distinct form of Wesnoth

Current desktop Wesnoth supports local hot-seat play, LAN or ad-hoc networking, official servers, and online competition. Games can mix humans and AI, use teams, permit observers, record replays, apply timers, and enable fog or shroud. Steam advertises cross-platform multiplayer and Remote Play Together; itch lists local, server-based, and ad-hoc modes for one to nine players. [S05, S11]

Stable 1.18.8's balanced Default Era has six factions:

| Faction | Broad identity |
| --- | --- |
| Loyalists | Lawful combined arms with cavalry, infantry, ranged troops, and mages |
| Rebels | Mobile forest-oriented elves with mixed neutral/lawful support |
| Northerners | Numerous orcs, trolls, goblins, and poison pressure |
| Undead | Extreme resistances and vulnerabilities, drain, poison/plague, and night strength |
| Knalgan Alliance | Dwarven terrain strength combined with faster outlaw units |
| Drakes | Expensive mobile drakes with saurian support and unusual terrain/resistance profiles |

These descriptions are orientations, not complete balance claims. Faction asymmetry comes through cost, roster, movement, terrain, damage, resistance, alignment, and abilities rather than wholly different economic subsystems. Dunefolk remains in a separate “Default + Dunefolk” era in stable 1.18 and joins Default only in development 1.19. [S05, S08]

Standalone multiplayer removes campaign carryover. Both players begin under a shared scenario setup without one side's veterans or gold reflecting earlier battles. It therefore isolates the tactical core from the attachment, foreknowledge, and deferred-failure problems of a long campaign. The 2005 review explicitly preferred this cleaner form after campaign frustration. [S11, S13]

It introduces different costs. Multiplayer games can take hours; additional players create sequential waiting; time controls press new players while experienced opponents may have a decade of faction and map knowledge. RPGFan reported a welcoming community but also pressure for quick turns and a difficult novice entry. A modern selected player immediately encountered the veteran skill gap and declined further PvP. These are access and pacing issues, not defects in faction mechanics. [S15, S18]

No current native ranking system is assumed. The 1.19 roadmap still described native competitive/Elo support as something to investigate, so historical community ladders and tournaments are not projected into the base client. [S08, S15]

## 16. WML, Lua, editor, and add-ons form a realised content pipeline

Wesnoth Markup Language is an XML-like domain-specific language used to define campaigns, scenarios, units, events, dialogue, themes, and large amounts of game data. Lua extends behaviour where configuration is insufficient. The built-in map editor creates terrain maps, but a complete scenario with units, objectives, events, and narrative still requires WML or other authoring work. “Includes an editor” is therefore true but incomplete. [S02, S09–S10]

The add-on server puts publication and installation inside the game's ecosystem. Add-ons can provide single-player or multiplayer campaigns, eras, factions, map packs, scenarios, modifications, resources, and custom AI. The 1.18 server contained 791 entries when inspected:

| Server type | Entries |
| --- | ---: |
| Single-player campaign | 213 |
| Multiplayer campaign | 24 |
| Combined SP/MP campaign | 11 |
| Multiplayer era | 85 |
| Multiplayer faction | 13 |
| Multiplayer map pack | 87 |
| Multiplayer scenario | 83 |
| Single-player scenario | 39 |
| Modification | 155 |
| Resources | 64 |
| Core packages | 3 |
| Other | 14 |
| **Total** | **791** |

This is direct evidence that the extension route was used at scale. It is not 791 finished games. Entries include dependencies, experiments, old projects, incomplete work, and radical transformations of the base rules. Separate branch servers protect stable play from incompatible content but split the catalogue and require authors to port work between versions. [S10]

The pipeline is not merely theoretical. In the 2014 developer interview, contributors said that almost every mainline campaign added after 1.0 had first appeared as an add-on. Community work could be played and criticised before the project polished and promoted it. This links authorship, discovery, testing, and official curation. [S03–S04]

Open source also allows deeper repair or divergence. Players can modify the random model, create role-playing conversions, write cooperative campaigns, or replace AI components. The project can continue when particular contributors leave. The cost is governance, uneven content, documentation and compatibility work, and no commercial authority able to impose one final edition. [S01–S04, S09–S10, S18]

## 17. What reviewers and players most valued

### 17.1 Fast, direct tactical handling

The 2004 beta review placed response time at the centre of its praise. Fast animations, overhead sprites, direct orders, and few commands let the player spend time deciding rather than watching elaborate movement. Even while criticising tutorial and terrain explanation, the reviewer called it one of the most polished GPL games encountered. [S12]

### 17.2 A small grammar whose rules interact

RPGFan's 2010 review argued that Wesnoth did not depend on one novel gimmick; terrain, time, advancement, objectives, income, hidden events, and unit roles worked in harmony. The action grammar could be learned through a short tutorial, while tactical competence required much longer. Current user reviews continue to praise the depth generated by familiar parts. [S15–S16]

### 17.3 Named veterans and visible growth

Random names and traits make otherwise standard recruits distinct; advancement branches and recall preserve their history. Protecting, rotating, and arranging kills for a nearly advanced unit creates stories during play rather than only in scripted dialogue. The 2005 review treated this as a major strength even while arguing that the same system made campaign failure punitive. [S13–S18]

### 17.4 Position matters in several readable ways

Terrain, movement, defence, ZOC, retaliation, healing, leadership, concealment, village control, and time of day all make the map more than distance to target. Each layer is inspectable through help, highlighting, and combat forecasts. Players can often explain a good formation without reproducing a hidden combat table. [S05–S06, S12, S15]

### 17.5 Campaign and scenario variety

Seventeen independent mainline campaigns, varied objectives, many factions and races, and hundreds of add-ons create multiple entry and return points. A disliked story or blocked campaign is not the only route through the product. The shared world's history gives the anthology more continuity than an unrelated scenario collection. [S03, S05, S10, S13, S15]

### 17.6 Human competition and cooperation

Multiplayer removes campaign-state inequality and tests the common rules against another person. Hot-seat, server, LAN, teams, observers, cooperative content, and modifications support different social forms. Several long-term anecdotes are about friends, family, custom cooperative modes, or returning to modified PvE rather than solo mainline completion. [S11, S13, S15–S18]

### 17.7 Free access, portability, and ongoing improvement

Standard C++, SDL, minimal early dependencies, source availability, volunteer ports, and later official storefront distribution put the same rules on major desktop platforms at no required price. Art, music, interface, campaigns, translations, balance, and bugs could keep improving without requiring a commercial sequel to replace the installed game. [S02–S04, S07, S11, S15–S16]

## 18. Friction and adverse evidence

The principal frictions are not one generic complaint about difficulty:

1. **Random outcomes collide with attachment.** Misses are transparent and statistically ordinary, yet a small number of failed strikes can kill a named veteran carrying hours of campaign value. [S06, S13, S15–S18]
2. **A win can conceal future failure.** Lost veterans, wrong advancement branches, low carried gold, or slow completion may not block the current objective but can make a later scenario markedly harder. [S05–S06, S13, S18]
3. **Turn limits enforce pace by constraining patience.** They prevent endless turtling and make time of day meaningful, but can force attacks before the player's preferred phase or punish cautious exploration. Early-finish gold intensifies that pressure. [S05–S06, S14, S18]
4. **Campaign surprises reward replay knowledge.** Hidden reinforcements, ambushes, and scripted changes can convert a first attempt into reconnaissance. The project's own authoring guide recognises the problem. [S06, S15, S18]
5. **Difficulty commonly changes quantity, not intelligence.** More enemy gold, stronger recruits, or fewer turns can create challenge without producing a more insightful opponent. [S06, S13]
6. **Simple actions mask a large study burden.** A player can issue orders quickly while still needing to learn many rosters, terrain interactions, resistances, time phases, specials, economy effects, and advancement paths. [S05–S06, S13, S15, S18]
7. **The tactical loop can feel narrow or repetitive.** A modern adverse reviewer enjoyed one long campaign but stopped during a second after deciding that recruit, position, and attack exhausted the core variety for him. Others route into mods or multiplayer instead. [S18]
8. **Multiplayer can be slow and intimidating.** Sequential turns, large armies, multiple players, timers, and veteran map knowledge impose waiting and a high entry gap. [S15, S18]
9. **Presentation is continuously improved but structurally old-fashioned.** Portrait dialogue, pixel sprites, dense contextual data, and menu/hotkey conventions are charming to some and dated or clunky to others. [S12–S16]
10. **Content abundance is uneven and fragmented.** Mainline campaigns vary; add-ons vary more; branch-specific servers and ongoing revisions make version and quality selection part of the player's work. [S03, S08, S10, S13, S18]
11. **The default game lacks a higher strategic layer.** There is no territorial campaign map, diplomacy, research, base development, or persistent polity. A player seeking empire management may find the tactical depth “ocean deep but puddle wide.” [S05, S18]
12. **Generic fantasy is both shortcut and limitation.** Familiar races make units legible, while some players may see derivative archetypes or morally conventional faction stories. [S13–S15, S18]

These frictions reinforce one another. Persistent units raise the cost of random outcomes; turn limits reduce the ability to insure against them; carryover makes the cost travel forward; hidden scripting makes probability planning incomplete; and a quantity-based difficulty increase reduces the slack available for recovery.

## 19. The central campaign tension: protect, train, risk, reload

Wesnoth asks a campaign player to do four things that cannot be perfectly reconciled:

- **protect** experienced units because they are scarce future assets;
- **train** weaker units by exposing them and arranging kills;
- **risk** valuable units because difficult present objectives demand their strength;
- **accept uncertainty** because combat is resolved through multiple visible random strikes.

A veteran hidden permanently in the rear is preserved but does not solve the battle. A recruit never given a final blow does not advance. A powerful unit used at the front can die. A player who reloads every adverse roll preserves the ideal roster but converts risk management into repeated outcome selection. The official advice prefers accepting losses and changing strategy; the campaign's later roster expectations can make that ethos hard to sustain in practice. [S05–S06, S13, S15–S18]

The design does provide mitigations: death probabilities before commitment, enemy-reach previews, lines and ZOC, healing, reserves, full healing on advancement, minimum starting gold, difficulty selection, scenario restarts, independent campaigns, and alternative modes. Those controls shift risk from ignorance toward choice. They cannot remove the emotional asymmetry between one lucky recruit surviving and one long-serving named unit disappearing. [S05–S06]

This is not simply “RNG good” or “RNG bad.” The same randomness creates uncertain fronts, improbable escapes, memorable promotions, and a reason to build redundancy. It also produces the most durable adverse theme in the reception record. [S06, S12–S18]

## 20. Reception over time

Reception is unusually version-sensitive:

| Date and source | Version context | Favourable evidence | Adverse evidence |
| --- | --- | --- | --- |
| Tea Leaves, March 2004 [S12] | Pre-1.0 beta | Exceptional responsiveness, interesting weapon/ZOC interactions, varied objectives, music, GPL polish | Weak tutorial explanation, opaque terrain presentation, Mac UI defect, writing errors, inferior AI |
| Inside Mac Games, October 2005 [S13] | Near 1.0 Mac release | Free “diamond,” unit personality, veteran strategy, deep tactics, large content, active multiplayer/add-ons | Direct-rush AI, steep learning, dated presentation, veteran/gold compounding, repeated campaign block |
| GameFAQs, July 2009 [S14] | Selected user experience | 9/10; elegant play, editor, random maps, multiplayer, tutorial/help, art/music | Turn limits can force attacks; leader and veteran protection create pressure |
| RPGFan, May 2010 [S15] | Approximately 1.8 era | 88/100; excellent tutorial, harmonious rules, transparency, stories, WML, community, two years of return play | Long and demanding campaigns/matches, RNG frustration, novice multiplayer pressure |
| Steam and itch, August 2026 [S16] | Living product, versions mixed | 94% of 3,201 English Steam reviews positive; itch 4.8/5 from 176; long-play and nostalgia testimony | Misses, save-scumming temptation, dated UI, session length, learning curve |
| Patient-gamer retrospectives, 2023 [S18] | Modern but version-unspecific | Tactical depth, mods, campaign variety, enduring affection, co-op and PvE afterlives | Campaign burnout, narrow loop, foreknowledge, veteran compounding, RNG, waiting, skill gap |

The early complaints are themselves evidence of maintenance. The tutorial praised in 2010 is not the tutorial criticised in 2004. Artwork and sound observed improving across two years cannot be used to score current presentation, but they demonstrate why reviews of a living open-source game age unusually quickly. [S12, S15]

The current aggregates are strongly favourable, but an average score would conceal the most informative disagreement. Some players treat chance, permanent loss, and slow careful play as the source of battlefield stories; others understand the system and stop because those same features make campaigns exhausting. [S15–S18]

## 21. Evidence for repeated play and long afterlife

No representative retention curve exists. The evidence nevertheless supports several distinct forms of realised longevity:

| Form | Evidence | Limit |
| --- | --- | --- |
| Continued maintenance | Public releases from 2003 through stable 1.18.8 in August 2026 | Project survival is not the same as typical player retention. [S01–S08] |
| Large supplied anthology | Seventeen current solo campaigns plus multiplayer maps and tutorial | Availability does not establish completion. [S05, S11] |
| Community publishing | 791 entries on the 1.18 add-on server; mainline promotion pipeline | Entries vary hugely and traffic is not active use. [S03–S04, S10] |
| Human play | Hot-seat, LAN, server, teams, observers, co-op add-ons, replays | No current whole-ecosystem participation count. [S11, S13, S15–S18] |
| Individual return testimony | RPGFan reviewer played on and off for two years; current users describe decade-long returns and hundreds of launcher hours | Selected anecdotes, sometimes nostalgic and version-mixed. [S15–S18] |
| Current reception | Strong Steam and itch aggregates | Store populations omit other channels and select reviewers. [S16] |
| Authorship as retention | Players can progress from campaign consumer to WML author, artist, translator, mapper, or AI designer | Contributor conversion rate is unknown. [S02–S04, S09–S10] |

The strongest explanation supported by direct developer evidence is not an infinitely replayable fixed campaign. White said that the original one-campaign form would normally be exhausted. Continued engagement came from adding more campaigns, enabling players to make their own, and establishing multiplayer. The engine became a place to play and create rather than merely a story to finish. [S02–S03]

The architecture offers graceful exits from one kind of fatigue. A campaign player can change story; a blocked player can download content; a tactician can switch to symmetrical multiplayer; friends can use hot-seat or cooperative modifications; an author can turn from consuming scenarios to making them. That does not guarantee that any one player will take the next route, but it prevents one exhaustion point from being the only end of the product. [S10–S18]

There is equally direct evidence of attrition. One modern reviewer recognised the loop by the fourth map, completed one large campaign, abandoned a second halfway through, and declined the PvP learning investment. Inside Mac Games' reviewer replayed a campaign repeatedly but remained blocked. These are not commercial “failures”; they show that abundant content cannot compensate for a loop or progression structure that has ceased to reward a particular player. [S13, S18]

## 22. Platforms, versioning, licensing, and preservation

On the research date, official stable 1.18.8 builds or packages exist for Windows, macOS, and GNU/Linux, with source available. Steam and itch provide additional discovery and updates. Stable 1.18 releases are intended to interoperate within the branch and use the largest current stable multiplayer and add-on community; odd-numbered 1.19 builds are explicitly development releases and may break. [S07, S11]

Mobile ports have existed, but their maintenance and version paths differ from the desktop project. They are not used here to establish current rule or interface parity. No browser version is part of the current official stable product. [S07, S11]

The exact 1.18.8 repository licences source under GPL version 2 or, at the user's option, any later version. Most legacy art and music use compatible GPL terms; newer assets can use Creative Commons Attribution-ShareAlike 4.0. The live Download page simplifies this to GPL v3-or-later. The important historical fact is not a single storefront label but that source, engine, content formats, and redistribution rights made preservation, porting, modification, and contributor succession structurally possible. [S07]

Version-specific servers and source tags preserve old branches better than an overwritten live service would. They also mean that campaigns and saved content are not timeless files guaranteed to run forever without porting. Wesnoth's preservation model is active maintenance plus available history, not perfect forward compatibility. [S07–S10]

## 23. Evidence limits

- No remembered Barry-specific version, platform, campaign, or mode has yet been identified.
- No representative campaign-completion, reload, retention, multiplayer, or add-on-usage dataset was found.
- Current rules and counts are exact for stable 1.18.8 only; scenario WML can override many defaults.
- Historical campaign criticism cannot be projected unchanged through repeated revisions.
- Current aggregate reviews combine players who may have used different branches, campaigns, add-ons, and modes.
- AI documentation describes architecture and authoring affordances, not playing strength.
- Add-on quantity does not measure quality, uniqueness, maintenance, or completion.
- The current manual's village-income prose conflicts with its formula and configuration; the latter control.
- Stable and development faction counts differ, and current promotional copy is not consistently branch-qualified.
- Project duration and selected thousand-hour playtimes establish possible devotion, not typical devotion.

## 24. Research finding, without a future-game conclusion

*The Battle for Wesnoth* began as a deliberate rejection of an over-ambitious project: a small set of commands, terrain-based hit chances, local abilities, unit advancement, and an army worth carrying forward. That core became much deeper through interaction rather than through a proliferation of top-level systems. Terrain governs defence and movement; damage types meet resistances; weapon category determines retaliation; time of day changes damage; ZOC and auras create formations; villages connect position and economy; experience turns tactical kills into campaign investment. [S01–S06]

Its most celebrated emotional mechanism and its most persistent adverse mechanism are the same system viewed across different outcomes. Named, trait-bearing veterans create attachment, stories, and long planning horizons. Random strikes, permanent death, turn limits, carryover, future roster expectations, and scenario foreknowledge can turn that attachment into reloading pressure or delayed campaign failure. Multiplayer removes much of this campaign-state burden while introducing time, skill-gap, and opponent-access costs. [S05–S06, S11–S18]

The project's extraordinary afterlife does not rest on a fixed campaign remaining inexhaustible. It rests on a stable enough tactical identity surrounded by many independent campaigns, human play, open source, WML and Lua, an add-on server, contributor succession, and a demonstrated path from community experiment to mainline content. The same living structure makes version discipline essential: there is no honest single campaign count, faction list, AI characterisation, or review verdict that can be detached from its release. [S01–S11]

Those findings are retained as evidence about this case only. Barry's personal response, cross-game themes, and any implication for the proposed browser-based fantasy wargame remain deferred until the corpus-wide fireside discussion and later comparative audit.
