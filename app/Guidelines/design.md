# Design Reference

This file defines the visual style of the **generated resume** — fonts, sizes, spacing, and colors. It is **read by the AI** as a guideline: the AI selects style values only from the ranges and lists defined here, and never invents values outside them. It is also the reference for the developer and the rendering layer.

`globals.css` remains the **source of truth** for app-UI tokens (the builder interface). Those are documented in Section 2 for developer reference only — the AI does not use that section. If a value there conflicts with `globals.css`, update one so they match — never let them drift.

---

## 1. Units Cheat-Sheet

The browser default is `1rem = 16px`. Common conversions:

| px | rem | Use |
|----|-----|-----|
| 4px | 0.25rem | tight gaps |
| 8px | 0.5rem | small spacing |
| 12px | 0.75rem | **minimum section padding** |
| 16px | 1rem | default section gap |
| 24px | 1.5rem | large spacing |

For the **resume document**, use `pt` (print units), not `rem`. Rough guide: `1pt ≈ 1.333px`.

---

## 2. App UI — see `globals.css` *(developer reference — the AI does not use this section)*

The builder interface (buttons, forms, sidebar) uses the shadcn token set already defined in `app/globals.css`. Do not redefine these here — read them from `globals.css`:

- **Colors** — `--background`, `--foreground`, `--primary`, `--muted`, `--accent`, `--destructive`, plus chart and sidebar colors. Light values in `:root`, dark values in `.dark`.
- **Radius** — `--radius: 0.625rem`, with `sm` / `md` / `lg` / `xl` / `2xl` / `3xl` / `4xl` steps.
- **Fonts** — `--font-sans` and `--font-heading`, wired to Inter in `app/layout.tsx`.

When styling app UI, always use these tokens (e.g. `bg-background`, `text-foreground`) — never hardcode a hex value.

---

## 3. Resume Document — Typography

The resume is a printed document and uses its own type scale, separate from the app UI.

### Available fonts (switchable)

Headers and body text may use any font from this list. All are ATS-safe and available via `next/font/google`. Keep the whole resume to **one font**, or a deliberate **serif heading + sans body** pair.

**Sans-serif**
- Inter *(default)*
- Roboto
- Open Sans
- Lato
- Source Sans 3
- Work Sans

**Serif**
- Merriweather
- Lora
- Source Serif 4
- PT Serif

Avoid decorative, script, or uncommon fonts — they hurt ATS parsing and readability.

### Type sizes (print, `pt`)

| Element | Size | Step | Notes |
|---|---|---|---|
| Name / full title | 20–36pt | 2pt | largest element on the page |
| Section heading | 12–16pt | 2pt | e.g. "Experience", "Skills" |
| Job title / company | 11–13pt | 0.5pt | — |
| Body text | 10–12pt | 0.5pt | — |
| Minimum | 10pt | — | never set body text below this |

---

## 4. Resume Document — Spacing

| Property | Value | Notes |
|---|---|---|
| Page margins | 0.625in | range 0.5–0.75in is acceptable |
| Section padding | **min 0.75rem (12px)** | recommended 1rem (16px) between sections |
| Line height | 1.3 | range 1.15–1.4 |
| Bullet spacing | 4–6px | gap between list items |

Keep spacing even. Inconsistent gaps between sections are the most visible sign of a sloppy layout.

---

## 5. Resume Document — Color Palette

**Rule: avoid bright, saturated, or neon colors.** A resume should read as professional. Color is decorative only — it must never be the sole carrier of meaning (per `formatStandards.md §7`), and the resume must stay legible in grayscale.

### Base

| Role | Hex | Notes |
|---|---|---|
| Primary text | `#1A1A1A` | near-black, not pure black |
| Secondary text | `#555555` | dates, locations, captions |
| Background | `#FFFFFF` | always white for print |
| Rules / borders | `#D1D5DB` | thin separator lines |

### Accent (pick one — muted only)

Used sparingly: section headings or a thin rule. Never for body text.

| Name | Hex |
|---|---|
| Navy | `#1F3A5F` |
| Slate | `#334155` |
| Burgundy | `#6B2737` |
| Forest | `#2F4734` |
| Muted teal | `#2C5E5E` |
| Charcoal | `#2D2D2D` |

**Do not use:** pure red, bright blue, yellow, orange, neon/fluorescent tones, or any highly saturated color. If a color looks vivid on screen, it is too bright for a resume.
