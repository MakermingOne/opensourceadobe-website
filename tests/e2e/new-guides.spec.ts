import { expect, test } from "./fixtures";

for (const path of ["/alternatives/premiere/", "/vs/gimp-vs-photoshop/", "/vs/photopea-vs-photoshop/"]) {
  test(`${path} renders responsive content, working links and FAQ data`, async ({ page, request }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    expect((await page.goto(path))?.status()).toBe(200);
    await page.waitForLoadState("networkidle");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://opensourceadobe.com${path}`);
    const faq = await page.locator('script[type="application/ld+json"]').evaluateAll((scripts) => scripts
      .flatMap((script) => { const data = JSON.parse(script.textContent!); return data["@graph"] ?? [data]; })
      .filter((schema) => schema["@type"] === "FAQPage"));
    expect(faq).toHaveLength(1);
    expect(faq[0].mainEntity.length).toBe(await page.locator(".guide-faq summary").count());
    await page.locator(".guide-faq summary").first().click();
    await expect(page.locator(".guide-faq details").first()).toHaveAttribute("open", "");
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    }
    const links = await page.locator(".guide-main a[href^='/']").evaluateAll((elements) => elements.map((element) => element.getAttribute("href")!));
    for (const link of new Set(links)) expect((await request.get(link)).ok(), link).toBe(true);
    expect(errors).toEqual([]);
  });
}
