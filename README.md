# corpora-site

Landing de **Corpora**, la línea de formaciones en salud para empresas de Next Gen Academy SL.

- Producción: https://corpora.cat
- Hosting: GitHub Pages, rama `main`, raíz del repo
- Dominio: `corpora.cat`, registrado el 02/09/2026

## Estructura

Sitio estático de un solo fichero. No hay build ni dependencias.

| Fichero | Para |
|---|---|
| `index.html` | La página entera: markup, estilos y el script del formulario |
| `CNAME` | Dominio propio que lee GitHub Pages. No borrar |
| `.nojekyll` | Evita que Pages procese el HTML con Jekyll |

## Publicar un cambio

```sh
git add -A && git commit -m "..." && git push
```

Pages redespliega solo. Tarda entre 30 segundos y 2 minutos.

## Formulario de contacto

**Es un `mailto`, no un backend.** Al pulsar "Enviar la solicitud" se compone un correo a
`hola@corpora.cat` con los campos rellenados y se abre el cliente de correo del visitante.

Limitaciones que hay que aceptar mientras siga así:

- No hay registro de los envíos. Si el visitante no llega a enviar el correo, ese lead se pierde
- No funciona bien en visitantes sin cliente de correo configurado (webmail en algunos navegadores)
- No hay medición de conversión

Cuando la línea tenga volumen, sustituir por un endpoint propio. Sitio estático más función
serverless, o un endpoint en el VPS6 que ya sirve `books.77delta.com`.

## Pendientes

- [ ] Crear el buzón `hola@corpora.cat`. **Sin esto el formulario no sirve de nada**
- [ ] Aviso legal y política de privacidad. Obligatorio por LSSI-CE y RGPD si se recogen datos
- [ ] Sustituir el `mailto` por un endpoint real
- [ ] Decidir versión en catalán. El dominio es `.cat` y el cliente objetivo es catalán

## Referencias

- Sociedad y footer legal: `~/dev/INFINITE_LABS_CORP.md`
- Administración de NGA: `~/dev/nga-ops`
