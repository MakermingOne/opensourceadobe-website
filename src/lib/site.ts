import { resolveGoogleAnalyticsId } from "@/lib/deployment";
import { dailyUpdates, updatePath } from "@/content/updates";

export const siteConfig = {
  name: "OpenSourceAdobe",
  url: "https://opensourceadobe.com",
  description:
    "An independent guide to ArtCraft apps, open-source creative tools, and their current Adobe workflow boundaries.",
  github: "https://github.com/MakermingOne",
  contactEmail: "makerming1@gmail.com",
  analyticsId: resolveGoogleAnalyticsId(),
} as const;

export const publishedRoutes = [
  "/",
  "/apps/",
  "/vs-adobe/",
  "/download/",
  "/tutorials/",
  "/faq/",
  "/apps/photocraft/",
  "/apps/vectorcraft/",
  "/apps/filmcraft/",
  "/apps/lightcraft/",
  "/apps/pdfcraft/",
  "/about/",
  "/brandon-thomas/",
  "/contact/",
  "/disclaimer/",
  "/privacy/",
  "/alternatives/",
  "/alternatives/photoshop/",
  "/alternatives/lightroom/",
  "/github/",
  "/updates/",
  ...dailyUpdates.map((issue) => updatePath(issue.date)),
] as const;

export function canonicalPath(path: string): string {
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  if (withLeadingSlash === "/") return "/";
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function absoluteUrl(path: string): string {
  return new URL(canonicalPath(path), siteConfig.url).toString();
}
