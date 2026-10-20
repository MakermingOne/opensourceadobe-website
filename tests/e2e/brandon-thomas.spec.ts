import { expect, test } from "./fixtures";

test("the founder profile identifies its subject and keeps its evidence readable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(new URL("/brandon-thomas/", baseURL!).href);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Brandon Thomasand ArtCraft.");
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://opensourceadobe.com/brandon-thomas/");
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const graph = blocks.flatMap((block) => JSON.parse(block)["@graph"] ?? []);
    const profile = graph.find((entity) => entity["@type"] === "Article");
    const person = graph.find((entity) => entity["@type"] === "Person");
    expect(profile.about["@id"]).toBe(person["@id"]);
    expect(person).toMatchObject({ name: "Brandon Thomas", alternateName: "echelon", sameAs: ["https://github.com/echelon"] });
    expect(profile.author).toMatchObject({ "@type": "Organization", name: "OpenSourceAdobe" });
    expect(graph.some((entity) => entity["@type"] === "ProfilePage")).toBe(false);
    expect(profile).not.toHaveProperty("dateCreated");
    for (const field of ["datePublished", "dateModified"]) {
      expect(profile[field]).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/);
      expect(Number.isFinite(Date.parse(profile[field]))).toBe(true);
    }
    expect(profile.datePublished.slice(0,10)).toBe("2026-10-18");
    await expect(page.getByText(profile.description, { exact: true })).toBeVisible();
    const citations = await page.locator(".source-list a").evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(citations).toEqual(profile.citation);
    await expect(page.getByRole("heading", { name: "Is everything under the ArtCraft name free?" })).toBeVisible();
    await expect(page.locator("article")).toContainText("paid generation credits");
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((links) => links.map((link) => link.getAttribute("hreflang")));
    expect(alternates.sort()).toEqual(["en", "x-default"]);
    await page.getByRole("link", { name: "Explore ArtCraft apps", exact: true }).click();
    await expect(page).toHaveURL(/\/apps\/$/);
  } finally { await context.close(); }
});

for (const route of ["/", "/github/", "/faq/"]) {
  test(`${route} provides an incoming link to the founder profile`, async ({ page }) => {
    await page.goto(route);
    if (route === "/faq/") await page.getByText("Who created ArtCraft?", { exact: true }).click();
    const link = page.locator('main a[href="/brandon-thomas/"]').first();
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/brandon-thomas\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Brandon Thomas");
  });
}
