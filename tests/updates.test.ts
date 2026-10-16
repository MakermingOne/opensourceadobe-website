import { describe, expect, it } from "vitest";
import { dailyUpdates, latestUpdateDate, updatesForApp } from "@/content/updates";
import { publishedRoutes } from "@/lib/site";
import { guideBySlug } from "@/content/guides";
import { appsBySlug } from "@/content/apps";
import { sourcesById } from "@/content/sources";
import { pageUpdatedAt } from "@/content/page-dates";

describe("dated development journal", () => {
  it("adds the current brief without rewriting the October 13 record", () => {
    expect(latestUpdateDate).toBe("2026-10-17");
    expect(dailyUpdates.find((issue) => issue.date === "2026-10-13")?.entries).toHaveLength(6);
    expect(dailyUpdates.find((issue) => issue.date === "2026-10-15")?.entries).toHaveLength(18);
    expect(dailyUpdates[0].entries).toHaveLength(2);
    expect(dailyUpdates.find((issue) => issue.date === "2026-10-16")?.entries).toHaveLength(3);
    expect(publishedRoutes).toContain("/updates/2026-10-17/");
    expect(publishedRoutes).toContain("/updates/2026-10-16/");
    expect(publishedRoutes).toContain("/updates/2026-10-15/");
  });
  it("keeps the real release date distinct from the review date", () => {
    const entry = dailyUpdates.find((issue) => issue.date === "2026-10-15")!.entries.find((item) => item.id === "pdfcraft-080")!;
    expect(entry.eventDate).toBe("2026-10-14");
    expect(entry.sourceUrl).toBe("https://github.com/storytold/pdfcraft/releases/tag/v0.8.0");
    expect(updatesForApp("pdfcraft")).toHaveLength(8);
  });
  it("labels Reddit separately and retains original sources", () => {
    for (const issue of dailyUpdates) {
      expect(new Set(issue.entries.map((entry) => entry.id)).size).toBe(issue.entries.length);
      for (const entry of issue.entries) {
        expect(entry.sourceUrl).toMatch(/^https:\/\//);
        expect(publishedRoutes).toContain(entry.relatedPath);
        if (entry.sourceUrl.includes("reddit.com")) expect(entry.kind).toBe("Community report");
      }
    }
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
    expect(pageUpdatedAt("/apps/vectorcraft/")).toBe("2026-10-17");
  });
});
