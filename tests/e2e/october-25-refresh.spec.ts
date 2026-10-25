import { test, expect } from './fixtures';
import { translatedLocales, localizedPaths } from '../../src/i18n/config';
for (const width of [320,1440]) test(`October 25 check and October 24 supplement at ${width}px`, async ({page,request}) => {
 await page.setViewportSize({width,height:1000});
 for (const path of ['/updates/2026-10-25/','/updates/2026-10-24/','/download/','/apps/photocraft/']) {
  await page.goto(path);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),path).toBe(true);
  if(path.includes('2026-10-25')) await expect(page.locator('.lede')).toContainText('03:09 Beijing time');
  if(path.includes('2026-10-24')) {
   await expect(page.locator('#photocraft-0151-oct24')).toContainText('Beijing time 2026-10-24 06:44:33');
   await expect(page.locator('#photocraft-0151-oct24')).toContainText('Source checked 2026-10-25');
   await expect(page.locator('#soundcraft-docs-oct24')).toContainText('Beijing time 2026-10-24 20:38:40');
  }
 }
 await page.goto('/updates/2026-10-25/');
 await page.screenshot({path:`/tmp/oa-oct25-${width}.png`,fullPage:true});
 const feed = await (await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-25/')).toBeLessThan(feed.indexOf('/updates/2026-10-24/'));
});
for (const locale of translatedLocales) test(`${locale} October 25 summary is localized and linked`,async ({page})=>{
 await page.setViewportSize({width:320,height:900});
 for (const path of localizedPaths(locale)) {
  await page.goto(`/${locale}${path}`);
  await expect(page.locator('#update-2026-10-25')).toContainText('PhotoCraft 0.15.1');
  await expect(page.locator('#update-2026-10-25 a').first()).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-24/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 }
});
