# Hasin Falak Kiyani Portfolio

A modern, responsive software engineer portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site highlights projects, skills, experience, education, certifications-ready content structure, and contact details in a clean dark interface.

## Features

- Responsive portfolio pages for home, projects, about, and contact
- Modular section and reusable UI component structure
- Data-driven content for projects, skills, experience, education, and social links
- Accessible navigation, form labels, image alt text, and semantic sections
- SEO-ready HTML metadata
- Fast Vite build with a trimmed dependency list

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React icons

## Folder Structure

```text
src/
  assets/
  app/
    pages/
    App.tsx
    Root.tsx
    routes.tsx
  components/
    common/
    layout/
    sections/
  data/
  imports/
  styles/
  utils/
  main.tsx
```

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

The development server will usually run at `http://localhost:5173`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

This project can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

1. Run `npm run build`.
2. Deploy the generated `dist/` folder.
3. Configure your hosting provider to serve `index.html` for client-side routes.

## Updating Portfolio Content

Most portfolio content lives in `src/data/`:

- `profile.ts` for personal details and navigation
- `projects.ts` for project cards and categories
- `skills.ts` for technical skills, services, and soft skills
- `timeline.ts` for experience and education
- `contact.ts` for contact cards, social links, and FAQs

## Author

Hasin Falak Kiyani

- GitHub: `https://github.com/your-username`
- LinkedIn: `https://www.linkedin.com/in/your-profile`
