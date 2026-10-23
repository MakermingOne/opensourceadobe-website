import { expect, test } from "./fixtures";

test("updates can be filtered and followed to the dated brief", async ({ page }) => {
  await page.goto("/updates/");
  await expect(page.locator(".update-entry")).toHaveCount(95);
  await page.getByRole("button", { name: "LightCraft", exact: true }).click();
  await expect(page.locator(".update-entry")).toHaveCount(8);
  await expect(page.getByRole("button", { name: "LightCraft", exact: true })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("link", { name: "Read the daily brief" }).first().click();
  await expect(page).toHaveURL(/\/updates\/2026-10-23\//);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("PhotoCraft 0.14.0");
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
  expect(result.links[0]).toBe("https://opensourceadobe.com/updates/2026-10-24/");
});

for (const route of ["/updates/", "/updates/2026-10-13/", "/updates/2026-10-15/", "/updates/2026-10-16/", "/updates/2026-10-17/"]) {
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

for (const route of ["/updates/2026-10-15/", "/updates/2026-10-16/", "/updates/2026-10-17/", "/apps/photocraft/", "/apps/pdfcraft/"]) {
  test(`${route} remains readable without JavaScript`, async ({ browser, baseURL }) => {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
    try {
      const page = await context.newPage();
      const response = await page.goto(new URL(route, baseURL!).href);
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
  await expect(page.locator("#vectorcraft-rpm-runtime-limits")).toContainText("Documentation update");
  await expect(page.locator("#vectorcraft-rpm-runtime-limits")).toContainText("Event dated 2026-10-15");
  await expect(page.locator("#vectorcraft-rpm-runtime-limits")).toContainText("not a new release");
  await expect(page.locator(".sources")).toContainText("third party");
  await page.goto("/apps/pdfcraft/");
  await expect(page.locator("#main-content")).toContainText("Linux packages are unsigned");
  await expect(page.locator("#main-content")).toContainText("Chinese, Telugu or mirrored Arabic");
  await page.goto("/apps/vectorcraft/");
  await expect(page.locator("#main-content")).toContainText("libm GLIBC_2.35");
  await expect(page.locator(".sources")).toContainText("Rocky Linux 9");
});

test("October 17 connects the new release, bounded export guidance and community follow-up", async ({ page }) => {
  await page.goto("/updates/2026-10-17/");
  await expect(page.locator("#vectorcraft-0120")).toContainText("Official release");
  await expect(page.locator("#vectorcraft-0120")).toContainText("Release published 2026-10-16 UTC");
  await expect(page.locator("#community-pdfcraft-printer-follow-up")).toContainText("Community report");
  await expect(page.locator("#community-pdfcraft-printer-follow-up")).toContainText("not a universal fix");
  await page.goto("/apps/vectorcraft/");
  await expect(page.getByRole("heading", { name: "Version 0.16.0", exact: true })).toBeVisible();
  const buttons = page.getByRole("link", { name: /^Download VectorCraft for/ });
  await expect(buttons).toHaveCount(3);
  for (const button of await buttons.all()) await expect(button).toHaveAttribute("href", /^https:\/\/github\.com\/storytold\/vectorcraft\/releases\/download\/v0\.16\.0\//);
  await page.getByText("Can VectorCraft open Illustrator files?", { exact: true }).click();
  await expect(page.locator("details[open]")).toContainText("one artboard per file and no transparency");
  await page.goto("/download/");
  await expect(page.getByRole("link", { name: "Choose your VectorCraft download", exact: true })).toHaveAttribute("href", "/apps/vectorcraft/#download-heading");
});

test("October 17 evening keeps development work distinct from releases and syncs translations", async ({ page, request }) => {
  await page.goto("/updates/2026-10-17/");
  await expect(page.locator(".update-entry")).toHaveCount(6);
  await expect(page.locator("#figcraft-automation-roots-docs")).toContainText("not a new release");
  await expect(page.locator("#community-photocraft-brush-spacing")).toContainText("Community report");
  await expect(page.locator("#community-pdfcraft-white-cursor")).toContainText("not a confirmed cause");
  await expect(page.locator("#community-effectcraft-rotoscoping")).toContainText("not reported");
  for (const locale of ["zh-Hant", "pl", "de", "hi"]) {
    await page.goto(`/${locale}/`);
    await expect(page.locator("#update-2026-10-17")).toContainText("FigCraft");
    await page.locator('#update-2026-10-17 a[href$="/apps/photocraft/#brush-spacing-report"]').click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/apps/photocraft/#brush-spacing-report$`));
    await expect(page.locator("#brush-spacing-report")).toContainText("Spacing");
    expect((await request.get(`/${locale}/apps/photocraft/`)).status()).toBe(200);
  }
});

 test("daily archive retains both recent briefs and a date without a separate news item", async ({ page, request }) => {
  await page.goto("/updates/");
  const dates = await page.locator(".update-date time").allTextContents();
  expect(dates).toHaveLength(12);
  expect(new Set(dates).size).toBe(12);
  await expect(page.locator(".daily-status").filter({ hasText: "No separate product-news item" })).toHaveCount(1);
  for (const date of ["2026-10-14", "2026-10-18", "2026-10-19"]) expect((await request.get(`/updates/${date}/`)).ok()).toBe(true);
  await page.goto("/updates/2026-10-14/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("no separate news item");
  await expect(page.locator(".update-contents")).toHaveCount(0);
  await page.goto("/updates/2026-10-19/");
  await expect(page.locator(".lede")).toContainText("not new October 19 releases");
 });
