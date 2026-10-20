import { test, expect } from './fixtures';
import AxeBuilder from '@axe-core/playwright';

for (const width of [320, 390, 1280]) test(`priority tutorials are separated and readable at ${width}px`, async ({ page }) => {
 await page.setViewportSize({ width, height: 900 });
 await page.route('https://i.ytimg.com/**', route => route.fulfill({contentType:'image/png',body:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=','base64')}));
 await page.goto('/tutorials/', {waitUntil:'domcontentloaded'});
 const official = page.locator('#official-studio-tutorials');
 const community = page.locator('#community-installation-guides');
 await expect(official.locator('.resource-card')).toHaveCount(2);
 await expect(community.locator('.resource-card')).toHaveCount(2);
 await expect(official).toContainText('ArtCraft AI studio');
 await expect(official).toContainText('2025');
 await expect(community).toContainText('Benja Review');
 await expect(community).toContainText('GYAN BATO');
 await expect(community).toContainText('Exact app versions not verified');
 for (const [id, video, duration] of [
  ['official-studio-2d-basics','ZASPqlqUBQc','2:22'],
  ['official-studio-2d-to-3d','t8F-sy_zyK4','2:47'],
  ['community-craftapps-windows-benja','oL4_LZxnTRA','1:22'],
  ['community-craftapps-overview-gyan','ZKaW8u26afU','3:27'],
 ]) {
  const card = page.locator('#'+id);
  await expect(card.locator('h3 a')).toHaveAttribute('href','https://www.youtube.com/watch?v='+video);
  await expect(card).toContainText(duration);
  await expect(card.locator('details')).not.toHaveAttribute('open','');
 }
 await page.getByRole('link',{name:'Official studio tutorials',exact:true}).click();
 await expect(page).toHaveURL(/#official-studio-tutorials$/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
 if(width===1280) {
  await expect.poll(async () => (await page.locator("#official-studio-heading").boundingBox())!.y).toBeGreaterThanOrEqual((await page.locator(".site-header").boundingBox())!.height);
  const results=await new AxeBuilder({page}).include('#official-studio-tutorials').include('#community-installation-guides').analyze();
  expect(results.violations.filter(v=>['serious','critical'].includes(v.impact ?? ''))).toEqual([]);
 }
});
