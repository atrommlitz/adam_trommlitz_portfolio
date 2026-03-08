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

There are no tests in this project.

## Architecture

This is a **Next.js 16 (App Router)** portfolio site built on the [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio) template using the **Once UI** component system (`@once-ui-system/core`).

### Key config files (the primary place to make changes)

- **`src/resources/content.js`** — All personal content: bio, work experience, education, social links, gallery images, page text. This is JSX-enabled (uses React fragments for rich text).
- **`src/resources/once-ui.config.js`** — Site-wide settings: theme, colors, typography (Geist fonts), visual effects (dots, gradients, masks), enabled routes, password-protected routes, and `baseURL` for SEO/OG tags.
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
