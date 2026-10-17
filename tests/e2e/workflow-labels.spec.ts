import { expect, test } from "./fixtures";

const counterparts = [
  ["WordCraft", "Microsoft Word"],
  ["SoundCraft", "Pro Tools"],
  ["DeckCraft", "Microsoft PowerPoint"],
  ["CADCraft", "AutoCAD"],
  ["GridCraft", "Microsoft Excel"],
  ["FigCraft", "Figma"],
] as const;

test("alternatives hub excludes proprietary editors from its open-source shortlist", async ({ page }) => {
  await page.goto("/alternatives/");
  const section = page.locator('section[aria-labelledby="only-open-source-heading"]');
  await expect(section).toContainText("the shortlist is PhotoCraft, GIMP, and Krita.");
  await expect(section).not.toContainText("the shortlist is PhotoCraft, GIMP, Krita, and Paint.NET");
  const note = section.getByRole("link", { name: "Paint.NET is free but not open source; it belongs in a free-software list, not an open-source one", exact: true });
  await expect(note).toHaveAttribute("href", "/alternatives/photoshop/");
  await expect(section).toContainText("Photopea is free and runs in a browser, but its code is closed.");
  await page.goto("/alternatives/photoshop/");
  const paint = page.getByRole("row").filter({ hasText: "Paint.NET" }).first();
  await expect(paint).toContainText("Freeware/proprietary");
  const photopea = page.getByRole("row").filter({ hasText: "Photopea" }).first();
  await expect(photopea).toContainText("not open source");
});

for (const route of ["/", "/apps/"]) {
  test(`${route} uses consistent card and table labels for beyond-Adobe workflows`, async ({ page }) => {
    await page.goto(route);
    for (const [name, counterpart] of counterparts) {
      const cards = page.locator(route === "/" ? ".workflow-card" : ".choice-card");
      const card = cards.filter({ has: page.getByText(name, { exact: true }) });
      await expect(card.locator(route === "/" ? ".workflow-card__mapping" : ".choice-card__mapping")).toHaveText(`Beyond Adobe · compares with ${counterpart}`);
      const row = page.locator(".app-table tbody tr").filter({ has: page.getByRole("rowheader", { name, exact: true }) });
      await expect(row.locator("td").first()).toHaveText(`Beyond Adobe (vs ${counterpart})`);
    }
    await expect(page.locator(".app-table").getByRole("columnheader", { name: "Compared workflow", exact: true })).toHaveCount(1);
    const photo = page.locator(route === "/" ? ".workflow-card" : ".choice-card").filter({ has: page.getByText("PhotoCraft", { exact: true }) });
    await expect(photo.locator(route === "/" ? ".workflow-card__mapping" : ".choice-card__mapping")).toHaveText(route === "/" ? "For the Photoshop workflow" : "Closest to Photoshop");
  });
}

test("GitHub repository table matches the workflow decision table", async ({ page }) => {
  await page.goto("/github/");
  const table = page.getByRole("table", { name: /The 13 Crafting Apps/ });
  for (const [name, counterpart] of counterparts) {
    const row = table.getByRole("row").filter({ has: page.getByRole("cell", { name, exact: true }) });
    await expect(row.getByRole("cell").nth(1)).toHaveText(`Beyond Adobe (vs ${counterpart})`);
  }
});
