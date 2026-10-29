import { expect, it } from 'vitest';
import { dailyUpdates } from '@/content/updates';
import { getPageContent } from '@/content/pages';
import { sourcesById } from '@/content/sources';
import { translatedLocales, localizedPaths } from '@/i18n/config';
it('uses official publication times instead of internal commit and progress dates', () => {
 const entries=dailyUpdates.flatMap(issue => issue.entries.filter(e=>e.checkedDate==='2026-10-28').map(e=>({...e,date:issue.date})));
 expect(entries).toHaveLength(9);
 for(const e of entries) {
  expect(new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai'}).format(new Date(e.eventPublishedAt!))).toBe(e.date);
  expect(e.eventDate).toBe(e.eventPublishedAt!.slice(0,10));
  expect(e.publishedDate).toBe('2026-10-28');
  expect(e.kind).toBe('Documentation update');
  expect(sourcesById.get(e.id)?.accessedAt).toBe('2026-10-28');
 }
 expect(entries.find(e=>e.appSlug==='photocraft')?.eventPublishedAt).toBe('2026-10-27T18:25:16Z');
 const previous=dailyUpdates.find(i=>i.date==='2026-10-27')!;
 expect(previous.checkedDate).toBe('2026-10-27');
 expect(previous.publishedDate).toBe('2026-10-27');
 expect(previous.modifiedDate).toBe('2026-10-28');
 expect(previous.introduction).toContain('03:01 Beijing time');
});
it('links every published translation to the actual English date pages',()=>{
 for(const locale of translatedLocales) for(const path of localizedPaths(locale)) {
  const digest=getPageContent(locale,path)?.sections.find(s=>s.id==='update-2026-10-28');
  expect(digest?.id).toBe('update-2026-10-28');
  expect(digest?.links?.map(l=>l.href)).toEqual(['https://opensourceadobe.com/updates/2026-10-27/','https://opensourceadobe.com/updates/2026-10-28/']);
 }
});
