import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('homepage loads at /bs/', async ({ page }) => {
    await page.goto('/bs/');
    await expect(page.locator('h1')).toContainText('softverska rješenja');
  });

  test('homepage loads at /en/', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('h1')).toContainText('software solutions');
  });

  test('clicking "Proizvodi" in nav scrolls to products section', async ({ page }) => {
    await page.goto('/bs/');
    await page.click('a[href="/bs/#proizvodi"]');
    await expect(page.locator('#proizvodi')).toBeInViewport();
  });

  test('clicking "Kontakt" in nav navigates to /bs/kontakt/', async ({ page }) => {
    await page.goto('/bs/');
    await page.click('nav a[href="/bs/kontakt/"]');
    await expect(page).toHaveURL(/\/bs\/kontakt/);
  });

  test('clicking language toggle EN switches to /en/', async ({ page }) => {
    await page.goto('/bs/');
    await page.click('a:has-text("EN")');
    await expect(page).toHaveURL(/\/en\//);
    await expect(page.locator('h1')).toContainText('software solutions');
  });

  test('clicking language toggle BS switches to /bs/', async ({ page }) => {
    await page.goto('/en/');
    await page.click('a:has-text("BS")');
    await expect(page).toHaveURL(/\/bs\//);
    await expect(page.locator('h1')).toContainText('softverska rješenja');
  });

  test('Geodet card links to /bs/proizvodi/geodet/', async ({ page }) => {
    await page.goto('/bs/');
    await page.click('a[href="/bs/proizvodi/geodet/"]');
    await expect(page).toHaveURL(/\/bs\/proizvodi\/geodet/);
    await expect(page.locator('h1')).toContainText('Geodet');
  });

  test('breadcrumb "Početna" on Geodet page links back to /bs/', async ({ page }) => {
    await page.goto('/bs/proizvodi/geodet/');
    await page.click('a:has-text("Početna")');
    await expect(page).toHaveURL(/\/bs\//);
  });
});
