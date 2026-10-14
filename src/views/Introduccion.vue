<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          p La información digital hace parte de las actividades personales, académicas, laborales y sociales. Documentos, imágenes, formularios, correos electrónicos, plataformas y servicios digitales contienen datos y recursos que requieren una gestión adecuada. Por esta razón, no basta con acceder a la información; también es necesario seleccionarla, organizarla, almacenarla y protegerla de acuerdo con su finalidad y nivel de importancia.
          .caja-1(data-aos="zoom-in").mb-3
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 400px").m-auto
              .col-xl.caja-1_p
                p.mb-0 El manejo responsable de la información requiere reconocer la relación entre datos e información y aplicar criterios que permitan valorar su calidad. Asimismo, los procesos de búsqueda deben facilitar la selección de fuentes pertinentes y confiables, así como el reconocimiento de la autoría y de las condiciones establecidas para el uso de los recursos digitales.
          p.mb-0 La gestión de información también comprende su organización, almacenamiento, recuperación y protección. Estas prácticas favorecen la disponibilidad de los archivos, facilitan el trabajo individual y colaborativo y disminuyen los riesgos asociados con la pérdida, duplicidad, desactualización o acceso no autorizado. Además, el uso de dispositivos y redes requiere adoptar medidas que contribuyan a mantener condiciones adecuadas de seguridad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 En este contexto, la seguridad digital permite fortalecer la protección de cuentas, dispositivos, archivos y datos personales frente a diferentes riesgos y amenazas. El componente formativo integra prácticas de prevención, protección y mitigación orientadas al uso responsable de los recursos tecnológicos y al desarrollo de hábitos que favorezcan una gestión segura de la información en los entornos digitales.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
