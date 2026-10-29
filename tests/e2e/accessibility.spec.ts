import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

const routes = [
  "/",
  "/apps/",
  "/vs-adobe/",
  "/download/",
  "/tutorials/",
  "/faq/",
  "/apps/photocraft/",
  "/apps/vectorcraft/",
  "/apps/filmcraft/",
  "/apps/lightcraft/",
  "/apps/pdfcraft/",
  "/apps/effectcraft/",
  "/apps/designcraft/",
  "/apps/figcraft/",
  "/apps/wordcraft/",
  "/apps/soundcraft/",
  "/apps/deckcraft/",
  "/apps/cadcraft/",
  "/apps/gridcraft/",
  "/github/",
  "/about/",
  "/brandon-thomas/",
  "/contact/",
  "/disclaimer/",
  "/privacy/",
  "/alternatives/",
  "/alternatives/photoshop/",
  "/alternatives/lightroom/",
  "/alternatives/illustrator/",
  "/alternatives/acrobat/",
  "/alternatives/after-effects/",
  "/alternatives/indesign/",
  "/alternatives/substance-painter/",
  "/artcraft/",
  "/artcraft/pricing/",
  "/artcraft/safety/",
  "/artcraft/alternatives/",
  "/artcraft/photocraft-how-to-use/",
  "/updates/",
  "/updates/2026-10-13/",
  "/updates/2026-10-15/",
];

for (const route of routes) {
  test(`${route} has no serious accessibility violations`, async ({ page }) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations
      .filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""))
      .map((violation) => ({
        id: violation.id,
        nodes: violation.nodes.map((node) => ({ target: node.target, message: node.any[0]?.message })),
      }));
    expect(serious).toEqual([]);
  });
}

for (const width of [375, 768, 1024, 1280]) {
  test(`home has no document overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(documentWidth).toBeLessThanOrEqual(width);
  });
}

test("home remains usable at a 200% desktop zoom equivalent", async ({ page }) => {
  await page.setViewportSize({ width: 640, height: 450 });
  await page.goto("/", { waitUntil: "networkidle" });
  const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(documentWidth).toBeLessThanOrEqual(640);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("link", { name: "Choose your app", exact: true })).toBeVisible();
});

test("home hero headline stays balanced on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  const heading = page.getByRole("heading", { level: 1 });
  const fontSize = await heading.evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize));
  expect(fontSize).toBeLessThanOrEqual(90);
  await expect(heading.locator("span")).toHaveCSS("white-space", "nowrap");
});

for (const route of ["/brandon-thomas/", "/alternatives/photoshop/", "/alternatives/lightroom/", "/apps/pdfcraft/", "/apps/photocraft/", "/github/"]) {
  for (const width of [375, 768, 1280]) {
    test(`${route} has no document overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(documentWidth).toBeLessThanOrEqual(width);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }
}

test("Photoshop guide exposes the required comparison and FAQ", async ({ page }) => {
  await page.goto("/alternatives/photoshop/", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Open source Photoshop alternatives, compared");
  await expect(page.getByRole("heading", { name: "GIMP vs Photoshop: what actually still breaks" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "If you are already using Photopea" })).toBeVisible();
  await expect(page.getByRole("table")).toHaveCount(1);
  expect(await page.locator('a[href="/apps/photocraft/"]').count()).toBeGreaterThanOrEqual(2);
});

test("Lightroom guide separates development from cataloguing", async ({ page }) => {
  await page.goto("/alternatives/lightroom/", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Open source Lightroom alternatives");
  await expect(page.getByRole("heading", { name: "RAW development: who does it well" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Cataloguing and library management" })).toBeVisible();
  await expect(page.getByRole("table")).toHaveCount(2);
  await expect(page.getByRole("link", { name: /LightCraft app guide/i })).toHaveCount(1);
});

test("home introduces the current ArtCraft app hub", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Open-source Adobe alternatives and everyday tools from ArtCraft.");
  await expect(page.getByText("PhotoCraft", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("VectorCraft", { exact: true }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Explore 13 ArtCraft apps by workflow" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What should you check before switching?" })).toBeVisible();
  await expect(page.getByRole("img", { name: /illustrated creative workbench/i })).toBeVisible();
  await expect(page.locator("[data-workflow-icon]")).toHaveCount(13);
  for (const slug of ["figcraft", "wordcraft", "soundcraft", "deckcraft", "cadcraft", "gridcraft"]) {
    await expect(page.locator(`[data-workflow-icon="${slug}"] > path`)).not.toHaveCount(0);
  }
  await expect(page.locator("body")).not.toContainText("[VERIFY]");
});

test("primary navigation exposes the complete information architecture in order", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const navigation = page.getByRole("navigation", { name: "Primary navigation" });
  const links = navigation.getByRole("link");
  await expect(links).toHaveText(["Home", "Apps", "Alternatives", "Compare", "Download", "Tutorials", "Updates", "FAQ", "About", "GitHub"]);
  await expect(links.nth(0)).toHaveAttribute("href", "/");
  await expect(links.nth(4)).toHaveAttribute("href", "/download/");
  await expect(links.nth(5)).toHaveAttribute("href", "/tutorials/");
  await expect(links.nth(6)).toHaveAttribute("href", "/updates/");
  await expect(links.nth(7)).toHaveAttribute("href", "/faq/");
  await expect(links.nth(9)).toHaveAttribute("href", "/github/");
});

test("PdfCraft guide answers download intent with official assets and alpha limits", async ({ page }) => {
  await page.goto("/apps/pdfcraft/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Download PdfCraft: ArtCraft’s PDF workbench");
  await expect(page.getByRole("link", { name: "Download PdfCraft for Windows x64" })).toHaveAttribute("href", /github\.com\/storytold\/pdfcraft\/releases\/download\/v0\.15\.0\/pdfcraft-0\.15\.0-windows-x64\.msi$/);
  await expect(page.getByText(/not a complete Acrobat Pro replacement/).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Download PdfCraft", exact: true })).toHaveAttribute("href", "#download-heading");
  expect(await page.locator('script[type="application/ld+json"]').allTextContents()).toEqual(expect.arrayContaining([expect.stringContaining('"@type":"FAQPage"')]));
});

test("GitHub directory distinguishes studio and individual apps", async ({ page }) => {
  await page.goto("/github/");
  await expect(page.getByRole("link", { name: "Official ArtCraft GitHub" })).toHaveAttribute("href", "https://github.com/storytold/artcraft");
  await expect(page.getByRole("heading", { name: "ArtCraft studio, Crafting Apps or Launcher?" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Download PdfCraft from the official release" })).toHaveAttribute("href", "/apps/pdfcraft/");
});

for (const foundationPage of [
  { route: "/download/", heading: "Download from the official source" },
  { route: "/tutorials/", heading: "Start with the task you want to complete" },
  { route: "/faq/", heading: "OpenSourceAdobe FAQ" },
]) {
  test(`${foundationPage.route} foundation page provides useful starter content`, async ({ page }) => {
    const response = await page.goto(foundationPage.route, { waitUntil: "domcontentloaded" });

    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(foundationPage.heading);
  });
}

test("PhotoCraft landing page answers the switching questions before methodology", async ({ page }) => {
  await page.goto("/apps/photocraft/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("open-source Photoshop alternative");
  await expect(page.getByRole("heading", { name: "Can PhotoCraft replace Photoshop?" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What can you do with PhotoCraft?" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Who should try PhotoCraft now?" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Download PhotoCraft", exact: true })).toHaveAttribute("href", "#download-heading");
  await expect(page.getByRole("link", { name: "Download PhotoCraft for macOS" })).toHaveAttribute("href", /github\.com\/storytold\/photocraft\/releases\/download\/v0\.17\.0\/photocraft-0\.17\.0-macos-universal\.dmg$/);
  await expect(page.getByText("Early alpha", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("CLAIM 01", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Evidence ledger", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "See PhotoCraft's interface" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "PhotoCraft vs. Photoshop by task" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What still needs proof" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Your first PhotoCraft test" })).toBeVisible();
  await expect(page.locator(".product-gallery").getByRole("figure", { name: /Product screenshot/i })).toHaveCount(3);
  await expect(page.getByText("Is PhotoCraft suitable for commercial or client work?", { exact: true })).toBeVisible();
  await expect(page.getByText("Can I use PhotoCraft in a browser?", { exact: true })).toBeVisible();

  const faqSchema = await page.locator('script[type="application/ld+json"]').allTextContents();
  expect(faqSchema.some((schema) => schema.includes('"@type":"FAQPage"'))).toBe(true);
});

test("the app directory helps visitors choose by workflow", async ({ page }) => {
  await page.goto("/apps/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Browse the ArtCraft app family.");
  await expect(page.getByRole("heading", { name: "Choose an app by the work you need to do." })).toBeVisible();
  await expect(page.getByText("source-led directory", { exact: false })).toHaveCount(0);
  await expect(page.getByRole("link", { name: /Explore VectorCraft/i })).toHaveAttribute("href", "/apps/vectorcraft/");
});

test("the comparison page gives a practical starting recommendation", async ({ page }) => {
  await page.goto("/vs-adobe/", { waitUntil: "networkidle" });

  await expect(page.getByRole("heading", { level: 1 })).toContainText("ArtCraft software vs Adobe, one workflow at a time.");
  await expect(page.getByText("Officially described tasks", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Do not assume yet", { exact: true })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Best starting point" }).first()).toBeVisible();
});

for (const guide of [
  { slug: "vectorcraft", app: "VectorCraft", adobe: "Illustrator" },
  { slug: "filmcraft", app: "FilmCraft", adobe: "Premiere Pro" },
  { slug: "lightcraft", app: "LightCraft", adobe: "Lightroom" },
]) {
  test(`${guide.app} guide answers the switching questions`, async ({ page }) => {
    await page.goto(`/apps/${guide.slug}/`, { waitUntil: "networkidle" });

    await expect(page.getByRole("heading", { level: 1 })).toContainText(`open-source ${guide.adobe} alternative`);
    await expect(page.getByRole("heading", { name: `Can ${guide.app} replace ${guide.adobe}?` })).toBeVisible();
    await expect(page.getByRole("heading", { name: `What can you do with ${guide.app}?` })).toBeVisible();
    await expect(page.getByRole("heading", { name: `Who should try ${guide.app} now?` })).toBeVisible();
    await expect(page.getByRole("link", { name: `Download ${guide.app}`, exact: true }).first()).toHaveAttribute(
      "href",
      "#download-heading",
    );
    await expect(page.getByText("CLAIM 01", { exact: true })).toHaveCount(0);
  });
}
