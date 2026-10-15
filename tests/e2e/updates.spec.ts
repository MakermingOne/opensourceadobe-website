import { expect, test } from "@playwright/test";

test("updates can be filtered and followed to the dated brief", async ({ page }) => {
  await page.goto("/updates/");
  await expect(page.locator(".update-entry")).toHaveCount(26);
  await page.getByRole("button", { name: "LightCraft", exact: true }).click();
  await expect(page.locator(".update-entry")).toHaveCount(3);
  await expect(page.getByRole("button", { name: "LightCraft", exact: true })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("link", { name: "Read the daily brief" }).first().click();
  await expect(page).toHaveURL(/\/updates\/2026-10-15\//);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("PhotoCraft 0.9.0");
  await expect(page.getByRole("heading", { name: "Sources", exact: true })).toBeVisible();
});

test("Contact uses the email address without a GitHub contact destination", async ({ page }) => {
  await page.goto("/contact/");
  const content = page.locator("#main-content");
  await expect(content.getByRole("link", { name: "makerming1@gmail.com", exact: true })).toHaveAttribute("href", "mailto:makerming1@gmail.com");
  await expect(content).not.toContainText("GitHub");
  await expect(content.locator('a[href*="github.com"]')).toHaveCount(0);
});

test("latest brief separates official changes from community ports", async ({ page }) => {
  await page.goto("/updates/2026-10-15/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("PhotoCraft 0.9.0");
  await expect(page.locator("#photocraft-090")).toContainText("2026-10-14");
  await expect(page.locator("#pdfcraft-web-printing")).toContainText("documentation clarification");
  await expect(page.locator("#community-pdfcraft-printing")).toContainText("Community report");
  await expect(page.locator("#pdfcraft-080")).toContainText("2026-10-14");
  await expect(page.locator("#community-android-ports")).toContainText("Community report");
  await expect(page.locator("#community-android-ports")).toContainText("not the official storytold desktop releases");
  await expect(page.locator(".sources")).toContainText("third party");
  await page.getByRole("link", { name: "Back to all updates" }).click();
  await expect(page).toHaveURL(/\/updates\/$/);
});

for (const width of [375, 768, 1024, 1280]) {
  test(`footer groups remain compact and navigable at ${width}px`, async ({ page, request }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const footer = page.getByRole("contentinfo");
    const nav = footer.getByRole("navigation", { name: "Footer navigation" });
    await footer.scrollIntoViewIfNeeded();
    await expect(nav.getByRole("heading", { level: 2 })).toHaveText(["Apps & downloads", "Compare & learn", "Updates & site"]);
    await expect(nav.getByRole("link")).toHaveCount(13);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    if (width >= 1024) {
      expect((await footer.boundingBox())!.height).toBeLessThan(400);
      const groups = await nav.locator(".footer-link-group").evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().top));
      expect(new Set(groups).size).toBe(1);
    } else if (width === 375) {
      const heights = await nav.getByRole("link").evaluateAll((links) => links.map((link) => link.getBoundingClientRect().height));
      expect(heights.every((height) => height >= 44)).toBe(true);
    }
    const privacy = nav.getByRole("link", { name: "Privacy", exact: true });
    await privacy.focus();
    await expect(privacy).toBeFocused();
    await expect(privacy).toHaveCSS("outline-style", "solid");
    const urls = await nav.getByRole("link").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    for (const url of urls) expect((await request.get(url)).ok(), url).toBe(true);
  });
}

test("RSS is valid XML and links to the published daily brief", async ({ request, page }) => {
  const response = await request.get("/updates/feed.xml");
  expect(response.ok()).toBe(true);
  const xml = await response.text();
  const result = await page.evaluate((text) => {
    const doc = new DOMParser().parseFromString(text, "application/xml");
    return { errors: doc.querySelectorAll("parsererror").length, links: [...doc.querySelectorAll("item > link")].map((link) => link.textContent) };
  }, xml);
  expect(result.errors).toBe(0);
  expect(result.links).toContain("https://opensourceadobe.com/updates/2026-10-13/");
  expect(result.links[0]).toBe("https://opensourceadobe.com/updates/2026-10-16/");
});

for (const route of ["/updates/", "/updates/2026-10-13/", "/updates/2026-10-15/", "/updates/2026-10-16/"]) {
  for (const width of [375, 768, 1024, 1280]) {
    test(`${route} fits ${width}px and exposes working internal links`, async ({ page, request }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      const links = await page.locator('#main-content a[href^="/"]').evaluateAll((elements) => [...new Set(elements.map((element) => element.getAttribute("href")!.split("#")[0]))]);
      for (const link of links) expect((await request.get(link)).ok(), link).toBe(true);
    });
  }
}

for (const route of ["/updates/2026-10-15/", "/updates/2026-10-16/", "/apps/photocraft/", "/apps/pdfcraft/"]) {
  test(`${route} remains readable without JavaScript`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
    try {
      const page = await context.newPage();
      const response = await page.goto(`http://127.0.0.1:4173${route}`);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Sources", exact: true })).toHaveCount(1);
      const text = await page.locator("#main-content").textContent();
      expect(text?.length).toBeGreaterThan(1000);
    } finally {
      await context.close();
    }
  });
}


test("October 16 distinguishes documentation and community events from a release", async ({ page }) => {
  await page.goto("/updates/2026-10-16/");
  await expect(page.locator("#pdfcraft-language-package-limits")).toContainText("Documentation update");
  await expect(page.locator("#pdfcraft-language-package-limits")).toContainText("Event dated 2026-10-15");
  await expect(page.locator("#pdfcraft-language-package-limits")).not.toContainText("Release published");
  await expect(page.locator("#community-pdfcraft-print-quality")).toContainText("Community report");
  await expect(page.locator(".sources")).toContainText("third party");
  await page.goto("/apps/pdfcraft/");
  await expect(page.locator("#main-content")).toContainText("Linux packages are unsigned");
  await expect(page.locator("#main-content")).toContainText("Chinese, Telugu or mirrored Arabic");
});
