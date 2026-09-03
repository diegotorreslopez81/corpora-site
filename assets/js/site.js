/**
 * Corpora · comportamiento compartido por las dos versiones de idioma.
 *
 * El sitio es estático y no tiene backend, así que el formulario de contacto
 * compone un correo con los datos y abre el cliente del visitante. Cuando haya
 * volumen conviene sustituirlo por un endpoint real: ver README.
 */
(function () {
  'use strict';

  /** Textos por idioma. La clave sale del atributo lang del <html>. */
  var TEXTOS = {
    es: {
      faltan: 'Indique al menos su nombre y un correo de contacto.',
      abriendo: 'Se abrirá su cliente de correo con la solicitud redactada.',
      asunto: 'Solicitud de propuesta',
      nombre: 'Nombre y organización',
      correo: 'Correo de contacto',
      formacion: 'Formación de interés',
      contexto: 'Perfil del equipo y contexto',
      sinDetallar: '(sin detallar)'
    },
    ca: {
      faltan: 'Indiqui almenys el seu nom i un correu de contacte.',
      abriendo: "S'obrirà el seu client de correu amb la sol·licitud redactada.",
      asunto: 'Sol·licitud de proposta',
      nombre: 'Nom i organització',
      correo: 'Correu de contacte',
      formacion: 'Formació d’interès',
      contexto: 'Perfil de l’equip i context',
      sinDetallar: '(sense detallar)'
    }
  };

  var DESTINO = 'hola@corpora.cat';

  function t() {
    var lang = (document.documentElement.lang || 'es').slice(0, 2);
    return TEXTOS[lang] || TEXTOS.es;
  }

  function valor(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function conectarFormulario() {
    var boton = document.querySelector('[data-enviar]');
    if (!boton) return;

    var aviso = document.querySelector('[data-aviso]');
    var txt = t();

    function mostrar(mensaje) {
      if (!aviso) return;
      aviso.textContent = mensaje;
      aviso.hidden = false;
    }

    boton.addEventListener('click', function () {
      var nombre = valor('nom');
      var correo = valor('mail');

      if (!nombre || !correo) {
        mostrar(txt.faltan);
        return;
      }

      var cuerpo = [
        txt.nombre + ': ' + nombre,
        txt.correo + ': ' + correo,
        txt.formacion + ': ' + valor('form'),
        '',
        txt.contexto + ':',
        valor('msg') || txt.sinDetallar,
        ''
      ].join('\n');

      mostrar(txt.abriendo);
      window.location.href = 'mailto:' + DESTINO +
        '?subject=' + encodeURIComponent(txt.asunto + ' - ' + nombre) +
        '&body=' + encodeURIComponent(cuerpo);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', conectarFormulario);
  } else {
    conectarFormulario();
  }
})();
