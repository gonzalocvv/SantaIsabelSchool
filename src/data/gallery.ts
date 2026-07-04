// Material visual de la galería, separado del componente para que crecer sea
// solo agregar entradas acá (sin tocar el markup).
//
// HOY: el único material fotográfico real es el panorama del feed de Instagram
// (una foto continua partida en 3 recortes, con el diseño de marca encima).
// FUTURO: cuando el colegio entregue fotos limpias (p. ej. de la sesión de
// fotos profesional), cargarlas en `photos` y la sección puede escalar a un
// grid con lightbox (<dialog> accesible) sin rediseñar nada.
import type { ImageMetadata } from 'astro';
import slice1 from '../assets/img/post-10.jpg';
import slice2 from '../assets/img/post-11.jpg';
import slice3 from '../assets/img/post-12.jpg';

/** Recortes del panorama del feed, de izquierda a derecha. */
export const panoramaSlices: ImageMetadata[] = [slice1, slice2, slice3];

export interface GalleryPhoto {
  src: ImageMetadata;
  /** Alt por idioma (describir la escena, no "foto de..."). */
  alt: { es: string; en: string };
}

/** Fotos individuales del colegio — pendientes de material real. */
export const photos: GalleryPhoto[] = [];
