import { expect, it } from 'vitest';
import { dailyUpdates, latestUpdateDate } from '@/content/updates';
import { releasesBySlug } from '@/content/releases';
import { officialDownloads, type DownloadSlug } from '@/content/downloads';
import { translatedLocales, localizedPaths } from '@/i18n/config';
import { getPageContent } from '@/content/pages';
import { pageUpdatedAt } from '@/content/page-dates';
import DailyUpdatePage, { generateMetadata } from '@/app/(en)/updates/[date]/page';
import { renderToStaticMarkup } from 'react-dom/server';

const versions = {photocraft:'0.12.0',vectorcraft:'0.14.0',filmcraft:'0.10.0',lightcraft:'0.11.0',pdfcraft:'0.11.0',effectcraft:'0.14.0',designcraft:'0.11.0',figcraft:'0.9.0',wordcraft:'0.9.0',soundcraft:'0.11.0',deckcraft:'0.9.0',cadcraft:'0.10.0',gridcraft:'0.10.0','craft-launcher':'0.6.1'};
it('aligns all current versions, original publication dates, packages and the brief',()=>{
 expect(latestUpdateDate >= '2026-10-22').toBe(true);
 const issue=dailyUpdates.find(x=>x.date==='2026-10-22')!;
 expect(issue.entries.filter(e=>e.kind==='Official release')).toHaveLength(8);
 const previous=dailyUpdates.find(x=>x.date==='2026-10-21')!;
 expect(previous.entries).toHaveLength(6);
 const entries=[...issue.entries,...previous.entries];
 expect(new Set(entries.filter(e=>e.kind==='Official release').map(e=>e.sourceUrl)).size).toBe(14);
 for(const [slug,version] of Object.entries(versions)) {
  const archived=entries.find(e=>e.sourceUrl===`https://github.com/storytold/${slug}/releases/tag/v${version}`)!;
  const release={version,publishedAt:archived.eventPublishedAt!,url:archived.sourceUrl};
  expect(release.publishedAt.startsWith('2026-10-21T')).toBe(true);
  const releaseDay=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai'}).format(new Date(release.publishedAt));
  const datedIssue=dailyUpdates.find(x=>x.date===releaseDay)!;
  expect(datedIssue.entries.some(e=>e.appSlug===slug&&e.sourceUrl===release.url&&e.eventDate==='2026-10-21'&&e.eventPublishedAt===release.publishedAt)).toBe(true);
  if(slug!=='craft-launcher') {
   const download=officialDownloads[slug as DownloadSlug];
   expect(download.version).toBe(releasesBySlug.get(slug)?.version);
   expect(download.packages.every(p=>p.filename.includes(download.version)&&p.sizeBytes>0)).toBe(true);
  }
 }
 const community=issue.entries.filter(e=>e.kind==='Community report');
 expect(community).toHaveLength(3);
 expect(community.find(e=>e.id.includes('print-pr'))?.summary).toContain('open and unmerged');
 expect(issue.entries.find(e=>e.id.includes('gaps-0120'))?.sourceUrl).toContain('/v0.12.0/docs/gaps.md');
});
it('updates every existing translation with a localized summary and an explicitly English source link',()=>{
 for(const locale of translatedLocales) for(const path of localizedPaths(locale)) {
  const digest=getPageContent(locale,path)?.sections.find(s=>s.id==='update-2026-10-22');
  expect(digest?.paragraphs.join(' ')).toContain('0.12.0');
  expect(digest?.paragraphs.join(' ')).toContain('0.6.1');
  expect(digest?.links?.[0].href).toBe('https://opensourceadobe.com/updates/2026-10-22/');
  expect(pageUpdatedAt(`/${locale}${path}`)).toBe('2026-10-25');
 }
});
it('splits the prior day without fabricating a source check or backdating publication',async()=>{
 const issue=dailyUpdates.find(x=>x.date==='2026-10-21')!;
 expect(issue.entries).toHaveLength(6);
 expect(issue.checkedDate).toBe('2026-10-22');
 expect(issue.publishedDate).toBe('2026-10-22');
 expect(issue.introduction).toContain('not checked on October 21');
 const props={params:Promise.resolve({date:issue.date})};
 const metadata=await generateMetadata(props);
 expect(metadata.openGraph).toHaveProperty('publishedTime','2026-10-22');
 const html=renderToStaticMarkup(await DailyUpdatePage(props));
 expect(html).toContain('"datePublished":"2026-10-22"');
 expect(html).toContain('Beijing time <time');
 expect(html).toContain('2026-10-21 15:46:25');
 expect(html).toContain('Source checked <time dateTime="2026-10-22">2026-10-22</time>');
 expect(html).toContain('Published <time dateTime="2026-10-22">2026-10-22</time>');
});
