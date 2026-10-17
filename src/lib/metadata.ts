import type { Metadata } from "next";
import { isProductionDeployment } from "@/lib/deployment";
import { absoluteUrl, canonicalPath, siteConfig } from "@/lib/site";
import { socialImagePath } from "@/content/social-images";

import { languageAlternates, resolveLocalePath, locales } from "@/i18n/config";

const isProduction = isProductionDeployment();

export function pageMetadata({
  title,
  description,
  path,
  image,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const canonical = canonicalPath(path);
  const imageUrl = new URL(image ?? socialImagePath(resolveLocalePath(canonical)?.path ?? canonical), siteConfig.url).toString();
  // The root layout's title template does not apply to its same-segment page.
  const resolvedTitle = absoluteTitle || canonical === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical, languages: languageAlternates(canonical), types: { "application/rss+xml": `${siteConfig.url}/updates/feed.xml` } },
    openGraph: {
      type: "website",
      locale: locales[resolveLocalePath(canonical)?.locale ?? "en"].openGraphLocale,
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      url: absoluteUrl(canonical),
      images: [{ url: imageUrl, width: 1200, height: 630, alt: resolvedTitle }],
    },
    twitter: { card: "summary_large_image", title: resolvedTitle, description, images: [{ url: imageUrl, alt: resolvedTitle }] },
    robots: isProduction
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
  };
}
