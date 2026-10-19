import { describe, expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
import { releasesBySlug } from "@/content/releases";
import { getPageContent } from "@/content/pages";
import { translatedLocales } from "@/i18n/config";
import { enPages } from "@/content/pages/en";
import { guideBySlug } from "@/content/guides";
import { pageUpdatedAt } from "@/content/page-dates";

describe("October 17 evening source-qualified additions", () => {
  const issue = dailyUpdates.find((entry) => entry.date === "2026-10-17")!;
  it("adds to today's issue without duplicating it or inventing a release", () => {
    expect(dailyUpdates.filter((entry) => entry.date === issue.date)).toHaveLength(1);
    expect(issue.entries).toHaveLength(2);
    expect(issue.entries.find((entry) => entry.id === "vectorcraft-0120")).toBeDefined();
    const fig = issue.entries.find((entry) => entry.id === "figcraft-automation-roots-docs");
    expect(fig?.kind).toBe("Documentation update");
    expect(fig?.eventDate).toBe("2026-10-17");
    expect(fig?.sourceUrl).toContain("ac4b98dbd72cea838447bd34621a47f1d40f0801");
    expect(fig?.impact).toContain("not a new release");
    expect(fig?.summary).toContain("opt-in");
    expect(releasesBySlug.get("figcraft")?.version).toBe("0.6.0");
  });
  it("excludes community experiences from the official brief", () => {
    expect(issue.entries.every((entry) => entry.kind !== "Community report")).toBe(true);
  });
  it("syncs the dated digest and PhotoCraft brush advice in every published translation", () => {
    for (const locale of translatedLocales) {
      const home = getPageContent(locale, "/")!;
      const photo = getPageContent(locale, "/apps/photocraft/")!;
      const digest = home.sections.find((section) => section.id === "update-2026-10-17");
      expect(digest?.paragraphs.join(" ")).toContain("FigCraft");
      expect(digest?.paragraphs.join(" ")).toContain("0.6.0");
      expect(digest?.links?.some((link) => link.href === "https://opensourceadobe.com/updates/2026-10-17/")).toBe(true);
      const brush = photo.sections.find((section) => section.id === "brush-spacing-report");
      expect(brush?.paragraphs.join(" ")).toContain("Spacing");
      expect(brush?.links?.some((link) => link.href.includes("1x7rppr"))).toBe(true);
      expect(photo.sources.some((source) => source.href.includes("1x7rppr"))).toBe(true);
    }
  });
  it("preserves the community advice dates alongside the catalog download revision", () => {
    expect(enPages.photocraft.faqs.some((faq) => faq.answer.includes("Spacing"))).toBe(true);
    expect(guideBySlug.pdfcraft.faqs.some((faq) => faq.question.includes("cursor"))).toBe(true);
    expect(pageUpdatedAt("/apps/photocraft/")).toBe("2026-10-17");
    expect(pageUpdatedAt("/apps/pdfcraft/")).toBe("2026-10-17");
    expect(pageUpdatedAt("/apps/filmcraft/")).toBe("2026-10-17");
  });
});
