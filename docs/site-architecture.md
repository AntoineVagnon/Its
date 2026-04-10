# ITS.ba — Site Architecture Documentation

> **Company**: iT Systems d.o.o. Sarajevo
> **URL**: https://its.ba
> **Captured**: 2026-02-22
> **Purpose**: Foundation document for future site revamp demonstration

---

## 4.1 — Site Map

```
its.ba/
├── / (Pocetna — Homepage)
├── /proizvodi/ (Products landing)
│   ├── Geodezija (Geodesy)
│   │   ├── /proizvodi/geodet/ — Geodet
│   │   ├── /geodezija/geodet-profili-aplikacija-za-iscrtavanje-geodetskih-profila-terena/ — Geodet Profili
│   │   ├── /geodezija/harmonizacija-grunta-i-katastra/ — Harmonizacija grunta i katastra
│   │   └── Digitalizacija katastra (no active link)
│   ├── Javna uprava (Public Administration)
│   │   ├── Dokup staza (no active link)
│   │   ├── /javna-uprava/e-maticar-aplikacija-za-automatizaciju-maticnih-ureda/ — e-Maticar
│   │   ├── Evidencija nezaposlenih (no active link)
│   │   ├── /javna-uprava/novcana-naknada-its-automatizacija-isplata-nezaposlenim-osobama/ — Novcana naknada
│   │   ├── Podsticajne mjere zaposljavanja (no active link)
│   │   ├── /javna-uprava/poljoprivredni-podsticaji/ — Poljo-podsticaji
│   │   ├── /javna-uprava/radne-dozvole-za-strane-drzavljane/ — Radne dozvole
│   │   └── Sistem elektronskog obavjestavanja (no active link)
│   ├── Evidencije (Records)
│   │   ├── e-Ordinacija (no active link)
│   │   ├── Evidencija clanstva (no active link)
│   │   ├── /evidencije/softver-za-evidenciju-radnog-vremena-i-kontrolu-pristupa-ervip/ — ERVIP
│   │   └── /evidencije/kadrovska-evidencija/ — Kadrovska evidencija
│   ├── Dalekovodi (Power Lines)
│   │   ├── /dalekovodi/softverski-paket-dkv-pro-projektovanje-dalekovoda/ — DKV-PRO
│   │   ├── /dalekovodi/raspored-dalekovodnih-stubova/ — Raspored stubova
│   │   └── /dalekovodi/elmeh-elektromehanicki-proracun-dalekovoda/ — Elmeh
│   ├── Upravljanje dokumentima (Document Management)
│   │   ├── Arhiviranje dokumenata (no active link)
│   │   └── /upravljanje-dokumentima/proman-elektronsko-upravljanje-procesima-i-dokumentima/ — ProMan
│   ├── /terminos-aplikacija-za-rezervaciju-termina/ — Terminos
│   ├── /proizvodi/helpdesk-online-podrska-korisnicima/ — Help Desk
│   ├── /hcl-softveri/ — HCL Softveri
│   ├── /bricsys-softveri/ — Bricsys softveri
│   ├── /zwcad/ — ZWCAD
│   └── /autodesk/ — AUTODESK
├── /usluge/ (Services)
│   ├── Web dizajn i hosting
│   └── Webshop PCPRODAJA
├── /partneri/ (Partners)
├── /novosti/ (News)
├── /o-nama/ (About Us)
├── /kontakt/ (Contact)
├── Podrska (Support — external portal)
├── Upit za ponudu (Request Quote)
└── Downloads
```

**Notes**: Several product subpages under Javna uprava and Evidencije have menu entries but no active links (placeholder items). Product URLs follow inconsistent patterns — some are under `/proizvodi/`, others under their category slug (e.g. `/geodezija/`, `/dalekovodi/`).

---

## 4.2 — Tech Stack

| Component | Technology | Details |
|-----------|-----------|---------|
| **CMS** | WordPress | Custom theme based on "Factory Commerce Gurus" |
| **Page Builder** | WPBakery (Visual Composer) | `.vc_row`, `.wpb_row`, `.wpb_text_column` classes throughout |
| **Slider** | LayerSlider 6.8.4 | Homepage hero slider |
| **Forms** | Contact Form 7 | Contact page, quote request forms |
| **Analytics** | Google Analytics (UA) | `UA-119325305-1` |
| **Analytics** | Google Analytics 4 | `G-H3VE8R2PH0` |
| **Live Chat** | Tawk.to | Floating widget on all pages |
| **Security** | Google reCAPTCHA v2 | Sitekey: `6LcvcSEaAAAAAJrLxM-puoygDmP6dqUM3RrQYAJo` |
| **Translation** | Google Translate widget | Top-left "Translate" button; supports EN, FR, IT, MK, SL, TR |
| **Downloads** | WP Download Manager (WPDM) | Software downloads section |
| **Fonts** | Google Fonts | Roboto, Roboto Condensed, Pathway Gothic One |
| **JavaScript** | jQuery | Core WordPress dependency |
| **Hosting** | Unknown | Domain registered under `.ba` (Bosnia) |

---

## 4.3 — Homepage Section Inventory

The homepage is composed of **10 content rows** plus header and footer, flowing top-to-bottom:

### Section 1: Top Utility Bar
- **Purpose**: Contact info and social links quick-access strip
- **Content**: Address "Paromlinska 34, 71000 Sarajevo" | Phone "+387 (0)33 941 461" | Social icons (Facebook, Twitter, LinkedIn, Google+, YouTube) | Language flag
- **Layout**: Full-width dark bar, single row, left-right split
- **Screenshot**: `homepage-section-hero-clean.png` (visible at top)

### Section 2: Main Navigation Bar
- **Purpose**: Primary site navigation with branding
- **Content**: iT SYSTEMS logo (left) | Quick links "Razvoj aplikativnog softvera", "Web dizajn i hosting", "Prodaja WEBSHOP" | Search box | Main nav: POCETNA, PROIZVODI, USLUGE, PARTNERI, NOVOSTI, O NAMA, KONTAKT, PODRSKA, DOWNLOADS, UPIT ZA PONUDU
- **Layout**: Full-width, two-tier — top row has logo + utility links + search; bottom row has orange-highlighted navigation tabs
- **Screenshot**: `homepage-section-hero-clean.png`, `homepage-section-row-0.png`

### Section 3: Hero Slider
- **Purpose**: Main brand statement and call-to-action
- **Content**: Full-width image of businessman with tablet, hexagonal overlay pattern. Headline: *"Pretvaramo velike ideje u sjajne proizvode"* (We transform big ideas into excellent products). CTA button: "Posaljite nam Upit" (Send us an inquiry). Badge overlays: IBM Domino 10 Partner Ready, Geodet 2025 Recommended Software
- **Layout**: Full-width LayerSlider, ~600px tall, centered text with translucent CTA button
- **Screenshot**: `homepage-section-row-0.png`, `homepage-section-hero-area.png`

### Section 4: Certification Badges Bar
- **Purpose**: Display partner/certification badges
- **Content**: HCL Domino logo and badge prominently displayed
- **Layout**: Right-aligned within the hero slider area
- **Screenshot**: `homepage-section-row-0.png` (bottom portion)

### Section 5: Company Introduction + Product Grid
- **Purpose**: Brief company intro followed by featured products
- **Content**: Italicized intro text: *"iT SYSTEMS se bavi projektovanjem, razvojem i odrzavanjem poslovnih softvera, kao sistem integrator svojim korisnicima nudi cjelovita informaticka i poslovna rjesenja."* + "Zatrazite ponudu" link. Then 6 products in a 3x2 grid:
  - **Row 1**: Geodet | Geodet Profili | Elektronski protokol (ProMan)
  - **Row 2**: DKV PRO | ERVIP (time tracking) | Help Desk
- **Layout**: Centered text intro, then 3-column product card grid with image thumbnails and short descriptions
- **Screenshot**: `homepage-section-row-1.png`, `homepage-section-row-2.png`, `homepage-section-row-3.png`, `homepage-section-product-grid.png`

### Section 6: About Us Summary
- **Purpose**: Business philosophy and mission
- **Content**: Heading "O Nama". Two paragraphs describing customer-first philosophy and commitment to quality-price ratio for software products and services.
- **Layout**: Two-column — heading left, text right. White background.
- **Screenshot**: `homepage-section-row-4.png`, `homepage-section-about-description.png`

### Section 7: Tagline Banner
- **Purpose**: Brand tagline / mission statement
- **Content**: *"Information technology for modern age"* in quotes
- **Layout**: Full-width golden/yellow (#eabb00) background bar, centered dark text
- **Screenshot**: `homepage-section-row-5.png`

### Section 8: Contact / Partnership CTA
- **Purpose**: Invite potential distributors and partners
- **Content**: Heading "Kontakt". Text inviting distributors with competitive quality and price terms. Phone: +387(0)33 941 461, Viber: +387(0)61 150 009. "Kontaktirajte nas" link.
- **Layout**: Two-column — heading left, text right. White background.
- **Screenshot**: `homepage-section-row-6.png`

### Section 9: Newsletter Signup + Social Media
- **Purpose**: Email subscription and social media follow
- **Content**: Text: "Budite u toku - prijavite se na nas newsletter i pratite nas na drustvenim mrezama". Email input field with golden "PRIJAVI SE" (Subscribe) button. Social icons: Facebook, Twitter, LinkedIn, Google+, YouTube.
- **Layout**: Centered, stacked — text, then form, then social icons. Light background.
- **Screenshot**: `homepage-section-row-7.png`

### Section 10: Footer
- **Purpose**: Site-wide footer with company info, news, solutions, and contact
- **Content**: Four columns:
  1. **O NAMA**: Company description paragraph
  2. **NAJNOVIJE VIJESTI**: 3 recent news items with dates
  3. **SOLUCIJE**: Product links (Geodet, Geodet Profili, Elektronski protokol, DKV-PRO, ERVIP)
  4. **KONTAKT**: Address, phone, hours, email with 24h response pledge
- **Layout**: Dark background (#222222), 4-column grid, white/light text
- **Screenshot**: `homepage-section-footer.png`

### Section 11: Copyright Bar
- **Purpose**: Legal footer
- **Content**: "2026 (c) Powered by iT Systems"
- **Layout**: Narrow bar below footer, lighter background (#eeeeee)
- **Screenshot**: `homepage-section-row-9.png`

---

## 4.4 — Products Inventory

### In-House Software Products

| Product | Category | Description | URL |
|---------|----------|-------------|-----|
| **Geodet** | Geodezija | Automated geodetic data processing — supports Topcon, Leica, Sokkia, Trimble, Nikon, Ruide. Generates standard geodetic forms (TZ, O1i2, etc.) in Excel. Includes coordinate transformation module (KOORDTRANS). Standard: EUR 1,000 / Premium: EUR 1,200. | `/proizvodi/geodet/` |
| **Geodet Profili** | Geodezija | Terrain profile visualization and drawing tool. Version 6 includes parallel profile drawing, flexible data import, USB licensing. | `/geodezija/geodet-profili-...` |
| **Harmonizacija grunta i katastra** | Geodezija | Ground and cadastral data harmonization system | `/geodezija/harmonizacija-...` |
| **Digitalizacija katastra** | Geodezija | Cadastre digitalization (no active page) | — |
| **ProMan (Elektronski protokol)** | Upravljanje dokumentima | Electronic document and process management. Tracks correspondence, faxes, emails, meeting minutes. Centralized client database with smart forms. | `/upravljanje-dokumentima/proman-...` |
| **DKV-PRO** | Dalekovodi | Power line engineering software suite. Modules: Longitudinal Profiles, Pole Arrangement, Elmeh (electromechanical calculations). Outputs to AutoCAD, BricsCAD, ZWCAD. USB dongle licensing. | `/dalekovodi/softverski-paket-dkv-pro-...` |
| **Raspored stubova** | Dalekovodi | Pole arrangement module for DKV-PRO | `/dalekovodi/raspored-...` |
| **Elmeh** | Dalekovodi | Electromechanical calculations for conductors and earth wires | `/dalekovodi/elmeh-...` |
| **ERVIP** | Evidencije | Work time tracking and access control software with biometric terminal support (Dahua face recognition visible in screenshots) | `/evidencije/softver-za-evidenciju-...` |
| **Kadrovska evidencija** | Evidencije | HR/personnel records management | `/evidencije/kadrovska-evidencija/` |
| **Help Desk** | Podrska | Online user support ticketing system | `/proizvodi/helpdesk-...` |
| **Terminos** | Ostalo | Appointment and reservation booking system | `/terminos-aplikacija-...` |

### Public Administration Products

| Product | Category | Description |
|---------|----------|-------------|
| **e-Maticar** | Javna uprava | Civil registry office automation |
| **Novcana naknada** | Javna uprava | Unemployment benefit payment automation |
| **Poljo-podsticaji** | Javna uprava | Agricultural incentives management |
| **Radne dozvole** | Javna uprava | Work permit management for foreign nationals |
| **Dokup staza** | Javna uprava | Service years purchase system (no active link) |
| **Evidencija nezaposlenih** | Javna uprava | Unemployment records (no active link) |
| **Podsticajne mjere** | Javna uprava | Employment incentive measures (no active link) |
| **e-Ordinacija** | Evidencije | Medical practice management (no active link) |
| **Evidencija clanstva** | Evidencije | Membership records (no active link) |

### Resold / Partner Software

| Product | Type |
|---------|------|
| **HCL Softveri** | IBM/HCL Domino collaboration suite |
| **Bricsys softveri** | BricsCAD — CAD software |
| **ZWCAD** | CAD software alternative |
| **AUTODESK** | AutoCAD and related products |

---

## 4.5 — Navigation Structure

### Primary Navigation Bar (orange tabs)
1. **POCETNA** → `/`
2. **PROIZVODI** → `/proizvodi/` (mega-dropdown with 6 category groups, ~25 items)
3. **USLUGE** → `/usluge/` (dropdown: Web dizajn i hosting, Webshop PCPRODAJA)
4. **PARTNERI** → `/partneri/`
5. **NOVOSTI** → `/novosti/`
6. **O NAMA** → `/o-nama/`
7. **KONTAKT** → `/kontakt/`
8. **PODRSKA** → External support portal
9. **DOWNLOADS** → Downloads section (highlighted yellow)
10. **UPIT ZA PONUDU** → Quote request (highlighted yellow with arrow icon)

### Top Utility Bar Links
- **Razvoj aplikativnog softvera** (Application software development)
- **Web dizajn i hosting** (Web design and hosting)
- **Prodaja WEBSHOP** (Sales webshop — external: pcprodaja.ba)

### Footer Link Structure
| Column | Links |
|--------|-------|
| **O NAMA** | Company description text (no links) |
| **NAJNOVIJE VIJESTI** | 3 latest news articles with dates |
| **SOLUCIJE** | Geodet, Geodet Profili, Elektronski protokol, DKV-PRO, ERVIP |
| **KONTAKT** | Address, phone, email (no page links) |

### External Links
- **Support portal**: Podrska link (likely helpdesk.its.ba or similar)
- **Webshop**: pcprodaja.ba (PC Prodaja online store)
- **Social media**: Facebook, Twitter, LinkedIn, Google+, YouTube
- **Tawk.to**: Live chat widget on all pages

---

## 4.6 — Design Observations

### Color Palette

| Swatch | Hex | Usage |
|--------|-----|-------|
| Golden Yellow | `#eabb00` | Primary accent — CTA buttons, nav highlights, tagline banner, "Subscribe" button |
| Blue | `#117abc` | Links, product title hover states |
| Dark Gray | `#222222` | Footer background, header utility bar |
| Text Dark | `#333333` | Body text |
| Light Gray | `#f8f8f8` | Page background |
| White | `#ffffff` | Content area background, cards |
| Light Footer | `#eeeeee` | Copyright bar background |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Roboto** | 400, 700 | Primary body text |
| **Roboto Condensed** | 400, 700 | Headings, navigation items |
| **Pathway Gothic One** | 400 | Logo/brand elements |

### Layout Patterns
- **Page width**: Content constrained to ~1100px max-width, centered
- **Grid system**: WPBakery's 12-column grid (`.vc_col-sm-*` classes)
- **Product cards**: 3-column grid with thumbnail image + title + one-line description
- **Content sections**: Alternating full-width colored bars and white content areas
- **Two-column pattern**: Used for "O Nama" and "Kontakt" sections (heading left, text right)

### Responsive Behavior
- **Breakpoint**: ~1100px triggers mobile layout
- **Mobile nav**: Hamburger menu replaces horizontal tabs
- **Product grid**: Collapses from 3-column to single-column stack
- **Footer**: 4 columns collapse to stacked single-column
- **Hero slider**: Scales down but text can become crowded on mobile
- **Google Translate**: Widget persists on mobile, takes up header space

### Pain Points and Opportunities for Improvement

1. **Inconsistent URL structure**: Product pages use at least 4 different URL patterns (`/proizvodi/`, `/geodezija/`, `/dalekovodi/`, root-level). This hurts SEO and maintainability.

2. **Dead navigation links**: Multiple menu items (Dokup staza, e-Ordinacija, Evidencija clanstva, etc.) link to non-existent pages — confusing for users.

3. **Outdated tech stack**: WPBakery page builder, LayerSlider 6.8.4, Google+ social link (discontinued in 2019), UA analytics (deprecated, should be GA4-only).

4. **No clear value proposition hierarchy**: Homepage jumps from hero slider directly into a product grid without establishing the company's unique differentiators or customer outcomes.

5. **Product grid images are inconsistent**: Mix of software screenshots, stock photos, clipart-style graphics, and product box renders. No unified visual language.

6. **Missing product pages**: Several products listed in navigation have no active landing pages, suggesting incomplete content migration or abandoned products.

7. **No social proof section**: No customer testimonials, case studies, or client logos on the homepage despite having notable clients (Elektroprivreda BiH, BHTelecom, government municipalities).

8. **Contact-heavy footer**: Footer duplicates contact info already in the utility bar. Space could be better used for trust signals or product categories.

9. **Tagline banner is underutilized**: The golden "Information technology for modern age" bar is generic and doesn't communicate a specific differentiator.

10. **Mobile experience**: Google Translate widget consumes valuable viewport space. Navigation mega-dropdown for products is difficult to navigate on touch devices.

11. **No clear conversion funnel**: CTA buttons are sparse. "Posaljite nam Upit" in the hero is the only prominent CTA above the fold. No product-specific CTAs in the product grid.

12. **News section is sparse**: Only 3 articles visible, the most recent from May 2025. Irregular publishing cadence undermines credibility.

13. **Performance concerns**: Multiple third-party scripts (Tawk.to, Google Translate, reCAPTCHA, GA UA + GA4, LayerSlider) add significant page weight.

14. **Accessibility**: No visible WCAG compliance indicators. Color contrast on golden (#eabb00) backgrounds with dark text may be borderline.

---

## 4.7 — Contact & Company Info

### Company Details
- **Legal name**: iT Systems d.o.o. Sarajevo
- **Address**: Paromlinska 34, 71000 Sarajevo, Bosnia and Herzegovina
- **Phone**: +387 (0)33 941 461
- **Viber**: +387 (0)61 150 009
- **Email**: info@its.ba
- **Website**: https://its.ba
- **Hours**: Monday–Friday, 9:00–17:00
- **Response time**: Inquiries answered within 24 hours

### Social Media
| Platform | URL |
|----------|-----|
| Facebook | facebook.com/ITSYSTEMSdoo/ |
| Twitter | twitter.com/ITSystemsSA |
| LinkedIn | linkedin.com/company/it-systems-sarajevo |
| YouTube | youtube.com/channel/UChnMhafsIpjAN5eusiJdxYg |
| Google+ | (Discontinued — link still present on site) |

### Partner Relationships

**Hardware Partners**: IBM, Dell, Lenovo, MSI, Grandstream, Allied Telesis, Hikvision, Panduit, Mean Well, Sangoma, Snom, Conteg, Tring, Chuwi, Juniper, Cisco, Avaya, Huawei, Synology, HP, Dahua

**Software Partners**: Microsoft, Autodesk, McAfee, Kaspersky, Symantec, Checkpoint, Veeam, Fortinet, Barracuda, HCL, Sophos, Micro Focus, ACDSee, Bricsys, ZWCAD

### Key Clients

| Sector | Clients |
|--------|---------|
| **Government** | Federal Ministry of Labor, Federal Employment Bureau, Municipalities of Derventa, Cazin, Centar Sarajevo, Novo Sarajevo, Novi Grad, Ilidza, Gorazde, Citluk, Livno, Bosanska Krupa, Kljuc |
| **Geodesy** | BNPro, BHTelecom, Divel, Elektroprivreda BH, Geomap, Geowild, Grakop, HEIS, Energy Investment, IPSA Institute, Arcelor Mittal |
| **Power Lines** | Elektroprivreda HZHB, Elektroprijenos BiH, Energoinvest, UMEL Dalekomontaza, Electroteam |
| **Time Tracking** | PayTen, Asseco, Dezen Furniture, Pero Zenica |

### Distributors
Geodet, BNPro, Geowild, Timecode

---

## Screenshot Inventory

### Page Screenshots (3 viewports x 2 types each)

| Page | Desktop | Tablet | Mobile |
|------|---------|--------|--------|
| Homepage | `homepage-desktop-full.png`, `homepage-desktop-fold.png` | `homepage-tablet-full.png`, `homepage-tablet-fold.png` | `homepage-mobile-full.png`, `homepage-mobile-fold.png` |
| About | `about-desktop-full.png`, `about-desktop-fold.png` | `about-tablet-full.png`, `about-tablet-fold.png` | `about-mobile-full.png`, `about-mobile-fold.png` |
| Services | `services-desktop-full.png`, `services-desktop-fold.png` | `services-tablet-full.png`, `services-tablet-fold.png` | `services-mobile-full.png`, `services-mobile-fold.png` |
| Partners | `partners-desktop-full.png`, `partners-desktop-fold.png` | `partners-tablet-full.png`, `partners-tablet-fold.png` | `partners-mobile-full.png`, `partners-mobile-fold.png` |
| Contact | `contact-desktop-full.png`, `contact-desktop-fold.png` | `contact-tablet-full.png`, `contact-tablet-fold.png` | `contact-mobile-full.png`, `contact-mobile-fold.png` |
| News | `news-desktop-full.png`, `news-desktop-fold.png` | `news-tablet-full.png`, `news-tablet-fold.png` | `news-mobile-full.png`, `news-mobile-fold.png` |
| Products | `products-desktop-full.png`, `products-desktop-fold.png` | `products-tablet-full.png`, `products-tablet-fold.png` | `products-mobile-full.png`, `products-mobile-fold.png` |
| Geodet | `product-geodet-desktop-full.png`, `-fold.png` | `product-geodet-tablet-full.png`, `-fold.png` | `product-geodet-mobile-full.png`, `-fold.png` |
| Geodet Profili | `product-geodet-profili-desktop-full.png`, `-fold.png` | `product-geodet-profili-tablet-full.png`, `-fold.png` | `product-geodet-profili-mobile-full.png`, `-fold.png` |
| ProMan | `product-proman-desktop-full.png`, `-fold.png` | `product-proman-tablet-full.png`, `-fold.png` | `product-proman-mobile-full.png`, `-fold.png` |
| DKV-PRO | `product-dkv-pro-desktop-full.png`, `-fold.png` | `product-dkv-pro-tablet-full.png`, `-fold.png` | `product-dkv-pro-mobile-full.png`, `-fold.png` |
| ERVIP | `product-ervip-desktop-full.png`, `-fold.png` | `product-ervip-tablet-full.png`, `-fold.png` | `product-ervip-mobile-full.png`, `-fold.png` |
| Terminos | `product-terminos-desktop-full.png`, `-fold.png` | `product-terminos-tablet-full.png`, `-fold.png` | `product-terminos-mobile-full.png`, `-fold.png` |
| Help Desk | `product-helpdesk-...-desktop-full.png`, `-fold.png` | `...-tablet-full.png`, `-fold.png` | `...-mobile-full.png`, `-fold.png` |

### Homepage Section Screenshots (desktop only)

| Screenshot | Content |
|------------|---------|
| `homepage-section-hero-area.png` | Top 700px — utility bar + nav + hero slider |
| `homepage-section-hero-clean.png` | Full above-the-fold (1920x1080) — hero + beginning of products |
| `homepage-section-product-grid.png` | Product card grid (all 6 products) |
| `homepage-section-about-description.png` | "O Nama" two-column section |
| `homepage-section-footer.png` | Full dark footer with 4 columns |
| `homepage-section-row-0.png` | Hero slider with badges |
| `homepage-section-row-1.png` | Company intro + first row of products (Geodet, Geodet Profili, ProMan) |
| `homepage-section-row-2.png` | First row of product cards (closer crop) |
| `homepage-section-row-3.png` | Second row of product cards (DKV-PRO, ERVIP, Help Desk) |
| `homepage-section-row-4.png` | "O Nama" section |
| `homepage-section-row-5.png` | Golden tagline banner "Information technology for modern age" |
| `homepage-section-row-6.png` | Contact/partnership invitation section |
| `homepage-section-row-7.png` | Newsletter signup + social media icons |
| `homepage-section-row-8.png` | Newsletter header (duplicate/overlap) |
| `homepage-section-row-9.png` | Copyright bar |

**Total**: 97 screenshots captured across 14 pages, 3 viewports, and 15 homepage sections.
