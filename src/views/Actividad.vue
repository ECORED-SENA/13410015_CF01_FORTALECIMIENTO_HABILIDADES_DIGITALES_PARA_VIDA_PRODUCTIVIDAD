<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión segura de información y recursos digitales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Fortalecer la comprensión sobre búsqueda, selección, organización, almacenamiento y protección de información digital, mediante la aplicación de buenas prácticas para gestionar recursos, dispositivos, redes y datos de manera segura y responsable.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué característica distingue principalmente a la información digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo puede conservarse en documentos impresos y medios físicos locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Puede crearse, almacenarse, modificarse y compartirse electrónicamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Debe permanecer sin cambios después de ser creada y almacenada siempre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Únicamente puede consultarse mediante computadores personales privados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuándo un dato aislado se transforma en información útil?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se organiza, interpreta y relaciona con un contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cuando se almacena sin alterar el contenido ni su contexto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando se comparte mediante plataformas y medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando se convierte automáticamente en un archivo de video.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento de calidad determina si la información contiene todos los datos necesarios?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La utilidad de contenidos digitales usados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La precisión de todos los datos analizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La fiabilidad de todas las fuentes citadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La integridad de la información disponible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una práctica adecuada para organizar archivos digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar todos los documentos dentro de una única carpeta principal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar nombres generales que puedan repetirse en diferentes archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplicar nombres claros y diferenciar las versiones de los archivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Eliminar fechas y códigos de los archivos con diferentes versiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta permite consultar información organizada y especializada bajo criterios definidos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un navegador para consultar distintos sitios de internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un buscador para ubicar páginas con palabras específicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una base de datos para consultar recursos especializados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una aplicación para guardar archivos en medios digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Para qué se utiliza el operador lógico AND en una búsqueda digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para excluir una palabra específica de todos los resultados encontrados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para localizar resultados que contengan simultáneamente varios términos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para buscar únicamente documentos con un formato específico de archivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para buscar información únicamente en un sitio web previamente definido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué característica constituye una señal de mayor confiabilidad de una fuente digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar autor, fecha y referencias que puedan verificarse.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Presentar títulos llamativos sin citar al autor del contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incluir publicidad junto a afirmaciones sin ninguna evidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Pedir datos personales innecesarios para consultar el recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe hacerse antes de reutilizar un recurso descargado de internet?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Modificarlo libremente porque se puede consultar en internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar créditos antes de modificar el recurso ya utilizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compartirlo si puede descargarse directamente sin contraseña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar su autoría, licencia y condiciones permitidas de uso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué caracteriza una adecuada gestión de la información digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar los archivos sin establecer criterios adecuados para su organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar, almacenar, proteger, consultar y recuperar los recursos digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Mantener únicamente una copia de todos los archivos considerados importantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compartir recursos mediante permisos abiertos para cualquier usuario externo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué ventaja caracteriza principalmente al almacenamiento en la nube?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Funciona siempre sin internet ni usar ningún servicio digital externo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elimina completamente los riesgos relacionados con permisos de acceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilita acceder a archivos desde diferentes dispositivos autorizados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Impide modificar los archivos después de haberlos guardado en la nube.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la finalidad principal de realizar copias de seguridad?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar que cada archivo deba organizarse mediante carpetas y subcarpetas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que cualquier usuario acceda libremente a información reservada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar las medidas de seguridad instaladas en todos los dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recuperar información cuando se pierde, elimina o altera accidentalmente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué práctica reduce un riesgo frecuente al utilizar dispositivos digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener actualizado el sistema y utilizar bloqueo de pantalla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Instalar aplicaciones obtenidas de cualquier fuente disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conectar memorias desconocidas sin hacer revisión de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compartir contraseñas cuando otras personas utilizan el equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica diferencia una red pública de una red privada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantiza mayor control sobre cada dispositivo conectado en una red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo permite conectarse a personas autorizadas por una organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presenta mayor exposición y requiere precaución con datos sensibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Resulta segura por completo cuando emplea una contraseña compartida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué riesgo puede presentarse al utilizar una red pública para actividades sensibles?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación automática de documentos guardados de forma local.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La posible interceptación de datos durante la conexión utilizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La actualización necesaria del sistema operativo del dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La creación automática de respaldos para cada archivo almacenado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué situación corresponde a una vulnerabilidad humana?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conservar actualizado el sistema operativo del dispositivo utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Configurar adecuadamente permisos de acceso de un archivo compartido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar bloqueo de pantalla cuando el equipo permanezca desatendido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Abrir enlaces sospechosos o compartir contraseñas con otras personas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué medida fortalece la protección de una cuenta digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar una contraseña segura y activar la verificación en dos pasos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Usar la misma contraseña personal en todos los servicios en línea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dejar sesiones abiertas en dispositivos que son de uso compartido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Guardar públicamente códigos utilizados para recuperar una cuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué situación corresponde a una huella digital activa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sitio registra automáticamente datos técnicos durante la consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una persona publica voluntariamente una fotografía en una plataforma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Una aplicación recopila ubicación aproximada sin publicar esos datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una plataforma almacena registros técnicos durante el acceso digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Ante la sospecha de que una cuenta digital fue comprometida, ¿qué acción inicial se debe realizar?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener la contraseña y esperar que el problema vuelva a ocurrir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar los archivos del dispositivo antes de revisar esa cuenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Publicar el incidente en redes antes de revisar la cuenta digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cambiar la contraseña de la cuenta afectada y revisar sus accesos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué práctica contribuye a proteger la reputación y la información personal en línea?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Publicar datos personales para facilitar identificación en plataformas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aceptar todos los permisos solicitados por las aplicaciones instaladas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Decidir qué información compartir, con quién y mediante qué plataforma.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Compartir código de verificación con contactos considerados confiables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe incluir un plan básico de mitigación de riesgos digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar riesgos, establecer medidas y definir acciones de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar todas las herramientas digitales utilizadas en las actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permitir accesos generales para simplificar toda gestión de información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aplicar medidas únicamente después de que ocurra un incidente muy grave.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
