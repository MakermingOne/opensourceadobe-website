import { describe, expect, it } from "vitest";
import { pageUpdatedAt, pageUpdateDates } from "@/content/page-dates";
import { publishedRoutes } from "@/lib/site";
import sitemap from "@/app/sitemap";

describe("one source for substantive editorial dates", () => {
  it("provides every published page and the sitemap with the same date", () => {
    const dates = pageUpdateDates();
    for (const route of publishedRoutes) {
      expect(dates[route]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(sitemap().find((entry) => entry.url === `https://opensourceadobe.com${route}`)?.lastModified).toBe(pageUpdatedAt(route));
    }
  });
  it("does not reset untouched pages or historical briefs to today's date", () => {
    expect(pageUpdatedAt("/about/")).toBe("2026-10-11");
    expect(pageUpdatedAt("/updates/2026-10-13/")).toBe("2026-10-13");
    expect(pageUpdatedAt("/alternatives/")).toBe("2026-10-15");
  });
  it("normalizes trailing slashes and rejects unknown editorial dates", () => {
    expect(pageUpdatedAt("about")).toBe(pageUpdatedAt("/about/"));
    expect(() => pageUpdatedAt("/not-a-page/")).toThrow("Missing editorial date");
  });
});
