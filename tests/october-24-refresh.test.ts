import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { releases, releaseCheckedOn } from '@/content/releases';
import { officialDownloads, type DownloadSlug } from '@/content/downloads';
import { getPageContent } from '@/content/pages';
import { translatedLocales, localizedPaths } from '@/i18n/config';

it('archives all 21 releases by exact Beijing time without backdating checks', () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-23')!;
 const additions = issue.entries.filter(e => e.kind === 'Official release');
 expect(additions).toHaveLength(21);
 expect(new Set(additions.map(e => e.sourceUrl)).size).toBe(21);
 for (const entry of additions) {
  expect(new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Shanghai'}).format(new Date(entry.eventPublishedAt!))).toBe(issue.date);
  expect(entry.eventDate).toBe(entry.eventPublishedAt!.slice(0,10));
  expect(entry.checkedDate).toBe('2026-10-24');
  expect(entry.publishedDate).toBe('2026-10-24');
 }
 expect(issue.entries.filter(e => e.kind === 'Documentation update').every(e => e.checkedDate === '2026-10-23' && e.publishedDate === '2026-10-23')).toBe(true);
 const today = dailyUpdates.find(i => i.date === '2026-10-24')!;
 expect(today.entries.filter(e => e.kind === 'Official release')).toHaveLength(1);
 expect(today.introduction).toContain('not a conclusion about the rest of the day');
 expect(today.entries[0].eventPublishedAt).toBeUndefined();
 expect(today.entries[0].impact).toContain('No precise source publication time');
});

it('connects current packages to an exact published release in the historical brief', () => {
 const entries = dailyUpdates.flatMap(i => i.entries);
 for (const release of releases) {
  expect(entries.some(e => e.sourceUrl === release.url && e.eventPublishedAt === release.publishedAt)).toBe(true);
  expect(releaseCheckedOn(release.slug)).toBe(release.slug === 'photocraft' ? '2026-10-25' : '2026-10-24');
  if (release.slug === 'craft-launcher') continue;
  const download = officialDownloads[release.slug as DownloadSlug];
  expect(download.version).toBe(release.version);
  expect(download.publishedAt).toBe(release.publishedAt);
  expect(download.packages.every(p => p.filename.includes(release.version) && p.sizeBytes > 0)).toBe(true);
 }
});

it('provides translated summaries with actual English date links on every published locale page', () => {
 for (const locale of translatedLocales) for (const path of localizedPaths(locale)) {
  const digest = getPageContent(locale,path)?.sections.find(s => s.id === 'update-2026-10-24');
  expect(digest?.paragraphs.join(' ')).toContain('PhotoCraft 0.14.0');
  expect(digest?.links?.map(l => l.href)).toEqual(['https://opensourceadobe.com/updates/2026-10-23/','https://opensourceadobe.com/updates/2026-10-24/']);
 }
});
