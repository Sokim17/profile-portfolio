# Sokim Nam Portfolio

A personal portfolio website built with Next.js and React to showcase experience, skills, projects, certifications, and writing.

## Overview

This project is a modern portfolio for a software engineer focused on web application development, API design, and enterprise systems. The site is structured as a single-page portfolio with sections for:

- About / introduction
- Skills and technology stack
- Work experience
- Training and certifications
- Selected projects
- Blog / notes placeholder

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS modules / component-level styling
- ESLint
- Tailwind CSS

## Project Structure

```bash
.
├── app/
│   ├── components/
│   │   ├── blog/
│   │   ├── homepage/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── trainings/
│   │   └── work-experience/
│   ├── globals.css
│   ├── index.tsx
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── css/
├── scripts/
│   └── create-component.mjs
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── .gitignore
```

## Features

- Responsive portfolio layout
- Anchor navigation for portfolio sections
- Reusable component structure for different content blocks
- Project and work history data kept in typed arrays
- Blog section scaffold ready for future posts
- Contact link and external profile/project links

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

## Available Scripts

```bash
npm run dev      # start development server
npm run build    # production build
npm run start    # run production build locally
npm run lint     # run ESLint checks
npm run create:component   # generate a new component scaffold
```

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This project is ready to be deployed on platforms such as Vercel, Netlify, or any Node.js-compatible hosting provider.

## Notes

The content is currently tailored to Sokim Nam's work history, technologies, and selected project details. The project section and blog section are structured to be easily extended as new work or articles are added.
