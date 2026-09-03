# corpora-site

Web de **Corpora**, línea de formaciones en salud para empresas. Sitio estático en GitHub Pages
sobre `corpora.cat`, bilingüe castellano y català.

## Qué es Corpora

Formaciones en salud para empresas, impartidas desde la fisioterapia y la docencia universitaria.
Las imparte **Irene Martínez**. Catálogo en tres bloques: ergonomía y cuerpo en el trabajo, salud
de la mujer en el trabajo, y longevidad y rendimiento.

- **Titular legal: Next Gen Academy SL** (CIF B44861649). El footer dice "Servicio de Next Gen
  Academy SL"
- **Nunca mencionar Infinite Labs en este sitio.** El acuerdo de julio de 2026 impide dirigir esa
  marca al mercado español, y el cliente de Corpora es español y catalán
- Comprador: RRHH, prevención de riesgos y responsables de bienestar de empresas catalanas
- Vía de financiación del cliente: formación **bonificable por FUNDAE**

## Arquitectura

Estático puro. **No hay build, ni dependencias, ni framework, y así debe seguir.**

| Ruta | Qué es |
|---|---|
| `index.html` | Castellano, versión canónica, servida en `/` |
| `ca/index.html` | Català, servida en `/ca/` |
| `assets/css/site.css` | Estilos, **compartidos por los dos idiomas** |
| `assets/js/site.js` | Formulario de contacto, **compartido**, con textos en ambos idiomas |
| `assets/img/` | Fotografías, **compartidas** |

Reglas de la arquitectura:

- **CSS, JS e imágenes se comparten. Solo el texto se duplica.** Si un cambio toca estructura o
  estilo, va en los assets compartidos, nunca copiado en los dos HTML
- **Rutas de assets siempre absolutas** (`/assets/...`), para que funcionen igual desde `/` y
  desde `/ca/`
- **Todo cambio de contenido se aplica a los dos idiomas.** Un HTML no puede quedarse atrás
- **Nada de CDNs de JavaScript ni analytics de terceros** sin decidirlo antes. Google Fonts ya
  está y es la única excepción

## Al editar

- **Sin em-dashes** en ningún texto, ni en copy ni en código. Guion normal siempre
- Registro del copy: **profesional y sobrio**. El comprador es un departamento de RRHH, no un
  cliente de wellness. Nada de lenguaje new-age
- Mantener `hreflang`, `canonical` y el selector de idioma coherentes al tocar el `<head>`
- Las fotos, entre 35 y 75 KB. No subir originales de cámara sin redimensionar
- Probar con `python3 -m http.server 8000`, no abriendo el fichero a pelo: las rutas absolutas
  necesitan servidor

## No tocar

- **`CNAME` y `.nojekyll`.** Un push sin `CNAME` tumba el dominio propio
- **El dominio en Settings → Pages.** Quitarlo y volver a ponerlo rompe el sitio y borra el
  `CNAME` del repo. Si ocurre, se arregla con un push que fuerce el rebuild

## Estado

- `hola@corpora.cat` **todavía no existe**: crear el buzón antes de dar difusión al sitio
- Faltan aviso legal y política de privacidad
- `www.corpora.cat` no tiene certificado; el dominio sin `www` sí. Repartir siempre sin `www`

## Publicar

`git push` a `main`. Pages redespliega solo.
