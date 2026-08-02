# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 3005 (Turbopack)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run optimize-images  # Run image optimization script
```

There are no tests in this project. `npm run build` is the real check — it
catches failures the dev server tolerates silently.

## Returning after time away

This repo is worked on in bursts, and long gaps are where breakage comes from.
Start every session back with:

```bash
nvm use        # pins Node to .nvmrc (24.14.1); the native @next/swc binary is version-sensitive
npm ci         # NOT `npm install` — installs the lockfile exactly and wipes node_modules first
npm run build  # verify a clean build before changing anything
```

Use **npm**, not pnpm or yarn. It is pinned via `packageManager` in
`package.json` and is the manager the committed `package-lock.json` belongs to.

`npm install` is what lets a tree drift or half-corrupt between visits; `npm ci`
is deterministic. If something behaves strangely, `rm -rf node_modules .next &&
npm ci` before debugging anything else.

### Known failure mode: a dev server that hangs with no error

`next dev` printing `✓ Ready` and then stalling — no error, just a spinner — has
happened here before. Triage in this order:

1. `tail .next/dev/logs/next-development.log` — Next logs `○ Compiling X ...`
   here even when the terminal shows nothing.
2. `ps -o %cpu -p <pid>` — **low CPU means blocked on I/O** (a network call or
   lock), not slow compilation. This is the highest-signal check.
3. `curl localhost:3005/robots.txt` — if a trivial route hangs too, the problem
   is global, not in the page you are editing.

Root cause last time: `next/font/google` downloading fonts *at compile time*.
Fonts are now self-hosted via the `geist` package, loaded in
`src/app/layout.tsx`. **Do not move `next/font` loaders into
`src/resources/once-ui.config.js`** — it works in dev and fails the production
build with `ReferenceError`. Avoid adding anything that fetches over the network
during a build.

## Deployment — two targets, both live

Pushing to `main` deploys to **both** platforms. This is deliberate:

- **Vercel** — primary hosting, via the GitHub integration. Also builds a
  preview deployment for every PR, which is a useful safety net.
- **AWS Amplify** — serves the **custom domain**, configured by `amplify.yml`.

**Do not delete `amplify.yml`.** It looks like leftover config from a migration,
but it is live and the domain depends on it. (This has already been mistaken for
dead config once.)

Both run `npm ci && npm run build`, so a green local build is a good predictor
of both. A failed build on either platform does **not** take the site down —
each keeps serving its last successful deployment.

A third check, GitHub Actions (`.github/workflows/ci.yml`), is separate from
both and does not deploy anything; it only reports pass/fail.

Amplify caches `$HOME/.npm`, not `node_modules` — caching `node_modules` fights
`npm ci`, which wipes it by design, and can leave a half-installed tree.

## Architecture

This is a **Next.js 16 (App Router)** portfolio site built on the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template using the **Once UI** component system (`@once-ui-system/core`).

### Key config files (the primary place to make changes)

- **`src/resources/content.js`** — All personal content: bio, work experience, education, social links, gallery images, page text. This is JSX-enabled (uses React fragments for rich text).
- **`src/resources/once-ui.config.js`** — Site-wide settings: theme, colors, visual effects (dots, gradients, masks), enabled routes, password-protected routes, and `baseURL` for SEO/OG tags. Fonts are **not** here — see `src/app/layout.tsx`.
- **`src/resources/custom.css`** — Custom CSS overrides on top of Once UI tokens.
- **`src/resources/icons.ts`** — Custom icon registry for social/nav icons.

### Content authoring


- **Blog posts**: Add `.mdx` files to `src/app/blog/posts/`
- **Work/projects**: Add `.mdx` files to `src/app/work/projects/`
- MDX files use frontmatter for metadata (title, publishedAt, summary, image, tag, team, etc.)

### Routing

Routes are toggled via `routes` object in `once-ui.config.js`. Pages live at:

- `src/app/page.tsx` — Home
- `src/app/about/page.tsx` — About/CV
- `src/app/work/page.tsx` + `[slug]/page.tsx` — Projects
- `src/app/blog/page.tsx` + `[slug]/page.tsx` — Blog
- `src/app/gallery/page.tsx` — Photo gallery

Password protection for specific routes is configured via `protectedRoutes` in `once-ui.config.js` and requires `PAGE_ACCESS_PASSWORD` in `.env`.

### Styling

Once UI uses HTML `data-*` attributes for theming (brand color, accent, border style, etc.), set in `once-ui.config.js` under `style`. Custom overrides go in `src/resources/custom.css`. Component-level styles use SCSS modules (`.module.scss`).

### OG image generation

`src/app/api/` handles automatic Open Graph image generation via `next/og`. Metadata is auto-generated from content objects in `content.js`.
