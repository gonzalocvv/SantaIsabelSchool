# Informe de auditoría — Santa Isabel School (landing)

**Fecha:** 2026-06-30
**Alcance:** contenido bilingüe (`ui.ts`), accesibilidad, SEO/semántica, calidad de diseño y de código del sitio `santa-isabel-web` (fuente + `dist`).
**Hallazgos confirmados:** 53.

> **Nota sobre severidad:** se agrupa por la **severidad calibrada** (el `verdict` de la verificación adversarial, cuando recalibró la inicial). Donde hubo cambio, se anota *"Severidad inicial → calibrada"* en el hallazgo. Conteos: **Critical 0 · High 1 · Medium 24 · Low 28**.

---

## Critical

*Sin hallazgos en esta severidad.*

---

## High

### Calidad de diseño

#### 1. El escudo (post-03) está mal presentado: logo completo con texto metido a la fuerza en un círculo
- **Ubicación:** `src/components/About.astro:40-46` + `src/assets/img/post-03.jpg`
- **Evidencia:** `post-03.jpg` (1080×1080) no es el escudo: es el lockup completo del logo (escudo + wordmark "SANTA ISABEL SCHOOL · EST. 1998") sobre fondo crema con mucho margen; el escudo es ~24% del ancho. Se renderiza `mx-auto h-40 w-40 rounded-full object-cover` (160px), por lo que el escudo queda diminuto (~38px), el wordmark embebido ilegible y los márgenes crema leen como zonas muertas dentro del círculo. El wordmark es además redundante (título de la tarjeta, header y footer). Se ve amateur/roto.
- **Recomendación:** recortar el asset a SOLO el escudo (sin wordmark ni padding) o crear un asset dedicado; mostrarlo más grande con `object-contain` y sin `rounded-full`. Si se quiere círculo, que el escudo lo llene. Eliminar el texto embebido por ilegible y redundante.

---

## Medium

### Exactitud de contenido

#### 1. "Educación católica y franciscana" no está respaldada por la fuente confiable y su evidencia textual fue retractada
- **Ubicación:** `trust.items[2]` (ES "Educación católica y franciscana" / EN "Catholic, Franciscan values")
- **Evidencia:** La identidad católica aparece solo en `01-contexto-colegio.md` (ficha: "Orientación: Valores de la religión Católica"). `05-extraccion-fuentes.md` (sección 4) retracta explícitamente la frase fuente "instituto de gestión privada, mixto, orientación católica, se enseña inglés" por pertenecer a un HOMÓNIMO ARGENTINO (Colegio Santa Isabel de San Isidro), declarándola "no fuente válida". El Instagram designado confiable (@santaisabelschool.pdlt) nunca menciona "católica" ni "franciscana".
- **Recomendación:** Confirmar con el colegio la orientación católica/franciscana antes de publicarla como hecho; respaldar con su ideario propio o suavizar el claim. Aplica igual al EN por paridad.

#### 2. Fundación en 1951, internado de niñas y Hermanas Terciarias Franciscanas: relato histórico de fuente única no corroborada
- **Ubicación:** `about.history[0]` y `about.history[1]` (ES y EN); también `hero.eyebrow` / `hero.subtitle` / `meta.description` ("más de 70 años")
- **Evidencia:** La fecha 1951, la congregación "Hermanas Terciarias Franciscanas de Santa Isabel" y el internado de niñas del medio rural aparecen ÚNICAMENTE en `01-contexto-colegio.md` (parcialmente retractado por `05-extraccion`). Nada figura en la fuente confiable (Instagram). El claim "más de 70 años" depende de que 1951 sea correcto.
- **Recomendación:** Confirmar año de fundación e historia (congregación, internado) antes de afirmarlos en una web pública. Si no se confirma 1951, revisar también todos los "más de 70 años" (`hero.eyebrow`, `hero.subtitle`, `meta.description`, `about.title`).

#### 3. "Colegio privado / Private school" proviene de la fuente retractada del homónimo argentino
- **Ubicación:** `meta.description` (ES "Colegio privado bilingüe…" / EN "Private bilingual school…")
- **Evidencia:** El atributo "privado" forma parte de la misma frase ("gestión privada, mixto, orientación católica…") que `05-extraccion-fuentes.md` (sección 4) atribuye al colegio argentino y declara NO válida. La bio/captions de Instagram no afirman "privado".
- **Recomendación:** Confirmar la gestión privada con el colegio; mientras tanto, no presentarla como dato verificado ni sustentarla en una fuente institucional propia.

### Paridad de traducción

#### 4. "Internado" mal traducido como "boarding house" (cambia el sentido institucional)
- **Severidad inicial High → calibrada Medium** (el contexto "giving girls from rural areas access to education" deja claro el sentido educativo; imprecisión más que error grave, pero debe corregirse).
- **Ubicación:** `about.history[0]` (ES `ui.ts:54`, EN `ui.ts:258`)
- **Evidencia:** ES "…funcionó un internado de niñas que cumplió un rol social clave…" / EN "…ran a girls' **boarding house** that played a key social role…". "boarding house" = pensión/casa de huéspedes, no un colegio con internado.
- **Recomendación:** Reemplazar por "girls' **boarding school**" (o "boarding facility for girls"). Es un término institucional central de la historia del colegio.

#### 5. Identidad religiosa: "educación católica y franciscana" reducido a "Catholic, Franciscan values"
- **Ubicación:** `trust.items[2]`
- **Evidencia:** ES "Educación católica y franciscana" / EN "Catholic, Franciscan values". El EN cambia "educación" por "values" y elimina el "y/and", quedando una aposición ambigua.
- **Recomendación:** Usar "Catholic, Franciscan education" para respetar el sentido, o "Catholic and Franciscan values" si se prefiere hablar de valores. Es un badge de confianza: conviene fidelidad.

#### 6. Calco/falso amigo: "Educación integral" → "Integral education"
- **Ubicación:** `pillars.items[3].title`
- **Evidencia:** ES "Educación integral" / EN "Integral education". En inglés "integral" se entiende como "esencial/incorporado", no como "integral/holístico".
- **Recomendación:** Para un título de pilar (alta visibilidad) usar "Holistic education" o "Well-rounded education". El cuerpo ya describe "whole human beings", coherente con "holistic".

### Accesibilidad

#### 7. Texto blanco sobre verde WhatsApp falla contraste (botón flotante e icono)
- **Severidad inicial High → calibrada Medium** (el texto blanco del botón de contacto es una falla AA limpia de 1.4.3; el icono del FAB podría ampararse en la excepción de logotipo de 1.4.11).
- **Ubicación:** `src/components/WhatsAppFloat.astro:19` (FAB, ambos `dist/index.html`); botón "Escribinos por WhatsApp" en Contact (`bg-whatsapp text-white`)
- **Evidencia:** Blanco `#FFFFFF` sobre `whatsapp #25D366` = **1.98:1**. El FAB es icon-only activo (1.4.11 exige 3:1) y el botón de contacto lleva texto blanco normal (1.4.3 exige 4.5:1). Presente en `dist/index.html` y `dist/en/index.html`.
- **Recomendación:** Oscurecer el verde a ≥3:1 para el icono y ≥4.5:1 para texto blanco (p.ej. `#0E7038` ≈6.2:1 cubre texto), o usar icono/texto en `primary`. Verificar también el FAB contra el fondo de página (1.4.11).

#### 8. "School" en dorado sobre el header crema no cumple AA (texto pequeño)
- **Severidad inicial High → calibrada Medium** (texto de branding pequeño, redundante con "Santa Isabel" legible al lado y oculto en mobile; violación AA real igual).
- **Ubicación:** `src/components/Header.astro:29` (span `text-accent`), header `bg-cream/85`
- **Evidencia:** `accent #D99A2B` sobre `cream #FBF7EF` = **2.28:1**. Texto `text-sm font-semibold` (14px → normal para WCAG): requiere 4.5:1. Falla 1.4.3.
- **Recomendación:** `accent-600` no alcanza (3.03:1); usar dorado más oscuro (≈`#8A5E12`, ~5.3:1) o renderizar "School" en `text-primary` (10.9:1). Reservar el dorado claro para fondos oscuros.

#### 9. Eyebrows (rótulos de sección) en accent-600 sobre fondos claros fallan AA
- **Severidad inicial High → calibrada Medium** (kicker labels cortos y secundarios; superan 3:1 de texto grande pero no el 4.5:1 de texto normal; fix de un token).
- **Ubicación:** `Hero.astro:47`, `About.astro:25`, `Pillars.astro:16`, `Levels.astro:16`, `Programs.astro:16`, `Gallery.astro:39` — todos `text-accent-600` sobre cream/surface
- **Evidencia:** `accent-600 #BD8420` sobre `cream #FBF7EF` = **3.03:1** y sobre `surface #FFFFFF` = **3.24:1**. Son `text-sm font-semibold uppercase` (texto normal → 4.5:1). Falla 1.4.3 en 6 secciones.
- **Recomendación:** Oscurecer el token de dorado-sobre-claro a ≥4.5:1 (≈`#8A5E12`) o cambiar los eyebrows a `text-primary`/`text-muted` (`muted #5B6B7B` = 5.13:1 sobre cream). Mantener el dorado vivo solo para acentos no textuales o sobre `primary`.

#### 10. Etiquetas doradas (dt) dentro de la tarjeta de contacto fallan AA
- **Severidad inicial High → calibrada Medium** (etiquetas pequeñas secundarias; los valores `dd` en white/90 son legibles; déficit modesto 3.53 vs 4.5).
- **Ubicación:** `Contact.astro` (`dl` dentro de `div.rounded-card.bg-white/10`; dt `text-accent`: Dirección, Teléfono, Email, Horarios)
- **Evidencia:** El fondo real es `bg-white/10` sobre `primary` = `#324E6B`. `accent #D99A2B` sobre `#324E6B` = **3.53:1**. Son `text-xs uppercase` → requiere 4.5:1. Falla 1.4.3. Nota: el mismo `text-accent` sobre `primary` puro sí pasa (4.77:1); solo falla por el aclarado de `bg-white/10`.
- **Recomendación:** Subir el dorado hacia un tono más claro (p.ej. `#E8B450` ≈4.54:1 sobre la tarjeta) o usar `text-white/90` para los dt (7.33:1). Verificar contra el fondo compuesto real, no contra `primary`.

#### 11. Números decorativos 01-04 de los pilares fallan incluso como texto grande
- **Ubicación:** `src/components/Pillars.astro` — `span.font-serif.text-3xl.font-bold.text-accent` dentro de tarjetas `bg-cream/60`
- **Evidencia:** `accent #D99A2B` sobre `cream/60 (#FDFAF5)` = **2.34:1**. Aun siendo texto grande (30px bold, umbral 3:1), no llega a 3:1. Falla 1.4.3 para texto grande; es numeración visible, no puramente decorativa.
- **Recomendación:** Si son ornamentales, marcarlos `aria-hidden` y aceptar el riesgo visual, o subir contraste (dorado más oscuro ≥3:1 o color `primary`). Preferible oscurecer para que funcionen también en baja visión.

#### 12. Placeholder de formulario (white/50) bajo contraste
- **Ubicación:** `Contact.astro` — inputs/textarea con `placeholder-white/50` sobre `bg-white/10` (sección #contact, `bg-primary`)
- **Evidencia:** Placeholder `#FFFFFF` al 50% sobre el campo `#324E6B` = **3.47:1**, bajo el 4.5:1 (1.4.3). Atenuante: hay `<label>` visibles asociados (el placeholder es complementario). El texto tipeado (white sólido) sí cumple (8.61:1).
- **Recomendación:** Subir el placeholder a `white/70` (≥4.5:1) o no depender de él para información esencial. Mantener los labels como etiqueta principal.

#### 13. Botón WhatsApp deshabilitado sigue siendo enfocable por teclado
- **Ubicación:** `dist` sección #contact: `<a href="#" … pointer-events-none opacity-60>` (Escribinos por WhatsApp / Message us on WhatsApp)
- **Evidencia:** Se ve deshabilitado con `pointer-events-none` + `opacity-60`, pero al ser `<a href="#">` sigue en el orden de tabulación; un usuario de teclado lo enfoca y al activarlo no hace nada útil (o salta al inicio). No hay `aria-disabled`. `pointer-events-none` solo bloquea el mouse. `opacity-60` agrava el bajo contraste del verde.
- **Recomendación:** Mientras no haya número, renderizarlo como `<button disabled>` o `<span>` no interactivo, o añadir `tabindex="-1"` + `aria-disabled="true"` y `href` real cuando esté listo.

### SEO y semántica

#### 14. og:image / twitter:image con relación de aspecto incorrecta para summary_large_image
- **Ubicación:** `dist/index.html` y `dist/en/index.html` (head); archivo `dist/og-image.jpg`
- **Evidencia:** `twitter:card` es `summary_large_image` (espera ~1.91:1, recomendado 1200×630), pero `og-image.jpg` mide 1080×1350 (retrato 4:5). En FB/WhatsApp/X/LinkedIn la imagen se recorta al centro, perdiendo encuadre. Faltan `og:image:width`/`og:image:height` y `twitter:image:alt`.
- **Recomendación:** Generar una tarjeta social dedicada de 1200×630 (logo + nombre + claim, márgenes seguros) y apuntar `og:image`/`twitter:image` a ella. Agregar `og:image:width=1200`, `og:image:height=630` y `twitter:image:alt`. Para conservar el retrato en WhatsApp, sumar un segundo `og:image`.

#### 15. JSON-LD School válido pero pobre: sin datos de negocio local (address, telephone, geo, logo)
- **Ubicación:** `dist/index.html` y `dist/en/index.html`, bloque `<script type="application/ld+json">`
- **Evidencia:** El schema solo trae name, alternateName, url, foundingDate, sameAs, areaServed (string), inLanguage. Faltan `address` (PostalAddress), `telephone`, `email`, `geo`, `logo` e `image`. Para un colegio (negocio físico local) la ausencia de NAP estructurado limita el SEO local y los rich results.
- **Recomendación:** Cuando estén los datos reales, agregar `address` (streetAddress, addressLocality "Paso de los Toros", addressRegion "Tacuarembó", addressCountry "UY", postalCode), `telephone`, `email`, `geo`, `logo` e `image`. Habilita panel de conocimiento y mejora el SEO local.

### Calidad de diseño

#### 16. Galería con muy pocas fotos y poco variadas: la sección se siente vacía
- **Severidad inicial High → calibrada Medium** (problema real, pero la premisa del fix es falsa: de los 12 assets, 7 son tarjetas de texto, post-03 es el logo y solo post-10/11/12 son fotos, todas con overlays; falta fotografía nueva).
- **Ubicación:** `src/components/Gallery.astro:17-32,61-76`
- **Evidencia:** La galería usa solo 2 fotos (post-11 y post-12) + tarjeta CTA de Instagram = una fila corta en grid de 3 columnas. Ambas fotos son escenas casi idénticas de patio/playground (además con overlays de texto), sin variedad (aulas, eventos, deporte, arte). Es la sección de prueba emocional y queda raquítica.
- **Recomendación:** Subir a 5-8 fotos variadas (aula, recreo, acto, deporte, biblioteca) en un mosaico/masonry más rico. **OJO:** los assets existentes no alcanzan (en su mayoría son cards de texto); requiere fotografía nueva. Mantener el tile de Instagram como último, rediseñado.

#### 17. Primera impresión genérica: hero sin fotografía, mitad derecha vacía (patrón AI slop)
- **Ubicación:** `src/components/Hero.astro:13-77`
- **Evidencia:** El hero es solo texto en `max-w-3xl` a la izquierda sobre gradiente crema con un sol SVG abstracto y una onda tenue; la mitad derecha queda vacía. No hay fotografía real above-the-fold. Gradiente suave + formas abstractas + texto a la izquierda = patrón "plantilla genérica".
- **Recomendación:** Incorporar una fotografía fuerte (alumno/aula/campus) como imagen enmarcada en la columna derecha o como background con overlay y texto encima. Da alma y elimina el vacío.

#### 18. Eyebrows dorados con contraste insuficiente (debajo de WCAG AA), repetidos en toda la página
- **Ubicación:** `Hero.astro:47` (y mismo patrón en `About.astro:25`, `Pillars.astro:16`, `Levels.astro:16`, `Programs.astro:16`, `Gallery.astro:39`) + tailwind.config
- **Evidencia:** Eyebrows en `text-accent-600 (#BD8420)`, `text-sm`, sobre crema `#FBF7EF` ≈ 3:1, bajo el 4.5:1 de AA. Aparecen en 6 secciones, así que el problema se repite y se ven "desteñidos".
- **Recomendación:** Oscurecer el color (usar `primary` o un dorado ≈`#9A6A15`) y/o subir tamaño/peso, garantizando ≥4.5:1. Verificar también `accent` DEFAULT (`#D99A2B`) como texto sobre crema (≈2.4:1, aún peor).

#### 19. La alternancia de fondos crema/blanco es imperceptible: la página se siente plana y monótona
- **Ubicación:** `src/components/Landing.astro:24-33` + tailwind.config (`cream #FBF7EF` vs `surface #FFFFFF`)
- **Evidencia:** Las secciones alternan `bg-cream` y `bg-surface` pero difieren ~2% de luminancia: el límite es casi invisible. Sumado a que casi todas repiten la misma estructura (eyebrow + H2 serif + intro muted + grid de tarjetas), el scroll lee como un único bloque sin ritmo.
- **Recomendación:** Aumentar el contraste entre bandas (un crema más profundo o un panel teñido), agregar divisores hairline entre secciones y/o usar `primary-tint` en una sección intermedia para quebrar el ritmo vertical.

#### 20. Plantilla repetida en 5 secciones seguidas sin imágenes: ritmo vertical monótono
- **Ubicación:** `src/components/Pillars.astro`, `Levels.astro`, `Programs.astro` (mismo esqueleto)
- **Evidencia:** About, Pillars, Levels, Programs y Gallery comparten el mismo esqueleto (eyebrow dorado + H2 serif centrado + intro muted + grilla de tarjetas bordeadas). Entre el hero y la galería no hay ni una fotografía. Refuerza la sensación de plantilla/AI slop y aplana la jerarquía.
- **Recomendación:** Romper el patrón en 1-2 secciones: meter fotografía en About/Pillars/Programs, variar el tratamiento de tarjetas y convertir Niveles en un layout distinto. Que cada sección tenga silueta visual propia.

#### 21. Niveles no comunica la "trayectoria": promete un recorrido pero muestra 4 tarjetas iguales y estáticas
- **Ubicación:** `src/components/Levels.astro:31-51`
- **Evidencia:** El título dice "Una trayectoria completa en un mismo lugar" (Inicial → Primaria → Secundaria → Bachillerato), pero se renderiza como 4 tarjetas idénticas en grilla, sin secuencia ni flujo. La barrita dorada superior es un diferenciador débil. El layout contradice el mensaje.
- **Recomendación:** Renderizar Niveles como una línea de tiempo/stepper horizontal conectada, con flechas o números que muestren la progresión. Refuerza el headline y aporta variedad visual.

#### 22. Campos del formulario con baja affordance sobre el azul oscuro
- **Ubicación:** `src/components/Contact.astro:54,67,80,88,105`
- **Evidencia:** Los inputs usan `bg-white/10` + `border-white/20` sobre `primary (#1B3A5B)`. Los campos apenas se separan del panel azul: parecen contornos tenues más que cajas editables, y el placeholder en `white/50` cuesta leerse. Debilita la affordance del paso de conversión.
- **Recomendación:** Subir el relleno a `white/15-20` (o superficie clara), reforzar el borde y subir el placeholder a ≥`white/60`. Que los campos lean como cajas clicables.

#### 23. Columna derecha de Contacto hueca: mapa vacío grande + 4× "A confirmar"
- **Ubicación:** `src/components/Contact.astro:131-178`
- **Evidencia:** La columna derecha muestra una caja de mapa `aspect-video` grande con solo un pin y "A confirmar", más una tarjeta con dirección/teléfono/email/horarios todos en "A confirmar". Queda un vacío azul grande: la sección de cierre se ve sin terminar.
- **Recomendación:** Cargar dirección y embed de mapa reales antes del launch. Mientras tanto, colapsar/achicar el bloque de mapa vacío y reubicar el bloque de WhatsApp/contacto para llenar el espacio. (Aceptable en dev, bloqueante para producción.)

### Calidad de código

#### 24. Mobile menu never closes after selecting a link or CTA
- **Ubicación:** `src/components/Header.astro:52-84`
- **Evidencia:** El nav mobile es un `<details>`/`<summary>` sin JS. Al tocar cualquier ancla in-page (#about, #contact…) o el CTA del panel abierto, navega pero nunca cierra el `<details>`. No hay close-on-select ni outside-click. El panel (`absolute right-0 mt-2 w-64`) queda flotando sobre el contenido al que el usuario saltó.
- **Recomendación:** Agregar un script inline mínimo (o `onclick="this.closest('details').open=false"` en cada link/CTA) para cerrar el `<details>` al activar un ítem; opcionalmente cerrar también en click afuera / Escape.

---

## Low

### Exactitud de contenido

#### 1. "Certificación Cambridge" puede sobredimensionar lo que las fuentes describen como preparación para exámenes
- **Ubicación:** `hero.badges[0]` / `trust.items[0]` / `meta.description` (ES y EN: "Certificación Cambridge" / "Cambridge certification")
- **Evidencia:** La bio de IG se autodescribe "Bilingüe certificado Cambridge" (respalda el wording), pero la única descripción detallada (`capturas-transcripcion.md`, pilar 2) habla de "preparar a los estudiantes para presentar los exámenes internacionales de Cambridge", es decir preparación para rendir, no necesariamente acreditación institucional. El badge puede leerse como acreditación de la institución (claim más fuerte).
- **Recomendación:** Confirmar la naturaleza exacta (acreditación institucional vs. centro/preparación para exámenes) y ajustar el wording del badge para no sobreafirmar.

### Paridad de traducción

#### 2. EN agrega "Uruguay" que no está en ES (paridad de contenido)
- **Ubicación:** `meta.description`, `meta.ogAlt`, `hero.subtitle`
- **Evidencia:** `meta.ogAlt` — ES "Santa Isabel School — Paso de los Toros" / EN "…Paso de los Toros, Uruguay". Mismo patrón en `meta.description` y `hero.subtitle`.
- **Recomendación:** Probablemente intencional (audiencia EN internacional). Si es deliberado, dejarlo y documentarlo; si se busca paridad estricta, agregar "Uruguay" también en ES o quitarlo del EN. Unificar criterio.

#### 3. "escudo" traducido de dos formas: "crest" (título) y "shield" (elemento)
- **Ubicación:** `about.shield.title` vs `about.shield.items[2].label`
- **Evidencia:** Título — ES "El significado de nuestro escudo" / EN "The meaning of our crest". Elemento — ES "El escudo" / EN "The shield".
- **Recomendación:** La desambiguación (emblema completo "crest" vs. figura heráldica "shield") es razonable pero rompe el paralelismo y puede confundir. Verificar intención; si se mantiene, documentarlo.

#### 4. Inconsistencia interna EN en "half/full day" (guion variable)
- **Ubicación:** `hero.badges[2]`, `trust.items[3]`, `levels.modalities`
- **Evidencia:** `hero.badges[2]` EN "Half-day or full-day bilingual" · `trust.items[3]` EN "half or full day" · `levels.modalities` EN ["Half day", "Full-day bilingual"]. El ES es consistente ("media jornada"/"doble jornada").
- **Recomendación:** Unificar a una forma, p.ej. "half-day" / "full-day" en todos los casos.

#### 5. Calco de "nació" → "was born" con redundancia frente a "founded by"
- **Ubicación:** `about.history[0]`
- **Evidencia:** ES "…es obra de las Hermanas… La escuela nació en 1951…" / EN "…was founded by the Franciscan Tertiary Sisters… The school was born in 1951…". "The school was born" es calco de "nació" y suena redundante tras "was founded by".
- **Recomendación:** Preferir "The school opened in 1951" o "It first opened its doors in 1951" para fluidez natural.

#### 6. "profesores de Español" → "the Spanish teachers" es ambiguo
- **Ubicación:** `programs.items[0].points[2]`
- **Evidencia:** ES "A cargo de los profesores de Español" / EN "Led by the Spanish teachers". "Spanish teachers" puede leerse como "profesores de/originarios de España".
- **Recomendación:** Aclarar: "Led by the Spanish-language teachers" o "Led by the Language Arts teachers".

#### 7. "Producción a partir de la lectura" gana matiz no presente en ES
- **Ubicación:** `programs.items[0].points[1]`
- **Evidencia:** ES "Producción a partir de la lectura" / EN "Creative work based on reading". El EN agrega "creative", que no está en ES (la producción puede ser analítica/expositiva).
- **Recomendación:** Usar "Written/oral work based on reading" u "Output based on reading" para no estrechar el sentido.

### Accesibilidad

#### 8. aria-label de navegación principal sin traducir en la versión EN
- **Ubicación:** `src/components/Header.astro:24` — `<nav aria-label="Principal">` (queda "Principal" también en `dist/en/index.html`)
- **Evidencia:** En la página inglesa el nombre accesible del landmark es "Principal" (español), inconsistente con `lang="en"`. El footer sí traduce su nav. Un lector de pantalla en inglés anuncia un término en español.
- **Recomendación:** Mover el texto a i18n (`t.nav.ariaMain`) y usar "Main"/"Primary" en EN y "Principal" en ES.

#### 9. Switch de idioma: texto ES/EN sin lang y aria-current="true" en vez de "page"
- **Ubicación:** `src/components/LanguageSwitch.astro:18,27`
- **Evidencia:** Los enlaces "ES"/"EN" no marcan el idioma de su contenido; un lector en español puede leer "EN" como palabra. `aria-current="true"` es válido pero menos preciso que "page". El grupo ya tiene `role=group` + aria-label por enlace (bien).
- **Recomendación:** Añadir `lang="es"`/`lang="en"` a cada enlace (o a su texto) y considerar `aria-current="page"` para la versión activa. Cambios menores.

#### 10. Menú móvil (details/summary) sin aria-expanded explícito
- **Ubicación:** `src/components/Header.astro:52-63` — `<details>`/`<summary aria-label=…>`
- **Evidencia:** El patrón expone estado abierto/cerrado nativamente y es accesible por teclado, con aria-label en el summary y SVG `aria-hidden` (funciona). Detalle: el anuncio de "expandido/contraído" varía entre lectores; algunos no lo verbalizan tan claro como un button con `aria-expanded`.
- **Recomendación:** Opcional: mantener details/summary y, si algún lector no anuncia el estado, añadir un script que sincronice `aria-expanded` en el summary con el atributo `open`.

### SEO y semántica

#### 11. Propiedad inLanguage no aplicable al tipo School en el JSON-LD
- **Ubicación:** `dist/index.html` y `dist/en/index.html`, bloque JSON-LD
- **Evidencia:** `"inLanguage":["es","en"]` está en un nodo `@type:School` (EducationalOrganization). `inLanguage` pertenece a `CreativeWork`, no a `Organization`; los validadores lo ignoran como propiedad fuera de dominio. No rompe el resto.
- **Recomendación:** Eliminar `inLanguage` del nodo School (el bilingüismo ya queda cubierto por hreflang). Opcionalmente, en EN usar url ".../en/" o un `@id` estable compartido.

#### 12. aria-label del `<nav>` principal sin traducir en la página EN (SEO/i18n)
- **Ubicación:** `dist/en/index.html`, `<nav … aria-label="Principal">` dentro del `<header>`
- **Evidencia:** En la home EN el nav del header conserva `aria-label="Principal"` (español), mientras el footer usa "Navigation" y el switcher "Language". Inconsistencia de i18n/accesibilidad.
- **Recomendación:** Traducir el aria-label del nav del header a "Main" (o "Primary") en la variante EN.

#### 13. Sitemap multilingüe sin anotaciones hreflang ni lastmod
- **Ubicación:** `dist/sitemap-0.xml`
- **Evidencia:** El urlset declara `xmlns:xhtml` pero no lo usa: cada `<url>` (/ y /en/) carece de `<xhtml:link rel="alternate" hreflang="…">` y de `<lastmod>`. El hreflang sí está correcto y recíproco en el `<head>` de ambas páginas (es, en, x-default), por lo que el impacto es bajo.
- **Recomendación:** Agregar en cada `<url>` los `<xhtml:link>` alternate (es, en, x-default) y un `<lastmod>`. En Astro, configurar `@astrojs/sitemap` con i18n para que los emita automáticamente.

#### 14. Página 404 con title duplicado, hreflang/canonical incorrectos y sin noindex
- **Ubicación:** `dist/404.html` (head)
- **Evidencia:** El 404 reutiliza el title de la home, declara canonical a `https://.../404` (URL inexistente) y hreflang hacia / y /en/ como si fuera equivalente; no incluye `meta robots noindex`. Si el host sirve `404.html` con status 200, podría indexarse como soft-404.
- **Recomendación:** En `404.html`: title propio ("Página no encontrada · Santa Isabel School"), `<meta name="robots" content="noindex">`, quitar canonical/hreflang (o no apuntarlos a la home) y asegurar status HTTP 404 del hosting.

#### 15. Formulario de contacto deshabilitado y datos de contacto en placeholder (afecta conversión y SEO local)
- **Ubicación:** `dist/index.html` y `dist/en/index.html`: `<input name="access_key" value="TODO::web3forms-access-key">`, `const formReady=false`; sección #contact con "A confirmar"; botón WhatsApp con `href="#" pointer-events-none`
- **Evidencia:** El CTA principal (envío de consulta) está inactivo: `formReady=false` hace que todo submit muestre error y el access_key es un TODO. Dirección, teléfono, email, horarios, mapa y link de WhatsApp están sin completar. No es SEO técnico de meta tags, pero afecta captación de leads y SEO local (NAP).
- **Recomendación:** Antes de publicar: cargar el access_key real de Web3Forms y poner `formReady=true`; completar NAP, mapa y link real de WhatsApp; reflejar esos datos en el JSON-LD (ver hallazgo de schema).

### Calidad de diseño

#### 16. Jerarquía invertida en Pilares: el número decorativo pesa más que el título
- **Ubicación:** `src/components/Pillars.astro:28-29`
- **Evidencia:** El número "01" se renderiza `font-serif text-3xl font-bold text-accent` (grande y dorado) mientras el título es `text-xl text-primary`. El ojo va al número decorativo antes que al título.
- **Recomendación:** Bajar tamaño/peso del número o usarlo como etiqueta discreta (`text-sm tracking` en muted) y promover el título para que mande el contenido.

#### 17. La tarjeta CTA de Instagram con borde punteado lee como "placeholder/falta contenido"
- **Ubicación:** `src/components/Gallery.astro:61-75`
- **Evidencia:** El tile "Seguinos en Instagram" usa `border-dashed border-primary/30` sobre fondo claro. El borde punteado es la convención de "slot vacío / agregar", así que parece un hueco sin foto, agravando la sensación de galería incompleta.
- **Recomendación:** Darle relleno de marca sólido (gradiente o primary tint con ícono y texto en claro) para que lea como un tile deliberado y atractivo.

#### 18. Wordmark del header/footer plano: existe escudo de marca pero no se usa en la identidad
- **Ubicación:** `src/components/Header.astro:25-32` + `src/components/Footer.astro:27`
- **Evidencia:** Header y footer son solo texto ("Santa Isabel" + "School" dorado). Existe un escudo de marca (en post-03) que no se aprovecha en la identidad de navegación, donde más refuerza el branding.
- **Recomendación:** Colocar el escudo (recortado, ver hallazgo del escudo) como marca pequeña junto al wordmark en header y footer. Reutiliza el asset y profesionaliza la identidad.

### Calidad de código

#### 19. Dead config placeholders surfaced by DevBanner have no render target
- **Ubicación:** `src/data/site.ts:33-38`
- **Evidencia:** `pendingPlaceholders()` recorre todo el objeto `site`, así que el dev banner lista `maps-link` (`site.contact.mapsLink`), `proceso/fechas de inscripción` (`admissions.formInfo`) e `información de matrícula/cuota` (`admissions.tuitionInfo`) como pendientes. Ninguno es leído por componente alguno (Contact usa `mapsEmbedSrc`, no `mapsLink`). Completarlos no cambia nada en el sitio: el banner engaña al proceso de carga de contenido.
- **Recomendación:** Renderizar estos campos en algún lado (bloque admisiones / link "ver en Maps") o quitarlos de `site` para que el dev banner solo trackee placeholders que realmente producen output.

#### 20. Unused i18n utility exports (dead code) — LanguageSwitch hardcodes paths instead
- **Ubicación:** `src/i18n/utils.ts:4,16,21,26`
- **Evidencia:** `getLangFromUrl`, `otherLang`, `homePath` y `langCode` se exportan pero nunca se importan. `LanguageSwitch.astro` re-implementa `homePath` hardcodeando `href="/"` y `href="/en/"`, duplicando lógica ya encapsulada.
- **Recomendación:** Borrar los exports sin uso, o usar `homePath()` en LanguageSwitch y `getLangFromUrl` en el layout para derivar `lang` en vez de pasarlo manualmente por cada componente.

#### 21. Unused i18n keys: contact.form.required and footer.contactTitle
- **Ubicación:** `src/i18n/ui.ts:184,199,388,403`
- **Evidencia:** `contact.form.required` (es/en) y `footer.contactTitle` (es/en) están definidas en ambos diccionarios pero nunca referenciadas. Los matches de `required` en Contact.astro son atributos HTML, no el string i18n; el footer renderiza navTitle/followTitle/tagline/rights, no contactTitle.
- **Recomendación:** Quitar las keys muertas, o conectarlas (p.ej. usar `form.required` en un mensaje de validación, renderizar `footer.contactTitle` sobre la columna de contacto).

#### 22. Dead variables passed into the Contact inline script
- **Ubicación:** `src/components/Contact.astro:183`
- **Evidencia:** `define:vars` pasa `sendingLabel: c.form.sending` e `idleLabel: c.form.submit`, pero el script nunca los lee: alterna los `<span data-label-idle>`/`<span data-label-sending>` pre-renderizados vía classList. Las dos vars son inertes.
- **Recomendación:** Quitar `sendingLabel`/`idleLabel` de `define:vars` (dejar solo `formReady`, `successMsg`, `errorMsg`).

#### 23. Main nav landmark label hardcoded in Spanish on the English page
- **Ubicación:** `src/components/Header.astro:24`
- **Evidencia:** `<nav … aria-label="Principal">` es un literal, así que en /en/ un lector de pantalla anuncia un landmark en español ("Principal") mientras el resto de la UI y el footer nav (`aria-label={t.footer.navTitle}`) están localizados.
- **Recomendación:** Agregar una key localizada (`t.nav.primary`) y usar `aria-label={…}` para que el nombre del landmark siga el idioma de la página.

#### 24. Disabled WhatsApp CTA stays keyboard-focusable and activates a no-op '#'
- **Ubicación:** `src/components/Contact.astro:144`
- **Evidencia:** Cuando WhatsApp no está configurado, el Button renderiza `<a href="#">` (`whatsappLink()` devuelve "#") con `pointer-events-none opacity-60`. `pointer-events-none` solo bloquea el mouse; el link sigue en el tab order y Enter navega a "#" (salta al inicio). Expone un control visualmente deshabilitado como link real a la tecnología asistiva.
- **Recomendación:** Cuando no esté listo, renderizar un elemento no interactivo (o `tabindex="-1"` `aria-disabled="true"` + prevenir default), consistente con cómo se oculta condicionalmente el CTA de teléfono.

#### 25. Contact level `<select>` has no neutral default — untouched submissions report 'Educación Inicial'
- **Ubicación:** `src/components/Contact.astro:85-92`
- **Evidencia:** El select no tiene opción placeholder/required, así que la primera opción real ("Educación Inicial" / "Early Years") queda preseleccionada. Un lead que nunca abre el dropdown envía "Educación Inicial" sin importar su intención (datos de lead engañosos; "Otra consulta" queda última y es fácil de pasar por alto).
- **Recomendación:** Agregar una primera opción `disabled selected` vacía (p.ej. `c.form.level` como placeholder) para forzar una elección explícita o al menos enviar valor vacío si no se toca.

#### 26. JSON-LD set:html uses JSON.stringify without escaping '<'
- **Ubicación:** `src/layouts/Base.astro:85`
- **Evidencia:** `set:html={JSON.stringify(jsonLd)}` inyecta el body verbatim. `JSON.stringify` no escapa "<", así que un valor con `</script>` rompería la etiqueta. No explotable hoy (valores estáticos de `site.ts`), pero es el gap de hardening estándar para JSON-LD inline.
- **Recomendación:** Escapar en la salida, p.ej. `JSON.stringify(jsonLd).replace(/</g, '\\u003c')`, para que siga seguro si algún campo pasa a ser CMS/derivado de usuario.

#### 27. WhatsApp float duplicates translation literals instead of reusing the i18n key
- **Ubicación:** `src/components/WhatsAppFloat.astro:10`
- **Evidencia:** `label` se arma con literales inline ("Escribinos por WhatsApp" / "Message us on WhatsApp") que son duplicados byte-a-byte de `ui.ts` `contact.whatsappCta` (líneas 186/390). Dos fuentes de verdad para el mismo string van a divergir.
- **Recomendación:** Importar `useTranslations` y usar `t.contact.whatsappCta` para el aria-label/title.

#### 28. Placeholder crest asset shows 'EST. 1998', contradicting foundedYear 1951
- **Ubicación:** `src/components/About.astro:40-46`
- **Evidencia:** La imagen renderizada como escudo (`assets/img/post-03.jpg`) es un logo que dice "SANTA ISABEL SCHOOL — EST. 1998". El copy y la config dicen fundado 1951 / "más de 70 años", y `Base.astro` emite JSON-LD `foundingDate '1951'`. El año visible en el escudo contradice la historia declarada.
- **Recomendación:** Reemplazar por el escudo real antes del launch y confirmar que el año coincida con `site.foundedYear` (1951). Es una inconsistencia factual visible al usuario, no solo un placeholder de asset.

---

## Plan de fixes priorizado

Pasos accionables, en orden de ejecución:

1. **Bloqueantes de producción — habilitar la captación de leads y los datos de contacto.**
   - Cargar el `access_key` real de Web3Forms y poner `formReady=true` (`Contact.astro` / `dist`).
   - Completar NAP real (dirección, teléfono, email, horarios), embed de mapa real y link real de WhatsApp; eliminar los "A confirmar" / "To be confirmed".
   - Reemplazar `href="#"` del CTA de WhatsApp por el link real (resuelve además el control "fantasma" para teclado).
   - *(Resuelve: Low-SEO #15, Medium-diseño #23; desbloquea pasos 5 y 6.)*

2. **Reemplazar el asset del escudo (único High) y corregir la contradicción de año.**
   - Recortar `post-03.jpg` a SOLO el escudo (sin wordmark ni padding) o crear un asset dedicado; renderizar más grande con `object-contain` y sin `rounded-full`.
   - Confirmar el año de fundación; eliminar/corregir el "EST. 1998" embebido frente al 1951 declarado.
   - *(Resuelve: High-diseño #1, Low-código #28.)*

3. **Confirmar con el colegio los datos históricos e identitarios antes de publicarlos como hechos.**
   - Validar: orientación católica/franciscana, año 1951 + congregación + internado, gestión privada, y la naturaleza exacta de "Certificación Cambridge".
   - Ajustar/suavizar los claims no confirmados en ES y EN; si cambia 1951, revisar todos los "más de 70 años".
   - *(Resuelve: Medium-contenido #1, #2, #3; Low-contenido #1.)*

4. **Corregir contraste de color con un cambio de token centralizado.**
   - Oscurecer el token de dorado usado como texto sobre fondos claros a ≥4.5:1 (≈`#8A5E12`) o cambiar esos textos a `primary`/`muted`. Cubre los eyebrows de 6 secciones, "School" del header y los números de pilares.
   - Para la tarjeta de contacto (fondo `bg-white/10`) usar `text-white/90` en los dt; subir el placeholder a `white/70`.
   - Oscurecer el verde de WhatsApp (≈`#0E7038`) o usar icono/texto en `primary` para el FAB y el botón de contacto.
   - *(Resuelve: Medium-a11y #7, #8, #9, #10, #11, #12; Medium-diseño #18.)*

5. **Corregir traducciones que tergiversan o estrechan el sentido.**
   - "boarding house" → "boarding school"; "Integral education" → "Holistic education"; "Catholic, Franciscan values" → "Catholic, Franciscan education"; "the Spanish teachers" → "Spanish-language teachers"; "Creative work based on reading" → "Output/Written work based on reading"; "The school was born" → "The school opened".
   - Unificar "half-day"/"full-day"; unificar criterio de "Uruguay" entre ES/EN; documentar crest vs shield.
   - *(Resuelve: Medium-traducción #4, #5, #6; Low-traducción #2–#7.)*

6. **Corregir comportamientos de accesibilidad/UX e i18n.**
   - Cerrar el menú móvil al seleccionar un link/CTA (close-on-select + Escape/outside-click).
   - Localizar el `aria-label` del nav principal (`t.nav.primary`); añadir `lang` + `aria-current="page"` al switch de idioma.
   - Dar opción neutral al `<select>` de nivel; render no interactivo o `aria-disabled` para el CTA WhatsApp deshabilitado.
   - *(Resuelve: Medium-código #24, Medium-a11y #13; Low-a11y #8, #9, #10; Low-código #23, #24, #25.)*

7. **Mejorar SEO/semántica.**
   - Generar tarjeta social 1200×630 + `og:image:width/height` + `twitter:image:alt`.
   - Enriquecer el JSON-LD School con address/telephone/email/geo/logo/image (con los datos del paso 1); quitar `inLanguage`.
   - Añadir hreflang + `lastmod` al sitemap; corregir la página 404 (title propio, `noindex`, canonical/hreflang).
   - *(Resuelve: Medium-SEO #14, #15; Low-SEO #11, #13, #14.)*

8. **Romper el "AI slop" visual y dar ritmo a la página.**
   - Incorporar fotografía real en hero y en 1-2 secciones (About/Pillars/Programs); requiere fotos nuevas (los assets actuales son mayormente cards de texto).
   - Ampliar y variar la galería a 5-8 fotos; rediseñar el tile de Instagram (relleno sólido, sin borde punteado).
   - Aumentar contraste entre bandas crema/blanco + divisores; convertir Niveles en stepper/timeline; reforzar affordance de los inputs; bajar el número decorativo de pilares; sumar el escudo recortado al header/footer.
   - *(Resuelve: Medium-diseño #16, #17, #19, #20, #21, #22; Low-diseño #16, #17, #18.)*

9. **Limpieza de código muerto y hardening.**
   - Eliminar/conectar placeholders del DevBanner, exports e i18n keys sin uso, y las vars inertes de `define:vars`; centralizar el label de WhatsApp en i18n.
   - Escapar "<" en el `set:html` del JSON-LD.
   - *(Resuelve: Low-código #19, #20, #21, #22, #26, #27.)*
