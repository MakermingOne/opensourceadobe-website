import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { getPageContent } from '@/content/pages';
import { translatedLocales, localizedPaths } from '@/i18n/config';
it('groups October 25 releases by event time while preserving actual October 26 publication', () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-25')!;
 expect(issue.checkedDate).toBe('2026-10-25');
 expect(issue.publishedDate).toBe('2026-10-25');
 expect(issue.modifiedDate).toBe('2026-10-26');
 const releases = issue.entries.filter(e => e.kind === 'Official release');
 expect(releases).toHaveLength(14);
 expect(new Set(releases.map(e => e.sourceUrl)).size).toBe(14);
 for (const entry of releases) {
  expect(new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Shanghai'}).format(new Date(entry.eventPublishedAt!))).toBe(issue.date);
  expect(entry.checkedDate).toBe('2026-10-26');
  expect(entry.publishedDate).toBe('2026-10-26');
  expect(entry.eventDate).toBe(entry.eventPublishedAt!.slice(0,10));
 }
 const today = dailyUpdates.find(i => i.date === '2026-10-26')!;
 expect(today.entries.find(e => e.id === 'pdfcraft-side-panels-oct26')?.eventPublishedAt).toBe('2026-10-25T16:06:36Z');
 expect(today.entries.find(e => e.kind === 'Community report')?.eventPublishedAt).toBeUndefined();
 expect(today.introduction).toContain('not a conclusion about the rest of the day');
});
it('links every published translation to real English event and check pages', () => {
 for(const locale of translatedLocales) for(const path of localizedPaths(locale)) {
  const digest=getPageContent(locale,path)?.sections[0];
  expect(digest?.id).toBe('update-2026-10-26');
  expect(digest?.paragraphs.join(' ')).toContain('PhotoCraft 0.16.0');
  expect(digest?.links?.map(l => l.href)).toEqual(['https://opensourceadobe.com/updates/2026-10-25/','https://opensourceadobe.com/updates/2026-10-26/']);
 }
});
