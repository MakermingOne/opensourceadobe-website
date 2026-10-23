import { describe, expect, it } from "vitest";

import { apps, publishedApps } from "@/content/apps";
import { photocraftMedia } from "@/content/media";
import { sources } from "@/content/sources";

describe("app content contract", () => {
  it("contains the thirteen apps in the official ArtCraft directory", () => {
    expect(apps.map((app) => app.name)).toEqual([
      "PhotoCraft",
      "VectorCraft",
      "FilmCraft",
      "LightCraft",
      "PdfCraft",
      "EffectCraft",
      "DesignCraft",
      "FigCraft",
      "WordCraft",
      "SoundCraft",
      "DeckCraft",
      "CADCraft",
      "GridCraft",
    ]);
  });

  it("publishes a sourced guide for every app", () => {
    expect(publishedApps.map((app) => app.slug).sort()).toEqual(apps.map((app) => app.slug).sort());
  });

  it("uses unique slugs and rejects unapproved product names", () => {
    const slugs = apps.map((app) => app.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(apps.some((app) => app.name === "PrintCraft")).toBe(false);
  });

  it("links every app claim to a dated source", () => {
    const sourceIds = new Set(sources.map((source) => source.id));

    for (const app of apps) {
      expect(app.sourceIds.length).toBeGreaterThan(0);
      expect(app.lastVerified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const sourceId of app.sourceIds) {
        expect(sourceIds.has(sourceId)).toBe(true);
      }
    }
  });

  it("represents unknown fields explicitly", () => {
    for (const app of apps) {
      expect(app.platforms.length).toBeGreaterThan(0);
      expect(app.license.length).toBeGreaterThan(0);
      expect(app.unknowns.length).toBeGreaterThan(0);
    }
  });

  it("records the current downloadable alpha releases for the three new guides", () => {
    expect(
      apps
        .filter((app) => ["vectorcraft", "filmcraft", "lightcraft"].includes(app.slug))
        .map(({ slug, status, version }) => ({ slug, status, version })),
    ).toEqual([
      { slug: "vectorcraft", status: "in-development", version: "0.16.0" },
      { slug: "filmcraft", status: "in-development", version: "0.12.0" },
      { slug: "lightcraft", status: "in-development", version: "0.13.0" },
    ]);
  });

  it("records locally hosted PhotoCraft screenshots with attribution", () => {
    expect(photocraftMedia).toHaveLength(3);
    expect(new Set(photocraftMedia.map((media) => media.id)).size).toBe(3);

    for (const media of photocraftMedia) {
      expect(media.src).toMatch(/^\/images\/artcraft\/.*\.webp$/);
      expect(media.width).toBeGreaterThan(0);
      expect(media.height).toBeGreaterThan(0);
      expect(media.sourceLabel).toContain("ArtCraft");
      expect(media.sourceUrl).toMatch(/^https:\/\/getartcraft\.com\//);
    }
  });

  it("records the official ArtCraft homepage and secondary PhotographyTalk report", () => {
    expect(sources).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: "artcraft-home",
          type: "official-page",
          url: "https://getartcraft.com/",
        }),
        expect.objectContaining({
          id: "photographytalk-artcraft",
          type: "third-party",
          title: expect.stringContaining("Secondary reporting"),
          url: "https://www.photographytalk.com/free-adobe-alternatives-artcraft/",
        }),
      ]),
    );
  });
});
