import type { LearningResource } from './learning-resources';

// Original YouTube watch metadata/oEmbed and native platform pages checked 2026-11-06.
// Summaries describe the publisher's lesson, not independent end-to-end app testing.
const checkedAt = '2026-11-06';
const john = { author: 'JohnCreates', authorUrl: 'https://www.youtube.com/@JohnCreatesHQ' };

type VideoInput = {
 id: string; youtubeId: string; tool: LearningResource['app']; title: string;
 publishedAt: string; duration: string; summary: string; versionNote: string;
 keyTakeaway: string; topics: string[]; language?: string; tier?: LearningResource['tier'];
 author?: string; authorUrl?: string;
};
function video(input: VideoInput): LearningResource {
 return { ...john, ...input, app: input.tool, kind: 'youtube',
  url: `https://www.youtube.com/watch?v=${input.youtubeId}`, format: 'video',
  source: 'YouTube', official: false, systems: [], language: input.language ?? 'English',
  tier: input.tier ?? 'tutorial', checkedAt,
 };
}

export const recentLearningResources: LearningResource[] = [
 video({
  id: 'photocraft-record-actions-john', youtubeId: 'awN_PveDALI', tool: 'PhotoCraft',
  title: 'PhotoCraft 0.20.1 Update: Automate Photo Editing Like in Photoshop (Actions Tutorial)',
  publishedAt: '2026-11-03', duration: '2:50',
  topics: ['Automation & actions', 'Workflow demos'],
  summary: 'Record an adjustment sequence, organize it in an Action Set, then replay it on several photographs.',
  versionNote: 'PhotoCraft 0.20.1. The same adjustments can produce different colors on different source images.',
  keyTakeaway: 'Start with a duplicate photo and compare each replay before applying an action to a larger set.',
 }),
 video({
  id: 'photocraft-atn-import-john', youtubeId: 'ZQtUduxMXvw', tool: 'PhotoCraft',
  title: 'PhotoCraft 0.20 Update: Run Photoshop Actions Like in Photoshop (ATN Import)',
  publishedAt: '2026-11-03', duration: '2:43', topics: ['Automation & actions', 'Adobe file migration'],
  summary: 'Import a Photoshop ATN action, replay a sepia treatment and compare the output with Photoshop.',
  versionNote: 'The title says 0.20; the description specifies PhotoCraft 0.20.1 and reports different color results.',
  keyTakeaway: 'One imported action is a useful test case; it does not establish support for every Photoshop action.',
 }),
 video({
  id: 'photocraft-hair-mask-john', youtubeId: '2POatdzlR34', tool: 'PhotoCraft',
  title: 'PhotoCraft 0.18: Refine Hair Like Photoshop (Select and Mask)',
  publishedAt: '2026-11-02', duration: '8:22', topics: ['Selections & masks', 'Workflow demos'],
  summary: 'Follow subject selection and hair-edge refinement, then work on imperfect masks and white halos.',
  versionNote: 'PhotoCraft 0.18; the creator tests three images and discusses refinement limitations.',
  keyTakeaway: 'Inspect fine hair against both light and dark backgrounds before exporting the cutout.',
 }),
 video({
  id: 'photocraft-thumbnail-john', youtubeId: 'FWeBQ2HChc0', tool: 'PhotoCraft',
  title: 'PhotoCraft v0.17.0 Tutorial: How to Make a YouTube Thumbnail',
  publishedAt: '2026-10-31', duration: '6:02', topics: ['Getting started', 'Workflow demos'],
  summary: 'Build a thumbnail from a blank document using a gradient, images, text, shapes, masks and layer effects.',
  versionNote: 'PhotoCraft 0.17.0. A complete beginner project ending with an exported thumbnail.',
  keyTakeaway: 'Make one thumbnail, keep the layered project and check the exported image at its intended display size.',
 }),
 video({
  id: 'filmcraft-first-edit-john', youtubeId: 'Z5RR1I-DGrQ', tool: 'FilmCraft',
  title: 'FilmCraft v0.14.0: Edit Your First Video in 7 Minutes',
  publishedAt: '2026-10-29', duration: '6:10', topics: ['Getting started', 'Video editing'],
  summary: 'Import media, split and trim clips, close gaps, add text and a transition, adjust audio and export.',
  versionNote: 'FilmCraft 0.14.0; the description uses Command + K for splitting clips.',
  keyTakeaway: 'Use a short copied clip and play the exported result to check cuts, sound and titles.',
 }),
 video({
  id: 'effectcraft-first-animation-john', youtubeId: '66de0oxGqZ4', tool: 'EffectCraft',
  title: 'EffectCraft v0.16.0 Tutorial for Beginners (Create Your First Animation)',
  publishedAt: '2026-10-26', duration: '28:53', topics: ['Getting started', 'Motion graphics'],
  summary: 'Animate a title with text, shapes and keyframes, then explore easing, the Graph Editor and motion blur.',
  versionNote: 'EffectCraft 0.16.0. The lesson also explores 3D layers, cameras, lighting and expressions.',
  keyTakeaway: 'Finish a small title animation before extending the project into the more advanced sections.',
 }),
 video({
  id: 'vectorcraft-ai-import-john', youtubeId: '0LFt0F6cWoo', tool: 'VectorCraft',
  title: 'VectorCraft 0.21 vs Adobe Illustrator: Can It Open REAL AI Files?',
  publishedAt: '2026-11-04', duration: '3:27', tier: 'hands-on',
  topics: ['Adobe file migration', 'Reviews & context'],
  summary: 'Watch a compatibility test using vector illustrations, text-heavy designs and logos with compound paths or clipping masks.',
  versionNote: 'VectorCraft 0.21. This is an import comparison, rather than a drawing course.',
  keyTakeaway: 'Check appearance and editability separately when testing a copy of your own Illustrator file.',
 }),
 video({
  id: 'lightcraft-import-odc', youtubeId: 'O3e4LzWI_ds', tool: 'LightCraft',
  title: 'LightCraft for Beginners | Lesson 3: Importing Photos',
  author: 'Open Designer Cloud', authorUrl: 'https://www.youtube.com/@OpenDesignerCloud',
  publishedAt: '2026-11-01', duration: '3:22', topics: ['Getting started', 'Photo import & RAW'],
  summary: 'Learn folder import, Add in place, Copy and Move, memory cards, watched folders and finding missing photographs.',
  versionNote: 'LightCraft 0.16.0. The publisher explicitly says real Lightroom catalog import was not tested.',
  keyTakeaway: 'Practice on copied photos and understand whether an import option moves, copies or references the originals.',
 }),
 video({
  id: 'vectorcraft-tools-corelsnake', youtubeId: 'HdWglcQ2o08', tool: 'VectorCraft',
  title: 'ArtCraft VectorCraft 0.17: a atualização gigante, 12 novidades testadas',
  author: 'Corel Snake', authorUrl: 'https://www.youtube.com/@CorelSnake', language: 'Português',
  publishedAt: '2026-10-26', duration: '8:41', topics: ['Vector drawing', 'Workflow demos'],
  summary: 'A Portuguese demonstration of artboard references, smart guides, pencil changes, Shape Builder and drawing inside objects.',
  versionNote: 'VectorCraft 0.17. The chapter list includes library elements and a password-protected PDF limitation.',
  keyTakeaway: 'Follow one tool demonstration at a time with a simple vector drawing.',
 }),
 video({
  id: 'photocraft-workflow-acesso', youtubeId: '1erzY47dBUE', tool: 'PhotoCraft',
  title: 'Mudou tudo! O que há de novo no PhotoCraft?',
  author: 'Acesso Designer', authorUrl: 'https://www.youtube.com/@AcessoDesigner', language: 'Português',
  publishedAt: '2026-10-26', duration: '38:04', topics: ['Getting started', 'Workflow demos'],
  summary: 'A Portuguese lesson covering interface setup, editing tools and a practical social artwork workflow.',
  versionNote: 'Published October 26; an exact app version is not established. The creation segment begins at 22:30.',
  keyTakeaway: 'Use the chapters to move from tool setup into the practical design segment.',
 }),
 video({
  id: 'effectcraft-intro-nijat', youtubeId: '2JKHFBZydT8', tool: 'EffectCraft',
  title: 'GOODBYE AFTER EFFECTS? Effectcraft Full Tutorial',
  author: 'Nijat Ibrahimli', authorUrl: 'https://www.youtube.com/@nijatIbrahimli',
  publishedAt: '2026-10-19', duration: '13:05', topics: ['Getting started', 'Motion graphics'],
  summary: 'A motion-design introduction to the EffectCraft interface and getting started with animation.',
  versionNote: 'Published October 19. Exact app version not established.',
  keyTakeaway: 'Use this introduction before following a task-specific animation lesson.',
 }),
 {
  id: 'photocraft-bilibili-zhou', kind: 'bilibili', app: 'PhotoCraft', tool: 'PhotoCraft',
  title: '带你使用一下开源版的PS【adobe被开源了？】',
  author: '搞设计的周老师', authorUrl: 'https://space.bilibili.com/326984721',
  url: 'https://www.bilibili.com/video/BV1mDpj6QEJ6/', publishedAt: '2026-10-11', duration: '28:47',
  format: 'video', source: 'Bilibili', official: false, language: '中文', checkedAt,
  systems: [], topics: ['Getting started', 'Reviews & context'], tier: 'first-look',
  summary: 'A Chinese-language first look linking ArtCraft’s app directory and discussing a Photoshop-style editing workflow.',
  versionNote: 'Launch-era overview; the description also links the separate Photon Studio product. Exact CraftApps versions not established.',
  keyTakeaway: 'Keep PhotoCraft and Photon Studio separate when following the demonstration.',
 },
 {
  id: 'photocraft-thumbnail-reddit', kind: 'reddit', app: 'PhotoCraft', tool: 'PhotoCraft',
  title: 'Photocraft is nuts', author: 'r/ArtCraftAI contributor',
  url: 'https://www.reddit.com/r/ArtCraftAI/comments/1xfw7od/photocraft_is_nuts/',
  publishedAt: '2026-10-26', checkedAt, language: 'English', format: 'text', source: 'Reddit',
  official: false, systems: ['Linux'], topics: ['Troubleshooting', 'Workflow demos'], tier: 'community',
  summary: 'A Linux user shares a recreated thumbnail and reports shape editing, soft-brush performance and panel issues.',
  versionNote: 'A community project report, not a step-by-step lesson or controlled performance test.',
  keyTakeaway: 'Compare these reported rough edges with your installed build after trying the thumbnail lesson.',
 },
 {
  id: 'vectorcraft-017-reddit', kind: 'reddit', app: 'VectorCraft', tool: 'VectorCraft',
  title: 'VectorCraft 0.17: quase 300 mudanças! Quais realmente valem a pena?',
  author: 'r/designBR contributor', authorDetail: 'Video creator’s discussion thread',
  url: 'https://www.reddit.com/r/designBR/comments/1xfzpsb/vectorcraft_017_quase_300_mudan%C3%A7as_quais/',
  publishedAt: '2026-10-26', checkedAt, language: 'Português', format: 'text', source: 'Reddit',
  official: false, systems: [], topics: ['Vector drawing', 'Reviews & context'], tier: 'community',
  summary: 'The creator shares the linked 0.17 tool demonstration and asks vector artists how it fits their workflow.',
  versionNote: 'Companion discussion to the Corel Snake video, rather than independent confirmation of its results.',
  keyTakeaway: 'Use the thread for questions and context after following the video demonstrations.',
 },
 {
  id: 'artcraft-nas-update-marius', kind: 'article', app: 'ArtCraft suite', tool: 'ArtCraft suite',
  title: 'How to Update ArtCraft Apps on Your NAS', author: 'Marius Bogdan Lixandru',
  authorUrl: 'https://mariushosting.com/', url: 'https://mariushosting.com/how-to-update-artcraft-apps-on-your-nas/',
  publishedAt: '2026-10-28', checkedAt, language: 'English', format: 'text', source: 'Blog / press',
  official: false, systems: [], topics: ['Installation', 'Self-hosting'], tier: 'tutorial',
  summary: 'An illustrated update procedure for readers who already followed the author’s NAS installation guides.',
  versionNote: 'Applies to that self-hosted setup; it is not the normal desktop Launcher update process.',
  keyTakeaway: 'Check the guide’s prerequisites and your existing NAS deployment before following its update steps.',
 },
 {
  id: 'artcraft-agent-guide-github', kind: 'article', app: 'ArtCraft suite', tool: 'ArtCraft suite',
  title: 'ArtCraft installation and Claude Code / Codex workflow guide', author: 'az9713',
  authorUrl: 'https://github.com/az9713', url: 'https://github.com/az9713/artcraft-tutorial',
  checkedAt, language: 'English', format: 'text', source: 'GitHub', official: false, systems: [],
  topics: ['Installation', 'Automation & actions'], tier: 'tutorial',
  summary: 'A community guide mapping the CraftApps to creative tasks, with installation instructions, agent workflows and example outputs.',
  versionNote: 'An evolving repository; no publication date is assigned. Check its current instructions against your app build.',
  keyTakeaway: 'Begin with one small sample project before automating work across several apps.',
 },
];
