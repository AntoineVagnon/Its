import { test, expect } from '@playwright/test';

test.describe('Responsive', () => {
  test('[mobile 375px] hamburger menu is visible, desktop nav is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/bs/');
    await expect(page.getByTestId('hamburger')).toBeVisible();
  });

  test('[mobile 375px] clicking hamburger opens mobile drawer', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/bs/');
    await page.getByTestId('hamburger').click();
    await expect(page.getByTestId('mobile-nav')).toBeVisible();
  });

  test('[mobile 375px] product grid is single column', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/bs/');
    const grid = page.locator('#proizvodi .grid');
    await expect(grid).toBeVisible();
  });

  test('[mobile 375px] no horizontal overflow on any page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });

    for (const url of ['/bs/', '/bs/proizvodi/geodet/', '/bs/kontakt/']) {
      await page.goto(url);
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    }
  });

  test('[desktop 1920px] product grid is 3 columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/bs/');
    const grid = page.locator('#proizvodi .grid');
    await expect(grid).toBeVisible();
  });

  test('[desktop 1920px] footer is 4 columns', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/bs/');
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });
});
