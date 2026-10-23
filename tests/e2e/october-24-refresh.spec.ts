import { test, expect } from './fixtures';
import { translatedLocales, localizedPaths } from '../../src/i18n/config';

for (const width of [320, 1440]) test(`October 24 check preserves event dates and download layout at ${width}px`, async ({page,request}) => {
 await page.setViewportSize({width,height:1000});
 for (const path of ['/updates/2026-10-24/','/updates/2026-10-23/','/download/','/apps/photocraft/','/apps/pdfcraft/']) {
  await page.goto(path);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),path).toBe(true);
  if (path === '/updates/2026-10-24/') await expect(page.locator('.lede')).toContainText('no October 24 release');
  if (path === '/updates/2026-10-23/') {
   await expect(page.locator('.update-entry')).toHaveCount(23);
   await expect(page.locator('#photocraft-0140-oct23')).toContainText('Source checked 2026-10-24');
   await expect(page.locator('#photocraft-0140-oct23')).toContainText('Beijing time 2026-10-23 08:43:42');
   await expect(page.locator('#photocraft-jpeg-docs-oct23')).toContainText('Source checked 2026-10-23');
  }
 }
 await page.goto('/updates/2026-10-24/');
 await page.screenshot({path:`/tmp/oa-oct24-${width}.png`,fullPage:true});
 const feed=await (await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-24/')).toBeLessThan(feed.indexOf('/updates/2026-10-23/'));
});
for (const locale of translatedLocales) test(`${locale} current summary links both real event and check dates`,async ({page,request})=>{
 await page.setViewportSize({width:320,height:900});
 for (const path of localizedPaths(locale)) {
  const response=await page.goto(`/${locale}${path}`);
  expect(response?.ok()).toBe(true);
  await expect(page.locator('#update-2026-10-24')).toContainText('PhotoCraft 0.14.0');
  await expect(page.locator('#update-2026-10-24 a').first()).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-23/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 }
 expect((await request.get(`/sitemaps/${locale}.xml`)).ok()).toBe(true);
});
