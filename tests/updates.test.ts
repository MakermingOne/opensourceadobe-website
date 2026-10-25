import { describe, expect, it } from "vitest";
import { dailyUpdates, latestUpdateDate, updatesForApp } from "@/content/updates";
import { publishedRoutes } from "@/lib/site";
import { guideBySlug } from "@/content/guides";
import { appsBySlug } from "@/content/apps";
import { sourcesById } from "@/content/sources";
import { pageUpdatedAt } from "@/content/page-dates";

describe("dated development journal", () => {
  it("keeps exactly one brief for every calendar day, through October 25", () => {
    expect(latestUpdateDate).toBe("2026-10-25");
    const dates = dailyUpdates.map((issue) => issue.date);
    expect(new Set(dates).size).toBe(dates.length);
    for (let day = 13; day <= 25; day++) expect(dates).toContain(`2026-10-${day}`);
    expect(publishedRoutes).toContain("/updates/2026-10-18/");
    expect(publishedRoutes).toContain("/updates/2026-10-19/");
  });
  it("retains attributed community news and product documentation", () => {
    expect(updatesForApp().some((entry) => entry.kind === "Community report")).toBe(true);
    for (const issue of dailyUpdates) {
      for (const entry of issue.entries) {
        expect(entry.sourceUrl).toMatch(/^https:\/\//);
        expect(publishedRoutes).toContain(entry.relatedPath);
        if (entry.sourceUrl.includes("reddit.com")) expect(entry.kind).toBe("Community report");
      }
    }
  });
  it("preserves release dates and keeps website maintenance out of the news", () => {
    const entry = updatesForApp("pdfcraft").find((item) => item.id === "pdfcraft-080")!;
    expect(entry.eventDate).toBe("2026-10-14");
    expect(entry.date).toBe("2026-10-15");
    const text = JSON.stringify(dailyUpdates);
    expect(text).not.toMatch(/Our (?:standalone )?download (?:guide|links)/);
  });
  it("records the VectorCraft RPM warning as documentation, not a shipped fix", () => {
    const entry = dailyUpdates.find((issue) => issue.date === "2026-10-16")!.entries.find((item) => item.id === "vectorcraft-rpm-runtime-limits");
    expect(entry).toBeDefined();
    expect(entry?.kind).toBe("Documentation update");
    expect(entry?.eventDate).toBe("2026-10-15");
    expect(entry?.summary).toContain("0.10.0");
    expect(entry?.summary).toContain("Rocky Linux 9");
    expect(entry?.impact).toContain("not a new release");
    expect(entry?.relatedPath).toBe("/apps/vectorcraft/");
    const source = sourcesById.get("vectorcraft-rpm-runtime-limits");
    expect(source?.url).toBe("https://github.com/storytold/vectorcraft/commit/e12a670c405b5c4a059de3be02920c0c6e05b0dc");
    expect(source?.accessedAt).toBe("2026-10-16");
    expect(appsBySlug.get("vectorcraft")?.sourceIds).toContain("vectorcraft-rpm-runtime-limits");
    expect(guideBySlug.vectorcraft.platformNotes.find(([platform]) => platform === "Linux")?.[1]).toContain("libm GLIBC_2.35");
    expect(pageUpdatedAt("/apps/vectorcraft/")).toBe("2026-10-24");
  });
});
