# User Links

Section guideline for the **links** shown in the resume header — LinkedIn, GitHub, portfolio, and similar. `personalInfo.md` defers link handling to this file. This file extends `formatStandards.md`; where they conflict, `formatStandards.md` wins.

---

## 1. Purpose

Links point a reader to the user's professional presence — their LinkedIn profile, code (GitHub/GitLab), portfolio, or personal site. They appear with the contact details in the header.

Links are **optional**. If the user provides none, render no links — never an empty label or placeholder.

---

## 2. The AI's role

Links are **factual data the user provides** — the AI places them, it does not create them.

- Reproduce each URL **exactly** as the user entered it. A single wrong character makes the link dead.
- **Never invent or guess** a URL, handle, or profile. If the user did not provide a GitHub link, do not assume one exists. If the user gave a bare username for a known platform, the standard profile URL may be formed from it — but never guess the username itself.
- **No shortened links.** Every link must be the full, real destination URL. Never accept or produce a URL-shortener link — `bit.ly`, `tinyurl`, `t.co`, `goo.gl`, and similar. Shortened links hide their destination, can expire, and read as unprofessional or suspicious on a resume. If the user provides a shortened link, raise a **note** asking for the full URL — never expand or guess the destination yourself.
- If a provided link is otherwise malformed, do not silently "fix" it — raise a **note** (`formatStandards.md §9`) asking the user to check it.

---

## 3. Which links to include

Include links that are **professionally relevant** to the user's target field:

- **LinkedIn** — appropriate for nearly every user.
- **GitHub / GitLab / Bitbucket** — for engineering and technical roles.
- **Portfolio / personal website** — for any field where work can be shown (design, writing, engineering).
- **Field-specific** — e.g. a design portfolio, Google Scholar, a published-work page.

**Do not include** personal social media (Instagram, personal X/Twitter, Facebook, TikTok). These are not professional links and can invite bias.

---

## 4. Formatting and display

- Display links as **clean, readable text** — strip the `https://`, the `www.`, and any trailing slash. Show `linkedin.com/in/janedoe`, not `https://www.linkedin.com/in/janedoe/`.
- This is cosmetic only: the **full domain and path stay visible**, and the link target remains the complete real URL. The displayed text always reveals the true destination — it is never abbreviated or hidden (unlike a shortened link).
- Keep links as **plain text** in the document body (`formatStandards.md §7`), never inside an image or the page's header/footer margin — consistent with `personalInfo.md §7`.
- When a user has several links, order them by relevance to the target role (most relevant first).
