import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";
import { apps } from "../../src/content/apps";
import { dictionaries } from "../../src/i18n/dictionaries";

const origin = "https://opensourceadobe.com";
const alternates = { en: `${origin}/vs-adobe/`, "zh-Hant": `${origin}/zh-Hant/vs-adobe/`, "x-default": `${origin}/vs-adobe/` };
test("all thirteen home app links use published Chinese guides or official projects", async ({ page }) => {
  await page.goto("/zh-Hant/");
  const names = page.locator('.localized-page table tbody tr th[scope="row"] a');
  await expect(names).toHaveCount(apps.length);
  for (const app of apps) {
    const link=names.filter({hasText:app.name});
    await expect(link).toHaveAttribute("href",app.slug==="photocraft"?"/zh-Hant/apps/photocraft/":app.officialPage);
  }
});
test("new decision page closes only the existing English and Chinese variants", async ({ page,request }) => {
  expect((await request.get('/zh-Hant/vs-adobe/')).status()).toBe(200);
  for (const path of ['/zh-Hant/vs-adobe/','/vs-adobe/']) {
    await page.goto(path);
    const group=await page.locator('link[rel="alternate"][hreflang]').evaluateAll(items=>Object.fromEntries(items.map(item=>[item.getAttribute('hreflang'),item.getAttribute('href')])));
    expect(group).toEqual(alternates);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',origin+path);
  }
});
test("Chinese decision guide exposes sourced risks, tables, FAQs and a narrow-screen layout", async ({ page }) => {
  await page.setViewportSize({width:320,height:844});
  await page.goto('/zh-Hant/vs-adobe/');
  await expect(page.locator('html')).toHaveAttribute('lang','zh-Hant');
  await expect(page.getByRole('heading',{level:1})).toHaveCount(1);
  const main=await page.locator('main').innerText();
  for(const topic of ['相容','色彩','外掛','穩定'])expect(main).toContain(topic);
  expect(main).not.toMatch(/平替|软件|矢量|视频/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
  const graphs=(await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(json=>JSON.parse(json)['@graph']??[]);
  const questions=graphs.find(item=>item['@type']==='FAQPage').mainEntity;
  expect(questions.length).toBeGreaterThanOrEqual(4);
  for(const question of questions){expect(main).toContain(question.name);expect(main).toContain(question.acceptedAnswer.text);}
  expect(graphs.some(item=>item['@type']==='ItemList')).toBe(true);
  expect((await page.getByRole('table').count())).toBeGreaterThanOrEqual(1);
  const violations=(await new AxeBuilder({page}).analyze()).violations.filter(item=>['serious','critical'].includes(item.impact??''));
  expect(violations.map(item=>({id:item.id,targets:item.nodes.map(node=>node.target)}))).toEqual([]);
});
for(const locale of ['zh-Hant','pl','de','hi'] as const){
  test(`${locale} exported error page uses localized description`,async({page})=>{
    await page.goto(`/${locale}/404/`);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',dictionaries[locale].notFoundDescription);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content',/noindex/);
  });
}
