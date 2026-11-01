import { expect, it } from "vitest";
import { dailyUpdates } from "@/content/updates";
it("separates Launcher releases at the Beijing midnight boundary", () => {
 for (const [date, time] of [["2026-11-01", "2026-11-01T04:17:15Z"], ["2026-11-02", "2026-11-01T17:42:38Z"]]) {
  const entry = dailyUpdates.find(b => b.date === date)!.entries.find(e => e.eventPublishedAt === time)!;
  expect(entry.checkedDate).toBe("2026-11-02");
  expect(entry.publishedDate).toBe("2026-11-02");
  expect(new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Shanghai" }).format(new Date(time))).toBe(date);
 }
});
