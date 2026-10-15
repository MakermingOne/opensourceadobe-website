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
pnpm test:e2e
```

Browser tests use Google Chrome at the configured macOS path locally. On CI, install Playwright Chromium with `pnpm exec playwright install --with-deps chromium` and run with `CI=1`. The included GitHub Actions workflow runs the full verification suite and does not deploy the live website.

## Content and sources

Published guides, app records, release information, download links, and source citations live in `src/content/`. Pages and components live in `src/app/` and `src/components/`.

Product claims are attributed to official sources and include verification dates. Unknown capabilities remain explicitly unverified. These pages are source-led guides, not hands-on reviews. Download links point to official release assets; this repository does not redistribute installers.

## Third-party materials

Font licenses are included in `public/fonts/licenses/`. Product names, trademarks, screenshots, and linked third-party software belong to their respective owners. Public visibility of this repository does not grant rights to third-party materials.
