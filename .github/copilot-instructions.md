# Copilot instructions for HB-madical

Purpose
- Help AI coding agents be immediately productive in this Vite + React + Tailwind repo.

Quick start (commands)
- Dev server: `npm run dev` (runs `vite`).
- Production build: `npm run build` (outputs `dist/`).
- Preview built app: `npm run preview`.
- Lint: `npm run lint` (ESLint). No automated tests detected.

Project overview (big picture)
- Single-page React app bootstrapped with Vite (see `main.jsx` and `App.jsx`).
- Routing: `react-router-dom` configured in `src/App.jsx` — add new pages by adding a component under `src/Components/<Name>/` and a `<Route />` in `App.jsx`.
- Styling: Tailwind utility classes used throughout (no CSS-in-JS patterns). Global styles in `src/index.css` / `src/App.css`.
- Animations: `framer-motion` (and `gsap` present). Components commonly declare animation "variants" at top of file then apply them via `motion.*` elements (example: `src/Components/CompanyIntro/CompanyIntro.jsx`).
- Assets: images are imported as modules from `src/assets` (e.g., `import img4 from "../../assets/new ceo.jpg"`). Preserve relative imports when moving files.

Key patterns and conventions
- Component layout: feature folders under `src/Components/<Feature>/` with single-file components named `*.jsx` (example: `CompanyIntro.jsx`, `ContactUs.jsx`). Keep the pattern when adding new components.
- UI composition: prefer small functional components exported as default; pages compose these components in routes.
- Anim variants: define variants as plain objects (e.g., `fadeInUp`, `scaleIn`, `staggerContainer`) and reuse within the same component rather than scattering definitions globally.
- Tailwind usage: use utility classes inline; responsive classes follow `md:` and `lg:` breakpoints (see `CompanyIntro.jsx` for examples of responsive grids and spacing).
- Query-driven state: some UI uses URL query params via `useSearchParams` (CompanyIntro tabs use `tab` param). When changing tab state for deep links, update URL handling accordingly.

Integration points & dependencies
- Framer Motion: UI transitions and staggered animations — search for `motion` imports.
- GSAP & Swiper: present for more complex motion and carousels — verify compatibility with React 18+/Vite when upgrading.
- lucide-react: icon set used in UI.

Build & dev workflow tips
- Use `npm run dev` for iterative work; Vite supports HMR and fast reloads.
- Before committing UI changes, run `npm run lint` and fix ESLint errors. There is no test runner configured.

What to look for when editing
- When moving components, update relative asset imports and any route registrations in `src/App.jsx`.
- Preserve Tailwind classes — avoid converting UI into separate CSS files unless necessary.
- Keep animation variants colocated with the component for readability.

Files to inspect first when debugging or extending features
- `src/App.jsx` — routing and top-level composition.
- `src/main.jsx` — app bootstrapping.
- `src/Components/*` — feature components (CompanyIntro demonstrates many patterns).
- `src/assets` — static images referenced by components.
- `package.json` — dev and build scripts, plus core dependencies.

If you need more details
- Ask for examples of a specific change (routing, adding a component, or animation) and include the target file paths to update.

Please review and tell me if you'd like more examples or to merge this with any existing internal agent docs.
