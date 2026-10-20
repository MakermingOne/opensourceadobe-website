import { test, expect } from './fixtures';
import { translatedLocales } from '../../src/i18n/config';

test('October 20 issue retains original dates, 14 official releases and two reports', async ({ page, request }) => {
 await page.setViewportSize({width:390,height:844});
 await page.goto('/updates/2026-10-20/');
 await expect(page.locator('.update-entry')).toHaveCount(16);
 await expect(page.locator('.lede')).toContainText('not new October 20 releases');
 await expect(page.locator('#photocraft-0100-snapshot')).toContainText('2026-10-18');
 await expect(page.locator('#community-photocraft-brush-cursor-oct20')).toContainText('We have not reproduced');
 await expect(page.locator('#community-vectorcraft-pencil-oct20')).toContainText('Community report');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 const feed = await (await request.get('/updates/feed.xml')).text();
 expect(feed).toContain('/updates/2026-10-20/');
 const sitemap = await (await request.get('/sitemaps/en.xml')).text();
 expect(sitemap).toContain('/updates/2026-10-20/');
});

for (const locale of translatedLocales) test(`${locale} carries a dated translated digest and links to English evidence`, async ({ page }) => {
 await page.setViewportSize({width:375,height:844});
 await page.goto(`/${locale}/`);
 await expect(page.locator('#update-2026-10-20')).toContainText('PhotoCraft 0.10.0');
 await expect(page.locator('#update-2026-10-20 a')).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-20/');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
