# TypeBay

A free typing speed test that runs entirely in your browser — no accounts, no
tracking, no sign-up. Measure your words per minute, accuracy and consistency
with time, word, quote and custom tests, then track progress in a wide range
of languages and themes.

**Live site: https://typebay.projectbay.uk**

TypeBay is a modified fork of [Monkeytype](https://github.com/monkeytypegame/monkeytype)
(GPL-3.0). The upstream account system, leaderboards, advertising, analytics,
tracking and donation infrastructure were removed — this build is a static
frontend with no backend at all.

## What was changed from upstream

- Rebranded to TypeBay: wordmark, favicon/icons, theme palettes, meta/SEO,
  legal pages, result watermark, screenshot filename.
- Removed accounts, login, profile, leaderboards, friends, merch, support,
  contact, version-history UI and their routes/pages.
- Removed advertising (ad controllers and DOM slots), recaptcha, Sentry,
  Firebase, Google Analytics and cookie-consent machinery; the app always runs
  in guest mode and stores everything in localStorage/IndexedDB.
- Removed the monkey mascot feature and its config options.
- UI language support for English, 简体中文, 繁體中文, 한국어, Français and
  Español (auto-detect + footer switcher). Typing content languages and the
  advanced settings vocabulary stay English (as upstream).
- Default theme is the light `typebay_light`; `typebay_dark`, `sand` and
  `midnight` are included.

## Development

Requires Node.js 24 (see `.nvmrc`) and pnpm 11:

```bash
pnpm install
cd frontend && pnpm run dev          # dev server on :3000
pnpm build-fe                        # production build -> frontend/dist
```

The frontend build reads `BACKEND_URL` (leave empty for same-origin) and
`RECAPTCHA_SITE_KEY` (unused; any value) env vars — see `frontend/.env`.

## Deploy (Cloudflare static assets)

```bash
wrangler deploy    # reads wrangler.jsonc: assets from frontend/dist, SPA fallback
```

## License

GPL-3.0. This project is a modified version of Monkeytype; see `LICENSE` and
the footer credit on the live site. The full list of modifications is recorded
in this README's "What was changed" section and in the git history.
