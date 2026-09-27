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
│   │   │   ├── blog.tsx            # blog section container and post list
│   │   │   ├── blog.css            # blog styling
│   │   │   ├── blog.types.tsx      # blog types/interfaces
│   │   │   └── page.tsx            # blog page entry if added later
│   │   ├── homepage/
│   │   │   ├── homepage.tsx        # hero and about section
│   │   │   ├── homepage.css        # homepage styling
│   │   │   └── homepage.types.tsx # homepage props/types
│   │   ├── projects/
│   │   │   ├── projects.tsx        # selected projects list
│   │   │   ├── projects.css        # project section styling
│   │   │   ├── projects.types.tsx  # project model/types
│   │   │   └── page.tsx            # project page entry if needed
│   │   ├── skills/
│   │   │   ├── skills.tsx          # skills content block
│   │   │   ├── skills.css          # skills styling
│   │   │   ├── skills-lists.tsx    # skill data array
│   │   │   └── skills.types.tsx    # skills types
│   │   ├── trainings/
│   │   │   ├── trainings.tsx      # certifications/training list
│   │   │   ├── trainings.css      # training styling
│   │   │   └── trainings.types.tsx # training types
│   │   ├── work-experience/
│   │   │   ├── work-experience.tsx           # experience timeline
│   │   │   ├── work-experience.css           # experience styling
│   │   │   ├── work-experience-lists.tsx     # raw experience data
│   │   │   └── work-experience.types.tsx    # experience types
│   │   └── ...
│   ├── globals.css
│   ├── index.tsx                  # main page composition
│   ├── layout.tsx                 # app layout wrapper
│   └── page.tsx                   # home page entry
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

### Component Responsibilities

- `app/index.tsx` assembles the portfolio page and passes shared content such as title, description, and skills.
- `app/components/homepage/homepage.tsx` renders the hero and about sections.
- `app/components/work-experience/work-experience.tsx` renders the professional timeline.
- `app/components/skills/skills.tsx` displays the skill categories and technologies used.
- `app/components/trainings/trainings.tsx` lists certifications and learning resources.
- `app/components/projects/projects.tsx` shows selected project work.
- `app/components/blog/blog.tsx` provides a writing/journal section scaffold for future entries.

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
