import { describe, expect, it } from "vitest";

import { artCraftAlternativesGuide } from "@/content/artcraft/alternatives";
import { photoCraftHowToUseGuide } from "@/content/artcraft/photocraft-how-to-use";
import { artCraftPricingGuide } from "@/content/artcraft/pricing";
import { artCraftSafetyGuide } from "@/content/artcraft/safety";
import type { ArticleGuide } from "@/content/artcraft/types";
import { whatIsArtCraftGuide } from "@/content/artcraft/what-is-artcraft";
import { pageUpdatedAt } from "@/content/page-dates";
import { sourcesById } from "@/content/sources";
import { socialImages } from "@/content/social-images";
import { publishedRoutes } from "@/lib/site";

function words(value: string) {
  return value.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean);
}

function guideText(guide: ArticleGuide) {
  return [
    guide.lede,
    ...guide.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.list ?? []),
      ...(section.table ? [section.table.caption, ...section.table.columns, ...section.table.rows.flatMap((row) => row.cells)] : []),
      ...(section.links ?? []).map((link) => link.label),
    ]),
    ...guide.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ");
}

const guides = [
  { name: "what is ArtCraft", guide: whatIsArtCraftGuide, minWords: 700 },
  { name: "pricing", guide: artCraftPricingGuide, minWords: 600 },
  { name: "safety", guide: artCraftSafetyGuide, minWords: 900 },
  { name: "alternatives", guide: artCraftAlternativesGuide, minWords: 600 },
  { name: "PhotoCraft how to use", guide: photoCraftHowToUseGuide, minWords: 900 },
];

describe.each(guides)("$name guide", ({ guide, minWords }) => {
  it("is published with metadata, a dated editorial record and a social card", () => {
    expect(publishedRoutes).toContain(guide.path);
    expect(socialImages[guide.path]).toMatch(/^[a-z0-9-]+$/);
    expect(pageUpdatedAt(guide.path)).toBe(["/artcraft/safety/", "/artcraft/photocraft-how-to-use/"].includes(guide.path) ? "2026-10-26" : "2026-10-20");
    expect(guide.title.length).toBeLessThanOrEqual(65);
    expect(guide.description.length).toBeGreaterThanOrEqual(120);
    expect(guide.description.length).toBeLessThanOrEqual(165);
  });

  it("does not use the official brand domain in its title or heading", () => {
    expect(`${guide.title} ${guide.h1}`.toLowerCase()).not.toContain("getartcraft");
  });

  it("has enough substance and unique sections", () => {
    expect(words(guideText(guide)).length).toBeGreaterThanOrEqual(minWords);
    const ids = guide.sections.map((section) => section.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(guide.sections.every((section) => section.paragraphs.length > 0)).toBe(true);
  });

  it("cites dated sources that exist in the site source registry", () => {
    expect(guide.sourceIds.length).toBeGreaterThanOrEqual(4);
    for (const id of guide.sourceIds) {
      const source = sourcesById.get(id);
      expect(source, id).toBeDefined();
      expect(source!.accessedAt).toMatch(/^2026-10-(1[4-9]|2[0-9])$/);
    }
  });

  it("keeps FAQ answers short and free of placeholder text", () => {
    expect(guide.faqs.length).toBeGreaterThanOrEqual(3);
    expect(guide.faqs.length).toBeLessThanOrEqual(5);
    expect(guide.faqs.every((faq) => words(faq.answer).length >= 20 && words(faq.answer).length <= 80)).toBe(true);
    expect(guideText(guide)).not.toMatch(/\[VERIFY\]|\bTODO\b|\bTBD\b/);
  });

  it("does not claim that the software is certified, audited or guaranteed", () => {
    expect(guideText(guide)).not.toMatch(/\b(100% safe|guaranteed safe|completely safe|virus-free|malware-free|certified safe|we audited|we scanned)\b/i);
  });
});

describe("ArtCraft cluster facts", () => {
  it("states the official plan figures checked on 20 October 2026", () => {
    const text = guideText(artCraftPricingGuide);
    for (const figure of ["$8", "$28", "$48", "$96", "$336", "$576", "1,000", "3,750", "6,600"]) {
      expect(text).toContain(figure);
    }
    expect(text).toContain("20 October 2026");
  });

  it("separates the PhotoCraft checksum file from the studio release", () => {
    const text = guideText(artCraftSafetyGuide);
    expect(text).toContain("SHA256SUMS.txt");
    expect(text).toContain("0.16.0");
    expect(text).toContain("0.41.0");
    expect(text).toContain("Get-FileHash");
    expect(text).toContain("shasum -a 256");
    expect(artCraftSafetyGuide.sections.find((section) => section.id === "checksums")?.table?.rows.find((row) => row.label === "Checksum file")?.cells)
      .toEqual(["Checksum file", "SHA256SUMS.txt in the release", "None among the release files"]);
  });

  it("links the hub to every question page in the cluster", () => {
    const hrefs = whatIsArtCraftGuide.sections.flatMap((section) => section.links ?? []).map((link) => link.href);
    expect(hrefs).toEqual(expect.arrayContaining(["/artcraft/pricing/", "/artcraft/safety/", "/artcraft/alternatives/", "/artcraft/photocraft-how-to-use/"]));
  });

  it("lists only the licences checked from the repositories in the alternatives table", () => {
    const rows = artCraftAlternativesGuide.sections.find((section) => section.id === "ai-studio")?.table?.rows ?? [];
    expect(rows.map((row) => [row.cells[0], row.cells[1]])).toEqual([["ComfyUI", "GPL-3.0"], ["InvokeAI", "Apache-2.0"]]);
  });

  it("labels the PhotoCraft guide as based on official docs, not a tested walkthrough", () => {
    const text = guideText(photoCraftHowToUseGuide);
    expect(text).toContain("We have not completed this walkthrough on our own machine");
    expect(text).toContain("0.8.2");
    expect(text).toContain("0.16.0");
  });
});
