# Pendiente de aprobar por Liza (no publicar sin esto)

| # | Dato | Qué hay ahora en la web nueva | Fuente / conflicto |
| --- | --- | --- | --- |
| 1 | **Teléfono** | (631) 759-8442 (en `src/config/site.ts` y en `public/og-default.jpg`) | GBP y web actual: 759-8442 · Notion "teléfono de trabajo": 334-7242. ¿Cuál? ¿Recibe textos (SMS)? |
| 2 | Email público | info@krystalclearny.com | Notion dice krystalclearsc@gmail.com |
| 3 | Dirección | No se publica | 24 Melville Rd N, Huntington Station (Notion, Angi). El GBP la oculta. ¿Es residencial? |
| 4 | "Insured and background-checked" | Visible en hero, proceso y FAQ | Lo dice la web actual. Confirmar por escrito (¿bonded?, ¿número de póliza?) |
| 5 | Zonas | 13 localidades; páginas propias solo para Huntington Station, Commack y Northport | Confirmar cuáles atiende de verdad y dónde quiere crecer |
| 6 | Servicios extra | Alfombras, ventanas y power washing **no** aparecen | La web vieja tenía páginas; Notion lista solo 4 servicios. ¿Se ofrecen? |
| 7 | Retrato de Liza | Se usa la foto "Founder" de la web actual | Confirmar que es una foto real y autorizada |
| 8 | Idiomas | Schema: solo inglés | ¿Atienden también en español? |
| 9 | Reseñas recientes | Faltan el texto original (inglés) de las de Paul M. (oficinas), Tracy S. y Diana C. | Solo se capturaron traducidas |
| 10 | Horario | No se publica | GBP: abre 8 a. m. Confirmar el horario completo |
| 11 | Formulario | `/contact/` carga el formulario de Jobber | ¿Sigue usando Jobber? |
| 12 | De dónde vienen los clientes y en qué idioma | — | Decide prioridades de páginas y anuncios |
| 13 | About: historia | Se quitó el recuadro visible; falta el dato | Año de fundación, cómo empezó Liza, tamaño del equipo, una frase suya |
| 14 | Privacy policy | Dice que aún no hay analítica ni ads; actualizar al activarlos | Qué herramientas habrá en la web en vivo (GA4, Google Ads, Meta Pixel) |
| 15 | Alfombras / ventanas / power washing | Las URLs viejas redirigen (301) a Deep cleaning o /services/ | Si Liza los confirma, se crean páginas propias y se cambian esas 301 |
| 16 | Zonas sin página | Dix Hills, Melville, Syosset, Smithtown, etc. solo listadas | Crear página cuando Search Console o Liza muestren demanda real |
| 17 | Indexación | `netlify.toml` tiene SITE_INDEXABLE="false" en producción | Cambiar a "true" el día que krystalclearny.com apunte a Netlify y probar las 301 en vivo |
