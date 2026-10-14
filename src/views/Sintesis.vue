<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre la gestión segura de información y recursos digitales, organizado en seis temas principales. El primero aborda la información digital, los datos, su organización y los criterios de calidad: utilidad, fiabilidad, precisión e integridad. El segundo reúne la búsqueda, selección y validación de recursos digitales mediante navegadores, buscadores, bases de datos, palabras clave, operadores lógicos, filtros y criterios de procedencia, autoría, confiabilidad y licenciamiento. El tercero comprende la gestión, almacenamiento y recuperación de información mediante protocolos, carpetas, etiquetas, nombres de archivo, almacenamiento local, dispositivos físicos, nube, copias de seguridad y mecanismos de recuperación y protección. El cuarto integra los dispositivos digitales, sus funciones, el uso para gestionar información, las redes públicas y privadas y los riesgos asociados. El quinto desarrolla la seguridad digital, los riesgos y amenazas, las vulnerabilidades, las contraseñas, los procedimientos de seguridad, la huella digital, la reputación en línea y la protección de la información personal. El sexto aborda la normatividad digital, los delitos informáticos, las prácticas comunes de ataque, las herramientas de protección y el plan básico de mitigación de riesgos.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
