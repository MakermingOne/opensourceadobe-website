import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import TutorialsPage from '@/app/(en)/tutorials/page';

it('prioritizes official studio lessons and separately attributes the requested installation guides', () => {
 const html = renderToStaticMarkup(createElement(TutorialsPage));
 const official = html.indexOf('id="official-studio-tutorials"');
 const community = html.indexOf('id="community-installation-guides"');
 expect(official).toBeGreaterThan(-1);
 expect(community).toBeGreaterThan(official);
 expect(community).toBeLessThan(html.indexOf('id="paths-heading"'));
 for (const id of ['ZASPqlqUBQc','t8F-sy_zyK4','oL4_LZxnTRA','ZKaW8u26afU']) expect(html).toContain(`https://www.youtube.com/watch?v=${id}`);
 for (const author of ['ArtCraft AI', 'Benja Review','GYAN BATO']) expect(html).toContain(author);
 for (const duration of ['2:22','2:47','1:22','3:27']) expect(html).toContain(duration);
 expect(html).toContain('Exact app versions not verified');
 expect(html).toContain('ArtCraft AI studio');
});
