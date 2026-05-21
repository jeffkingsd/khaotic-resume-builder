# Education

Section guideline for the **Education** section. This file extends `formatStandards.md` — the universal rules there still apply; this file adds specifics. Where they conflict, `formatStandards.md` wins.

---

## 1. Purpose

The Education section lists the user's formal degrees and qualifications. Its **depth is adaptive** — see Section 2.

Boundaries:

- **Certifications are not listed here** — they have their own section (`formatStandards.md §11`).
- **Academic honors** (cum laude, Dean's List) attach to the degree entry in this section. **Professional and competition awards** go in the Awards section, not here.

---

## 2. Adaptive depth

How much the Education section carries depends on the user's career stage:

- **Lean** — when the user has relevant work experience, Education is a short factual block: degree, institution, dates. The Work Experience section carries the resume.
- **Expanded** — when the user has little or no relevant work experience (recent graduates, career-changers), Education is a **primary** section. Expand it with the optional fields in Section 4 — GPA, honors, and relevant projects — so it carries real weight.

The AI determines which mode applies from the user's input: if the Work Experience section is empty, sparse, or unrelated to the target field, treat Education as a primary section and expand it.

---

## 3. Always-included fields

Every education entry shows:

| Field | Rule |
|---|---|
| Degree / qualification | Exactly as the user provided — e.g. "Bachelor of Science in Computer Science." Never inflate or upgrade it. |
| Institution | The full institution name, exactly as provided. |
| Dates | Graduation month and year. For an in-progress degree, use `Expected Mon YYYY`. |

Entries are ordered reverse-chronologically (most recent first). Reproduce all factual fields exactly (`formatStandards.md §9`).

---

## 4. Optional fields (the expanded section)

Included when the user provides them — and actively expected when Education is a primary section (Section 2):

- **GPA** — include when the user provides it. Most relevant for recent graduates.
- **Academic honors** — cum laude, magna cum laude, Dean's List, scholarships. Listed on the relevant degree entry.
- **Relevant projects** — academic or personal projects that show applied skill. For a user with little work experience, these are the strongest evidence this section can carry.
  - In the **lean** mode, a project is a name plus a brief one-to-two-line description.
  - In the **expanded** mode (Section 2), a significant project may be given fuller treatment — a name plus 2-3 accomplishment-style bullets, written the way a work role is in `job.md` — since here the project stands in for work experience.

Writing project descriptions and bullets is the **only generative task** in this section — everything else is factual placement. Write them from the user's input only (never fabricate what a project did or which technologies it used), keep each line action-led, and include a metric only if the user provided one (`formatStandards.md §1`, `§4`, `§6`, `§9`).

---

## 5. Honesty

Education is a high-stakes section for honesty:

- Never imply a degree was completed if the user did not state so. An in-progress or incomplete degree is labeled as such (`Expected …`, or the user's own wording).
- Reproduce the degree title, institution, and dates exactly. Do not "upgrade" a title or round a date.
- If the user's stated education conflicts with itself (e.g., a graduation date earlier than the start date), raise a **note** rather than correcting it (`formatStandards.md §9`).
