# Case 012: *Commander: The Great War*

**Status:** independent dossier complete; Barry's full personal evaluation and corpus-wide synthesis deferred.  
**Primary object:** the original Windows release of *Commander: The Great War* (The Lordz Games Studio / Slitherine and Matrix Games, 12 November 2012), version 1.1.2.  
**Research date:** 23 August 2026.  
**Source ledger:** [`sources.md`](sources.md).  
**Pre-research user disclosures:** quarantined in [`barry-context.md`](barry-context.md).

## 1. Scope and edition boundary

The object under study is the original 2012 Windows grand-strategy wargame, not the *Commander* series generally, not the later iPad or Mac ports, and not the community's much-expanded Potzblitz modification. Later official patches are indispensable evidence because they expose balance defects and show what the developers chose to change, but they are not silently projected back into version 1.1.2. Later ports and current Steam evidence are used only for mature-system reception, longevity, and preservation. [S01–S03, S07, S14–S15, S18, S23]

This boundary matters. The first official patch arrived on 21 December 2012 and changed AI openings, submarine production, naval balance, and several defects. Versions 1.2 and 1.3 raised the ammunition cost of bomber and airship attacks, enabled fighter interception of strategic attacks against empty cities, changed city recovery, and altered entrenchment. Version 1.4 substantially rebalanced production, naval forces, artillery, bombers, and early fighters. Version 1.6.2 made still larger economic and force changes and explicitly toned down every air unit because this was World War I. A recollection formed over years of play may therefore describe a real mechanism whose numerical expression changed markedly between versions. [S07]

Barry identified beauty, five different campaign start dates, engaging trench warfare, mobile phases, late breakthroughs, alliance viability, and two air-power exploits before this research began. Those disclosures determined questions, not answers. They remain in `barry-context.md`; the dossier tests them against rules, patch archaeology, contemporary reception, and developed-play reports.

One terminology correction is useful at the outset. The game is “tile-based” in the ordinary sense Barry intended, but its tiles are specifically **hexes**: the campaign map is 164 by 76 hexes and the official unit scale is “Army.” A displayed formation occupies a hex rather than joining a literal counter stack. [S01, S03]

## 2. Product identity, origin, and credited authorship

*Commander: The Great War* was developed by The Lordz Games Studio and published by Slitherine and Matrix Games. It launched for Windows on 12 November 2012 at version 1.1.2. The official specification classifies it as an intermediate, army-scale, IGOUGO strategic wargame for one or two players, with an AI opponent and PBEM++ multiplayer. [S01–S03, S07]

The manual credits:

- Tim van der Moer as CEO and executive producer;
- Szymon Gatner as lead programmer;
- Lukas Nijsten as lead designer;
- David Forster with design and AI programming;
- Mariusz Kozik for concept art;
- Damon Fries, Stefan Osadzinski, and Alessandro Ponti for music; and
- Paulo Costa for sound. [S01]

The game belongs to the established *Commander* family, but the development team said it rewrote the engine from scratch, partly to support higher resolutions, widescreen displays, and future platform ports. A pre-release briefing described an aspiration to let tutorials and tooltips support immediate entry without requiring the manual. The released manual is nevertheless seventy-four pages, and later reviewers found that the tutorial did not fully carry the deeper system. [S01, S04, S14]

The publisher advertised more than forty historical and conditional “what-if” events, eighteen unit types at launch, historical commanders with positive and negative effects, research, production, diplomacy, Lua modding, and PBEM++. Current product copy sometimes says sixteen unit types while the launch announcement says eighteen; later patches added or renamed naval and garrison classes, so a timeless exact count is unsafe. The rules and design relationships matter more here than the marketing count. [S02–S03, S07]

## 3. Five campaigns are five historical state snapshots

The original game calls its playable starts **campaigns**, not short stand-alone scenarios:

1. **1914 — The Great War**
2. **1915 — Ypres and Artois**
3. **1916 — The Battle of Verdun**
4. **1917 — The Nivelle Offensive**
5. **1918 — The Kaiserschlacht** [S01–S03]

All five use the same map and core systems. Their value comes from changing the complete strategic state: front geometry, countries at war, armies, technology, resources, entrenchment, and time remaining. In the launch rules every campaign runs until all enemies are defeated or 31 December 1918, so the successive starts are progressively shorter. The 1914 campaign was reported as 118 turns. A later patch extended the 1918 campaign to sixty turns and beyond the historical end date, another reason not to merge mature content into the launch object. [S01, S07, S10, S15]

This structure provides two distinct forms of replay:

- **historical entry choice:** begin before mobility collapses, inside mature trench war, amid political exhaustion, or at the last German offensive;
- **commitment choice:** play the long transformation of the whole war or a shorter late-war crisis with developed forces already in being.

It does not provide five different maps, theatres, or rule engines. Contemporary comparison treated this as useful but thinner than a scenario library containing genuinely separate conflicts and maps. The later starts remove long setup and research arcs, but they also reduce the player's authorship of how those armies and technologies came to exist. [S11]

The temporal scale is not stated clearly in the launch manual. The 118-turn campaign and a detailed iPad review both indicate roughly fortnightly full turns; a later HistoryNet review calls them weekly. Because the primary rules are silent and the secondary descriptions conflict, “approximately two-week strategic turns” is the safest reconstruction, not an exact manual fact. [S01, S10, S14, S16]

## 4. Player role and action grammar

The player commands an entire alliance rather than one nation. On the Entente side that can mean Serbia, France, Britain, Russia, and later partners; on the Central Powers side it includes Germany, Austria-Hungary, and the Ottoman Empire. The player allocates national production and manpower, conducts research, builds and repairs formations, moves armies and fleets, manages ammunition and transport capacity, and directs operations across every active front. [S01]

The turn relationship is conventional whole-side IGOUGO. A land unit may move and then attack; attacking consumes all remaining movement, so it cannot attack and then make an ordinary move. If an attack destroys or forces back the defender, the attacker may advance into the cleared hex independently of remaining movement points, provided another unit has not since moved or attacked. Ranged artillery and air units choose between moving and attacking in a turn. Rail capacity permits a limited number of strategic redeployments between connected city and fortress networks. [S01]

The basic verbs are therefore familiar:

- move or rail;
- attack or bombard;
- advance after a cleared hex;
- swap adjacent friendly formations;
- repair, upgrade, or disband;
- build units and infrastructure;
- assign commanders;
- fund, focus, and later apply research;
- manage ammunition, rail, and sea-transport capacity; and
- declare war or watch neutral alignment develop. [S01]

Depth is not produced by a large tactical command vocabulary. It comes from the fact that almost every operation spends or exposes several interlocking states: strength, efficiency, entrenchment, supply, ammunition, manpower, production, time, and national morale.

## 5. The front is a maintained system, not a row of inert blockers

Entrenchment is automatic. When a land formation remains idle, the **hex** gains an entrenchment level up to the nation's technological maximum. Its effective protection is that level multiplied by the terrain's entrenchment bonus. In the launch rules movement, attack, or being attacked interrupts the process; later patches stopped an unsuccessful enemy attack from cancelling further entrenchment. [S01, S07]

The crucial choice is that fortification belongs to place rather than formation:

- a fresh infantry unit swapped into a fortified hex inherits its protection;
- artillery or an air unit can temporarily occupy the second line and later exchange with a reserve without erasing prepared works;
- an empty fortified hex loses only one level per turn; and
- capture reduces a high level by one rather than removing all preparation. [S01]

The map visualises four qualitative layers—trenches, barbed wire, bunkers and pillboxes, then reinforced fortification—but terrain still changes their actual value. Fortification is therefore both a numerical defence and visible history written onto the map. [S01]

This is the first part of the game's answer to trench warfare. A stable line is not simply a sequence of high defence modifiers. It is a renewable positional asset that encourages reserves, swapping, quiet-sector recovery, and deliberate selection of the one section where accumulated preparation will be spent.

The same structure also creates rigidity. A line left alone becomes progressively harder to disturb. An attack not only risks strength but interrupts the attacker's efficiency recovery and may prevent the defender's next entrenchment increment in the original rules. The game makes “doing nothing” locally productive, but because the player manages an alliance across several fronts, local stillness does not imply a globally empty turn.

## 6. Efficiency makes suppression, fatigue, and morale tactically legible

Every formation has up to ten strength points and an **efficiency** value representing fatigue, morale, cohesion, and fighting capability. Quality caps maximum efficiency; depleted national manpower lowers the quality of new or repaired forces. Movement, combat, hostile territory, winter, and adverse results reduce efficiency. A supplied idle unit recovers five efficiency at full supply or three at half supply; an unsupplied unit recovers none. Low-efficiency formations are much more vulnerable even when their nominal strength remains high. [S01]

Ranged units often have **shock**, which directly reduces efficiency. The launch manual expressly teaches that early fighters may cause little strength damage but are useful for lowering efficiency before a ground attack. Artillery can reduce strength without suffering reciprocal ground losses. Infantry then attacks a defender whose readiness and entrenchment have been partly negated; cavalry can punish a forced retreat; armour or another mobile formation can exploit the opened space. [S01, S08–S09]

This separates two questions that simpler hit-point combat often collapses:

- How many soldiers and weapons remain?
- How capable is this formation of resisting the next blow **now**?

The separation makes serial attacks meaningful. An opening fighter or artillery strike may appear to “do nothing” in strength terms yet alter the next combat. A first infantry attack may be costly but leave the defender exhausted enough for the second to succeed. The player is sequencing a local offensive rather than merely assembling one large odds ratio.

The model also creates a risk. Because efficiency has immediate combat value, an historically modest air-reconnaissance effect can become a compulsory combat debuff. When the most efficient attack sequence routinely begins with fighters irrespective of air conditions or period, the abstraction stops reading as reconnaissance and begins reading as a universal spell. That issue is examined separately below.

## 7. Ammunition turns an offensive into a project

Production points represent currency and raw materials. Manpower is finite. Ammunition is a separate national stockpile consumed by artillery and some air or naval bombardments. Rail and maritime transport have their own per-turn capacities. National morale measures willingness to remain in the war. [S01]

An artillery formation is described as essential for breaking defences, able to weaken the target without ground retaliation, but expensive in ammunition and unable to move and fire in the same turn. The developed rules capped national ammunition stocks at fifty, so an army could save for a major blow but not accumulate without limit. Ammunition factories, like new formations and research laboratories, compete for production. [S01, S04, S08]

A serious attack therefore has a recognisable preparation cycle:

1. select a front whose geography, objectives, and enemy condition justify the cost;
2. rail and rotate reserves without opening another front;
3. move artillery and air assets into range, which costs them a firing opportunity that turn;
4. accumulate ammunition and production while paying army and laboratory upkeep;
5. let assault formations recover efficiency;
6. use ranged shock and bombardment to reduce strength, efficiency, terrain, and entrenchment advantages;
7. send ground formations in sequence;
8. advance into a cleared hex and, if possible, compromise supply or widen the breach; and
9. decide whether the national cost permits continuation before the defender recovers. [S01, S04, S08–S09, S14, S16–S17]

The offensive is engaging partly because the attack itself cashes in several turns of visible preparation. Pocket Gamer described the resulting experience sharply: planning and rotation could be laborious, but committing the offensive made success exhilarating and failure miserable. This is individual critical judgement, not a measured universal response, but it matches the system's resource structure. [S14]

## 8. Stalemate is punctuated by real windows of mobility

The game does not make every year equally static. Its arc emerges from setup, entrenchment, space, technology, and force mix.

### 1914: movement before the wall hardens

The opening campaign begins with unfortified or lightly fortified fronts, gaps, neutral entries still pending, and armies whose positions have not yet congealed. Capturing cities, exploiting retreat, and using rail redeployment can create rapid early shifts. The Eastern Front and Balkans also contain more room than the dense west, while the terrain-dependent entrenchment system makes prepared positions less equally strong across every theatre. [S01, S13]

### Mid-war: attrition with choices elsewhere

As contiguous fronts settle and entrenchment research matures, frontal assaults become expensive. Strategic play migrates to reserve rotation, alternative theatres, convoy war, national economy, technology, diplomatic timing, and the question of which quiet front can supply forces to the active one. Pocket Gamer argued that the game succeeds less by making the trench itself exciting than by making the logistics and national preparation around it consequential. [S01, S14]

### Late war: accumulated offensive tools

Infantry assault values increasingly negate entrenchment. Artillery's bombard value ignores terrain defence as well as reducing entrenchment. Tanks are represented by armour formations combining infantry and machines: initially expensive and only slightly better than infantry, later developed into effective offensive weapons intended to break lines, cut supply, and encircle armies. Improved artillery, air support, commanders, and experienced reserves expand the means for a prepared breach. [S01, S05, S08]

The 1918 campaign is explicitly framed as **Kaiserschlacht**. The actual game does **not** expose a dedicated stormtrooper unit, a separate infiltration phase, or a detailed combined-arms command system in the launch manual. The remembered stormtrooper effect is an abstraction produced by the late setup, improved infantry Assault, shock/bombardment sequencing, armour, and advance mechanics. That distinction matters: the game can evoke late-war infiltration without simulating its organisation literally. [S01–S03, S08]

### The bounded breakthrough

Once a defender retreats or is destroyed, one attacker can advance into the vacated hex regardless of ordinary movement already spent. Fast armoured cars can scout and cut supply; cavalry receives extra value against retreating enemies; developed armour can create and exploit rupture. Yet a formation cannot freely cascade through several combats as in some operational games. The breakthrough is a local opening whose strategic value depends on reserves, rail movement, adjacent occupancy, and supply. [S01]

This produces a credible rhythm: the line is strong because it has been prepared and maintained, not because attacks are forbidden; a breach is valuable because it took time and national resources to create, not because a special script simply declares “mobile phase.”

## 9. Attrition reaches the nation, not only the counter

Manpower is more than a second purchase currency. As national reserves fall, production-point income declines; below specified thresholds, unit quality also drops. Repairs and new forces therefore consume a resource whose depletion makes the remaining army and economy worse. [S01]

Upkeep applies to formations and research laboratories. In the launch manual each nation receives ten points of free upkeep, after which an oversized force can drive the budget into deficit. Deficit lowers national morale, and a nation that cannot afford its forces may need to disband formations. Version 1.6.2 later abolished the free-upkeep allowance and rebalanced national production around that change, showing how central—and version-sensitive—the army-size economy was. [S01, S07]

National morale also changes through casualties, city loss and capture, capital-ship losses, bombardment, and deficit. At zero, a country offers surrender. The alliance can therefore win by causing political-economic collapse rather than occupying every hex or destroying every formation. A hard-won offensive may be valuable for the city, production damage, and morale shock even if the line moves only one or two hexes. [S01]

This is a strong answer to the “meat grinder” problem. Casualties are not replenished from an abstract infinite pool. Repeated offensives degrade the long-war capacity of the nation that launches them, while passive defence cannot by itself secure every alliance-specific victory condition. Attrition becomes a strategic wager rather than visual flavour.

It can also create positive feedback. A side losing cities loses production and morale while paying to repair damaged formations; falling manpower further suppresses production and unit quality. The structure can convert a modest territorial loss into a worsening capacity gap. Surrender thresholds prevent indefinite cleanup, but they do not remove the possibility of a late campaign becoming strategically decided before the formal endpoint.

## 10. Supply and the geometry behind the line

Land formations trace supply through alliance-controlled land to a source. A capital supplies fully up to thirty hexes; ordinary cities and qualifying fortresses provide half supply; adjacent surface fleets can provide full supply. Allied formations may use one another's sources, so British troops in France can depend on Paris. Air and naval formations are always in full supply. [S01]

The three land states are severe and visible:

| State | Movement | Repair | Efficiency recovery | Additional consequence |
| --- | --- | --- | --- | --- |
| Full supply | normal | 3 strength | 5 | best source state |
| Half supply | −30% movement | 2 strength | 3 | reduced operating tempo |
| No supply | 1 hex | none | none | loses 1 strength each turn |

An enemy does not need to erase a front-line army immediately. A fast unit through a gap can cut the controlled route, convert full supply into half or none, stop recovery, and make subsequent attacks progressively easier. The frontline and the city network behind it are therefore one operational system. [S01]

The model remains deliberately forgiving in some respects. A friendly city can sustain half supply even when capital connection is broken; allied sources cross national boundaries; and air/naval units do not participate in the same logistics vulnerability. Supply is a positional imperative, not a detailed rail-tonnage simulation.

## 11. Convoys connect the naval and continental wars

Convoys spawn at variable intervals and carry production—and for Britain and France, manpower—to home ports. German iron-ore convoys also support Central Powers production. Submarine attacks can weaken the Entente economy, but merchant losses shift United States alignment toward intervention. [S01]

This creates a clear strategic dilemma for Germany: exploit the strongest route to British and French economic damage now, or reduce the political acceleration toward a larger later enemy. The manual states the dilemma directly. It makes the naval war relevant to continental manpower and production without requiring individual merchant-route administration. [S01, S04]

The implementation drew criticism. Developed players reported that optimal convoy interception, fleet composition, and the balance between naval and land spending could become narrow; one community reviewer found it rational to buy mainly infantry, artillery, and limited air cover, leaving much of the naval roster unused. Patches repeatedly changed fleet sizes, ship costs, ports, submarines, convoys, and naval AI. This is evidence that the linkage was strategically important but not stably balanced. [S07, S10, S19]

## 12. Research changes relationships rather than merely adding numbers

Each nation researches five categories: ground, artillery, naval, air, and vehicle. Laboratories accelerate all technologies in their category but cost production upkeep. One technology per category can be focused for faster progress at the cost of slowing the rest; limited focus points and a three-month replenishment cycle prevent constant frictionless switching. Completed technologies still require paid upgrades to existing formations. [S01]

The system produces several layers of timing:

- spend now on a formation or fund a laboratory whose benefit comes later;
- focus the immediate breakthrough tool or accept broader balanced development;
- field a new design immediately or delay while existing units are upgraded;
- concentrate on one nation's special need even though the player commands a coalition; and
- invest in offensive tools while the opponent invests in entrenchment, gas masks, air defence, or naval counters. [S01, S04–S05]

Research is especially important to the war's changing texture. The official pre-release framing explicitly describes aircraft developing from observation tools to attack weapons, artillery becoming more accurate and powerful, and armour turning the war mobile again. The mechanical arc is partly historical and partly player-authored: the broad progression is constrained, but investment order and battlefield application vary. [S03, S05]

The possible weakness is that a known technology tree can become an optimisation schedule. Once experienced players identify the highest-leverage Assault, artillery, air, or economy breakpoints, apparent strategic breadth may contract. The source corpus contains strong strategy prescriptions but no telemetry on how diverse successful research paths actually were.

## 13. Combined arms is expressed as attack order

The unit roster uses a small set of legible functional roles:

- **garrisons:** cheap holders for cities and quiet positions;
- **infantry:** the universal line and assault formation, especially strong in entrenchments;
- **cavalry:** weak against prepared positions but dangerous against forced retreats;
- **armoured cars:** fast scouts, harassers, and supply cutters that retreat readily;
- **armour:** expensive early infantry-and-tank formations that mature into breakthrough tools;
- **artillery:** ammunition-intensive, non-retaliatory softening essential against fortified lines;
- **railroad guns:** weaker but longer-ranged strategic artillery bound to rail;
- **fighters:** reconnaissance, interception, escort, and ground-efficiency reduction;
- **bombers and airships:** long-range strategic bombardment, with later bombers gaining ground effect;
- **surface fleets and submarines:** sea control, bombardment, convoy protection, and economic interdiction. [S01]

Because only one ordinary formation occupies a hex and one ground attack is resolved at a time, combined arms is primarily **serial**. A developed player guide recommends fighters, airships, artillery, bombers, infantry, then garrisons. The exact order is version- and situation-dependent, but the broader grammar is stable: reconnaissance/shock first, bombardment next, strong ground assault after the target's efficiency and entrenchment are reduced, then cheaper or mobile units to finish and exploit. [S01, S09, S19]

This is accessible because each contribution can be observed between attacks. It also exposes the system to deterministic recipes. If one order dominates regardless of weather, target, theatre, or period, “combined arms” becomes a repeated input macro rather than a planning problem.

## 14. Air power: deliberate abstraction, dominant tactic, and acknowledged rebalance

Barry's fighter and airship recollections are not vague anomalies. The evidence supports a three-part diagnosis.

### 14.1 The mechanisms were intentional

The launch manual says:

- early fighters cause little direct damage but reduce enemy efficiency before ground attacks;
- fighters provide reconnaissance and air protection while weakening ground efficiency;
- bombers and airships perform long-range strategic bombardment;
- strategic attack damages city production; and
- air units are always in full supply. [S01]

An officially pinned developed-play guide tells players to use fighters first because even a no-strength-loss attack can remove efficiency, and it places airships early in the recommended serial attack order. The AI reportedly uses the same fighter-first behaviour. [S09]

The game is therefore not accidentally allowing aircraft to interact with armies and industry. It intentionally compresses reconnaissance, air superiority, disruption, morale, and bombardment into immediately useful operational attacks.

### 14.2 The compression can exceed its historical referent

Efficiency governs vulnerability, so repeated fighter attacks can make a full-strength army much easier for ground formations to destroy. A fighter's nominal lack of hit-point damage does not make it strategically weak. Its range, permanent map presence, full-supply exemption, and repeatable shock can turn early aviation into a reliable front-line debuff far more concentrated and controllable than 1914–15 air support.

Airships combine long range and strategic attack. If they can repeatedly damage high-value cities faster or more cheaply than those cities recover, they do not merely model raids and diversion of air defence; they can become an industrial siege weapon. Later developed-play reports explicitly call zeppelins grossly overpowered and bombers extraordinarily strong, although those are self-selected, version-mixed player judgements rather than quantified win-rate evidence. [S19–S20]

### 14.3 Official patch history corroborates a real balance problem

The developers repeatedly modified this space:

- v1.2/v1.3: higher ammunition cost for bomber and airship attacks; fighters now intercept strategic attacks against empty cities; cities recover faster;
- v1.4: bomber effectiveness reduced and early fighters reframed as little more than reconnaissance;
- v1.6.2: all air units toned down, with the explicit explanation that “this is World War One”; ground formations gained broader anti-air research benefits. [S07]

This does not prove every fighter or airship strategy was unbeatable in every version. It does establish that the launch abstraction produced enough economic and combat distortion to require multiple official interventions. Barry's memory of cheese is therefore consistent with both the intended rules and their revision history.

The failure is analytically useful. A mechanism can have the correct **semantic label**—reconnaissance, disruption, strategic bombing—while its reliability, range, repeatability, counterplay, or economic exchange rate produces an ahistorical dominant action. Historical plausibility depends on the whole relationship, not the unit name.

## 15. Alliance viability and the long-war balance

Both alliances are fully playable in all five campaigns. Each has its own star-scored victory conditions; the side with more stars at the end wins, equal stars draw, and defeating every enemy before the deadline produces a supreme victory. The victory test does not require the same geography or political trajectory from both coalitions. [S01]

The strategic arcs are asymmetric even though the core verbs are shared:

- The **Central Powers** begin with opportunities for concentrated early movement, interior rail transfer, and defeating individual enemies before the coalition's full weight develops. Germany must decide how much to commit west, east, naval, and economic warfare while Austria-Hungary and the Ottomans create distinct crises.
- The **Entente** can absorb early pressure across more geography, draw on maritime convoys and additional manpower, exploit naval superiority, and benefit from later entrants and the Central Powers' manpower/upkeep strain if the war continues.
- Later campaign starts change which side is pressing, which technologies exist, and how much time remains for attrition or recovery. The 1918 start begins with the German Kaiserschlacht rather than asking every player to survive four years before reaching that contingency. [S01–S05, S13, S21]

Early player reports repeatedly described a campaign poised between local gain and collapse and documented defeats caused by overcommitting one front. One experienced forum participant thought an orthodox historical narrative could remain balanced into 1918 and said the continental land-war dynamic had been captured. Another multiplayer participant argued that the Central Powers had an early blitz window but the balance swung too heavily to the Entente by late 1915. These are conflicting community observations, not proof of symmetrical win rates. [S13, S21]

The strongest supported conclusion is therefore narrower than “perfectly balanced”: the system gives both coalitions intelligible paths to victory and creates genuine timing pressure around an early Central Powers advantage versus Entente long-war capacity. No representative side-by-side win-rate dataset was located. Official patches materially changed resources, manpower, fleets, entry timing, unit costs, and AI behaviour, so balance was moving as well as contested. [S07, S21]

## 16. Diplomacy and events: strategic context with limited direct agency

Neutral nations have an alignment that drifts toward an alliance and can be altered by events, declarations of war, unrestricted submarine warfare, gas use, or territorial conditions. More than forty fixed or conditional events were advertised. Entry timing can vary, but the player does not conduct a rich negotiation game; the central direct diplomatic verb is declaration of war. [S01–S04]

This keeps the political map active without adding a separate diplomatic minigame. It also limits replay variance. A contemporary comparison criticised *Commander* for fewer historical events and weaker diplomacy than *Strategic Command: World War I*, while a community review called diplomacy one of the thin systems. [S10–S11]

The event model does useful work when it converts military action into political consequence—convoy losses drawing the United States closer, gas alienating neutrals, capitals or fleets shifting morale. It is less convincing when a player seeking alternate history wants sustained political bargaining or when a known trigger can be gamed with perfect foresight.

## 17. Interface, information, and visual appeal

The map can be shown with illustrated sprites or abstract counters. Terrain, rivers, cities, rails, national borders, entrenchment layers, fog of war, supply markers, unit strength, and a minimap remain visible on the main strategic surface. Holding a key hides formations to reveal terrain, entrenchment, and city production. The game offers two mouse-control schemes, tooltips, automatic turn-start saves, management panels, and a combat prognosis showing expected strength and efficiency losses and active modifiers before commitment. [S01]

Contemporary sources consistently praised the graphics relative to the wargame field. Reviewers described the board as beautifully rendered or eye-catching, and later players still singled out unit art, city and commander portraits, events, sound, and music. The choice between sprites and counters lets readability and atmosphere coexist rather than forcing one visual language. [S11–S12, S18–S19]

Several interface choices reduce repetitive administration:

- a repair mode supports repeated reinforcement actions;
- end-of-turn reports summarise events;
- swapping supports reserve rotation without awkward vacancies;
- combat forecasts expose both strength and efficiency effects;
- the minimap and zoom levels help traverse a continental board; and
- PBEM++ records and replays the opponent's whole turn. [S01, S11]

The broad map creates unavoidable workload. A full alliance turn may involve several fronts, fleets, production queues, research panels, convoys, commanders, and repairs. The iPad review reported twenty minutes or more planning a player's turn and about five minutes for the AI, finding the game poorly suited to bite-sized mobile play. A later patch added double-click confirmation after reports of accidental moves and also fixed very long or infinite AI loops. [S07, S14]

Teaching evidence is mixed. The manual is structured and the basic verbs are familiar, but the pre-release promise that tooltips would remove the need to read it was not achieved for every audience. The iPad port was criticised for a weak popup tutorial and absent in-app rules, while the official FAQ exists partly because the manual gives qualitative rather than quantified answers for important combat relationships. [S04, S08, S14]

## 18. The AI opponent

David Forster is credited with design and AI programming. During development, a Lordz programmer stated that the new engine contained a brand-new AI intended to react to enemy actions rather than execute global preset conditions such as switching fronts after a capital falls. No public technical architecture, search depth, evaluation function, or exact heuristic set was located. The appropriate description is therefore **reactive design intent**, not a claimed algorithm. [S01, S06]

Difficulty does not make the AI intrinsically more perceptive. The launch manual says Balanced gives no advantage, Handicapped gives the AI fewer resources, and Privileged gives it more. The easiest setting initially contained a bug that awarded a bonus instead of a penalty. [S01, S07]

Reported strengths include:

- exploiting gaps and overextension;
- pressing several fronts so the player cannot optimise one in isolation;
- opening the Schlieffen Plan with speed;
- concentrating attacks and using fighters before ground assaults;
- rotating or replacing weakened line units; and
- sometimes exhausting a major push rather than attacking forever. [S09–S10, S12–S13]

Reported weaknesses include:

- predictable opening plans after repeated play;
- inadequate redistribution when Italy enters;
- leaving sectors or support units exposed;
- weak naval construction and convoy behaviour in some versions;
- overconcentration on a theatre while another opens;
- long, occasionally infinite calculation loops and crashes; and
- a tendency to feel challenging at first but dull after its tactical patterns are learned. [S07, S14, S18–S19, S23]

Official patches are unusually revealing. Version 1.1.4 improved Austria-Hungary's opening, made Germany push harder in France, increased Central Powers submarine building, added an Entente Gallipoli attempt in 1915, and improved final-nation defence. Later versions repeatedly mention AI crash, speed, long-loop, and naval-AI fixes. AI performance was not a static launch attribute. [S07]

The map's explicit states plausibly help a heuristic opponent: one formation per hex, visible supply connectivity, fixed campaign objectives, limited movement/attack grammar, explicit strength and efficiency, and no free-form negotiation. That is a tractability inference, not an architecture claim. The hard problem is global allocation across several fronts, production queues, research horizons, and political timings—precisely where player reports find the most brittle behaviour.

## 19. Why it could retain players

No representative retention telemetry was located, so sustained engagement must be inferred cautiously from several weaker but convergent forms of evidence.

### Immediate “one more turn” reports

Launch-week forum posts describe sessions expanding from a couple of intended turns to six, campaigns keeping players awake until early morning, and the first single-player wargame in years to recreate a *Civilization*-like compulsion. These reports are self-selected enthusiasm and sometimes come from forum regulars, but the specificity of the sessions is stronger evidence than generic praise. [S13]

### Long-form campaign absorption

Rock Paper Shotgun's Tim Stone wrote halfway through the first 118-turn campaign that he could not recall enjoying a grand-strategic WWI game more and praised its scale, pace, and workload. At the iPad launch, one player reported seven continuous hours while reaching only turn fifteen. The later Pocket Gamer review regarded the time demand as both the source of scope and a barrier. [S10, S14–S15]

### Recognition and continuing player labour

GrogHeads readers selected it as their 2012 Digital Strategic Wargame of the Year. The game received several years of substantial official patches, moved to Mac, Steam, and iPad, retained mostly positive current Steam reviews, and generated detailed guides and multiplayer discussion. [S07, S09, S14, S18, S22]

### Community afterlife

The Potzblitz “Director's Cut” mod accumulated thousands of forum replies and continued receiving releases and fixes into 2025–26, long after the base game's last official patch in 2015. This is striking evidence that the underlying engine and strategic object inspired continued labour. It is not evidence that vanilla balance, AI, or retention remained strong; the mod changes the object extensively and some of its longevity arises from repairing or expanding limitations. [S18, S23]

### Why the turn boundary pulls

The game's likely retention loop is structurally clear:

1. the enemy replay reveals a new crisis or opportunity;
2. repairs and reserve rotation stabilise one front;
3. production or research is one turn from completion;
4. a prepared attack is resolved but its advance exposes a further possibility;
5. a neutral entry, convoy, winter, or surrender shifts the wider plan; and
6. the new strategic state is visible immediately enough to invite one more full-side turn.

The campaign always contains multiple clocks: entrenchment growing, efficiency recovering, ammunition accumulating, units building, research advancing, neutral alignment moving, manpower declining, and the calendar approaching 1918. A player rarely ends a turn without at least one unresolved near-term promise.

## 20. Frictions, exploits, and failure modes

The evidence base supports a substantial adverse ledger.

### Air and bombardment dominance

Fighters can become repeatable efficiency-stripping precursors; bombers and zeppelins can dominate ground or industrial damage; air units ignore land supply; and serial attack order can harden into a recipe. Multiple patches corroborate that this was not merely one hostile review. [S01, S07, S09, S19–S20]

### AI theatre allocation and predictability

The AI may punish local gaps yet mishandle the global question of where to deploy an alliance's finite forces. Known openings, Italian entry, Russian spaces, naval strategy, and endgame defence expose different failure modes. Resource bonuses increase pressure without repairing strategic judgement. [S01, S07, S13–S14, S18–S19, S23]

### Economic and roster narrowing

Upkeep, manpower, and production create meaningful scarcity, but they can also reveal dominant build mixes. Community reviewers reported relying mainly on infantry and artillery, with much of the naval or specialist roster unused. Later patches repeatedly rewrote unit costs, build times, free upkeep, national income, manpower, fleet strength, and convoy rules. [S07, S10, S19]

### Exploitable disbanding and force conversion

The launch rules returned production and manpower when a unit was disbanded. Patches repeatedly changed refund conditions and values. Developed players also identified distant garrison deletion and other force conversions as ways to release upkeep or production, sometimes warping the intended national order of battle. [S01, S07, S19]

### Shallow diplomacy and generic identity

The player controls coalitions but has limited diplomatic agency, and many formations are generic army types rather than distinctive historical orders of battle. Events and commander portraits provide history, but the system is more evocative than encyclopaedic. [S10–S11]

### Naval imbalance

Several reviewers found the naval game weaker or economically crowded out. Patch notes repeatedly rebalanced ship defence, ports, fleet size, battleship costs, submarines, convoy rules, shore bombardment, and naval AI. The amount of intervention suggests the original sea war did not reach the stability of the land system. [S07, S10, S19]

### Global workload

The same multi-front scope that creates meaningful allocation can create long turns, repair/reinforcement repetition, map traversal, and difficulty resuming after interruption. Mobile play magnified this friction. [S11, S14]

### Save-reload temptation and forecast trust

Combat prognosis makes risk legible but not deterministic. One reviewer reported over-trusting forecasts; another explicitly described reloading after a failed offensive. Transparent estimates can support informed decisions while also making a bad roll feel like an invitation to retry rather than an accepted campaign contingency. [S14, S17]

### Thin endgame feedback

A community review praised the campaign but criticised the lack of a substantial final accounting—enemy morale, final map, casualty totals, and other statistics. For a war demanding dozens of long turns, a muted conclusion can under-reward completion. [S10]

### Fixed-map scenario limitation

The five starts change state and duration but not map, core adversaries, or strategic scope. A player wanting separate operations or radically different problems may see five entrances to the same war rather than five independent scenarios. [S01, S11]

### Technical and preservation debt

Official patches fixed AI crashes, infinite loops, replay problems, accidental orders, installers, video decoding, and other defects. The current Steam page explicitly says the game is no longer officially supported, the last patch is from 2015, and glitches may remain. Current availability is therefore not the same as active maintenance. [S07, S18]

## 21. What the game appears to have solved

Within this case, without deriving a prescription for another game, the evidence supports the following findings.

### 21.1 It makes stalemate a state the player actively maintains and selectively breaks

Automatic place-based entrenchment, efficiency recovery, swapping, supply, and reserves make defence an ongoing allocation problem. Ammunition, ranged shock, Assault/Bombard statistics, research, and sequential ground attacks make an offensive a prepared project. The player is not asked to enjoy a low-odds infantry charge in isolation; the engagement lies in choosing, funding, staging, and timing the one attack worth making. [S01, S08–S10, S14, S16]

### 21.2 It creates strategic mobility without denying the trench system

The 1914 setup, open eastern spaces, rail transfer, retreat advances, fast supply-cutters, later armour, and researched assault power allow movement. The strong line remains the default; mobility appears when the player creates or inherits a window. This makes an advance feel earned precisely because the system has taught the player why the front is usually immobile. [S01, S05, S13]

### 21.3 It uses a small number of state variables repeatedly

Strength, efficiency, entrenchment, supply, ammunition, manpower, production, and national morale recur across movement, combat, recovery, research, and surrender. Their interactions generate much of the depth. The cost is that a badly tuned relationship—especially air shock versus efficiency, or strategic bombardment versus city recovery—can affect the whole game. [S01, S07]

### 21.4 It makes both alliances' prospects temporally intelligible

The Central Powers need to exploit concentration and early windows before long-war constraints tighten; the Entente needs to survive, use coalition and maritime resources, and turn time into pressure. Later campaigns let the player enter at different points in that arc. Evidence supports viable strategic narratives for both sides, but not statistically equal win rates. [S01, S13, S21]

### 21.5 It converts grand scope into readable local decisions

One formation per hex, familiar move-then-attack controls, visible forecasts, a small functional roster, and explicit resource panels make the immediate action understandable. Grand strategy emerges from the cumulative opportunity cost across many such local actions. [S01, S11–S14, S16]

### 21.6 Its most instructive failure is relational, not cosmetic

Fighters and airships were not merely assigned the wrong historical text. Their interactions with efficiency, city recovery, ammunition, interception, range, and supply allowed them to become too strategically reliable. The official patch sequence confirms that the problem required relationship-level balancing. [S01, S07, S09, S19–S20]

## 22. Evidence limits and unresolved questions

- No representative retention curve, campaign-completion rate, or session telemetry was located.
- No side-specific win-rate data was located for either AI or multiplayer, and balance changed across patches.
- The exact internal AI architecture was not disclosed. A developer described reactive intent, and the manual credits an AI programmer, but no search or evaluation implementation can be inferred.
- The original manual does not state turn duration cleanly; approximately fortnightly is supported by campaign length and a later detailed review, while another later review says weekly.
- Current Steam reviews mix versions from 1.4 through the final 2015 build and cannot establish launch balance.
- Forum strategy and exploit reports are self-selected. They establish that a tactic was found and articulated, not its population frequency or unbeatable status.
- The Potzblitz community demonstrates enduring attachment and modifiability, but it is a changed rules object and cannot validate vanilla AI or balance.
- The game evokes stormtroopers and late combined arms through abstraction; the launch documentation does not expose a dedicated stormtrooper formation or infiltration subsystem.
- Publisher language about unprecedented accuracy, limitless replayability, and challenging AI remains promotion unless independently corroborated.

## 23. Deferred work

Barry's personal assessment of this title remains quarantined for the later cross-game fireside discussion. This dossier makes no comparison with the preceding eleven cases and records no design requirement for the proposed fantasy wargame. The eventual audit can test whether the findings here align with Barry's memories and with themes that emerge across the completed corpus; doing so now would violate the agreed evidence-gathering sequence.
