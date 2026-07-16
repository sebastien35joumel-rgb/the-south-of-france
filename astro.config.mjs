// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { slugs, liveLocales } from './src/i18n/config';
import { comingSoon } from './src/data/comingsoon';

const SITE = 'https://the-south-of-france.com';

// Keep <meta robots="noindex"> pages out of the sitemap — submitting a page we
// forbid indexing contradicts the tag and clutters Search Console. Mirrors the
// noindex rules in src/pages/[lang]/[section].astro and index.astro; derived
// from the slugs/comingSoon tables so a renamed slug or a newly written section
// cannot silently fall out of sync.
const noindexSections = ['legal', ...Object.keys(comingSoon)];
const noindexUrls = new Set([
  // Root redirector: language detection in JS, canonical points to /en/.
  `${SITE}/`,
  ...liveLocales.flatMap((l) =>
    noindexSections.map((s) => `${SITE}/${l}/${slugs[s][l]}/`),
  ),
  // Standalone page with noindex hardcoded in its own front matter.
  `${SITE}/en/french-riviera/where-to-stay-without-a-car/`,
]);

// The South of France — static multilingual build (Astro → GitHub Pages).
// Custom domain served from the repo root, so `base` stays "/".
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'it', 'de', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !noindexUrls.has(page),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr', it: 'it', de: 'de', es: 'es' },
      },
    }),
  ],
});
