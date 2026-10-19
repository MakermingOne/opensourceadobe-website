import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

const origin = "https://opensourceadobe.com";
const languages = ["en", "zh-Hant", "pl", "de", "hi", "ja", "ko", "fr", "en-AU"];
const guides = ["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"];
for (const locale of ["pl", "de", "hi", "fr", "en-AU"]) {
  for (const path of guides) {
    const route = `/${locale}${path}`;
    test(`${route} has localized server HTML and complete language metadata`, async ({ page, request }) => {
      const response = await request.get(route);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain(`lang="${locale}"`);
      await page.goto(route);
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.getByRole("heading", {level:1})).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", origin + route);
      const expected = Object.fromEntries(languages.map((code) => [code, `${origin}${code === "en" ? "" : `/${code}`}${path}`]));
      expected["x-default"] = origin + path;
      const actual = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((items) => Object.fromEntries(items.map((item) => [item.getAttribute("hreflang"), item.getAttribute("href")])));
      expect(actual).toEqual(expected);
      const main = await page.locator("main").innerText();
      expect(main.length).toBeGreaterThan(1000);
      expect(main).not.toMatch(/\p{Script=Han}/u);
      if (locale === "hi") expect(main).toMatch(/[\u0900-\u097f]{3,}/u);
      const data = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap((json) => { const value=JSON.parse(json); return value["@graph"] ?? [value]; });
      const faq = data.find((item) => item["@type"] === "FAQPage");
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(4);
      for (const question of faq.mainEntity) {
        expect(main).toContain(question.name);
        expect(main).toContain(question.acceptedAnswer.text);
      }
      if (path.includes("/apps/") || path.includes("/alternatives/")) {
        await expect(page.getByRole("table").first()).toBeVisible();
        expect(data.some((item) => item["@type"] === "ItemList")).toBe(true);
      }
      if (path.includes("/apps/")) expect(data.find((item) => item["@type"] === "SoftwareApplication")).toMatchObject({operatingSystem:expect.any(String),offers:expect.objectContaining({price:"0"})});
      const failures=(await new AxeBuilder({page}).analyze()).violations.filter((item)=>["critical","serious"].includes(item.impact ?? ""));
      expect(failures.map((item)=>({id:item.id,targets:item.nodes.map((node)=>node.target)}))).toEqual([]);
    });
    test(`${route} fits a 320px viewport and switches directly to another language`, async ({ page }) => {
      await page.setViewportSize({width:320,height:844});
      await page.goto(route);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
      const menu=page.getByRole("navigation",{name:"Language",exact:true});
      await menu.locator("summary").click();
      expect(await menu.getByRole("link").count()).toBe(languages.length);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
      const target=locale==="de"?"pl":"de";
      const link=menu.locator(`a[hreflang="${target}"]`);
      await expect(link).toHaveAttribute("href", `/${target}${path}`);
      await link.click();
      await expect(page).toHaveURL(new RegExp(`/${target}${path}$`));
    });
  }
}
test("all new languages work without JavaScript and have only valid localized shell links", async ({ browser,baseURL })=>{
  const context=await browser.newContext({javaScriptEnabled:false});
  try {
    const page=await context.newPage();
    for(const locale of ["pl","de","hi","fr","en-AU"]){
      await page.goto(new URL(`/${locale}/download/`,baseURL).href);
      const shell=page.locator('header a[href^="/"],footer a[href^="/"],.breadcrumbs a[href^="/"]');
      for(const link of await shell.all()){
        if(await link.evaluate((item)=>Boolean(item.closest('[aria-label="Language"]'))))continue;
        const href=await link.getAttribute("href");
        expect(guides.map((path)=>`/${locale}${path}`)).toContain(href);
      }
      const menu=page.getByRole("navigation",{name:"Language",exact:true});
      await menu.locator("summary").click();
      await expect(menu.locator('a[hreflang="en"]')).toHaveAttribute("href","/download/");
    }
  }finally{await context.close();}
});
