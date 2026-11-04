<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Public repository synchronization

Whenever updating this website, also update and push the public website repository at `https://github.com/MakermingOne/opensourceadobe-website` (local checkout: `/Users/mingwen/opensourceadobe-website`). The user explicitly requested this ongoing synchronization on 2026-10-15.

Sync the final public website source, content, assets, and necessary build/test files. Keep the public repository's README appropriate for external readers. Do not copy private Git history, internal PRDs, research, SEO planning, development notes, local environment files, credentials, or private deployment configuration. Review the public diff and run checks appropriate to the changes before pushing. Preserve the website link `https://opensourceadobe.com` in the public repository description and homepage.

## Cursor Cloud specific instructions

The Cloud Agent image also has Node.js 22 earlier on `PATH`. This site needs Node.js 24 (`.nvmrc`, `package.json` `engines`) and pnpm 10.30.3 (`packageManager`). The environment install places Node 24.22.1 and that pnpm in `/usr/local/bin` and prepends that directory.

- Dev server, also started on boot: `pnpm dev --hostname 0.0.0.0 --port 3000`
- `pnpm test:e2e` serves the built `out/` directory. Run it as `CI=1 pnpm test:e2e` so Playwright uses its Chromium build. Without `CI`, `playwright.config.ts` looks for Google Chrome at the macOS path.
