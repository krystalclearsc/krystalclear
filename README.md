# Krystal Clear Services — website

Website for Krystal Clear Services, Corp. (house and office cleaning, Huntington, NY): https://krystalclearny.com

Designed and developed by [Helice DS LLC](https://heliceds.com/).

## Stack
- [Astro](https://astro.build/) static site (no server code), TypeScript, plain CSS
- Images optimized at build time (AVIF/WebP) with `sharp`
- Hosted on Cloudflare Workers (static assets) — see `wrangler.jsonc`

## Commands
| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (Node 22, see `.node-version`) |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `./dist` |
| `npm run preview` | Serve the build locally |
| `npx wrangler deploy` | Deploy `./dist` to Cloudflare |

## Structure
- `src/config/site.ts` — business data (name, phone, links). Every page and the structured data read from here.
- `src/data/` — services, service areas, guides, FAQ and reviews content.
- `src/pages/` — routes: home, `/services/`, `/service-areas/`, `/resources/`, about, contact, FAQ, privacy, 404, plus generated `robots.txt` and `llms.txt`.
- `src/components/`, `src/layouts/`, `src/styles/`, `src/scripts/` — UI.
- `public/_redirects` — 301 redirects from the previous site's URLs.
- `public/_headers` — caching and security headers; `noindex` on preview hostnames.

## Indexing
Builds of `main` on Cloudflare are indexable; other branches and local builds are `noindex` with a blocking `robots.txt`. The build variable `SITE_INDEXABLE=true|false` overrides this.
