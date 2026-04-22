# marktoebaertmedia

Portfolio site for Mark Toebaert, Fraser Valley photographer.
Next.js 15+ · React 19 · TypeScript · Tailwind v4 · Sanity v3 · Vercel.

See `../handover/BRIEF.md`, `../handover/CLAUDE.md`, and `../handover/PLAN.md` for
the brief, working conventions, and phased plan.

## Quick start

```bash
nvm use           # Node 20 LTS
pnpm install
cp .env.example .env.local   # then fill in Sanity + Resend keys
pnpm dev
```

- Site: http://localhost:3000
- Studio: http://localhost:3000/studio
- Type check page (delete before launch): http://localhost:3000/test-type

## Commands

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm start        # serve prod build locally
pnpm typecheck    # tsc --noEmit
pnpm lint         # next lint
pnpm format       # prettier --write .
```

## Project structure

```
app/
├── (site)/                 ← public site, wrapped in Nav + Footer + grain overlay
│   ├── page.tsx            ← Home
│   ├── work/               ← Work landing + [slug]
│   ├── about/
│   ├── rates/
│   └── contact/
├── studio/[[...tool]]/     ← embedded Sanity Studio
├── test-type/              ← type verification page (delete before launch)
├── layout.tsx              ← root: fonts, metadata, html shell
└── globals.css             ← Tailwind v4 + design tokens

components/                 ← Nav, Footer, GrainOverlay, …
lib/sanity/                 ← client, queries, image URL helper
sanity/                     ← schemas + desk structure
sanity.config.ts            ← Studio config
```

## Environment

See `.env.example`. Secrets live in Vercel env vars and Sam's password manager.
Never commit `.env.local`.

## Who

- **Client:** Mark Toebaert — `mtoebaertt@gmail.com` · 778.808.9343
- **Builder:** Sam Jennings — `hey@samjennings.dev` · `cal.com/sam-jennings/intro`
