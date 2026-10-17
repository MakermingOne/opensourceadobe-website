import { absoluteUrl, canonicalPath, publishedRoutes } from "@/lib/site";

// Only entries in this registry are public translations. Adding a language
// means adding its dictionary/content and an enabled entry here.
const guidePaths = ["/", "/alternatives/photoshop/", "/apps/photocraft/", "/download/"] as readonly string[];
export const locales = {
  en: { label: "English", openGraphLocale: "en_US", dir: "ltr", enabled: true, paths: publishedRoutes as readonly string[] },
  "zh-Hant": { label: "繁體中文", openGraphLocale: "zh_TW", dir: "ltr", enabled: true, paths: guidePaths },
  pl: { label: "Polski", openGraphLocale: "pl_PL", dir: "ltr", enabled: true, paths: guidePaths },
  de: { label: "Deutsch", openGraphLocale: "de_DE", dir: "ltr", enabled: true, paths: guidePaths },
  hi: { label: "हिन्दी", openGraphLocale: "hi_IN", dir: "ltr", enabled: true, paths: guidePaths },
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
