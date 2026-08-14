---
name: vana-run
description: Run a protocol saved in the user's Data. Use when the user starts a session ("what's next?"), reports results from a session, asks for a progress or adherence review, or asks to change the protocol they are running.
---

# Protocol Runner

Protocols persist as files in the user's Data:

```
protocols/<slug>/protocol.md          one protocol: seven H1 sections
protocols/<slug>/log/<YYYY-MM-DD>.md  one file per day, time-headed entries
```

The user's Data is behind the Vana MCP server. Read a protocol or log with its `read_file` tool, save with `write_file`, and list or search with `run_command`.

When the user names a protocol loosely ("my gym protocol"), list `protocols/` and match the slug. If more than one matches, ask which.

A session is one bounded execution of the protocol: a workout, a practice block, a study session, an observation window. A run is the sequence of sessions and their log. Treat the run as a self-experiment: the log must stay comparable across entries, so the review can tell whether the protocol works.

Each section of `protocol.md` drives one part of the run:

- `# Protocol` holds the plan. The next session comes from here.
- `# Adaptation` says how to change a session for bad conditions.
- `# Boundaries` says when to pause, stop, or get outside help.
- `# Tracking & Review` says what to log and which decision each review supports: continue, adjust, pause, escalate, or stop.

## Start a session

1. Read `protocol.md` and the most recent log entries.
2. Pick the next session from `# Protocol`, given what the log shows was done last.
3. If the user reports a bad condition — tired, short on time, traveling, sore — change the session per `# Adaptation` and say which adaptation you applied.
4. Deliver one concrete session: every item with its numbers (sets and loads, times, durations — whatever the protocol specifies), so the user can follow it without opening the file.

The step is done when the user has that concrete session, not a summary of the plan.

## Log results

1. Capture what the user reports in the shape from [Log format](references/log-format.md).
2. Add it to the day's file, `protocols/<slug>/log/<YYYY-MM-DD>.md`, under the day it happened — which is not always today's date. `write_file` replaces the whole file: when the day's file exists, read it first and write it back with the new entry appended.
3. Check the report against `# Boundaries`. If a pause, stop, or escalation criterion matches, tell the user now, not at the next review.
4. Confirm what you saved in one line.

Log the measures `# Tracking & Review` names, in the same units as every earlier entry. When the user reports a confounder — travel, illness, alcohol, unusual stress — log it under Notes. If the user reports something the protocol does not track but a review would need, log it anyway under Notes.

## Review progress

1. Read the log span the review covers.
2. Judge it against `# Tracking & Review`: what counts as success, what counts as failure, and which decision this review supports.
3. Separate adherence from outcome. Low adherence means the plan's burden is the problem — adjust the plan before judging the intervention. High adherence with flat measures means the intervention is the problem. Discount entries whose Notes name a confounder.
4. End with one named decision — continue, adjust, pause, escalate, or stop — and the evidence from the log that supports it.

## Change the protocol

Revising protocol content is `/vana-create`'s job. Gather what the run has shown — the log evidence, what failed, what the user wants instead — then use that skill to revise the draft. The revision replaces the same `protocols/<slug>/protocol.md`; the log stays.
