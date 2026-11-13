# DESIGN.md — Krystal Clear Services

Dirección aprobada: **A · "Cristal limpio"** (Joan, 2026-11-12). Sale del Prompt Maestro — Web Premium, Interactiva y Única.

| Categoría | Elección | Por qué |
| --- | --- | --- |
| A. Arquetipo | **3 · Arquitectónico / Suizo** | El nombre es la promesa: claridad y precisión. Grilla visible, líneas finas, etiquetas "Fig. 01". Distinto de Monarch (documental). |
| B. Hero | **Hero que se transforma**: split asimétrico con la foto real detrás de un vidrio empañado que el squeegee limpia | La firma de marca aparece en el primer segundo. El texto y los CTA nunca dependen de la animación. |
| C. Header | **Nav flotante tipo cápsula** con el teléfono siempre visible | Distinta de Monarch (barra con CTA). En móvil: logo, llamar y menú. |
| D. Patrones | 1 Fila de datos con líneas (prueba) · 2 Lista editorial numerada con preview fijo (servicios) · 3 Sección fijada con contenido que cambia (habitaciones, oscura) · 4 Proceso con línea de progreso · 5 Split con retrato anotado (Liza) · 6 Testimonios reales en tira horizontal · 7 Mapa tipográfico de zonas · 8 FAQ acordeón · 9 Cierre con vidrio | 9 patrones; ninguno se repite seguido. Comparte con Monarch solo FAQ y testimonios. |
| E. Movimiento | **Nivel 2 · Medio**, sin GSAP: CSS (`@property --wipe`) + IntersectionObserver | 0 librerías. TBT ~0. Con reduced-motion o sin JS, todo se ve limpio y completo. |
| F. Firma | **El squeegee**: el trazo bajo la K del logo se convierte en (1) la cuchilla que limpia el vidrio empañado sobre las fotos, (2) el subrayado diagonal de las palabras clave y (3) los separadores inclinados | Sale del logo y del oficio, no de un recurso genérico. |

## Paleta (del logo y de la web actual)
- Navy `#0B2244`: texto y secciones oscuras
- Steel `#2E7EAF`: rellenos y texto grande · Steel-deep `#1D6390`: enlaces y texto pequeño (6.2:1)
- Sky `#9FD3F2`: acentos sobre navy · Ice `#E3EEF6`: vidrio / fondos · Paper `#F6F9FC`
- Muted `#4A5B73`: texto secundario (7:1)

## Tipografía
- Display: **Instrument Serif** (400 + itálica): titulares, números, nombres de servicio.
- Texto/UI: **Geist Variable**.

## Reglas
- Solo fotos reales del equipo (web actual + video "20 years"). Sin stock.
- Datos solo de `src/config/site.ts`. Lo pendiente está en `PENDING_CLIENT_APPROVAL.md`.
- Palabras clave validadas en `docs/KEYWORDS.md`. Una principal por página.
- Reseñas: texto con atribución. Nunca `Review`/`AggregateRating` en el schema.

## Medición (build de producción, local, 2026-11-12)
| Página | Disp. | Rend. | Acc. | BP | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Móvil | 97 | 100 | 100 | 100 | 1.3 s | 50 ms | 0 |
| Home | Escritorio | 100 | 100 | 100 | 100 | 0.7 s | 0 ms | 0.035 |
| (web actual) | Móvil | 31 | 94 | 69 | 85 | 19.4 s | 6,020 ms | 0 |

## v2 — "más premium y actual" (Joan, 2026-11-13)
Mismo feedback que en Monarch v2; se aplicó la Etapa 4 del Prompt Maestro con la identidad de Krystal.
- **Hero con video real** del equipo (11 s, 474 KB, cortado del video "20 years" sin el texto quemado). El póster es el LCP (preload); el video arranca cuando el hilo está libre. Botón de pausa.
- **Móvil, hero distinto:** video a pantalla completa, título encima, sin párrafo; header transparente con solo la K blanca + llamar + menú (sin wordmark). Al bajar, cápsula blanca.
- **Cinta inclinada** (ángulo del squeegee) con servicios y ciudades en movimiento.
- **Cifras animadas** (solo datos reales: 20+, 5.0, 18 años) con la G oficial de Google.
- **Ventana fija** "Every corner. Every visit." con el collage real de 3 fotos (1920×1080).
- **Reseñas estilo Google:** colores oficiales (G multicolor, estrellas #FBBC04, botón #1A73E8, avatares de la paleta Google), 2 filas en movimiento en sentidos opuestos, con pausa.
- **Zonas sobre foto fija de Northport Dock** (Wikimedia, Fife Club, CC BY 3.0; crédito en el footer).
- Luces de cáustica de fondo, barra de progreso, títulos H2 por palabras (solo escritorio), spotlight en tarjetas, botón global "Pause motion" (WCAG 2.2.2).
- ❌ **Descartado:** círculo/insignia giratoria (Joan: ya visto en otras webs).

| v2 · build local | Rend. | Acc. | BP | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Móvil (2 pasadas) | 84–90 | 100 | 100 | 100 | 1.9 s | 220–390 ms | 0 |
| Escritorio | 98 | 100 | 100 | 100 | 0.7 s | 90 ms | 0.002 |
Confirmar con PageSpeed Insights una vez publicada (Lighthouse local con CPU 4× varía ±6 puntos).

## v3 — íconos animados, color y páginas SEO/GEO (2026-11-13)
- **Íconos animados propios** (`AnimIcon.astro`, estilo Lordicon sin su librería de ~200 KB): se dibujan al entrar en pantalla y tienen micro-movimiento (llamada que vibra, chispas, llave que gira, escudo que late). Sin JS o con reduced-motion: dibujados y quietos.
- **Color que rompe el patrón:** clase `.liquid` (degradado cónico animado steel/sky/ink). Se usa en la banda de cifras de la home, en el bloque destacado de "What's included", en servicios por ciudad, en valores (About), en la tarjeta de llamada (Contact), en la CTA final de cada página y en el 404.
- **Páginas (16):** home, /services/ + 5 servicios, /service-areas/ + Huntington Station, Commack y Northport, /about/, /contact/ (Jobber se carga solo al llegar al formulario), /faq/, /privacy-policy/, 404.
- Cada página: H1 único, title 39–61 car., description 135–157, canonical, breadcrumbs, schema (Service + FAQPage + BreadcrumbList; Person en About), respuesta directa arriba (GEO) y enlaces internos servicio ↔ zona. 0 enlaces internos rotos.
- `public/_redirects`: 301 de todas las URLs de la web vieja a su equivalente.
- Siguiente fase: nuevas páginas de zona o servicio × ciudad solo con datos de Search Console / Keyword Planner (docs/KEYWORDS.md).
