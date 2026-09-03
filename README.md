# corpora-site

Web de **Corpora**, la línea de formaciones en salud para empresas de Next Gen Academy SL.

- Producción: **https://corpora.cat** (castellano) y **https://corpora.cat/ca/** (català)
- Hosting: GitHub Pages, rama `main`, raíz del repo. Cada `git push` redespliega solo

## Estructura

Sitio estático. **No hay build, ni dependencias, ni framework.** Se editan los HTML y ya.

```
index.html            Versión en castellano (canónica)
ca/index.html         Versión en català
assets/
  css/site.css        Hoja de estilos, compartida por los dos idiomas
  js/site.js          Formulario de contacto, compartido
  img/*.jpg           Fotografías, compartidas
CNAME                 Dominio propio que lee GitHub Pages. NO BORRAR
.nojekyll             Evita que Pages procese el HTML con Jekyll. NO BORRAR
```

**Los dos idiomas comparten CSS, JS e imágenes.** Lo único que se duplica es el texto, que por
definición tiene que ser distinto. Las rutas de assets son absolutas (`/assets/...`) para que
funcionen igual desde `/` y desde `/ca/`.

## Cómo editar

### Cambiar un texto

Busca la frase en `index.html` (castellano) o en `ca/index.html` (català) y cámbiala.
**Si el cambio afecta al contenido, hazlo en los dos ficheros**, o quedarán descuadrados.

### Cambiar un color, un tamaño o un espaciado

Todo está en `assets/css/site.css`. Los colores viven en variables al principio del fichero.

### Cambiar una foto

1. Deja el fichero nuevo en `assets/img/` con un nombre descriptivo en minúsculas y guiones
2. Cambia la ruta en los dos HTML
3. Borra la foto antigua si ya no la usa nadie

Las fotos son JPEG y pesan entre 35 y 75 KB. **Mantén ese orden de magnitud**: una foto de 3 MB
subida tal cual del móvil hace que la página tarde en cargar.

### Ver los cambios antes de publicar

```sh
python3 -m http.server 8000
```

Y abre http://localhost:8000. Hace falta servidor: abrir el fichero con doble clic rompe las
rutas absolutas de los assets.

## Publicar

```sh
git add -A
git commit -m "Descripción corta de lo que cambia"
git push
```

Tarda entre 30 segundos y 2 minutos en verse en https://corpora.cat.

## El formulario de contacto

**Es un `mailto`, no un backend.** Al pulsar "Enviar la solicitud" se compone un correo a
`hola@corpora.cat` con los campos rellenados y se abre el cliente de correo del visitante.
La lógica está en `assets/js/site.js`, con los textos en los dos idiomas.

Limitaciones mientras siga así:

- Si el visitante no llega a enviar el correo, **ese contacto se pierde y no queda registro**
- No funciona bien en quien no tenga cliente de correo configurado
- No hay medición de conversión

Cuando la línea tenga volumen, sustituirlo por un endpoint propio.

## Pendientes

- [ ] **Crear el buzón `hola@corpora.cat`.** Sin él, el formulario no sirve de nada
- [ ] Aviso legal y política de privacidad. Obligatorio por LSSI-CE y RGPD
- [ ] Sustituir el `mailto` por un endpoint real
- [ ] `https://www.corpora.cat` no tiene certificado: GitHub solo lo emitió para el dominio sin
      `www`. Repartir siempre el enlace sin `www`

## Reglas

- **No borrar `CNAME` ni `.nojekyll`.** Un push sin `CNAME` tumba el dominio propio
- **No tocar el dominio en Settings → Pages.** Quitarlo y volver a ponerlo rompe el sitio y
  borra el `CNAME` del repo. Si pasa, se arregla con un push que fuerce el rebuild
- **Sin em-dashes** en ningún texto, ni en el copy ni en el código. Guion normal siempre
- **Nunca mencionar Infinite Labs.** El titular visible es Next Gen Academy SL

## Referencias

- Proyecto, marca y catálogo: `~/dev/corpora`
- Administración de la sociedad: `~/dev/nga-ops`
