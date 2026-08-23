# Case 005: *War of the Lance*

**Design and programming:** David Landrey  
**Initial game design and graphics:** Chuck Kroegel  
**Development:** Bret Berry  
**Publisher:** Strategic Simulations, Inc. (SSI)  
**Release lineage:** Apple II in 1989; Commodore 64/128 and MS-DOS in 1990  
**Primary remembered platform:** Commodore 64/128  
**Subject:** The continent-wide War of the Lance from the *Dragonlance* setting  
**Form:** One- or two-player turn-based fantasy grand-strategic wargame combining armies, diplomacy, conquest, abstract champion quests, magic discoveries, and subversion  
**Research status:** Independent dossier complete; personal evaluation deferred to the corpus-wide fireside discussion  
**Comparative-design status:** Deliberately deferred

Source IDs refer to the separate [source ledger](sources.md). Barry's two pre-research disclosures are preserved separately in [Barry context](barry-context.md).

## 1. Scope, disclosure firewall, and platform warning

Barry disclosed before the research was complete that *War of the Lance* is conceptually the closest item in the corpus to the feeling he hopes the eventual project might recover, and that replaying it after roughly thirty-five years prompted the project. That is important later evidence about his memory and motivation, but it would be a serious source of confirmation bias if allowed to determine this dossier's verdict. The disclosure is therefore stored separately and has not been treated as evidence that a feature was successful. Barry subsequently identified the **Commodore 64 version** as the one he played. That fact properly changes the object being researched: C64 controls, speed, display, packaging, and period C64 reviews receive priority. It does not change the standards by which the design is assessed.

The release history needs untangling because modern records and the supplied manual can easily mislead:

| Object | Best-supported date and role | Evidential status |
| --- | --- | --- |
| Apple II | 1989; the earliest documented commercial version | Design lineage, not the remembered platform. [S02–S05] |
| Commodore 64/128 | 1990, available by the spring review cycle | Primary remembered object. [S03, S05, S08–S10, S15] |
| MS-DOS | 1990 | Later contemporary port; useful for common mechanics and later player analysis, but not silently substituted for C64 performance or interface. [S05, S11, S14] |
| Current commercial release | DOS version packaged in the 2023 *Silver Box Classics* collection | Evidence of preservation and present availability, not of C64 continuity or title-specific retention. [S21–S22] |

The user-supplied PDF is an Australian manual scan associated by the Museum of Computer Adventure Game History with a C64 clamshell release. Its PDF metadata calls it a Microsoft DOS manual, but the pages themselves contain loading and control instructions for **Apple II and Commodore 64/128**, and no IBM loading section. Page content and the photographed source object outweigh generic or erroneous PDF metadata. The scan is image-backed but has a usable text layer; all thirteen sheets were rendered and visually inspected. [S01]

Release advertisements reinforce the chronology. SSI's 1989–90 catalogue offered the Apple and C64 versions and described an IBM version as due in the winter, while a January 1990 *Compute!'s Gazette* advertisement still marked the C64 and IBM products as coming soon. C64 reviews appeared in April, May, and June 1990. An exact day of first retail sale was not located, but “C64/128, 1990” is much better supported than the undifferentiated 1989 date often attached to all ports. [S02–S05, S08–S10]

## 2. Product identity and declared ambition

SSI sold *War of the Lance* as its first computer wargame set in the AD&D world. It was not a party-based role-playing game in the Gold Box mould, despite using the same licence, recognisable heroes, magical artefacts, and Jeff Easley-associated visual identity. Its object was the entire war across Ansalon: nations align, whole armies manoeuvre, capitals fall, fleets patrol, dragons and flying citadels alter operational reach, and famous champions pursue story-critical missions away from the army map. [S01–S02, S05]

The manual credits David Landrey with game design and programming and Chuck Kroegel with initial game design and graphics. Bret Berry developed the product. Richard Wilson wrote the manual; Peter Gascoyne and the Louis Saekow studio handled art and graphic design; Roland Gustafsson wrote the Apple custom DOS. These credits matter because the computer game is sometimes described as though it were simply Douglas Niles and Tracy Hickman's board game transferred to a screen. The lineage is clear, but the computer product has its own credited designers and substantial new connective systems. [S01]

The core ambition can be stated compactly:

- make the political and military fate of a whole fantasy continent playable in one campaign;
- express the novels' broad arc through asymmetric strategic pressures rather than a sequence of character-level scenes;
- put conventional armies, racial abilities, dragons, fleets, fortresses, diplomacy, quests, magical discoveries, and espionage inside one turn structure;
- automate enough bookkeeping, hidden resolution, and opponent behaviour to support solo play;
- allow a second human to take the Dragon Highlord side in hot-seat play.

That breadth was both the title's strongest claim and the source of its most persistent criticism.

## 3. Relationship to *Dragons of Glory*

The closest tabletop predecessor is TSR's DL11, *Dragons of Glory*, designed by Douglas Niles with Tracy Hickman and copyrighted in 1986. It is a strategic hex-and-counter game spanning Ansalon. It contains the recognisable substrate: the Dragon Highlords against the Whitestone forces, many initially neutral nations, armies rather than adventuring parties, racial terrain effects, flying and naval forces, political activation, initiative, replacements, conquest, draconians, winter, and a campaign expected to take many hours. Its introduction explicitly positions the design above the character scale: it can stand alone or generate a continent-wide war whose results feed an AD&D campaign. [S06]

The later advanced rules in *Dragon* 107 illuminate an important design tension in that tabletop foundation. They say that the original treatment deliberately omitted detail to keep play fast and then add optional winter and other complications for players wanting more texture. The attempt to balance a whole-world war with usable procedure therefore predates the computer game. [S07]

*War of the Lance* is best understood as a **licensed computer adaptation and reworking of this strategic substrate**, not as a literal digital transcription. It inherits the map-scale conflict and many categories of force, geography, and political alignment, but the computer design makes several systems more explicit or materially different:

- named diplomatic representatives are allocated among neutral countries;
- champion quests become an automated but strategically consequential track;
- army units can be taken off the map for subversion;
- operation points and fatigue regulate tempo;
- magical discoveries form a staged reversal mechanism;
- computer-controlled movement, combat resolution, messages, reconnaissance, and animated battle displays replace much physical administration;
- a heuristic Dragon Highlord opponent makes solo play possible.

No design interview, source code, or surviving development memorandum was found that would allow a precise division between inherited board-game mechanisms and independent computer design decisions. The resemblance is strong enough to establish lineage, but the credits and differences prevent attribution of the computer design to Niles and Hickman.

## 4. Representational model: a continent of square spaces

The main display is a scrollable, top-down map divided into square spaces. Movement is possible in eight directions. Terrain, borders, structures, ports, national capitals, towers, armies, leaders, wizards, dragons, fleets, and other special units occupy the same strategic surface. The unit scale is deliberately elastic: a counter may be an army, a racial host, a dragon flight, a fleet, a named leader, or a wizard. One turn is a large campaign interval rather than a battle round. [S01]

The map is much larger than the C64 viewport. The player moves a cursor, uses quadrant commands to recentre broadly, and repeatedly inspects local terrain and units. A strategic overview helps with orientation but sacrifices tactical detail. Unit and stack symbols can cover terrain or border information; the country beneath the cursor is reported in the information line rather than always being obvious on the map. This is a command map rich in state but weak in simultaneous legibility. [S01, S19–S20]

The political geography is not scenery. The manual lists twenty-five countries or political entities, including the Knight realms, elven kingdoms, dwarven realms, islands, ports, Highlord territories, and otherwise neutral regions. The Clerist Tower is a special strategic site. A neutral border is effectively a wall: forces cannot simply violate a country and accept a penalty. The nation must become allied, be attacked by the Highlord, or otherwise enter the war. Political state therefore changes the traversable network of the map. [S01]

The game has no economy in the conventional strategy-game sense. There are no taxes, generic resources, construction queues, technology tree, city development, or freely recruited unit types. Reinforcements and replacements arrive through scenario rules; alliances add the forces already associated with a country; conquest removes national forces; quests unlock named assets and magical effects. Strategic growth is political, geographic, and narrative rather than productive.

## 5. Campaign, scenario, setup, and victory

### 5.1 Two starting situations, not a scenario ladder

The game offers a full campaign and a later-war scenario. The campaign starts in 348 AC with only Neraka committed to the Highlord cause and no allies yet secured by Whitestone. It runs for six game years, five turns per year: thirty turns in total. A surviving strategy guide places the end around the spring of 354 AC. The scenario begins later in the war, with both coalitions partially formed and several countries already conquered, so it reaches large-scale military action sooner. [S01, S14]

These are alternative strategic starts, not a graduated teaching sequence. There is no small introductory map, tutorial campaign, short tactical problem, or family of escalating scenarios. A new player meets the full phase structure, continental map, diplomacy, quest status, reinforcement machinery, and large force roster from the outset. The later scenario may reduce diplomatic waiting, but it begins from a complicated and hostile state rather than simplifying the rules.

### 5.2 Solo asymmetry and hot-seat freedom

In a one-player game the human must command Whitestone and the computer always commands the Dragon Highlords. Two humans can play either side by passing control during the turn. This has several consequences:

- the solo game offers only one strategic perspective;
- the AI is built to execute the expansionist Highlord role rather than to play a general symmetric system;
- the Highlord's declarations of war and early military pressure supply the human's external clock;
- learning the Highlord side, or testing human counterplay against Whitestone, requires another person.

### 5.3 Setup controls alter the contest, not the AI's reasoning

The setup screen has a broader handicap system than its period terminology initially suggests:

- “level of play” from one to five applies a combat-effectiveness weighting, from a major Whitestone advantage through approximate balance to a major Highlord advantage;
- separate Highlord and Whitestone strength settings establish initial unit strength at approximately 60, 80, 100, 120, or 140 per cent;
- separate replacement settings change the volume of replacements;
- an alliance setting changes the probability that diplomatic attempts succeed;
- campaign or scenario and one- or two-player mode are also selected.

This offers substantial control over the initial and ongoing odds. It does **not** document alternative search depth, planning horizon, personality, information access, or strategic intelligence. Calling the first slider an AI difficulty level would therefore overstate the evidence. The same Highlord logic appears to operate under different combat, force, replacement, and diplomatic conditions. [S01]

### 5.4 Victory is territorial, political, military, and time-bounded

Both sides accumulate points for alliances, conquest, enemy units destroyed, and champions captured or killed. If neither side achieves an immediate victory by the campaign deadline, points decide the result or expose a stalemate. [S01]

Each coalition also has an asymmetric decisive objective:

- **Whitestone** wins immediately by holding Neraka's capital and the tower northwest of it.
- **The Dragon Highlords** win immediately by conquering all four Knight countries—Caergoth, Gunthar, Northern Ergoth, and Solanthus—plus the Clerist Tower. Some countries require several sites to be held before conquest is complete.

This is not a mirror race to identical capitals. The Highlord must dismantle the institutional heart of the western coalition; Whitestone must survive long enough to carry the war into the enemy's compact eastern core.

## 6. What a turn actually asks the player to do

A complete turn contains a long sequence of administrative and strategic phases. In broad form:

1. Read messages about previous events.
2. Resolve Highlord quest developments and champion status.
3. Place Highlord reinforcements and replacements.
4. Commit Highlord units to subversion.
5. Assign Highlord diplomats and attempt an alliance.
6. Repeat quest, champion, reinforcement, replacement, subversion, and diplomacy work for Whitestone.
7. Review country status.
8. Check victory.
9. Determine initiative.
10. Recover operation points and fatigue.
11. Let the first player move and designate combats.
12. Resolve that player's combats.
13. Let the second player move and designate combats.
14. Resolve that player's combats.

The manual's menu-level breakdown is finer still and can be counted as roughly eighteen named phases. Several contemporary reviewers described the title as three interlocking games—military, diplomatic, and quest management—joined inside this procession. [S01, S11]

A typical Whitestone turn is therefore not simply “move armies and fight”:

- inspect which champions advanced, were wounded, captured, healed, or killed;
- decide whether an interrupted hero rests, seeks aid, escapes, awaits rescue, or rejoins a quest;
- place new units and allocate replacements;
- decide whether valuable field units should disappear into subversion;
- distribute limited diplomatic quality across politically important neutrals;
- assess changing alliances, conquests, and messages;
- account for initiative and seasonal recovery;
- inspect stacks, operation points, fatigue, terrain, enemy reconnaissance, and objectives;
- move units one at a time, sometimes using automatic following for a stack;
- schedule adjacent attacks and then choose postures during combat;
- repeat the military sequence after the opponent moves if initiative places the human second.

This breadth produces many connected decisions. It also makes a single turn a substantial session. *QuestBusters* reported thirty to fifty hours for a game and more than an hour for a turn; C64 recollections similarly describe turns approaching forty-five minutes. These are anecdotes, not measured medians, but they align with contemporary complaints about disk access, computer thinking, and the number of phases. [S10–S11, S15]

## 7. Diplomacy as force generation and map transformation

Diplomacy is a primary strategic system, especially in the campaign opening. Neutral nations have an alignment value from one to nine, with lower values leaning toward Whitestone and higher values toward the Dragon Highlords, plus a low, medium, or high propensity to ally. Each side has named diplomats with different ratings. The player assigns representatives to a target, up to a combined diplomatic strength of twenty-five, and may make one alliance attempt per turn. [S01]

The decision is more than a percentage optimisation:

- diplomats concentrated on one state cannot influence another;
- a nation may be valuable for its army, ports, geography, racial abilities, or because its territory opens a route;
- the current front can make a theoretically powerful but remote ally arrive too late to matter;
- an alliance immediately changes access and deploys national forces within their legal territory;
- the fixed campaign deadline changes the value of long-shot courtship.

The Highlord has an additional coercive instrument: once per turn it may declare war on a neutral country. The threatened state can submit to the Highlord, resist and align with Whitestone, or otherwise produce a political backfire. Coercion therefore accelerates expansion while taking a risk. As the Highlord influence spreads and the war develops, remaining neutrals tend to drift toward Whitestone, supporting a late coalition response. [S01]

Diplomacy is also where the setting's named geography becomes mechanically dense. Countries are not colour-coded resource multipliers; their allegiance determines which troops exist, which roads and coastlines are usable, which capitals must be defended, and how far each coalition can project power. A single successful alliance can change both force balance and the topology of movement.

The system's opacity is equally important. The manual supplies alignment and likelihood categories but not a complete public formula. Attempts can fail despite apparently sensible allocations. Contemporary and later reviewers disagreed on whether that uncertainty created political tension or made alliances feel arbitrary. [S09, S19–S20]

## 8. Champions, quests, discoveries, and subversion

### 8.1 Heroes are important but not directly commanded

Famous figures from the novels undertake quests away from the strategic map. The player does not choose their routes, encounters, or moment-to-moment actions. Progress arrives through messages and status screens. When champions are wounded, captured, healed, delayed, or killed, the player manages the consequences:

- a wounded party can rest, withdraw, or seek aid;
- a healed champion who is no longer questing can rest, seek aid, or try to rejoin;
- a captive can attempt escape, remain imprisoned, or become the object of rescue;
- death is permanent;
- higher-quality champions improve the chance of useful progress.

The player's role is closer to strategic patron and crisis manager than adventuring-party commander. [S01]

### 8.2 Quest results can transform the war

Discoveries include the Gnomish Device, medallions of faith, minotaur banners, Dragonlord armour, Solamnic armour, dragon orbs, and the prerequisites for forging dragonlances. Effects are not merely narrative rewards:

- the Gnomish Device may double or halve Whitestone combat strength;
- dragon orbs can turn opposing dragons, but can also turn friendly dragons;
- armour and banners alter particular forces;
- dragonlances double friendly combat strength, cancel an enemy dragon bonus, and can destroy dragon units.

The dragonlance is a staged objective rather than a single lucky pickup. Whitestone must assemble prerequisite discoveries such as the Silver Arm of Ergoth, Hammer of Kharas, pure dragonmetal, and orb- or lance-related knowledge. The magical reversal is therefore paced through an uncertain, multi-part quest chain. [S01]

This structure supports the setting's broad dramatic arc: Whitestone begins fragmented and overmatched, survives through diplomacy and defence, and may later gain good dragons and weapons capable of neutralising the Highlords' greatest advantage. It also produces an agency problem. A strategically decisive swing can depend on processes the player influences only indirectly.

### 8.3 Subversion links field strength to the quest war

Both sides can remove ordinary combat units from the map and assign them to subversion. Better units are more effective; the manual implies diminishing returns after roughly five or six, while a later guide recommends larger commitments in some situations. Subverters hinder the opponent's quests and must later return through suitable home locations. [S01, S14]

This is a real opportunity cost:

- every subverting unit is absent from a front;
- removing high-quality troops improves covert effectiveness but sacrifices military value;
- the benefit is delayed and probabilistic;
- the same units may be difficult to reinsert where the army now needs them.

Subversion prevents quests from being an entirely detached minigame. The field army can pay to interfere with the enemy's narrative engine, and the quest engine can return powers that reshape field combat.

## 9. Reinforcements, replacements, and the asymmetrical war arc

The Dragon Highlords receive a dependable flow of draconian forces, generally one unit per turn while space and the roster limit allow deployment near Neraka. Wizards, Lord Soth and his undead, dragons, and late flying citadels add exceptional capabilities. Whitestone's great reinforcements and discoveries arrive later, including the possibility of good dragons and dragonlances. [S01]

Replacements are distributed through a separate phase and are affected by the setup settings. Defensive structures help units receive them; eligibility depends on the associated country remaining allied and unconquered. The system replenishes existing formations rather than asking the player to build an optimised army from a production menu.

Conquest is unusually discontinuous. Once the required capital and other sites are held through a complete round, the country is conquered and its national troops and diplomats disappear. This creates cascading consequences:

- a local territorial loss can remove units fighting elsewhere;
- a lost diplomat can weaken a different political campaign;
- a border changes from allied corridor to enemy territory;
- the winner gains points and may shorten an immediate-victory path;
- defending the right city can matter more than preserving a scattered army.

The two coalitions are consequently asymmetric in both assets and time:

| Dragon Highlords | Whitestone |
| --- | --- |
| Start with the secure Neraka core and expansionist initiative. | Start politically fragmented and must construct a coalition. |
| Have early dragons, regular draconian reinforcement, declarations of war, and later terror assets. | Gain strength through neutral alliances, survival, discoveries, metallic dragons, and dragonlances. |
| Seek to break the Knight realms and Clerist Tower before reversal. | Seek to delay, protect coalition anchors, and eventually penetrate Neraka. |
| Can use coercion to open the map quickly. | Benefits from later anti-Highlord political drift and magical countermeasures. |

The arc is not wholly scripted—alliances, initiative, combat, quest events, and human choices vary—but its direction is recognisable. The design turns a familiar fantasy narrative into changing strategic capabilities rather than merely retelling scenes.

## 10. Movement, operation points, fatigue, and initiative

### 10.1 Movement is detailed, local, and often laborious

The player selects a unit or stack, chooses movement, and traces it square by square across the map. After moving one unit, an automatic-move command can instruct other units from the original stack to follow the route. A move can be aborted entirely or one square at a time, although interruption may add fatigue. Later players reported that followers or path selection did not always behave exactly as expected. [S01, S14, S20]

Most terrain permits only two large ground formations in a square; cities and ports permit three. Flying forces can share spaces with ground forces, and leaders and wizards add to stacks under a maximum total of ten entities. Flying citadels can transport several large units plus smaller characters. Stack composition, transport, and physical room around a deployment site can therefore constrain plans before combat odds are considered. [S01]

Terrain has both ordinary and exceptional rules:

- forests cost extra operation points, except to some native forces such as elves and Kender;
- mountains are normally restricted to dwarves, ogres, and wizards;
- ground troops cannot freely cross sea, river, swamp, or otherwise prohibited terrain without an appropriate special rule or transport;
- wizards have extraordinary strategic mobility;
- fleets carry troops, patrol, fight, and face the Maelstrom;
- airborne forces must obey landing and stacking restrictions.

Enemy zones of control add substantial movement cost. A force that ends movement with no operation points suffers a combat penalty, so reaching an enemy is not equivalent to arriving ready to fight.

### 10.2 Fatigue turns distance into reduced power

Units have operation points, combat strength, quality, and fatigue. Fatigue reduces combat strength by roughly four per cent per point. Recovery depends on unused operation points, proximity to home, and defensive structures; winter prevents ordinary fatigue recovery. A long march can therefore deliver an army that looks large on the map but fights well below its nominal strength. [S01]

This couples geography and military timing without a conventional supply-line subsystem:

- distance from home slows recovery;
- terrain and hostile control consume the same operation budget needed to enter battle in good order;
- winter converts accumulated fatigue into a persistent constraint;
- cities and fortifications are recovery anchors as well as objectives;
- rapid exploitation can outrun readiness.

### 10.3 Initiative can create severe tempo swings

Initiative determines which side moves and fights first and grants that player approximately twenty-five per cent more operation points. Because initiative is redetermined each turn, one side can move second late in one round and first in the next, producing two movement-combat opportunities before the opponent responds. [S01, S19]

That swing can be dramatic in a game of capital capture, zones of control, fatigue, and national collapse. It creates suspense and opportunities for reversal, but it can also make carefully spaced defence feel hostage to a die-like strategic event. Later criticism identifies double-turn sequences as one of the design's harsher sources of perceived unfairness. [S19]

## 11. Combat, terrain, dragons, and the optional battle display

Attacks are designated against adjacent enemies during movement and resolved in the following combat phase. The attacker may retreat, make a light attack, make a heavy attack, abort, or inspect the map; the defender may retreat, stand, counterattack, or inspect. Survivors may advance after combat. This is posture selection around an underlying calculation, not a detailed tactical battle game. [S01]

The calculation nevertheless has many inputs:

- current strength, quality, fatigue, and remaining operation points;
- terrain and fortification;
- national or racial advantages;
- leaders and wizards;
- dragons and anti-dragon effects;
- encirclement and retreat routes;
- light, heavy, standing, counterattacking, or withdrawing posture;
- magical equipment and discoveries.

Elves benefit in forests, dwarves and ogres in mountains, cavalry in open ground, and flying forces in suitable terrain. Kender can taunt. Dragons may use fear to paralyse opponents or direct attack for destruction. Dragonlances negate part of the dragon advantage and may kill dragon units. Leaders and wizards strengthen forces but can themselves be killed. Units can improve quality through experience. [S01]

Surrounding an enemy is especially powerful because it affects the calculation and makes retreat difficult or impossible. The later tips literature treats complete encirclement, fortification, and terrain-specialist units as central rather than optional refinements. [S12, S14]

Naval combat has its own repeated rounds, withdrawal and pursuit decisions, fog interruption, transport risk, and automatic patrol. Fleets are not just sea-coloured armies. They can carry land forces, control passages, and lose embarked troops; period advice also reported that the computer mishandled some fleet-transport situations. [S01, S12]

The optional animated battle display shows the forces clash, but the player cannot issue tactical orders inside it. This is a crucial distinction from a tactical subgame. It visualises a result already governed by strategic choices and the combat menu. Contemporary reviewers split on the feature:

- some found the animated dragon, army, and magic confrontation atmospheric or “brilliant”;
- others recommended skipping it because it prolonged an already slow game;
- critics who wanted direct tactical control found it an especially visible reminder that they were spectators. [S09–S11]

The display adds spectacle and legibility but no new agency.

## 12. The C64/128 experience

The C64 version is joystick-driven from port 2, with keyboard support for some functions and a selectable delay speed. A current game can be written to a separate disk during a movement phase. The map and menus are functional, colour is used more effectively than in the Apple II presentation according to later comparison, and the game is silent. The surviving C64 manual expects repeated selection through compact command menus rather than a mouse-led interface. [S01, S15, S19]

The principal platform cost is waiting:

- the computer Highlord can take a long time to think;
- moving between phases and consulting the disk interrupts flow;
- a complete turn already contains many administrative screens;
- the optional combat display adds more time without allowing intervention.

The *Dragon* reviewer called the game very time-consuming and blamed both disk access and computer thought; the same review suggested omitting the tactical display to keep play moving. *QuestBusters* reported hour-plus turns. Later C64 comments remember roughly forty-five minutes per turn. These accounts differ in exact duration, but all point in the same direction: on the C64, automation removed board-game bookkeeping yet did not necessarily produce a brisk game. [S10–S11, S15]

Presentation also mediates comprehension. Contemporary reviewers generally called the display professional or serviceable rather than technically impressive. Stacks use compact symbols, the map scrolls, borders are not always visually dominant, and reconnaissance reports approximate enemy strength. A player must repeatedly interrogate the state rather than absorb it at a glance. For an experienced wargamer this can feel like operating a command system; for a novice it can feel like fighting the interface. [S08–S10, S19–S20]

The manual itself is substantial and comparatively clear, with historical-setting material, commands, phase explanations, terrain and unit appendices, country data, and strategy suggestions. One later C64 review explicitly praised its precision. It is documentation for study, not a substitute for interactive onboarding. [S01, S13]

## 13. The computer opponent

### 13.1 What can be established

The solo opponent controls only the Dragon Highlords. It can:

- run champion and quest decisions;
- place reinforcements and replacements;
- commit subverters;
- allocate diplomats and attempt alliances;
- declare war on neutrals;
- move a wide variety of ground, air, naval, leader, wizard, and transport units;
- designate and resolve combat;
- pursue conquest and the Highlord victory conditions.

That is a broad problem space for a 64K-era home computer. Contemporary *QuestBusters* coverage called the AI excellent, and the reviewer's nominally easy first game still ended in defeat. The *Dragon* review likewise found the game challenging and recommended the later scenario only with caution because of its Highlord advantage. [S10–S11]

### 13.2 What cannot be established

No source code, technical paper, designer interview, or detailed algorithmic account was found. It is therefore not possible to claim a particular search method, planning horizon, evaluation function, information model, or cheating status. The game plainly uses fixed program logic; nothing suggests learning, adaptation across games, model improvement, or an external interface.

The setup controls change odds and resources, not demonstrably the opponent's reasoning. The AI's competence should therefore be described as a period heuristic achievement, not as a family of increasingly intelligent agents.

### 13.3 Evidence of fixed and exploitable behaviour

Long-form player analysis from 2001 records several regularities:

- the computer habitually tries to escape captured champions and rests wounded ones;
- Neraka can be left with a predictable or inadequate dragon defence;
- the AI may misjudge surrounding forces;
- fleets carrying troops can expose valuable cargo;
- some strategic reactions become learnable with repeated play.

Period *QuestBusters* tips also described a fleet-transport weakness the computer “never did get straight.” These reports are platform-mixed and anecdotal, but they are mutually consistent evidence that the opponent's broad competence coexisted with local blind spots. [S12, S14]

The AI thus changes the experience in two opposite ways. Initially it animates the entire enemy coalition, makes solo grand strategy possible, and can punish a novice. Over time its recurring policies can become part of the puzzle to exploit. There is no alternative AI personality or human-readable behaviour setting to refresh that opposition.

## 14. Contemporary praise

The inspected period reception is favourable but not unanimous:

- *Zzap!64* awarded 80 per cent and praised depth, detail, professionalism, intricate strategy, and extensive setup options. Its warning was classificatory rather than dismissive: this was a real wargame, not another graphics-led AD&D role-playing adventure. [S08]
- *The Games Machine* awarded 84 per cent and praised fidelity to the setting, background, atmosphere, and the way story events entered the strategic contest. It recommended the game beyond committed wargamers, although with reservations about quest randomness and tactical control. [S09]
- *Dragon* awarded four stars and called it one of the best new tactical wargames, stressing that fantasy powers increased rather than replaced strategic skill. [S10]
- *QuestBusters* described a deep, complex, challenging design combining military, diplomatic, and quest games, with a strong AI and an impressive battle display. [S11]
- *Compute!* later called it an unusually good fusion of a wargame system and a detailed licensed scenario, singling out diplomacy, side quests, magic, excitement, and a clear manual. [S13]

Across those reviews, the recurring strengths were:

1. **Breadth with thematic integration.** Dragons, racial terrain, heroes, artefacts, diplomacy, and national armies were not merely names pasted over a conventional order of battle.
2. **Asymmetric campaign narrative.** The Highlord begins as the aggressor; Whitestone attempts to survive, unite, discover counters, and reverse the war.
3. **Multiple strategic fronts.** A decision about diplomats, subversion, a capital, fatigue, a dragon orb, or a fleet can affect the same victory contest.
4. **A demanding solo opponent.** The computer made a full-continent licensed wargame viable without another player.
5. **Configurable balance.** Strength, replacement, alliance, and combat weighting allowed players to reshape the contest.
6. **Recognisable command fantasy.** The player was not one hero but the coordinator of a coalition and its war.

The praise is strongest when reviewers accepted the game's level of command: broad strategy and consequence management.

## 15. Contemporary and later criticism

The adverse evidence is strikingly consistent across otherwise positive sources.

### 15.1 Long turns and delayed agency

The phase structure, one-unit-at-a-time movement, repeated menus, disk access, opponent thought, and optional battle animation make turns long. On C64 hardware, the time between consequential choices can be substantial. “Complexity” therefore comprises both meaningful interdependence and administrative latency. [S10–S11, S13, S15–S16]

### 15.2 The most evocative systems can be the least controllable

Champions, quests, magic discoveries, and animated battles are among the strongest expressions of *Dragonlance*. Yet the player cannot direct the heroes' adventures or command the displayed battle. The result can feel thematically rich but operationally passive. *The Games Machine* explicitly wanted less random quest outcomes and direct tactical control; later reviews describe a spectator feeling. [S09, S16, S19–S20]

### 15.3 Onboarding is documentation-heavy

The manual is good, but the game presents nearly the whole system immediately. There is no interactive tutorial, small map, short scenario ladder, or protected learning mode. The so-called scenario is a later-war position with many systems already in motion. A modern novice account found borders, stacks, movement, alliance chances, and early strategic prospects difficult to read and abandoned after roughly five turns. That account is DOS-specific and openly from a non-wargamer, but it identifies interface burdens visible in the C64 documentation as well. [S01, S20]

### 15.4 Early Whitestone can feel weak rather than merely challenged

The campaign's story requires Whitestone to begin fragmented. That creates a strong arc if the player experiences survival and coalition-building as meaningful preparation. It creates frustration if early diplomacy fails, remote allies cannot arrive before the fixed deadline, decisive quests remain opaque, or the Highlord's tempo leaves few effective military choices. Later criticism repeatedly describes waiting for the game to allow agency. [S16, S19–S20]

### 15.5 Uncertainty sometimes crosses into opacity

Diplomatic likelihood, quest results, dragon orbs, initiative, and combat all contain uncertainty. Some is disclosed through categories, strength estimates, and clear consequences. Some underlying formulas remain hidden. When a whole country, magical reversal, or double move depends on that uncertainty, a player may read the result as dramatic contingency or arbitrary denial.

### 15.6 Replay structure is broad but shallowly authored

The campaign has many variable events, two sides in human play, adjustable force settings, and a large combinatorial state space. It has only two starting situations, no scenario editor, no linked campaign, no persistent roster, no generated map, and no alternative AI. Replaying means exploring the same war under different outcomes and handicaps. For a player fascinated by optimising that war, this can be durable. Once the Highlord's habits and efficient diplomatic or quest policies become known, the title supplies few new authored problems.

## 16. Attraction, retention, and abandonment: case-specific assessment

This section interprets *War of the Lance* on its own evidence. It does not compare Barry's games or prescribe features for a future design.

### 16.1 Plausible initial attractions

The game's strongest invitation is unusually coherent: **command the entire fantasy war**. A player familiar with *Dragonlance* can recognise countries, heroes, races, artefacts, dragons, and turning points, but encounters them as strategic capabilities and political geography. A wargamer unfamiliar with the novels still receives an asymmetric coalition war with clear existential goals.

The opening also promises depth at several resolutions:

- visible army positioning and capital defence;
- hidden or approximate enemy strength;
- diplomacy that both raises forces and opens terrain;
- champion crises and quest progress;
- field-force sacrifice for subversion;
- special-unit and magical interactions;
- seasonal fatigue and operational tempo;
- naval, air, and ground theatres.

The title continuously changes what matters. Early diplomatic access can be more valuable than battle; later a dragonlance, citadel, capital, or encirclement can dominate attention. This variety plausibly sustains discovery through the first campaigns.

### 16.2 Plausible sources of repeated play

Repeated play can be supported by:

- the thirty-turn strategic arc and its many points of divergence;
- different alliance sequences and political backfires;
- variable quest timing, capture, death, escape, and discovery;
- initiative and combat uncertainty;
- adjustable starting strength, replacements, alliance probability, and combat weighting;
- the challenge of mastering the Highlord AI;
- two-player control of either coalition;
- optimisation of an established literary war rather than consumption of a one-time plot.

The 2001 guide's author said the game remained addictive enough to revisit after eleven years and devoted substantial effort to reconstructing its systems. A 2004 genre history called it a forgotten classic that remained fun. These are survivor-biased testimonies, but they demonstrate that the system could support unusually durable attachment for some players. [S14, S17]

### 16.3 Plausible abandonment thresholds

The same design can lose a player when:

- the first meaningful military turn arrives only after a long chain of status and administration;
- C64 processing and disk access stretch that chain further;
- army movement requires repetitive local operations;
- a desired fantasy—directing heroes or battles—is represented only by menus and outcomes;
- failed diplomacy or quest events are decisive without being legible enough to learn from;
- the initial Whitestone weakness feels like lack of choice;
- a whole evening produces one or two turns without a satisfying campaign resolution;
- the fixed AI becomes predictable;
- the same two setups no longer create fresh strategic questions.

The 2003 C64 user review is an especially useful adverse anecdote because it comes from a self-identified *Dragonlance* fan rather than someone rejecting the licence. The reviewer found the hero layer uncontrollable, item effects disappointing, movement tedious, and the game boring even after the anticipated arrival of good dragons. It cannot establish a typical response, but it shows that thematic enthusiasm was not sufficient to overcome the interaction burden. [S16]

### 16.4 The central design tension

The evidence supports neither “rich grand strategy” nor “passive licensed simulation” as a complete verdict. The more precise tension is:

> *War of the Lance* gives the player authority over the allocation, timing, and consequences of many interdependent systems, but not equal agency inside every system it makes important.

For players who enjoy high command, that distinction is coherent. Heroes quest because a supreme commander should not steer every sword stroke; battles resolve because the strategic decision was where and how to commit; diplomacy is uncertain because allies are not purchases. For players attracted by the vivid heroes and battles on the box, the same abstraction can look like the computer playing the most exciting parts.

Hardware compounds the tension. Automation should make a continent-scale game manageable, yet on the C64 the computer's work is often experienced as waiting. The player receives less physical bookkeeping than in a large tabletop design but not necessarily more frequent agency.

## 17. Commercial performance, influence, preservation, and longevity

The game appears to have been commercially modest. A later archival history, reporting SSI sales data, gives **15,255 copies**, far below contemporary Gold Box role-playing releases such as *Champions of Krynn* and *Curse of the Azure Bonds*. The underlying ledger was not independently available, so the exact total is historian-reported rather than directly audited. It nevertheless fits the title's later description as a forgotten or niche classic. [S18]

Evidence of design prestige exists but is limited:

- period reviews were mostly positive and several scored around four stars or eighty-plus per cent;
- the game demonstrated that SSI's AD&D licence could support a strategic wargame rather than only role-playing adventures;
- later histories remember its three-part combination of armies, diplomacy, and quests;
- the fan guide and surviving tips show that some players studied the system deeply.

No direct sequel, substantial scenario-sharing culture, source port, enduring organised-play scene, or significant modding community was located. This is a negative search result, not proof that none ever existed.

Preservation is stronger than active title-specific community evidence:

- physical Apple and Australian C64 objects and manuals have been scanned;
- database and C64 preservation sites retain release and review records;
- fan strategy documents remain available;
- GOG and Steam sell the DOS version in *Silver Box Classics* through a modern DOSBox wrapper. [S01, S04–S05, S14–S15, S21–S22]

Current store evidence must be handled carefully. Steam's small positive review count belongs mainly to the **bundle**, not to *War of the Lance* as an independently purchased and reviewed title. The title's Steam page is downloadable content within that collection and has no meaningful title-specific review corpus. GOG comments likewise often discuss the whole Silver Box package or nostalgia. They establish present access and some remembered affection, not modern mass retention.

The best-supported longevity judgement is therefore:

- **commercial reach:** probably modest;
- **critical launch reception:** generally positive, with clear reservations;
- **influence:** memorable as an unusual licensed grand-strategic hybrid, but no direct lineage was established;
- **deep retention:** demonstrated for a small number of enthusiasts, not measured broadly;
- **current life:** preserved and commercially accessible in DOS form, with the C64 experience maintained chiefly by archives and emulation.

## 18. Evidential limitations

Several uncertainties should remain visible:

1. **No designer interview or source code was found.** Internal AI, quest probabilities, exact design intent, and the division of work between Landrey and Kroegel cannot be reconstructed beyond credits and observable rules.
2. **The manual scan has misleading metadata.** Its actual Apple/C64 content and MoCAGH source object were used instead.
3. **Exact release days remain unresolved.** The evidence securely separates Apple II 1989 from C64/128 and DOS 1990, but does not establish a single C64 street date.
4. **Some mechanics evidence is platform-mixed.** The long 2001 guide concerns the PC version. It is used for shared strategic behaviour and clearly labelled anecdotes, not C64 display or performance.
5. **Period reviews are few and selection-biased.** The positive English-language magazines inspected do not measure the full audience; compact European scores recorded by C64 databases are used only as context.
6. **Play-duration reports are anecdotal.** Thirty-to-fifty-hour campaigns and forty-five-to-sixty-minute turns are plausible and mutually consistent, but not telemetry.
7. **Sales are second-hand.** The 15,255 figure comes through a historian's reading of SSI records.
8. **Modern review counts belong to a collection.** They cannot be assigned to this title.
9. **No direct observation of Barry's remembered copy has been made.** The Australian C64 manual is a close documented object, but package revision, regional duplication, and exact disk configuration could differ.
10. **Personal fit remains deliberately unknown.** Barry's conceptual-closeness disclosure explains why the title matters, not which mechanisms he liked, tolerated, misunderstood, or now rejects.

The dossier is ready to enter the comparative corpus. Barry's personal interpretation, cross-game themes, and implications for the proposed project remain deferred.
