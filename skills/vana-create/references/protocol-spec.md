# Protocol Spec v0.3

A protocol is a reusable, bounded plan that helps a person do, avoid, observe, or learn something over time.

The protocol is one content-only Markdown file, saved at `protocols/<slug>/protocol.md` in the user's Data. It contains no YAML frontmatter, document title, summary, category, tags, sources, risk classification, or other application metadata.

## Scope

Protocols cover self-directed routines: training, practice, habits, learning, focus, and similar. When a request centers on medical care — conditions, symptoms, medications, supplements, lab results, or anything a clinician manages — do not draft it. Tell the creator that VANA does not make medical protocols, and point them to a professional. When an in-scope routine sits next to the request — the schedule, the habit, the training plan — offer to draft that instead.

## Style

- Write for the careful self-experimenter: practical, commonly used choices with clear pause, stop, and escalation criteria. This register replaces both cautious hedging and aggressive max-intensity plans.
- Keep the draft bounded to the creator's request.
- Match the example's density: short bullets directly under each H1, `##` subsections only when a section naturally groups, and `- **Label:** detail` for stacks, layers, timings, and decisions.
- Use `Not applicable` only when a section truly does not apply, and explain why.
- Do not invent citations, source claims, credentials, product testing, or regulatory status.

## Required Sections

Every protocol contains these top-level H1 headings exactly once and in this order.

### `# Purpose`

Who this is for, what outcome it targets, the assumed starting context, and what it is not meant to do.

### `# Boundaries`

Who should avoid it, when to pause or stop, when to get outside help, and what assumptions or missing information could change the protocol. Every protocol names at least one pause, stop, avoidance, or escalation criterion here.

### `# Requirements`

Materials, devices, products, environment, time burden, support, and any before-you-start measurements or context that affect safety, adaptation, or interpretation. Request baseline data only when it changes a decision.

### `# Protocol`

The actual plan: steps, sequence, cadence, timing, duration, and an obvious minimum viable version. An actionable protocol must be executable. An assessment protocol explains what to observe, measure, or record. An informational protocol explains the learning, evaluation, or decision path. Use numbered steps for routines.

### `# Adaptation`

How to make the protocol easier, harder, shorter, longer, or slower. When relevant, cover missed days, low energy, travel, stress, short weeks, and other bad conditions. State when to progress, hold, regress, restart, or abandon it. Use labeled bullets (`**Easier:**`, `**Harder:**`, `**Missed day:**`).

### `# Tracking & Review`

What to log, how often to log it, what success and failure look like, when to review, and which decision the review supports: continue, adjust, pause, escalate, or stop. Require only tracking that changes a decision.

### `# Rationale`

Why the protocol may work, what it claims and does not claim, its evidence or experience, and key uncertainty. Use one confidence level: `strong`, `moderate`, `weak`, or `speculative`. Separate published evidence, expert reasoning, creator experience, and speculation. A few bullets, not a literature review.

## Example

This example shows the section shape and the density to match:

```md
# Purpose

- Build a kettlebell strength base in 8 weeks with three short sessions per week.
- For someone who trains at home, lifts occasionally, and wants a repeatable routine, not a max-effort program.
- Not a competition prep plan and not a substitute for coached technique work.

# Boundaries

- Avoid this plan without at least a few months of general lifting experience.
- Pause when a session leaves sharp or localized pain, not ordinary soreness.
- Stop and get coaching when swing or press form breaks down under the working weight.

# Requirements

- One kettlebell the creator can press 5 clean reps with
- A second, heavier bell from week 5 if progress allows
- 30 minutes per session, 3 non-consecutive days per week
- Floor space of roughly 2 × 2 meters

# Protocol

## Session A — Press focus

1. Warm-up: 5 min of halos, hip hinges, and light swings
2. Clean and press: 5 × 3 per side
3. Goblet squat: 3 × 8
4. Two-hand swing: 3 × 15

## Session B — Swing focus

1. Warm-up as in Session A
2. One-hand swing: 5 × 10 per side
3. Turkish get-up: 3 × 1 per side, slow
4. Farmer carry: 3 × 40 meters

## Weekly cadence

- Alternate A and B across the three weekly sessions
- Add one rep per set each week until the top of the range, then move up a bell size

# Adaptation

- **Easier:** cut one set from each exercise, or swap one-hand swings for two-hand
- **Harder:** add a fourth weekly session only after four full weeks at the current load
- **Missed day:** resume the alternation where it left off; never stack two sessions in one day
- **Short on time:** keep the first two exercises, drop the rest
- **Traveling:** replace a session with 3 × 20 bodyweight squats and 3 × 10 push-ups

# Tracking & Review

- Log per session: exercises done, sets × reps × bell size, and perceived effort out of 10
- Review every 2 weeks: reps trending up at the same effort means continue; effort trending up at the same reps means hold the load
- Two consecutive weeks of stalled reps and rising effort supports one decision: cut volume by a third for a week, then reassess

# Rationale

- **Confidence:** strong for the general pattern; moderate for the specific cadence
- Frequent submaximal practice builds pressing strength more reliably than weekly max attempts
- The two-session split keeps each session short enough to sustain adherence for the full 8 weeks
```
