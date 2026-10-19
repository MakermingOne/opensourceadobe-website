import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("AI history feature is discoverable, responsive and interactive", async ({ page }) => {
  await page.route("**/*", (route) => new URL(route.request().url()).hostname === "127.0.0.1" ? route.continue() : route.abort());
  await page.goto("/tutorials/");
  await page.getByRole("link", { name: "Explore AI history: 1955 →" }).click();
  await expect(page).toHaveURL(/\/learn\/ai-history-1955\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("What happened in1955 with AI?");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://opensourceadobe.com/learn/ai-history-1955/");
  await expect(page.locator("body")).not.toContainText("1955.ai");
  for (const label of ["1950", "1955 · Aug", "1955 · LT", "1956", "1958"]) {
    await page.getByRole("tab", { name: label, exact: true }).click();
    await expect(page.getByRole("tab", { name: label, exact: true })).toHaveAttribute("aria-selected", "true");
  }
  await page.getByRole("tab", { name: "1955 · Aug", exact: true }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tabpanel")).toContainText("38 of the first 52");
  await page.getByRole("button", { name: "Next milestone" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("A research field gathers");
  await page.getByRole("button", { name: "Previous milestone" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Logic Theorist");
  await page.locator('img[alt*="Nathaniel Rochester"]').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => [...document.querySelectorAll('img[src*="/images/ai-history/"]')].every((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0));
  await expect(page.locator('img[src*="/images/ai-history/"]')).toHaveCount(5);
  await page.getByText("Was 1955 the Back to the Future year?", { exact: true }).click();
  await expect(page.locator("details[open]").last()).toContainText("October 21, 2015");
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))).toEqual([]);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "/tmp/opensourceadobe-ai-history-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: "/tmp/opensourceadobe-ai-history-desktop.png", fullPage: true });
});
