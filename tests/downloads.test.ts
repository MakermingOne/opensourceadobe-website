import { describe, expect, it } from "vitest";
import { officialAssetUrl, officialDownloads } from "@/content/downloads";
import { appsBySlug } from "@/content/apps";
import { releasesBySlug, releaseCheckedOn } from "@/content/releases";
import { sourcesById } from "@/content/sources";
import { guideBySlug } from "@/content/guides";

describe("official keyword landing pages", () => {
  for (const slug of ["pdfcraft", "photocraft"] as const) {
    it(`${slug} download snapshot matches the app and immutable release`, () => {
      const record = officialDownloads[slug];
      expect(record.version).toBe(appsBySlug.get(slug)?.version);
      expect(releasesBySlug.get(slug)?.url).toBe(`https://github.com/storytold/${slug}/releases/tag/v${record.version}`);
      expect(record.packages).toHaveLength(3);
      for (const item of record.packages) {
        expect(item.filename).toContain(`${slug}-${record.version}-`);
        expect(officialAssetUrl(slug, item.filename)).toBe(`https://github.com/storytold/${slug}/releases/download/v${record.version}/${item.filename}`);
      }
      expect(appsBySlug.get(slug)?.lastVerified).toBe(releaseCheckedOn(slug));
      expect(sourcesById.get(`${slug}-official`)?.accessedAt).toBe(releaseCheckedOn(slug));
    });
  }
  it("updates rechecked sources without changing unrelated source dates", () => {
    expect(releaseCheckedOn("vectorcraft")).toBe("2026-10-30");
    expect(sourcesById.get("vectorcraft-official")?.accessedAt).toBe("2026-10-30");
    expect(sourcesById.get("artcraft-repository")?.accessedAt).toBe("2026-10-14");
  });
  it("publishes a bounded PdfCraft guide instead of an untested review", () => {
    expect(appsBySlug.get("pdfcraft")?.detailPublished).toBe(true);
    expect(guideBySlug.pdfcraft.intro).toContain("Early alpha");
    expect(guideBySlug.pdfcraft.verdictDetail).toContain("Office-to-PDF");
    expect(guideBySlug.pdfcraft.faqs).toHaveLength(7);
    expect(sourcesById.get("artcraft-repository")?.url).toBe("https://github.com/storytold/artcraft");
  });
});
