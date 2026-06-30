# Santa Isabel School — Landing

Landing one-page bilingüe (ES/EN) en **Astro + Tailwind**. Estática, mobile-first, lista para deploy en Cloudflare Pages y conectar al dominio `institutoeducativosantaisabel.edu.uy`.

## Correr el proyecto

```bash
npm install
npm run dev      # http://localhost:4321  (EN en /en/)
npm run build    # genera dist/
npm run preview  # sirve dist/
```

Requiere Node ≥ 20.3 (Astro 5).

## Estructura

- `src/i18n/ui.ts` — **todo el copy ES/EN** (EN tipado contra ES → paridad garantizada).
- `src/data/site.ts` — config + **PLACEHOLDERS** (datos del colegio). Mientras haya `TODO::`, se ve un banner en `npm run dev`.
- `src/components/` — secciones (Hero, TrustBar, About, Pillars, Levels, Programs, Gallery, Contact, Footer…).
- `src/layouts/Base.astro` — SEO, OG, hreflang, JSON-LD.
- `src/assets/img/` — imágenes (optimizadas a WebP por `astro:assets`).
- `public/` — favicon, robots.txt, `og-image.jpg` (tarjeta social 1200×630).

## Pendiente del colegio (completar antes de publicar)

En `src/data/site.ts`:
- `contact.address / phone / whatsapp / email / hours` — NAP real (también enriquece el JSON-LD).
- `contact.mapsEmbedSrc` — `src` del iframe de Google Maps.
- `forms.web3formsAccessKey` — crear gratis en https://web3forms.com (activa el formulario).

Además:
- **Logo en vector/alta** (hoy se usa el de Instagram, `post-03.jpg`).
- **Fotos reales en alta + autorización de uso de imagen de menores** (la galería usa 2 fotos de IG como placeholder).

## ⚠️ Nota de contenido a confirmar

El logo oficial dice **"EST. 1998"**, así que la web usa **1998** como año de fundación (no 1951, que figuraba en notas previas pero no se pudo confirmar). Se quitaron como "hechos" sin confirmar: 1951 / "+70 años" / internado de niñas / Hermanas Franciscanas, y se suavizó "católica/franciscana" a "formación en valores". **Confirmar la historia y la orientación religiosa con el colegio** y ajustar `ui.ts` + `site.ts` si corresponde.
