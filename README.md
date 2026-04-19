# ITS.ba — Website

Static marketing site for ITS d.o.o. Sarajevo, built with Next.js 16 (App Router, static export), next-intl (Bosnian + English), Tailwind CSS v4, and Framer Motion.

**Live:** https://its-ba.vercel.app/bs/
**Vercel project:** https://vercel.com/antoinevagnon/its-ba

## Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (`output: 'export'`) | Static site generation |
| next-intl | i18n — Bosnian (default) + English |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Vitest + Testing Library | Unit tests |
| Playwright | E2E tests |
| Formspree | Contact form email delivery (via `NEXT_PUBLIC_FORMSPREE_ID`) |
| Vercel | Hosting + security headers |

## Local Setup

```bash
npm install
cp .env.example .env.local  # optional — form works without it
npm run dev
```

## Build

```bash
npm run build
# Static output: out/bs/  out/en/
```

## Tests

```bash
npm run test:run   # Vitest unit tests (one-shot)
npm run test       # Vitest watch mode
npm run test:e2e   # Playwright E2E (requires built output + static server)
```

## Deploy

Auto-deploys to Vercel on push to `main`. To deploy manually:

```bash
vercel --prod
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Optional | Formspree form ID for contact form email delivery. Without it, the form shows a graceful fallback. Create a free form at formspree.io pointing to info@its.ba. |

Set in Vercel dashboard → Project → Settings → Environment Variables.

## Adding a Product Page

1. Add translations under `Products.<key>` in `src/messages/bs.json` and `en.json`
2. Create `src/app/[locale]/proizvodi/<slug>/page.tsx` following the pattern in `geodet/page.tsx`
3. Link from `ProductGrid` in `src/components/home/ProductGrid.tsx`

## Project Structure

```
src/
  app/[locale]/           # Pages (Next.js App Router)
    page.tsx              # Homepage
    kontakt/              # Contact page
    proizvodi/<slug>/     # Product pages (geodet, dkv-pro, ervip, ...)
  components/
    home/                 # Homepage sections (Hero, ProductGrid, WhyUs, ...)
    contact/              # Contact form + info + map
    layout/               # Header, Footer, MobileNav, LanguageToggle
    product/              # Product page components
    ui/                   # Shared UI primitives (Button, etc.)
  messages/               # i18n translation files (bs.json, en.json)
  i18n/                   # next-intl config
```

## Rollback

Vercel dashboard → Project → Deployments → promote any previous deployment to Production.

## Context

Obsidian notes: `~/.apps/Obsidian/03-projects/its-ba.md`
