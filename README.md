# Hoops Handbook

A mobile-first, installable (PWA) reference of basketball skills, organized by
category and difficulty level. Each skill has a short explanation, key points,
and one hand-picked YouTube video.

Built for a dad who never learned basketball, and his two kids.

**Live site:** https://sehyunnoh.github.io/basketball/ _(deploys from `main`)_

## Status

All three phases complete: **82 skills** across all nine categories, each with
levels 1–3 filled in. Phases 2 and 3 were data-only — the CSS bundle hash did
not move, which is the evidence that no screen, style or component changed.

See [intent.md](./intent.md) for goals, scope, and content structure.

## Stack

Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages by Actions.
No backend and no accounts — static content only. The one external call is
[GoatCounter](https://www.goatcounter.com), a cookie-less page counter that
stores no personal data; `src/lib/analytics.ts` counts each hash route itself,
because GoatCounter's own script only fires once per page load. Forking this?
Swap `hoops-handbook` in `index.html` for your own site code, or drop both
script tags to turn it off.

## Design

A reference-book look: Zilla Slab for names, IBM Plex Sans for everything else,
ruled entries instead of cards, and a single burnt orange so the video
thumbnails carry the colour. Both fonts are self-hosted under `public/fonts/`
so the shell still reads offline.

Every colour comes from a semantic token in `src/index.css`
(`--c-ink`, `--c-rule`, `--c-accent`, …). Dark mode redefines those values in
one media query — there is no `dark:` variant anywhere in the components, which
is what stops the two themes from drifting apart. Level is shown as a
three-segment meter rather than a colour.

The screens live as a design canvas in `design/` (`*.dc.html` + `canvas.json`).
Rebuild the shareable page with the `design` skill's `seed-canvas.mjs`; the
seeded `.html` is gitignored because it is a build output.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Adding a skill

Everything lives in `src/data/` — no screen needs to change.

1. Open the category file, e.g. `src/data/skills/dribbling.ts`.
2. Append a `Skill` object. TypeScript enforces the required fields; in dev the
   console warns about broken cross-links, over-long summaries, and key point
   counts outside 3–5.
3. Pick the video by hand. The rules are in intent.md §5.5: it must *explain*
   the skill, be child-appropriate, and credit the channel. Verify the id loads
   and is embeddable before committing it.

## Adding a category

1. The nine categories are already declared in `src/data/categories.ts`.
2. Create `src/data/skills/<category>.ts` and add it to the `SKILLS` array in
   `src/data/index.ts`.

That is the whole change — a category with no skills never appears on a screen,
and one with skills appears everywhere automatically.

## Notes on the deployment

GitHub Pages serves this from the `/basketball/` sub-path, so the Vite `base`,
the manifest `start_url`/`scope`, and the service worker scope all agree on it
(`vite.config.ts`). Routing uses a hash router so deep links and refreshes work
without a server-side rewrite.

The service worker uses `registerType: 'autoUpdate'`, so a new deploy replaces
the cached app shell on the next visit. If you are testing locally and see a
stale build, unregister the worker in DevTools → Application.
