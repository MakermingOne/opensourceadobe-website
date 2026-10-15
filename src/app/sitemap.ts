import type { MetadataRoute } from "next";
import { absoluteUrl, publishedRoutes } from "@/lib/site";
import { pageUpdatedAt } from "@/content/page-dates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publishedRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: pageUpdatedAt(route),
    changeFrequency: route === "/updates/" ? "daily" : route.startsWith("/updates/") ? "monthly" : route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/apps/") ? 0.8 : 0.6,
  }));
}
