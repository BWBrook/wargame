# Case 011: Shenandoah Studio's *Battle of the Bulge* and 2x2 Games' *Unity of Command*

**Status:** independent joint dossier complete; Barry's personal evaluation and corpus-wide synthesis deferred.  
**Primary objects:** *Battle of the Bulge* for iPad (Shenandoah Studio, 13 December 2012) and *Unity of Command: Stalingrad Campaign* for Windows (2x2 Games / Dvaput Dva, 15 November 2011).  
**Research date:** 23 August 2026.  
**Source ledger:** [`sources.md`](sources.md).  
**Pre-research user disclosures:** quarantined in [`barry-context.md`](barry-context.md).

## 1. Scope and evidence boundary

This is a deliberately paired case. Both games are compact operational computer wargames, both present historically asymmetric offensives under severe time pressure, and both were widely praised for making serious positional play unusually approachable. Their compression occurs in different places, however. *Battle of the Bulge* interleaves the two commanders through one-area impulses whose time cost is uncertain. *Unity of Command* gives a commander an ordinary whole-side phase but makes the order of individual attacks, supply cuts, and objective deadlines decisive. Comparing those two solutions is internal to this requested bundle; it is not yet a comparison with the other ten cases or a prescription for the proposed fantasy game.

The edition boundary matters unusually strongly:

- *Battle of the Bulge* means the two-scenario iPad game released in December 2012. Its 2013 Universal update, the 2015 PC/Mac adaptation, console ports, variants, and other *Crisis in Command* games are afterlife evidence only. The 2015 adaptation explicitly advertises **rewritten AI**, so current Steam play cannot establish the quality of the launch opponent. [S01–S03, S10, S13]
- *Unity of Command* means the 2011 base *Stalingrad Campaign*. The *Red Turn* and *Black Turn* DLCs, the editor added in a later free update, and *Unity of Command II* are excluded from the original feature set. Later developer diaries are used only when they explicitly diagnose the first game. [S17–S20, S23]

Barry identified several mechanisms before research and said both games retained him. Those statements determined the questions asked, but not the answers. Independent sources confirm that single-area activation, variable tempo, supply, suppression, and serial attacks are structurally central. Barry's personal verdict remains isolated from the public evidence in `barry-context.md`.

## 2. Product identities, origins, and authorship

| Attribute | *Battle of the Bulge* | *Unity of Command* |
| --- | --- | --- |
| Original release | iPad/iPad Mini, 13 Dec 2012 | Windows, 15 Nov 2011 |
| Original commercial scope | $9.99 premium app; two scenarios | $29.99-class independent PC game; official site says 17 scenarios in two campaign perspectives |
| Battlefield scale | Mostly divisions, some brigades/regiments; 61 irregular areas; about 15–20 miles per area | Axis divisions and Soviet corps; 20 km per hex; four days per full turn |
| Primary credited origin | Marketed as designed by John H. Butterfield; later physical edition credits Butterfield and James Terry for the original digital design | Tomislav Uzelac: design and programming; Nenad Jalšovec: art direction/lead art; Ante Turudić: AI/server programming |
| Immediate lineage | Tablet-native area/impulse board-wargame design | Explicitly inspired by the *Panzer General* series, but not a clone |
| Original modes | Solo both sides, pass-the-iPad/hot-seat, asynchronous Game Center | Solo scenarios/campaigns, hot-seat, Internet/PBEM scenarios |

Shenandoah was a new studio staffed by veteran tabletop and computer-game people. Its Kickstarter sought $20,000 to complete a serious iPad wargame; the launch release said about 1,100 backers supplied roughly twice the requested amount. The public launch credited Butterfield as designer and described the app as Shenandoah's first release. The 2015 manual lists the original iOS team as Eric Lee Smith, Jeff Dougherty, Nick Karp, Pat Ward, Miguel A. Nieves, David Dunham, Peter Rambo, and Yi Wen Chan. The later physical adaptation preserves Butterfield as designer while adding James Terry to the “original digital game design” credit, a useful refinement that should not be erased by the simpler launch attribution. [S02–S06, S15–S16]

2x2 Games was a small Zagreb-based independent team. Uzelac directly named his earlier addiction to *Panzer General* as the initiating influence, while stressing that *Unity* was neither remake nor clone. The credited division of labour places design/programming with Uzelac, visual direction with Jalšovec, and AI/server work with Turudić; sound and additional programming are credited to Bruno Babić and Aleksandar Topuzović. The developers' stated ambition was to retain the essentials of a traditional hex wargame while discarding excess complexity and presenting strategic information clearly. [S21–S22, S31, S34]

## 3. Why the pair is genuinely unusual

Both games reduce the number of legal verbs and the amount of visible accounting, but neither primarily reduces the consequences of a decision.

In *Bulge*, a turn is not “move one counter.” The player chooses **one origin area**, and every ready friendly formation in that area is committed for the day whether moved or left in place. The move may consume no clock time or several hours; the player does not know before committing. The action grammar is tiny, but the chosen area's composition, the day's remaining time, the opponent's likely reply, and tomorrow's initiative make the commitment dense. [S01, S04, S07]

In *Unity*, a phase permits the player to work through the whole army in any order. The compression lies instead in one formation per hex, one ordinary action point per formation, one attacker against one defender, a visible readiness model, and an explicit supply network. A strong defender is not normally crushed by adding several units into one odds calculation. It is softened, suppressed, displaced, made weak, deprived of zone of control, or cut off through a **sequence** of actions whose order matters. [S17, S22, S26–S27]

The games therefore create different forms of operational suspense:

- *Bulge*: “Which locality must act now, before the uncertain day ends or the opponent responds?”
- *Unity*: “Which sequence opens the line, preserves momentum, cuts supply, and still reaches every objective before its clock expires?”

That distinction is a research finding about this pair, not yet a judgement that either model belongs in another game.

# Part I — *Battle of the Bulge*

## 4. A battle designed around one screen and short exchanges

David Dunham described the design constraints directly: the whole map had to fit reasonably on an iPad, the player could not be asked to manage hundreds of pieces, and turns had to be short and discrete enough for asynchronous Game Center play. This was not a cardboard design pasted into an app after the fact. Touch gestures, area sizes larger than the counters, the limited formation count, and the impulse structure were developed together. [S06–S09]

The launch package contained two scenarios:

- **Race to the Meuse**, covering 16–18 December. The Axis wins if a formation ends 18 December adjacent to the Meuse and able to trace supply; failing that, Axis control of Bastogne produces a draw and otherwise the Allies win. Publisher copy estimated about thirty minutes, while one intensive launch reviewer reported games as short as fifteen.
- **Battle of the Bulge**, the full 16–28 December campaign, where the German thrust, Allied reinforcement and counterattack, supply, weather, fuel shortages, casualties, territorial objectives, and a changing daily victory table form one continuous contest.

Both sides could be played against the computer or a human. The app also supplied basics slides, a tutorial, complete rules and tables, a day-by-day history, unit and equipment notes, local pass-the-device play, and asynchronous Game Center competition. Later scenarios and platform features are not projected back into this two-scenario launch object. [S02, S08–S10]

The map consists of 61 named, irregular areas rather than a uniform hex grid. Most pieces are divisions; some are brigades or regiments. Strength is displayed as a few visible pips, units are broadly armour, infantry, or mechanised, and elite status and selected historical modifiers provide differentiation without separate weapon inventories. Contemporary critics repeatedly observed that the board could be read as a whole and manipulated without nested administrative screens. [S01, S04, S07–S09]

## 5. The day is the strategic container

The campaign is divided into thirteen dated days, 16–28 December. Each nominal day runs from 0600 to 1800. At the beginning of a day, the game resets activation, places reinforcements, performs applicable supply checks, later checks Axis fuel shortages, applies replacements and historical restrictions, and establishes who has initiative. [S01]

Initiative follows the battle's historical reversal:

- Axis initiative from 16 through 22 December;
- Allied initiative from 23 December, when weather becomes clear and Allied air power returns.

The first day is more asymmetric still. The Axis receives three pre-dawn “free” turns at 0600. During them only Axis infantry normally moves, though armour already sharing an area with an enemy may attack; afterward those formations are reset to ready. The regular 16 December phase then restricts Allied infantry movement and Axis breakthrough/strategic movement. The opening is therefore not a symmetric sandbox with historical units. Surprise, road congestion, and the initial collapse are embedded into who may act and how. [S01]

That scripted opening is coupled to a known calendar. Weather, air power, reinforcements, fuel shortages, replacements, and initiative changes are not random discoveries. The Player's Guide calls the calendar a way to “see the future”: expert play includes preparing now for the 23 December inflection rather than merely reacting to the current board. The exact dice are uncertain; the broad dramatic arc is legible. [S01, S04, S07]

## 6. One-space activation

After the initial special actions, players alternate turns. On a turn the active player either passes or chooses **one area containing ready friendly formations**. Every ready friendly formation in that origin area activates, whether it moves or remains. Movement for all selected pieces is completed before mandatory combat is resolved. Once activated, a formation normally cannot activate again that day. [S01, S04]

This has several non-obvious consequences:

1. **Concentration is also scheduling.** Three formations brought into one area may become a strong stack, but on a later activation they will all be spent together. A formation that was only supposed to hold the area is nevertheless used for the day when its companions depart.
2. **Origin topology matters.** The question is not only where a formation can reach, but which formations can be grouped in a common origin without blocking roads, exceeding the three-unit limit, or prematurely consuming defenders.
3. **An enemy can pin readiness.** When combat occurs, ready friendly formations already in the target area may join and thereby become activated. Previously activated friendly formations defend but cannot contribute as active attackers. A battle can therefore consume local options beyond the units visibly moving into it.
4. **Retreat can steal tomorrow's action today.** A defender forced to retreat becomes activated. Combat is not only damage and displacement; it can remove a formation from the rest of the day's decision cycle.
5. **Passing has positional meaning.** One pass hands the opponent an opportunity while preserving options. Two sequential passes end the day.

The design's common shorthand—“one unit at a time”—is therefore imprecise. The atomic player decision is one **local command packet**, defined by the ready formations sharing an area. Contemporary praise for single-area activation rests largely on this tension between a simple input and a potentially large commitment. [S01, S04, S07–S08]

## 7. The clock advances after actions, not before them

After every activation or pass, the clock advances by a random amount whose distribution changes by date. The mature rules give the following probabilities: [S01]

| Time added | 16 Dec | 17 Dec | 18 Dec | 19–21 Dec | 22 Dec onward |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 0 min | 20% | 20% | 20% | 20% | 30% |
| 30 min | 20% | 20% | 30% | 30% | 30% |
| 60 min | 30% | 40% | 30% | 40% | 30% |
| 90 min | 10% | 10% | 10% | 10% | 10% |
| 120 min | 10% | 10% | 10% | — | — |
| 180 min | 10% | — | — | — | — |

A day ends when time reaches or passes 1800, when every formation on both sides has activated, or when both players pass consecutively. Because the cost is revealed after commitment, the player cannot solve a day as a fixed number of action points. A zero-minute impulse creates unexpected abundance; a long jump can leave rear moves, reinforcement placement, a counterattack, or a supply repair undone. [S01, S07–S08]

The mechanic produces three layers of priority:

- **importance:** which move matters most if only one is left;
- **reply risk:** whether acting gives the opponent a local response before the day disappears;
- **day-boundary play:** whether a late attack can be followed immediately by the same side's initiative next morning, with formations reset while the defender has had no intervening activation.

The third point makes asymmetry temporal rather than merely statistical. An Axis formation attacking late on 20 December may reactivate first on the 21st; after the initiative reversal the Allies can seek the same double action. The 2013 Player's Guide explicitly teaches this cross-day follow-up in river assaults. [S01, S04]

The risk is equally clear. A large random clock jump can decide whether an intended operational sequence exists at all. The design makes uncertainty memorable and forces triage, but the lost action can feel less like battlefield friction than a die roll over permission. Geryk found the resulting turning points varied and dramatic across dozens of games; that is strong repeat-play testimony, not proof that every player accepts the variance. [S07]

## 8. Movement, control, and concentration

Infantry normally moves one adjacent area. Armour and mechanised units move one, or two when following connected roads. Strategic movement can reach three road areas but requires a friendly-controlled, uncontested route and is restricted on 16 December and under later clear-weather conditions for the Axis. Entering an enemy-occupied or contested area stops movement. Each side may have at most three formations in an area. [S01]

Control is binary even when occupation is mixed. Every area belongs to one side; there are no neutral spaces. When enemy units enter, the area becomes contested but remains controlled by the incumbent until all of that side's formations leave or are removed. Control affects road movement, victory, reinforcements, and especially supply. A lone survivor can therefore keep a route hostile even when militarily weak. [S01, S07–S09]

Rivers and bridges create a deliberately sharp traffic constraint. Across an unbridged/interdicted river boundary, only one formation can cross from that origin in a turn; roads and already-contested bridgeheads change what can follow. The area model abstracts kilometres of frontage, but the one-space activation and river restriction can make the historical road net felt as congestion and irreversible direction choice. The Player's Guide notes that neighbouring areas may belong to very different axes of advance: committing toward one can make lateral repair unexpectedly difficult. [S01, S04]

The three-formation limit has two faces. It makes force concentration visible, caps local calculation, and gives a compact “full stack” an immediately recognisable presence. It also creates traffic jams, blocks reinforcement placement, and makes a weakly held area vulnerable to an overrun or forced retreat. Because an activation spends the whole origin stack, the best local concentration can be the worst flexible reserve. [S01, S04, S07–S08]

## 9. Combat is area-wide, simultaneous, and only partly player-directed

Combat is mandatory after movement when activated attackers share an area with the enemy. All enemy formations in the area defend. The attacking pool comprises the activated formations that entered or began there plus any previously ready friendly formations in the target that join and thereby activate; friendly formations already spent earlier in the day do not add attack dice. [S01]

Each strength pip effectively fires a virtual ten-sided shot. In the base case armour hits on 40%, infantry/mechanised on 30%, and out-of-supply defenders on 20%. Elite units, clear terrain, surprise, Axis artillery reach, Allied air power, rivers, armour composition, isolation, and other conditions modify hit probability. Terrain protects the defender by absorbing a limited number of hits rather than by adding a separate defence statistic. The app previews expected hit distributions, likely retreats, and active modifiers before commitment. [S01, S04, S08–S09]

Loss allocation is automated. Hits are spread as evenly as possible, generally onto the largest formations first with armour used as a tiebreaker. The owning player does not choose a sacrificial screen. Retreat may absorb a hit but is not a freely purchased option: its chance depends on incoming hits, remaining strength, and whether the area is an objective. Retreat destination follows programmed priorities. This removes a substantial rules and negotiation burden, at the cost of direct casualty and withdrawal agency. [S01]

If every defender is removed, surviving attacking armour may break through into one adjacent area. It does not fight a second combat there. The result is less a *Panzer General*-style chain of attacks than a bounded positional leap. The advance can seize a road, threaten supply, or cross the Meuse, but only after the local defence is completely cleared. [S01]

Combat therefore produces more than attrition:

- strength loss changes future dice;
- retreat changes control and may spend the defender's activation;
- total clearance permits armoured breakthrough;
- even an unsuccessful attack may pin ready friendly defenders by making them participate;
- terrain absorption and automatic allocation make the forecast legible without making the exact result certain.

The audiovisual treatment—bullet marks, absorbed-hit icons, unit pips, short animations, sound, and a dynamic score display—was repeatedly praised because it exposes these consequences without asking the player to operate a combat-results table manually. [S07–S09]

## 10. Supply is a daily state with escalating failure

Supply is traced at the start of each applicable day through friendly-controlled areas to a friendly map edge. It begins for the Allies on 17 December and the Axis on 19 December, reflecting the different opening conditions. A route may pass through a contested area only under limited friendly-presence/control conditions. Repairing the line later in the day does not restore the formation immediately; the start-of-day check governs the whole day. [S01]

The consequences occur in stages:

| Consecutive failed daily check | State and effect |
| --- | --- |
| First | **Out of Supply** for the day: already treated as activated, cannot move or attack, and defends with only a 20% hit chance per pip. |
| Second | **Isolated**: cannot move or attack and rolls no defensive dice. |
| Continued isolation | If still isolated while sharing an area with an enemy, loses one strength point at the daily check. |

Clear-weather Allied air supply downgrades a would-be Isolated Allied formation to Out of Supply. Beginning 21 December, one randomly selected Axis armour/mechanised formation suffers a one-day fuel shortage with the same practical effects as Out of Supply; from 26 December the number rises to two. [S01]

This is not a resource stockpile, convoy economy, or continuously varying supply radius. It is a daily connectivity test whose first failure immediately removes a unit's agency, and whose second makes it nearly helpless. That severity lets a cut matter within a thirteen-day game and creates obvious pockets. It can also turn a single missed route or end-of-day clock jump into the loss of an entire next day's use before the player can answer. [S01, S06–S09]

Supply and activation interact tightly. A formation need not be destroyed to disappear from the decision space: the connection check can pre-activate it for the whole day. Conversely, a player may spend scarce impulses to keep an apparently minor rear area controlled because that area is the only legal path for several forward formations. The map's rear is tactically live even though there are no supply counters to move. [S01, S07]

## 11. Reinforcements, replacements, and historical chrome

Reinforcements arrive on fixed dates and entry areas. Control and stacking can displace or delay them, so congestion at a nominally safe edge has operational consequences. From 20 December, each side receives fixed daily replacement strength by unit type; replacements can go only to supplied formations and unused points disappear. A formation cannot exceed its starting strength. [S01]

Additional rules are sparse but campaign-specific: British formations face restrictions until German movement across the Meuse; Axis OKW reserves release under defined conditions; weather becomes clear on 23 December; an Axis commando operation can temporarily freeze an Allied formation on one of several early dates; artillery and air-power bonuses are geographical/temporal conditions rather than separate pieces. [S01]

Geryk described this as enough “chrome” to produce Ardennes verisimilitude without modelling every commander, bridge engineer, fuel dump, or airborne operation. The price is deliberate distortion. German combat capability is increased enough to make a contested game from an offensive that historically could not achieve its strategic aim. The result simulates the campaign's choices and phase reversal more than it predicts the historical force relationship. [S06–S07]

## 12. Moving victory thresholds turn the tide without changing the rules

Both sides score the starting strength value of enemy formations destroyed. The Axis also scores for controlled named objectives and for supplied formations west of the Meuse. From 16–19 December, a supplied Axis-controlled presence west of the Meuse can produce immediate victory. [S01]

Otherwise the game computes a net Axis-minus-Allied score at each day's end and compares it with a dated upper and lower threshold:

- at or above the upper threshold, the Axis wins;
- at or below the lower threshold, the Allies wins;
- between them, the campaign continues.

The thresholds move over time. Early, the Axis must create enough progress to keep the offensive alive. Later, the acceptable Axis total falls, so a German player can sometimes consolidate gains and wait for the line to come down. The Allied role correspondingly changes from survival to mandatory counterattack: fresh armies and air power are useless if they do not strip German objectives and points quickly enough. [S01, S07]

This is a particularly economical solution to a battle in which strategic initiative reverses. The unit rules do not need to be rebuilt at midgame, and the historical loser can remain a playable side. Time changes what the same board position **means**. It also creates threshold effects: one destroyed unit or objective can terminate a campaign at the daily check even when the wider military situation appears recoverable. [S01, S07]

The short scenario uses a much narrower question—end 18 December adjacent to the Meuse with supply, settle for a Bastogne draw, or be stopped—so it is not merely the first three days of the campaign with an earlier stop. Its positional priorities and tolerance for attrition differ, a point developed explicitly in the Player's Guide. [S01, S04]

## 13. Interface, teaching, and information design

Contemporary reviewers converged unusually strongly on presentation. The first launch exposed a short basics sequence, a playable tutorial, a full searchable rules reference with tables, and an historical magazine-like archive. The board, clock, initiative, control colour, readiness, strength pips, score, and named areas stayed visually available. [S02, S08–S09]

Before an activation is committed, the player can move pieces, inspect resulting combats, review expected hit and retreat distributions, and undo back to the start of the impulse. The Player's Guide actively encourages exploring alternatives before pressing Commit. After commitment, the clock and combat uncertainty resolve. The interface thus draws a clean line between **planning information** and **irreversible consequence**. [S04, S08]

That line matters because the underlying rules are not as slight as the input vocabulary suggests. Bridge interdiction, contested-area control, activation participation, supply timing, breakthrough eligibility, retreat priorities, replacements, date-specific restrictions, and victory tables all have edge cases. Progressive disclosure lets a novice act without memorising them; the full charts let an expert audit the machine. Geryk reported not reading the manual until after four games because play had already taught most of what he needed. That is a strong anecdote for onboarding, not evidence that every nuance was discoverable. [S07–S09]

The original multiplayer forms were suited to the same activation scale. A local opponent could share the device; an online opponent received one short committed impulse at a time through Game Center. The design avoided mid-combat decision prompts such as defender-chosen retreats, which would otherwise multiply asynchronous waits. [S02, S04, S06]

## 14. The original AI: technically interesting, practically disputed

Miguel Nieves' launch-period account is unusually informative. The opponent was built as an interface-using player rather than a privileged game-state function. A **Control Yoke** implemented a hierarchical finite-state loop—prepare, gather, decide, commit, wait. A **Strategic Brain** compared candidate **Tactical Nodes**, whose weighted, normalised utility values represented criteria such as taking ground, surviving, winning local battles, exploiting weakness, or holding defensible positions. [S05]

Development proceeded in measurable steps: legal random actions, purposeful tactical actions, attempts to win, strategic prioritisation, then externalised archetypes. Utility was selected because the two sides had different goals and because pins, grinding, movement, and changing victory conditions made direct path-to-win evaluation difficult. Agent personalities could be altered in data rather than hard-coded anew. Running a second Control Yoke made AI-versus-AI testing and UI stress testing straightforward. [S05]

Nieves said the launch shipped with **eight agents**. Reviews usually describe two named/personality choices for each opposing side and, across two scenarios and two player sides, eight selectable solo combinations. The evidence does not fully resolve whether “eight agents” means eight separately tuned scenario-side objects while the UI exposed four broad personality identities. The dossier preserves both descriptions rather than reducing them to “four AIs.” [S05, S08–S09]

The architecture had clear advantages:

- faction-asymmetric evaluation without one monolithic objective function;
- personality variety through weights;
- modular candidate scoring rather than a brittle full game tree;
- the ability to make legal moves through the same interface contract as a human;
- automatic AI-versus-AI play for testing.

Nieves also acknowledged that tuning was time-consuming and that the agents could surprise even their maker. The system did not use learning, opponent modelling, or a deep search that could establish optimality. [S05]

Actual-play evidence conflicts sharply. Barnes called the AI challenging after several days and expected it to beat many players. Dunham later said the utility system worked “pretty well” in *Bulge*, while noting that larger games magnified its weaknesses. Geryk, after several dozen games, found specific exploitable habits: abandoning score cities, accepting isolation traps, playing Germans weakly, and failing the Allies' necessary counteroffensive so badly that a competent Axis player could consolidate and wait for the declining threshold. [S06–S08]

These accounts need not describe the same learning stage. A personality-driven heuristic can be novel and punishing before its priorities become legible, yet exploitable after repetition; the Allied role may also be harder because it must switch from emergency defence to timed counterattack. This is a plausible reconciliation, not a measured finding. What is confirmed is that the 2015 adaptation advertised **rewritten AI**, which prevents later performance from settling the launch dispute. [S07, S13]

## 15. What favourable accounts most valued in *Battle of the Bulge*

### 15.1 Very short rules-to-decision distance

The common action—touch an area, move some or all ready formations, inspect combat, commit—puts the player into a consequential decision before a conventional wargame would finish setup. Reviewers repeatedly treated the low rule burden as an achievement rather than a euphemism for triviality. [S07–S09]

### 15.2 Constant opponent presence

Alternating impulses mean there is rarely a long whole-army wait. A road opening, exposed town, weak stack, or threatened supply area can receive an answer immediately, unless the random clock ends the day. Even asynchronous play preserves that local exchange rather than transmitting a complete side turn. [S01, S04, S06–S08]

### 15.3 Priority under imperfect tempo information

The uncertain clock makes a list of desirable actions different from an ordered plan. The player repeatedly chooses which intention must survive if the day ends now. Contemporary accounts describe this pressure as tense, brutal, and addictive. [S07–S08]

### 15.4 Asymmetry that changes over time

The Axis and Allies do not merely have different strength totals. Surprise, movement restrictions, reinforcement flow, artillery, air power, fuel, initiative, and victory requirements change on known dates. The same player experiences an offensive race, a defensive hold, and a counteroffensive without loading a different rules engine. [S01, S04, S07]

### 15.5 A whole campaign resolved through a small number of places

Sixty-one named areas, a three-piece local limit, and a modest order of battle make individual roads, river crossings, towns, and formations memorable. Geryk's review could recall particular unlikely attacks after dozens of games because the map was fixed enough to recognise and variable enough for different local crises. [S04, S07]

### 15.6 Digital administration with board-game auditability

The app allocates hits, advances time, traces supply, enforces historical dates, handles retreats, and displays probabilities, but also exposes the tables and modifiers. It removes procedure without concealing the model entirely. [S01, S04, S08–S09]

## 16. Principal frictions and limits in *Battle of the Bulge*

The favourable case coexists with material constraints:

- **Only two launch scenarios.** Both use the same map and fixed historical setup. TouchArcade expected human multiplayer, not solo content, to carry replay once the eight visible side/scenario/personality combinations were explored. [S02, S09]
- **A learnable original AI.** The most sustained contemporary account found clear positional exploits and a particularly poor Allied counteroffensive. The opponent could provide an effective entry challenge without sustaining expert solo play. [S06–S08]
- **High-leverage clock variance.** An action can consume zero minutes or, on the opening day, three hours. The mechanic forces priority but can also cancel planned operational sequences through one result. [S01, S07–S08]
- **High-leverage combat variance.** Each pip fires independently. On a small, ruthlessly tuned map, an extreme miss, retreat, or destruction can redirect the entire campaign. Variety and fragility come from the same source. [S07]
- **Automatic casualty and retreat control.** Legibility is gained by withholding owner choice over which formation takes a loss and often where it withdraws. [S01]
- **Severe first supply failure.** A newly out-of-supply formation immediately loses all movement and attack for the day, making end-of-day route control exceptionally unforgiving. [S01]
- **Fixed historical scripting.** The opening and calendar produce the campaign arc but narrow free-form experimentation and may encourage opening study on a map small enough to analyse intensively. [S01, S07, S09]
- **Historical distortion for contestability.** The Germans are made more capable than historical plausibility alone would support. The game aims at a credible decision experience, not an outcome-frequency model. [S06–S07]
- **Threshold abstraction.** A moving victory table elegantly represents political and operational pressure but can terminate a still-active battlefield because a score crosses a dated line. [S01, S07]

The disagreement is not whether these structures exist; it is whether their compression feels like concentrated command or withheld agency.

## 17. Sustained engagement and afterlife of *Battle of the Bulge*

Evidence of attachment is stronger than a launch score but weaker than a retention curve:

- the Kickstarter attracted about 1,100 backers before release; [S02–S03]
- Geryk reported several dozen games within weeks and the 2013 Player's Guide contains substantial community-authored strategy, including map ranking, calendar play, river operations, unit roles, and multiplayer procedure; [S04, S07]
- the game won the 2012 Charles S. Roberts awards for its computer-wargame category and computer graphics; [S11]
- it received a 2013 Universal iOS revision, passed through Slitherine's 2014 acquisition of Shenandoah, and was adapted to Windows/Mac in 2015 and consoles in 2017; [S10, S12–S16]
- a 64-bit iOS replacement preserved access for earlier purchasers through Apple's architecture transition; [S14]
- John Butterfield's design became the acknowledged basis of a 2019 physical *WWII Commander* game; [S15]
- the revised Steam edition remained for sale on the research date, although its 71%-positive English snapshot is modest and concerns a materially revised product. [S13]

The record demonstrates an enduring design lineage, community analysis, and repeated play among selected enthusiasts. It does not disclose campaign completion, typical number of matches, current original-iOS ownership, human matchmaking activity, or how many players stopped after mastering the AI.

# Part II — *Unity of Command: Stalingrad Campaign*

## 18. An operational campaign made of short, bounded problems

The original game covers the southern Eastern Front from the Second Battle of Kharkov through the 1942 German advance, Stalingrad, Soviet counteroffensives, and the early-1943 German recovery. Axis formations are normally divisions and Soviet formations corps. A hex represents 20 kilometres; one complete Axis-plus-Soviet turn represents four days. [S17–S19]

Official pages identify **seventeen scenarios**. Contemporary sources variously say seventeen, eighteen, “17+,” or approximately fifteen. A later official-forum inventory includes bonus and multiplayer forms, while the tutorial and dedicated PvP scenarios can be counted differently. The safest original-product statement is therefore seventeen official scenarios, with a documented contemporary counting ambiguity rather than a falsely exact reconstruction of every launch menu item. [S18–S19, S24, S26–S27, S33]

Scenarios are short operational commands, often with around twenty player formations and roughly nine or ten turns; one contemporary reviewer estimated thirty to sixty minutes for many of them. The player usually starts with a fixed map, force, weather sequence, reinforcement schedule, supply geometry, and list of timed objectives. There is no base construction, production queue, research tree, diplomatic layer, or off-map economy to manage. [S17, S25]

The compactness does not mean a symmetric skirmish. Orders of battle, unit quality, weather, supply sources, objective locations, theatre assets, and scenario initiative reproduce a particular operation. German formations are generally fewer and more capable; Soviet forces are often larger and less experienced. Some scenarios ask for breakthrough, some defence, some encirclement or breakout, and some withdrawal. The developers intended the historical command problem—not a generic balanced map—to determine the correct kind of play. [S17, S21–S22]

## 19. Campaign continuity is prestige, not a persistent army

The base game offers Axis and Soviet campaign maps. Completing a scenario with a Victory, Decisive Victory, or Brilliant Victory opens different subsequent nodes. A loss ends the campaign immediately. This creates consequence and alternate historical branches without carrying the battlefield itself forward. [S17, S27]

Only **prestige** persists. Score above a scenario threshold becomes influence with OKH or Stavka; prestige can later requisition otherwise unavailable regular steps, specialist steps, or complete reserve formations. A player who performs efficiently has more discretion later. Formations, casualties, attachments, names, positions, and supply states do not persist. A division destroyed in one battle may reappear historically in another. [S17, S24, S27]

The manual explicitly frames the player as exercising operational skill across all battles fought by a side, not following the career of one officer. That avoids campaign death spirals and frees each scenario to use its historical force set. It also removes the veteran-roster attachment and recovery arc found in *Panzer General*. Later, while developing the sequel, 2x2 described the first campaign as “somewhat bare-bones.” [S17, S23]

Within a scenario, objectives are compulsory: every target must be captured to win. Capturing them earlier yields higher score and better victory tiers; their value can decline after specified turns. If the enemy retakes one, it must be captured again, and the objective behaves as though it had not been secured. The clock rewards momentum, not merely eventual battlefield superiority. [S17]

## 20. One formation per hex, with readiness inside it

*Unity of Command* has **no unit stacking**. One Axis division or Soviet corps occupies one hex. A formation can contain up to seven regular steps plus one specialist step. Its apparent single counter therefore contains an internal readiness ladder rather than a pile of separately movable counters. [S17]

Regular steps can be **active** or **suppressed**:

- active steps contribute to movement-zone influence and combat strength and take losses first;
- suppressed steps are greyed out, contribute no combat value, and take permanent losses only after active steps are gone;
- experience progresses from green through standard and veteran to elite, affecting combat shifts, retreat, and recovery;
- one attached specialist can provide armour, artillery, engineer, recon, anti-air, anti-tank, NKVD, or other scenario-specific capability.

Suppression is not merely temporary damage animation. It is the main variable linking combat, supply, movement, entrenchment, recovery, and vulnerability. Uzelac later said the game deliberately used supply plus suppression to “fake” some effects that a denser simulation would represent with separate morale and flanking systems. [S17, S22]

Entrenching illustrates the compression. A supplied unit can spend its action and movement to dig in, normally suppressing two of its own steps in the process; terrain and entrenchment then shift later combat. Engineers reduce several such penalties. Readiness is both capacity and cost rather than a separate construction resource. [S17]

Barry's remembered “strong stack” should therefore be translated carefully. The hard object in *Unity* is a strong, experienced, entrenched, possibly specialist-enhanced **multi-step formation**. Several formations never merge into one hex or one combat total. That absence is what makes sequential ablation so important.

## 21. Movement, action points, zones of control, and the living front line

Each formation begins its phase with movement points determined by mobility class and conditions and, normally, one action point. The action point can fund an attack or be converted into extended movement. Difficult terrain, weather, rivers, and enemy influence consume movement or lock the option to extend. There is no long menu of per-unit action types, but spending the single action before or after movement defines whether a formation fights, exploits, or simply repositions. [S17]

Enemy formations with at least three active steps exert a zone of control. Entering it consumes remaining movement and locks the action point against extended movement, although the unit may still attack. A formation with fewer than three active steps, or one that has already retreated in the current turn, is **weak** and exerts no ZOC. Suppression can therefore open a corridor before the defender is destroyed. [S17]

Territorial ownership is drawn as a continuous coloured front rather than claimed one hex at a time. Movement can sweep control through unopposed ground, while enemy ZOC, cities, objectives, rivers, and other anchors prevent automatic conversion. This lets a breakthrough change the readable front line immediately and makes the route behind it—especially the rail line—visually obvious. [S17, S25, S27]

The grid can be hidden. Terrain, weather, supply, objectives, unit details, enemy movement reach, and combat projections have dedicated views or sheets. Jalšovec described the goal as making strategic information accessible; Uzelac's later design rule was harsher: if a mechanic could not be represented well in the interface, it did not belong. [S17, S21–S22]

## 22. Combat is one attacker, one defender, one forecast

An ordinary attack involves one adjacent friendly formation and one defending formation. There is no conventional multi-hex combined attack in which three adjacent corps add their strengths into a single odds ratio. The attacker normally spends its sole action point; the defender does not spend an action to resist. [S17, S27]

Combat value is calculated from the active regular steps and specialist contribution. The attacker-to-defender ratio is converted to a signed odds column on a logarithmic base-three scale, then shifted by armour, artillery, terrain, weather, entrenchment, experience, and specialists. The interface displays expected attacker and defender losses, suppression, retreat chance, and overrun chance before commitment. Resolution then introduces bounded random variation, so the forecast is informative rather than deterministic. [S17, S26–S27]

Results can permanently remove steps, suppress them, or force retreat. A retreating unit seeks the nearest legal empty hex within its movement allowance; if it is cornered, all of its steps become suppressed. Experience and NKVD attachments alter retreat and casualty relationships. A defender that remains may still leave the exchange with fewer active steps and therefore weaker combat and ZOC. [S17]

If a retreat also produces an **overrun**, the attacker keeps its action point but suffers suppression to represent dissipation of momentum. It may then continue movement or attack again if position permits. This is not a free “blitz” chain: the spearhead's readiness is being consumed by every exploitation. [S17, S26]

## 23. Sequential ablation is the operational grammar

Because only one formation can attack at a time, a strong defender is commonly defeated through an ordered sequence:

1. A theatre air attack or a less valuable ground formation suppresses some active steps.
2. The next attacker faces a lower effective defence and may inflict permanent loss or force retreat.
3. Once the defender has fewer than three active steps or has retreated, its ZOC disappears.
4. Mobile formations pass through or attack the displaced unit from a new position.
5. A successful overrun lets a spearhead retain its action, but the spearhead accumulates suppression and becomes less capable in the next exchange.

The early attacks are not wasted simply because they fail to eliminate the target. They convert active combat power into suppressed power, alter retreat odds, remove entrenchment under defined conditions, and potentially dissolve ZOC. Later attacks exploit the new state. [S17, S22, S26–S27]

This creates a visible staircase rather than one combined-arms die roll. Attack order becomes a resource:

- infantry can absorb the poor opening exchange;
- artillery-supported ground attacks or air attacks can create suppression;
- armour supplies a shift in open terrain and has the movement to exploit;
- engineers reduce fortification/river problems;
- reconnaissance can manipulate territory and ZOC restrictions;
- fresh forces must be preserved to move through the actual gap.

The system can represent a textbook breakthrough with a small number of mechanics, exactly the behaviour Uzelac said he wanted players to discover. It also creates a puzzle-like optimal sequence. If only one ordering can meet a tight objective clock, an unlucky early result may force a restart rather than an improvised campaign. The Scientific Gamer's adverse example—twenty failed attempts followed by a brilliant result when two overruns finally appeared—shows the extreme form of that risk. [S22, S26]

## 24. Supply is a visible operational network, not a binary trace

Every formation performs a supply check at the **start of its side's turn**. A source projects along friendly connected rail with effectively unrestricted reach, then “bursts” outward through terrain and weather at a finite range. The active front line blocks transmission. A captured enemy source is denied to its former owner but cannot simply be converted into one's own supply source. [S17, S20]

The dedicated supply view suppresses other map clutter and displays sources, rail connection, barrel/range indicators, and unsupplied formations. This proportional visual model was repeatedly singled out as understandable: a player can see the logistical veins, the point where rail support ends, and the front-line puncture that would sever them. [S17, S21, S25, S27, S30]

Supply failure escalates by turns rather than destroying a unit immediately:

| Consecutive turns out of supply | Effect at the next check |
| --- | --- |
| 1 | No recovery of previously suppressed steps. The formation can still move and attack. |
| 2 | No action point, so no attack; green/standard/veteran formations additionally suppress 3/2/1 steps. |
| 3+ | No action point, one fewer normal movement point, and all steps suppressed. |

An unsupplied formation never disappears automatically. Once reconnected, it recovers suppressed strength according to experience—roughly one step for green through four for elite per check—and regains operational function over time. [S17]

This delay is crucial. A supply cut is not an immediate kill switch; it is a countdown visible to both sides. The encircler must hold the cut and the pocket boundary. The encircled player may still move and attack during the first unsupplied turn, then move without attacking, and may attempt a breakout before becoming wholly suppressed. The struggle concerns route, time, and recovery as much as casualties. [S17, S20–S21, S26]

Supply also gives minor rear formations operational value. A cavalry or depleted infantry unit that cannot defeat the main line may occupy a railway, seize a source, or plug a corridor. Contemporary play accounts repeatedly describe the AI finding precisely these weak logistical seams. [S24–S28]

The compression is not costless. Kotaku found the collapse too fast after one inattentive move, and the later sequel diary admitted that scenario designers sometimes increased supply range to compensate for poor weather, weakening the intended weather/logistics relationship. The elegant general rule still depended on scenario tuning. [S23, S29]

## 25. Reinforcement, specialists, and theatre assets

Each scenario defines a force pool of free scheduled reinforcement steps and formations. A separate OKH/Stavka reserve can be requisitioned with prestige. Up to three regular steps can normally be added to a supplied formation in a turn, to a cap of seven. Newly added steps begin suppressed and dilute the formation's average experience; replacing losses restores quantity at a temporary readiness and quality cost. [S17]

A formation can carry one specialist step. Armour and artillery supply combat shifts; engineers assist entrenchment and difficult attacks; reconnaissance interacts with capture and ZOC restrictions; anti-tank and anti-air defend against particular assets; NKVD reduces retreat but increases casualties; towed weapons suppress after movement. The one-slot limit makes attachment a role decision without an equipment tree. [S17]

Scenario-level theatre assets can include air attacks, temporary logistics extension, bridge construction/destruction/repair, partisans, and air supply. Availability and per-turn/whole-scenario limits are prescribed by the operation. They are not a persistent strategic deck. A modest air strike may be valuable not because it kills a formation, but because its suppression improves the next ground attack in the ablation sequence. [S17, S25]

Prestige connects efficiency to future discretion, but it is not an economy of territorial production. Spending it can rescue the current battle while lowering final score or future purchasing power. Unspent prestige in a standalone scenario contributes to score, rewarding a solution that does not ask high command for unnecessary help. [S17]

## 26. Objectives and clocks prevent comfortable attrition

All mandatory objectives must be occupied before the scenario's last permitted turn. Capturing them earlier produces more score and better victory categories; destroying enemy formations produces no equivalent substitute for missed geography. A player can be militarily dominant and still lose because a depleted blocker remains on the final road. [S17, S27]

The clock interacts with supply's delayed effect. An encirclement is attractive because a pocket becomes progressively helpless over two or three turns, but waiting consumes the same turns needed to capture objectives. The player must decide whether to close and starve, attack sequentially now, bypass, or accept a lower victory tier. [S17, S24, S26]

This is how a short scenario avoids settling into frontal grinding. Defence is favoured strongly enough that head-on infantry exchanges are inefficient; supply and deadlines make manoeuvre necessary; the score makes speed valuable; suppression makes local preparation possible. The player is pushed toward envelopment without an explicit “flanking bonus.” [S17, S22, S26–S27]

It is also why several critics called the game a puzzle. Fixed initial conditions, compulsory objectives, short clocks, transparent forecasts, and branching only on achieved score imply that at least one workable sequence exists. Mastery can feel like discovering operational doctrine or finding the scenario author's solution. The same structure supports both interpretations. [S22, S26, S29, S32]

## 27. Teaching, interface, and after-action understanding

The manual tells a new player to use the tutorial before studying every rule. Tutorial and introductory scenarios progressively expose movement, combat, supply, and territory. The map presents toy-soldier-like busts rather than dense NATO counters; hovering or selecting opens the unit sheet, combat sheet, terrain, supply, objective, and reinforcement detail. [S17, S21, S25]

Combat projections reveal not just a ratio but expected step losses, suppression, retreat, overrun, and every shift. Supply has its own uncluttered overlay. The front line is painted dynamically, the hex grid can disappear, and a minimap keeps the operational shape visible. The computer functions as Uzelac's “staff officer”: it calculates, draws, records, and enforces while the player chooses. [S17, S22, S27]

**History Mode** records the scenario as an action-by-action and turn-by-turn timeline that can be moved backward and forward after play. This turns a failed supply cut or unexpected counterattack into an inspectable sequence, not merely a final defeat screen. It supports learning from operational causality without requiring a separate replay tool. [S17–S19]

The interface was not frictionless. GameWatcher found accidental movement easy and no one-step undo available; deeper specialist/status symbols could be tiny and underexplained. The View from the Turret praised the manual while still wanting more worked supply examples. Accessibility meant a fast path to competent action, not the absence of a deeper reference layer. [S25, S30]

The scenario editor in the surviving manual is a later addition. Kotaku still described it as forthcoming in October 2012, and the official DLC page ties it to version 1.04. It cannot be counted as part of the November 2011 original even though current Matrix copy says “Game Editor: Yes.” [S17–S19, S29]

## 28. The AI: less documented internally, more consistently praised in play

Ante Turudić is credited for AI and server programming, but no equivalent of Nieves' *Bulge* architecture article was located. The evidence does not establish whether *Unity* uses utility scoring, search, scripted scenario plans, influence maps, hand-authored objectives, or some mixture. Describing it simply as “heuristic” would go beyond the located record. [S31]

Behavioural evidence is unusually consistent across independent contemporary accounts. Reviewers report that the opponent:

- probes or identifies weak portions of the front;
- uses mobile forces to cut rail and supply;
- counterattacks exposed spearheads;
- withdraws from poor positions;
- shifts formations toward threatened sectors;
- uses air attacks, partisans, and other theatre assets in combinations;
- exploits the same full-information map available to the human.

PC Gamer, GameWatcher, Scientific Gamer, Real and Simulated Wars, and Quarter to Three all describe supply-aware behaviour as central to the challenge, though their superlatives remain subjective. [S24–S28]

The bounded scenario design probably helps: there is no production economy, fog of war, diplomacy, or persistent roster; maps are relatively small; goals, supply sources, force sets, and deadlines are explicit. That is a researcher inference about tractability, supported indirectly by the fixed-problem structure and one reviewer's similar observation—not proof of the AI's implementation. [S26–S27]

The AI's strength can also intensify the puzzle feeling. Because it aggressively punishes a known weak route, the player may learn through repeated defeat that a particular rear hex must be screened. Once that lesson and the scenario's opening are mastered, there is no direct evidence that the opponent adapts to the player's habits. No learning system, external-agent interface, benchmark, scenario win-rate table, or source-level architecture was located.

## 29. What favourable accounts most valued in *Unity of Command*

### 29.1 Supply that changes how the player sees the map

Roads, railways, sources, and rear gaps are not administrative prerequisites to the “real” battle. They are the attack surface. Multiple critics describe learning to strike a logistical vein almost as often as a formation. [S20–S22, S24–S28]

### 29.2 A small rules vocabulary with interacting consequences

Active/suppressed steps, one AP, movement, ZOC, front-line control, supply state, and timed objectives jointly represent readiness, morale-like collapse, flanking, breakthrough, and exploitation. Uzelac's design account confirms that this leverage was deliberate. [S17, S22]

### 29.3 Serial combat with visible preparation and payoff

The player can forecast each attack, soften a defender, watch active strength fall, remove its ZOC, and commit the preserved spearhead through the opening. Combined arms is expressed as sequence and role rather than one large modifier pile. [S17, S22, S26]

### 29.4 Short scenarios with no off-map chores

For reviewers with limited time, a thirty-to-sixty-minute operation provided a complete arc without requiring days of production management. GameWatcher called it a game rather than a commitment; Real and Simulated Wars placed it between superficial “light” games and life-consuming simulations. [S25, S27]

### 29.5 An opponent that attacks the system, not only objectives

The AI's reported willingness to cut supply and exploit flanks made the central rule reciprocal. The human was not merely solving a static defence while the computer rushed score hexes. [S24–S28]

### 29.6 Clear information without deterministic resolution

Supply reach, combat shifts, expected losses, movement, objectives, and the changing front are visible, while bounded combat randomness prevents every forecast from becoming a guarantee. [S17, S21, S25–S27]

### 29.7 Historical doctrine learned through action

The intended lesson is not an encyclopaedia of equipment statistics. Players discover that a frontal attack stalls, a railway matters, a pocket must be sealed, armour must be preserved for exploitation, and delay can lose a geographically successful operation. [S21–S22]

## 30. Principal frictions and limits in *Unity of Command*

- **Scenario-as-puzzle pressure.** Fixed setups, compulsory objectives, exact deadlines, and severe AI punishment can make failure feel like rejection of all but a narrow solution. [S22, S26, S29, S32]
- **Randomness at the bottleneck.** Forecasts can be accurate in aggregate while an overrun or suppression roll at the one essential breach determines a small scenario. Repeating an unchanged plan until the necessary result appears is the adverse extreme. [S17, S26]
- **No literal combined attack.** Serial ablation creates sequencing depth, but players expecting several adjacent formations to cooperate in one assault may find the one-on-one restriction artificial. [S17, S27]
- **Rigid objective victory.** Destroying the enemy or controlling most of the battlefield cannot compensate for one late uncaptured target. [S17, S27]
- **Abrupt campaign failure.** One lost scenario ends the whole campaign, while previous battlefield losses otherwise do not persist. Consequence is high at the result level and low at the force-story level. [S17]
- **Bare continuity.** Prestige alone carries forward; no named core formation, attachment history, casualty recovery, or map state survives. [S17, S23–S24, S27]
- **Supply collapse can feel too quick.** The staged system is slower than *Bulge*'s immediate immobilisation but still strips attack after the second failed turn and all readiness after the third. [S17, S29]
- **No undo for an accidental move.** Input error can consume a scarce formation action in a tightly timed scenario. [S25]
- **Dense symbols beneath the friendly surface.** Specialist order, towing, entrenchment, retreat, reinforcement dilution, and weather interactions are not all obvious from the first tutorial. [S17, S25, S30]
- **Limited base content and replay dispute.** Some critics found the compact campaign satisfying; Scientific Gamer found little reason to replay a solved scenario and poor value at the original price. [S24–S27]
- **No documented adaptive opponent.** Strong observed play is not evidence of learning, personality, or an API-ready planning layer. [S31]

The central disagreement is again structural. A fixed, transparent, tightly timed scenario can feel like a clean operational laboratory or an answer-constrained puzzle. Better AI can sharpen either experience.

## 31. Sustained engagement and afterlife of *Unity of Command*

The original received strong specialist and mainstream critical attention: PC Gamer scored it 86/100, GameWatcher 8/10, and several contemporary enthusiast reviews called it unusually accessible, demanding, or elegant. Three Moves Ahead devoted a discussion to whether its success and apparent puzzle form still qualified as wargaming. These are reception signals, not usage measures. [S24–S30]

The design expanded through *Red Turn* and *Black Turn*, later platform ports, a free editor/update line, and eventually a 2019 sequel. Those continuations are outside the mechanical dossier but show that the original supported a commercial and design lineage. The sequel diaries' effort to deepen campaign continuity and rebuild supply also shows that 2x2 saw both systems as defining and improvable. [S18–S19, S23, S31–S32]

The base game remained purchasable on Steam on the research date for Windows, macOS, and Linux, nominally at US$9.99. Its indexed English snapshot was 78% positive among 806 reviews, with “Puzzle” among user-defined tags. That is durable visibility and a mixed-positive long tail, not a launch score or direct retention measure. Current compatibility, review counts, and percentages can change. [S32]

The strongest qualitative return-play evidence is paradoxical. Reviewers describe the AI's defeats as compelling and the short scenarios as easy to retry, while adverse accounts describe repeated retries driven by a single needed combat result and little motivation after a solution is found. The same restart affordance can support experimentation, mastery, frustration, or save/reload fishing. No telemetry resolves the proportions. [S24–S30]

# Part III — Controlled comparison within the pair

## 32. Two different ways to compress operational command

| Dimension | *Battle of the Bulge* | *Unity of Command* |
| --- | --- | --- |
| Atomic player commitment | Every ready formation in one origin area | One formation's move/attack, repeated across a whole-side phase |
| Turn relationship | Alternating impulses | IGOUGO whole-side phases |
| Tempo uncertainty | Random clock advance after every impulse/pass | Fixed turn count; objective value and victory tier decline with time |
| Local occupancy | Up to three formations per side in an area | One formation per hex; up to seven regular steps plus one specialist inside it |
| Combat | Area-wide simultaneous fire; automatic loss allocation | One attacker versus one defender; sequential attacks accumulate loss/suppression |
| Breakthrough | Surviving armour advances after complete clearance | ZOC disappears as defender weakens/retreats; overrunning attacker may retain AP at readiness cost |
| Readiness | Ready/activated for the day, plus strength and supply state | Active/suppressed steps, experience, AP/MP, entrenchment, and supply duration |
| Supply geometry | Daily friendly-area trace to map edge | Visible rail-and-range network blocked by front line |
| Supply failure | First failure immobilises; second isolates; continued pocket attrits | First prevents recovery; second removes attack; third suppresses all but does not auto-destroy |
| Historical asymmetry | Date-scripted initiative, surprise, weather, fuel, reinforcement, air power, moving victory thresholds | Scenario-specific forces, initiative, weather, sources, assets, objectives, and branch results |
| Main sequencing question | Which area acts before the day ends or the enemy replies? | Which attacks and moves create/exploit a breach before the scenario clock expires? |
| Solo-opponent evidence | Published utility/archetype architecture; sharply mixed performance reports | Architecture undisclosed; unusually consistent praise for supply-aware behaviour |
| Principal replay support | Human async play, variable impulse/combat results, small-map counterplay | Multiple scenarios/branches, strong AI, retry/mastery, combat variation |
| Principal replay risk | Two fixed scenarios and learnable AI | Fixed-solution feeling, thin campaign persistence, bottleneck RNG |

The table shows why the games feel related without being mechanically redundant. *Bulge* concentrates uncertainty at the **right to continue acting**. *Unity* makes the phase length known but concentrates difficulty in the **order that converts readiness and supply into passage**.

## 33. Activation scarcity versus readiness ablation

In *Bulge*, a strong stack's main internal state is whether its formations are ready today. The player usually commits all ready units in an origin area together, and the opponent may force local ready defenders to spend themselves in combat. The decisive loss may be an unperformed activation rather than a destroyed strength point. [S01, S04]

In *Unity*, a strong formation can be attacked repeatedly because different adjacent attackers spend their own actions in sequence. Its internal active steps fall into suppression, its combat strength and ZOC disappear, and its retreat can open the map before it is destroyed. The decisive change is readiness **within** the counter. [S17, S26–S27]

Both systems therefore let the player “wear down” an obstacle without requiring total annihilation, but they locate wear differently:

- *Bulge* wears down the day's option set and the formation's visible strength;
- *Unity* wears down active readiness, positional influence, and the remaining actions of the attacking sequence.

This is the most useful mechanical clarification of Barry's remembered contrast. It does not imply that one is deeper; it identifies the state each game makes scarce.

## 34. Two logistics models with different dramatic clocks

Both games make a rear-area incursion potentially more valuable than a frontal kill. In neither does the player purchase generic “supply points” and allocate them manually. Supply is spatial connectivity computed by the machine. [S01, S17]

*Bulge* uses a coarse, severe daily check. A route is either traceable or it is not; the first failure removes a whole day's agency. This matches the game's one-area impulses and thirteen-day horizon. A pocket produces immediate paralysis and then isolation. The strategic question is whether a controlled-area chain survives the day boundary. [S01]

*Unity* uses a more articulated network and delayed decay. Rail makes the trunk, terrain/weather consume the outward burst, the front line blocks transmission, and each unsupplied turn lowers the formation another rung. This matches a four-day-turn campaign of penetrations and counterpenetrations. The strategic question is whether the cut can be held long enough—and whether the attacker can afford to wait. [S17, S20]

The models create different repair opportunities. *Bulge* often makes the next daily check a cliff; a formation that failed it cannot help reopen its own route that day. *Unity* lets a newly cut force fight during its first unsupplied turn and then continue moving after losing attack, creating an explicit breakout interval. Neither is generically “the logistics game”; each integrates supply with its particular tempo model.

## 35. Known arc versus fixed problem

Both games reveal much of the future. *Bulge* exposes dated initiative, weather, fuel, replacements, reinforcement, and victory changes. *Unity* exposes scenario objectives, deadlines, weather forecasts, source geography, and much of the combat calculation. Neither depends primarily on fog-of-war surprise. [S01, S04, S17, S20–S22]

The future serves different purposes:

- In *Bulge*, it lets the player prepare for a **phase reversal** inside one continuous battle. The uncertainty is how much can happen before each known date.
- In *Unity*, it lets the player solve a **bounded operation**. The uncertainty is whether a planned sequence survives opposition and combat variation within the deadline.

This helps explain their different replay risks. *Bulge* can produce new local turning points on a very small fixed board, but its broad campaign arc and opening are stable. *Unity* supplies more separate problems, but each can become more solution-like after mastery.

## 36. Human and artificial opposition

*Bulge* was explicitly engineered for rapid human exchange, and its strongest critical advocate ultimately judged two-human play the proper form. Its AI design is unusually transparent: utility-normalised tactical candidates, faction-specific weights, personality archetypes, and interface-level control. Yet the best-documented architecture has the most divided practical verdict. [S04–S08]

*Unity* was also designed for hot-seat/Internet play, but contemporary reputation rests heavily on solo opposition. Its AI was credited to a specialist and repeatedly observed cutting supply and using operational assets, yet its internal model remains undocumented in the located sources. The behavioural record is stronger than the architectural record. [S18, S24–S28, S31]

The comparison cautions against treating “interesting AI design” and “sustained challenge” as synonyms. Personality can make distinct mistakes memorable; a focused, possibly less expressive opponent can feel stronger because it relentlessly attacks the system's decisive variable. Conversely, a supply-aware opponent in fixed scenarios may become predictable once its route priorities are known. The evidence supports these as hypotheses, not conclusions about implementation quality.

Neither original documents a stable external move API, learning opponent, adaptive player model, or agent harness. *Bulge*'s decision architecture and UI-level controller are conceptually inspectable, but no supported plug-in surface is established. *Unity*'s behaviour is impressive, but its reasoning boundary is opaque. Those are important facts for a later AI audit, not reasons to redesign either dossier around the future project.

## 37. Engagement mechanisms and their paired risks

The public evidence suggests several reasons these games could hold attention, each paired with the mechanism that can exhaust it:

| Engagement support | Paired risk |
| --- | --- |
| A complete consequential action can be taken within minutes | Small action grammar may become fully legible quickly |
| Visible operational causality—road, cut, pocket, breach, objective | Fixed geometry can become a rehearsed solution |
| Severe deadlines make every move matter | One input error or unlucky bottleneck can invalidate a session |
| Asymmetric historical roles change priorities | Scripted roles constrain sandbox experimentation |
| Short scenarios/impulses invite “one more try/turn” | Restarting can become repetition or result fishing |
| Strong positional AI punishes complacency | Once its characteristic priorities are learned, surprise may fall sharply |
| Transparent forecasts support deliberate learning | Transparency can expose optimisation puzzles rather than battlefield ambiguity |
| Human multiplayer reopens a fixed map | Matchmaking and opponent availability become external dependencies |

This is not a generic design checklist. It records the attraction/friction dualities visible inside these two objects.

## 38. Recognition, preservation, and what longevity does not prove

*Battle of the Bulge* gained crowdfunding support, two Charles S. Roberts awards, a community strategy guide, platform revisions, a corporate rescue/acquisition, and a physical adaptation. *Unity of Command* gained strong reviews, DLC, editor/mod support, Mac/Linux/Steam distribution, a sequel, and continued sale. Both clearly outlived a disposable launch window. [S02–S04, S10–S16, S18–S19, S23–S32]

The forms of survival differ. *Bulge* preserved a particularly small system through ports and a board-game transformation. *Unity* grew outward into scenarios, modding, DLC, and a more elaborate sequel. Neither record says how often the **original** was replayed by a representative purchaser. Awards, reviews, forum essays, current store availability, ports, and sequels measure different things.

No direct evidence was found for:

- median or distribution of play hours outside mutable store anecdotes;
- scenario completion or campaign abandonment rates;
- original-side win rates against humans or AI;
- frequency of restarts or save/reload play;
- current active multiplayer populations;
- how many players returned after months or years;
- which specific mechanic caused retained players to return.

Barry's disclosure that both games kept him hooked is therefore valuable later personal evidence, but it cannot be converted into a public retention statistic.

## 39. Evidence limits and unresolved questions

1. **Original *Bulge* manual:** the accessible comprehensive manual is from the 2015 adaptation. Launch reviews and the 2013 Player's Guide corroborate the core, but line-by-line wording and every 2012 edge case were not recovered.
2. **Original *Bulge* AI inventory:** the programmer says eight agents; reviewers describe four broad side-personality choices and eight side/scenario combinations. The exact object model and UI naming remain unresolved.
3. ***Bulge* AI performance:** early praise and sustained adverse evidence differ substantially; no controlled scenario/side/skill win-rate data exist.
4. ***Unity* scenario count:** official pages say seventeen; contemporary reviewers and later lists use seventeen, eighteen, or “17+.” Tutorial, bonus, PvP, and patch-era counting likely explain some difference, but launch-day inventory was not independently reconstructed.
5. ***Unity* AI architecture:** credit and observed behaviour are known; algorithm, search, scripting, state evaluation, and difficulty controls are not.
6. **Version leakage:** the mature *Unity* manual contains visibly labelled v1.1/DLC material and the later editor. Those were excluded where identifiable, but a complete version-1.00 manual was not located.
7. **Balance:** neither game's scenario/side balance can be inferred from reviews using different opponents and experience levels.
8. **Randomness:** vivid examples establish both memorable variation and bottleneck frustration, not their frequency across all play.
9. **Current access:** Steam products remain listed, but original iOS acquisition, Game Center/PBEM function, and every modern OS configuration were not tested.
10. **Retention:** all public longevity signals are selected. No representative cohort, play telemetry, or causal retention study was located.

## 40. Research finding, without a future-game conclusion

The pair supports a precise descriptive finding.

*Battle of the Bulge* turns a small area map into a contest over **tempo rights**. One locality acts at a time; every ready formation there is committed; time advances unpredictably; tomorrow's initiative is known; and dated thresholds turn defence into counterattack. Supply, retreat, and combat matter partly because they remove future activations. Its low input complexity conceals a scheduling game.

*Unity of Command* turns a small hex operation into a contest over **readiness pathways**. One formation occupies a hex; one ordinary action powers it; active steps can be suppressed; sequential attacks dismantle strength and ZOC; rail supply decays in visible stages; and compulsory timed objectives make the opening useful only if it is exploited. Its low rules count conceals a sequencing game.

Both demonstrate that operational depth can come from the interaction of a few severe systems rather than a large catalogue of unit exceptions. Both also demonstrate the corresponding danger: when the battlefield is fixed and the consequences are transparent, severity can become brittleness—AI exploits, solution-like openings, restart pressure, or a single clock/combat result that invalidates a plan.

That is the end of the case finding. Whether Barry's sustained engagement came from the same mechanisms praised publicly, from different personal associations, or despite some of the documented frictions belongs in the later cross-game fireside discussion. No feature has been selected, rejected, or translated into a specification for the proposed fantasy wargame.
