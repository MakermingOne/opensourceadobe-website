import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { releases } from '@/content/releases';
it('backfills fourteen exact Beijing-date releases without backdating publication', () => {
 const issue = dailyUpdates.find(i=>i.date==='2026-10-29')!;
 expect(issue.entries).toHaveLength(14);
 expect(issue.publishedDate).toBe('2026-10-30');
 for(const r of releases.filter(r=>r.slug!=="craft-launcher")) {
  const e=issue.entries.find(e=>e.sourceUrl===r.url)!;
  expect(e.eventPublishedAt).toBe(r.publishedAt);
  expect(new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai'}).format(new Date(e.eventPublishedAt!))).toBe(issue.date);
  expect(e.checkedDate).toBe('2026-10-30');
 }
 expect(dailyUpdates.find(i=>i.date==='2026-10-30')?.entries).toHaveLength(3);
});
