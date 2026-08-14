---
name: protocol-author
description: Author one bounded, reusable, content-only Markdown protocol. Use when the user wants to create a protocol or revise the content of a saved one.
---

# Protocol Author

Use this skill to draft, revise, or validate protocol content. Running a saved protocol — sessions, logging, reviews — is `protocol-runner`'s job.

Reference files:

- [Protocol spec](references/protocol-spec.md): the required section shape, the style rules, and an example of the density to match.
- [Question strategy](references/question-strategy.md): when a prompt is too thin to draft, when a rich brief can draft immediately, and how to fill leftover gaps.

Workflow:

1. Judge how much detail the user already gave. Follow the question strategy: sparse prompts get a coaching loop before drafting; rich briefs draft with few or no questions.
2. Research only when the request genuinely depends on external evidence or source interpretation.
3. Draft one content-only Markdown protocol per the protocol spec.
4. Check the draft against every spec rule — sections, style, and per-section requirements — and fix what fails. If a missing fact blocks a safe fix, ask the creator a targeted question instead of saving a partial protocol.
5. Save the protocol to `protocols/<slug>/protocol.md` in the user's Data, with a short kebab-case slug. A revision replaces the same file.
