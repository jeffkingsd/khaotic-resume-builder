# Format Standards

These rules apply to **every section** of the generated resume. Section-specific guideline files extend these rules but never override them. If a section file appears to contradict this file, this file wins.

---

## 1. Voice

- Use **implicit-subject voice**. Start every bullet and sentence with an action verb. The subject (the candidate) is implied, never stated.
- Never use first-person pronouns: `I`, `me`, `my`, `mine`, `we`, `our`.
- Never use third-person pronouns: `he`, `she`, `they`, `him`, `her`, `them`.
- Never refer to the candidate by name in the body of any section (the name belongs only in the header/personal info section).

**Correct:** `Led migration from MySQL to PostgreSQL across 14 services.`
**Wrong:** `I led the migration...` / `He led the migration...` / `The candidate led...`

---

## 2. Tone

The tone is **formal and technical**, optimized for both human recruiters and AI/ATS resume screeners.

- Prefer **concrete technical terms over abstract descriptions**.
- Use **specific technologies, methodologies, and metrics** wherever the user's input supports them.
- Use **industry-standard role titles and skill names** (e.g., "Senior Software Engineer," not "Code Wizard"; "TypeScript," not "JavaScript frameworks").
- Spell out acronyms on first use: `Applicant Tracking System (ATS)`, then `ATS` thereafter — unless the acronym is universally known in software (e.g., `API`, `SQL`, `HTTP`).
- Vary sentence structure to avoid mechanical repetition, but keep each bullet under 25 words.

**Correct:** `Designed event-driven architecture using Kafka and Redis to support 2M concurrent connections.`
**Wrong:** `Created an innovative real-time messaging solution that scaled significantly.`

---

## 3. Tense

- **Past roles:** past tense throughout — `Led`, `Built`, `Shipped`, `Achieved`.
- **Current role:** present tense for ongoing duties and responsibilities (`Lead`, `Build`, `Mentor`); past tense for completed, one-time accomplishments within that role (`Launched the v2 API`, `Migrated 30 services`).
- A current role's bullets may therefore differ in tense from one another — this is expected and correct.
- **Each individual bullet uses one tense.** Do not mix tenses inside a single bullet.

---

## 4. Metrics and Numbers

This is a **strict honesty rule.**

- **Only include metrics, percentages, dollar amounts, user counts, or time savings that the user explicitly provided.**
- **Never invent, estimate, or extrapolate numbers.** Not even rough ranges.
- If a bullet would be stronger with a metric but the user provided none, write the bullet without a metric rather than fabricate one.
- If the user provided a metric but its phrasing is ambiguous, preserve their original wording — do not "smooth it out" in a way that changes meaning.
- Format numbers consistently:
  - Integers under 10: spell out (`five projects`)
  - Integers 10 and above: numerals (`14 services`)
  - Percentages: numerals with `%` (`60%`)
  - Currency: numerals with `$` (`$2.4M`, `$140K`)
  - Time: numerals with unit (`9 months`, `3 years`)

---

## 5. Banned Words and Phrases

The following are **never allowed** in any generated output. If the user supplied a banned word in their input, rephrase it before including the bullet — do not echo their wording verbatim.
- do not use swear words
- do not use any business slang

### 5.1 Personality clichés
> passionate, rockstar, ninja, guru, wizard, go-getter, team player, hard-working, motivated, dedicated, driven, enthusiastic, energetic, self-starter, results-oriented, detail-oriented, people person

### 5.2 Business buzzwords
> synergy, leverage *(as a verb)*, utilize, results-driven, value-add, deliverable, ideate, optimize *(without a measurable object)*, best-in-class, world-class, mission-critical, paradigm shift, thought leader, move the needle, circle back, touch base, low-hanging fruit, deep dive, take offline, boil the ocean, wheelhouse, bandwidth *(as effort)*, north star, alignment *(as a noun)*

### 5.3 Generational / informal slang
> lit, vibe, vibes, vibing, no cap, slay, rizz, on fleek, bet, lowkey, highkey, sus, bussin, mid, cringe, hits different, main character, living rent-free, energy *(as in "this energy")*, cooked, ate, period *(as exclamation)*, iconic *(as superlative)*

### 5.4 Generic adjectives
> innovative, dynamic, strategic, robust, scalable *(used without context)*, cutting-edge, seamless, comprehensive, holistic, transformative, revolutionary, game-changing, next-generation, state-of-the-art, world-class, unparalleled

### 5.5 Weak hedging language
> helped to, worked on, was responsible for, participated in, assisted with, involved in, contributed to *(without specifying the contribution)*, played a role in, took part in, was part of

**Always replace hedging language with a specific action verb:**
- `worked on the auth system` → `built the OAuth 2.0 flow`
- `helped migrate the database` → `executed the PostgreSQL migration`
- `was responsible for deployments` → `owned the CI/CD pipeline`

---

## 6. Action Verbs

Lead every bullet with a strong action verb. Prefer specificity over generic verbs.

**Strong (preferred):** `Architected, Designed, Built, Shipped, Led, Owned, Migrated, Refactored, Automated, Reduced, Increased, Eliminated, Mentored, Reviewed, Deployed, Profiled, Optimized` *(when followed by a measurable object)*.

**Weak (avoid):** `Did, Made, Handled, Managed *(use specifically)*, Worked, Used`.

Do not repeat the same action verb within a single section.

---

## 7. ATS / Keyword Optimization

The resume must be parseable by Applicant Tracking Systems (ATS).

- Use **full technical names** (`PostgreSQL`, not `Postgres`; `TypeScript`, not `TS`) on first use within a section. Common abbreviations are acceptable on subsequent uses.
- Place skills and technologies in **plain text only** — never inside images, tables, or special formatting that ATS parsers strip.
- Match the casing of canonical names: `JavaScript` (not `javascript`), `Node.js` (not `nodejs`), `CI/CD` (not `ci/cd`).
- When the user provides job titles, preserve their **exact wording** — do not rephrase a title.
- Include the **specific tools, frameworks, languages, and platforms** the user worked with as discrete keywords (not buried inside long prose).

---

## 8. Output Format

- Return content as **plain text** unless a section file specifies otherwise.
- Do not use markdown formatting (`**bold**`, `*italics*`, `# headers`) in section body output. Headers are added by the rendering layer, not by the AI.
- Bullets in lists: one sentence each, no trailing period if under 6 words, period if longer.
- Each AI response is **structured into two separate fields**: `content` (the resume text for this section) and `notes` (advisory annotations — see Section 9). Every rule in this Section 8 applies to the `content` field only.
- Never hand-write JSON, code fences, or quote-wrapping inside `content`. The two-field structuring is produced by the API's structured-output mechanism, not by the AI emitting literal braces.
- Never place a note, warning, caveat, or aside inside `content`. Anything advisory belongs in the `notes` field.

---

## 9. Honesty and Faithfulness to User Input

- **Never fabricate experience, skills, education, certifications, or accomplishments** that the user did not provide.
- If the user's input is too sparse to write a quality bullet, **omit the bullet** rather than pad it with generic content.
- If the user's input contains a factual claim (a job title, dates, company name, degree), reproduce it exactly. Do not "correct" or "improve" factual fields.
- It is acceptable to **rephrase** the user's description of an accomplishment, but the underlying facts must remain unchanged.
- **If the user's stated totals don't match their itemized input (e.g., claimed years of experience exceed the sum of listed roles), do not alter either value — raise the discrepancy in the `notes` field for the user to resolve.**
- For example, if the user claims six years of experience but their listed roles total only four years, add a note asking the user to clarify the missing two years.
- Education does not count toward work experience when calculating these totals.

### Notes (advisory annotations)

- A **note** is a pseudo-element: advisory feedback attached to a section, shown to the user inside the app's editing and review view only.
- Notes are returned in the separate `notes` field. They are **never** embedded inside `content`.
- Notes are **stripped entirely on export** — the printable PDF/DOCX contains only `content`. A note must never reach the final document.
- Keep each note short, specific, and actionable (one or two sentences): state what the user should review and why.

---

## 10. Self-Verification

Before returning any generated content, re-read the output and confirm:

1. ☐ No first-person or third-person pronouns appear.
2. ☐ Every bullet starts with an action verb.
3. ☐ No banned word from sections 5.1–5.5 appears.
4. ☐ No metric appears that was not in the user's input.
5. ☐ No technology, role, or accomplishment was fabricated.
6. ☐ Tense is consistent within each role.
7. ☐ All technical terms use canonical casing.

If any check fails, regenerate the affected portion before responding.

---

## 11. Conditional Sections

Some sections are **conditional**: render them only when the user supplies content for them. If the user provides nothing for a conditional section, omit it entirely — do not render an empty heading, placeholder text, or a "None" value. A conditional section with no content must not appear in the generated resume, the section list shown to the user, or the exported PDF/DOCX.

All other sections (Header / Personal Info, About Me, Work Experience, Skills, Education) are **always rendered**. The conditional sections are defined below.

### Honorifics

Awards given to the person — corporate awards, event awards, or competition recognition:
- Company awards and/or recognition that is widely known
- Participation in an event that shows off the user's skill
- Completion of a challenge objective at a sponsored event

Should not be taken too seriously, since most of this content may carry little weight. The rendered section heading should use a standard term such as `Awards` or `Honors & Awards` — not the internal label "Honorifics".

### Certifications

Professional credentials the user has earned (e.g., AWS Certified Solutions Architect, PMP, CompTIA Security+). For each entry, capture the certification name, issuing organization, and date earned; include an expiry date or credential ID when the user provides one.

Unlike Honorifics, certifications carry real weight with recruiters and ATS systems — treat this content as high-value when present.


---

## 12. Section Order

The section order adapts to the user's career stage. The AI selects the order from whether the user has relevant work experience — the same signal that drives `education.md §2`. Conditional sections (Certifications, Awards) still follow `§11`: they appear only when the user provides content for them.

### Experienced order (default)

Use when the user has relevant work experience:

1. Header and titles
2. About me
3. Work/job experience
4. Skills list
5. Education
6. Certifications
7. Awards / Honors

### Entry-level order

Use when the user has little or no relevant work experience — recent graduates and career-changers. Education leads, since it is the user's primary asset:

1. Header and titles
2. About me
3. Education
4. Skills list
5. Work/job experience
6. Certifications
7. Awards / Honors

---

## 13. Visual Style Adjustment

The AI may set a small, bounded set of visual-style choices for the rendered resume. These choices are **resume-wide** — decided once for the whole document, not per section — and are returned in a separate `style` object. They are **never** placed inside `content`, which stays plain text per Section 8. The rendering layer reads `style` and applies it; the AI never writes markup, CSS, or inline styling.

All values are **bounded**. Sizes and fonts must be selected from the ranges and lists in the design reference (`app/Guidelines/design.md`). The AI selects from allowed options — it never invents a raw value outside them.


### Color rules

- **Header color** — may use any accent from the design reference's muted palette. Wider variety is allowed here, but "wider variety" means more options *within the muted palette* — bright, saturated, or neon colors remain banned (see `design.md`).
- **Text color** — strict. Body text must be black (`#1A1A1A`) or a dark gray. Never colored, never an accent.
- **Bullet and number-bullet color** — may use the muted palette; default to matching the text color unless a header accent is in use.


### When to adjust

- Adjust based on **content signals the AI can reason about** — primarily the amount of content generated — never on appearance, since the AI cannot see the rendered page.
  - Dense content (many roles, long sections) → smaller sizes, tighter defaults.
  - Sparse content → standard or larger sizes.
- When no signal clearly applies, use the design reference's default values. Do not adjust for the sake of adjusting.

### User override

Every value the AI sets is a **default the user can override** through the app's style controls. The AI's choice is a starting point, not a final decision.
