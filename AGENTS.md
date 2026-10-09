<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project AGENTS Guide

## Project overview

This repository is a personal portfolio website built with Next.js, React, and TypeScript. The app is structured as a single-page portfolio with multiple sections:

- homepage / about
- skills
- work experience
- trainings / certifications
- selected projects
- blog / notes

The site is intentionally simple, component-driven, and content-oriented. The goal is readability, ease of maintenance, and fast iteration.

## Architecture

Use this project structure as the baseline:

- `app/index.tsx` composes the main page and assembles section components.
- `app/page.tsx` is the app entry for the homepage.
- `app/components/*` contains each portfolio section and its related files.
- Each component folder usually includes:
  - `*.tsx` render logic
  - `*.css` styling
  - `*.types.tsx` props and data types
  - related data list files when appropriate
- `public/` contains static assets and vendor CSS.
- `scripts/create-component.mjs` is the helper for scaffolding new section components.

## Coding conventions

- Prefer small, focused components with a single responsibility.
- Keep data arrays in dedicated files and pass them into components through props.
- Keep styling local to the component folder when possible.
- Prefer semantic HTML: headings, lists, sections, and accessible labels.
- Reuse patterns already present in the app instead of introducing new architectural layers unless necessary.
- Do not add global state libraries for a portfolio site unless the feature truly requires it.

## Type and data conventions

- Use TypeScript interfaces/types for props and data models.
- Keep content data strongly typed and readable.
- When adding portfolio content, prefer updating the relevant section data file and keeping the render logic clean.
- Do not create overly abstract abstractions for this project; keep it maintainable and easy to follow.

## Styling conventions

- Keep CSS close to the component that owns it.
- Use the existing BEM-style naming pattern already used in the portfolio components (`homepage__nav`, `projects__item`, etc.).
- Preserve the current visual tone: minimal, editorial, modern, and readable.
- Avoid introducing heavy frameworks or CSS-in-JS unless the project clearly needs it.

## Testing expectations

- Add tests for new component behavior when a component is introduced or significantly changed.
- Prefer testing visible user-facing behavior over implementation details.
- Keep assertions focused on headings, text, links, empty states, and user-visible content.
- Use the existing Jest + Testing Library setup for component tests.

## Workflow

### Typical local commands

```bash
npm install
npm run dev
npm run build
npm run test
npm run lint
```

### Before making changes

- Read the relevant component and its neighbors before editing.
- Preserve the existing content structure and naming conventions.
- Prefer edits that fit the current architecture instead of introducing a new pattern.

### When adding a new section

- Create a new folder under `app/components/`.
- Add the component, its CSS, and its types.
- Update the parent composition in `app/index.tsx` if the section should appear on the homepage.
- Add a test file adjacent to the component when feasible.

## Quality bar

- Components should render cleanly and accessibility-wise.
- Content should be easy to edit without rewriting component logic.
- Do not over-engineer the portfolio beyond the current needs.
- Keep the project lightweight, readable, and intentionally simple.

## Final reminder

This is a portfolio project, not a large enterprise app. Favor maintainable simplicity, visual polish, and clear content structure over complexity.

