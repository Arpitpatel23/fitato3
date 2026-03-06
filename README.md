# Fitato Foods Static Site

This repository is a **100% static** pre-launch website for Cloudflare Pages.

## Fix for `fitato.pages.dev` returning 404

A 404 on the default `*.pages.dev` URL usually means Cloudflare Pages is publishing the wrong folder (or no folder).

Use these settings in Cloudflare Pages:

- **Framework preset:** None
- **Build command:** *(leave empty)*
- **Build output directory:** `public`

This repo now includes all deployable files inside `public/`:

- `public/index.html`
- `public/blog.html`
- `public/styles.css`
- `public/script.js`
- `public/robots.txt`
- `public/sitemap.xml`

## Local preview

```bash
python3 -m http.server 4173 --bind 0.0.0.0 -d public
```

Then open: `http://localhost:4173`
