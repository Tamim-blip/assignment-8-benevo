# cat-hermione

Next.js 16 App Router app (npm; use `package-lock.json`, not other package managers). No tests, no CI.

- **The git repo root is `/Users/m4air/Desktop/All-Projects` (the workspace root), not this project directory**, and it has no commits yet. `git status` shows unrelated projects — scope file references carefully; don't stage the world.

## Product brief (design-only phase — user drives step by step)

- **Product**: community-driven event management platform — users create, join, and track local social service events.
- **Categories**: plantation, blood donation, cleaning, education, winter clothes donation.
- **Core palette**: forest (primary), sage (secondary/muted), cream (background), orange (accent/CTA), charcoal (text/foreground) — to be mapped onto shadcn tokens in `src/app/globals.css`.
- **Constraints**: design only, no complex functionality (mock data is fine); consistent text sizes and button styling app-wide via reusable components; keep folder structure organized (`src/components/ui` = shadcn primitives, domain components and layout components in separate folders); fully responsive (mobile → desktop) on every page and component.

## Commands

- Dev: `npm run dev` · Build: `npm run build` · Lint: `npm run lint`
- No test script exists. Typecheck with `npx tsc --noEmit` (no dedicated script).
- `npm run lint` currently FAILS at baseline: 2 pre-existing `react-hooks/set-state-in-effect` errors in scaffolded files (`src/components/ui/carousel.tsx`, `src/hooks/use-mobile.ts`). Verify your changes by comparing the error count/paths, not by expecting a clean run.

## Gotchas

- **Components use `@base-ui/react`, NOT Radix.** This repo uses shadcn/ui's `base-nova` style, so `src/components/ui/*` import primitives from `@base-ui/react/*`. Don't add `@radix-ui/*` imports or copy Radix-based shadcn snippets from older examples.
- Add new UI components via the shadcn CLI (`components.json` defines aliases and style); Tailwind CSS v4 is configured with no `tailwind.config.*` — theme/custom styles live in `src/app/globals.css`.
- `next.config.ts` enables `reactCompiler: true` and `cacheComponents: true`. With cacheComponents, async data fetching must happen inside `<Suspense>` boundaries using cache-friendly APIs; components that read request data can't silently be static.
- Path alias: `@/*` → `src/*`.
- A dev server is usually already running on `localhost:3000`. Starting a second `next dev` fails with "Another next dev server is already running" (PID in `.next/dev/logs/next-development.log`); verify routes by curling port 3000 instead of launching your own.

## Design conventions (Benevo)

- Palette is mapped onto shadcn tokens in `src/app/globals.css`: forest → `primary`, sage → `secondary`/`muted`, cream → `background`, orange → `accent`/`ring`, charcoal → `foreground`. Use tokens (`bg-primary`, `text-accent`, …), never raw hex/oklch in components.
- Header (`src/components/layout/site-header.tsx`) is always forest (`bg-primary`); the Login CTA is an orange (`bg-accent`) rounded-full pill — reuse this exact class combo for CTAs app-wide: `buttonVariants() + "h-9 rounded-full px-4 sm:h-10 sm:px-5"`.
- Nav links: `text-xs font-semibold uppercase tracking-widest` (sm: `text-sm`); section headings: `text-3xl sm:text-4xl font-bold tracking-tight`; body text: `text-base sm:text-lg`.
- Theme toggle stores to localStorage key `benevo-theme`; a no-flash inline script in `layout.tsx` applies the `dark` class. Respect `prefers-color-scheme` as the default.
- Page containers: `mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8`.
- Hero (`src/components/home/hero.tsx`): forest panel + image split `lg:grid-cols-[3fr_2fr]`; H1 is `text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight`; avatar badges use lucide icons, never photos; floating tag pills are absolutely positioned with rotate classes over the image.
- Reusable section pieces live in `src/components/common/`: `SectionHeading` (orange uppercase eyebrow, h2 `text-3xl sm:text-4xl`, muted description) and `FeatureCard` (rounded-2xl border card, size-11 rounded-full icon chip with token tint like `bg-accent/15 text-accent`, title `text-lg font-semibold`, muted `text-sm` description). Use these for all future sections instead of ad-hoc markup.
- Auth forms use **HeroUI** (`@heroui/react`, global styles via `@import "@heroui/styles"` in globals.css), NOT the shadcn field system. Retarget HeroUI colors with the `.heroui-scope` class in globals.css (don't override at `:root` — HeroUI's `--muted` means muted text while shadcn's means muted background); wrap the form column in `heroui-scope`. Keep HeroUI `validate` callbacks untouched when restyling. Shared auth pieces live in `src/components/auth/` (`AuthBrandPanel`, `AuthDivider`, `GoogleIcon`/`GitHubIcon`).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
