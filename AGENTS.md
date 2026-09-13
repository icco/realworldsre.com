# AGENTS.md

Guidance for coding agents working on realworldsre.com.

## Project Overview

Website for the "Real World SRE" book built with Next.js, React, and Tachyons CSS.

## Commands

Use pnpm:
- `pnpm run dev` — Run development server
- `pnpm run build` — Build production application
- `pnpm run start` — Run production server
- `pnpm run type-check` — Run TypeScript type checking (`tsc`)
- `pnpm run lint` — Format code with Prettier

## Architecture & Conventions

- Pages and layout under `pages/`.
- Styling uses Tachyons functional CSS classes.
- PR titles and commits must follow Conventional Commits with lowercase subjects.
- Ensure `npm run type-check` passes before submitting PRs.
