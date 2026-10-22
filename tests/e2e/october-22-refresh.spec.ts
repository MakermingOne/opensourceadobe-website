import {test,expect} from './fixtures';
import {translatedLocales} from '../../src/i18n/config';

for(const width of [390,1280]) test(`October 22 brief keeps original event dates and attributed reports at ${width}px`,async({page,request})=>{
 await page.setViewportSize({width,height:900});
 await page.goto('/updates/2026-10-22/');
 await expect(page.locator('.update-entry')).toHaveCount(12);
 await expect(page.locator('#photocraft-0120-oct22')).toContainText('Release published 2026-10-21 UTC');
 await expect(page.locator('#photocraft-print-pr-oct22')).toContainText('open and unmerged');
 await expect(page.locator('#community-creative-workspace-oct22')).toContainText('independent alpha');
 await expect(page.locator('#photocraft-gaps-0120-oct22')).toContainText('Generative Fill');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 const feed=await(await request.get('/updates/feed.xml')).text();
 expect(feed).toContain('/updates/2026-10-22/');
 const sitemap=await(await request.get('/sitemaps/en.xml')).text();
 expect(sitemap).toContain('/updates/2026-10-21/');
 expect(sitemap).toContain('/updates/2026-10-22/');
 await page.goto('/updates/2026-10-21/');
 await expect(page.locator('.lede')).toContainText('not checked on October 21');
 await expect(page.locator('.update-entry')).toHaveCount(6);
 await expect(page.locator('#vectorcraft-0140-oct22')).toContainText('Beijing time 2026-10-21 15:46:25');
 await expect(page.locator('#vectorcraft-0140-oct22')).toContainText('Source checked 2026-10-22');
 const blocks=await page.locator('script[type="application/ld+json"]').allTextContents();
 const article=blocks.map(s=>JSON.parse(s)).find(d=>d['@type']==='Article');
 expect(article.datePublished).toBe('2026-10-22');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await expect(page.getByRole('link',{name:'2026-10-22 →',exact:true})).toHaveAttribute('href','/updates/2026-10-22/');
});
for(const locale of translatedLocales) test(`${locale} presents the October 22 digest on its existing home page`,async({page})=>{
 await page.setViewportSize({width:390,height:900});
 await page.goto(`/${locale}/`);
 await expect(page.locator('#update-2026-10-22')).toContainText('PhotoCraft 0.12.0');
 await expect(page.locator('#update-2026-10-22 a').first()).toHaveAttribute('href','https://opensourceadobe.com/updates/2026-10-22/');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
