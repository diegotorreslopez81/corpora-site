# corpora-site

Landing de **Corpora**, línea de formaciones en salud para empresas. Sitio estático en GitHub Pages
sobre `corpora.cat`.

## Qué es Corpora

Formaciones en salud para empresas, impartidas desde la fisioterapia y la docencia universitaria.
Catálogo en tres bloques: ergonomía y cuerpo en el trabajo, salud de la mujer en el trabajo, y
longevidad y rendimiento.

- **Titular legal: Next Gen Academy SL** (CIF B44861649). El footer dice "Servicio de Next Gen Academy SL"
- **Nunca mencionar Infinite Labs en este sitio.** El acuerdo de julio de 2026 impide dirigir esa
  marca al mercado español, y el cliente de Corpora es español y catalán
- Mercado objetivo: empresas catalanas. Cliente comprador: RRHH, prevención de riesgos y bienestar
- Vía de financiación del cliente: formación bonificable por FUNDAE

## Reglas de la web

- **Un solo fichero.** Todo vive en `index.html`: markup, estilos y script. No meter build,
  ni framework, ni dependencias, salvo que haya una razón concreta
- **Nada de recursos externos** más allá de Google Fonts, que ya está. Sin CDNs de JS ni analytics
  de terceros sin decidirlo antes
- **No borrar `CNAME` ni `.nojekyll`.** Un push sin `CNAME` tumba el dominio propio
- **Sin em-dashes** en ningún texto, ni en copy ni en código. Guion normal siempre
- Registro del copy: profesional y sobrio. El comprador es un departamento de RRHH, no un
  cliente de wellness. Nada de lenguaje new-age

## Formulario

Es un `mailto` compuesto por JS, no un backend. Detalle y limitaciones en el README.
`hola@corpora.cat` **todavía no existe**: crear el buzón antes de dar difusión al sitio.

## Publicar

`git push` a `main`. Pages redespliega solo.
