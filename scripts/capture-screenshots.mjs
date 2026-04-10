import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SCREENSHOTS_DIR = join(ROOT, 'screenshots');

if (!existsSync(SCREENSHOTS_DIR)) {
  mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const BASE_URL = 'https://its.ba';

const PAGES = [
  { url: '/', name: 'homepage' },
  { url: '/o-nama/', name: 'about' },
  { url: '/usluge/', name: 'services' },
  { url: '/partneri/', name: 'partners' },
  { url: '/kontakt/', name: 'contact' },
  { url: '/novosti/', name: 'news' },
  { url: '/proizvodi/', name: 'products' },
];

// Product subpages — will be discovered dynamically from /proizvodi/ page
const KNOWN_PRODUCT_SUBPAGES = [
  { url: '/proizvodi/geodet/', name: 'product-geodet' },
  { url: '/proizvodi/geodet-profili/', name: 'product-geodet-profili' },
  { url: '/proizvodi/proman/', name: 'product-proman' },
  { url: '/proizvodi/dkv-pro/', name: 'product-dkv-pro' },
  { url: '/proizvodi/ervip/', name: 'product-ervip' },
  { url: '/proizvodi/help-desk/', name: 'product-help-desk' },
  { url: '/proizvodi/terminos/', name: 'product-terminos' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 },
];

// Homepage sections to attempt to capture individually (desktop only)
const HOMEPAGE_SECTIONS = [
  { selector: 'header, .site-header, #masthead, nav.navbar, .navbar', name: 'header-nav' },
  { selector: '.ls-wp-container, .layerslider, .rev_slider, .hero-section, .slider, .wpb_revslider_element', name: 'hero-slider' },
  { selector: '.products-grid, .product-grid, .vc_row:has(.product), .wpb_row:nth-of-type(2)', name: 'product-grid' },
  { selector: '.about-section, .about-us, .vc_row:has(.wpb_text_column):nth-of-type(3)', name: 'about-description' },
  { selector: 'footer, .site-footer, #colophon, .footer', name: 'footer' },
];

async function dismissOverlays(page) {
  // Dismiss cookie banners, popups, chat widgets etc.
  try {
    // Try common cookie consent selectors
    const cookieSelectors = [
      '[class*="cookie"] button[class*="accept"]',
      '[class*="cookie"] button[class*="close"]',
      '[id*="cookie"] button',
      '.cc-dismiss',
      '.cc-btn',
      '#accept-cookies',
      '.cookie-consent button',
      '[class*="gdpr"] button',
    ];
    for (const sel of cookieSelectors) {
      const btn = page.locator(sel).first();
      if (await btn.isVisible({ timeout: 500 }).catch(() => false)) {
        await btn.click();
        await page.waitForTimeout(300);
        break;
      }
    }
  } catch { /* ignore */ }

  // Hide Tawk.to chat widget
  try {
    await page.evaluate(() => {
      const tawk = document.querySelector('#tawk-default-container, .tawk-min-container, [class*="tawk"]');
      if (tawk) tawk.style.display = 'none';
      // Also hide Google Translate bar if present
      const gbar = document.querySelector('.goog-te-banner-frame, #goog-gt-tt');
      if (gbar) gbar.style.display = 'none';
    });
  } catch { /* ignore */ }
}

async function capturePageScreenshots(page, pageInfo, viewport) {
  const url = `${BASE_URL}${pageInfo.url}`;
  const prefix = `${pageInfo.name}-${viewport.name}`;

  console.log(`  Capturing ${prefix}...`);

  await page.setViewportSize({ width: viewport.width, height: viewport.height });

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch {
    // Fall back to domcontentloaded if networkidle times out
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(3000);
    } catch (e) {
      console.log(`    SKIP: Could not load ${url} — ${e.message}`);
      return;
    }
  }

  await page.waitForTimeout(1500); // Let animations/lazy images settle
  await dismissOverlays(page);

  // Full-page screenshot
  await page.screenshot({
    path: join(SCREENSHOTS_DIR, `${prefix}-full.png`),
    fullPage: true,
  });

  // Above-the-fold (viewport only)
  await page.screenshot({
    path: join(SCREENSHOTS_DIR, `${prefix}-fold.png`),
    fullPage: false,
  });
}

async function captureHomepageSections(page) {
  console.log('\n  Capturing homepage sections (desktop)...');

  await page.setViewportSize({ width: 1920, height: 1080 });

  try {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle', timeout: 30000 });
  } catch {
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(3000);
  }

  await page.waitForTimeout(2000);
  await dismissOverlays(page);

  for (const section of HOMEPAGE_SECTIONS) {
    try {
      // Try each comma-separated selector
      const selectors = section.selector.split(',').map(s => s.trim());
      let captured = false;

      for (const sel of selectors) {
        try {
          const el = page.locator(sel).first();
          if (await el.isVisible({ timeout: 2000 }).catch(() => false)) {
            await el.screenshot({
              path: join(SCREENSHOTS_DIR, `homepage-section-${section.name}.png`),
            });
            console.log(`    Captured section: ${section.name} (via ${sel})`);
            captured = true;
            break;
          }
        } catch { /* try next selector */ }
      }

      if (!captured) {
        console.log(`    SKIP section: ${section.name} — no matching visible element`);
      }
    } catch (e) {
      console.log(`    SKIP section: ${section.name} — ${e.message}`);
    }
  }

  // Also try to capture all .vc_row / .wpb_row sections by index
  try {
    const rows = page.locator('.vc_row, .wpb_row, .elementor-section');
    const count = await rows.count();
    console.log(`\n    Found ${count} content rows on homepage`);

    for (let i = 0; i < Math.min(count, 10); i++) {
      try {
        const row = rows.nth(i);
        if (await row.isVisible({ timeout: 1000 }).catch(() => false)) {
          const box = await row.boundingBox();
          if (box && box.height > 20) {
            await row.screenshot({
              path: join(SCREENSHOTS_DIR, `homepage-section-row-${i}.png`),
            });
            console.log(`    Captured row ${i} (${Math.round(box.height)}px tall)`);
          }
        }
      } catch { /* skip row */ }
    }
  } catch (e) {
    console.log(`    Could not enumerate rows: ${e.message}`);
  }
}

async function discoverProductSubpages(page) {
  console.log('\nDiscovering product subpages...');
  try {
    await page.goto(`${BASE_URL}/proizvodi/`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);

    const links = await page.evaluate((base) => {
      const anchors = document.querySelectorAll('a[href]');
      const productLinks = [];
      for (const a of anchors) {
        const href = a.href;
        if (href.startsWith(base + '/proizvodi/') && href !== base + '/proizvodi/') {
          const path = new URL(href).pathname;
          if (path !== '/proizvodi/' && !productLinks.some(l => l.url === path)) {
            productLinks.push({ url: path, name: 'product-' + path.split('/').filter(Boolean).pop() });
          }
        }
      }
      return productLinks;
    }, BASE_URL);

    if (links.length > 0) {
      console.log(`  Found ${links.length} product subpages: ${links.map(l => l.name).join(', ')}`);
      return links;
    }
  } catch (e) {
    console.log(`  Could not discover products: ${e.message}`);
  }

  console.log('  Using known product subpages as fallback');
  return KNOWN_PRODUCT_SUBPAGES;
}

async function main() {
  console.log('=== ITS.ba Screenshot Capture ===\n');
  console.log(`Output: ${SCREENSHOTS_DIR}\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: 'bs-BA',
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  // Discover product subpages first
  const productSubpages = await discoverProductSubpages(page);
  const allPages = [...PAGES, ...productSubpages];

  console.log(`\nCapturing ${allPages.length} pages across ${VIEWPORTS.length} viewports...\n`);

  // Capture each page at each viewport
  for (const pageInfo of allPages) {
    console.log(`\nPage: ${pageInfo.name} (${pageInfo.url})`);
    for (const viewport of VIEWPORTS) {
      await capturePageScreenshots(page, pageInfo, viewport);
    }
  }

  // Capture homepage sections
  await captureHomepageSections(page);

  await browser.close();

  // Summary
  const { readdirSync } = await import('fs');
  const files = readdirSync(SCREENSHOTS_DIR).filter(f => f.endsWith('.png'));
  console.log(`\n=== Done! ${files.length} screenshots saved to screenshots/ ===`);
  files.forEach(f => console.log(`  ${f}`));
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
