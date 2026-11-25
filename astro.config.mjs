// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production origin. Override with SITE_URL.
const SITE_URL = process.env.SITE_URL || 'https://www.krystalclearny.com';
const SITEMAP_EXCLUDE = ['/404', '/thank-you'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !SITEMAP_EXCLUDE.some((p) => new URL(page).pathname.startsWith(p)) }),
  ],
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
