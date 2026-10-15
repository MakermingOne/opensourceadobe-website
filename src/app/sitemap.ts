import type { MetadataRoute } from "next";
import { absoluteUrl, publishedRoutes } from "@/lib/site";
import { dailyUpdates, latestUpdateDate, updatePath } from "@/content/updates";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updateDates = new Map(dailyUpdates.map((issue) => [updatePath(issue.date), issue.modifiedDate ?? issue.date]));
  const updatedRoutes = new Set(["/", "/apps/", "/vs-adobe/", "/download/", "/tutorials/", "/faq/", "/contact/", "/updates/", "/updates/2026-10-13/", "/alternatives/", "/alternatives/photoshop/", "/alternatives/lightroom/", "/github/", "/apps/photocraft/", "/apps/vectorcraft/", "/apps/filmcraft/", "/apps/lightcraft/"]);
  const keywordUpdatedRoutes = new Set(["/", "/apps/", "/download/", "/github/", "/apps/photocraft/", "/apps/pdfcraft/"]);
  const releaseUpdatedRoutes = new Set(["/", "/apps/", "/vs-adobe/", "/download/", "/github/", "/apps/pdfcraft/", "/apps/photocraft/", "/apps/vectorcraft/", "/apps/filmcraft/", "/apps/lightcraft/", "/alternatives/photoshop/", "/alternatives/lightroom/"]);
  return publishedRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: releaseUpdatedRoutes.has(route) ? "2026-10-15" : keywordUpdatedRoutes.has(route) ? "2026-10-14" : route === "/updates/" ? latestUpdateDate : updateDates.get(route) ?? (updatedRoutes.has(route) ? "2026-10-13" : "2026-10-11"),
    changeFrequency: route === "/updates/" ? "daily" : route.startsWith("/updates/") ? "monthly" : route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/apps/") ? 0.8 : 0.6,
  }));
}
