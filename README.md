# Rajdeep Majumdar — Portfolio

Next.js (App Router) + Tailwind CSS v4 portfolio, statically prerendered for SEO.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Edit content

All text, links and projects live in `src/data/portfolio.js`. Components and SEO
metadata (title, Open Graph, JSON-LD) read from it.

## SEO

- Metadata, Open Graph / Twitter cards, canonical URL: `src/app/layout.js`
- JSON-LD (`Person`, `WebSite`, projects `ItemList`): `src/app/layout.js`
- `sitemap.xml`, `robots.txt`, web manifest, generated OG image, icon: `src/app/*`
- Set the real domain before deploying: copy `.env.example` to `.env.local` and
  set `NEXT_PUBLIC_SITE_URL` (otherwise canonical/sitemap URLs use `localhost:3000`).

## Contact form

The form posts to `src/app/api/contact/route.js`, which emails the message to you
over SMTP (Nodemailer). Set `SMTP_USER` and `SMTP_PASS` in `.env.local` (see
`.env.example`). For Gmail, `SMTP_PASS` must be an **App Password**, not your normal
password. The route needs a host that runs server code (Vercel, Render, a VPS) and
has a honeypot, input limits and a per-IP rate limit.

## Design

Tokens from `DESIGN.md` ("Warm Editorial Artifact") live in `src/app/globals.css`,
with light and dark palettes switched by the `.dark` class (toggle in the header).
