import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
import { releasesBySlug } from "@/content/releases";
it("backfills October 30 events without changing their actual publication date", () => {
 const brief = dailyUpdates.find(i => i.date === "2026-10-30")!;
 expect(brief.publishedDate).toBe("2026-10-30");
 expect(brief.modifiedDate).toBe("2026-10-31");
 for (const entry of brief.entries) {
  expect(entry.checkedDate).toBe("2026-10-31");
  expect(entry.publishedDate).toBe("2026-10-31");
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(brief.date);
 }
 expect(releasesBySlug.get("craft-launcher")?.publishedAt).toBe("2026-10-29T19:47:08Z");
 expect(dailyUpdates.find(i => i.date === "2026-10-31")?.entries).toEqual([]);
});
