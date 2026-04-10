# ITS.ba Website Revamp — Design Document

> **Date**: 2026-02-22
> **Status**: Approved
> **Target**: iT Systems d.o.o. Sarajevo (https://its.ba)

---

## 1. Strategy

### Purpose

Cold outreach sales demo. Rebuild 3 pages of the iT Systems website to demonstrate AI-accelerated development speed and quality. The revamp IS the pitch: "I rebuilt your website in 2 days. Here's the live link."

### What this proves to iT Systems

- **Speed** — a professional bilingual 3-page site, built fast
- **Quality** — pixel-perfect, accessible, performant, mobile-first
- **Technical depth** — Next.js, i18n, animations, SEO, Vercel deployment

### Pages and their jobs

| Page | Job | Proves |
|------|-----|--------|
| **Homepage** | "Here's who you are, told better" | Information architecture, visual design, conversion thinking |
| **Geodet product page** | "Here's how your best product should sell" | Product storytelling, feature presentation, pricing UX |
| **Contact** | "Here's how you convert visitors" | Form design, trust signals, map integration |

### Key problems we fix (from site audit)

1. Dead navigation links removed — only real pages in the nav
2. Mobile-first responsive design replaces 1100px breakpoint
3. Social proof section added — client logos currently absent from homepage
4. Clear CTAs on every page — current site has one above the fold
5. Consistent visual language — no more mixed clipart/screenshots/stock photos
6. Fast performance — no bloat (LayerSlider, Google Translate widget, dual GA, Tawk.to)
7. Bilingual (Bosnian + English) with proper i18n, not Google Translate widget
8. Clean URL structure — `/bs/`, `/en/`, `/bs/proizvodi/geodet/`, `/bs/kontakt/`

---

## 2. Homepage

Seven sections, each with a clear job. Replaces the current 11 cluttered sections.

### 2.1 — Sticky Header

- Single bar: logo left, nav center, language toggle + CTA right
- Nav items: Pocetna, Proizvodi, Usluge, O nama, Kontakt
- Transparent over hero, transitions to white with shadow on scroll past 80px
- Mobile: hamburger icon, slide-out drawer with full nav
- CTA button: "Zatrazite ponudu" (golden, always visible)
- Language toggle: BS | EN text switcher

### 2.2 — Hero

- Full viewport height, navy (#1A2332) background with subtle geometric/tech pattern
- Large headline: "Pretvaramo ideje u softverska rjesenja"
- Subheadline: one sentence — 10+ years, government and enterprise clients across BiH
- Two CTAs side by side: "Pogledajte proizvode" (ghost) + "Zatrazite ponudu" (gold solid)
- Subtle scroll-down chevron indicator at bottom
- Partner badge strip below hero content: IBM, HCL, Microsoft, Autodesk logos, faded/grayscale

### 2.3 — Social Proof Bar

- Light gray (#F9FAFB) background
- "Koriste nas 50+ organizacija" heading
- Auto-scrolling logo strip: Elektroprivreda BiH, BHTelecom, Federal Ministry of Labor, Arcelor Mittal, PayTen, Asseco
- Does NOT exist on their current site — single biggest trust signal gap

### 2.4 — Products Grid

- Heading: "Nasa rjesenja"
- 6 product cards, 3x2 grid (collapses to 2-col tablet, 1-col mobile)
- Each card: category tag pill (e.g. "Geodezija"), product name, one-line description, arrow link
- Unified card design — consistent style across all products
- Hover: lift + golden left border accent
- Products shown: Geodet, Geodet Profili, ProMan, DKV-PRO, ERVIP, Help Desk

### 2.5 — Why iT Systems

- Two-column layout
- Left: bold stat blocks — "10+ godina", "50+ klijenata", "7 softverskih proizvoda" — gold accent on numbers
- Right: 2-3 short paragraphs about turnkey solutions and customer-first philosophy
- Replaces the weak "O Nama" and generic tagline sections

### 2.6 — Latest News

- 3 news cards in a row
- Each card: date tag, title, excerpt
- "Sve vijesti" link
- Content from actual recent news (Elektroprijenos BiH DKV-PRO, Bosanska Krupa Geodet, Opcina Kljuc Geodet)

### 2.7 — Footer

- Dark background (#1A2332)
- 4 columns: Company info + address, Quick links, Products, Contact
- Social icons: LinkedIn, Facebook, YouTube only (drop dead Google+, inactive Twitter)
- Bottom bar: copyright + privacy policy
- Inline newsletter signup (email + subscribe button)

---

## 3. Geodet Product Page

Transforms a wall of text into a proper product sales funnel.

### 3.1 — Product Hero

- Breadcrumb: Pocetna > Proizvodi > Geodezija > Geodet
- Category pill: "Geodezija" in gold
- Heading: "Geodet"
- Subheading: "Aplikacija za automatsku obradu geodetskih podataka"
- Two CTAs: "Preuzmite demo" (ghost) + "Zatrazite ponudu" (gold)
- Right side: clean product screenshot or stylized software UI visual

### 3.2 — Key Value Props

Three cards with icons:
- "Podrska za sve instrumente" — Topcon, Leica, Sokkia, Trimble, Nikon, Ruide
- "Automatski geodetski obrasci" — TZ, O1i2, O1v, O18-D, O8, O25, O19, O28p, OK in Excel
- "CAD integracija" — AutoCAD, ZWCAD, BricsCAD, Google Earth, MicroStation, PLS-CADD

### 3.3 — Features

Alternating left-right blocks (text + image pairs):

1. **Coordinate transformation** — KOORDTRANS module, 100+ predefined datums, 7-parameter Gauss-Kruger to WGS84
2. **GPS reports** — GNSS forms 1-4 from RTK and static GPS surveys
3. **Topographic symbols** — user-defined geodetic codes, cartographic plotting

Each block: heading, 2-3 sentence description, supporting visual. Scroll-triggered fade-in.

### 3.4 — Pricing

Two cards side by side:

| | Standard | Premium |
|---|----------|---------|
| **Price** | EUR 1,000 / 2,000 KM | EUR 1,200 / 2,400 KM |
| **Highlight** | — | "Preporuceno" badge |
| **Extras** | Core features | + GPS module, Google Earth module |
| **Includes** | USB HardLock, install media, manual, license | Same |
| **CTA** | "Zatrazite ponudu" | "Zatrazite ponudu" |

Note below: volume discounts available.

### 3.5 — Who Uses Geodet

- "Koriste Geodet" heading
- Logo row: BNPro, BHTelecom, Elektroprivreda BH, Geomap, Geowild, IPSA Institute

### 3.6 — Related Products

- "Mozda vas zanima" heading
- 2-3 product cards (Geodet Profili, Harmonizacija grunta, DKV-PRO)
- Same card component as homepage grid

### 3.7 — CTA Banner

- Full-width gold background
- "Spremni za modernizaciju geodetskog procesa?"
- CTA button: "Kontaktirajte nas" (navy on gold)

---

## 4. Contact Page

### 4.1 — Contact Hero

- Heading: "Kontaktirajte nas"
- Subheading: "Odgovaramo na upite u roku od 24 sata"
- White background, generous whitespace

### 4.2 — Two-Column Layout

**Left (60%) — Contact Form:**
- Fields: Ime i prezime, Email, Telefon (optional), Naziv firme (optional), Predmet (dropdown: Upit za ponudu, Tehnicka podrska, Partnerstvo, Ostalo), Poruka
- Golden submit button: "Posaljite poruku"
- reCAPTCHA v3 invisible (no checkbox)
- Success state: green checkmark + "Hvala! Javit cemo Vam se u roku od 24 sata."

**Right (40%) — Contact Info Cards:**
- Stacked icon cards: Adresa, Telefon, Viber, Email, Radno vrijeme
- Social icons: LinkedIn, Facebook, YouTube

### 4.3 — Map

- Full-width Google Maps embed
- Muted/grayscale style with golden pin marker
- Address label overlay

### 4.4 — Trust Strip

- Light gray background
- "Partneri od povjerenja" heading
- Partner logos: IBM, Microsoft, HCL, Autodesk, Cisco, Dell

---

## 5. Technical Architecture

### Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| i18n | next-intl |
| Deployment | Vercel (static export) |
| Package manager | npm |

### Project structure

```
its-revamp/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                # Homepage
│   │   │   ├── proizvodi/
│   │   │   │   └── geodet/
│   │   │   │       └── page.tsx        # Geodet product page
│   │   │   └── kontakt/
│   │   │       └── page.tsx            # Contact page
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── LanguageToggle.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── LogoStrip.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   └── LatestNews.tsx
│   │   ├── product/
│   │   │   ├── ProductHero.tsx
│   │   │   ├── ValueProps.tsx
│   │   │   ├── FeatureBlock.tsx
│   │   │   ├── PricingCards.tsx
│   │   │   └── CtaBanner.tsx
│   │   └── contact/
│   │       ├── ContactForm.tsx
│   │       ├── ContactInfo.tsx
│   │       └── MapEmbed.tsx
│   ├── i18n/
│   │   ├── messages/
│   │   │   ├── bs.json
│   │   │   └── en.json
│   │   ├── request.ts
│   │   └── routing.ts
│   └── lib/
│       └── constants.ts
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── products/
│   │   └── hero-bg.webp
│   └── fonts/
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

### Key decisions

- **next-intl** for i18n — locale in URL path (`/bs/`, `/en/`), Bosnian default
- **Static export** (`output: 'export'`) — no server needed, deploys anywhere
- **All content in JSON** — i18n message files + `constants.ts`, no CMS, no database
- **Next.js `<Image>`** — WebP, lazy loading, proper sizing
- **Partner logos as SVG** where possible for crisp rendering at any size

---

## 6. Visual System

### Colors

```
its-gold:       #EABB00    // Primary accent — CTAs, highlights, active nav
its-gold-dark:  #C99E00    // Gold button hover
its-gold-light: #FDF3D0    // Light gold background tint
its-navy:       #1A2332    // Hero, footer — deeper than their current #222222
its-navy-light: #2A3544    // Dark section card backgrounds
its-blue:       #117ABC    // Links, secondary accents (kept from current)
its-text:       #1F2937    // Body text (gray-800)
its-muted:      #6B7280    // Secondary text (gray-500)
its-surface:    #F9FAFB    // Section backgrounds (gray-50)
```

### Typography

**Font**: Inter (self-hosted, variable weight)

One font replaces their three (Roboto, Roboto Condensed, Pathway Gothic One).

| Element | Size | Weight | Tracking |
|---------|------|--------|----------|
| H1 (hero) | 56px / 3.5rem | 700 | -0.02em |
| H2 (section) | 36px / 2.25rem | 700 | -0.01em |
| H3 (card title) | 20px / 1.25rem | 600 | 0 |
| Body | 16px / 1rem | 400 | 0 |
| Small / captions | 14px / 0.875rem | 400 | 0.01em |
| Nav items | 15px / 0.9375rem | 500 | 0.02em |

### Spacing

- Section padding: `py-20` (80px) desktop, `py-12` (48px) mobile
- Heading to content: `mb-12` (48px)
- Card gap: `gap-8` (32px)
- Max content width: `max-w-7xl` (1280px)

### Buttons

| Variant | Style |
|---------|-------|
| Primary | Gold bg, navy text, rounded-lg, px-6 py-3, hover goldDark, subtle shadow |
| Ghost | Transparent, white or navy border, same size, hover 10% fill |
| Link | Blue text, underline on hover |

### Cards

- White bg, rounded-xl, shadow-sm
- Hover: shadow-md + translateY(-2px) + 2px gold left border
- Transition: 200ms ease-out

### Animations (Framer Motion)

- Scroll-triggered: fade up 20px, 0.5s duration, on viewport enter
- Grid stagger: 0.1s delay between items
- Header: backdrop-blur + opacity from transparent to white on scroll > 80px
- No page transitions (static export)

### Responsive breakpoints

| Name | Width | Changes |
|------|-------|---------|
| Mobile | < 768px | 1 column, hamburger nav, stacked cards, smaller type |
| Tablet | 768–1024px | 2 columns, compact nav |
| Desktop | > 1024px | Full layout, 3-column grids, sticky header |

---

## 7. Content Requirements

### Text content

All text sourced from current its.ba — no invented copy. Translated to English for the EN locale. Key content:

- Company description and philosophy (from /o-nama/)
- Product descriptions (from individual product pages)
- Geodet features, pricing, supported instruments (from /proizvodi/geodet/)
- Contact details, hours, social links (from /kontakt/)
- 3 latest news items (from /novosti/)

### Images needed

| Asset | Source | Format |
|-------|--------|--------|
| Hero background | Geometric/tech pattern (generated or stock) | WebP, 1920px wide |
| Partner logos (6-8) | IBM, Microsoft, HCL, Autodesk, Cisco, Dell | SVG |
| Client logos (6-8) | Elektroprivreda, BHTelecom, Arcelor Mittal, etc. | SVG/PNG |
| Product icons (6) | Simple line icons for each product category | SVG |
| Geodet screenshot | Clean capture from existing materials | WebP |
| Geodet feature visuals (3) | Screenshots or illustrations | WebP |
| Map pin | Custom golden marker | SVG |

### i18n scope

Two locales: `bs` (default), `en`. All UI strings and page content in JSON message files. Approximately 150-200 string keys total across 3 pages.

---

## 8. Deployment

- **Host**: Vercel (free tier sufficient for a demo)
- **URL**: Something like `its-revamp.vercel.app` or custom subdomain
- **Build**: `next build` with static export
- **CI**: Push to main triggers auto-deploy
- **Performance target**: Lighthouse 95+ across all categories

---

## 9. Out of Scope

- No CMS integration — content is hardcoded in JSON
- No backend / API routes — static site only
- No actual form submission — frontend validation + success state mock (or simple Formspree/Web3Forms integration)
- No product pages beyond Geodet — but the component structure supports adding more
- No blog/news detail pages — just cards linking to `#`
- No search functionality
- No e-commerce / webshop
- No Tawk.to or live chat integration
