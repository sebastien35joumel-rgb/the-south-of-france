// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The South of France — static multilingual build (Astro → GitHub Pages).
// Custom domain served from the repo root, so `base` stays "/".
export default defineConfig({
  site: 'https://the-south-of-france.com',
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
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr', it: 'it', de: 'de', es: 'es' },
      },
    }),
  ],
});
