# Auditoría SEO + GEO — krystalclearny.com

**Fecha:** 2026-11-12 · **Tipo:** auditoría por URL (sin acceso a Search Console, Analytics ni Google Business Profile)
**Negocio:** Krystal Clear Services (servicio de limpieza residencial y comercial). Dueña: Liza. Huntington, NY (Long Island, condado de Suffolk).
**Web actual:** WordPress 7.1 + Hello Elementor + Elementor y 6 plugins de addons, en LiteSpeed. La hizo Helice Digital Solutions (aparece en el footer).
**Objetivo:** tener el punto de partida antes de rehacer la web (repo `krystalclearsc/krystalclear`).

---

## 1. Resumen ejecutivo

| Capa GET CHOSEN | Nota 0–5 | Por qué |
| --- | --- | --- |
| FOUND (¿te encuentran?) | **1** | Google solo tiene indexadas **4 páginas** (home, services, booking, about). Ninguna de servicio. Bing no parece tener nada. Tampoco aparece en el top 10 del mapa para "house cleaning service Huntington NY" ni "commercial cleaning Huntington NY". |
| UNDERSTOOD (¿te entienden?) | **1** | Ninguna página tiene H1, meta description ni schema. Los titles son genéricos ("Services – Krystal Clear"). No hay páginas por ciudad. No hay llms.txt. |
| TRUSTED (¿confían?) | **3** | GBP 5.0★ con 34 reseñas, todas respondidas, con los atributos mujer empresaria y empresario latino. "Background-checked & insured" aparece en el texto. Pero la web muestra el widget con "19 reviews", la antigüedad no cuadra entre páginas, no hay `sameAs` y aparecen 2 negocios "Krystal Clear" en Angi/HomeAdvisor. |
| CHOSEN (¿te eligen?) | **2** | Hay diferenciales reales (20 años, la dueña Liza con nombre propio, reseñas de clientes con 18 años con ella), pero están poco explotados. No tiene contenido local propio. Answer share en IA sin medir. |
| ACTIONABLE (¿pueden contactarte?) | **2** | El teléfono está en el GBP y en el footer, pero **en móvil la primera pantalla no tiene ni teléfono ni CTA**. El enlace de email está roto. **El teléfono de la cabecera marca otro número.** Todos los CTA van a un formulario de Jobber en otra página. |

**Lo más grave (arreglar ya, aunque la web nueva tarde):**
1. 🔴 **Teléfono de la cabecera:** se ve "(631) 759-8442", pero el enlace marca `tel:6313347242`. Hay que confirmar con la clienta cuál es el bueno; el GBP dice 759-8442.
2. 🔴 **4 de 8 páginas de servicio huérfanas** (deep cleaning, carpet, windows, power washing): ningún enlace interno lleva a ellas y no están indexadas.
3. 🔴 **Rendimiento móvil 31/100:** LCP de 19,4 s, TBT de 6 s y 6,3 MB por página.
4. 🟠 **Sin H1, sin meta description y sin schema** en ninguna página.
5. 🟠 La página `/coming-soon/` es indexable y está en el sitemap.

---

## 2. Inventario de URLs (sitemap `wp-sitemap.xml`)

| URL | Estado | ¿Indexada en Google? | Palabras | Title (car.) | Problemas principales |
| --- | --- | --- | --- | --- | --- |
| `/` | 200 | ✅ | 1172 | "Krystal Clear – Cleaning Services Huntingtong And Surrounding" (61) | Errata "Huntingtong". Sin H1 (el titular es H2). |
| `/kristal-clear/` (About) | 200 | ✅ | 988 | "Kristal Clear – Krystal Clear" (29) | Slug con el nombre mal escrito. Dice "more than a decade" y "+20 years". Los contadores salen "0+" y "0k" sin JS. |
| `/services/` | 200 | ✅ | 186 | "Services – Krystal Clear" (24) | Enlaza solo 4 de los 8 servicios. |
| `/booking/` | 200 | ✅ | 96 | "Booking – Krystal Clear" (23) | El formulario de Jobber se carga por JS, así que el HTML queda casi vacío. |
| `/residential-cleaning/` | 200 | ❌ | 388 | "Residential Cleaning – Krystal Clear" (36) | Contenido corto. 6 de 8 imágenes sin alt. |
| `/commercial-cleaning/` | 200 | ❌ | 186 | "Commercial Cleaning – Krystal Clear" (35) | Muy corta. 5 de 7 imágenes sin alt. |
| `/post-construction-cleaning/` | 200 | ❌ | 273 | (42) | Corta. |
| `/move-in-move-out/` | 200 | ❌ | 261 | "Move in /Move Out – Krystal Clear" (33) | Su H2 dice "Why Choose Our **Residential** Cleaning Services?" (copiado de otra página). |
| `/deep-cleaning/` | 200 | ❌ | 177 | (29) | **Huérfana.** |
| `/carpert-cleaning/` | 200 | ❌ | 250 | "Carpert Cleaning – Krystal Clear" (32) | **Huérfana.** Errata "carpert" en la URL y el title. |
| `/windows-cleaning/` | 200 | ❌ | 322 | (32) | **Huérfana.** |
| `/power-washing/` | 200 | ❌ | 239 | (29) | **Huérfana.** |
| `/coming-soon/` | 200 | — | 38 | "Coming Soon – Krystal Clear" | Debería estar en noindex o eliminada. |
| `/elementor-hf/header/`, `/elementor-hf/footer/` | 301 → home | — | — | — | Plantillas internas de Elementor en el sitemap. |
| `/author/ejlm9nwqk863dag5anntbscmv/` | 200 | — | 103 | — | Página de autor indexable: contenido débil y deja ver el slug del usuario admin. |

> Consulta `site:krystalclearny.com` en Google el 12-11-2026: 4 resultados. Hay que confirmarlo en Search Console (Páginas → "Descubierta/Rastreada: actualmente sin indexar").

Nada de lo que hay ahora tiene tráfico relevante confirmado, pero **las 12 URLs de arriba necesitan su 301** cuando se publique la web nueva (ver §8).

---

## 3. Checklist A–H

### A. Rastreo e indexación
- ✅ robots.txt existe, declara el sitemap y no bloquea bots de IA (GPTBot, ClaudeBot, PerplexityBot, etc. están permitidos por defecto).
- ⚠️ El sitemap incluye `coming-soon`, plantillas de Elementor (que dan 301), la página de autor y `/feed/`.
- ✅ Hay canonical en todas las páginas de contenido (falta en la de autor).
- ✅ http → https y www → no-www con 301. ⚠️ `http://www` pasa por 2 saltos.
- ✅ La 404 devuelve un 404 real.
- ❌ **Enlazado interno roto:** 4 servicios sin ningún enlace y la home no enlaza ningún servicio directamente.
- ⚠️ Contenido que depende de JS: los contadores ("0+", "0k"), el formulario de Booking y el widget de reseñas de Trustindex.
- ❌ No hay `llms.txt` (da 404).
- ⚠️ Bing: `site:` no devuelve resultados del dominio, así que probablemente **no está indexada en Bing**, que es la fuente de ChatGPT y Copilot. Confirmar en Bing Webmaster Tools.
- ⚠️ `/xmlrpc.php` responde 403 (está bien bloqueado). El feed RSS está activo pero sin entradas.

### B. On-page
- ❌ **Ninguna página tiene `<h1>`** (salvo la de autor). Todo son H2, con H2 repetidos en el footer en todas las páginas ("(631) 759-8442", "Get in Touch with Us!", "Krystal Clear").
- ❌ No hay meta description en ninguna página.
- ❌ Los titles no llevan keyword + ciudad: "Services – Krystal Clear", "Deep Cleaning – Krystal Clear"…
- ✅ `lang="en-US"`.
- ⚠️ Las URLs no tienen jerarquía (`/deep-cleaning/` en lugar de `/services/deep-cleaning/`) y hay erratas: `kristal-clear`, `carpert-cleaning`.
- ⚠️ Faltan alt en las imágenes de servicio (2–6 por página) y los nombres de archivo son genéricos.
- ❌ No hay breadcrumbs.
- ❌ No hay Open Graph ni Twitter Card: compartir el enlace en WhatsApp, Facebook o por SMS no muestra ninguna imagen.
- ⚠️ Errores de texto visibles: "Huntingtong", "Comercial Cleaning", "Carpert".

### C. Datos estructurados
- ❌ **No hay ningún JSON-LD** (ni LocalBusiness, ni Service, ni FAQPage, ni BreadcrumbList), aunque la home tiene 4 FAQ visibles.
- Para la web nueva: `HouseCleaningService`/`LocalBusiness` con `@id`, teléfono 631-759-8442, `areaServed` con las 12 localidades y `sameAs` con GBP `https://maps.google.com/?cid=71417083433304240`, Facebook e Instagram. **Las reseñas solo como texto, sin `AggregateRating`.**

### D. Rendimiento (Lighthouse, 12-11-2026)
Ver la tabla del §4. Causas principales:
- 6,3 MB por página y unas 75 imágenes en la home, **ninguna en WebP/AVIF** (ahorro estimado de 1,8 MB).
- 25 scripts y 46 hojas de estilo (Elementor + Royal + Happy + Premium Addons + Lottie + Trustindex + Site Kit + Google Ads): TBT de 6 s y 16,6 s de trabajo en el hilo principal.
- El servidor responde en 0,6–1,9 s (TTFB) y sirve **HTTP/1.1** (sin HTTP/2).
- Imágenes sin width/height y caché poco eficiente (ahorro estimado de 916 KB).

### E. Accesibilidad
- ⚠️ Lighthouse 94: contraste insuficiente, sin landmark `<main>` y enlaces no rastreables.
- ⚠️ El carrusel de reseñas se mueve solo; comprobar que tenga botón de pausa.

### F. Contenido y E-E-A-T
- ❌ Las páginas de servicio tienen 177–388 palabras, casi siempre listas de tareas. Para posicionar hacen falta 600–800 palabras útiles.
- ❌ **No hay páginas de ciudad**, aunque la web dice atender 12 localidades (Huntington, Cold Spring Harbor, Oyster Bay, Syosset, Melville, Dix Hills, Commack, Deer Park, Northport, Smithtown, Farmingdale, West Babylon).
- ⚠️ **Zonas contradictorias:** la FAQ y `/coming-soon/` dicen "primarily Huntington, Commack & Northport", el resto de la web da las 12. Confirmar con la clienta cuáles son reales.
- ⚠️ **Antigüedad contradictoria:** "+20 years", "two decades", "more than a decade" y reseñas que hablan de "18 years". Fijar un dato real (¿año de fundación?).
- ❌ Faltan los sinónimos del rubro: "maid service", "house cleaners", "housekeeping", "janitorial", "office cleaning" apenas aparecen.
- ⚠️ La dueña (Liza) aparece en muchas reseñas, pero la web no habla de ella. Es el mejor activo E-E-A-T y no se usa.
- ⚠️ Las fotos parecen de stock (oficina genérica en el hero). No hay fotos reales del equipo ni antes/después.
- ✅ Hay 4 FAQ útiles en la home (solo ahí).
- ❌ El NAP está incompleto: no hay dirección (normal si es un negocio de zona de servicio) y hay **2 teléfonos distintos** en el código.
- ❌ El email es `href="http://info@krystalclearny.com"`, que abre una web inexistente en lugar del correo.
- ⚠️ CTA: todos los botones ("Book Now!", "Free Quote Today") llevan a `/booking/` (Jobber). No hay barra móvil fija con Llamar/Texto. En móvil, la primera pantalla es solo una foto de stock, sin titular, teléfono ni botón.
- ❌ No hay política de privacidad ni términos en el footer, aunque se usan Google Ads (AW-17024712597) y Site Kit (GT-K822C3JW), que ponen cookies de terceros.

### G. GEO / AEO
- ❌ No hay llms.txt ni schema, y la entidad es poco clara: aparece como "Krystal Clear", "Krystal Clear Services", "Krystal Clear Cleaning Services" y "Kristal Clear".
- ⚠️ Faltan datos citables: precios orientativos, frecuencias (weekly/biweekly/monthly), duración de un servicio, qué incluye cada uno en forma de tabla, etc.
- ⚠️ No hay respuestas directas al inicio de cada sección.
- ⚠️ Probablemente no está indexada en Bing (ver A).
- ⏳ **Answer share: línea base sin medir.** Preguntas propuestas: "best house cleaning service in Huntington NY", "recommend 3 cleaning companies in Huntington Long Island", "post construction cleaning Huntington NY", "office cleaning company Huntington NY", "move out cleaning Commack NY", "maid service Northport NY", "deep cleaning Syosset", "who is Krystal Clear Services Huntington".

### H. Fuera de la web
- **Google Business Profile** ([ver en Maps](https://maps.google.com/?cid=71417083433304240)):
  - ✅ "Krystal Clear Services", **5.0★ con 34 reseñas**, categoría "House cleaning service", teléfono +1 631-759-8442 y enlace a la web.
  - ✅ Reserva en línea, 26 fotos, atributos "women-owned" y "Latino-owned", reseñas respondidas (incluida una comercial reciente de Z Automotive).
  - ⚠️ El widget de la web dice "Based on 19 reviews": está desactualizado.
  - ⚠️ Revisar las categorías secundarias (Commercial cleaning service, Janitorial service, Window cleaning service, Pressure washing service, Carpet cleaning service), que no se ven desde fuera.
  - ⚠️ El enlace a la web es `http://` y no lleva UTM.
- **Mapa (búsqueda desde fuera de NY, orientativo):**
  - "house cleaning service Huntington NY": **no aparece en el top 10**. Arriba están The Cleaning Authority (4.6/93), Miracle Workers (4.7/43), Romero (4.9/57), Molly Maid (5.0/106), Universal Maids (4.6/148), Dakin Spotless (5.0/49) y Go Perfect (5.0/29).
  - "commercial cleaning Huntington NY": **no aparece**. Arriba están EcoTec, Executive Cleaning, Jani-King y Stratus.
  - Hace falta un geo-grid real desde Huntington.
- **Directorios:**
  - Angi/HomeAdvisor tienen "**Krystal Clear Services**" en *24 Melville Road North, Huntington Station, NY 11746* (5.0, 6 reseñas) y otro "**Krystal Clear Cleaning Services, Inc.**" (4.9). Confirmar si los dos son de la clienta y unificar o reclamar.
  - La dirección de Angi no aparece en la web: ¿es real? ¿Es la dirección del GBP oculta?
  - Yelp y BBB no se pudieron verificar (Yelp bloquea el acceso automático). Pedirlos a la clienta.
- **Redes:** Facebook `krystalclearservicesny`, Instagram `krystalclearsc`. El usuario de Instagram no coincide con el de Facebook.
- **Requiere acceso de la clienta:** Search Console, GA4/Site Kit, Google Ads, GBP (insights, categorías, servicios, zonas), Jobber (de dónde vienen las solicitudes).

---

## 4. Lighthouse (12-11-2026, Lighthouse CLI)

| Página | Dispositivo | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | TBT | CLS | Peso |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Móvil | **31** | 94 | 69 | 85 | **19,4 s** | **6.020 ms** | 0 | 6,3 MB |
| Home | Escritorio | **37** | 95 | 73 | 85 | 6,8 s | 640 ms | 0 | 8,0 MB |
| Residential | Móvil | **36** | 94 | 69 | 85 | **14,1 s** | 1.900 ms | 0 | 2,2 MB |
| Residential | Escritorio | 60 | 93 | 73 | 85 | 3,9 s | 230 ms | 0 | 2,9 MB |

SEO 85 en todas por falta de meta description y enlaces no rastreables. Buenas prácticas 69–73 por errores en consola, cookies de terceros e imágenes de baja resolución. Meta para la web nueva: ≥ 90 / 100 / 100 / 100.

---

## 5. Competencia a vigilar
| Negocio | Reseñas | Lo que hace mejor |
| --- | --- | --- |
| Molly Maid of Huntington-West Suffolk | 5.0 / 106 | Franquicia, reserva online, dirección visible |
| Universal Maids | 4.6 / 148 | Volumen de reseñas |
| The Cleaning Authority – Huntington | 4.6 / 93 | Web de franquicia con páginas por servicio y ciudad |
| Romero House Cleaning | 4.9 / 57 | Negocio local con dirección |
| Dakin Spotless Cleaning | 5.0 / 49 | Zona de servicio, como Krystal |
| Jani-King / Stratus Clean (comercial) | 4.8 / 49–53 | Páginas de "janitorial" y "office cleaning" |

**Brecha principal:** con 34 reseñas, Krystal está a 15–110 de los líderes del mapa en residencial. La palanca más rápida son las reseñas más las categorías y servicios del GBP. La web nueva tiene que respaldarlas con páginas por servicio y ciudad.

---

## 6. Plan priorizado

**Ahora en la web actual (1–2 h, gran impacto):**
1. Arreglar el teléfono de la cabecera (`tel:6313347242` → el número correcto) y el email (`mailto:`).
2. Enlazar los 8 servicios desde `/services/` y desde la home.
3. Quitar `/coming-soon/`, la página de autor y las plantillas de Elementor del sitemap y del índice (noindex o borrarlas).
4. Corregir "Huntingtong", "Comercial" y "Carpert".
5. Actualizar o quitar el widget de "19 reviews".
6. Search Console: enviar el sitemap y pedir indexación de los 8 servicios. Darse de alta en Bing Webmaster (importando desde GSC).

**Web nueva (repo `krystalclear`):**
1. Estructura: `/`, `/about/`, `/services/` + `/services/{servicio}/` (8), `/areas/{ciudad}/` (solo las confirmadas) y `/services/{servicio}/{ciudad}/` solo donde haya demanda, más `/contact/`, `/privacy/` y `/faq/`.
2. Un H1 por página, titles con servicio + ciudad (p. ej. "House Cleaning in Huntington, NY | Krystal Clear Services") y meta descriptions.
3. Schema `HouseCleaningService` + `Service` + `FAQPage` + `BreadcrumbList`, con `sameAs` (GBP CID, Facebook, Instagram, Angi).
4. Hero móvil con titular, teléfono y botones **Llamar / Texto** (confirmar el canal), más barra móvil fija. Jobber como opción secundaria.
5. Rendimiento: web estática, imágenes AVIF/WebP y cero addons. Meta: Lighthouse ≥ 90 en móvil.
6. E-E-A-T: historia de Liza, año de fundación, fotos reales, antes/después, "insured & background-checked" y los atributos de mujer empresaria y empresaria latina.
7. GEO: llms.txt, FAQ con respuestas directas, tabla de qué incluye cada servicio, frecuencias y qué determina el precio.
8. Privacidad y aviso de cookies (Google Ads).
9. **301 desde todas las URLs viejas** (ver §8), activas el día del cambio.

**Fuera de la web:**
1. GBP: categorías secundarias, lista de servicios, zonas = web, UTM en el enlace, posts mensuales y fotos reales.
2. Reseñas: pedirlas en cada servicio (objetivo: más de 60 en 6 meses).
3. Unificar los listados de Angi y HomeAdvisor, y crear o reclamar Yelp, BBB, Bing Places, Apple Business Connect y Nextdoor con NAP idéntico.
4. Medir el answer share (línea base) en ChatGPT, Gemini, Perplexity y AI Overviews.

---

## 7. Preguntas para la clienta
1. ¿Cuál es el teléfono correcto, **631-759-8442** o **631-334-7242**? ¿Recibe mensajes de texto?
2. ¿De dónde vienen hoy los clientes (Google, referidos, Angi, Facebook) y por qué canal contactan (llamada, texto, Jobber)? ¿En qué idioma (inglés o español)?
3. ¿Qué zonas atiende de verdad? ¿Las 12 o sobre todo Huntington, Commack y Northport?
4. ¿Año de fundación exacto? ¿Más de 20 años?
5. ¿24 Melville Road North, Huntington Station es su dirección? ¿Quiere que se vea?
6. ¿Son suyos los dos listados ("Krystal Clear Services" y "Krystal Clear Cleaning Services, Inc.")? ¿Cuál es el nombre legal?
7. ¿Licencia, seguro, bonding o certificaciones (con número)?
8. ¿Hace de verdad alfombras, ventanas y power washing, o se subcontratan?
9. Acceso a: Search Console, GBP, Google Ads, Jobber, dominio y DNS.
10. Fotos reales del equipo y de trabajos, y testimonios con permiso.
11. ¿Perfiles en Yelp, BBB o Nextdoor?

---

## 8. Mapa de 301 (para la web nueva; ajustar a la estructura final)
| URL vieja | Destino propuesto |
| --- | --- |
| `/kristal-clear/` | `/about/` |
| `/services/` | `/services/` |
| `/booking/` | `/contact/` (o `/book/`) |
| `/residential-cleaning/` | `/services/house-cleaning/` |
| `/commercial-cleaning/` | `/services/commercial-cleaning/` |
| `/post-construction-cleaning/` | `/services/post-construction-cleaning/` |
| `/move-in-move-out/` | `/services/move-in-move-out-cleaning/` |
| `/deep-cleaning/` | `/services/deep-cleaning/` |
| `/carpert-cleaning/` | `/services/carpet-cleaning/` |
| `/windows-cleaning/` | `/services/window-cleaning/` |
| `/power-washing/` | `/services/power-washing/` |
| `/coming-soon/`, `/author/*`, `/elementor-hf/*`, `/feed/` | `/` (o 410) |
| `/wp-sitemap.xml`, `/sitemap.xml` | `/sitemap-index.xml` |
