import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';

for(const width of [320,390,1280]) test(`learning library separates media and filters content at ${width}px`,async({page})=>{
 await page.setViewportSize({width,height:900});
 await page.route('https://i.ytimg.com/**',r=>r.fulfill({contentType:'image/png',body:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=','base64')}));
 await page.goto('/tutorials/',{waitUntil:'domcontentloaded'});
 await expect(page.locator('.learning-video')).toHaveCount(9);
 await expect(page.locator('.learning-feature')).toHaveCount(0);
 await expect(page.locator('.learning-reading')).toHaveCount(7);
 await expect(page.locator('#official-studio-2d-basics')).toContainText('Official');
 await expect(page.locator('#community-craftapps-windows-benja')).toContainText('Community');
 await expect(page.locator('#community-craftapps-windows-benja')).toContainText('Benja Review');
 await expect(page.locator('.learning-video .learning-player[open]')).toHaveCount(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByRole('button',{name:'ArtCraft suite',exact:true}).click();
 await page.locator('.learning-filter-details > summary').click();
 await page.getByRole('button',{name:'Installation',exact:true}).click();
 await page.getByLabel('Source platform').selectOption('YouTube');
 await page.getByLabel('Operating system',{exact:true}).selectOption('Windows');
 await expect(page.locator('.learning-video')).toHaveCount(2);
 await expect(page.locator('#reading-library')).toHaveCount(0);
 await page.getByRole('button',{name:'Clear filters',exact:true}).click();
 await page.getByRole('button',{name:'PhotoCraft',exact:true}).click();
 await page.getByRole('button',{name:'2D & 3D',exact:true}).click();
 await expect(page.getByRole('heading',{name:'No resources match these filters.'})).toBeVisible();
 await page.getByRole('button',{name:'Show all resources'}).click();
 await expect(page.locator('.learning-video')).toHaveCount(9);
 await page.getByLabel('Source platform').selectOption('Reddit');
 await expect(page.locator('.learning-reading')).toHaveCount(3);
 await expect(page.locator('.learning-video')).toHaveCount(0);
 await page.getByRole('button',{name:'Clear filters',exact:true}).click();
 if(width===1280){
  const result=await new AxeBuilder({page}).include('.learning-library').analyze();
  expect(result.violations.filter(v=>['serious','critical'].includes(v.impact??''))).toEqual([]);
 }
});

test('all learning resources and original links remain readable without JavaScript',async({browser,baseURL})=>{
 const context=await browser.newContext({javaScriptEnabled:false});
 try {
  const page=await context.newPage();
  await page.goto(`${baseURL}/tutorials/`,{waitUntil:'domcontentloaded'});
  await expect(page.locator('.learning-filters')).toBeHidden();
  await expect(page.locator('.learning-video')).toHaveCount(9);
  await expect(page.locator('.learning-reading')).toHaveCount(7);
  await expect(page.locator('a[href*="ai-history-1955"]')).toHaveCount(0);
  const card=page.locator('#community-craftapps-windows-benja');
  await card.locator('.learning-notes summary').click();
  await expect(card.locator('.learning-notes')).toContainText('Exact app versions not verified');
  await expect(card.locator('h3 a')).toHaveAttribute('href','https://www.youtube.com/watch?v=oL4_LZxnTRA');
 } finally {await context.close();}
});

test('removed AI history page is absent from navigation and the sitemap', async ({ page }) => {
 const response=await page.goto('/learn/ai-history-1955/',{waitUntil:'domcontentloaded'});
 expect(response?.status()).toBe(404);
 await page.goto('/tutorials/',{waitUntil:'domcontentloaded'});
 await expect(page.locator('a[href*="ai-history-1955"]')).toHaveCount(0);
 const sitemap=await page.request.get('/sitemaps/en.xml');
 expect(await sitemap.text()).not.toContain('/learn/ai-history-1955/');
});
