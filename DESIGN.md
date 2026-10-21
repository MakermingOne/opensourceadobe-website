# DESIGN.md — opensourceadobe.com

**状态**：Selected design direction v2.0  
**日期**：2026-10-11  
**适用范围**：全站内容页、比较页、教程页和产品资料页

## 1. 设计结论

采用“Open Source Index / 开源索引海报”作为首页主视觉方向。它以黑、白、钴蓝和极少量状态色建立强烈的目录记忆点，借鉴独立杂志、海报排版和信息索引的视觉语言，但不复制 Adobe 或 ArtCraft 的产品营销页。

首页使用高对比的黑白钴蓝索引建立品牌识别；内容页、比较页、教程页和产品资料页仍以白底或冷白底承载长文、表格与证据。这样既有鲜明首页，也不会让阅读型页面变成暗色主题。

这套风格可以参考 ArtCraft 官方页的清晰信息分层，但不能复制官方的产品营销结构、按钮文案、截图构图、品牌视觉或页面叙事。OpenSourceAdobe 的识别点是：

- 内容和比较先于营销 CTA；
- 首屏尽早出现“能替代什么 / 不能替代什么”；
- 以证据状态、来源和核验时间建立信任；
- 用大字号、编号、目录和细线组织首页，不使用泛用 SaaS 卡片墙；
- 用“Evidence Ledger / 证据账本”作为本站最具识别度的信任组件，而不是泛用的彩色卡片边框；
- 品牌主强调色只有钴蓝；青绿、红色只表达状态或风险，不参与装饰；
- 首页允许局部黑底，但长文、表格、来源区和产品详情不强制使用暗色背景。

## 2. 视觉令牌

所有颜色写入 `globals.css` 的 `:root`，组件不得直接写颜色值。`color-mix()` 只作为增强，必须提供静态 fallback。

```css
:root {
  --bg: #f5f7fb;
  --bg-raised: #ffffff;
  --bg-sunken: #e8edf5;
  --accent-soft: #e5edff;

  --ink: #121722;
  --ink-strong: #0b0d12;
  --muted: #49576b;
  --faint: #596478;
  --line: #c9d3e1;
  --line-strong: #8797ad;

  --accent: #285fdc;
  --accent-ink: #174bb2;
  --accent-on-dark: #8aabff;
  --accent-state: #c6f36d;

  --invert-bg: #101114;
  --invert-fg: #f8f9fd;
  --danger: #b3261e;
  --scanline: rgba(18, 23, 34, 0.03);
}

@supports (color: color-mix(in oklab, black, white)) {
  :root {
    --line: color-mix(in oklab, var(--ink) 16%, transparent);
    --line-strong: color-mix(in oklab, var(--ink) 40%, transparent);
    --accent-soft: color-mix(in oklab, var(--accent) 10%, var(--bg-raised));
  }
}
```

### 2.1 颜色规则

- 首页的品牌入口允许黑底；全站不提供用户切换的暗色主题，内容页使用 `color-scheme: light`，并保留 forced-colors / high-contrast 可用性；
- 页面底色使用白色、冷白和蓝灰，不使用米白、奶油色或复古纸张色作为主背景；
- `--accent` 是唯一品牌强调色；`--accent-state` 只用于已映射/早期验证等状态，不能成为装饰色；状态不能只靠颜色表达；
- `--accent-on-dark` 只是在反色底上满足小字号 WCAG AA 的同色系亮度变体，不得在浅色内容区作为第二品牌色使用；
- `--danger` 只用于错误、风险和法律提示；
- `--invert-bg` 只用于 CTA 或结论块，全站最多 2–3 处；
- 不使用紫色渐变、大面积霓虹、发光光晕、玻璃拟态、重投影或营销式渐变；
- `--scanline` 只能用于局部装饰伪元素，不能铺在长文正文或表格文字下方；
- 不使用纯黑 `#000` 作为正文或主标题颜色。

## 3. 字体与排版

```css
:root {
  --font-display: "Archivo", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, monospace;
}
```

全站只部署三套字体：Archivo 用于标题，Inter 用于正文，Geist Mono 用于数据、表头、眉标和代码。Instrument Serif 从首发规范中移除，避免为极少数引文增加额外字体文件、预加载和请求；引文使用 Inter 的字重、字距和版式层级表达。

字体文件必须放在项目仓库中，随站点一起构建和部署，通过同域名加载。不依赖运行时 Google 请求，也不为字体额外配置 DNS 或 TLS 连接。

字体加载规范：

- Next.js 优先使用 `next/font/local`，将 Latin-only 的 `.woff2` 文件放入项目；构建环境网络不稳定时不得因为下载字体而阻塞构建；
- 允许使用 `next/font/google` 作为备选，但它只在构建阶段获取字体，运行时仍必须输出为自托管资源；配置必须使用 `subsets: ['latin']`；
- `next/font/local` 没有 `subsets` 参数时，源文件本身必须已经是 Latin-only 子集；禁止把中文字体包、CJK 扩展包或无用字符集放进项目；
- 每套字体只保留实际使用的字重和样式，优先使用一个可变 `woff2`，不得为不存在的字重准备文件；
- 使用 `display: 'swap'`，保留 Next.js 生成的 fallback 度量调整（`size-adjust`、`ascent-override`、`descent-override` 等），避免字体替换造成 CLS；
- 不使用 CSS `@import` 加载字体；不把字体放到第三方 CDN；不在页面组件中手写远程字体 URL；
- 交付前检查产物：字体请求必须为同源请求，Network 中不得出现 Google Fonts、第三方字体 CDN 或中文字体文件。

| 层级 | 规范 |
|---|---|
| H1 | `clamp(2.5rem, 5.5vw, 4rem)`，Archivo，字重 600，行高 1.02，字距 `-0.03em` |
| H2 | `clamp(1.75rem, 3vw, 2.25rem)`，行高 1.15，字距 `-0.02em` |
| H3 | `1.25rem`，行高 1.35，字重 600 |
| 正文 | `1rem`；长文 `1.0625rem`，行高 1.65，最大宽度 68ch |
| 眉标 / 表头 / 数据 | `0.6875rem` 起，Geist Mono，uppercase，字距 `0.12em` |
| 引文 / 编者按 | Inter，使用较大字号、窄栏和发丝线区分，不新增字体 |

眉标和表头在小屏幕上不得小于 11px；长标签不要强制 uppercase。Archivo 的可变宽度只有在字体文件确实提供 `wdth` 轴时使用 `font-stretch`，禁止用 `transform: scaleX()` 压缩正文或标题。字体 fallback 必须在首屏截图和 CLS 测试中验证。

首页 B 方向排版规则：H1 可放大到 `clamp(3.25rem, 8vw, 7.5rem)`，使用短句断行；重点词使用 `--accent`，不使用阴影、描边或渐变制造冲击力。应用名称以 `01—07` 编号索引，编号、对标对象和状态使用 Geist Mono；大标题不能取代可检索的真实 H1 和正文摘要。

## 4. 布局

- 内容容器 `max-width: 1280px`；桌面左右 padding 24px，移动端 16px；
- 桌面 12 列，平板 8 列，移动端 4 列；
- 普通区块间距使用 `clamp(56px, 8vw, 96px)`，密集表格区可缩小到 32–48px；
- 分隔优先使用 1px `var(--line)` 发丝线；网格可以用 `gap: 1px` 让背景透出，不给每块叠加边框和阴影；
- 卡片使用 `var(--bg-raised)` 和 1px 边框，不使用投影；
- 主体组件走直角；只有徽标、标签和状态 chip 可以使用 `rounded-full`；
- 不使用超过 1px 的 hover 位移。默认只允许边框变化或最多 `translateY(-1px)`。

### 4.1 信息密度与网格模板

页面不共用一种密度。开发时必须为页面声明以下模式之一：

| 模式 | 适用页面 | 版式特征 |
|---|---|---|
| `Scan` | 首页、`/apps/` | 短句、表格、少装饰，优先快速扫描 |
| `Read` | 教程、产品详情 | 68ch 阅读列、较大行高、段落之间有明确呼吸空间 |
| `Inspect` | Review、格式兼容性 | 测试条件、来源、状态和限制优先 |

常用 12 列组合固定为：`8/4`（正文 + 证据账本）、`7/5`（产品说明 + 兼容性摘要）、`6/6`（能替代 / 不能替代）、`12`（表格或长文）和 `4/4/4`（首页入口）。除非内容确实需要，不新增局部网格比例。

首页 B 方向额外使用 `7/5`（大标题 + 代表性索引/证据）和 `6/6`（能替代 / 不能替代）两种组合；应用索引使用 2 列海报网格，移动端降为 1 列。黑底区块只承担品牌入口和短判断，不承载长段落、复杂表格或不可访问的动态视觉。

## 5. 组件规范

### Header 与身份标识

页头常驻 `Unofficial · Independent guide`，不能只放在页脚。品牌只使用文字 `OpenSourceAdobe`，不使用 Adobe 或 ArtCraft logo。

阶段 1 只显示已上线的 `Apps`、`Compare`、`About`；教程、下载和替代品页面上线后再显示对应导航项。

### 表格

- 使用原生语义 `<table>`；
- 表头使用 Geist Mono 小字大写，颜色为 `var(--muted)`；
- 行分隔使用 1px `var(--line)`；斑马纹可用 `var(--bg-sunken)`；
- 数值列右对齐；状态列必须有文字；
- 桌面端保持完整字段，移动端放进可见的横向滚动容器；
- 关键字段可不换行，但长描述必须允许换行，不能用“整张表不换行”制造不可用宽度；
- 移动端表格上方提供横向滚动提示，表格下方提供文字总结；
- 表格不能成为页面唯一信息来源。

### 按钮与链接

- 主按钮：`var(--invert-bg)` 底、`var(--invert-fg)` 字、直角；
- 次按钮：透明底、1px `var(--line-strong)` 边框；
- 普通链接：`var(--ink)` 加下划线，hover 使用 `var(--accent-ink)`；
- 所有按钮提供 hover、focus-visible、pressed、disabled 和 busy 状态；
- 外部官方链接使用明确文案，例如 `Official source`、`Open repository`；
- 禁止使用 emoji 作为图标，图标统一使用 lucide-react，描边 1.5px；
- 不引入新的 UI 组件库，只使用 shadcn/ui 的必要无障碍 primitives、Tailwind 和 lucide-react；不得直接接受 shadcn/ui 默认的圆角、阴影和紫色 token。

### Evidence Ledger / 证据账本

证据账本是本站的正式名称。它用于呈现“一个可核验判断”，而不是给每个卡片添加彩色装饰。标准结构为：

```text
CLAIM 04
PSD import · Partially tested
Source: official docs + local test
Last verified: 2026-10-11
```

- 产品页使用完整账本；比较表使用简化状态行；首页最多展示 1 个代表性账本；
- 状态必须同时有文字和结构，颜色只做辅助；
- 不给每个标题、卡片或列表项都加竖色条；
- 账本必须注明来源与核验日期，不能用“编辑部判断”替代证据。

### Open Source Index / 开源索引

首页应用入口使用目录式索引，而不是产品营销卡片：

- 每个应用拥有稳定编号、ArtCraft 名称、Adobe 对标对象、工作流类别和当前状态；
- 编号顺序不能暗示排名、质量或推荐优先级；
- 首页最多展示 4 个代表性索引项，完整 7 App 信息进入 `/apps/` 和比较区；
- 大字号只负责建立识别点，事实判断必须在同屏或紧邻区域出现；
- 索引项 hover 只改变边框或文字强调，不放大、不发光、不位移超过 1px；
- 任何黑底索引项都必须在 DOM 中保留真实链接、可访问名称和静态文本，不依赖画布或 hover 才能理解。

### 眉标与状态

眉标使用 Geist Mono 小字大写，前面加 6px `var(--accent)` 方块，不使用发光圆点。

状态必须使用文字和结构表达：`Verified`、`Partially tested`、`Reported`、`Not verified`。可以用 accent、边框、图标区分，但不能只靠红黄绿。

### 媒体

- 软件截图优先 `object-fit: contain`，不得裁掉菜单、工具栏和文件信息；
- 只有装饰图或不影响理解的图片才使用 21:9 或 16:10 裁切；
- 产品图标使用 1:1；
- 图片使用 WebP/AVIF 并写显式宽高；
- 首屏主图使用 `loading="eager"` 或 `fetchpriority="high"`，非首屏图片才使用 `loading="lazy"`；
- 没有授权的竞品截图、logo、缩略图和视频片段不得使用。

## 6. 页面结构

### 首页

首屏不做全屏 hero、不做滚动演示。B 方向首屏使用“目录海报”结构：常驻独立身份眉标、短 H1、钴蓝重点词、简短定义、4 个编号应用索引，以及一个代表性证据账本或判断矩阵。7 App 完整表格从第二个区块开始。移动端首屏不强行放表格，使用 `Compare all 7 apps` 进入扫描区。

页面前半段优先给出事实、状态和比较；教程、替代品和商业 CTA 放在用户完成第一轮判断之后。

### 产品与比较页

产品页采用“事实摘要 + 证据轨道 + 正文”的结构。比较页采用纵向 App 对比组，不复制官方产品页的营销式长 Hero、功能轮播或连续 CTA。

### 其他页面

- `/apps/`：表格优先，简介补充上下文；
- `/tutorials/`：只有过程步骤使用编号；
- `/alternatives/`：先写用户需求和迁移成本，再写产品推荐；
- `/review/`：把测试环境、测试范围和限制放在结论之前或旁边；
- `/faq/`：问题使用自然语言，不为 schema 虚构问题。

## 7. 响应式、无障碍与稳定性

- 验证 375px、768px、1024px、1280px，以及 200% 缩放；
- 关闭 JavaScript 后正文、导航、表格和来源仍可用；
- 键盘焦点统一为 2px accent 外框 + 2px offset；
- sticky Header 不能遮挡跳转标题或焦点；
- `prefers-reduced-motion: reduce` 时关闭非必要动效；
- 全局设置 `scrollbar-color` / `scrollbar-width`，并提供 WebKit 回退；不得为美观隐藏滚动条；
- 图片、字体、来源区、错误提示和动态模块预留空间，避免 CLS；
- 正文与背景达到 WCAG 2.2 AA；
- 不用 hover 才能获取关键事实、外链或 CTA；
- `color-mix`、字体可变轴和新 CSS 特性都必须有兼容回退。

## 8. 与官方页面的差异化验收

上线前逐项确认：

- 首页不是产品营销 Hero，而是“定义 + 判断矩阵 + 表格”；
- 站内第一主 CTA 是 `Browse apps` 或 `Compare tools`，不是下载或注册；
- 页面有明显的第三方身份和来源信息；
- 不复用官方页面的截图顺序、营销标题、按钮组合或品牌口号；
- 页面至少有一个官方页面没有提供的结构化价值：替代边界、实测结果、兼容性矩阵、故障处理或迁移建议；
- 视觉上以黑白钴蓝索引建立首页识别度，以白底长文、表格、证据账本和来源结构承载可信度。
- 首页首屏没有因为“必须展示表格”而牺牲移动端可读性；
- Evidence Ledger 只出现在需要支撑判断的位置，没有退化成通用彩色卡片模板。
- 首页大字号、编号和黑底区块没有制造虚假排名、隐藏关键限制或替代语义 HTML。


## 2026-10-17：13 款应用的下载与安装路径

沿用现有黑白钴蓝、Archivo / Inter / Geist Mono、直角和细线视觉。首页继续作为整个 ArtCraft 家族的独立目录；13 款应用都链接站内详情页，覆盖创作及办公工作流，不将 Word、Excel、PowerPoint、Figma 或 AutoCAD 标成 Adobe 产品。

下载行为的唯一共享组件为 `OfficialDownloads`，资料来源为 `src/content/downloads.ts`：详情页首屏后展示三个已核实的平台下载入口、版本、发布日期、包体积和核验日期；原生 details 展开安装步骤；额外架构进入官方 Release。所有应用复用同一组件，PhotoCraft 的既有深入内容保留。主 CTA 到下载区，安装链接到展开控件，外链明确标注官方来源。

首页和应用目录使用 Scan 密度，详情页使用 Read 密度。继续使用现有 CSS tokens，不新增品牌色、字体或动效。官方功能声明与未独立验证的兼容性分开叙述；每款应用保留自己的具体格式和成熟度限制。
