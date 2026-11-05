import { expect, it } from "vitest";
import { dailyUpdates } from "../src/content/updates";
it("archives seventeen November 5 releases without backdating the actual check", () => {
 const yesterday = dailyUpdates.find(b => b.date === "2026-11-05")!;
 expect(yesterday.checkedDate).toBe("2026-11-05");
 expect(yesterday.publishedDate).toBe("2026-11-05");
 expect(yesterday.modifiedDate).toBe("2026-11-06");
 const releases = yesterday.entries.filter(e => e.checkedDate === "2026-11-06");
 expect(releases).toHaveLength(17);
 for (const entry of releases) {
  expect(entry.publishedDate).toBe("2026-11-06");
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(yesterday.date);
 }
 const today = dailyUpdates.find(b => b.date === "2026-11-06")!;
 expect(today.entries).toEqual([]);
 expect(today.introduction).toContain("As of 03:04 Beijing time");
 expect(today.relatedBriefDates).toContain(yesterday.date);
});
