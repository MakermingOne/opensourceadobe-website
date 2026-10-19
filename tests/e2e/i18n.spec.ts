import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "./fixtures";

const origin = "https://opensourceadobe.com";
const pages = [
  { en: "/", zh: "/zh-Hant/", primary: "開源 Adobe 替代" },
  { en: "/alternatives/photoshop/", zh: "/zh-Hant/alternatives/photoshop/", primary: "Photoshop 替代" },
  { en: "/apps/photocraft/", zh: "/zh-Hant/apps/photocraft/", primary: "PhotoCraft 下載" },
  { en: "/download/", zh: "/zh-Hant/download/", primary: "ArtCraft 下載" },
] as const;
const translatedPaths: string[] = [...pages.map(({ zh }) => zh), "/zh-Hant/vs-adobe/"];
const alternateGroup = (path: string) => ({ en: origin + path, "zh-Hant": `${origin}/zh-Hant${path}`, pl: `${origin}/pl${path}`, de: `${origin}/de${path}`, hi: `${origin}/hi${path}`, ja: `${origin}/ja${path}`, ko: `${origin}/ko${path}`, fr: `${origin}/fr${path}`, "x-default": origin + path });
async function openLanguages(page: Page) {
  const languages = page.getByRole("navigation", { name: "Language", exact: true });
  if (!(await languages.locator("details").evaluate((element) => element.hasAttribute("open")))) await languages.locator("summary").click();
  return languages;
}

type Schema = Record<string, unknown>;
async function schemas(page: Page): Promise<Schema[]> {
  const values = await page.locator('script[type="application/ld+json"]').allTextContents();
  const flatten = (value: unknown): Schema[] => {
    if (Array.isArray(value)) return value.flatMap(flatten);
    if (!value || typeof value !== "object") return [];
    const node = value as Schema;
    return [node, ...flatten(node["@graph"])];
  };
  return values.flatMap((value) => flatten(JSON.parse(value)));
}

for (const route of pages) {
  test(`${route.zh} serves complete Traditional Chinese metadata and content`, async ({ page, request }) => {
    const response = await request.get(route.zh);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toMatch(/<html[^>]*lang="zh-Hant"/);
    expect(html).toMatch(/<html[^>]*dir="ltr"/);
    await page.goto(route.zh);
    await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hant");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(route.primary);
    const title = await page.title();
    expect(title).toContain(route.primary);
    expect([...title.matchAll(/\p{Script=Han}/gu)].length).toBeLessThanOrEqual(30);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", origin + route.zh);
    expect((await page.locator('meta[name="description"]').getAttribute("content"))?.length).toBeGreaterThanOrEqual(40);
    const main = page.locator("main");
    await expect(main).not.toContainText(/平替|软件|矢量|视频/);
    expect(await main.locator('a[href^="/"]').count()).toBeGreaterThanOrEqual(3);

    const data = await schemas(page);
    const faq = data.find((node) => node["@type"] === "FAQPage");
    expect(faq, "FAQPage schema").toBeDefined();
    const questions = faq!.mainEntity as { name: string; acceptedAnswer: { text: string } }[];
    expect(questions.length).toBeGreaterThanOrEqual(4);
    for (const question of questions) {
      await expect(main).toContainText(question.name);
      expect(question.acceptedAnswer.text.length).toBeGreaterThan(10);
      await expect(main).toContainText(question.acceptedAnswer.text.replace(/<[^>]+>/g, ""));
    }
    if (route.en.includes("/alternatives/") || route.en.includes("/apps/")) {
      expect(await page.getByRole("table").count()).toBeGreaterThanOrEqual(1);
      expect(data.some((node) => node["@type"] === "ItemList")).toBe(true);
    }
    if (route.en.includes("/apps/")) {
      const software = data.find((node) => node["@type"] === "SoftwareApplication");
      expect(software?.operatingSystem).toBeTruthy();
      expect(software?.offers).toBeTruthy();
    }
  });

  test(`${route.zh} has reciprocal alternates and preserves deep language switches`, async ({ page }) => {
    for (const current of [route.zh, route.en]) {
      await page.goto(current);
      const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => Object.fromEntries(links.map((link) => [link.getAttribute("hreflang"), link.getAttribute("href")])));
      expect(alternates).toEqual(alternateGroup(route.en));
      const languages = await openLanguages(page);
      await expect(languages.getByRole("link", { name: "English", exact: true })).toHaveAttribute("href", route.en);
      await expect(languages.getByRole("link", { name: "繁體中文", exact: true })).toHaveAttribute("href", route.zh);
    }
    await page.getByRole("navigation", { name: "Language", exact: true }).getByRole("link", { name: "繁體中文" }).click();
    await expect(page).toHaveURL(new RegExp(`${route.zh}$`));
  });

  for (const width of [320, 390]) {
    test(`${route.zh} keeps Chinese navigation usable at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(route.zh);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const links = page.locator('header a[href^="/"], footer a[href^="/"], .breadcrumbs a[href^="/"]');
      for (const link of await links.all()) {
        if (await link.evaluate((element) => Boolean(element.closest('[aria-label="Language"]')))) continue;
        const href = (await link.getAttribute("href"))!.split("#")[0];
        expect(translatedPaths, `localized shell destination ${href}`).toContain(href);
        await link.scrollIntoViewIfNeeded();
        await expect(link).toBeVisible();
      }
      const language = (await openLanguages(page)).getByRole("link", { name: "English", exact: true });
      await language.scrollIntoViewIfNeeded();
      await language.click();
      await expect(page).toHaveURL(new RegExp(`${route.en}$`));
    });
  }
}

test("Chinese pages retain their content and language without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    for (const route of pages) {
      await page.goto(new URL(route.zh, baseURL).href);
      await expect(page.locator("html")).toHaveAttribute("lang", "zh-Hant");
      await expect(page.getByRole("heading", { level: 1 })).toContainText(route.primary);
      expect((await page.locator("main").innerText()).length).toBeGreaterThan(1000);
    }
  } finally { await context.close(); }
});

test("localized titles are unique", async ({ page }) => {
  const titles: string[] = [];
  for (const route of pages) { await page.goto(route.zh); titles.push(await page.title()); }
  expect(new Set(titles).size).toBe(pages.length);
});

test("Accept-Language leaves English URLs intact and unsupported locales return 404", async ({ request }) => {
  const response = await request.get("/", { headers: { "Accept-Language": "zh-TW,zh;q=0.9" }, maxRedirects: 0 });
  expect(response.status()).toBe(200);
  expect(await response.text()).toMatch(/<html[^>]*lang="en"/);
  expect((await request.get("/xx/")).status()).toBe(404);
});

for (const route of pages) {
  test(`${route.zh} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route.zh);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations.filter((item) => ["serious", "critical"].includes(item.impact ?? "")).map((item) => ({id: item.id, nodes: item.nodes.map((node) => node.target)}))).toEqual([]);
  });
}
test("browser language never adds a suggestion banner or changes a URL", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ locale: "zh-TW", viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto(new URL("/updates/", baseURL).href);
    await expect(page.locator(".language-suggestion")).toHaveCount(0);
    await expect(page).toHaveURL(/\/updates\/$/);
  } finally { await context.close(); }
});
