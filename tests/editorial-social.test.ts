import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { pageMetadata } from "@/lib/metadata";
import { publishedRoutes } from "@/lib/site";

describe("complete social metadata", () => {
  for (const path of publishedRoutes) {
    it(`${path} has a large image card with the resolved page title`, () => {
      const metadata = pageMetadata({ title: "A source-led guide", description: "The page description.", path });
      const expectedTitle = path === "/" ? "A source-led guide" : "A source-led guide | OpenSourceAdobe";
      expect(metadata.openGraph?.title).toBe(expectedTitle);
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.openGraph?.images).toEqual([expect.objectContaining({ width: 1200, height: 630, alt: expectedTitle, url: expect.stringMatching(/^https:\/\/opensourceadobe.com\/images\/og\/.+\.png$/) })]);
      expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: expectedTitle, description: "The page description.", images: expect.any(Array) });
    });
  }
  it("preserves absolute titles and supplied images", () => {
    const metadata = pageMetadata({ title: "An exact title", description: "Exact copy.", path: "/github/", image: "/images/og/artcraft-github.png", absoluteTitle: true });
    expect(metadata.openGraph?.title).toBe("An exact title");
    expect(metadata.openGraph?.images).toEqual([{ url: "https://opensourceadobe.com/images/og/artcraft-github.png", width: 1200, height: 630, alt: "An exact title" }]);
  });
  it("uses the two requested image filenames", () => {
    for (const [path, filename] of [["/apps/", "artcraft-apps.png"], ["/alternatives/", "artcraft-alternatives.png"]]) {
      const metadata = pageMetadata({ title: "Title", description: "Description", path });
      expect(metadata.openGraph?.images).toEqual([expect.objectContaining({ url: `https://opensourceadobe.com/images/og/${filename}` })]);
    }
  });
});

describe("requested editorial corrections", () => {
  it("explains all thirteen apps without an ambiguous standalone count", () => {
    const page = readFileSync("src/app/(en)/github/page.tsx", "utf8");
    expect(page).toContain("Twelve of the thirteen apps have a browser target; FilmCraft is distributed for macOS, Windows and Linux only.");
    expect(page).not.toContain("The official directory lists browser targets for twelve apps");
    expect(page).toContain("<GuideFaq items={githubFaqs}");
    expect(page.indexOf('id="faq-heading"')).toBeGreaterThan(page.indexOf('id="community-heading"'));
    expect(page.indexOf('id="faq-heading"')).toBeLessThan(page.indexOf("<SourceList"));
  });
  it("clarifies the alternatives scale without redundant progress copy", () => {
    const page = readFileSync("src/app/(en)/alternatives/page.tsx", "utf8");
    expect(page).toContain("How close it gets");
    expect(page).not.toContain("<th>Ceiling</th>");
    expect(page).not.toContain(': "Guide in progress"');
    expect(page).toContain("not quality ratings");
  });
  it("explains the download and installation journey without implying official ownership", () => {
    const page = readFileSync("src/app/(en)/page.tsx", "utf8");
    expect(page).toContain("Free, open-source tools. Official downloads. Practical installation guides.");
    expect(page).toContain("Compare all 13 ArtCraft apps, choose a Windows, Mac or Linux download, and check what works before switching.");
  });
  it("uses page-specific editorial dates instead of the latest-news date in the footer", () => {
    const footer = readFileSync("src/components/site-footer.tsx", "utf8");
    expect(footer).not.toContain("Latest brief:");
    expect(footer).toContain("FooterUpdatedDate");
  });
});
