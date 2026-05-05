import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('submitting empty form shows validation errors', async ({ page }) => {
    await page.goto('/bs/kontakt/');
    await page.click('button:has-text("Pošaljite poruku")');
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test('submitting without message shows validation error', async ({ page }) => {
    await page.goto('/bs/kontakt/');

    await page.fill('input[placeholder="Unesite vaše ime"]', 'Test Korisnik');
    await page.fill('input[placeholder="vas@email.com"]', 'test@test.com');
    // intentionally skip message field
    await page.check('input[type="checkbox"]');
    await page.click('button:has-text("Pošaljite poruku")');

    await expect(page.locator('[role="alert"]').first()).toBeVisible();
    await expect(page.getByTestId('success-message')).not.toBeVisible();
  });

  test('filling all required fields and submitting shows success message', async ({ page }) => {
    // Mock the Formspree endpoint so E2E tests don't hit the real API.
    // The dev server is started with NEXT_PUBLIC_FORMSPREE_ID=test_fake_id_qa (playwright.config.ts webServer.env).
    await page.route('https://formspree.io/**', async (route) => {
      await route.fulfill({ status: 200, body: JSON.stringify({ ok: true }) });
    });

    await page.goto('/bs/kontakt/');

    await page.fill('input[placeholder="Unesite vaše ime"]', 'Test Korisnik');
    await page.fill('input[placeholder="vas@email.com"]', 'test@test.com');
    await page.fill('textarea[placeholder="Kako vam možemo pomoći?"]', 'Test poruka za provjeru forme.');
    await page.check('input[type="checkbox"]');
    await page.click('button:has-text("Pošaljite poruku")');

    await expect(page.getByTestId('success-message')).toBeVisible();
    await expect(page.locator('text=Hvala')).toBeVisible();
  });
});
