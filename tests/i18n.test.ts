import { describe, expect, it } from "vitest";
import { languageAlternates, localePath, resolveLocalePath, switchLocalePath, localizedPaths } from "@/i18n/config";

describe("published language variants", () => {
  it("keeps English unprefixed and makes locale URLs stable", () => {
    expect(localePath("en", "/apps/photocraft/")).toBe("/apps/photocraft/");
    expect(localePath("zh-Hant", "/apps/photocraft/")).toBe("/zh-Hant/apps/photocraft/");
    expect(localePath("zh-Hant", "/")).toBe("/zh-Hant/");
  });
  it("generates reciprocal absolute alternates including self and default", () => {
    const expected = { en: "https://opensourceadobe.com/alternatives/photoshop/", "zh-Hant": "https://opensourceadobe.com/zh-Hant/alternatives/photoshop/", pl: "https://opensourceadobe.com/pl/alternatives/photoshop/", de: "https://opensourceadobe.com/de/alternatives/photoshop/", hi: "https://opensourceadobe.com/hi/alternatives/photoshop/", "x-default": "https://opensourceadobe.com/alternatives/photoshop/" };
    expect(languageAlternates("/alternatives/photoshop/")).toEqual(expected);
    expect(languageAlternates("/zh-Hant/alternatives/photoshop/")).toEqual(expected);
  });
  it("never advertises unpublished translations", () => {
    expect(languageAlternates("/updates/")).toEqual({ en: "https://opensourceadobe.com/updates/", "x-default": "https://opensourceadobe.com/updates/" });
    expect(localizedPaths("zh-Hant")).toHaveLength(5);
    expect(switchLocalePath("/updates/2026-10-17/", "zh-Hant")).toBe("/zh-Hant/");
    expect(switchLocalePath("/zh-Hant/download/", "en")).toBe("/download/");
    expect(resolveLocalePath("/fr/")).toBeNull();
    expect(resolveLocalePath("/zh-Hant/alternatives/illustrator/")).toBeNull();
  });
});

import { pageMetadata } from "@/lib/metadata";
import sitemap from "@/lib/sitemap";
import { getPageContent } from "@/content/pages";
import { translatedLocales, locales } from "@/i18n/config";
it("keeps locale metadata and every sitemap variant on the same registry", () => {
  for (const locale of translatedLocales) for (const path of localizedPaths(locale)) {
    const page = getPageContent(locale, path);
    expect(page).toBeDefined();
    const url = localePath(locale, path);
    const metadata = pageMetadata({ title: page!.title, description: page!.description, path: url, absoluteTitle: true });
    expect(metadata.openGraph).toMatchObject({locale: locales[locale].openGraphLocale});
    const entry = sitemap(locale).find((item) => item.url === `https://opensourceadobe.com${url}`);
    expect(entry?.alternates?.languages).toEqual(metadata.alternates?.languages);
    expect(page!.faq.length).toBeGreaterThanOrEqual(4);
  }
});

it("publishes four complete guides in Polish, German and Hindi with reciprocal variants", () => {
  for (const locale of ["pl", "de", "hi"] as const) {
    expect(locales).toHaveProperty(locale);
    expect(localizedPaths(locale as keyof typeof locales)).toEqual(["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"]);
    expect(resolveLocalePath(`/${locale}/download/`)).toEqual({ locale, path: "/download/" });
    const alternate = languageAlternates(`/${locale}/download/`);
    expect(Object.keys(alternate).sort()).toEqual(["en", "zh-Hant", "pl", "de", "hi", "x-default"].sort());
  }
});
