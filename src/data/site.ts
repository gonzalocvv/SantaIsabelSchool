// Configuración central del sitio.
//
// MODO DEMO (`demo: true`): los datos de contacto son de Gonzalo (el
// desarrollador) para que TODO funcione en la demo comercial: el formulario
// envía de verdad, el WhatsApp abre un chat real y el mapa carga. Mientras
// `demo` esté activo, el JSON-LD público NO emite teléfono/email/dirección
// (para no publicar datos personales como NAP del colegio).
//
// CÓMO HACER EL SWAP A DATOS REALES (cuando el colegio pase su info):
//   1. Reemplazar los valores marcados `// DEMO:` de `contact` y, si aplica,
//      crear una access key de Web3Forms con el email oficial del colegio.
//   2. Poner `demo: false` → el JSON-LD emite el NAP completo automáticamente.
//   3. Si algún dato aún no está, volver a ponerle `TODO('etiqueta')`: la UI
//      degrada sola (form inactivo, botón deshabilitado, "A confirmar").

const TODO = (label: string) => `TODO::${label}`;

export const site = {
  name: 'Santa Isabel School',
  legalName: 'Instituto Educativo Santa Isabel (IESI)',
  domain: 'institutoeducativosantaisabel.edu.uy',
  // Sincronizado con astro.config (`site`). Cae al dominio live actual.
  url: import.meta.env.SITE ?? 'https://santaisabelschool.pages.dev',
  foundedYear: 1998, // según el logo institucional oficial ("EST. 1998")
  demo: true, // ← al cerrar la venta y cargar datos reales: false
  location: {
    city: 'Paso de los Toros',
    region: 'Tacuarembó',
    country: 'UY',
  },
  social: {
    instagram: 'https://www.instagram.com/santaisabelschool.pdlt/',
    instagramHandle: '@santaisabelschool.pdlt',
  },

  contact: {
    address: 'Santa Isabel de Paso de los Toros, Tacuarembó', // DEMO: zona real, falta calle y número
    phone: '+598 92 132 629', // DEMO: teléfono de Gonzalo
    // WhatsApp en formato internacional sin símbolos: ej. 59899123456
    whatsapp: '59892132629', // DEMO: WhatsApp de Gonzalo
    email: 'gcabrera3210@gmail.com', // DEMO: email de Gonzalo
    hours: {
      es: 'Lunes a viernes · 8:00 a 17:00 h', // DEMO: horario plausible, confirmar con el colegio
      en: 'Monday to Friday · 8:00 am – 5:00 pm',
    },
    // Embed de Google Maps (src del iframe):
    mapsEmbedSrc:
      'https://www.google.com/maps?q=Paso+de+los+Toros,+Tacuarembo,+Uruguay&z=14&output=embed', // DEMO: centrado en la ciudad, falta la dirección exacta
  },
  forms: {
    // Access key de Web3Forms (pública por diseño: viaja en el HTML del form).
    web3formsAccessKey: '68a1abbe-173e-4771-8526-70bfb009b01a', // DEMO: llega al email de Gonzalo
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
