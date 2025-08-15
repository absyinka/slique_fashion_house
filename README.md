# slique_fashion_house

Static website for "Silque Fashion House" — small static site with shared CSS tokens, client-side header/footer injection, and a lightweight JS helper for the mobile navigation.

## Project structure

Top-level files

- `index.html` — home page
- `about.html` — about / team page
- `collections.html` — collections overview
- `board.html` — board of trustees
- `contact.html` — contact page (form + map)
- `README.md` — this file

Directories

- `css/` — page and shared styles
  - `shared.css` — site-wide variables and shared components (header, footer, nav)
  - `index.css`, `about.css`, `collections.css`, `traditional.css`, `board.css`, `contact.css` — per-page styles
- `js/` — small client-side helpers
  - `layout.js` — injects header/footer HTML into pages at runtime
  - `header.js` — exported header HTML string (used by `layout.js`)
  - `footer.js` — exported footer HTML string
  - `nav.js` — nav helper: toggler, dropdowns and accessibility helpers
- `images/` — site images and assets
- `root files` —  
    - `index.html`, 
    - `about.html`, 
    - `collections.html`, 
        - `traditional.html`, 
        - `formal.html`, 
        - `casual.html`, 
    - `board.html`, 
    - `contact.html`, 
- `markdown files` 
    - `README.md`, 
    - `CONTRIBUTING.md` 

## Development / Quick start

This is a static site. You can serve it locally with any static server. Examples:

- VS Code Live Server extension (recommended for quick iteration)
- Python 3: `python -m http.server 5500` (run from project root)
- Node: `npx http-server -p 5500`

Then open `http://127.0.0.1:5500/` in your browser.

Important: use a static server instead of opening files directly to ensure relative module/script loading and correct MIME types.

## Key implementation notes

- Header & footer injection

  - `js/layout.js` dynamically sets the innerHTML of elements with IDs `header-placeholder` and `footer-placeholder`. This lets pages keep minimal HTML while sharing a single header/footer source.
  - `js/header.js` exports `headerHTML` (a template string) which contains the site navigation and the hamburger toggler.

- Navigation

  - `js/nav.js` provides the mobile toggler behavior and dropdown handling. It uses a breakpoint (max-width: 860px) to decide whether clicks on dropdown parents should open menus or navigate.
  - The visual styles for the navigation live in `css/shared.css` (search for "Toggler (hamburger) and collapsed nav for mobile").

- CSS
  - `css/shared.css` contains design tokens (CSS variables) for colors, fonts, and layout. Per-page CSS files import or complement the shared styles.
  - Responsive breakpoints are at 860px and 640px for stacking and tighter mobile adjustments.

## Editing guidance

- To change the header (logo, top links): edit `js/header.js` and then reload pages.
- To change the footer: edit `js/footer.js`.
- To adjust nav behavior (toggle, dropdown): edit `js/nav.js`.
- To tweak site-wide styling: edit `css/shared.css`.
- To change content on a page: edit the appropriate `.html` file at the repo root or inside `HTML/`.

## Troubleshooting

- 404 / MIME errors for `nav.js` or other injected scripts

  - Serve the site with a static server (see Quick start). Opening files with `file://` often causes relative module resolution problems.
  - If you see a MIME type error where a `.js` request returns `text/html`, check your server and the requested URL (DevTools → Network). The site uses `layout.js` to resolve `nav.js` relative to the module location.

- Dropdown not opening / disappearing on hover
  - CSS added a small overlap (`top: calc(100% - 4px)`) to prevent hover gaps. If the menu still disappears, check for custom CSS conflicts or editor changes to `shared.css` that may add margin/top offsets.

## Accessibility & next steps

- ARIA improvements: `dropbtn` elements have `role="button"` and `aria-expanded` attributes; `js/nav.js` can be extended to update `aria-expanded` and add keyboard navigation (Enter/Space to open, Escape to close).
- Performance: consider optimizing images in `images/` for faster loads on mobile.

## License

This project is licensed under the MIT License — a permissive public license that allows reuse, modification, and distribution with attribution.

Full license text (MIT):

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributors

List of contributors (fill with GitHub usernames as needed):

- @absyinka
- @alhasoosoo
- @Buchicreative
- @Filaoye
- @Jephthahifowodo
- @Ogareuben1

