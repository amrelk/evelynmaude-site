# evelynmaude-site

SvelteKit + mdsvex personal site, deployed as a Cloudflare Worker (static assets) via `@sveltejs/adapter-cloudflare`.

## Developing

```bash
npm install
npm run dev
```

Project writeups live in `src/md/projects/*.md`. Files prefixed with `__` are hidden from the projects list.

## Building

```bash
npm run build
npx wrangler dev   # preview the production build in workerd
```

Every route is prerendered (`src/routes/+layout.ts`), so pages are served as static assets. To add a
dynamic route, put `export const prerender = false;` in its `+page.ts`/`+page.server.ts`/`+server.ts`
and it will run in the Worker.

## Deploying

Workers Builds is connected to this repo and deploys on push to `main` (build: `npm run build`,
deploy: `npx wrangler deploy`). Config lives in `wrangler.toml`.

Manual deploy: `npm run build && npx wrangler deploy`.
