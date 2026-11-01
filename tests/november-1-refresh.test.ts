import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
import { releases } from "@/content/releases";
it("archives October 31 releases without backdating November 1 checks", () => {
 const brief = dailyUpdates.find(b => b.date === "2026-10-31")!;
 expect(brief.publishedDate).toBe("2026-10-31");
 expect(brief.modifiedDate).toBe("2026-11-01");
 expect(brief.entries).toHaveLength(14);
 for (const release of releases.filter(r => r.slug !== "craft-launcher")) {
  const entry = brief.entries.find(e => e.sourceUrl === release.url)!;
  expect(entry.eventPublishedAt).toBe(release.publishedAt);
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(brief.date);
  expect(entry.checkedDate).toBe("2026-11-01");
  expect(entry.publishedDate).toBe("2026-11-01");
 }
 expect(dailyUpdates.find(b => b.date === "2026-11-01")?.entries).toHaveLength(1);
});
