# Publicar Krystal Clear en Cloudflare (sin tocar el correo)

Basado en el SOP probado con Nekoblue: Notion → HELICE → SEO → 02 — Operación y SOP → "SOP — Migrar dominio Namecheap + cPanel a Cloudflare sin afectar correo".

**Situación del dominio (consultada el 2026-11-19):**
- Nameservers: `dns1.namecheaphosting.com` y `dns2.namecheaphosting.com` (Namecheap con hosting cPanel).
- Web actual: WordPress en `66.29.132.212`; `www` es un CNAME a la raíz.
- Correo: MX `mx1/mx2/mx3-hosting.jellyfish.systems` y SPF `v=spf1 +a +mx +ip4:66.29.132.191 +ip4:66.29.132.211 include:spf.web-hosting.com ~all`. **No se toca.**
- Versión canónica: **sin www** (`https://krystalclearny.com`). Así está indexada hoy y así están los canonicals y el sitemap de la web nueva.

> **Cuenta propia del cliente.** Krystal Clear va en **su propia cuenta de Cloudflare**, creada con el correo del negocio (no en la cuenta de Helice ni junto a otros clientes). Cada cliente es dueño de su cuenta, su dominio y su repositorio; Helice entra como miembro invitado (Manage Account → Members) y se puede retirar cuando haga falta. Nekoblue solo sirve de **plantilla** de los pasos y archivos.

## 1. Proyecto en Cloudflare (ya se puede hacer)
0. Crear la cuenta de Cloudflare de Krystal Clear con el correo del negocio (lo hace Liza o se hace con ella; la contraseña y el código de verificación son suyos) e invitar a Helice como miembro.
1. En **esa cuenta**: **Workers & Pages → Create → Import a repository** → autorizar solo el GitHub `krystalclearsc` → repositorio `krystalclearsc/krystalclear`.
2. Nombre del proyecto: `krystalclear-website` (el mismo que en `wrangler.jsonc`).
3. Rama `main` · build command `npm run build` · deploy command `npx wrangler deploy`.
4. **No crear** la variable `SITE_INDEXABLE` todavía: sin ella la web sale con `noindex` y un `robots.txt` que bloquea todo. Así la URL temporal `*.workers.dev` no compite con la web vieja.
5. Abrir la URL `krystalclear-website.<cuenta>.workers.dev` y revisarla: 16 páginas, formulario de Jobber en `/contact/`, 404 propio.

Archivos que lo hacen posible: `wrangler.jsonc` (assets en `./dist`, 404 real, barra final), `public/_headers` (caché, seguridad y `noindex` para `*.workers.dev` / `*.pages.dev`), `public/_redirects` (301 desde la web vieja) y `.node-version` (Node 22).

## 2. Día del lanzamiento (con OK de Liza)
1. **Domains → Connect a domain** → `krystalclearny.com` → importar los DNS automáticamente.
2. Comparar uno por uno con cPanel → Zone Editor. Copiar los TXT que falten (DKIM `default._domainkey`, DMARC, etc.) **pegando el valor desde cPanel, sin transcribirlo**. Mantener MX, SPF, DKIM, DMARC, SRV.
3. Poner en **DNS only** (nube gris): `autoconfig`, `autodiscover`, `cpanel`, `cpcalendars`, `cpcontacts`, `ftp`, `mail`, `webdisk`, `webmail`, `whm`.
4. Borrar en Cloudflare **solo** los dos registros web viejos: `A krystalclearny.com → 66.29.132.212` y `CNAME www → krystalclearny.com`.
5. **Workers & Pages → krystalclear-website → Domains → Add Domain**: la raíz (subdominio vacío, Production) y `www` (Production).
6. Namecheap → Domain List → Manage → Nameservers → **Custom DNS** → los dos nameservers que asigne Cloudflare. Esperar a "Your domain is now protected by Cloudflare".
7. **Redirect Rule** (al revés que en Nekoblue, porque aquí manda la versión sin www): `https://www.krystalclearny.com/*` → `https://krystalclearny.com/${1}` · 301 · conservar query string.
8. **Settings → Build → Variables**: `SITE_INDEXABLE = true` → Retry deployment.

## 3. Comprobar en vivo el mismo día
```bash
for u in / /kristal-clear/ /booking/ /residential-cleaning/ /carpert-cleaning/ /move-in-move-out/ /wp-sitemap.xml; do curl -s -o /dev/null -w "$u -> %{http_code} %{redirect_url}\n" "https://krystalclearny.com$u"; done
```
- Las URLs viejas deben dar **301** a su página nueva, nunca 404.
- `robots.txt`, `sitemap-index.xml` y `llms.txt` responden 200, y `robots.txt` ya **no** dice `Disallow: /`.
- `www` y `http://` redirigen con 301 a `https://krystalclearny.com/`.
- Correo: enviar desde info@ a Gmail y responder (las dos direcciones llegan).
- Formulario de Jobber en `/contact/` envía.

## 4. Después
- Search Console: enviar `https://krystalclearny.com/sitemap-index.xml` y pedir indexación de la home, los 5 servicios y las 3 zonas.
- Bing Webmaster Tools (importar desde Search Console) e IndexNow.
- Google Business Profile: enlace a `https://krystalclearny.com/` con UTM y el mismo teléfono que la web.
