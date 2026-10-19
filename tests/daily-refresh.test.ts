import { describe, expect, it } from "vitest";
import { releasesBySlug, releaseCheckedOn } from "@/content/releases";
import { dailyUpdates } from "@/content/updates";
import { officialDownloads } from "@/content/downloads";
import { guideBySlug } from "@/content/guides";

const morningVersions = {
  photocraft: "0.9.0", vectorcraft: "0.11.0", filmcraft: "0.8.0", lightcraft: "0.8.0",
  effectcraft: "0.10.0", designcraft: "0.8.0", figcraft: "0.6.0", wordcraft: "0.7.0",
  soundcraft: "0.7.0", deckcraft: "0.7.0", cadcraft: "0.7.0", gridcraft: "0.7.0",
};

describe("October 15 morning source refresh", () => {
  it("records current official releases with original event dates", () => {
    const issue = dailyUpdates.find((item) => item.date === "2026-10-15")!;
    for (const [slug, version] of Object.entries(morningVersions)) {
      const release = releasesBySlug.get(slug)!;
      if (slug !== "vectorcraft") {
        expect(release.version).toBe(version);
        expect(release.publishedAt).toMatch(/^2026-10-14T/);
        expect(releaseCheckedOn(slug)).toBe("2026-10-17");
      }
      const entry = issue.entries.find((item) => item.appSlug === slug && item.sourceUrl === `https://github.com/storytold/${slug}/releases/tag/v${version}`)!;
      expect(entry?.kind).toBe("Official release");
      expect(entry?.eventDate).toBe("2026-10-14");
    }
  });
  it("extends the same day's brief without losing earlier reporting", () => {
    expect(new Set(dailyUpdates.map((item) => item.date)).size).toBe(dailyUpdates.length);
    expect(dailyUpdates.find((item) => item.date === "2026-10-13")?.entries).toHaveLength(5);
    const ids = dailyUpdates.find((item) => item.date === "2026-10-15")!.entries.map((entry) => entry.id);
    expect(ids).toEqual(expect.arrayContaining(["launcher-041", "pdfcraft-080"]));
  });
  it("updates verified PhotoCraft packages but leaves PdfCraft's release unchanged", () => {
    expect(officialDownloads.photocraft.version).toBe("0.9.0");
    expect(officialDownloads.photocraft.packages.every((item) => item.filename.includes("0.9.0"))).toBe(true);
    expect(officialDownloads.pdfcraft.version).toBe("0.8.0");
  });
  it("uses published version documentation instead of the stale web-printing claim", () => {
    expect(guideBySlug.pdfcraft.platformNotes.find(([platform]) => platform === "Web")?.[1]).toContain("browser print dialog");
    expect(guideBySlug.pdfcraft.faqs.find((faq) => faq.question.includes("offline"))?.answer).not.toContain("web printing as a gap");
    expect(dailyUpdates.flatMap((issue) => issue.entries).some((entry) => entry.id === "pdfcraft-web-printing")).toBe(false);
  });
});
