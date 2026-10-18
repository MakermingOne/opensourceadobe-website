import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";
import { apps } from "../../src/content/apps";
import { languageAlternates } from "../../src/i18n/config";
import { dictionaries } from "../../src/i18n/dictionaries";
const guides = ["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"];
for (const locale of ["ja", "ko"] as const) {
  for (const path of guides) test(`${locale}${path} has native content, valid links and mobile layout`, async ({ page, request }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    const route = `/${locale}${path}`;
    await page.goto(route);
    await expect(page.locator("html")).toHaveAttribute("lang", locale);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const text = await page.locator("main").innerText();
    expect(text).toMatch(locale === "ja" ? /[\u3040-\u30ff]{2}/u : /[\uac00-\ud7af]{2}/u);
    expect(text.length).toBeGreaterThan(1500);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://opensourceadobe.com${route}`);
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll(items => Object.fromEntries(items.map(item => [item.getAttribute("hreflang"), item.getAttribute("href")])));
    expect(alternates).toEqual(languageAlternates(route));
    for (const href of new Set(await page.locator('a[href^="/"]').evaluateAll(items => items.map(item => item.getAttribute("href")!)))) {
      expect((await request.get(href)).status(), href).toBe(200);
    }
    if (path === "/" || path === "/download/") for (const app of apps) {
      await expect(page.locator('th[scope="row"] a').getByText(app.name, { exact: true })).toHaveAttribute("href", app.slug === "photocraft" ? `/${locale}/apps/photocraft/` : app.officialPage);
    }
    const schema = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(json => JSON.parse(json)["@graph"] ?? []);
    const faq = schema.find(node => node["@type"] === "FAQPage");
    expect(faq.mainEntity.length).toBeGreaterThanOrEqual(4);
    for (const question of faq.mainEntity) { expect(text).toContain(question.name); expect(text).toContain(question.acceptedAnswer.text); }
    expect(schema.some(node => node["@type"] === "ItemList")).toBe(true);
    if (path.includes("/apps/")) expect(schema.find(node => node["@type"] === "SoftwareApplication")).toMatchObject({ offers: { price: "0" }, operatingSystem: expect.any(String) });
    const menu = page.getByRole("navigation", { name: "Language", exact: true });
    await menu.locator("summary").click();
    const other = locale === "ja" ? "ko" : "ja";
    await expect(menu.locator(`a[hreflang="${other}"]`)).toHaveAttribute("href", `/${other}${path}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(320);
    const violations = (await new AxeBuilder({ page }).analyze()).violations.filter(item => ["serious", "critical"].includes(item.impact ?? ""));
    expect(violations.map(item => item.id)).toEqual([]);
  });
  test(`${locale} works without JavaScript and has localized error metadata`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    try {
      const page = await context.newPage();
      await page.goto(new URL(`/${locale}/apps/photocraft/`, baseURL).href);
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("h1")).toHaveCount(1);
      await page.goto(new URL(`/${locale}/404/`, baseURL).href);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", dictionaries[locale].notFoundDescription);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    } finally { await context.close(); }
  });
}
