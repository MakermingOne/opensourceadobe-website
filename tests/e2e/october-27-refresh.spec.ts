import { test, expect } from './fixtures';
for(const width of [320,1440]) test(`October 27 documentation boundaries at ${width}px`,async({page,request})=>{
 await page.setViewportSize({width,height:1000});
 for(const path of ['/updates/2026-10-27/','/updates/2026-10-26/','/apps/wordcraft/','/apps/lightcraft/','/apps/figcraft/']) {
  await page.goto(path);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),path).toBe(true);
  if(path.includes('2026-10-27')) {
   await expect(page.locator('#figcraft-vue-docs-oct27')).toContainText('Beijing time 2026-10-27 01:48:54');
   await expect(page.locator('#figcraft-vue-docs-oct27')).toContainText('no newer FigCraft release');
  }
  if(path.includes('2026-10-26')) {
   await expect(page.locator('#wordcraft-user-installer-docs-oct26')).toContainText('Published here 2026-10-27');
   await expect(page.locator('#wordcraft-user-installer-docs-oct26')).toContainText('do not include a windows-user MSI');
  }
 }
 await page.goto('/updates/2026-10-27/');
 await page.screenshot({path:`/tmp/oa-oct27-${width}.png`,fullPage:true});
 const feed=await(await request.get('/updates/feed.xml')).text();
 expect(feed.indexOf('/updates/2026-10-27/')).toBeLessThan(feed.indexOf('/updates/2026-10-26/'));
});
