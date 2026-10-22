import { expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { dailyUpdates } from '@/content/updates';
import DailyUpdatePage from '@/app/(en)/updates/[date]/page';

it('uses the official merge date and preserves earlier source checks', async () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-22')!;
 const entry = dailyUpdates.find(i => i.date === '2026-10-23')!.entries.find(e => e.id === 'photocraft-jpeg-docs-oct23');
 expect(entry?.eventPublishedAt).toBe('2026-10-22T16:53:33Z');
 const html = renderToStaticMarkup(await DailyUpdatePage({params: Promise.resolve({date: issue.date})}));
 const currentHtml = renderToStaticMarkup(await DailyUpdatePage({params: Promise.resolve({date: '2026-10-23'})}));
 const section = currentHtml.split('id="photocraft-jpeg-docs-oct23"')[1]?.split('</section>')[0];
 expect(section).toContain('2026-10-23 00:53:33');
 expect(section).toContain('Source checked <time dateTime="2026-10-23">2026-10-23</time>');
 expect(section).toContain('Published here <time dateTime="2026-10-23">2026-10-23</time>');
 expect(html.split('id="photocraft-0120-oct22"')[1].split('</section>')[0]).toContain('Source checked <time dateTime="2026-10-22">2026-10-22</time>');
});

it('puts the after-midnight documentation in the next Beijing brief without inventing a release', () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-23')!;
 expect(issue.entries.map(e => e.kind)).toEqual(['Documentation update', 'Documentation update']);
 expect(issue.entries[1].eventPublishedAt).toBe('2026-10-22T17:28:41Z');
 expect(issue.entries[0].summary).toContain('development');
 expect(issue.introduction).toContain('Beijing time');
 expect(new Set(dailyUpdates.map(i => i.date)).size).toBe(dailyUpdates.length);
});
