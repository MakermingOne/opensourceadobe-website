import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
import { releases } from "@/content/releases";
it("backfills November 2 releases with actual November 3 checks, preserving the early check", () => {
 const brief = dailyUpdates.find(b => b.date === "2026-11-02")!;
 expect(brief.publishedDate).toBe("2026-11-02");
 expect(brief.checkedDate).toBe("2026-11-02");
 expect(brief.modifiedDate).toBe("2026-11-03");
 const added = brief.entries.filter(e => e.checkedDate === "2026-11-03");
 expect(added).toHaveLength(14);
 for (const release of releases.filter(r => r.slug !== "craft-launcher")) {
  const entry = added.find(e => e.sourceUrl === release.url)!;
  expect(entry.eventPublishedAt).toBe(release.publishedAt);
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(brief.date);
  expect(entry.publishedDate).toBe("2026-11-03");
 }
 const today = dailyUpdates.find(b => b.date === "2026-11-03")!;
 expect(today.entries).toHaveLength(2);
 expect(today.entries[0].kind).toBe("Documentation update");
 expect(today.entries[0].eventPublishedAt).toBe("2026-11-02T17:23:48Z");
 expect(today.entries[0].impact).toContain("after SoundCraft 0.16.0");
 const extra = dailyUpdates.flatMap(b => b.entries.filter(e => ["texturecraft", "craft-anything"].includes(e.appSlug)).map(e => ({...e, briefDate:b.date})));
 expect(extra).toHaveLength(5);
 for (const entry of extra) {
  expect(new Intl.DateTimeFormat("sv-SE", {timeZone:"Asia/Shanghai"}).format(new Date(entry.eventPublishedAt!))).toBe(entry.briefDate);
  expect(entry.checkedDate).toBe("2026-11-03");
  expect(entry.publishedDate).toBe("2026-11-03");
 }

});
