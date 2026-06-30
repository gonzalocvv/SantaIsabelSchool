// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Dominio institucional final (registrado, a poner en uso).
export default defineConfig({
  site: 'https://institutoeducativosantaisabel.edu.uy',
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
