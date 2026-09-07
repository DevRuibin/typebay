/**
 * TypeBay post-build SEO step — run after `vite build` (frontend/dist) and
 * before `wrangler deploy`.
 *
 * The SPA shell had no canonical at all, and client-side routes (/settings)
 * served the homepage head, so Google's signals for the settings page were
 * the homepage's. This adds a self canonical to the shell and writes
 * dist/settings.html (served at the extensionless /settings URL) with a
 * per-page title + self canonical.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, '..', 'frontend', 'dist');
const SITE = 'https://typebay.projectbay.uk';

const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const indexFile = join(dist, 'index.html');
if (!existsSync(indexFile)) {
  console.error('frontend/dist/index.html missing — run the frontend build first');
  process.exit(1);
}

let index = readFileSync(indexFile, 'utf8');

// The shell should canonicalize to itself.
if (!/<link rel="canonical"/.test(index)) {
  index = index.replace(/<title>[^<]*<\/title>/i, m => `${m}\n    <link rel="canonical" href="${esc(SITE)}/" />`);
  writeFileSync(indexFile, index);
  console.log('index.html: added self canonical');
}

// /settings route → static page with its own head.
const settingsUrl = `${SITE}/settings`;
const settingsTitle = 'Settings | TypeBay';
const settings = index
  .replace(/<title>[^<]*<\/title>/i, () => `<title>${esc(settingsTitle)}</title>`)
  .replace(/<link rel="canonical" href="[^"]*"/, () => `<link rel="canonical" href="${esc(settingsUrl)}"`)
  .replace(/<meta property="og:url" content="[^"]*"/, () => `<meta property="og:url" content="${esc(settingsUrl)}"`)
  .replace(/<meta property="og:title" content="[^"]*"/, () => `<meta property="og:title" content="${esc(settingsTitle)}"`)
  .replace(/<meta name="twitter:title" content="[^"]*"/, () => `<meta name="twitter:title" content="${esc(settingsTitle)}"`);
writeFileSync(join(dist, 'settings.html'), settings);
console.log(`wrote dist/settings.html → ${settingsTitle} (${settingsUrl})`);

// Bump the precached index.html revision so PWA users pick up the canonical.
const swFile = join(dist, 'sw.js');
if (existsSync(swFile)) {
  const sw = readFileSync(swFile, 'utf8');
  const m = sw.match(/"index\.html",revision:"([a-f0-9]+)"/);
  if (m) {
    const hash = Math.random().toString(16).slice(2, 18);
    writeFileSync(swFile, sw.replace(m[1], hash));
    console.log('sw.js: index.html precache revision bumped');
  }
}
