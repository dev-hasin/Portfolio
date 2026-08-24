# Hasin Falak Kiyani Portfolio

A performance-minded React portfolio with a Sanity CMS admin portal. Edit projects, certifications, volunteer experience, work history, education, skills, services, profile, and contact content without changing code.

## Features

- Public Vite + React SPA with CDN-backed Sanity content and local seed fallback
- Embedded Sanity Studio at `/admin`
- Persistent dark/light theme toggle
- Framer Motion hero/project entrances plus scroll reveals
- Subtle atmospheric background graphics (respects reduced motion)
- Contact form via FormSubmit

## Tech Stack

- React 19, Vite 6, Tailwind CSS 4, React Router 7
- Sanity (schemas + Studio)
- Framer Motion, Lucide React

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

The site runs with **seed content** until Sanity env vars point at a real project.

### Connect Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage).
2. Put the project id and dataset in `.env`:

```bash
VITE_SANITY_PROJECT_ID=yourActualProjectId
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-01-01
SANITY_STUDIO_PROJECT_ID=yourActualProjectId
SANITY_STUDIO_DATASET=production
```

3. In Sanity manage → API → CORS origins, add `http://localhost:5173` and your production domain.
4. Open `http://localhost:5173/admin`, sign in, and create documents (Site Settings, projects, etc.).
5. Publish — the public site fetches from the Sanity CDN (no redeploy needed for copy/images).

Optional CLI Studio (separate from the embedded `/admin` route):

```bash
npm run sanity
```

### Seeding tip

Use the public seed in `src/data/seed.ts` as the source of truth for first-time content: recreate those entries in Studio (Site Settings singleton, Contact Settings singleton, then list documents for projects, certifications, volunteer, experience, education, skills, tech stack, and services).

## Scripts

| Command | Purpose |
|--------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` / `npm start` | Preview `dist/` |
| `npm run sanity` | Sanity Studio CLI |
| `npm run sanity:deploy` | Deploy hosted Studio (optional) |

## Contact Form

Copy `.env.formsubmit.example` or set:

```bash
VITE_CONTACT_ENDPOINT=https://your-form-provider.example/endpoint
```

## Folder Structure

```text
src/
  app/           pages + router (includes /admin)
  components/    UI, layout, sections
  context/       ContentProvider (Sanity + seed)
  data/          seed fallback content
  lib/           Sanity client, queries, content types
  sanity/        schema types + Studio entry
  styles/
sanity.config.ts
```

## Deploy

Build is a static SPA (`dist/`). Deploy to Vercel, Netlify, Render, or GitHub Pages with SPA fallback to `index.html`.

Set the same `VITE_SANITY_*` env vars in your host. Keep Studio write tokens out of the frontend — Studio uses Sanity login.

## Performance notes

- Public reads use Sanity CDN (`useCdn: true`)
- One batched GROQ query for site content
- If Sanity is unreachable or unset, seed content loads immediately
- Animations honor `prefers-reduced-motion`
