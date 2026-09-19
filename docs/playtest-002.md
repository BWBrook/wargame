# Repair-and-experiment tranche

20 September 2026. Fable's review is Correspondence thread 38, messages 286–287;
Astra's independent reproduction and qualifications are message 288. Barry then
authorised repairs and experiments, plus onboarding, steadier controls, status
tables and a hold-at-all-costs order.

## Shipped repairs and interface changes

- Council recall no longer counts the recalled contingent against its own space
  at home. Already-home/full, incoming/full and unsafe-home cases are tested.
- Battle reports include qualitative enemy-loss bands and observed withdrawal or
  resistance collapse. A withdrawing force's estimate is marked uncertain; a lost
  force provides no reliable casualty estimate. Hidden retreat destinations and
  precise enemy rosters remain unavailable. Repeated uncertainty boilerplate is gone.
- The opening briefing explains the sides, routes, command scale, default orders,
  simultaneous commitment, support and provisional scoring for a new player.
- Native selectors remain connected during UI updates, rather than being destroyed
  and refocused. Selected formation and expanded disclosures survive reload.
- Overview provides own-force location/condition/supply/draft tables and area
  control, capacity, own occupants and dated enemy reports. It does not convert
  public control into a claim of known enemy occupancy.
- Hold at all costs is a **one-turn battle instruction**: no power bonus, ordinary
  losses if victorious, destruction instead of retreat if defeated. It can be used
  by land formations or squadrons. Ordinary intent is disabled while selected;
  the UI warns about the consequence and the need to reissue it. Council recall
  and capacity displacement are separate rules. It does not yet model an extra
  delaying benefit for a last stand.
- A positive legacy score now says **Attrition target met — campaign unresolved**,
  not “The invasion is checked.” Its classification remains a diagnostic control,
  not an accepted campaign victory test.

Rules/save version is now 2. Version-1 saves are rejected explicitly but retained
in browser storage for download until the player chooses New exercise or imports
a supported save. No silent reinterpretation or automatic deletion of old play.

## Controlled experiment

Run `npm run experiment`. There are 7,200 games: seeds 1–300, six Greek plans, two
service choices and two opponent doctrines. Each terminal state is scored twice;
the candidate scorer never changes the moves that generated it. Runs include the
recall repair and ordinary orders, not hold-at-all-costs orders. There is no tuning
loop or selected favourable seed subset.

The first four plans are Fable's controls. The additional plans are:

- **Forward screen:** turn 1 Spartans to Phocis, Athenians to Thermopylae,
  Corinthians to Boeotia, Allied squadron to Euboean waters; turn 2 Corinthians
  back to Megara with preservation intent; otherwise hold.
- **Forward relief:** turn 1 Spartans to Phocis, Corinthians to Boeotia, Athenian
  squadron to Euboean waters with preservation intent; turn 2 Athenians and
  Corinthians to Megara, Athenian squadron to Saronic with preservation intent;
  otherwise hold.

Both forward plans execute the Corinthians' extra movement permission in all 300
forward-service runs. Under home service illegal instructions fall back to hold;
the script reports omitted orders explicitly. Those are constrained-policy
comparisons, not identical actions falsely described as legal under both choices.

The **preserve** opponent uses measured intent, holds formations below 40 strength,
and rejects estimated unfavourable attacks after considering the proposed friendly
concentration and current contact bands. Capacity cancellations remain legal. It
receives exactly the same filtered information as the control opponent.

The **position** scorer tests a connected Greek foothold among Attica/Megara/Corinth,
supplied land and sea formations with at least 35 strength/cohesion, battle contact
and an unbroken commitment. A Persian presence of that quality supporting control
of two southern areas counts as breakthrough. This is a deliberately challengeable
candidate, **not the live objective**.

### Results

Numbers are victory / stalemate / defeat according to each diagnostic scorer.
Each row contains 300 seeds. “Forward orders” counts actual orders by the Corinthians
to areas outside Megara/Corinth, not a selection of the forward-service option.

| Doctrine | Service | Greek plan | Attrition V/S/D | Position V/S/D | Persian Corinth | Broken | Skipped orders | Forward orders |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| advance | home | hold | 300/0/0 | 0/0/300 | 300 | 0 | 0 | 0 |
| advance | home | withdraw | 279/0/21 | 0/0/300 | 279 | 0 | 0 | 0 |
| advance | home | concentrate | 0/134/166 | 0/0/300 | 134 | 0 | 0 | 0 |
| advance | home | isthmus | 288/0/12 | 170/0/130 | 0 | 0 | 0 | 0 |
| advance | home | forward-screen | 158/0/142 | 0/0/300 | 158 | 0 | 600 | 0 |
| advance | home | forward-relief | 285/0/15 | 285/0/15 | 0 | 0 | 600 | 0 |
| advance | forward | hold | 0/300/0 | 0/0/300 | 300 | 300 | 0 | 0 |
| advance | forward | withdraw | 0/279/21 | 0/0/300 | 279 | 300 | 0 | 0 |
| advance | forward | concentrate | 0/134/166 | 0/0/300 | 134 | 300 | 0 | 0 |
| advance | forward | isthmus | 170/118/12 | 170/0/130 | 0 | 121 | 0 | 0 |
| advance | forward | forward-screen | 0/158/142 | 0/0/300 | 158 | 300 | 0 | 300 |
| advance | forward | forward-relief | 285/0/15 | 285/0/15 | 0 | 0 | 0 | 300 |
| preserve | home | hold | 0/245/55 | 0/0/300 | 300 | 0 | 0 | 0 |
| preserve | home | withdraw | 55/244/1 | 44/11/245 | 244 | 0 | 0 | 0 |
| preserve | home | concentrate | 0/207/93 | 0/0/300 | 300 | 0 | 0 | 0 |
| preserve | home | isthmus | 0/300/0 | 0/300/0 | 0 | 0 | 0 | 0 |
| preserve | home | forward-screen | 0/217/83 | 0/0/300 | 300 | 0 | 600 | 0 |
| preserve | home | forward-relief | 0/300/0 | 300/0/0 | 0 | 0 | 600 | 0 |
| preserve | forward | hold | 0/245/55 | 0/0/300 | 300 | 300 | 0 | 0 |
| preserve | forward | withdraw | 55/244/1 | 44/11/245 | 244 | 0 | 0 | 0 |
| preserve | forward | concentrate | 0/207/93 | 0/0/300 | 300 | 300 | 0 | 0 |
| preserve | forward | isthmus | 0/300/0 | 0/300/0 | 0 | 0 | 0 | 0 |
| preserve | forward | forward-screen | 0/217/83 | 0/0/300 | 300 | 300 | 0 | 300 |
| preserve | forward | forward-relief | 0/300/0 | 300/0/0 | 0 | 0 | 0 | 300 |

### Interpretation and promotion decision

The recall fix removes 111 additional forward-Isthmus defeats seen in the original
300-seed review: 170/7/123 becomes 170/118/12. The remaining service penalty is a
broken-commitment rule, not a disappearing-unit defect.

Actual forward movement does not yet demonstrate a benefit in these plans.
Forward relief succeeds at the same rate under home service's restricted fallback;
forward screen fails. This strengthens the concern that forward service offers too
little useful advantage, without establishing dominance over all possible plans.
We have not added a naval service restriction or postponed the commitment choice.

The new scorer distinguishes all-hold from a defended foothold, but independent
review exposed a hidden requirement: any connected pair of the three named areas
includes **Megara**. Its per-unit 35-point thresholds also qualify one 35-strength
unit while rejecting two 34-strength units; one operational Persian formation can
support persistent control flags in two areas. Promoting this would install a new
scenario mission and arbitrary boundary effects, not merely correct the old score.

The preservation doctrine avoids automatic attrition, but its veto does not cause
rerouting or regrouping, and depleted unsupplied formations simply stop. It can
produce a standoff without testing the defence. Different results are not proof
of better command. **Neither candidate is promoted to normal play.**

The next Fable question should be the operational distinction between **invasion
checked**, **viable resistance remains**, and **defence defeated**—and what state
evidence supports it without a mandatory city. Then test a small opponent that
replans after declining an attack. Prolonged-isolation exhaustion and Persian
land–sea sustainment remain separate, unimplemented experiments; this tranche
does not establish a historical supply model or a balanced political dilemma.

## Verification

33 native tests, 11 Chromium browser tests, TypeScript and production bundling
passed. [Briefing screenshot](briefing-002.png) and [overview screenshot](overview-002.png)
show the new surfaces. The briefing's initial-focus scroll-to-bottom defect was
caught during visual inspection and repaired; it now opens at the context heading.

Native engine/save/experiment tests cover the repairs, stand semantics, replay,
old-save recovery boundaries and legal observation-only candidate orders. Chromium
checks exercise onboarding, retained native selectors, overview navigation and
fog labels, hold-at-all-costs save/import, mobile tables and the existing turn loop.
Screenshots of actual desktop/mobile overviews and the expanded briefing are
inspected alongside DOM checks. These are engineering checks, not Barry's playtest.
