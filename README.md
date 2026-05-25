# Khaotic Resume Builder

An AI-powered resume builder that generates resumes section by section using the Claude API.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript, Tailwind CSS 4, shadcn/Radix UI
- Anthropic SDK for AI generation
- SST for deployment

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project
- `npm run dev:sst` — deploy a dev environment with SST

## Environment

Set your Anthropic API key in a local `.env.local` file before running:

```bash
ANTHROPIC_API_KEY=your-key-here
```

> **⚠️ Never commit your API key.** Keep it in `.env.local` (gitignored by default) and only reference it server-side. If a key is ever pushed to a remote, rotate it immediately at [console.anthropic.com](https://console.anthropic.com/).
