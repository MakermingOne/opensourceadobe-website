# OpenSourceAdobe

Website: **[opensourceadobe.com](https://opensourceadobe.com/)**

An independent, source-led guide to ArtCraft apps, open-source creative tools, and the Adobe workflows they target. This project is not affiliated with Adobe or the ArtCraft projects.

This repository contains the published website source, public content and assets, and the files needed to build and verify it. Internal research, product planning, development notes, local settings, and the private project history are excluded.

## Run locally

Requires Node.js 24 and pnpm 10.30.3.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Build

```sh
pnpm build
```

The static website is generated in `out/`. Local and preview builds use `noindex, nofollow` and do not load analytics. For the official production environment, use `DEPLOYMENT_ENV=production pnpm build`. Production canonical URLs point to https://opensourceadobe.com/.

## Verify

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm validate:static
pnpm validate:i18n
pnpm test:e2e
```

Browser tests use Google Chrome at the configured macOS path locally. On CI, install Playwright Chromium with `pnpm exec playwright install --with-deps chromium` and run with `CI=1`. The included GitHub Actions workflow runs the full verification suite and does not deploy the live website.

## Content and sources

Published guides, app records, release information, download links, and source citations live in `src/content/`. Pages and components live in `src/app/` and `src/components/`.

Product claims are attributed to official sources and include verification dates. Unknown capabilities remain explicitly unverified. These pages are source-led guides, not hands-on reviews. Download links point to official release assets; this repository does not redistribute installers.

Substantive page-change dates live in `src/content/page-dates.ts` and are shared by visible page dates, the footer and sitemap. Source-access dates and release publication dates are separate records; changing metadata alone does not reset a guide's editorial date.

## Social preview images

Share cards are original 1200×630 editorial graphics, not official product artwork. Their text comes from the exported page title. To regenerate a selected card after editing its page:

```sh
pnpm build
node scripts/generate-social-images.mjs /apps/ /alternatives/
pnpm build
pnpm validate:static
```

PNG files and editable SVG sources are included in `public/images/og/`.

## Third-party materials

Font licenses are included in `public/fonts/licenses/`. Product names, trademarks, screenshots, and linked third-party software belong to their respective owners. Public visibility of this repository does not grant rights to third-party materials.

## Languages

English URLs remain unprefixed. Traditional Chinese (`/zh-Hant/`), Polish (`/pl/`), German (`/de/`) and Hindi (`/hi/`) each provide localized home, Photoshop alternatives, PhotoCraft setup and download guides. Navigation uses URL links and never redirects visitors based on browser language.

`src/i18n/config.ts` is the published-language/page registry. Shared interface copy is in `src/i18n/*.json`; localized page copy is in `src/content/pages/`. Additional languages add configuration, a dictionary and editorial content while reusing the same locale routes and renderer. Product/platform/status facts continue to come from the shared app records.

`/sitemap.xml` is a language sitemap index. HTML and language sitemaps use the same reciprocal alternate URLs, including English as the default. Run `pnpm validate:i18n` after building to verify the exported language metadata. Build finalization also produces locale `404.html` files; your static host must support nearest-directory 404 handling to show localized errors with the correct status.

## Languages

English URLs stay unprefixed. Traditional Chinese, Polish, German, Hindi, Japanese, Korean and French use locale prefixes. `src/i18n/config.ts` lists published pages and generates language switches, metadata and sitemaps. Unpublished app translations link to the official project. Run `pnpm validate:i18n` after building to check reciprocal alternates and internal link destinations.
