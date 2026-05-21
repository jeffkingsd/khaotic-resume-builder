# Skills

Section guideline for the **Skills** section. This file extends `formatStandards.md` — the universal rules there still apply; this file adds specifics. Where they conflict, `formatStandards.md` wins.

---

## 1. Purpose

The Skills section is a **categorized list of the user's technical, concrete skills**. It is the densest keyword block on the resume and the primary section ATS systems scan for skill matches.

---

## 2. The AI's role

The AI **organizes** the skills the user provides — it does not invent them.

- Group, order, canonicalize, and deduplicate the user's skills.
- **Never add a skill the user did not claim** (`formatStandards.md §9`) — not even an "obviously implied" one. If the user lists a framework but not its base language, do not add the language; raise a **note** suggesting they add it if it applies.
- **Never remove a skill the user provided.** If the list is unusually long or unfocused, keep it and raise a **note** suggesting they trim to the most relevant.
- The AI generates no prose here — the section is discrete keywords, not sentences.

---

## 3. Technical and concrete skills only

This section lists **verifiable, concrete skills**: programming languages, frameworks, libraries, tools, platforms, databases, and methodologies.

- **No soft skills** (communication, leadership, teamwork, problem-solving). They are unverifiable as a list and are demonstrated through the Experience section instead.
- If the user supplies soft skills for this section, do not list them here — raise a **note** explaining they belong in the Experience bullets, per `formatStandards.md §5`.

---

## 4. Categorized structure

Skills are grouped under category labels. The AI assigns each skill to the most fitting group.

Example categories (adapt to the user's field):

- **Languages** — programming languages
- **Frameworks & Libraries**
- **Databases**
- **Cloud & Infrastructure**
- **Tools**
- **Methodologies** — Agile, TDD, CI/CD, etc.

Grouping rules:

- Use a consistent, recognizable category vocabulary — the kind a recruiter or ATS expects.
- Do not create a group containing only one skill; fold a lone skill into the nearest fitting group.
- Order groups by relevance to the user's target role; within a group, order skills strongest / most-relevant first.
- Spoken languages (English, Spanish, etc.), if provided, go in their own clearly-labeled group — never mixed with programming languages.

---

## 5. No proficiency indicators

List skill **names only**. Do not add proficiency levels, star ratings, percentages, year counts, or labels like "Expert" or "Proficient."

- Self-rated proficiency is subjective, ATS cannot parse it, and many recruiters discount it.
- Proficiency is shown through the Experience section — where, how long, and to what effect a skill was used.

---

## 6. Canonical naming (ATS)

The Skills section is the primary block ATS systems scan — naming precision matters most here.

- Use each skill's **canonical name and casing**: `JavaScript` not `javascript`, `Node.js` not `nodejs`, `PostgreSQL` not `postgres`, `CI/CD` not `ci/cd` (`formatStandards.md §7`).
- Use the **full standard name** a job posting would use — not an internal abbreviation or nickname.
- Deduplicate: if the user lists the same skill twice or under variant spellings (`JS` and `JavaScript`), consolidate to the single canonical form.
