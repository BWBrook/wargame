# Case 006: *Warlords* and *Warlords II*

**Original concept and Amiga programming:** Steve Fawkner  
**Original-game AI design and programming:** Roger Keating  
**Original-game additional development and production:** Gregor Whiley, with IBM development by Stephen Hart  
**Warlords II game design:** Steve Fawkner, Roger Keating, Gregor Whiley, and Ian Trout  
**Developer and publisher:** Strategic Studies Group (SSG), Australia  
**Core release lineage:** *Warlords* for Amiga and IBM-compatible computers in 1990; *Warlords II* for IBM/DOS in 1993 and Macintosh in 1994  
**Primary remembered platform:** Not yet disclosed  
**Form:** One-to-eight-player turn-based fantasy conquest games combining cities, production, terrain movement, eight-unit armies, heroes, magical assets, and computer opponents  
**Research status:** Independent paired dossier complete; personal evaluation deferred to the corpus-wide fireside discussion  
**Comparative-design status:** Deliberately deferred

Source IDs refer to the separate [source ledger](sources.md).

## 1. Scope and edition boundary

This case treats the 1990 *Warlords* and the original 1993 *Warlords II* as one evolutionary package. That is justified mechanically as well as historically. *Warlords II* was substantially rewritten, but it retained the first game's recognisable strategic skeleton: conquer cities, turn cities into income and troops, assemble stacks of up to eight armies, exploit movement and combat bonuses, hire heroes, search for artefacts and allies, and eliminate rival empires. [S01–S02, S05]

The primary objects are:

| Object | Role in this dossier | Boundary |
| --- | --- | --- |
| *Warlords* (1990) | The compact original design: one authored world, eight empires, and the foundational conquest system | Common rules are taken from the all-version manual. Platform-specific speed, sound, and controls are not inferred where the remembered platform is unknown. [S01, S03] |
| *Warlords II* (IBM/DOS, 1993) | The direct successor and main evolutionary comparison | The original 1993 manual is controlling for its features. [S02] |
| *Warlords II* Macintosh conversion (1994) | Platform history and evidence of continued commercial development | Not silently substituted for the DOS interface or performance. [S08, S23] |
| *Warlords II Scenario Builder* (1994) | Evidence of the original system's expansion into player-authored content | A separate product, not a feature of the base 1993 game. [S07, S26] |
| *Warlords II Deluxe* (1995) | Evidence of afterlife, remote multiplayer, and community longevity | Not used to back-project PBEM, modem, network play, an editor, 256-colour graphics, or bundled scenarios into the 1993 release. [S26–S28] |

The later branch of the series is outside the user's requested scope and is not analysed. Current store bundles create a particular trap: products now sold under the paired name contain *Warlords* and ***Warlords II Deluxe***, not an untouched copy of the original 1993 *Warlords II*. Modern store features and reviews therefore cannot be assigned without qualification to the base sequel studied here. [S24–S25]

No platform disclosure or evaluative recollection was supplied for this case. There is consequently no `barry-context.md`: the only user instruction is the scope of the paired object, not evidence about why it did or did not endure for him.

## 2. Origins, authorship, and stated influences

Steve Fawkner had been writing games and taking them to conventions before *Warlords*. According to his retrospective account, Andrew Buttery of Mind Games suggested that he submit the design to SSG. The company initially regarded fantasy as outside its historical-wargame identity, but Ian Trout's young son found the submission and became absorbed by it. SSG then spent roughly six months refining it. Fawkner credits Roger Keating with both AI work and important mentorship, and describes a Melbourne–Sydney collaboration conducted by telephone and exchanged floppy disks. [S04]

Fawkner has named three conspicuous influences:

- TSR's *Dragons of Glory* supplied a fantasy-war reference point;
- Walter Bright's *Empire* demonstrated how a simple rule vocabulary could still sustain strategic depth;
- Mike Singleton's *The Lords of Midnight* influenced the presentation of a fantasy world and its battles. [S03–S04]

These statements establish design ancestry, not one-to-one copying. The resulting game has its own credited team and distinctive combination of city production, eight-way territorial competition, heroes, ruins, stack bonuses, and SSG computer opposition.

The credits also resist the later habit of describing the series as a solo-authored Fawkner work. Fawkner created and programmed the Amiga original; Roger Keating designed and programmed its artificial intelligence; Stephen Hart developed the IBM version; Gregor Whiley coordinated production and added development; and Graeme Whittle and Nick Stathopoulos supplied computer and sleeve art. For *Warlords II*, game design is jointly credited to Fawkner, Keating, Whiley, and Ian Trout, with a broader development and art team. [S01–S02]

Fawkner formed Infinite Interactive in 1992 but continued collaborating with SSG. The sequel's credits and Gregor Whiley's contemporary design notes both present it as collective work rather than a simple reskin or one-programmer sequel. [S02, S04–S05]

## 3. The original *Warlords*: a closed contest over Illuria

### 3.1 One world, eight positions, eighty cities

The original game is an eight-sided struggle for Illuria. One to eight humans can take any mixture of sides, with the computer filling the rest; it is also possible simply to watch eight computer players fight. The authored map contains eighty cities and eight empires: the Sirians, Storm Giants, Grey Dwarves, Orcs of Kor, Elvallie, Selentines, Horse Lords, and Lord Bane. The formal objective is complete domination—control all eighty cities and eliminate all seven opponents. [S01]

The sides share the same rule system and most of the same army vocabulary. Their practical asymmetry comes from:

- different starting positions and surrounding terrain;
- different starting treasuries;
- the particular army types and production rates available in nearby cities;
- access to coasts, roads, mountains, forests, neutral cities, ruins, and rivals;
- the geometry of early expansion and the attitudes formed by computer opponents.

This is positional and economic asymmetry rather than a roster of bespoke faction powers or separate technology trees. All players begin with one capital and a hero, but not with identical opportunities. The fixed map makes those differences learnable: repeated play can become knowledge of openings, bottlenecks, rich cities, production centres, ruin routes, and dangerous neighbours. [S01, S09]

### 3.2 The tutorial teaches an opening, not a miniature game

The manual includes a hands-on tutorial, but it uses the real Illuria game. The learner takes Elvallie against seven Knight-level computer opponents, names the initial hero, begins production, recruits an archer, and captures a nearby neutral city. The closing instruction—two cities taken, seventy-eight to go—reveals both its strength and limit. It teaches the genuine interface and first expansion loop, but does not reduce the world, opponent count, or ultimate commitment. The manual also asks the reader to study part of the setup chapter before beginning. [S01]

This is more welcoming than rules-only onboarding, yet less protected than *Warlords II*'s later six-city tutorial scenario. Failure is handled informally: if the almost-certain first attack loses, the manual recommends restarting.

### 3.3 The turn loop

A turn has a short, repeated cadence:

1. Receive any offer from a new hero.
2. Review completed production and decide whether each city should repeat it.
3. Collect city income and pay army upkeep.
4. Issue production orders, move forces, search, build, and attack.
5. End the turn and watch the other seven sides act.

The main phase is open rather than divided into many mandatory subphases. Most play consists of moving stacks, attacking cities or rival armies, setting production, and tending the economy. This makes the basic verb set small even when the empire becomes large. [S01]

The strategic loop is exceptionally direct:

`capture cities → gain income and production → field and concentrate armies → capture more cities`

Heroes and artefacts modify that loop without replacing it. There is no separate research tree, workforce, building chain, resource market, tactical battle screen requiring orders, or campaign story to administer.

## 4. Cities, money, production, and strategic reach

### 4.1 A city is several assets at once

Almost all gold comes from cities. A city adds its income at the beginning of every turn, can produce armies from its local list, serves as a defensive position, and extends the player's geographic reach. Losing one also loses a proportional share of the owner's distributed treasury; the conqueror receives half of that lost share. City capture therefore changes territory, income, production, current cash, and the front line in one event. [S01]

Armies cost gold to produce and then half their construction cost in upkeep each turn. Heroes must be hired, while towers and stronger city defences also consume money. Expansion is thus positive but not free: too many expensive troops can bankrupt a large empire, and large garrisons everywhere are unsustainable. Disbanding is a legitimate economic response. [S01]

This economy is legible because there is only one currency and one principal productive asset. Its depth comes from allocation and geography rather than from many resource types. Cheap troops arrive quickly but may be poor in decisive combat; elite and special troops take longer, cost more, and impose continuing upkeep.

### 4.2 Local production and vectoring

Each city has a fixed list of army types it can build, with particular construction times and costs. A city produces one type at a time and can hold up to four available production choices. Local availability makes the capture of a useful city qualitatively different from gaining a generic point of income. [S01]

Production can be **vectored** from a source city to another city. The delivery takes two additional turns, and at most four cities may vector into one destination. Vectoring lets the player turn a safe rear production base into reinforcement for a distant front, but it also adds delay and requires continued management. The system offers operational logistics without supply counters or explicit transport lines. [S01]

The original interface exposes individual city information but offers limited empire-wide production administration. Later retrospective play identified difficulty surveying every queue or quickly changing a network of vectors as a major source of late-game labour. That criticism is anecdotal but consistent with the system's one-city-at-a-time structure. [S18]

### 4.3 Fortification and destruction

Gold can strengthen city defence or build towers. Towers create defensible positions outside cities; cities and towers also contribute combat bonuses. A player can raze a city or tower permanently. The ability to destroy productive geography gives retreat and denial strategic meaning, but also allows the eighty-city world to be irreversibly reduced. [S01]

## 5. Movement, armies, and combat

### 5.1 Armies and terrain

The original has sixteen army types across ordinary troops, heroes, and special allies. Movement allowances and terrain costs differ. Roads, open ground, hills, woods, marshes, mountains, and water shape reach; movement points can partly carry over between turns. A stack moves at the pace and under the restrictions of its least compatible member. Naval units can carry up to seven other armies. [S01]

Up to eight armies occupy a square. A player may select one army or a whole stack, so forces can be split for expansion, garrisoning, or concentration. A small tactical map occupies the main screen, while a strategic overview remains visible for orientation. Reports can reveal army locations and city ownership across the whole world. The baseline game is consequently a contest under broad strategic information, not an exploration game or modern proximity-based fog of war. [S01]

Movement is simple to order but was one of the original's technical weaknesses. Whiley's sequel notes call the old path routines “eccentric”; armies could take undesirable routes, and computer players were particularly poor at handling water. [S05]

### 5.2 Decisive, sequential combat

An attack is made from an adjacent square, costs movement points, and commits a stack of at most eight armies. The defender of a city can draw upon every army in that city—up to thirty-two—so major sieges may require several successive assault stacks. [S01]

Combat resolves as a sequence of one-on-one fights. Units take hits until destroyed, the survivor meets the next opponent, and battle continues until one side is eliminated. There is no retreat choice or tactical intervention after battle begins. The order of units therefore matters: expendable troops can absorb risk before valuable heroes and elite units. [S01]

Base strength is only part of the calculation. Heroes, flying units, special allies, artefacts, terrain, cities, and towers can add or cancel bonuses. Well-constructed “A-Team” stacks amplify ordinary troops through overlapping bonuses. The system strongly favours quality, but the weakest infantry can still kill a dragon because combat remains probabilistic. [S01]

This creates a characteristic tension:

- the strategic preparation is rich—composition, order, bonuses, terrain, timing, and reinforcement waves all matter;
- the resolution is automatic, lethal, and sometimes dramatically contrary to nominal strength;
- because the loser has no withdrawal, an uncertain result can erase an entire prepared stack.

The rules are easy to execute because the computer handles every die and modifier. They can nevertheless feel opaque when the displayed outcome overwhelms the player's intuitive estimate, particularly if the buried bonus tables have not been mastered.

## 6. Heroes and fantasy as strategic modifiers

The first hero is free. Further heroes periodically offer themselves for increasingly large hiring fees. Heroes can lead stacks, search ruins, temples, libraries, and sages, carry artefacts, discover allies, find gold or intelligence, and die to monsters. Four temples can each bless an army once, raising its strength by one. Four blessings on a favoured unit are therefore possible. [S01]

The original game contains fourteen artefacts and several classes of magical or monstrous ally. Artefacts may improve a hero directly or strengthen the whole stack through battle and command effects. A hero-led expedition into ruins is a small risk–reward adventure embedded inside the conquest game:

- divert a rare leader from the front;
- spend movement searching;
- risk combat with an unknown monster;
- receive gold, information, an item, or an exceptional ally;
- bring that gain back into the territorial war.

The hero is not a separate role-playing character with an experience tree, skills, dialogue, or campaign persistence. Progress is equipment-, blessing-, and alliance-based. This keeps the fantasy layer mechanically important without allowing it to consume the strategic scale.

## 7. Computer opposition and proto-diplomacy in the original

### 7.1 Four stated levels under common rules

Each non-human side can be set independently to Knight, Baron, Lord, or Warlord. The manual explicitly says computer players use the same rules and receive no secret bonuses. Lower levels are weakened behaviourally: Knights deliberately waste money and sometimes “forget” plans or enemies. [S01]

Roger Keating's credited AI manages the same economy, production, expansion, stack movement, combat, and geography as a human. A 1991 *Computer Gaming World* review praised it for attacking weakness, defending important cities, making deep penetrations, razing exposed assets, and presenting a serious opponent without resource cheating. The game later shared that magazine's 1991 Wargame of the Year award. [S09–S10]

These are unusually strong contemporary endorsements, but not technical validation. No source code, benchmark corpus, win-rate table, or systematic comparison among levels was found. The implementation is fixed heuristic AI: there is no evidence of learning between games, adaptation to a named individual, or planning performed by a general-purpose intelligent agent.

### 7.2 Attitude without negotiation

Computer players maintain an attitude toward the human, ranging from Apathy through Distrust, Dislike, Disdain, Disgust, Hatred, and Loathing. Capturing cities and other aggressive behaviour worsens relations. A computer side may therefore ignore, tolerate, or concentrate upon the human according to a changing internal relationship. The player can read the attitude report but cannot negotiate, propose an alliance, offer payment, or improve relations through a diplomatic action. [S01]

This is emergent politics rather than a diplomacy game. It creates de facto truces, grudges, opportunism, and shifting fronts among eight active sides without introducing a negotiation phase. Whiley's later account says players often imagined distinct personalities in the original AI even though none had actually been designed. The sequel made that perceived behaviour explicit. [S05]

## 8. Pacing, multiplayer, and ending the original game

The original supports hot-seat play for as many as eight people in any human/computer mixture. That breadth is notable: the same world can be a solo challenge, a shared human alliance of convenience, a mostly human contest, or an observed AI simulation. The long territorial arc and irreversible victories and losses naturally generate stories around heroic stacks, betrayed fronts, ruined capitals, improbable combats, and hated neighbours. [S01]

The price of breadth is downtime. Every active side completes a sequential turn. Large human games require passing the computer and concealing decisions; large solo games require waiting while seven opponents move. The fixed map removes setup uncertainty, but the eighty-city objective can produce a long consolidation and cleanup phase once one empire has become dominant.

The commonly repeated claim that *Warlords* simply ends at forty-one cities is inaccurate. The manual gives complete conquest as the objective. In a solo game against seven computers, the survivors may **offer surrender** if the human owns more than forty cities and the strongest computer is not within fifteen cities of that total. The player may accept the victory or refuse, after which the surviving computer factions band together and the war continues. [S01]

That rule is both pacing device and dramatic escalation. It avoids compulsory capture of every last city when the contest is clearly unequal, but it also gives the player a voluntary final challenge. It does not solve every snowballing game: the offer depends on a particular solo configuration and relative city totals.

## 9. Why *Warlords II* was a rebuild rather than a replacement

Gregor Whiley's contemporary design account is unusually candid. The first *Warlords* was SSG's bestseller, but parts of it were constrained by the original design. The team began the sequel with a “clean slate” and discarded most of the old code while trying to retain the enjoyable parts. [S05]

Several foundations changed:

- the display moved from 640×200 in sixteen colours to 640×480 in sixteen colours;
- 386-class hardware and expanded or extended memory allowed a larger database and interface;
- Roger Keating replaced the movement routines entirely;
- computer players received much richer information and pathfinding support;
- the main screen was redesigned to reduce dialog use;
- one authored world became a set of scenarios plus generated maps;
- difficult-to-see bonus rules were simplified and displayed directly. [S02, S05]

The sequel is nevertheless coherent with its predecessor because the player is still solving the same high-level problem. Cities remain the source of gold and armies; upkeep limits expansion; production can be vectored; eight-unit stacks cross a terrain map; combat remains automatic, sequential, and decisive; heroes search ruins and gather allies and artefacts; and victory still comes through continental conquest. The rewrite expands the number of ways that contest can be configured and narrated rather than changing its basic scale.

## 10. Worlds, setup, and information in *Warlords II*

### 10.1 Five worlds and a protected tutorial

The base 1993 game supplies five normal scenarios and a dedicated tutorial:

| Scenario | Sides | Cities | Ruins | Practical scale |
| --- | ---: | ---: | ---: | --- |
| Tutorial | 2 | 6 | 6 | A genuinely small instructional contest |
| Isles of Sorcery | 4 | 20 | 16 | Short game |
| Dragon Realms | 5 | 40 | 24 | Medium game |
| Erythea Campaign | 8 | 80 | 40 | Full game |
| Hadesha Campaign | 8 | 80 | 40 | Full game |
| Isladia Campaign | 8 | 80 | 40 | Full game |

The manual explicitly presents twenty- and forty-city scenarios for people wanting shorter games. Unlike the original tutorial, the sequel's six-city scenario limits both opponent count and strategic horizon. [S02, S16]

The five normal maps supply multiple authored geographies, but they do not form a narrative campaign. Armies, heroes, and conquered territory do not carry from one scenario to another. Each game is a self-contained rise to domination.

### 10.2 Random worlds, but no base-game editor

The random-map generator lets the player vary water, hills and mountains, forest, city count, and whether cities may produce special armies. A generated map can be saved and replayed. Combined with the Hidden Map option, this creates worlds whose geography is unknown at the start. [S02, S05]

The generator is not a scenario editor. The 1993 manual contains no facility to paint a map, place units, write events, or author a complete scenario. A contemporary *Compute!* reviewer specifically lamented the lack of an editor and wanted more generator controls and more supplied scenarios. SSG released the separate *Warlords II Scenario Builder* in 1994. [S07, S14, S26]

This distinction matters to any account of replay. The base game provides effectively unlimited generated geography, but deliberate player authorship, imported worlds, alternative graphics, and the later archive of hand-balanced scenarios depend on follow-on products.

### 10.3 A layered option system

Beginner, Intermediate, and Advanced presets choose bundles of options; a custom setup permits individual selection. Important switches include: [S02]

| Option | What it changes |
| --- | --- |
| Neutral cities | Average, strong, or active defenders; active neutrals may begin producing after a failed assault |
| Quick Start | Distributes cities among players instead of beginning with a neutral-city expansion race |
| Military Advisor | Gives an accurate pre-combat estimate |
| Hidden Map | Conceals terrain outside the revealed starting area until explored |
| Random Turn Order | Reorders sides each round, allowing a player to move last and then first |
| View Enemies | Permits or prevents exact inspection of enemy stack composition |
| View Enemy Cities | Permits or prevents inspection of enemy production |
| Intense Combat | Increases casualties and reduces the advantage of high-quality armies |
| Quests | Adds hero-specific objectives and rewards |
| Diplomacy | Adds allied, neutral, and hostile relations, proposals, and reputation |

The sequel can therefore be played as a relatively transparent conquest game close to the original, or as a less predictable contest with exploration, uncertain turn order, restricted intelligence, active neutrals, diplomacy, and quests. Options are not all mere difficulty settings: some change information, pacing, variance, political possibility, and the relative value of units.

Configurability also introduces setup work and balance ambiguity. A letter in SSG's own magazine complained of “too many options”; the editor replied that players could mix, match, or ignore them. That exchange is publisher-mediated anecdote, but it captures a real cost of moving from a closed design to a configurable platform. [S06]

## 11. The sequel's interface and movement repair

The higher-resolution screen combines a playing map, permanent overview map, action palette, information area, and stack palette. A selected square's armies can be grouped or separated directly on the main screen. Context-sensitive cursors signal movement, attack, diplomatic restriction, inspection, and advice. Keyboard shortcuts and four customisable large buttons let players privilege their most-used commands. Right-click help explains objects in place. [S02, S05]

Movement orders persist across turns. The player chooses a distant destination and the pathfinder supplies a route; the route can change as hidden terrain is revealed. Commands such as Move All and Next Group reduce the labour of finding unspent units. A stationary stack can encamp for a defensive bonus. [S02, S05]

Water movement is deliberately abstracted. An army sent across water finds a coast, bridge, or port, hires a boat, crosses, disembarks, and resumes its path. Each group effectively carries its own transport capability rather than waiting for a separately produced fleet. This removes naval logistics as a production problem, but it fixes a major original weakness: both humans and AI can execute amphibious movement reliably. Whiley joked that the first game's computer players suffered from “hydrophobia”; in the sequel coastal and river cities become viable AI targets. [S02, S05]

These changes reduce moment-to-moment friction without eliminating late-empire administration. Dozens of cities still have production and vectors, many stacks still require destinations or defensive orders, and every active side still takes a sequential turn. A 1994 reviewer reported roughly a minute between turns on a 486SX. The exact wait was hardware- and game-state-dependent, but it establishes that improved reasoning and a larger world had a visible period-machine cost. [S14]

## 12. A richer empire: production and conquest choices

Cities still produce one army at a time from up to four established types, and armies still cost both an initial build price and continuing upkeep. The sequel adds a costly one-off investment that establishes a new producible army type in a city. A player can replace a production slot, turning captured gold into durable local capability. [S02]

Vectoring remains and still adds two turns, with at most four source cities delivering to one target. The initial hero now carries a standard that can be planted as a vector destination. A forward army assembly point can therefore exist outside a city, allowing several rear cities to feed a planned offensive. [S02]

Conquest now presents four escalating choices:

- **Occupy:** take the city and its production intact;
- **Pillage:** remove its most expensive production capability and receive gold;
- **Sack:** leave only its cheapest production capability and receive more gold;
- **Raze:** destroy the city permanently and receive no gold.

Pillage, sack, and especially raze damage the conqueror's diplomatic standing even if the optional negotiation system is disabled. A city is therefore no longer simply captured or erased. The player weighs immediate money, future production, denial, geography, and political reputation. [S02]

The economy remains compact. There is still one currency, no trade network, no civilian population model, and no technology tree. Depth comes from when and where money is converted into armies, production rights, heroes, or forward concentration.

## 13. Armies and combat in *Warlords II*

The army set grows to twenty-eight types. Ordinary units coexist with terrain specialists, siege units, cavalry, monsters, flying troops, supernatural allies, and heroes. A stack still holds at most eight armies; all armies in a square defend together even when organised into separate movement groups. Cities can defend with up to thirty-two. [S02]

The designers simplified and surfaced bonuses after observing that players ignored the original's buried side, terrain, and combat modifiers. In the sequel, a terrain movement advantage held by one member can help the group, while combat bonuses from heroes, special units, artefacts, cities, terrain, and encampment are displayed. Units such as catapults, elephants, archons, and devils can cancel or alter opposing advantages. Each scenario sets a ceiling on total stack bonuses. [S02, S05]

Combat remains a decisive series of one-on-one duels. The player can customise a global fight order, commonly placing expendable units first; once battle starts, no tactical order or retreat interrupts it. A unit normally dies after two hits. The appendix reveals a compact probabilistic mechanism: each unit rolls on a scenario-dependent die, normally between sixteen and thirty-two sides; a single low result causes a hit to the low roller, while matching high or low results repeat the step. *Intense Combat* changes the die and reduces the bias toward strong units. [S02]

Two additions create within-scenario continuity:

- a qualifying ordinary army in a hero-led victory may receive a medal and +1 strength, up to four times;
- heroes gain experience from searching, capturing cities, winning or defending battles, blessings, and quests; each level adds strength and movement. [S02]

Veteran units and named heroes can become remembered assets, making survival matter beyond replacement cost. Their persistence ends with the scenario, however, and the same lethal, non-retreating combat can erase them abruptly. Later players specifically recalled spectacular upsets—weak scouts killing dragons—as either memorable drama or evidence that combat felt excessively random. [S20]

## 14. Heroes, quests, and diplomacy in *Warlords II*

Heroes retain their original role as leaders, explorers, and carriers of artefacts, but gain explicit progression. The initial hero and standard are supplied at the start; later heroes may offer themselves if enough money is available. Ruins can contain monsters, gold, sages, items, or allies. The number of heroes is capped according to territorial position, preventing unlimited accumulation. [S02]

With Quests enabled, a temple may assign a specific objective to a particular hero. Only one quest can be active for a side. Completion can grant a powerful item, reveal a stronghold, provide an ally, or award money and a large experience gain. This turns exploration from opportunistic ruin looting into a temporary, named strategic obligation. It can also pull a valuable leader away from the main front. [S02]

With Diplomacy disabled, every side exists in perpetual war. With it enabled, relationships are Allied, Neutral, or Hostile. Players exchange proposals, and the more hostile of two incompatible proposals prevails. Allies may pass through one another's stacks. Neutral powers may attack armies but not cities without diplomatic consequence. Betrayal remains possible, but harms a visible reputation that runs from statesmanlike standing to “Running Dog”; the AI uses credibility and relations when selecting allies and enemies. [S02]

This is a qualitative change from the original's one-way attitude report. The player can now propose, accept, reject, preserve, or break relationships. Yet diplomacy remains subordinated to conquest. There are only three formal states, no trading or territorial bargains, and a total-conquest game ultimately requires relationships to fail or be broken.

## 15. The sequel's computer opponents

The setup offers Knight, Lord, and Warlord AI, omitting the original's Baron level. A named personality can be selected within a level, or the standard/default opponent can be used. Side names may also be changed. The personalities are meant to make differences in aggression and priorities legible rather than leave players to project character onto generic behaviour. [S02, S05]

Both the manual and developer notes claim that the top AI is stronger because it makes better decisions, not because it receives hidden production, hero, cost, or combat advantages. A separate **Enhanced Production** switch can openly add +2 to a chosen side's armies as a handicap. The “I am the Greatest” setup challenges Warlord-level opponents and provokes concentrated hostility. [S02]

Keating's new system depends on a larger database and reliable pathfinding: deciding to attack a distant coastal city is useless if the computer cannot find or traverse the route. The AI was designed to manage generated maps, water crossings, differing information rules, diplomacy, production investment, and the larger unit set. Contemporary *Computer Gaming World* criticism called it one of the finest computer opponents then available and reported that it could win, not merely delay a human victory. [S05, S13]

This is the paired package's best-supported acclaimed feature:

- the manual documents fair-rule intent;
- the developer identifies the information and pathfinding work behind it;
- independent contemporary reviews describe credible offensive and defensive behaviour;
- difficulty levels, personalities, handicaps, and hostility settings give players several ways to extend solo challenge;
- fan strategy material continued to analyse how to make the AI harder. [S01–S02, S05, S09, S13, S15]

The evidential limit remains important. No code or controlled match data was located. The AI is heuristic and authored; it does not learn from earlier games. Fan analysis also identifies weaknesses—for example, settings that disadvantage it, imperfect hero development, and exploitable diplomacy. “Strong AI” is therefore a well-supported contemporary experience, not a claim of human equivalence or indefinite resistance to mastery. [S15, S19]

## 16. Victory, campaign length, and multiplayer boundaries

The formal goal is again to eliminate opposition and control the world's cities. When one player owns more than half, surviving computer players may offer surrender. Acceptance ends the game; refusal continues the struggle to the last enemy city. There is no fixed turn limit. [S02]

The supplied map sizes give rough session control, but full campaigns remain substantial. A contemporary review estimated fifteen to twenty hours. The short and medium worlds are therefore not cosmetic: they make the same system available at materially different commitments. [S02, S13]

The original 1993 DOS game supports multiple humans by assigning several sides to **Human** on the same machine. It also permits an absent human to be switched to computer control, though the manual warns that the AI may require several turns to sort out the inherited position. The manual contains no email, modem, null-modem, or network procedure. [S02]

Remote play is frequently misattributed to the base sequel because *Warlords II Deluxe* later supported play by email, modem, serial/null-modem, and NetBIOS network. The influential long-running tournament community used that later infrastructure. It proves that the *Warlords II* rules engine supported durable remote competition once the tooling existed, not that a 1993 purchaser received it. [S17, S26–S28]

## 17. What remained and what evolved

| Design dimension | *Warlords* (1990) | *Warlords II* (1993) | Nature of evolution |
| --- | --- | --- | --- |
| World | One fixed eighty-city Illuria map | Five normal maps, a six-city tutorial, and saveable random maps | From authored board to configurable world set |
| Sides | Eight fixed empires; positional asymmetry | Scenario-defined sides, names, presence/absence, and personalities | More configurable identity, still a shared rules vocabulary |
| Economy | City income, production cost, upkeep, heroes, defences | Same core plus investment in new city production and richer capture choices | More long-term allocation without a broader resource model |
| Production logistics | Local lists and city-to-city vectoring | Same, plus replaceable production and a plantable forward standard | Greater strategic reach and specialisation |
| Movement | Manually selected routes; awkward water handling | Persistent pathfinding, route recalculation, automatic boats, Move All and Next Group | Major friction and AI repair |
| Armies | Sixteen types; eight per stack | Twenty-eight types; eight per stack; medals | More combinations and within-game attachment |
| Combat | Automatic sequential fights; buried bonus detail | Same decisive core; visible/simplified bonuses, fight-order control, Intense Combat | More legible and configurable, not more tactical once battle begins |
| Heroes | Hiring, searching, artefacts, allies, blessings | Same plus levels, experience, standards, and optional quests | From exceptional units to developing named assets |
| Politics | AI attitudes; no proposals | Optional alliances, neutrality, hostility, proposals, betrayal, credibility | From emergent relationship to explicit system |
| Information | Broad reports and visible geography | Optional hidden terrain, enemy-stack and city-production restrictions | From largely open board to selectable uncertainty |
| AI | Four levels, common rules, no authored personalities | Three levels, named personalities, much improved data and pathfinding | Stronger and more expressive heuristic opposition |
| Multiplayer | One-machine hot seat, one to eight humans | One-machine hot seat in the base release | Remote play arrives only in later *Deluxe* |
| Authorship | None beyond playing the fixed world | Random-map parameters and saveable maps | Full scenario editing arrives separately in 1994 |

The table shows why the pair is coherent. *Warlords II* does not discard the original's conquest grammar. It turns a tightly bounded game into a parameterised framework while trying to keep city capture, stack building, automatic combat, hero expeditions, and brisk interface verbs recognisable.

## 18. Contemporary praise

### 18.1 *Warlords*

The original's strongest period praise clusters around five features:

1. **A simple strategic core.** Reviewers could explain the objective, economy, and basic action vocabulary quickly despite the long campaign. Fantasy added texture without obscuring the territorial contest. [S09, S11]
2. **Eight active competitors.** The map did not reduce to a single front. Temporary quiet, opportunistic attack, dogpiling, and rival expansion produced a changing political geometry. [S09]
3. **A credible solo opponent.** Contemporary reviewers emphasised AI that used the same resources, attacked weaknesses, and behaved ruthlessly enough to surprise them. [S09–S10]
4. **Replay through fixed-map mastery.** Different starting positions and AI interactions changed openings even though the geography did not. [S09]
5. **Hot-seat social play.** Contemporary and later anecdotes describe long multiplayer sessions and “one more turn” compulsion. These are not population measures, but they recur across independent recollections. [S03, S12]

*Computer Gaming World* made *Warlords* a co-winner of its 1991 Wargame of the Year award with *Command HQ*, praising both the computer intelligence and its ability to take the form beyond a narrow specialist audience. [S10]

### 18.2 *Warlords II*

Praise for the sequel centres on extension without loss of clarity:

- multiple map sizes, random maps, and information options greatly expand replay;
- the interface makes stack manipulation and long movement easier;
- heroes, medals, production investment, capture choices, quests, and diplomacy add detail in optional or localised layers;
- computer personalities make opponents more memorable;
- the top AI remains a serious contest without concealed resource advantages;
- the fantasy elements produce important stack and movement interactions instead of serving only as theme. [S02, S05, S13]

Ed Dille's 1993 *Computer Gaming World* review found almost every part worthy of respect, singled out the AI as exceptionally strong, and described the many options as supporting both variety and difficulty. SSG's own next issue of *Run 5* reported an overwhelming response and unusually strong convention sales, even duplicating disks at Origins. The latter is promotional and unquantified, but it corroborates immediate commercial enthusiasm rather than later nostalgia alone. [S06, S13]

## 19. Friction and adverse evidence

### 19.1 Original-game limits

The original's economy and interface become less elegant as the empire expands. Production and vectoring must be inspected city by city; many stacks require movement or defence; and seven sequential AI turns create downtime. A fixed eighty-city map may sustain positional learning but eventually limits novelty. [S01, S18]

Period Amiga criticism was not unanimous. One review called the game addictive and highly playable, while another found it simple but insufficiently challenging for experienced wargamers. Scores ranged widely. That split cautions against treating accessibility and depth as synonyms: a low rules barrier may reveal a durable positional game to one player and a shallow system to another. [S11]

Combat's decisive automatic resolution can make preparation feel consequential or make a rare upset feel arbitrary. There is no retreat, post-contact tactic, or battle-level agency. The attitude system produces grudges but gives the human no diplomatic instrument. Hero searching is evocative but mechanically small. The fixed world has no scenario editor, campaign continuity, or remote multiplayer.

### 19.2 Sequel limits

The sequel solves many of those problems but introduces or retains others:

- **Setup burden:** option bundles, personalities, map parameters, information rules, neutral behaviour, diplomacy, quests, and handicaps create many pre-game choices. [S02, S06]
- **Period performance:** a contemporary reviewer reported about a minute between turns on a 486SX; larger maps and smarter AI were not costless on target hardware. [S14]
- **Limited authored content in the base box:** five normal scenarios are a major improvement on one, but one reviewer still found them few, and random generation could not intentionally replace a crafted scenario. [S02, S14]
- **No base editor or remote play:** both capabilities arrived later and are often mistakenly remembered as 1993 features. [S02, S07, S26–S28]
- **Automatic, total combat:** the player prepares but cannot retreat or intervene; rare low-quality victories can appear capricious. [S02, S20]
- **Random-order volatility:** moving last in one round and first in the next can create a powerful double move. The manual presents this as uncertainty; it can also make exposed borders swing abruptly. [S02]
- **Diplomatic awkwardness:** the three-state system adds politics, but later players report reputation spirals and allies whose forces cannot be combined directly with their own stacks. [S20]
- **Late-game administration and snowball:** pathfinding and Move All reduce clicks, yet large empires still have many queues and stacks. Surrender abbreviates cleanup only once domination is already established. [S02, S19]
- **Understated conclusion:** Dille's only major complaint was a brief victory screen and fanfare after a fifteen-to-twenty-hour campaign. [S13]

The game also remains representationally light. Factions have names, colours, starting geography, and scenario flavour, but mostly draw from a shared army catalogue rather than maintaining deeply distinct cultures, economies, or campaign narratives. Diplomacy and quests create incidents, not an authored story arc.

## 20. What may have supported repeated play

The evidence permits mechanisms to be ranked more confidently than retention rates:

| Candidate retention mechanism | Evidence | Confidence and limit |
| --- | --- | --- |
| Solo AI that attacks and can win | Manuals, developer account, two strong contemporary reviews, award language, and later strategy discussion | **Strong qualitative evidence.** No match telemetry or code audit. [S01–S02, S05, S09–S10, S13, S15] |
| A fast-to-grasp territorial/economic loop | Manual structure and repeated period praise for accessibility | **Strong evidence of learnability; moderate evidence of retention.** Simplicity deterred at least one experienced reviewer. [S01, S09, S11] |
| Fixed-map positional mastery in the original | Eight starts, common Illuria geography, reviewer discussion of varied openings | **Plausible and directly described.** The same fixity can eventually exhaust novelty. [S01, S09] |
| Generated worlds and selectable information in the sequel | Base manual, design notes, later player reports | **Strong potential-content evidence.** Number of generated maps is not number actually replayed. [S02, S05, S15, S19–S20] |
| Heroes, artefacts, allies, medals, and improbable battles | Rules plus recurring player anecdotes | **Moderate evidence of memorable session stories.** Not evidence that everyone valued randomness or progression. [S01–S02, S20] |
| Hot-seat rivalry and negotiation | One-to-eight-human rules and contemporary/later recollections | **Moderate qualitative evidence.** Long downtime and one-machine access constrain use. [S01–S03, S12] |
| Fine-grained challenge adjustment | AI levels, personalities, I Am the Greatest, Enhanced Production, neutral and information options | **Strong capability evidence.** No balanced matrix of all combinations. [S02, S15] |
| Player-created scenarios and PBEM competition | Separate Builder/Deluxe products, scenario archives, FAQ, and international tournament | **Strong evidence for the engine's later community life, not for the 1993 base box.** [S07, S15–S17, S26–S28] |

The most credible compulsion loop is not novelty alone. Each captured city immediately enlarges income, production, and reach while weakening a rival; each new force is near enough to complete or threaten another capture; and every rival takes a turn before the player returns. That structure continually leaves unfinished business visible. The observation is a researcher interpretation grounded in the rules and contemporary “addictive” accounts, not a measured psychological result. [S01–S03, S11–S12]

## 21. Afterlife and preservation, within the boundary

The original sold tens of thousands according to Fawkner's recollection, while Australia's National Film and Sound Archive reports more than 50,000 and calls it SSG's first major success. Those figures are useful order-of-magnitude publisher/history claims, not audited accounts. Both the NFSA and ACMI preserve original Amiga objects, giving the game an institutional Australian material record. [S04, S21–S22]

The sequel's expansion path is more concrete:

1. The DOS base game appeared in 1993.
2. A Macintosh conversion followed in 1994. [S08, S23]
3. The separate *Scenario Builder* appeared in 1994 and was reported by SSG as popular. [S07]
4. *Warlords II Deluxe* in 1995 bundled stronger authoring, more scenarios, higher-colour presentation, and remote multiplayer facilities. [S26–S28]
5. Fan custodianship produced scenario libraries, probability tools, advanced rules, FAQs, utilities, PBEM conventions, and a tournament involving more than 250 participants from more than twenty-five countries beginning in 1997. [S15–S17]

The Heeter archive began in 1994 and was maintained into the 2000s. Its survival is unusually direct evidence of people doing more than remembering the game: they authored worlds, analysed mechanics, changed difficulty conventions, organised remote matches, and preserved technical knowledge. The evidence is strongly survivor-biased and mostly belongs to Builder/Deluxe, but it establishes a durable culture around the *Warlords II* system. [S15–S17]

Today, GOG and Steam sell a paired package of *Warlords* and *Warlords II Deluxe*. The original 1993 DOS sequel survives through archival pages and its scanned manual, but is not the version foregrounded by current commerce. Store review aggregates apply to the bundle and cannot distinguish nostalgia, original-game use, or *Deluxe* play. [S02, S24–S25]

## 22. Evidence limits and unresolved questions

- Barry's remembered platform is unknown. Amiga, DOS, and Macintosh controls, performance, graphics, and sound must not be conflated in the later discussion.
- The original manual is common across versions; no platform-specific card for Barry's eventual platform has yet been examined.
- Exact Warlords Macintosh chronology conflicts among contemporary publisher issues and modern databases. It is not central to the paired 1990/1993 scope and remains unresolved here.
- No source code, AI design specification, controlled match series, search-depth description, or opponent win-rate data was found for either title.
- Publisher descriptions of fair AI are supported by independent experience but remain partly claims about implementation.
- Review survival is selective. Strong praise is easier to find than mundane abandonment, and magazine scores do not measure repeated play.
- Player recollections, fan FAQs, and scenario archives disproportionately represent enthusiasts who stayed.
- No audited sales ledger, completion rate, session-length distribution, or longitudinal retention dataset was located.
- The original 1993 *Warlords II* is frequently conflated with the Scenario Builder and *Deluxe*. Every later-community claim in this dossier has therefore been labelled by product boundary.
- Generated-map variety is potential content, not proof that maps were strategically balanced or meaningfully distinct. A contemporary reviewer explicitly wanted more controls.
- Full-game duration estimates vary with map size, opponent count, hardware, player expertise, and surrender. The fifteen-to-twenty-hour figure is one reviewer's estimate, not a universal length.
- The dossier establishes mechanisms and reception, not Barry's reasons for returning to or abandoning either game. Those remain deliberately unelicited until the fireside discussion.

## 23. Research finding, without a future-game conclusion

As a paired historical object, *Warlords* and *Warlords II* show a coherent expansion from a **closed, learnable conquest board** into a **configurable conquest framework**. The original concentrates almost everything into cities, stacks, heroes, and a fixed eight-way world. The sequel keeps that grammar while repairing movement and interface friction, strengthening and personifying the heuristic opposition, and adding optional layers of uncertainty, progression, diplomacy, production investment, and world generation.

The evidence also preserves the costs of that expansion. The original can be repetitive, administratively heavy, and too simple for some experts. The sequel asks for more setup choices, remains long and sequential, and still resolves its most dramatic battles automatically and sometimes brutally. Several capabilities central to its later reputation—authored scenarios and remote multiplayer—belong to 1994–95 follow-ons, not the 1993 base release.

That historical finding is not yet a judgement about which features Barry valued, nor a prescription for the proposed browser game. Both questions remain deferred until this case sits beside the rest of the evidence corpus and Barry supplies his own cross-game recollections.
