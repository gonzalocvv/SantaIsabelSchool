// Sistema único de reveal-on-scroll (Motion `inView`).
// - La transición vive en CSS (`.reveal` / `.is-visible` en global.css), gateada
//   por `html.js`: sin JS o con prefers-reduced-motion el contenido queda visible.
// - `data-reveal-delay="120"` en un elemento: retrasa su entrada esa cantidad de ms.
// - `data-reveal-group` en un contenedor: asigna stagger de 80ms a sus hijos `.reveal`
//   que no declaren delay propio (coreografía sin repetir data-attributes).
import { inView } from 'motion';

const STAGGER_MS = 80;

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll<HTMLElement>('.reveal');

if (reduce) {
  els.forEach((el) => el.classList.add('is-visible'));
} else {
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
      if (!el.dataset.revealDelay) el.dataset.revealDelay = String(i * STAGGER_MS);
    });
  });

  els.forEach((el) => {
    inView(
      el,
      () => {
        const delay = el.dataset.revealDelay;
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('is-visible');
        el.addEventListener(
          'transitionend',
          () => {
            el.style.willChange = 'auto';
            el.style.transitionDelay = '';
          },
          { once: true }
        );
      },
      { margin: '0px 0px -10% 0px', amount: 0.1 }
    );
  });
}
