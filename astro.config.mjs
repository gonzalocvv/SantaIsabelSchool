// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// URL pública del sitio. Por ahora vive en Cloudflare Pages; cuando se conecte
// el dominio .edu.uy, setear la env SITE_URL en Cloudflare y redeploy.
// (Astro expone este valor como import.meta.env.SITE para canonical/OG/JSON-LD.)
const SITE_URL = process.env.SITE_URL || 'https://santaisabelschool.pages.dev';

export default defineConfig({
  site: SITE_URL,
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false, // ES en "/", EN en "/en/"
    },
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
});
