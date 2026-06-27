# Hasin Falak Kiyani Portfolio

A modern, responsive software engineer portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site highlights projects, skills, experience, education, certifications-ready content structure, and contact details in a clean dark interface.

## Features

- Responsive portfolio pages for home, projects, about, and contact
- Modular section and reusable UI component structure
- Data-driven content for projects, skills, experience, education, and social links
- Accessible navigation, form labels, image alt text, and semantic sections
- Working contact form with validation, spam protection, and delivery feedback
- Persistent dark/light color theme with an accessible toggle
- Reduced-motion-aware page and scroll reveal animations
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

Run the development server with hot reloading:

```bash
npm run dev
```

The development server will usually run at `http://localhost:5173`.

## Contact Form

The contact form sends submissions to the portfolio email through FormSubmit. The first
submission triggers a one-time activation email from FormSubmit; approve it before testing
delivery again.

To use another form provider, copy `.env.example` to `.env` and set:

```bash
VITE_CONTACT_ENDPOINT=https://your-form-provider.example/endpoint
```

For a ready-made FormSubmit configuration, copy `.env.formsubmit.example` to `.env`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm start
```

`npm start` serves the generated `dist/` directory on `http://localhost:4173`.
Run `npm run build` before starting the production server.

## Deployment

This project can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

1. Run `npm run build`.
2. Deploy the generated `dist/` folder.
3. Configure your hosting provider to serve `index.html` for client-side routes.


## Author

Hasin Falak Kiyani

- GitHub: `https://github.com/dev-hasin`
- LinkedIn: `https://www.linkedin.com/in/hasinfalakkiyani/`
