# Job (Work Experience)

Section guideline for the **Work Experience** section. This file extends `formatStandards.md` — the universal rules there still apply; this file adds specifics. Where they conflict, `formatStandards.md` wins.

---

## 1. Purpose

The Work Experience section lists the user's recent professional roles, each with accomplishment-focused bullets. It is the core evidence section of the resume — where claims made elsewhere are backed up.

---

## 2. Scope — recent roles

- **Default to the 3 most recent roles**, in reverse-chronological order (newest first). Three keeps the resume concise and is the recommended count.
- This is a **soft cap**: if the user wants to display more than three roles, that is allowed. The default favors three because additional roles lengthen the resume.
- If the user has fewer than three roles, display what they have.
- Whatever the count, roles are always ordered reverse-chronologically.

---

## 3. Per-role header

Each role displays:

| Field | Rule |
|---|---|
| Job title | Exactly as the user provided — never rephrase a title (`formatStandards.md §7`). |
| Company | Exactly as the user provided. |
| Dates | Month and year — `Mon YYYY – Mon YYYY`, e.g. `Mar 2021 – Jun 2023`. For an ongoing role the end is `Present`. |

Reproduce title, company, and dates **exactly** as entered (`formatStandards.md §9`) — never adjust a date or rephrase a name.

---

## 4. Bullets

Each role has **3-5 bullets**. Every bullet:

- Starts with a strong action verb (`formatStandards.md §1`, `§6`).
- Makes **one** point — one accomplishment, activity, responsibility, or collaboration.
- Stays under 25 words (`formatStandards.md §2`).
- Includes a metric **only** if the user provided one (`formatStandards.md §4`).
- Follows the tense rules in `formatStandards.md §3`.

A role's bullets should cover a mix of the following, **led by accomplishments**:

- **Accomplishments** — what was achieved, improved, or delivered. The strongest bullet type — lead with these.
- **Activities** — what the user actually did in the role.
- **Responsibilities** — what the user owned. Phrase as a direct action ("Owned the CI/CD pipeline"), never as hedged "responsible for…" (`formatStandards.md §5.5`).
- **Collaborations** — cross-team or cross-functional work.

A role written entirely as responsibilities and activities reads weaker than one led by accomplishments.

---

## 5. Unrelated roles

Some users — especially entry-level applicants and career-changers — have work experience that is **not in their target field** (e.g., a food-service job for someone entering engineering). Such a role still belongs on the resume: it shows work ethic, reliability, and continuous employment.

Write it with **honest reframing** — never fabrication, never inflation:

- **Title, company, and scope stay exactly true.** A crew member is a "Crew Member," never a "Manager." Never imply a role, seniority, or responsibility the user did not hold.
- **Bullets emphasize transferable competencies** — reliability, teamwork, performance under time pressure, customer interaction, handling responsibility — in language that connects to the target field.
- This is selection of emphasis and vocabulary, not invention. Every bullet must remain literally true (`formatStandards.md §9`).

**Honest limit:** an unrelated role demonstrates *general* transferable skills only — never *technical* ones. It cannot bridge a technical gap. Never frame a non-technical job as if it provides technical preparation. For a technical target, the resume's weight comes from Education, projects, and skills; the unrelated role is supporting evidence of character.

An unrelated role is usually given **fewer bullets** (2-3) than a relevant one — it is supporting context, not the main case.

Example — the same job, framed honestly:

> **Crew Member** — McDonald's
> Jun 2022 – Aug 2024
>
> - Maintained order accuracy and speed through sustained peak-volume shifts.
> - Coordinated with the kitchen and counter team to keep service moving during rushes.
> - Handled cash and point-of-sale transactions reliably across every shift.

Inflation to avoid: "Managed front-of-house operations and led the service team." The user was crew, not a manager — this overstates the role.

---

## 6. Example role entry

> **Senior Software Engineer** — Stripe · San Francisco, CA
> Mar 2019 – Feb 2023
>
> - Led the payments reliability team, owning incident response for the core charge API.
> - Built an automated rollback system that reduced mean time to recovery from 45 minutes to 8.
> - Migrated 30 services to a new observability stack alongside the platform team.
> - Mentored three junior engineers through design review and pairing.

The metrics above appear only because the user supplied them. With no metrics provided, the same bullets are written without numbers.

---

## 7. The AI's role

The AI writes each role's bullets from the user's Q&A answers about that role.

- **Never fabricate** an accomplishment, responsibility, metric, or collaboration (`formatStandards.md §4`, `§9`).
- If a role's input is too thin for three bullets, write fewer and raise a **note** — never pad to reach the count.
- The AI generates the bullet prose only; it never alters the title, company, or dates.

---

## 8. Experience totals and the displayed role count

The number of roles *displayed* may differ from the number the user *entered* (see Section 2). This interacts with the experience-total check in `formatStandards.md §9`, which flags when claimed total experience exceeds the sum of the user's roles.

That check must run against the user's **full** job history — every role they entered — **not** only the roles displayed. Otherwise it produces false "gap" notes whenever fewer roles are shown than were entered. The displayed count is a rendering choice only; it never limits the data the honesty checks see.
