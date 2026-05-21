# Personal Info

Section guideline for the resume **header**. This file extends `formatStandards.md` — the universal rules there still apply; this file adds specifics for this section. Where they conflict, `formatStandards.md` wins.

---

## 1. Purpose

The Personal Info section is the resume **header**: the identifying and contact details at the top of the document. It is the first thing both a human reader and an ATS parser process.

---

## 2. The AI's role is minimal here

Personal info is **factual data the user supplies** — not generated prose. The AI **places** this data; it does not write, alter, correct, reformat, or infer it.

- Reproduce every contact detail **exactly** as entered. One altered digit in a phone number or email makes the resume unusable — never "fix" or normalize contact data.
- Never infer anything about the user — never guess gender, pronouns, age, or nationality from a name or any other field.
- The **only** generative task in this section is the professional headline (Section 4).

---

## 3. Fields

| Field | Status | Notes |
|---|---|---|
| Full name | Essential | Exactly as provided, including a chosen or preferred name. |
| Professional headline | Optional | The one AI-crafted element — see Section 4. |
| Email | Essential | Reproduce exactly. |
| Phone | Essential | Reproduce exactly. |
| Location | Essential | City and region/state **only** — never a full street address. |
| Photo | Optional | Supported, but advised against by default — see Section 6. |
| Links | — | Governed by `userLink.md`, not this file. |

---

## 4. Professional headline

A short tagline beneath the name — e.g. `Senior Software Engineer · Cloud Infrastructure`. The only element the AI may craft in this section.

- Keep it short: a role plus a focus area, not a sentence.
- Derive it only from the role and specialization the user actually indicated. Never invent a title or seniority the user did not state (`formatStandards.md §9`).
- Follow the formal, technical tone of `formatStandards.md §2`; no buzzwords (`§5`).
- It is a label, not a summary — the longer narrative belongs in the About Me section.

---

## 5. Fields the header does not collect

The following must **never** appear in the header: age, date of birth, gender, marital status, nationality, or religion.

In US, UK, Canadian, and Australian hiring these invite hiring bias and are not ATS-standard, so the header does not collect them. If any such detail appears in the user's input (e.g. typed into another field), do not silently delete it — raise a **note** (`formatStandards.md §9`) recommending removal and explaining why.

---

## 6. Photo

A photo is **supported but advised against** for the default (US-style) resume:

- It invites hiring bias.
- It is an image — `formatStandards.md §7` notes ATS parsers struggle with images, and a photo can disrupt how the header is parsed.
- Some markets (e.g. Germany, Japan) do expect a photo, which is why the field exists.

If the user includes a photo, place it — but surface a **note** explaining the tradeoff so the choice is informed.

---

## 7. ATS placement

ATS parsers extract the name, email, and phone from this section before anything else:

- Keep all header content as **plain text** in the **body** of the document.
- Never place contact details in the page's literal header/footer margin — many ATS parsers skip that region.
- Use a standard, predictable order: name → headline → contact details.
