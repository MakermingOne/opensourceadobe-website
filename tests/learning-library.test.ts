import { expect, it } from 'vitest';
import { learningResources, filterLearningResources } from '@/content/learning-resources';
import { externalResources } from '@/content/external-resources';
import { priorityTutorials } from '@/content/tutorial-videos';

it('preserves every source once and distinguishes media formats and provenance',()=>{
 expect(new Set(learningResources.map(r=>r.id)).size).toBe(learningResources.length);
 for(const item of [...externalResources,...priorityTutorials]) expect(learningResources.some(r=>r.id===item.id && r.url===item.url)).toBe(true);
 expect(learningResources.filter(r=>r.format==='video')).toHaveLength(9);
 expect(learningResources.filter(r=>r.format==='image')).toHaveLength(0);
 expect(learningResources.filter(r=>r.format==='text')).toHaveLength(7);
 expect(learningResources.find(r=>r.id==='official-studio-2d-basics')?.tool).toBe('ArtCraft AI studio');
});
it('combines tool, topic, source and verified operating-system filters',()=>{
 const filtered=filterLearningResources({tool:'ArtCraft suite',topic:'Installation',source:'YouTube',system:'Windows'});
 expect(filtered.map(r=>r.id)).toEqual(['community-craftapps-windows-benja','community-craftapps-overview-gyan']);
 expect(filterLearningResources({tool:'PhotoCraft',source:'Reddit'}).every(r=>r.format==='text')).toBe(true);
 expect(filterLearningResources({tool:'PhotoCraft',system:'macOS',topic:'Background'})).toHaveLength(0);
});
