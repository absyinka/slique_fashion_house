# Contributing to Silque Fashion House

Thanks for taking an interest in improving this project. This document describes a minimal, practical workflow and style guide so contributions are consistent and easy to review.

## Table of contents

- How to contribute
- Branching & commits
- Coding style
- Testing & manual checks
- Pull request checklist
- How to edit shared pieces
- Reporting bugs

## How to contribute

1. Fork the repository (if using GitHub) and clone your fork locally.
2. Create a new branch with a short, descriptive name: `fix/header-spacing`, `feat/mobile-nav`, or `chore/update-deps`.
3. Make incremental commits; keep each commit focused and descriptive.
4. Open a Pull Request against the `main` branch with a brief description and the problem you're solving.

## Branching & commits

- Branch from `main` for each logical change.
- Use short, imperative commit messages, e.g.:
  - `fix: prevent dropdown hover gap`
  - `feat: add keyboard navigation for menu`
  - `style: normalize nav button styling`

## Coding style

- HTML: tidy, semantic, and accessible where possible.
- CSS:
  - Put site-wide variables and shared components in `css/shared.css`.
  - Keep page-specific styles in the per-page CSS files under `css/`.
  - Prefer CSS variables for colors/typography and avoid large, unrelated rewrites.
- JavaScript:
  - Keep behavior small and modular in `js/`.
  - Avoid network calls and secrets in client-side code.
  - Use clear function/variable names and short helper modules (e.g., `nav.js`, `layout.js`).

## Testing & manual checks

- Serve the site with a static server (e.g., Live Server, `python -m http.server 5500`) and test in desktop and mobile viewports.
- Verify these areas for changes affecting navigation or layout:
  - Desktop hover behavior for dropdowns
  - Mobile toggler open/close behavior
  - Header and footer injection (pages should still render when `header-placeholder` is present)
  - No JS console errors (404s or MIME-type problems)

## Pull Request checklist

- [ ] Branch is up to date with `main`.
- [ ] Changes are limited to the scope described in the PR.
- [ ] Linting / formatting is consistent (use simple manual checks for this project).
- [ ] Manual smoke test completed (desktop + mobile).
- [ ] README / docs updated (if public API or behavior changed).

## How to edit shared pieces

- Header & Nav: edit `js/header.js` (markup) and `css/shared.css` (visuals). Keep `header-placeholder` usage unchanged so pages continue to inject header correctly.
- Footer: edit `js/footer.js` and `css/shared.css` for presentation.
- Nav behavior: edit `js/nav.js`. Prefer to keep breakpoint logic consistent with `css/shared.css` (current breakpoint: `max-width:860px`).

## Reporting bugs

- Provide:
  - A short description of the problem
  - Steps to reproduce
  - Browser / OS where the problem was observed
  - Screenshots or console errors (if any)

---

If you'd like, I can also add a small `ISSUE_TEMPLATE.md` and `PULL_REQUEST_TEMPLATE.md` to help contributors open better issues/PRs.
