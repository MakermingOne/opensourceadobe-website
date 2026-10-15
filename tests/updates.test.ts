import { describe, expect, it } from "vitest";
import { dailyUpdates, latestUpdateDate, updatesForApp } from "@/content/updates";
import { publishedRoutes } from "@/lib/site";

describe("dated development journal", () => {
  it("adds the current brief without rewriting the October 13 record", () => {
    expect(latestUpdateDate).toBe("2026-10-15");
    expect(dailyUpdates.find((issue) => issue.date === "2026-10-13")?.entries).toHaveLength(6);
    expect(dailyUpdates[0].entries).toHaveLength(18);
    expect(publishedRoutes).toContain("/updates/2026-10-15/");
  });
  it("keeps the real release date distinct from the review date", () => {
    const entry = dailyUpdates[0].entries.find((item) => item.id === "pdfcraft-080")!;
    expect(entry.eventDate).toBe("2026-10-14");
    expect(entry.sourceUrl).toBe("https://github.com/storytold/pdfcraft/releases/tag/v0.8.0");
    expect(updatesForApp("pdfcraft")).toHaveLength(5);
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
});
