import { test, expect } from '@playwright/test';

for (const width of [320, 1280]) test(`privacy choices gate analytics and preserve navigation at ${width}px`, async ({ page }) => {
  await page.setViewportSize({width, height:900});
  const requests: string[] = [];
  page.on('request', r => { if (/googletagmanager|google-analytics|pvuv\.ai|googlesyndication/.test(r.url())) requests.push(r.url()); });
  await page.route(/^https:\/\//, r => r.fulfill({status:204,body:''}));
  await page.goto('/?email=private@example.com#secret');
  // Local/preview builds intentionally have no analytics UI or loader.
  if (await page.locator('script[src="/site-analytics.js"]').count() === 0) { expect(requests).toEqual([]); return; }
  await expect(page.getByRole('region', {name:'Privacy choices'})).toBeVisible();
  expect(requests).toEqual([]);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button',{name:'Reject analytics',exact:true}).click();
  await expect(page.getByRole('region',{name:'Privacy choices'})).toHaveCount(0);
  expect(requests).toEqual([]);
  await page.getByRole('button',{name:'Privacy choices',exact:true}).click();
  await page.getByRole('button',{name:'Allow analytics',exact:true}).click();
  await expect.poll(()=>requests.filter(r=>r.includes('gtag/js')).length).toBe(1);
  await expect.poll(()=>requests.filter(r=>r.includes('www.pvuv.ai/f.js')).length).toBe(1);
  await page.getByRole('contentinfo').getByRole('link',{name:'About',exact:true}).click();
  await expect(page).toHaveURL(/\/about\/$/);
  const events = await page.evaluate(()=>((window as unknown as {dataLayer:ArrayLike<unknown>[]}).dataLayer).map(e=>Array.from(e)));
  expect(events.filter(e=>e[1]==='page_view')).toHaveLength(2);
  expect(JSON.stringify(events)).not.toMatch(/private@example|secret/);
  expect(requests.some(r=>r.includes('googlesyndication'))).toBe(false);
  await page.getByRole('button',{name:'Privacy choices',exact:true}).click();
  await page.getByRole('button',{name:'Reject analytics',exact:true}).click();
  await page.waitForLoadState('domcontentloaded');
  await expect.poll(()=>page.evaluate(()=>window.sitePrivacy?.get())).toBe('rejected');
  expect(requests.filter(r=>r.includes('gtag/js'))).toHaveLength(1);
});

test('translated footers link to real publisher and privacy pages', async ({ page }) => {
  for (const locale of ['en-AU','zh-Hant','pl','de','ja','ko','fr','hi']) {
    await page.goto(`/${locale}/`);
    for (const path of ['/about/','/contact/','/privacy/']) await expect(page.locator(`footer a[href="${path}"]`)).toBeVisible();
  }
});

test('YouTube does not load a player until requested', async ({ page }) => {
  await page.route(/^https:\/\//, r=>r.fulfill({status:204,body:''}));
  await page.goto('/tutorials/');
  await expect(page.locator('iframe')).toHaveCount(0);
  await page.locator('.learning-player summary').first().click();
  await expect(page.locator('iframe')).toHaveCount(0);
  const reject = page.getByRole('button',{name:'Reject analytics',exact:true});
  if (await reject.isVisible()) await reject.click();
  await page.getByRole('button',{name:'Load YouTube video',exact:true}).first().click();
  await expect(page.locator('iframe')).toHaveCount(1);
});
