import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { officialDownloads } from '@/content/downloads';
import { getPageContent } from '@/content/pages';
import { translatedLocales, localizedPaths } from '@/i18n/config';
it('archives documentation by official merge time while retaining actual check and publication dates', () => {
 const additions = dailyUpdates.flatMap(issue => issue.entries.filter(e => e.id.endsWith('docs-oct26') || e.id === 'figcraft-vue-docs-oct27').filter(e => e.checkedDate === '2026-10-27').map(e => ({...e, date:issue.date})));
 expect(additions).toHaveLength(5);
 for(const entry of additions) {
  expect(new Intl.DateTimeFormat('sv-SE', {timeZone:'Asia/Shanghai'}).format(new Date(entry.eventPublishedAt!))).toBe(entry.date);
  expect(entry.eventDate).toBe(entry.eventPublishedAt!.slice(0,10));
  expect(entry.publishedDate).toBe('2026-10-27');
  expect(entry.kind).toBe('Documentation update');
 }
 const yesterday=dailyUpdates.find(i => i.date === '2026-10-26')!;
 expect(yesterday.checkedDate).toBe('2026-10-26');
 expect(yesterday.publishedDate).toBe('2026-10-26');
 expect(yesterday.modifiedDate).toBe('2026-10-27');
 expect(yesterday.introduction).toContain('03:06 Beijing time');
 expect(JSON.stringify(officialDownloads.wordcraft)).not.toContain('windows-user');
});
it('provides each registered translation with a digest and real English date links', () => {
 for(const locale of translatedLocales) for(const path of localizedPaths(locale)) {
  const digest=getPageContent(locale,path)?.sections[0];
  expect(digest?.id).toBe('update-2026-10-27');
  expect(digest?.paragraphs.join(' ')).toContain('01:48:54');
  expect(digest?.links?.map(l=>l.href)).toEqual(['https://opensourceadobe.com/updates/2026-10-26/','https://opensourceadobe.com/updates/2026-10-27/']);
 }
});
