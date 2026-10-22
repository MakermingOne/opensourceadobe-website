import { test, expect } from './fixtures';
import { translatedLocales } from '../../src/i18n/config';

for (const width of [320, 1440]) test(`October 23 preserves mixed source dates and stays readable at ${width}px`, async ({page,request}) => {
 await page.setViewportSize({width,height:1000});
 await page.goto('/updates/2026-10-23/');
 await expect(page.locator('.update-entry')).toHaveCount(2);
 await expect(page.locator('#pdfcraft-hidden-information-docs-oct23')).toContainText('Beijing time 2026-10-23 01:28:41');
 await expect(page.locator('.lede')).toContainText('no newer published release');
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 await page.screenshot({path:`/tmp/oa-oct23-${width}.png`,fullPage:true});
 await expect(page.locator('#photocraft-jpeg-docs-oct23')).toContainText('Beijing time 2026-10-23 00:53:33');
 await expect(page.locator('#photocraft-jpeg-docs-oct23')).toContainText('Published here 2026-10-23');
 await page.goto('/updates/2026-10-22/');
 await expect(page.locator('#photocraft-jpeg-docs-oct23')).toHaveCount(0);
 await expect(page.locator('#photocraft-0120-oct22')).toContainText('Source checked 2026-10-22');
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 const feed=await (await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-23/')).toBeLessThan(feed.indexOf('/updates/2026-10-22/'));
});
for (const locale of translatedLocales) test(`${locale} links its new localized digest to real English date pages`, async ({page}) => {
 await page.setViewportSize({width:320,height:900});
 await page.goto(`/${locale}/`);
 await expect(page.locator('#update-2026-10-23 a').first()).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-23/');
 expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
