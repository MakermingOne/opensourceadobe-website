import { expect, test } from "./fixtures";
import { publishedRoutes } from "../../src/lib/site";
import { pageUpdatedAt } from "../../src/content/page-dates";

for (const route of publishedRoutes) {
  test(`${route} has complete share metadata and matching body/footer dates`, async ({ page, request }) => {
    await page.goto(route);
    const title = await page.title();
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", title);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", description!);
    const image = await page.locator('meta[property="og:image"]').getAttribute("content");
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute("content", image!);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200");
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "630");
    await expect(page.locator('meta[property="og:image:alt"]')).toHaveAttribute("content", title);
    const imageResponse = await request.get(new URL(image!).pathname);
    expect(imageResponse.ok()).toBe(true);
    const bytes = await imageResponse.body();
    expect([bytes.readUInt32BE(16), bytes.readUInt32BE(20)]).toEqual([1200, 630]);
    const date = pageUpdatedAt(route);
    await expect(page.locator("[data-page-updated]")).toHaveAttribute("datetime", date);
    await expect(page.locator("[data-footer-updated]")).toHaveAttribute("datetime", date);
  });
}

test("the footer updates on client navigation and retains dates without JavaScript", async ({ page, browser, baseURL }) => {
  await page.goto("/apps/");
  await expect(page.locator("[data-footer-updated]")).toHaveAttribute("datetime", "2026-10-30");
  await page.getByRole("contentinfo").getByRole("link", { name: "About", exact: true }).click();
  await expect(page).toHaveURL(/\/about\/$/);
  await expect(page.locator("[data-footer-updated]")).toHaveAttribute("datetime", "2026-10-11");
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const staticPage = await context.newPage();
    await staticPage.goto(new URL("/about/", baseURL!).href);
    await expect(staticPage.locator("[data-footer-updated]")).toHaveAttribute("datetime", "2026-10-11");
    await expect(staticPage.locator("[data-page-updated]")).toHaveAttribute("datetime", "2026-10-11");
  } finally { await context.close(); }
});

test("GitHub FAQ and license evidence agree with visible release data", async ({ page }) => {
  await page.goto("/github/");
  const faqs = page.locator('.content-section[aria-labelledby="faq-heading"] details');
  await expect(faqs).toHaveCount(3);
  await faqs.nth(1).locator("summary").click();
  await expect(faqs.nth(1)).toContainText("PhotoCraft 0.17.0");
  await expect(faqs.nth(1)).toContainText("2026-10-28");
  const table = page.getByRole("table", { name: /The 13 Crafting Apps/ });
  await expect(table.locator("tbody tr")).toHaveCount(13);
  await expect(table.locator('a[href$="LICENSE-MIT"]')).toHaveCount(13);
  await expect(table.locator('a[href$="LICENSE-APACHE"]')).toHaveCount(13);
  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(schemas.join(" ")).toContain('"@type":"FAQPage"');
});

test("alternatives explain the scale and avoid duplicate progress labels", async ({ page }) => {
  await page.goto("/alternatives/");
  await expect(page.getByRole("columnheader", { name: "How close it gets" })).toHaveCount(1);
  await expect(page.getByText("High, Partial and Low describe", { exact: false })).toBeVisible();
  await expect(page.getByRole("cell", { name: "Guide in progress", exact: true })).toHaveCount(0);
});
