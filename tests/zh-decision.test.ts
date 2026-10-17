import { describe, expect, it } from "vitest";
import { apps } from "@/content/apps";
import { appGuideHref } from "@/i18n/app-links";
import { languageAlternates, resolveLocalePath, switchLocalePath } from "@/i18n/config";
import { getPageContent } from "@/content/pages";

describe("localized application and decision destinations", () => {
  it("uses only published locale app pages and otherwise the official project", () => {
    for (const app of apps) {
      const href = appGuideHref("zh-Hant", app);
      expect(href).toBe(app.slug === "photocraft" ? "/zh-Hant/apps/photocraft/" : app.officialPage);
      if (href.startsWith("/")) expect(resolveLocalePath(href)).not.toBeNull();
    }
  });
  it("generates the asymmetric decision-page alternate group from the registry", () => {
    const expected = { en: "https://opensourceadobe.com/vs-adobe/", "zh-Hant": "https://opensourceadobe.com/zh-Hant/vs-adobe/", "x-default": "https://opensourceadobe.com/vs-adobe/" };
    expect(languageAlternates("/vs-adobe/")).toEqual(expected);
    expect(languageAlternates("/zh-Hant/vs-adobe/")).toEqual(expected);
    expect(switchLocalePath("/zh-Hant/vs-adobe/", "pl")).toBe("/pl/");
    expect(resolveLocalePath("/de/vs-adobe/")).toBeNull();
  });
  it("answers the four switching risks with visible sourced content", () => {
    const page = getPageContent("zh-Hant", "/vs-adobe/");
    expect(page).toBeDefined();
    expect(page!.faq.length).toBeGreaterThanOrEqual(4);
    expect(page!.sections.some((section) => Boolean(section.table))).toBe(true);
    const text = JSON.stringify(page);
    for (const topic of ["相容", "色彩", "外掛", "穩定"]) expect(text).toContain(topic);
    expect(text).not.toMatch(/平替|软件|矢量|视频/);
  });
});
