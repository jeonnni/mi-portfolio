# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server (sourcemaps disabled)
npm run build   # Production build
npm test        # Run tests
npm run deploy  # Build + deploy to gh-pages
```

## Architecture

Single-page portfolio built with **React 19 + React Router v7**, deployed on Vercel with `basename="/"`.

**Routing** — five routes defined in [src/App.js](src/App.js): `/` (About), `/skills`, `/projects`, `/blog`, `/contact`.

**Layout** — App.js wraps everything in a fixed `1200px` container. On mount it shows a `Loading` spinner for 500ms, then renders `Navbar` + page content. A fixed dark/light mode toggle button manages `body.dark-mode` class and persists to `localStorage`.

**Styling** — CSS Modules (`.module.scss`) per component. Global tokens in [src/styles/variables.css](src/styles/variables.css) (colors, font sizes, shadows). Dark mode is handled by overriding CSS variables on `body.dark-mode`. Two font families: `Gaegu` (English/default, `.text-en`) and `Gowun Batang` (Korean, `.text-kr`).

**Data layer** — all content is static data in `src/data/`:
- [projectsData.js](src/data/projectsData.js) — 10 projects, each with `id`, `title`, `desc`, `tags`, `icon`, `member`, `period`, `siteUrl`, `githubUrl`, `images[]`, `details[]`
- [blogData.js](src/data/blogData.js) — 3 blog post cards with external URLs
- [skillsData.js](src/data/skillsData.js) — skills list
- [linkData.js](src/data/linkData.js) — social/nav links

**Projects modal** — clicking a project card calls [OpenModal.jsx](src/components/common/OpenModal/OpenModal.jsx), which is a function (not a component) that invokes `SweetAlert2` with embedded React content. It renders a `Swiper` image carousel plus project details. The "VISIT SITE" confirm button only appears when `project.siteUrl` is set.

**Contact form** — uses EmailJS (`@emailjs/browser`) with hardcoded service/template IDs in [Contact.jsx](src/pages/Contact/Contact.jsx).

**Common components** in `src/components/common/`: `Header` (logo link), `Navbar` (active-link highlighting via `useLocation`), `Loading` (initial splash), `Cursor` (custom cursor), `OpenModal` (SweetAlert2 project detail modal).

**Project images** are imported via a barrel file at [src/assets/projectsImg/index.js](src/assets/projectsImg/index.js) and referenced by name in `projectsData.js`.
