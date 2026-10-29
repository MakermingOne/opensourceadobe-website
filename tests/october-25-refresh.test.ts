import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { officialDownloads } from '@/content/downloads';
import { getPageContent } from '@/content/pages';
import { translatedLocales, localizedPaths } from '@/i18n/config';

it('archives later October 24 events without backdating the check or replacing its early record', () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-24')!;
 expect(issue.publishedDate).toBe('2026-10-24');
 expect(issue.checkedDate).toBe('2026-10-24');
 expect(issue.modifiedDate).toBe('2026-10-25');
 expect(issue.entries[0].id).toBe('community-photocraft-repo-progress-oct24');
 const additions = issue.entries.filter(e => e.checkedDate === '2026-10-25');
 expect(additions).toHaveLength(5);
 for (const entry of additions) {
  expect(new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Shanghai'}).format(new Date(entry.eventPublishedAt!))).toBe('2026-10-24');
  expect(entry.eventDate).toBe(entry.eventPublishedAt!.slice(0,10));
  expect(entry.publishedDate).toBe('2026-10-25');
 }
 expect(additions.find(e => e.appSlug === 'soundcraft')?.eventPublishedAt).toBe('2026-10-24T12:38:40Z');
 expect(additions.find(e => e.kind === 'Official release')?.eventPublishedAt).toBe('2026-10-23T22:44:33Z');
 expect(officialDownloads.photocraft.packages.map(p => p.sizeBytes)).toEqual([105615360,136121117,117254648]);
 const today = dailyUpdates.find(i => i.date === '2026-10-25')!;
 expect(today.introduction).toContain('03:09 Beijing time');
 expect(today.introduction).toContain('not a conclusion about the rest of the day');
 expect(today.entries[0].eventPublishedAt).toBeUndefined();
});
it('adds a localized current digest with real English date links to all published translations', () => {
 for (const locale of translatedLocales) for (const path of localizedPaths(locale)) {
  const digest = getPageContent(locale,path)?.sections.find(s => s.id === 'update-2026-10-25');
  expect(digest?.id).toBe('update-2026-10-25');
  expect(digest?.paragraphs.join(' ')).toContain('PhotoCraft 0.15.1');
  expect(digest?.links?.map(l => l.href)).toEqual(['https://opensourceadobe.com/updates/2026-10-24/','https://opensourceadobe.com/updates/2026-10-25/']);
 }
});
