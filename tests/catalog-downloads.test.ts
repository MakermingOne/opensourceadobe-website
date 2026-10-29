import { describe, expect, it } from "vitest";
import { apps } from "@/content/apps";
import { officialDownloads, type DownloadSlug } from "@/content/downloads";
import { publishedRoutes } from "@/lib/site";
import { socialImagePath } from "@/content/social-images";
import { pageUpdatedAt } from "@/content/page-dates";

describe("complete download journey", () => {
  it.each(apps)("publishes a sourced, reachable download guide for $name", (app) => {
    expect(app.detailPublished).toBe(true);
    const path = `/apps/${app.slug}/`;
    expect(publishedRoutes).toContain(path);
    expect(socialImagePath(path)).toMatch(/^\/images\/og\//);
    expect(pageUpdatedAt(path)).toBe(["photocraft", "vectorcraft", "filmcraft", "wordcraft", "cadcraft", "designcraft"].includes(app.slug) ? "2026-10-30" : ["lightcraft", "figcraft"].includes(app.slug) ? "2026-10-30" : "2026-10-30");
    const download = officialDownloads[app.slug as DownloadSlug];
    expect(download?.version).toBe(app.version);
    expect(download?.packages).toHaveLength(3);
    expect(app.sourceIds).toContain(`${app.slug}-release`);
  });
});
