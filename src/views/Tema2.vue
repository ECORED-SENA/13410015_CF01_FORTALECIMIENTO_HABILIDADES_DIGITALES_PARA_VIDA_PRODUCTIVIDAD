<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Búsqueda, selección y validación de recursos digitales
      p.mb-5 La búsqueda de información digital permite acceder a contenidos y recursos disponibles en internet y en plataformas especializadas. Para que este proceso resulte útil, no basta con localizar información; también es necesario aplicar criterios que permitan seleccionar recursos pertinentes, confiables y adecuados para la finalidad prevista. En este tema se presentan los elementos que orientan una búsqueda, selección y validación responsable de recursos digitales.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Herramientas de búsqueda de información: navegadores, buscadores y bases de datos
      p Las herramientas de búsqueda permiten acceder y localizar contenidos en sitios web, repositorios, bibliotecas digitales, plataformas educativas y bases de datos. Aunque navegadores, buscadores y bases de datos suelen utilizarse de manera relacionada, cada uno cumple una función diferente dentro del proceso de consulta.
      p.mb-5 Las principales herramientas de búsqueda y acceso a información se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Navegadores
                  p Permiten acceder a sitios web, documentos, plataformas, formularios, correos electrónicos y otros recursos en línea. Su uso requiere comprobar la dirección de los sitios y evitar páginas o descargas sospechosas.
                  p.mb-0 #[b Ejemplo:] ingresar a una biblioteca virtual o plataforma educativa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Buscadores
                  p Permiten localizar información mediante palabras, frases o preguntas. Sus resultados pueden incluir páginas, documentos, imágenes, videos o noticias, pero su posición no garantiza calidad o confiabilidad.
                  p.mb-0 #[b Ejemplo:] buscar recursos sobre seguridad digital.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bases de datos
                  p Organizan información y permiten consultarla mediante criterios definidos. Pueden contener artículos, normas, estadísticas, informes u otros recursos especializados.
                  p.mb-0 #[b Ejemplo:] localizar documentos técnicos, académicos o normativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La herramienta debe seleccionarse según el tipo de información requerida. Para consultas generales puede utilizarse un buscador; para documentos oficiales, una fuente institucional; y para información académica, técnica o normativa, una base de datos o repositorio especializado.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Palabras clave, operadores lógicos y filtros de búsqueda
      p.mb-5 Las palabras clave representan los términos principales de una necesidad de búsqueda. Su formulación adecuada permite delimitar el tema y reducir resultados poco pertinentes. Una consulta demasiado general puede recuperar información de distintos contextos, mientras que una combinación más específica facilita obtener contenidos relacionados con la necesidad planteada. La importancia de formular palabras clave precisas puede comprenderse mediante el siguiente ejemplo aplicado:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img4.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 La palabra #[b “seguridad”] puede recuperar información sobre seguridad física, vial, industrial o informática. Una consulta como #[b “seguridad digital protección de datos personales”] delimita el contexto y favorece resultados relacionados con la necesidad específica.
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Para formular palabras clave más precisas, se recomienda considerar los siguientes criterios:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Identificar el tema central de la búsqueda. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar términos específicos relacionados con el propósito. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar frases demasiado extensas cuando no sean necesarias. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Incorporar términos técnicos cuando el tema lo requiera. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar sinónimos o expresiones equivalentes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Agregar contexto cuando los resultados sean demasiado amplios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar los resultados y ajustar la consulta cuando sea necesario.
            p.mb-0 Una búsqueda puede requerir varios ajustes. La consulta inicial permite identificar resultados y, a partir de ellos, modificar los términos hasta alcanzar un nivel adecuado de precisión.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img5.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Operadores y comandos de búsqueda
      p Los operadores y comandos permiten relacionar términos, ampliar una búsqueda, restringir resultados o excluir información que no responde al propósito de la consulta. Su sintaxis y disponibilidad pueden variar entre buscadores y bases de datos.
      p.mb-5 Para ampliar, limitar o excluir resultados, pueden utilizarse los siguientes operadores y comandos de búsqueda:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img6.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="AND").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Operador booleano que relaciona dos o más términos y recupera resultados en los que aparecen conjuntamente.
            .row(titulo="OR").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Operador booleano que amplía la consulta al recuperar resultados que contienen uno u otro de los términos indicados.
            .row(titulo="NOT").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Operador booleano que excluye resultados asociados con un término que no se desea incorporar en la consulta.
            .row(titulo="Comillas “ ”").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten localizar una palabra o frase con una concordancia más exacta.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Signo menos (-)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite excluir una palabra determinada en buscadores que admiten este operador.
            .row(titulo="site:").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite restringir una consulta a un sitio web o dominio específico.
            .row(titulo="filetype:").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite localizar documentos correspondientes a un tipo de archivo determinado.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img7.png", alt="" style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Aplicación de operadores y comandos
      p.mb-5 Su aplicación puede comprenderse mediante las siguientes consultas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Ejemplos de uso de operadores y comandos de búsqueda
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Necesidad de búsqueda
                      th.ajuste-border-tabla.texto-left Consulta sugerida
                      th.texto-left Resultado esperado
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Buscar información sobre seguridad digital y datos personales.
                      td.ajuste-border-tabla.texto-left seguridad digital AND datos personales
                      td.texto-left Resultados que relacionan ambos temas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Buscar recursos sobre almacenamiento en la nube en formato PDF.
                      td.ajuste-border-tabla.texto-left almacenamiento en la nube filetype:pdf
                      td.texto-left Documentos PDF relacionados con el tema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Buscar una frase exacta.
                      td.ajuste-border-tabla.texto-left “protección de datos personales”
                      td.texto-left Resultados que contienen esa frase exacta.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Buscar información en un sitio institucional.
                      td.ajuste-border-tabla.texto-left ciberseguridad site:.gov.co
                      td.texto-left Resultados publicados en sitios del gobierno colombiano.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Excluir resultados no deseados.
                      td.ajuste-border-tabla.texto-left redes privadas -sociales
                      td.texto-left Resultados sobre redes privadas, evitando redes sociales.
          p.mb-5 El uso de operadores debe responder a la necesidad de búsqueda. Cuando los resultados son demasiado amplios, pueden incorporarse restricciones; si son demasiado limitados, conviene ajustar los términos o retirar filtros innecesarios.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Filtros de búsqueda
          p.mb-5 Los filtros permiten delimitar los resultados según criterios como fecha, idioma, tipo de recurso, licencia, fuente o formato. Son útiles para localizar información más pertinente, actualizada y ajustada a una necesidad específica. Los más frecuentes son:
          .bg-carrusel
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img8.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Fecha
                    p.mb-0.text-center Permite seleccionar información publicada o actualizada durante un periodo determinado.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img9.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Tipo de recurso
                    p.mb-0.text-center Permite delimitar resultados como imágenes, videos, noticias, documentos, libros o artículos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img10.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Idioma
                    p.mb-0.text-center Permite seleccionar información disponible en una lengua determinada.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img11.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Formato
                    p.mb-0.text-center Facilita la localización de archivos PDF, presentaciones, hojas de cálculo u otros documentos editables.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img12.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Licencia
                    p.mb-0.text-center Permite localizar recursos cuyas condiciones de uso o reutilización se encuentran identificadas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center.mb-3
                    .col-12
                      img(src='@/assets/curso/temas/t2/img13.png' ).m-auto
                  .box___card_sinbordes_p
                    h4.mb-3.estilo-text Fuente
                    p.mb-0.text-center Permite priorizar información procedente de sitios institucionales, académicos o técnicos.
      p.mb-0 Aplicar filtros reduce la cantidad de resultados que no responden a la necesidad de búsqueda y favorece una selección más pertinente, especialmente cuando se requiere actualidad, confiabilidad o determinadas condiciones de uso.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Fuentes de información digital: procedencia, autoría y confiabilidad
      p.mb-5 Una fuente de información digital es el origen del contenido, como una persona, entidad, sitio web, base de datos o plataforma. Para validarla, es necesario identificar su procedencia, autoría y nivel de confiabilidad, con el fin de evitar el uso de información falsa, incompleta o manipulada. La validación de una fuente digital requiere considerar los siguientes elementos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Procedencia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Procedencia
              p La procedencia indica el origen del recurso y permite identificar dónde se publica, qué entidad lo respalda, su fecha y propósito. Reconocer estos elementos facilita comprobar su legitimidad.
              p.mb-0 #[b Ejemplo aplicado:] una norma alojada en el sitio oficial de la entidad responsable ofrece mayor posibilidad de comprobación que una copia publicada en una página de origen desconocido.
        .py-3.py-md-4(titulo="Autoría")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Autoría
              p.mb-0 La autoría permite identificar quién crea, publica o respalda un contenido. Para establecerla, se consideran datos como el responsable, su perfil, la fecha de publicación, las referencias y el respaldo de la plataforma. La ausencia de estos elementos dificulta comprobar la confiabilidad de la información.
        .py-3.py-md-4(titulo="Confiabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Confiabilidad
              p.mb-0 La confiabilidad indica el grado de seguridad que ofrece una fuente. Una fuente confiable presenta información clara, actualizada, verificable y respaldada por evidencias. Su propósito también debe identificarse, ya que la popularidad de un contenido no garantiza su confiabilidad.
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p La selección de una fuente requiere una revisión integral y no debe depender únicamente de su posición entre los resultados o de su popularidad. Para comprobar la confiabilidad de una fuente digital, se recomienda revisar los siguientes criterios:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La fuente identifica al autor o entidad responsable. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El contenido presenta fecha de publicación o actualización. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La información se relaciona directamente con el tema consultado. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Los datos pueden comprobarse mediante otras fuentes confiables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El recurso incluye referencias, enlaces o documentos de soporte. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El sitio no solicita datos personales innecesarios. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El contenido evita títulos exagerados o engañosos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La redacción es clara y no presenta problemas graves de coherencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | La información permite diferenciar hechos, opiniones y publicidad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El recurso permite identificar sus condiciones de uso o licencia.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 500px").m-auto
      p.mb-0 Validar una fuente requiere aplicar criterio antes de utilizar o compartir su contenido. La información seleccionada debe responder a la necesidad de búsqueda, contar con respaldo suficiente y emplearse respetando sus condiciones de autoría.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Patentes, licenciamiento y uso responsable de recursos digitales
      p Los recursos disponibles en internet pueden estar sujetos a derechos de autor, licencias u otras condiciones jurídicas. Por esta razón, acceder a un contenido no significa que exista autorización automática para copiarlo, modificarlo, publicarlo o distribuirlo.
      p El uso responsable requiere reconocer la autoría, comprobar las condiciones de utilización, citar las fuentes y evitar prácticas de plagio o reutilización no autorizada.
      p.mb-5 Los conceptos esenciales que orientan el uso responsable de recursos digitales son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Derechos de autor
                  p Protegen creaciones originales como textos, imágenes, fotografías, videos, audios, diseños, presentaciones, programas informáticos, infografías y materiales educativos.
                  p.mb-0 Su utilización requiere reconocer la autoría y respetar las condiciones establecidas para copiar, distribuir, adaptar o publicar el recurso. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Licenciamiento
                  p El licenciamiento establece los permisos y restricciones aplicables a un recurso. Algunas licencias permiten compartir o adaptar contenidos, mientras otras establecen condiciones relacionadas con atribución, uso comercial o creación de obras derivadas.
                  p.mb-0 Las licencias abiertas, como Creative Commons, permiten comunicar de manera estandarizada determinadas condiciones de utilización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Patentes
                  p.mb-0 Las patentes protegen invenciones que cumplen los requisitos establecidos para este tipo de propiedad industrial. En el ámbito digital, debe diferenciarse entre el software considerado en sí mismo, protegido mediante derecho de autor, y las invenciones implementadas por computador que pueden ser patentables cuando constituyen una solución técnica y cumplen los requisitos correspondientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
      p El uso responsable implica actuar de acuerdo con la autoría, la legalidad y las condiciones aplicables al recurso. La validación de licencias y fuentes contribuye a producir contenidos más confiables, éticos y verificables. El desarrollo detallado de las condiciones de licencia, atribución, reutilización, dominio público, patentes y recomendaciones prácticas se incorpora en el documento complementario.
      p.mb-5 Para ampliar la información sobre derechos de autor, licencias, patentes y uso responsable de recursos digitales, se recomienda consultar el documento complementario dispuesto a continuación:
      .caja-3.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Patentes, licenciamiento y uso responsable de recursos digitales
            p.mb-0 Consulte el documento #[b “Anexo 1. Patentes, licenciamiento y uso responsable de recursos digitales”] y profundice en derechos de autor, licencias, condiciones de uso y patentes aplicables a los recursos digitales.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Uso_Recursos_Digitales.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
