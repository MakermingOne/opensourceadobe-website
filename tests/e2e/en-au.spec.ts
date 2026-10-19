import { expect, test } from "./fixtures";
import { apps } from "../../src/content/apps";
import { dictionaries } from "../../src/i18n/dictionaries";
test("Australian English tool links only target published translations and the flag loads", async ({ page, request }) => {
  for (const path of ["/en-AU/", "/en-AU/download/"]) {
    await page.goto(path);
    for (const app of apps) await expect(page.locator('th[scope="row"] a').getByText(app.name, { exact: true })).toHaveAttribute("href", app.slug === "photocraft" ? "/en-AU/apps/photocraft/" : app.officialPage);
    for (const href of new Set(await page.locator('a[href^="/"]').evaluateAll(items => items.map(item => item.getAttribute("href")!)))) expect((await request.get(href)).status(), href).toBe(200);
    const flag = page.locator('.language-switcher summary img');
    await expect(flag).toHaveAttribute("src", "/flags/au.svg");
    await flag.evaluate((image: HTMLImageElement) => image.decode());
    expect(await flag.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
  }
  await page.goto("/en-AU/404/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", dictionaries["en-AU"].notFoundDescription);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});
