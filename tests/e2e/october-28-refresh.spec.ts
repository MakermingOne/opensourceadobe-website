import { test, expect } from './fixtures';
for(const width of [320,1440]) test(`October 28 keeps documentation separate from installers at ${width}px`,async({page,request})=>{
 await page.setViewportSize({width,height:1000});
 await page.goto('/updates/2026-10-28/');
 await expect(page.locator('#photocraft-mcp-write-docs-oct28')).toContainText('2026-10-28 02:25:16');
 await expect(page.locator('#photocraft-mcp-write-docs-oct28')).toContainText('not claimed for the current installer');
 await expect(page.locator('#wordcraft-sections-docs-oct28')).toContainText('2026-10-28 00:37:47');
 await expect(page.locator('#filmcraft-export-benchmark-docs-oct28')).toContainText('We did not run the benchmark');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:`/tmp/oa-oct28-${width}.png`,fullPage:true});
 for(const path of ['/updates/2026-10-27/','/apps/photocraft/','/apps/cadcraft/','/zh-Hant/']) {
  await page.goto(path);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path).toBe(true);
 }
 await page.goto('/updates/2026-10-27/');
 await expect(page.locator('#designcraft-flyout-docs-oct27')).toContainText('Published here 2026-10-28');
 const feed=await(await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-28/')).toBeLessThan(feed.indexOf('/updates/2026-10-27/'));
});
