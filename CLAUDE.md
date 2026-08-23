# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build

There is no lint or test setup in this project.

## What this is

A personal portfolio site (Oyegbile Praise) built with Next.js (Pages Router, plain JSX — no TypeScript), Chakra UI v2, framer-motion, and Sass.

## Architecture

**Single-page layout with section anchors.** `src/pages/index.jsx` composes the site from section components, each wrapped in a `<Box id="...">` (`home`, `projects`, `experience`, `stack`, `resume`). `src/components/SideNav.jsx` keeps its own hardcoded `sections` array and uses an IntersectionObserver on those same ids to highlight the active section. Adding, removing, or renaming a section means updating both files. `src/pages/about.jsx` is the only other page.

**SSR color mode via cookies.** `src/components/Chakra.jsx` wraps `ChakraProvider` with a cookie-based color-mode manager, and `src/pages/_app.jsx` re-exports `getServerSideProps` from it so every page receives the color-mode cookie. Pages therefore should not define their own `getServerSideProps` without preserving the `cookies` prop, or color mode will flicker on load. The theme (`src/lib/theme.js`) uses the Satoshi font, `initialColorMode: "system"`, and light/dark backgrounds `#f6ffff` / `#0e0e0e`. Components generally branch on `useColorMode()` with an `isLight` boolean rather than using semantic tokens.

**Chakra + framer-motion.** `src/components/motion/index.jsx` exports `MotionBox` and `MotionImage` — Chakra components wrapped with `motion.create()` that filter framer-motion props out before they reach the DOM. Use these instead of re-wrapping Chakra components ad hoc (though some components define local `motion.create(Box)` wrappers).

**Project data is data-driven.** The projects grid renders from the array in `src/lib/projects.js`; adding a project means adding an entry there plus its image under `public/images/projects/`.

**Analytics.** `src/hooks/use-mixpanel.js` provides a `MixpanelProvider` (mounted in `_app.jsx`) and a `useMixpanel()` hook exposing `track(event, properties)`. It reads `NEXT_PUBLIC_MIXPANEL_TOKEN` from the environment. Vercel Analytics is also mounted in `_app.jsx`.
