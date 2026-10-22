import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

for (const width of [320, 390, 768, 1440]) {
  test(`direct download selection and navigation work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("/download/");
    const picker = page.locator(".download-picker");
    await expect(picker).toBeVisible();
    await picker.getByLabel("Choose an app", { exact: true }).selectOption("pdfcraft");
    await picker.getByLabel("Your operating system", { exact: true }).selectOption("1");
    const download = picker.getByRole("link", { name: "Download PdfCraft" });
    await expect(download).toHaveAttribute("href", /pdfcraft-0\.11\.0-macos-universal\.dmg$/);
    await picker.getByLabel("Choose an app", { exact: true }).selectOption("vectorcraft");
    await expect(picker.getByRole("link", { name: "Download VectorCraft" })).toHaveAttribute("href", /vectorcraft-0\.14\.0-macos-universal\.dmg$/);
    if (width < 960) {
      await page.locator(".mobile-menu > summary").click();
      await page.locator(".mobile-menu > summary").press("Escape");
      await expect(page.locator(".mobile-menu")).not.toHaveAttribute("open", "");
      await expect(page.locator(".mobile-menu > summary")).toBeFocused();
      await page.locator(".mobile-menu > summary").click();
      const nav = page.locator(".mobile-primary-nav");
      await expect(nav.getByRole("link", { name: "Download", exact: true })).toHaveAttribute("aria-current", "page");
      await nav.getByRole("link", { name: "Apps", exact: true }).click();
      await expect(page).toHaveURL(/\/apps\/$/);
      await expect(page.locator(".mobile-menu")).not.toHaveAttribute("open", "");
    } else {
      await expect(page.locator('.desktop-primary-nav a[aria-current="page"]')).toHaveText("Download");
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  });
}

test("the download action appears within the first phone screen", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/download/");
  const rect = await page.locator(".download-picker__result .button").boundingBox();
  expect(rect!.y + rect!.height).toBeLessThan(844);
});

for (const width of [390, 1440]) {
  test(`alternatives tables keep readable fields and working next steps at ${width}px`, async ({ page, request }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/alternatives/");
    const tables = page.locator(".alternatives-table");
    await expect(tables).toHaveCount(2);
    const first = tables.first();
    const film = first.locator("tbody tr").filter({ hasText: "FilmCraft" });
    await expect(film).toContainText("App guide only");
    const link = film.getByRole("link", { name: "App guide" });
    expect((await request.get((await link.getAttribute("href"))!)).ok()).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    const results = await new AxeBuilder({ page }).include(".alternatives-page").analyze();
    expect(results.violations.filter((item) => ["serious", "critical"].includes(item.impact ?? ""))).toEqual([]);
  });
}

test("comparison groups contain seven Adobe and six other workflows", async ({ page }) => {
  await page.goto("/vs-adobe/");
  await expect(page.locator('section[aria-labelledby="adobe-workflows"] .comparison-row')).toHaveCount(7);
  await expect(page.locator('section[aria-labelledby="beyond-adobe-workflows"] .comparison-row')).toHaveCount(6);
  await expect(page.locator(".comparison-row__title").filter({ hasText: "None" })).toHaveCount(0);
  await page.getByRole("link", { name: "Beyond Adobe · 6" }).click();
  await expect(page).toHaveURL(/#beyond-adobe-workflows$/);
});

for (const locale of ["zh-Hant", "pl", "de", "ja", "ko", "fr", "hi"]) {
  test(`${locale} download selection keeps localized labels and verified package links`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/${locale}/download/`);
    await page.locator("#download-app").selectOption("pdfcraft");
    await page.locator("#download-system").selectOption("2");
    await expect(page.locator(".download-picker__result a")).toHaveAttribute("href", /pdfcraft-0\.11\.0-linux-x86_64\.AppImage$/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    await page.locator(".mobile-menu > summary").click();
    await expect(page.locator(".mobile-primary-nav a[aria-current=page]")).toHaveCount(1);
  });
}

test("mobile menu and direct package links remain usable without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const page = await context.newPage();
    await page.goto(`${baseURL}/download/`);
    await expect(page.locator(".download-picker__result a")).toHaveAttribute("href", /photocraft-0\.12\.0-windows-x64\.msi$/);
    await page.locator(".mobile-menu > summary").click();
    await page.locator(".mobile-primary-nav").getByRole("link", { name: "Apps", exact: true }).click();
    await expect(page).toHaveURL(/\/apps\/$/);
  } finally { await context.close(); }
});
