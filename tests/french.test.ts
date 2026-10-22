import { expect, it } from "vitest";
import { locales, localizedPaths, languageAlternates, resolveLocalePath, switchLocalePath, type Locale } from "@/i18n/config";
import { getPageContent } from "@/content/pages";
import { dictionaries } from "@/i18n/dictionaries";
import { appGuideHref } from "@/i18n/app-links";
import { apps } from "@/content/apps";
import { pageUpdatedAt } from "@/content/page-dates";
for (const code of ["fr"]) it(`${code} publishes complete guides and never invents an app translation`, () => {
  expect(locales).toHaveProperty(code);
  const locale = code as Locale;
  expect(localizedPaths(locale)).toEqual(["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"]);
  expect(dictionaries[locale].notFoundDescription).toBeTruthy();
  for (const path of localizedPaths(locale)) {
    const page = getPageContent(locale, path)!;
    expect(page).toBeDefined();
    expect(page.faq.length).toBeGreaterThanOrEqual(4);
    expect(pageUpdatedAt(`/${code}${path}`)).toBe("2026-10-23");
    for (const link of page.sections.flatMap(section => section.links ?? [])) {
      if (link.href.startsWith("/")) expect(resolveLocalePath(`/${code}${link.href.split("#")[0]}`)).not.toBeNull();
    }
    expect(languageAlternates(`/${code}${path}`)).toEqual(languageAlternates(path));
  }
  for (const app of apps) expect(appGuideHref(locale, app)).toBe(app.slug === "photocraft" ? `/${code}/apps/photocraft/` : app.officialPage);
  expect(resolveLocalePath(`/${code}/apps/vectorcraft/`)).toBeNull();
  expect(switchLocalePath("/zh-Hant/vs-adobe/", locale)).toBe(`/${code}/`);
  expect(languageAlternates("/vs-adobe/")).not.toHaveProperty(code);
});
