import { test, expect } from './fixtures';

test('directory filters combine with search and can recover from empty results', async ({ page }) => {
  await page.goto('/apps/');
  await expect(page.locator('.choice-card')).toHaveCount(13);
  await page.getByRole('button', { name: 'Video', exact: true }).click();
  await expect(page.locator('.choice-card')).toHaveCount(2);
  await page.getByRole('searchbox', { name: 'Search apps' }).fill('Photoshop');
  await expect(page.getByText('No apps match')).toBeVisible();
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await page.getByRole('searchbox', { name: 'Search apps' }).fill('Photoshop');
  await expect(page.locator('.choice-card')).toHaveCount(1);
  await expect(page.locator('.choice-card h3')).toHaveText('PhotoCraft');
  await page.getByRole('button', { name: 'Reset filters' }).click();
  await expect(page.locator('.choice-card')).toHaveCount(13);
});

test('task shortcuts and product facts fit on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  for (const path of ['/', '/fr/']) {
    await page.goto(path);
    await expect(page.locator('.task-shortcuts a')).toHaveCount(6);
    expect(await page.locator('.task-shortcuts').evaluate(el => el.getBoundingClientRect().top)).toBeLessThan(700);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  for (const path of ['/apps/photocraft/', '/apps/pdfcraft/']) {
    await page.goto(path);
    await expect(page.locator('.product-quick-facts')).toContainText('Windows');
    expect(await page.locator('#download-heading').evaluate(el => el.getBoundingClientRect().top)).toBeLessThan(1100);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
});

test('directory remains readable without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/apps/');
  await expect(page.locator('.choice-card')).toHaveCount(13);
  await expect(page.locator('.directory-controls')).toBeHidden();
  await context.close();
});
