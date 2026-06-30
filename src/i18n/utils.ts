import { ui, type Lang } from './ui';

/** Devuelve el diccionario del idioma. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Ruta localizada de la home (ES en "/", EN en "/en/"). */
export function homePath(lang: Lang): string {
  return lang === 'es' ? '/' : '/en/';
}
