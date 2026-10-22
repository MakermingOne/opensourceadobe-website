import { describe, expect, it } from "vitest";
import { dailyUpdates, latestUpdateDate } from "@/content/updates";
import { releasesBySlug, releaseCheckedOn } from "@/content/releases";
import { guideBySlug } from "@/content/guides";
import { pageUpdatedAt } from "@/content/page-dates";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AppGuideLanding } from "@/components/app-guide-landing";
import { appsBySlug } from "@/content/apps";

describe("October 17 verified increments", () => {
  it("publishes the new release with its original event date", () => {
    expect(latestUpdateDate).toBe("2026-10-22");
    const issue = dailyUpdates.find((item) => item.date === "2026-10-17");
    const entry = issue?.entries.find((item) => item.id === "vectorcraft-0120");
    expect(entry?.kind).toBe("Official release");
    expect(entry?.eventDate).toBe("2026-10-16");
    expect(entry?.sourceUrl).toBe("https://github.com/storytold/vectorcraft/releases/tag/v0.12.0");
    expect(releasesBySlug.get("vectorcraft")?.version).toBe("0.14.0");
    expect(releaseCheckedOn("vectorcraft")).toBe("2026-10-22");
    expect(releaseCheckedOn("photocraft")).toBe("2026-10-22");
    expect(pageUpdatedAt("/apps/vectorcraft/")).toBe("2026-10-22");
  });
  it("keeps legacy Illustrator export limits visible", () => {
    const answer = guideBySlug.vectorcraft.faqs.find((faq) => faq.question === "Can VectorCraft open Illustrator files?")?.answer;
    expect(answer).toContain("version 7");
    expect(answer).toContain("one artboard");
    expect(answer).toContain("no transparency");
    expect(guideBySlug.vectorcraft.platformNotes.find(([platform]) => platform === "Linux")?.[1]).toContain("0.12.0 release notes");
  });
  it("attributes the printer follow-up without claiming a universal fix", () => {
    const entry = dailyUpdates.find((issue) => issue.date === "2026-10-17")?.entries.find((item) => item.id === "community-pdfcraft-printer-follow-up");
    expect(entry?.kind).toBe("Community report");
    expect(entry?.eventDate).toBe("2026-10-16");
    expect(entry?.sourceUrl).toContain("/comment/ph249u7/");
    expect(entry?.summary).toContain("does not specify");
    expect(entry?.impact).toContain("not a universal fix");
    expect(dailyUpdates.find((issue) => issue.date === "2026-10-16")?.entries).toHaveLength(3);
  });
  it("takes VectorCraft download actions to the checked release rather than stale product-page installers", () => {
    const html = renderToStaticMarkup(createElement(AppGuideLanding, { app: appsBySlug.get("vectorcraft")!, guide: guideBySlug.vectorcraft, sources: [] }));
    const actions = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>Download VectorCraft for [^<]+<\/a>/g)];
    expect(actions).toHaveLength(3);
    expect(actions.every((action) => action[1].startsWith("https://github.com/storytold/vectorcraft/releases/download/v0.14.0/"))).toBe(true);
    expect(html).toContain('href="#download-heading"');
  });
});
