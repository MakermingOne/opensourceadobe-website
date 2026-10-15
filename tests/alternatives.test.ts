import { describe, expect, it } from "vitest";

import { lightroomGuide } from "@/content/alternatives/lightroom";
import { photoshopGuide } from "@/content/alternatives/photoshop";

function words(value: string) {
  return value.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean);
}

function guideText(guide: typeof photoshopGuide | typeof lightroomGuide) {
  return [
    guide.introduction,
    ...guide.verdicts,
    ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...guide.options.flatMap((option) => [option.name, ...option.paragraphs]),
    ...guide.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
}

describe("Photoshop alternatives guide", () => {
  it("preserves the supplied search metadata and section contract", () => {
    expect(photoshopGuide.title).toBe("Open Source Photoshop Alternatives: PhotoCraft, GIMP & More");
    expect(photoshopGuide.description).toBe("Six open source and free Photoshop alternatives compared on layers, PSD support, plugins and AI features — plus what each one still cannot do. Updated October 2026.");
    expect(photoshopGuide.h1).toBe("Open source Photoshop alternatives, compared");
    expect(photoshopGuide.sections.map((section) => section.heading)).toEqual([
      "GIMP vs Photoshop: what actually still breaks",
      "If you are already using Photopea",
    ]);
    expect(photoshopGuide.options.map((option) => option.name)).toEqual([
      "GIMP", "PhotoCraft", "Photopea", "Krita", "Paint.NET", "Glimpse",
    ]);
  });

  it("meets editorial, evidence, and FAQ constraints", () => {
    const text = guideText(photoshopGuide);
    expect(words(text).length).toBeGreaterThanOrEqual(1600);
    expect(words(text).length).toBeLessThanOrEqual(2200);
    expect(words(photoshopGuide.introduction).slice(0, 100).join(" ").toLowerCase()).toContain("open source photoshop alternative");
    expect(text).not.toMatch(/\[VERIFY\]|\bTODO\b|\bTBD\b/);
    expect(photoshopGuide.verdicts).toHaveLength(3);
    expect(photoshopGuide.table.rows).toHaveLength(6);
    expect(photoshopGuide.table.rows.every((row) => row.cells.length === 6)).toBe(true);
    expect(photoshopGuide.options.every((option) => words(option.paragraphs.join(" ")).length >= 150 && words(option.paragraphs.join(" ")).length <= 250)).toBe(true);
    expect(photoshopGuide.faqs).toHaveLength(4);
    expect(photoshopGuide.faqs.every((faq) => words(faq.answer).length >= 40 && words(faq.answer).length <= 70)).toBe(true);
    expect(photoshopGuide.sources.every((source) => /^2026-10-(11|13|15)$/.test(source.accessedAt))).toBe(true);
    expect(photoshopGuide.sources.find((source) => source.id === "photocraft-release-alt")?.accessedAt).toBe("2026-10-15");
  });
});

describe("Lightroom alternatives guide", () => {
  it("preserves the supplied search metadata and section contract", () => {
    expect(lightroomGuide.title).toBe("Open Source Lightroom Alternatives: darktable, RawTherapee & More");
    expect(lightroomGuide.description).toBe("Free and open source Lightroom alternatives compared for RAW development, cataloguing and masking — with honest notes on which ones break down on large libraries.");
    expect(lightroomGuide.h1).toBe("Open source Lightroom alternatives");
    expect(lightroomGuide.sections.map((section) => section.heading)).toEqual([
      "darktable vs Lightroom",
      "Migrating from Lightroom without losing your library",
    ]);
  });

  it("meets editorial, evidence, and FAQ constraints", () => {
    const text = guideText(lightroomGuide);
    expect(words(text).length).toBeGreaterThanOrEqual(1500);
    expect(words(text).length).toBeLessThanOrEqual(2000);
    expect(words(lightroomGuide.introduction).slice(0, 100).join(" ").toLowerCase()).toContain("open source lightroom alternative");
    expect(text).not.toMatch(/\[VERIFY\]|\bTODO\b|\bTBD\b/);
    expect(lightroomGuide.rawTable.rows).toHaveLength(4);
    expect(lightroomGuide.catalogTable.rows.length).toBeGreaterThanOrEqual(3);
    expect(lightroomGuide.options.every((option) => words(option.paragraphs.join(" ")).length >= 150 && words(option.paragraphs.join(" ")).length <= 250)).toBe(true);
    expect(lightroomGuide.faqs).toHaveLength(4);
    expect(lightroomGuide.faqs.every((faq) => words(faq.answer).length >= 40 && words(faq.answer).length <= 70)).toBe(true);
    expect(lightroomGuide.sources.every((source) => /^2026-10-(11|13|15)$/.test(source.accessedAt))).toBe(true);
    expect(lightroomGuide.sources.find((source) => source.id === "lightcraft-release-alt")?.accessedAt).toBe("2026-10-15");
  });
});
