import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
it("archives October 31 releases without backdating November 1 checks", () => {
 const brief = dailyUpdates.find(b => b.date === "2026-10-31")!;
 expect(brief.publishedDate).toBe("2026-10-31");
 expect(brief.modifiedDate).toBe("2026-11-01");
 expect(brief.entries).toHaveLength(14);
 for (const entry of brief.entries) {
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(brief.date);
  expect(entry.checkedDate).toBe("2026-11-01");
  expect(entry.publishedDate).toBe("2026-11-01");
 }
 expect(dailyUpdates.find(b => b.date === "2026-11-01")?.entries.filter(e => e.appSlug === "craft-launcher")).toHaveLength(1);
});
