# Log format

One log file per day: `protocols/<slug>/log/<YYYY-MM-DD>.md`. The H1 is the date. Each check-in is an `##` entry headed by a time and what the protocol calls the session.

The time is when the session happened, not when the user reported it — infer it from context, and ask only when the difference would change a review. Times are the user's local time; note the timezone in the entry when it changes mid-run.

Derive the entry's fields from the protocol's `# Tracking & Review`: one bold-label bullet per thing it says to log. The shape is fixed per run — the first entry sets the fields and units, and every later entry repeats them, so entries compare across the run.

Every entry, whatever its fields, keeps these invariants:

- Adherence and outcome stay separate: what the user did versus what it measured. A review judges them differently.
- Confounders and context — travel, illness, alcohol, stress, deviations — get their own field, so a review can discount an entry.
- Skip measures that will not change a decision.
- Keep one entry per check-in. A review reads entries; it does not rewrite them.
- An entry for a missed session is still an entry: the adherence field says `missed`, with the reason under the context field. Missed sessions are what `# Adaptation` and reviews act on.

When `# Tracking & Review` is thin or the run is new, this default shape is sound:

```md
# 2026-08-07

## 07:40 — Morning light

- **Planned:** 10 min outdoor light within 30 min of waking
- **Done:** 12 min on the balcony, 20 min after waking
- **Felt:** alert by the end

## 23:20 — Night 12

- **Planned:** screens off 22:30, lights out 23:00, no caffeine after 14:00
- **Done:** screens off 22:50, lights out 23:05, espresso at 15:30
- **Measured:** sleep onset 23:40, wake 07:10, wake feeling 6/10
- **Felt:** restless first hour, no grogginess
- **Notes:** late espresso — client call; possible confounder
```

The same default fits any protocol: a gym entry puts the work under **Done** (`Bench press: 3×8 @ 60 kg`) and outcome measures under **Measured** (`bodyweight 82.4 kg`).
