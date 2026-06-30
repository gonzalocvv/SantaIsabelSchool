// Configuración central del sitio.
// Los campos marcados con TODO son PLACEHOLDERS: completarlos con el material
// que pase el colegio (datos de contacto, admisiones, claves de servicios).
// Mientras haya placeholders, se muestra un banner de aviso en desarrollo.

const TODO = (label: string) => `TODO::${label}`;

export const site = {
  name: 'Santa Isabel School',
  legalName: 'Instituto Educativo Santa Isabel (IESI)',
  domain: 'institutoeducativosantaisabel.edu.uy',
  // Sincronizado con astro.config (`site`). Cae al dominio live actual.
  url: import.meta.env.SITE ?? 'https://santaisabelschool.pages.dev',
  foundedYear: 1998, // según el logo institucional oficial ("EST. 1998")
  location: {
    city: 'Paso de los Toros',
    region: 'Tacuarembó',
    country: 'UY',
  },
  social: {
    instagram: 'https://www.instagram.com/santaisabelschool.pdlt/',
    instagramHandle: '@santaisabelschool.pdlt',
  },

  // --- PLACEHOLDERS: completar con el colegio ---
  contact: {
    address: TODO('dirección exacta'),
    phone: TODO('teléfono'),
    // WhatsApp en formato internacional sin símbolos: ej. 59899123456
    whatsapp: TODO('whatsapp-internacional'),
    email: TODO('email oficial'),
    hours: TODO('horarios de atención'),
    // Embed de Google Maps (src del iframe):
    mapsEmbedSrc: TODO('maps-embed-src'),
  },
  forms: {
    // Crear gratis en https://web3forms.com y pegar la access key:
    web3formsAccessKey: TODO('web3forms-access-key'),
  },
} as const;

/** Devuelve true si un valor es todavía un placeholder. */
export const isTodo = (value: string): boolean =>
  typeof value === 'string' && value.startsWith('TODO::');

/** Etiqueta legible de un placeholder (lo que va después de "TODO::"). */
export const todoLabel = (value: string): string =>
  isTodo(value) ? value.slice('TODO::'.length) : '';

/** Lista de todos los placeholders pendientes (para el banner de dev). */
export function pendingPlaceholders(): string[] {
  const out: string[] = [];
  const walk = (obj: Record<string, unknown>) => {
    for (const v of Object.values(obj)) {
      if (typeof v === 'string' && isTodo(v)) out.push(todoLabel(v));
      else if (v && typeof v === 'object') walk(v as Record<string, unknown>);
    }
  };
  walk(site as unknown as Record<string, unknown>);
  return out;
}

/** Link de WhatsApp listo para usar (o '#' si todavía es placeholder). */
export function whatsappLink(message = ''): string {
  if (isTodo(site.contact.whatsapp)) return '#';
  const q = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${site.contact.whatsapp}${q}`;
}

/** Link tel: (o '#' si placeholder). */
export function telLink(): string {
  if (isTodo(site.contact.phone)) return '#';
  return `tel:${site.contact.phone.replace(/\s+/g, '')}`;
}
