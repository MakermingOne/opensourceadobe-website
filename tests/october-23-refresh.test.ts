import { expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { dailyUpdates } from '@/content/updates';
import DailyUpdatePage from '@/app/(en)/updates/[date]/page';

it('keeps original source dates when a prior Beijing date gains a later checked document', async () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-22')!;
 const entry = issue.entries.find(e => e.id === 'photocraft-jpeg-docs-oct22');
 expect(entry?.eventPublishedAt).toBe('2026-10-22T15:45:30Z');
 const html = renderToStaticMarkup(await DailyUpdatePage({params: Promise.resolve({date: issue.date})}));
 const section = html.split('id="photocraft-jpeg-docs-oct22"')[1]?.split('</section>')[0];
 expect(section).toContain('2026-10-22 23:45:30');
 expect(section).toContain('Source checked <time dateTime="2026-10-23">2026-10-23</time>');
 expect(section).toContain('Published here <time dateTime="2026-10-23">2026-10-23</time>');
 expect(html.split('id="photocraft-0120-oct22"')[1].split('</section>')[0]).toContain('Source checked <time dateTime="2026-10-22">2026-10-22</time>');
});

it('puts the after-midnight documentation in the next Beijing brief without inventing a release', () => {
 const issue = dailyUpdates.find(i => i.date === '2026-10-23')!;
 expect(issue.entries.map(e => e.kind)).toEqual(['Documentation update']);
 expect(issue.entries[0].eventPublishedAt).toBe('2026-10-22T17:28:40Z');
 expect(issue.entries[0].summary).toContain('development');
 expect(issue.introduction).toContain('Beijing time');
 expect(new Set(dailyUpdates.map(i => i.date)).size).toBe(dailyUpdates.length);
});
