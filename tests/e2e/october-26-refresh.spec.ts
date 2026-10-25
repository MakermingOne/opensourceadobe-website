import { test, expect } from './fixtures';
import { translatedLocales, localizedPaths } from '../../src/i18n/config';
for (const width of [320,1440]) test(`October 26 check and October 25 events at ${width}px`, async ({page,request}) => {
 await page.setViewportSize({width,height:1000});
 for (const path of ['/updates/2026-10-26/','/updates/2026-10-25/','/download/','/apps/photocraft/','/apps/pdfcraft/']) {
  await page.goto(path);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),path).toBe(true);
  if(path.includes('2026-10-26')) {
   await expect(page.locator('#pdfcraft-side-panels-oct26')).toContainText('Beijing time 2026-10-26 00:06:36');
   await expect(page.locator('#pdfcraft-side-panels-oct26')).toContainText('after the published 0.14.0 release');
  }
  if(path.includes('2026-10-25')) {
   await expect(page.locator('#photocraft-0160-oct25')).toContainText('Beijing time 2026-10-25 22:17:53');
   await expect(page.locator('#photocraft-0160-oct25')).toContainText('Source checked 2026-10-26');
   await expect(page.locator('#photocraft-0160-oct25')).toContainText('Published here 2026-10-26');
  }
 }
 await page.goto('/updates/2026-10-26/');
 await page.screenshot({path:`/tmp/oa-oct26-${width}.png`,fullPage:true});
 const feed = await (await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-26/')).toBeLessThan(feed.indexOf('/updates/2026-10-25/'));
});
for(const locale of translatedLocales) test(`${locale} October 26 digest has real date links`,async ({page})=>{
 await page.setViewportSize({width:320,height:900});
 for(const path of localizedPaths(locale)) {
  await page.goto(`/${locale}${path}`);
  await expect(page.locator('#update-2026-10-26')).toContainText('PhotoCraft 0.16.0');
  await expect(page.locator('#update-2026-10-26 a').first()).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-25/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 }
});
