import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('submitting empty form shows validation errors', async ({ page }) => {
    await page.goto('/bs/kontakt/');
    await page.click('button:has-text("Pošaljite poruku")');
    await expect(page.locator('[role="alert"]').first()).toBeVisible();
  });

  test('filling all required fields and submitting shows success message', async ({ page }) => {
    await page.goto('/bs/kontakt/');

    await page.fill('input[placeholder="Unesite vaše ime"]', 'Test Korisnik');
    await page.fill('input[placeholder="vas@email.com"]', 'test@test.com');
    await page.click('button:has-text("Pošaljite poruku")');

    await expect(page.getByTestId('success-message')).toBeVisible();
    await expect(page.locator('text=Hvala')).toBeVisible();
  });
});
