# Case 004: *The Ancient Art of War*

**Design and programming:** Dave Murry and Barry Murry  
**Developer:** Evryware  
**Publisher and year:** Brøderbund Software, 1984  
**Primary platform:** IBM PC, PC/XT, and PCjr  
**Subject:** Eclectic, mostly pre-gunpowder warfare framed through Sun Tzu and a gallery of historical, legendary, and fictional commanders  
**Form:** Single-player, real-time squad wargame with optional close-battle command and an integrated campaign/formation editor  
**Research status:** Independent dossier complete; personal evaluation deferred to the corpus-wide fireside discussion  
**Comparative-design status:** Deliberately deferred

Source IDs refer to the separate [source ledger](sources.md).

## 1. Scope and platform warning

The primary object in this dossier is the **1984 IBM PC/PCjr/XT release**. That is not merely a convenient version to study. Its surviving manual explicitly requires an IBM PC-family machine, at least 128K of memory, PC DOS 2.0 or 2.1, and a colour/graphics adaptor for the PC or XT. Its credits identify Dave and Barry Murry as programmers and Joanna Dougherty as their manual co-author. Museum records independently catalogue a 1984 IBM PC object. [S01–S04]

Modern databases commonly collapse several ports into the 1984 date. Contemporary evidence does not support that chronology:

| Platform | Best-supported chronology | Evidential status |
| --- | --- | --- |
| IBM PC/PCjr/XT | Copyrighted and published as a 1984 product; previewed for the IBM family in the January–February 1985 press and reviewed as an IBM-first title in April–May | Primary case; well established. [S01–S06] |
| Macintosh | Available by April 1986 and reviewed as version 1.0 in August 1986; several software archives date it to 1985, but the exact ship month was not independently fixed | Later port; definitely not needed to explain the documented 1984 object. [S10–S13, S25] |
| Apple II | Reported as still being converted in January 1986 and not yet available to the Australian reviewer in April; the surviving Apple manual credits a separate Apple version and carries a 1989 copyright | Substantially later conversion, despite several databases assigning it a 1984 date. [S08, S10, S24] |
| PC-88/PC-98 | Japanese ports are documented in software databases, beginning around 1986 | Recorded but not examined closely. [S25] |
| Amiga, Atari ST, Amstrad CPC | European conversions appeared around 1990; the CPC record credits Microïds and Jean-Paul Mari | Late ports, useful as evidence of continued commercial life rather than evidence about the original interface. [S26] |

The ports are close relatives, not interchangeable witnesses. The original PC manual provides **nine formations**, of which four are editable; the 1986 Macintosh review reports **twelve**. The PC player traces routes with cursor keys or a joystick; the Macintosh port uses the mouse. The PC's `View` and formation displays freeze time, whereas one Macintosh reviewer complained that he could not simply stop the action. Even map presentation appears to differ: the PC editor says that less than one-sixth of a map is visible while editing, while a Macintosh review describes a map two screens high. [S01, S11–S12]

Consequently, later reviews are valuable evidence of reception and of the common design, but port-specific details are identified rather than projected backwards.

## 2. Development and declared design intent

The Murry brothers were not established commercial wargame designers. A later Brøderbund profile says that they became interested in programming in the mid-1970s. Dave worked in electronics; Barry became an air-traffic controller and conceived a training simulation for the US Federal Aviation Administration. After difficulty selling that program into government, the brothers moved into independent entertainment software. They began on a CP/M Heathkit, shifted to the IBM PC for its graphics, made an arcade game and *Championship Boxing*, and then selected military tactics as their next subject. [S14]

Barry reportedly read more than thirty books on strategy, including Sun Tzu, and the brothers spent more than eight months on research and initial programming before presenting the game to Brøderbund. This is direct publisher/developer history, although written four years after release and shaped as a profile. [S14]

The clearest contemporary statement of intent comes from Dave Murry in Russell Sipe's 1985 review. The brothers wanted to reach the general public rather than only hard-core wargamers, and to combine action with strategy while favouring creative strategy over brute force. Brøderbund therefore marketed it as a strategy game rather than a wargame; Sipe considered that distinction overly cautious and called it an excellent wargame. [S06]

The manual makes the philosophy operational rather than merely decorative. It says that the most skilful victory captures every enemy flag with minimal fighting. Capturing the enemy is next best, keeping the enemy divided follows, and repeated encounters are the last resort. A later designer statement similarly says that destruction is not the true goal; the superior strategy is to put the enemy in a position to surrender. [S01, S15]

This intent produces a distinctive design object:

- immediate animated action, but no requirement to command every fight personally;
- a simple counter-cycle among three combat types, but interacting terrain, visibility, fatigue, food, formations, and objectives;
- opponents differentiated through intelligible strategic personalities rather than separate rulesets;
- victory by flags or surrender as well as annihilation;
- built-in tools for players to author campaigns after exhausting the supplied ones.

The game is not a literal digital implementation of Sun Tzu. The book and historical sketches provide theme, vocabulary, tutorial advice, and a claim about indirect strategy. The underlying simulation is an original, highly abstract squad game.

## 3. Scale and representational model

### 3.1 A small force on a large, continuous map

The game engine allows no more than **twenty squads in total**, counting both sides and unseen enemy squads. A squad contains between one and fourteen people. Soldiers can be detached into a new squad, transferred, or joined, provided the global and squad limits are respected. [S01]

The map is a continuous tiled landscape rather than a hex grid. A campaign can contain:

- forts and villages;
- hills, forests, flatland, and mountains;
- rivers, bridges, shoreline, and open water;
- paths and other connective terrain;
- as many as ten flags in any combination, with at least one for each side. [S01]

There is no declared geographic, organisational, or temporal scale. One scenario may evoke Pharsalus, another Robin Hood, another Custer, and another a fictional island race. A “squad” of fourteen animated soldiers can stand for whatever force the scenario story requires. The result is a portable tactical grammar, not an order-of-battle simulation.

### 3.2 Four soldier types

Three combat types form an explicit scissors-paper-stone cycle:

| Type | Favoured opponent | Unfavoured opponent | Other property |
| --- | --- | --- | --- |
| Knight | 2:1 advantage against an equal number of barbarians | 1:2 against archers | Armoured but slow; one knight reduces a mixed squad to knight marching speed. |
| Barbarian | 2:1 against archers | 1:2 against knights | Fast, agile close fighter; represented as unarmed. |
| Archer | 2:1 against knights | 1:2 against barbarians | Ranged; vulnerable at close quarters; especially important at forts; can hit friendly troops. |
| Spy | No combat role | Captured if its squad loses | Doubles sighting range; replaced by a barbarian when the rules make every enemy permanently visible. |

These ratios are exposed in the manual. They create an immediately learnable composition problem, while distance, formation, fatigue, morale, terrain, and player orders complicate the result. [S01]

### 3.3 No conventional RTS economy

Forts can train replacement soldiers one at a time and villages or forts can supply food, depending on campaign settings. Players can contest that local support network. They do **not** gather generic resources, construct bases, research technologies, queue unit production, or manage an economy in the sense later associated with *Dune II*, *Warcraft*, or *Age of Empires*. [S01, S21]

The supplied campaigns are standalone. There is no persistent army, linked campaign, technology tree, experience progression, or strategic metagame between scenarios. A current campaign can be saved, but the save process on the original PC asks for a data disk and exits to DOS. [S01–S02]

## 4. Scenario menu as onboarding and variety

The box contains eleven campaigns. Each has a short story and separate ratings for difficulty and expected time on a one-to-ten scale. The rules and opponent can be changed before play, so the ratings describe the supplied configuration rather than a fixed level. [S01]

| Supplied campaign | Difficulty | Time | Principal problem advertised by the manual |
| --- | ---: | ---: | --- |
| *The Race for the Flags* | 4 | 3 | An outnumbered race to a neutral fort and its two flags; used as the tutorial. |
| *The Battle of Pharsalus* | 3 | 2 | Defend one flag while capturing two; a brief positional puzzle. |
| *The Contest of the Gods* | 2 | 1 | A two-person race through forest; the shortest introductory case. |
| *Sherwood Forest* | 6 | 4 | Find and protect a flag, exploit a central fort, and match small forces. |
| *The Elusive Spy* | 3 | 2 | Survive and exploit weakness while outnumbered by a claimed 100:1. |
| *Custer's Last Stand* | 9 | 3 | A very difficult but relatively short rescue problem. |
| *The Rivalry* | 7 | 5 | Makes squad condition central. |
| *A Tale of Three Islands* | 6 | 6 | Long marches and contested bridge routes. |
| *Wu vs. Ch'u* | 8 | 9 | A long problem whose hint favours the less obvious strategy. |
| *War in the Mountains* | 9 | 8 | Dispersed troops, many forts and flags, and terrain asymmetry. |
| *Islands of Doom* | 9 | 9 | A deliberately unexplained advanced problem. |

The progression is not strictly linear, but it separates **duration from difficulty**. A hard scenario need not be long, and a player can select a bounded commitment. The tutorial begins inside an actual campaign and walks through campaign choice, opponent choice, map reading, movement, information, formation, and combat rather than requiring prior mastery of the whole manual. If the title screen is left untouched for thirty seconds, a self-playing demonstration begins. The interface also keeps a help line above the current command line. [S01]

The publisher's claim of more than two thousand variations refers to recombining campaign rules and opponents, not to two thousand handcrafted scenarios. [S01]

## 5. What the player actually does

A typical session proceeds as follows:

1. **Choose a campaign.** Read its story, inspect its special rules, and optionally alter them.
2. **Choose one of eight computer commanders.** The opponent changes broad priorities, movement preferences, aggression, conservation, and difficulty.
3. **Read the map.** White squads belong to the player and black squads to the computer. Depending on visibility, some enemies may be absent or falsely reported.
4. **Inspect and organise squads.** Check composition, food, condition, speed, and trend; detach or join soldiers; choose a marching pace and pre-battle formation.
5. **Trace exact routes.** The player moves a cursor along the intended path and marks a destination. The squad then follows that route while everything else continues to move.
6. **Manage the campaign in real time.** Adjust the time rate, use the frozen overview to assess influence and force totals, monitor messages, redirect squads, and keep food and condition from collapsing.
7. **Respond to encounters.** An encounter produces a configurable delay—about thirty seconds at the medium setting—before combat starts. The player may zoom in and command it, or allow automatic resolution.
8. **Issue tactical orders by troop class.** Archers, barbarians, knights, or the whole squad can attack, move forward, back off, or stop; the whole squad may retreat.
9. **Pursue the campaign objective.** Capture all enemy flags or eliminate enough forces to compel surrender, ideally without paying for unnecessary battles.

This loop alternates planning, delegation, interruption, and intervention. The computer is not merely resolving combat for a board game. It is moving the opponent and every friendly squad continuously, reporting events, and forcing the player to decide where command attention matters.

## 6. The strategic layer

### 6.1 Real time with elastic pressure

The strategic map runs in real time, but the pressure is deliberately adjustable. Four time rates are available; the manual encourages slow time for planning and faster time after orders are set. The full-map `View` freezes time, as does formation selection. [S01]

This is therefore not continuous maximum-speed execution. The player can alternate between pressured command and protected assessment. Nevertheless, inspecting one squad, tracing a route, or thinking on the ordinary map consumes time while the opponent moves. The distinction matters: **time pressure is a selectable strategic constraint, not the whole skill test**.

The path interface is unusually literal. The destination is not enough; the player traces the complete route, including bends around water and terrain. The program can retain about 700 route steps across the active squads. A badly drawn line can send soldiers into a river. [S01]

### 6.2 Composition, splitting, and concentration

Because a squad moves only as quickly as its slowest member, composition affects strategic mobility before it affects battle. A mixed group gains combined combat options but may lose the speed of its archers and barbarians. Detaching a spy creates reconnaissance but consumes one of the twenty squad slots. Dividing troops spreads influence, captures ground, guards food, and creates simultaneous threats; concentrating them increases local fighting power and permits stronger formations. [S01]

The twenty-squad ceiling makes organisation an engine constraint as well as a decision. The manual even warns that detachment may fail because unseen enemy squads already occupy the remaining slots. This is a rare moment when hidden information and memory limits meet directly.

### 6.3 Condition and food as a coupled tempo system

Condition combines energy, injuries, and morale. Marching speed, distance, terrain, fighting, retreat, rest, and food all affect it. Below twenty per cent food, rationing reduces condition; at zero food a squad deteriorates rapidly. A resting, fed squad recovers. A squad below thirty per cent condition cannot use the fastest pace; at ten per cent or less it can march only slowly. [S01]

This produces a feedback loop:

- moving rapidly gains time but consumes condition;
- difficult terrain compounds the cost;
- poor food blocks recovery;
- low condition reduces both combat performance and maximum speed;
- a tired squad may then lose the race to the next food source or objective.

Food is supplied locally by controlled villages and, if enabled, forts. Supply range can be short, medium, or long. Control is based on nearby influence, not simply physical occupation: a powerful force can dominate a village even with an enemy squad standing in it. A player can seize villages to feed an advance, deny food to nearby enemies, or starve a fort into abandonment. [S01]

This is logistics as **territorial influence and bodily readiness**, not a stockpile of generic production points.

### 6.4 Terrain creates routes and tactical states

The nine terrain types are not cosmetic:

- hills favour the higher squad;
- bridges channel river crossings;
- rivers slow and exhaust troops and may drown them;
- open water is still more hazardous;
- forests slow and tire squads, with density set by the rules;
- mountains are slower and more exhausting again and may kill travellers;
- flatland permits fast, relatively economical movement;
- villages provide food and influence;
- forts protect troops, may provide food, and train replacements. [S01]

The campaign can alter water depth and danger, mountain height and risk, forest density, fort food, village food, supply range, and reinforcement frequency. Some AI commanders also receive characteristic terrain mobility. Terrain therefore changes both the map's route network and the relative competence of opponents.

### 6.5 Visibility is adjustable uncertainty

The enemy can be visible only when close, at a longer range, or always. Spies double a squad's ordinary sighting distance. If the enemy is always visible, spies are replaced because their role would be meaningless. Nervous or tired troops can make false reports, and sightings can be stale by the time the player looks. [S01]

The `View` display shows a miniature map of influence, relative strength, and total troops. When visibility is limited, it does not simply reveal all enemy control. The player gets a compressed command picture rather than perfect unit-by-unit truth.

### 6.6 Flags, surrender, and indirect victory

A campaign ends when one side captures all opposing flags or destroys/forces the surrender of the enemy. Flags switch ownership when crossed, so speed, diversion, and route choice can win without defeating the main force. The manual's hierarchy of victories explicitly treats unnecessary combat as inferior play. [S01, S15]

That philosophy is reinforced by practical systems: condition makes attrition costly, food sources can be interdicted, forts can be besieged, and several AI leaders surrender when the situation becomes hopeless. The game does not always require the last enemy to be hunted down.

## 7. Tactical intervention and command attention

### 7.1 A battle is optional to command, not optional to resolve

When squads meet, the program announces an encounter and starts a countdown. If the player reaches it and selects `Zoom` before fighting begins, the strategic map gives way to an animated close-up. Once the squad icons begin blinking on the map, combat is already under way: the player may inspect its progress but cannot take command. [S01]

This creates three choices:

1. intervene personally;
2. trust automatic resolution;
3. deliberately leave the battle running while attending to another manoeuvre.

The third is not merely neglect. The manual describes using one squad to occupy defenders while other squads slip into a fort and specifically says not to zoom during that manoeuvre. Delegation can therefore enable an operational action that direct command would obstruct. [S01]

### 7.2 Orders are coarse but consequential

The player does not click individual soldiers. Orders select archers, barbarians, knights, or the entire squad, followed by attack, back off, forward, or stop; retreat applies to the whole group. Formation has already fixed each soldier's starting position and cannot be changed after the battle begins. [S01]

Tactical command concerns:

- keeping archers at an effective range;
- pulling them back before close fighters arrive;
- sending the correct class against its favoured target;
- avoiding friendly arrows in the backs of advancing troops;
- using a hill, shoreline, fort wall, or bridge;
- recognising when condition and numbers make retreat preferable.

The system is more expressive than watching an odds calculation but much less granular than controlling fourteen independent agents. It puts the player in the role of a squad commander issuing group instructions.

### 7.3 Formation is a precommitment

The PC edition has nine stored formations. Five—archer-protecting, legion, phalanx, anti-archer, and “rumble” arrangements—are fixed; four can be redesigned outside a campaign by moving soldiers' starting positions. Looking at formations during play freezes time, but once combat starts the selection is locked. [S01]

Formation therefore converts information gathered on the strategic map into a tactical prior: it can protect archers, put fast attackers forward, or expose the wrong troops if the enemy composition was misread. Its significance is increased by the inability to reorganise after contact.

### 7.4 Animated outcome as feedback and spectacle

The close-up shows tiny archers firing, barbarians striking, knights fighting, soldiers falling, and survivors retreating. Period reviewers repeatedly singled this out. Macworld described each clash as a miniature movie; Jeff Hurlburt compared the animation favourably with the holographic chess sequence in *Star Wars*; another review thought the scenes could entertain people who normally avoided strategy games. [S11–S13]

The animation is functional feedback as well as reward. It makes range, matchup, formation, losses, and retreat visible rather than reporting only a number. On a 128K Macintosh, however, these scenes were slower, demonstrating the hardware cost of the spectacle. [S12]

## 8. The computer opponents

The player always faces the computer. There is no human-versus-human mode. Eight named leaders provide both difficulty selection and behavioural variation. [S01, S06]

| Opponent | Behaviour described by the manual | Broad role |
| --- | --- | --- |
| Athena | Drives at flags and attacks anything in reach; neglects defence and food; will not surrender | Reckless attrition pressure |
| Alexander the Great | Protects flags and food, engages aggressively in open ground, moves poorly in forests/mountains, surrenders when hopeless | Conventional, organised opponent |
| Geronimo | Remains mobile, traverses forests/mountains quickly, raids villages for food, avoids holding ground | Elusive terrain specialist |
| Crazy Ivan | Makes decisions unpredictably and rarely logically | Explicit easiest opponent |
| Julius Caesar | Concentrates power, advances steadily, conserves marching strength, rarely concedes | Slow mass/press opponent |
| Genghis Khan and Subotai | Guard flags and supply, move quickly through difficult terrain, attack weakness | One of the three toughest choices |
| Napoleon | Protects flags and supply, concentrates against weakness, but moves slowly through difficult terrain | One of the three toughest choices |
| Sun Tzu | Protects flags and supply, attacks weakness, and moves quickly through difficult terrain | Explicit hardest opponent |

The manual tells the player how each behaves. These are meant to be learned personalities, not secret difficulty multipliers. Choosing a different opponent changes the campaign's texture without teaching a new ruleset, and easier leaders exhibit exploitable errors rather than merely receiving fewer troops. [S01]

There is no surviving source code or technical description of the AI in the examined evidence. It is therefore safe to say that the commanders **present distinct heuristic behaviours**, because their priorities and observed tendencies are documented. It is not safe to claim that each is a wholly separate planning algorithm, that the system learns, or that its internal evaluation function accurately models the named commander.

The historical names are stylised interfaces to behaviour. The same abstract army types fight under Athena, Geronimo, Napoleon, and Sun Tzu. A later *Computer Gaming World* capsule review judged the relation to history largely coincidental, while a publisher catalogue called the opponents historically authentic. The mechanics and the manual strongly favour the reviewer's caution. [S15, S17–S18]

## 9. The Game Generator and formation editor

The construction set is not a later add-on. From the title screen, the player can create, edit, or remove campaigns and teach squads new formations. Creating a campaign involves:

1. assembling a tiled map from four pages of reusable terrain pieces;
2. placing up to twenty squads and ten flags;
3. setting each squad's side, composition, condition, food, speed, and formation;
4. choosing one of the eight enemy leaders;
5. setting the campaign rules;
6. writing a short story and title. [S01]

User campaigns are saved to data diskettes, up to eleven per disk, with additional disks providing effectively unbounded storage. The editor supports more than numerical balancing: the player authors geography, force structure, behavioural opponent, environmental rules, and framing fiction. The separate formation editor lets the player alter four tactical templates used across campaigns. [S01]

This was the feature Sipe called the game's most exciting element, and later reviews repeatedly treated it as the source of long-term value. Macworld's Hall of Fame article said the tools could keep a creative player occupied for a figurative Hundred Years' War. [S06, S12–S13]

The editor also reveals the system's boundaries:

- every map uses the same tile vocabulary and fixed overall dimensions;
- every army uses the same three combat types plus spies;
- the twenty-squad and fourteen-person limits remain;
- no cavalry, artillery, monsters, naval forces, diplomacy, economy, or technology can be authored;
- scenarios do not link into a persistent campaign;
- AI behaviour is selected from eight packages rather than programmed by the user. [S01, S06]

It is a strong scenario construction kit inside a deliberately small model, not a universal wargame engine.

## 10. Decision structure, mastery, and uncertainty

### 10.1 A simple core with interacting layers

The novice can understand the foundational loop quickly:

- archers beat knights;
- knights beat barbarians;
- barbarians beat archers;
- spies find enemies;
- seize the flags or force surrender.

Depth arises because the correct composition may be slow, the direct route may exhaust it, the nearest village may be enemy-controlled, the sighting may be false, the preselected formation may be wrong, and another encounter may demand attention before this one begins. The rules are individually intelligible but coupled through time and space. [S01]

Family Computing consequently described it as a challenging multilevel game and recommended it most strongly to beginners and to experts wanting a break from heavier simulations. The design was accessible without being presented as trivial. [S07]

### 10.2 The player allocates attention as well as troops

Because squads execute orders concurrently, the player cannot maximise every local battle at once. The encounter delay turns attention into a scarce command resource. A player can reduce pressure with slower time and frozen information views, but simultaneous movements and battles still force triage.

That creates a distinct form of mastery:

- prepare formations before contact;
- issue routes that require little correction;
- recognise which battle benefits most from direct command;
- allow favourable or strategically useful encounters to auto-resolve;
- use one engagement to screen movement elsewhere;
- keep enough awareness of food, fatigue, flags, and unseen enemies to avoid strategic surprise.

### 10.3 Calculation is hidden behind animation

The manual exposes the 2:1/1:2 troop relationships and qualitative effects of terrain, condition, formation, food, range, and morale. It does not publish a complete combat algorithm or probability table. Drowning, hazardous mountains, false reports, arrow accuracy, the random behaviour of Crazy Ivan, and automatic battle resolution all occur inside the software. [S01]

The computer removes the procedural labour of rolling and applying a combat table, but it also makes marginal outcomes harder to audit. A player can learn through repeated observation, yet cannot reconstruct every result from exposed numbers. No balance dataset or source-code analysis was found.

### 10.4 Mastery has a visible ceiling

The eight opponents establish an intended learning path from Crazy Ivan to Sun Tzu, and several reviewers found the harder leaders formidable. Jerry Pournelle reported that Sun Tzu made even avoiding humiliation difficult; the Macintosh review likewise said Sun Tzu would defeat all but skilled players. [S09, S11]

The strongest counterevidence comes from the 1986 *Australian Apple Review*. Its software expert had stopped playing because he had reached the point of winning nearly every game. That is one anecdote, not a population estimate, but it identifies the central vulnerability of a single-player system with fixed personalities: once the player models the model, no human opponent remains to extend the ceiling. [S10]

## 11. What contemporary reviewers considered best

### 11.1 Broad accessibility without abandoning strategy

Sipe judged the Murrys successful in reaching beyond hard-core wargamers while still producing an excellent wargame. Family Computing thought it suitable for novices; Hurlburt called it appropriate for wargamers of every kind; Macworld said its animation could amuse people who did not normally enjoy strategy games. [S06–S07, S11–S12]

The praise is consistent across publications with different audiences. Reviewers did not merely say that the rules were short. They emphasised that the interface, documentation, visible movement, animation, and tiered opponents made the decisions graspable.

### 11.2 Strategic and tactical command in one continuous session

Period writers repeatedly highlighted the ability to manoeuvre squads on the main map and then zoom into an encounter. The player could plan at one level, intervene at another, and see tactical preparation converted into animated consequences. [S06, S11–S13]

The tactical screen was not a detached minigame entered after a turn. Encounters emerged from simultaneous map movement, and the decision to attend or delegate remained part of the strategic situation.

### 11.3 Readable AI personalities

The leaders gave the computer opponent identity. Rather than “easy/medium/hard,” the game offered an impulsive attacker, a mountain raider, an organised defender, a concentration specialist, and progressively stronger all-rounders. Macworld explicitly said this variety added personality. [S01, S09, S12]

### 11.4 Replay through recombination and authorship

Eleven scenarios, adjustable rules, eight opponents, editable formations, and the Game Generator created several tiers of return:

- replay the same scenario against a new behaviour;
- change environmental or supply rules;
- test a new force composition or formation;
- construct a new map and objective problem;
- recreate a battle within the limits of the troop model;
- write an original fictional campaign. [S01, S06, S12–S13]

The editor was among the most consistently praised features and the strongest contemporaneous argument for many hours of use.

### 11.5 Production, documentation, and visual feedback

The original package contains an instruction manual, tutorial, strategy guide, historical survey, glossary, command reference, illustrated screens, and a self-running demonstration. Sipe praised the packaging; Macworld praised the manual; Pournelle and Hurlburt found the system easy to enter. [S01–S02, S06, S09, S11–S13]

The animated battles turn abstract composition and formation into visible action. They provided spectacle without requiring a separate arcade control scheme.

### 11.6 Indirect victory and campaign stories

Flags, food, terrain, siege, reconnaissance, fatigue, and surrender permit victories that are not just superior killing. A scenario can become a race, rescue, infiltration, bridge contest, starvation campaign, mountain pursuit, or last stand using the same foundational rules. [S01]

## 12. Friction and criticism

### 12.1 The historical promise exceeds the model

The publisher described historically authentic opponents and encouraged recreating famous battles. Yet every era is reduced to archers, knights, barbarians, spies, villages, forts, and flags. Sipe found the system broadly adequate for pre-gunpowder engagements but could not reproduce artillery at Waterloo. There is no cavalry type, artillery, command hierarchy, political context, or historical order of battle. [S06, S15]

Brooks's 1990 and 1993 capsule reviews were blunt: enjoyable and easy to learn, but historically coincidental, with some unbalanced scenarios. [S17–S18]

The eclectic scenarios should therefore be understood as tactical fables inspired by history and legend, not simulations of the named events.

### 12.2 One player only

Sipe explicitly wished that two humans could play. The omission removes negotiation, adaptation to an opponent who learns, and the effectively unbounded mastery ceiling that a strong human adversary can provide. It also made the game unusually approachable for solo computer owners: an opponent was always available and required no rules administration. Both consequences belong in the record. [S06]

### 12.3 Fixed AI can become solved

Named behaviours are readable and memorable, but readability can become predictability. The Australian mastery anecdote supplies direct evidence that at least one committed player left after the AI ceased to threaten. No evidence was found of learning, opponent adaptation, dynamic strategy generation, or patches that extended the AI. The long-lived FAQ states that there was no patch and reports no noticeable AI difference among the principal ports. [S10, S20]

### 12.4 The interface constrains the command picture

The original PC player gives orders through first-letter keyboard commands and traces complete routes with cursor keys; a joystick is optional. The map scrolls, and detailed state is obtained by placing the marker over squads. A Macintosh reviewer found that inspecting squads one by one and seeing only part of the map made the big picture difficult to obtain. [S01–S02, S11]

The mini-map helps by showing influence and total strength, but it does not expose all squad details at once and correctly withholds enemies under limited visibility. Interface friction and legitimate fog are therefore intertwined.

### 12.5 Tactical intervention has a hard deadline

The encounter countdown creates drama, but the player cannot join a battle after it has started. Multiple simultaneous encounters can exceed attention. A formation cannot be changed after contact, and a player who misses the warning must accept automatic resolution. [S01]

Slower time, adjustable delay, and frozen views moderate this pressure. They do not remove the possibility that an outcome hinges on interface navigation rather than strategic intent.

### 12.6 The model is compact enough to become repetitive

Every field battle ultimately uses the same three combat types, a small order vocabulary, and fixed-size squads. The editor changes geography and context but cannot invent a new combat relationship. Veteran wargamers seeking detailed weapon systems or historical differentiation may exhaust the model even while appreciating its elegance. Family Computing's recommendation to experts “taking a break” is revealing: it praises the game while locating a depth limit. [S01, S06–S07]

### 12.7 Standalone scenarios limit long-arc attachment

The title supports saving and extensive scenario construction, but not a continuing campaign. No soldiers, leaders, territories, consequences, or authored worlds persist from one completed war into the next. Replay comes from recombination, improvement, and creation—not long-term development of a force or narrative.

### 12.8 Hardware and storage are part of play

The primary release expects DOS booting, 128K, a graphics adapter, floppy-disk swapping, and a separate data disk. Saving ends the session and returns to the operating system. The route-memory limit can interrupt a very long set of orders. On the 128K Macintosh, battle animation is slower. These were ordinary constraints for the period but are real parts of the historical user experience. [S01–S02, S12]

### 12.9 Representation is dated and inconsistent

The game and manual use “barbarian” as a universal unarmed troop class and “Crazy Ivan” as a comic irrational opponent. The historical notes contain serious errors and stereotypes: Geronimo and Indigenous warfare receive reductive treatment; the Custer scenario is framed as a reversible game problem; Caesar, Genghis Khan, and Sun Tzu are compressed into caricatured behavioural packages. Gender is almost absent except for Athena and a sensationalised story about Sun Tzu's execution of concubines. [S01]

Some reversals are notable—the manual labels the US cavalry the “bad guys” in the Custer scenario—but they do not make the overall treatment reliable or culturally neutral. Historical distance should not turn the manual's assertions into evidence about the people it depicts.

## 13. Reception, impact, and longevity

### 13.1 Strong launch-era reception

- Russell Sipe's 1985 review called it a great game and unusually close to his ideal wargame, while identifying the missing two-player mode and artillery limitation. [S06]
- Family Computing called it a challenging multilevel game suitable from age twelve and especially appropriate to beginners. [S07]
- *Computer Entertainer* named it the 1985 IBM PC/PCjr Entertainment Program of the Year. The same awards gave the all-system strategy/wargame prize to *Kampfgruppe*, so this was broad platform entertainment recognition rather than a claim that it was the year's deepest specialist simulation. [S08]
- Jerry Pournelle made it his February 1986 BYTE game of the month and reported strong admiration from both himself and his sons. [S09]
- The *Australian Apple Review* described immediate attraction while also reporting the mastery-related abandonment. [S10]
- Macworld's August 1986 review recommended the Macintosh version and expected its variations and editor to provide many hours. [S12]
- In December 1986, Steven Levy selected it as Macworld's Best Strategy Game, ahead of runner-up *Balance of Power*. [S13]
- *PC Magazine* later described the land and sea games as educational and entertaining. [S16]

These are individual editorial judgements, not a measured consensus, but the breadth of outlets and audiences makes the pattern meaningful.

### 13.2 A franchise and multiple ports

The game led to *The Ancient Art of War at Sea* in 1987 and *The Ancient Art of War in the Skies* in 1992. Its migration from the original IBM family to Macintosh, Apple II, Japanese computers, Amiga, Atari ST, and Amstrad CPC extended its commercial and cultural life. [S14–S15, S24–S26]

The original's late Apple II conversion is particularly revealing: Brøderbund was still investing in porting a five-year-old design in 1989. Later European conversions similarly indicate continuing catalogue value, although availability is not evidence of a large active player base.

### 13.3 Later critical aging

M. Evan Brooks rated the game three of five in 1990 and two of five in 1993 while retaining the same core judgement: enjoyable and easy to learn, with an editor, but unbalanced in places and not serious history. The 1993 article explicitly says that its ratings deteriorate as computer games age and that obsolescence can be measured in months. The lower score therefore records both criticism of the game and the rapid technical aging of early software. [S17–S18]

### 13.4 Preservation and player custodianship

The IBM version is preserved in a browser-playable Internet Archive item. A long fan FAQ and strategy guide, begun in 2000 and revised through 2008, documents platform differences, copy protection, strategies, editor use, campaign exchanges, and the author's own long attachment. Museum collections preserve physical software and packaging. [S03–S04, S19–S20]

This is evidence of durable custodianship, not of mass current play. The Archive's views and favourites, fan recollections, and downloadable ports do not reveal completed sessions or retention rates.

### 13.5 Place in real-time strategy history

Retrospective genre histories often call *The Ancient Art of War* an early RTS. That label needs qualification.

- It has simultaneous real-time movement, semi-autonomous squads, fog settings, terrain, supply, objectives, computer opposition, and tactical intervention.
- It lacks resource extraction, base construction, technology, and unit-production loops central to the later commercial RTS template.
- Earlier real-time action-strategy and tactics games existed, including *Utopia*, *Cytron Masters*, *Legionnaire*, and *Stonkers*.
- Ars Technica therefore places it in the emergence of **real-time tactics**, while acknowledging it as influential and widely visible. [S21]
- Age of Empires designer Ian Fischer later argued that it was the first true RTS, as recorded by Bruce Shelley. That is a notable designer judgement, not a settled historical classification or evidence of a direct design lineage. [S22]

“Early real-time tactics/action-strategy wargame” is the least misleading description. “Proto-RTS” is defensible if the missing economy and earlier precedents are stated. An unqualified claim that it invented RTS is not established.

GameSpy placed it tenth in a 2009 staff list of the greatest PC games of the 1980s. This indicates retrospective canonical status among one editorial group, not an objective rank. [S23]

### 13.6 What is not known

No audited original sales total, systematic review corpus, balance database, player telemetry, or retention study was found. A later catalogue quotes the designers as receiving daily letters and calls from unusually involved players, but that is an unquantified promotional claim. [S15]

The evidence securely supports critical recognition, ports, sequels, preservation, and a durable reputation. It does not securely support a particular sales figure or a claim that most buyers played for years.

## 14. Research interpretation: why it could retain—or lose—players

This is an interpretation of the evidence about *The Ancient Art of War*, not a conclusion about Barry and not a prescription for the future game.

The likely attraction cycle is:

1. A demonstration and campaign tutorial make first contact unusually gentle for a 1984 wargame.
2. The player quickly learns the troop counter-cycle, flags, movement, and basic information commands.
3. Real-time movement turns a static plan into a stream of sightings, races, fatigue, and encounters.
4. The choice to zoom or delegate gives the player authorship over decisive moments without requiring constant tactical control.
5. Animated battles explain and dramatise the consequences of composition, formation, range, and condition.
6. Named AI personalities make replay legible: defeat can be followed by a deliberately different opponent rather than a faceless numerical level.
7. Rule changes and supplied scenarios move the same core through races, sieges, rescues, mountain campaigns, and long manoeuvre problems.
8. The Game Generator changes the player's role from solver to scenario author after the supplied content is exhausted.

The plausible breaking cycle is equally clear:

1. The troop model remains the same beneath every story.
2. Historical claims become less convincing as the player recognises the abstraction's limits.
3. Keyboard routing, scrolling, one-squad inspection, and encounter deadlines add command friction.
4. A player learns the eight fixed personalities and their exploitable priorities.
5. With no human opponent, adaptive AI, linked campaign, or new combat vocabulary, the challenge ceiling stops rising.
6. The editor can rearrange the existing pieces but cannot enlarge the underlying possibility space.

The evidence separates three propositions that are easy to blur:

| Proposition | Evidence | Qualification |
| --- | --- | --- |
| The game made a strong first and early-repeat impression | Enthusiastic contemporary reviews, awards, tutorial/accessibility praise, animated-battle praise | Reviews are selected individual opinions. |
| The game supplied substantial replay material | Eleven campaigns, eight opponents, rule settings, formations, full scenario editor, period claims of many hours | Potential variety is not observed retention. |
| The challenge remained durable after mastery | Harder opponents impressed several reviewers; ports, sequels, preservation, and a long FAQ show lasting attachment | Direct counterexample: one reported expert stopped after near-certain wins; no telemetry or competitive human mode. |

Its most credible retention evidence is therefore **mixed but substantial**. The title clearly generated repeat play and creative engagement for some users, and it remained memorable enough to be ported, extended, preserved, and canonised. It also contains a documented endpoint at which a fixed opponent could cease to provide a reason to return.

## 15. Evidence limitations

- The original IBM manual is comprehensive for rules and interface but promotional and historically unreliable outside those domains.
- No source code, AI design paper, or developer explanation of the internal opponent algorithms was found. Behavioural descriptions do not prove technical architecture.
- The 1984 publication year is well supported, but an exact retail ship date was not independently established.
- Platform databases conflict sharply. Contemporary notices and port-specific manuals were preferred, but the exact Macintosh ship date remains uncertain.
- Several later reviews discuss Macintosh or multi-platform releases. Their common observations are useful; their formation counts, input methods, timing, graphics, and viewport details are not silently assigned to the PC original.
- Period press is disproportionately favourable and often reviewed packaging and documentation alongside limited play. Negative consumer experience is sparsely archived.
- The White Wolf review commonly cited in modern bibliographies was not verified from the full original page and is not used for a central claim. [S27]
- Reviewers' claims of authenticity conflict with demonstrable abstraction and errors. They are evidence of perception, not validation of history.
- The GameSpy list, fan FAQ, museum objects, and browser emulation demonstrate reputation and preservation, not the size or behaviour of the active audience.
- No reliable sales audit, systematic abandonment evidence, balance statistics, or retention data were found.
- Later genre labels are retrospective. They should not be treated as the language or category through which every 1984 player understood the game.
