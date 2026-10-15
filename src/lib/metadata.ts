import type { Metadata } from "next";
import { isProductionDeployment } from "@/lib/deployment";
import { absoluteUrl, canonicalPath, siteConfig } from "@/lib/site";

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
  const imageUrl = image ? new URL(image, siteConfig.url).toString() : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical, types: { "application/rss+xml": `${siteConfig.url}/updates/feed.xml` } },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: absoluteUrl(canonical),
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: imageUrl
      ? { card: "summary_large_image", title, description, images: [imageUrl] }
      : undefined,
    robots: isProduction
      ? { index: true, follow: true }
      : { index: false, follow: false, noarchive: true },
  };
}
