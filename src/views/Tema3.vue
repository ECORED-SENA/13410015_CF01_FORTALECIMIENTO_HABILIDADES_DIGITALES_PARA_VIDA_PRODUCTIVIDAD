<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Gestión, almacenamiento y recuperación de información
      p.mb-5 La gestión de información digital requiere establecer criterios que permitan mantener los archivos organizados, disponibles y protegidos durante su uso. Una gestión adecuada facilita la localización de recursos, evita confusiones entre versiones y favorece la continuidad de las actividades frente a pérdidas, eliminaciones accidentales o fallas técnicas. En este tema se presentarán los elementos que permiten organizar, almacenar y recuperar la información digital de manera adecuada.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Protocolos de gestión de información digital
      p.mb-5 Un protocolo de gestión de información digital establece criterios para organizar, almacenar, compartir, actualizar y recuperar archivos, con el fin de mantener su control y evitar pérdidas, duplicidades o versiones incorrectas. Su nivel de detalle varía según el contexto y puede incluir carpetas, respaldos, permisos, versiones y procedimientos de recuperación.
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Para establecer un protocolo adecuado, conviene considerar las siguientes preguntas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué información se debe guardar? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Dónde se debe almacenar? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Con qué nombre se debe identificar? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Quién puede acceder a la información? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cada cuánto debe actualizarse? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué información requiere copia de seguridad? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se recupera un archivo eliminado o dañado? 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué información debe eliminarse cuando ya no es necesaria?
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los principales elementos que conforman un protocolo de gestión son:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img2.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Clasificación
                p.mb-0.text-center Define cómo se agrupan los archivos de acuerdo con criterios como tema, fecha, proceso, área o tipo de recurso.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img3.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Nomenclatura
                p.mb-0.text-center Establece reglas para identificar archivos y carpetas mediante nombres claros, coherentes y comprensibles.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Almacenamiento
                p.mb-0.text-center Determina dónde se conservará la información, por ejemplo, en el equipo local, un servidor, la nube o un dispositivo externo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Acceso
                p.mb-0.text-center Define quién puede consultar, editar, descargar o compartir los archivos según la necesidad y el nivel de autorización.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Respaldo
                p.mb-0.text-center Establece cuándo y cómo se realizarán copias de seguridad de la información importante.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Recuperación
                p.mb-0.text-center Define las acciones que deben realizarse cuando un archivo se pierde, se elimina o resulta dañado.
      p.mb-5 La aplicación de estos elementos en una situación concreta se presenta en el siguiente ejemplo:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p La utilidad de un protocolo puede comprenderse mediante una situación sencilla:
            p En una actividad académica se establece que todos los documentos deben almacenarse en una carpeta principal. Los archivos en elaboración incluyen la palabra “borrador”, las versiones revisadas incorporan un número de versión y los documentos aprobados se guardan en una carpeta específica de versiones finales.
            p.mb-0 Esta estructura facilita localizar cada recurso y disminuye las confusiones entre archivos similares.
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Para mantener una gestión constante y organizada, se recomiendan las siguientes prácticas:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Crear una estructura inicial antes de almacenar los archivos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar nombres claros, breves y relacionados con el contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar conservar información importante únicamente en el escritorio del equipo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Separar documentos en elaboración, revisión y versión final. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar periódicamente archivos duplicados o innecesarios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Definir qué información se almacena localmente y cuál se conserva en la nube. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Proteger los archivos o carpetas que contengan información personal o sensible. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar respaldos de los documentos importantes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificar los permisos antes de compartir archivos con otras personas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 500px").m-auto
      p.mb-0 La gestión resulta más efectiva cuando se aplica de manera constante desde el inicio de una actividad y no únicamente cuando los archivos ya se encuentran acumulados.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Organización mediante carpetas, etiquetas y nombres de archivo
      p La organización digital se apoya en carpetas, etiquetas y nombres de archivo para clasificar y localizar la información con facilidad. Una estructura funcional debe ser clara y equilibrada, evitando tanto el exceso de carpetas como la concentración de todos los archivos en una sola ubicación.
      p.mb-5 Los principales recursos para organizar información digital son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img10.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Carpetas").ajuste-cajaAcordion.ajuste-vineta
              p Las carpetas agrupan archivos y permiten establecer una estructura jerárquica según la finalidad de la información. Una carpeta principal puede contener subcarpetas para organizar diferentes tipos de recursos.
              p #[b Ejemplo:] Gestión de información digital
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Fuentes consultadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Documentos de trabajo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Recursos gráficos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Evidencias. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Versiones finales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Copias de seguridad. 
              p.mb-3 Esta organización ayuda a diferenciar los archivos según su función y facilita su localización cuando se requiere consultar o entregar un recurso específico.
            .row(titulo="Etiquetas").ajuste-cajaAcordion.ajuste-vineta
              p Las etiquetas son palabras o categorías asignadas a archivos, correos, notas u otros recursos para facilitar su búsqueda sin modificar su ubicación.
              p Un mismo archivo puede asociarse, por ejemplo, con “seguridad digital”, “datos personales” y “actividad práctica”, lo que permite localizarlo mediante diferentes criterios.
              p.mb-3 Para mantener su utilidad, las etiquetas deben ser claras y consistentes; utilizar varias denominaciones similares para una misma categoría puede dificultar la búsqueda. 
            .row(titulo="Nombres de archivo").ajuste-cajaAcordion.ajuste-vineta
              p Los nombres de archivo deben facilitar la identificación del contenido y permitir diferenciar versiones cuando resulte necesario. Pueden incorporar:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Tema o asunto principal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Tipo de documento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Fecha de creación o actualización. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Versión del archivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Responsable o grupo, cuando aplique. 
              p #[b Ejemplo:] Guia_busqueda_informacion_v1_2026-03-10.docx
              p.mb-3 El nombre permite identificar el tipo de documento, el tema, la versión y la fecha correspondiente. 
      p.mb-5 La siguiente comparación permite identificar prácticas que favorecen nombres claros y descriptivos:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Ejemplos de nombres de archivo
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nombre no recomendado
                      th.texto-left Nombre recomendado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold documento.docx
                      td.texto-left Informe_gestion_informacion_2026.docx
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold final_final_ahora_si.pdf
                      td.texto-left Guia_seguridad_digital_version_final.pdf
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold imagen1.png
                      td.texto-left Infografia_copias_seguridad.png
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold trabajo nuevo.xlsx
                      td.texto-left Registro_recursos_digitales_grupo1.xlsx
          p.mb-5 Un nombre debe ser suficientemente descriptivo sin resultar excesivamente largo. También conviene evitar caracteres especiales innecesarios, como signos de interrogación, asteriscos o barras, que pueden ocasionar dificultades al trasladar archivos entre plataformas.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Estas prácticas favorecen una organización clara y constante de los recursos:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Definir una estructura de carpetas antes de iniciar una actividad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Usar la misma lógica de organización durante todo el proceso.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Nombrar archivos de forma descriptiva.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Incluir fechas cuando existan varias versiones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Usar etiquetas para clasificar información transversal.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Eliminar copias innecesarias después de validar la versión correcta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Guardar los archivos finales en una carpeta específica.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar mezclar documentos personales, académicos y laborales en una misma ubicación.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Revisar periódicamente la organización de la información.
              p.mb-0 Una organización coherente disminuye errores, facilita la gestión de evidencias y contribuye a mejorar la productividad.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img11.png', alt='').m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Tipos de almacenamiento: local, dispositivos físicos y nube
      p El almacenamiento digital permite conservar archivos, datos y recursos en medios tecnológicos para utilizarlos posteriormente. La elección del medio depende de factores como volumen de información, necesidad de acceso, seguridad, disponibilidad de conexión y relevancia de los archivos.
      p.mb-5 Los principales tipos de almacenamiento se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento local
                  p La información se conserva directamente en el computador, celular, tableta u otro dispositivo utilizado.
                  p #[b Ventajas:] acceso rápido, disponibilidad inmediata y posibilidad de trabajar sin conexión.
                  p.mb-0 #[b Limitaciones:] capacidad restringida y riesgo de pérdida por daño, robo, fallas del equipo o #[i malware].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Dispositivos físicos externos
                  p Incluyen memorias USB, discos duros externos, tarjetas de memoria y unidades de estado sólido.
                  p #[b Ventajas:] permiten trasladar archivos y conservar copias fuera del dispositivo principal.
                  p.mb-0 #[b Limitaciones:] pueden extraviarse, dañarse o infectarse al conectarse a equipos inseguros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento en la nube
                  p Permite guardar archivos en servidores accesibles mediante internet y utilizarlos desde diferentes dispositivos.
                  p facilita el acceso remoto, la sincronización y el trabajo colaborativo.
                  p.mb-0 depende de la conexión, la seguridad de la cuenta, los permisos configurados y la capacidad disponible.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
      p No existe una única modalidad adecuada para todos los casos. La selección depende del tipo de información, su importancia y la forma en que debe utilizarse.
      p.mb-5 La conveniencia de combinar diferentes opciones de almacenamiento puede comprenderse mediante el siguiente ejemplo:
      .caja-2.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            h5 Ejemplo aplicado
            p.mb-0 Un documento importante puede conservarse en el computador para facilitar el trabajo diario, respaldarse en un servicio en la nube para permitir su recuperación y mantenerse también en un dispositivo externo como copia adicional.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 500px").m-auto
      p.mb-0 Combinar diferentes opciones reduce la dependencia de una única ubicación y disminuye el riesgo de pérdida de información.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Copias de seguridad, acceso, recuperación y protección de archivos
      p.mb-5 Las copias de seguridad, el control de acceso, la recuperación y la protección forman parte de una gestión segura de los archivos. En conjunto, estas prácticas permiten disminuir el impacto de eliminaciones accidentales, fallas técnicas, accesos no autorizados, modificaciones indebidas o pérdida de información. Los conceptos esenciales para mantener la información disponible y protegida son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Copias de seguridad
                  p.mb-0 Son duplicados de información importante creados para facilitar su recuperación cuando ocurre una pérdida, eliminación, daño o falla. Deben realizarse de manera preventiva y periódica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso
                  p.mb-0 Corresponde a los permisos que determinan quién puede consultar, modificar, descargar, compartir o administrar un archivo. Los niveles de acceso deben asignarse según la necesidad y el rol correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recuperación
                  p.mb-0 Consiste en restaurar archivos que han sido eliminados, modificados, dañados o perdidos mediante opciones como papelera, versiones anteriores, respaldos o almacenamiento en la nube.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección
                  p.mb-0 Busca prevenir pérdida, acceso no autorizado, modificaciones indebidas o exposición de información mediante medidas acordes con el nivel de sensibilidad del archivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
      p El desarrollo detallado de los tipos de copia de seguridad, niveles de acceso, opciones de recuperación y medidas de protección se abordará en el documento complementario.
      p.mb-5 Para profundizar en las prácticas de respaldo, control de acceso, recuperación y protección de archivos, se recomienda consultar el siguiente documento:
      .caja-3.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Copias de seguridad, acceso, recuperación y protección de archivos
            p.mb-0 Consulte el documento #[b “Anexo 2. Copias de seguridad, acceso, recuperación y protección de archivos”] y profundice sobre respaldo, permisos de acceso, recuperación y protección de archivos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Seguridad_Proteccion_Archivos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
