import { absoluteUrl, canonicalPath, publishedRoutes } from "@/lib/site";

// Only entries in this registry are public translations. Adding a language
// means adding its dictionary/content and an enabled entry here.
const guidePaths = ["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"] as readonly string[];
export const locales = {
  en: { label: "English", flag: "/flags/us.svg", openGraphLocale: "en_US", dir: "ltr", enabled: true, paths: publishedRoutes as readonly string[] },
  "en-AU": { label: "English (AU)", flag: "/flags/au.svg", openGraphLocale: "en_AU", dir: "ltr", enabled: true, paths: guidePaths },
  "zh-Hant": { label: "繁體中文", flag: "/flags/tw.svg", openGraphLocale: "zh_TW", dir: "ltr", enabled: true, paths: [...guidePaths, "/vs-adobe/"] },
  pl: { label: "Polski", flag: "/flags/pl.svg", openGraphLocale: "pl_PL", dir: "ltr", enabled: true, paths: guidePaths },
  de: { label: "Deutsch", flag: "/flags/de.svg", openGraphLocale: "de_DE", dir: "ltr", enabled: true, paths: guidePaths },
  ja: { label: "日本語", flag: "/flags/jp.svg", openGraphLocale: "ja_JP", dir: "ltr", enabled: true, paths: guidePaths },
  ko: { label: "한국어", flag: "/flags/kr.svg", openGraphLocale: "ko_KR", dir: "ltr", enabled: true, paths: guidePaths },
  fr: { label: "Français", flag: "/flags/fr.svg", openGraphLocale: "fr_FR", dir: "ltr", enabled: true, paths: guidePaths },
  hi: { label: "हिन्दी", flag: "/flags/in.svg", openGraphLocale: "hi_IN", dir: "ltr", enabled: true, paths: guidePaths },
} as const;
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "en";
export const enabledLocales = (Object.keys(locales) as Locale[]).filter((locale) => locales[locale].enabled);
export const translatedLocales = enabledLocales.filter((locale) => locale !== defaultLocale);
export function isLocale(value: string): value is Locale { return enabledLocales.includes(value as Locale); }
export function localizedPaths(locale: Locale): readonly string[] { return locales[locale].paths; }
export function localePath(locale: Locale, path: string): string {
  const canonical = canonicalPath(path);
  return locale === defaultLocale ? canonical : `/${locale}${canonical}`;
}
export function resolveLocalePath(path: string): { locale: Locale; path: string } | null {
  const canonical = canonicalPath(path);
  const first = canonical.split("/")[1];
  const locale = isLocale(first) && first !== defaultLocale ? first : defaultLocale;
  const base = locale === defaultLocale ? canonical : canonicalPath(canonical.slice(locale.length + 1));
  return localizedPaths(locale).includes(base) ? { locale, path: base } : null;
}
export function switchLocalePath(currentPath: string, target: Locale): string {
  const resolved = resolveLocalePath(currentPath);
  return localePath(target, resolved && localizedPaths(target).includes(resolved.path) ? resolved.path : "/");
}
export function languageAlternates(path: string): Record<string, string> {
  const resolved = resolveLocalePath(path);
  if (!resolved) return {};
  return Object.fromEntries([
    ...enabledLocales.filter((locale) => localizedPaths(locale).includes(resolved.path))
      .map((locale) => [locale, absoluteUrl(localePath(locale, resolved.path))]),
    ["x-default", absoluteUrl(resolved.path)],
  ]);
}
