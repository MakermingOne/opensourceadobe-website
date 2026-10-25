import { describe, expect, it } from "vitest";

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
      const entry = issue.entries.find((item) => item.appSlug === slug && item.sourceUrl === `https://github.com/storytold/${slug}/releases/tag/v${version}`)!;
      expect(entry?.kind).toBe("Official release");
      expect(entry?.eventDate).toBe("2026-10-14");
    }
  });
  it("extends the same day's brief without losing earlier reporting", () => {
    expect(new Set(dailyUpdates.map((item) => item.date)).size).toBe(dailyUpdates.length);
    expect(dailyUpdates.find((item) => item.date === "2026-10-13")?.entries).toHaveLength(6);
    const ids = dailyUpdates.find((item) => item.date === "2026-10-15")!.entries.map((entry) => entry.id);
    expect(ids).toEqual(expect.arrayContaining(["launcher-041", "pdfcraft-080", "pdfcraft-current-limits", "community-android-ports", "community-pdfcraft-printing", "pdfcraft-web-printing"]));
  });
  it("keeps current packages aligned with the current verified release", () => {
    expect(officialDownloads.photocraft.version).toBe("0.15.1");
    expect(officialDownloads.photocraft.packages.every((item) => item.filename.includes("0.15.1"))).toBe(true);
    expect(officialDownloads.pdfcraft.version).toBe("0.13.0");
  });
  it("uses published version documentation instead of the stale web-printing claim", () => {
    expect(guideBySlug.pdfcraft.platformNotes.find(([platform]) => platform === "Web")?.[1]).toContain("browser print dialog");
    expect(guideBySlug.pdfcraft.faqs.find((faq) => faq.question.includes("offline"))?.answer).not.toContain("web printing as a gap");
    expect(dailyUpdates.find((item) => item.date === "2026-10-15")!.entries.find((entry) => entry.id === "pdfcraft-web-printing")?.sourceUrl).toBe("https://github.com/storytold/pdfcraft/blob/v0.8.0/docs/gaps.md");
  });
});
