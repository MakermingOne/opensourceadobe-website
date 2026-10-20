import { externalResources, type ExternalResource } from './external-resources';
import { priorityTutorials } from './tutorial-videos';

export type LearningResource = ExternalResource & {
  format: 'video' | 'image' | 'text';
  tool: string;
  topics: string[];
  systems: string[];
  source: string;
  official: boolean;
  image?: { src: string; alt: string };
};
export type LearningFilters = { tool?: string; topic?: string; source?: string; system?: string };

const topicsById: Record<string, string[]> = {
 'official-studio-2d-basics': ['Getting started', '2D & 3D'],
 'official-studio-2d-to-3d': ['2D & 3D', 'Workflow demos'],
 'community-craftapps-windows-benja': ['Installation', 'Getting started'],
 'community-craftapps-overview-gyan': ['Installation', 'Reviews & context'],
 'photocraft-beginner-abhishek': ['Getting started', 'Workflow demos'],
 'suite-overview-heroic': ['Reviews & context'],
 'vectorcraft-firstlook-krumark': ['Workflow demos', 'Reviews & context'],
 'filmcraft-install-geekrar': ['Installation', 'Workflow demos'],
 'lightcraft-review-sharkcookie': ['Workflow demos', 'Reviews & context'],
 'figcraft-reddit-announcement': ['Reviews & context'],
 'photocraft-pdf-community': ['Troubleshooting'],
 'reddit-vibecoding-launch': ['Reviews & context'],
 'hn-artcraft-discussion': ['Reviews & context'],
 'petapixel-coverage': ['Reviews & context'],
 'official-photocraft': ['Documentation'],
 'official-filmcraft': ['Documentation'],
};
// Systems are assigned only where the existing description establishes scope.
const systemsById: Record<string, string[]> = {
 'community-craftapps-windows-benja': ['Windows'],
 'community-craftapps-overview-gyan': ['Windows', 'macOS', 'Linux'],
 'filmcraft-install-geekrar': ['Windows'],
 'official-photocraft': ['Windows', 'macOS', 'Linux', 'Web'],
 'official-filmcraft': ['Windows', 'macOS', 'Linux'],
};
const sourceLabels = { youtube: 'YouTube', reddit: 'Reddit', hn: 'Hacker News', article: 'Blog / press', official: 'Official site' };

export const learningResources: LearningResource[] = [...priorityTutorials, ...externalResources].map(item => ({
 ...item, format: item.kind === 'youtube' ? 'video' : 'text', tool: item.id === "figcraft-reddit-announcement" ? "FigCraft" : item.app,
 topics: topicsById[item.id] ?? [], systems: systemsById[item.id] ?? [],
 source: sourceLabels[item.kind], official: item.kind === 'official' || ('collection' in item && item.collection === 'official-studio'),
}));
learningResources.push({
 id:'illustrated-ai-history', kind:'article', app:'ArtCraft suite', tool:'General', tier:'news',
 format:'image', topics:['Background'], systems:[], source:'OpenSourceAdobe', official:false,
 title:'Where did the idea of AI begin?', author:'OpenSourceAdobe',
 url:'/learn/ai-history-1955/', publishedAt:'2026-10-19',
 summary:'An illustrated guide to the 1955 Dartmouth proposal, Logic Theorist and the people behind the early ideas of artificial intelligence.',
 keyTakeaway:'Explore the history behind creative AI, with archival sources and a clear distinction between the 1955 proposal and the 1956 workshop.',
 image:{src:'/images/ai-history/archive-desk.jpg',alt:'Editorial illustration of an archival desk with documents about the early history of artificial intelligence'},
});

export function filterLearningResources(filters: LearningFilters): LearningResource[] {
 const any=(value?:string)=>!value || value==='all';
 return learningResources.filter(r => (any(filters.tool) || r.tool===filters.tool) &&
  (any(filters.topic) || r.topics.includes(filters.topic!)) &&
  (any(filters.source) || r.source===filters.source) &&
  (any(filters.system) || (filters.system==='Not specified' ? r.systems.length===0 : r.systems.includes(filters.system!))));
}
