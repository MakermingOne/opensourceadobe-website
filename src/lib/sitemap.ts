import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { pageUpdatedAt } from "@/content/page-dates";
import { enabledLocales, languageAlternates, localePath, localizedPaths, type Locale } from "@/i18n/config";

export default function sitemap(locale?: Locale): MetadataRoute.Sitemap {
  return (locale ? [locale] : enabledLocales).flatMap((current) => localizedPaths(current).map((path) => {
    const route = localePath(current, path);
    return { url: absoluteUrl(route), lastModified: pageUpdatedAt(route), alternates: { languages: languageAlternates(route) }, changeFrequency: path === "/updates/" ? "daily" as const : path === "/" ? "weekly" as const : "monthly" as const, priority: path === "/" ? 1 : path.startsWith("/apps/") ? 0.8 : 0.6 };
  }));
}
export function xmlEscape(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
export function sitemapXml(locale: Locale): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemap(locale).map((entry) => `<url><loc>${xmlEscape(entry.url)}</loc><lastmod>${entry.lastModified}</lastmod>${Object.entries(entry.alternates!.languages!).map(([language, url]) => `<xhtml:link rel="alternate" hreflang="${language}" href="${xmlEscape(String(url))}" />`).join("")}<changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority}</priority></url>`).join("\n")}\n</urlset>`;
}
export function sitemapIndexXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${enabledLocales.map((locale) => `<sitemap><loc>${absoluteUrl(`/sitemaps/${locale}.xml`).replace(/\/$/, "")}</loc></sitemap>`).join("")}</sitemapindex>`;
}
