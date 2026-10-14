<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Información digital, datos y calidad de la información
      p.mb-5 La información digital está presente en distintos ámbitos y formatos, y apoya el desarrollo de actividades y la toma de decisiones. Su gestión requiere orden, responsabilidad y seguridad; por ello, este tema aborda los datos, su organización y los criterios que permiten valorar la calidad de la información.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de información digital y su importancia
      p La información digital comprende datos y recursos en formatos electrónicos que pueden crearse, almacenarse, modificarse y compartirse mediante dispositivos tecnológicos. Se presenta en distintos formatos, como textos, imágenes, audios, videos y bases de datos, y facilita el acceso y circulación de información; sin embargo, su uso exige responsabilidad, ya que es necesario considerar su confiabilidad, origen, licencia y finalidad. 
      p.mb-5 La información digital reúne características que facilitan su gestión y utilización en diferentes entornos. Las principales se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disponibilidad de Acceso
                  p Puede consultarse desde diferentes dispositivos o plataformas, siempre que existan los permisos correspondientes y la conexión requerida.
                  p.mb-0 #[b Ejemplo:] acceder a un documento almacenado en la nube desde un computador o un teléfono inteligente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actualización
                  p Puede modificarse, corregirse o ampliarse con facilidad, lo que permite incorporar información nueva o ajustar contenidos existentes.
                  p.mb-0 #[b Ejemplo:] actualizar una hoja de cálculo con nuevos datos de ventas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento
                  p Puede conservarse mediante dispositivos físicos o servicios digitales que facilitan su disponibilidad posterior.
                  p.mb-0 #[b Ejemplo:] guardar documentos en una memoria USB, un disco duro o un servicio en la nube.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transferencia
                  p Puede compartirse mediante correo electrónico, enlaces, aplicaciones o plataformas digitales, de acuerdo con los permisos establecidos.
                  p.mb-0 #[b Ejemplo:] enviar un documento mediante correo electrónico o compartir un enlace de acceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reproducción
                  p Puede duplicarse o copiarse con rapidez, lo que facilita su distribución, aunque exige considerar las condiciones de uso y protección correspondientes.
                  p.mb-0 #[b Ejemplo:] generar una copia de un documento digital.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización
                  p Puede clasificarse mediante carpetas, nombres, etiquetas, fechas o categorías para facilitar su gestión y recuperación.
                  p.mb-0 #[b Ejemplo:] crear carpetas diferenciadas por proyecto, fecha o tipo de archivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La importancia de la información digital radica en su capacidad para convertir datos organizados y contextualizados en información útil para la acción. Cuando se gestiona adecuadamente, favorece la toma de decisiones, la productividad, la recuperación de archivos y el uso responsable de los recursos tecnológicos. Su importancia se concreta de distintas maneras según el contexto en el que se utiliza:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Personal
                p.mb-0.text-center Permite organizar documentos, fotografías, trámites, contactos, claves y comunicaciones relacionados con las actividades cotidianas.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Académico
                p.mb-0.text-center Facilita la consulta de fuentes, la elaboración de trabajos, el acceso a plataformas educativas y el almacenamiento de evidencias.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Laboral
                p.mb-0.text-center Apoya la gestión de archivos, reportes, bases de datos, comunicaciones, procesos y actividades relacionadas con la toma de decisiones.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img10.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Productivo
                p.mb-0.text-center Contribuye al análisis de información, el control de recursos, la atención de usuarios y el seguimiento de actividades.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img11.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Social
                p.mb-0.text-center Favorece la participación, el acceso a servicios digitales y la comunicación en comunidades virtuales.
      p.mb-0 La información digital requiere criterios de orden, seguridad y responsabilidad. Un archivo mal nombrado, una fuente no verificada, un dato incompleto o la ausencia de una copia de seguridad pueden afectar la calidad del trabajo, ocasionar pérdidas o producir decisiones equivocadas.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Datos: concepto, tipos y relación con la información
      p Los datos representan hechos, valores o registros que, al organizarse e interpretarse en un contexto, se convierten en información útil. Su gestión requiere reconocer su procedencia, significado, forma de almacenamiento y nivel de confianza.
      p.mb-5 La relación entre dato e información puede comprenderse mediante una situación sencilla, como la siguiente:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img12.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 El número #[b 25] constituye un dato aislado. Si se establece que corresponde a la cantidad de aprendices inscritos en una actividad, adquiere contexto y se convierte en información útil.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Diferencia entre dato e información
      p.mb-5 Para comprender la relación entre ambos conceptos, se presentan sus principales diferencias:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Diferencia entre dato e información
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Definición
                      th.texto-left Ejemplo
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dato
                      td.ajuste-border-tabla.texto-left Registro básico, valor o elemento aislado que requiere contexto para ser interpretado.
                      td.texto-left “15”, “Bogotá”, “PDF”, “2026”.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información
                      td.ajuste-border-tabla.texto-left Conjunto de datos organizados y contextualizados que permiten comprender una situación.
                      td.texto-left “15 aprendices entregaron la actividad en formato PDF durante el año 2026”.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de datos en entornos digitales
          p.mb-5 Los datos pueden clasificarse de diferentes formas según su naturaleza, estructura o nivel de sensibilidad. Esta clasificación permite determinar cómo deben organizarse, almacenarse, protegerse y utilizarse. Los principales tipos de datos pueden organizarse según sus características y necesidades de gestión:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Naturaleza y formato")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Naturaleza y formato
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos numéricos:] representan cantidades, medidas, porcentajes o valores que pueden utilizarse en cálculos. Algunos ejemplos son edad, precio, calificación y cantidad de archivos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos textuales:] están compuestos por palabras, frases, códigos o descripciones. Entre ellos se encuentran el nombre de un documento, un comentario o una dirección de correo electrónico.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos alfanuméricos:] combinan letras, números y, en algunos casos, símbolos. Pueden corresponder a códigos de usuario, números de factura o contraseñas.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos multimedia:] corresponden a imágenes, audios, videos, animaciones u otros recursos gráficos, como una fotografía, una grabación de voz o un video explicativo.
            .py-3.py-md-4(titulo="Estructura")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Estructura
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos estructurados:] se organizan mediante campos, tablas o bases de datos con una estructura previamente definida. Un registro en una hoja de cálculo con filas y columnas corresponde a este tipo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos no estructurados:] no siguen una organización rígida o tabular. Entre ellos pueden encontrarse mensajes, publicaciones, imágenes y documentos extensos.
            .py-3.py-md-4(titulo="Nivel de protección")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Nivel de protección
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos personales:] permiten identificar directa o indirectamente a una persona. Algunos ejemplos son nombre, documento, teléfono o correo electrónico.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Datos sensibles:] pueden afectar la privacidad o generar discriminación cuando se utilizan de manera indebida. El CF incluye como ejemplos la información de salud, los datos biométricos y la orientación religiosa o política.
      p.mb-5 Los datos deben gestionarse de acuerdo con su importancia y riesgo. No todos requieren el mismo tratamiento; los datos personales, privados o sensibles necesitan medidas más estrictas de protección, autorización y control de acceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Proceso básico: de los datos a la información
      p.mb-5 El CF establece cinco etapas consecutivas mediante las cuales los datos pasan de registros iniciales a información que puede utilizarse para tomar decisiones o resolver necesidades. Debido a esta relación secuencial, corresponde emplear pasos. La transformación de los datos en información útil comprende las siguientes etapas:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recolección
                    p Se obtienen datos procedentes de una fuente digital o física.
                    p.mb-0 #[b Resultado:] datos iniciales.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Organización
                    p Los datos se clasifican, agrupan o registran mediante una estructura adecuada.
                    p.mb-0 #[b Resultado:] datos ordenados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Validación
                    p Se comprueba que los datos sean correctos, completos y confiables antes de continuar con su utilización.
                    p.mb-0 #[b Resultado:] datos depurados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Interpretación
                    p Los datos se analizan y contextualizan para identificar su significado y utilidad.
                    p.mb-0 #[b Resultado:] información comprensible.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Uso
                    p La información se aplica para tomar decisiones, comunicar resultados o resolver una necesidad.
                    p.mb-0 #[b Resultado:] conocimiento o acción.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 300px").m-auto
          p.mb-0 Una gestión adecuada de los datos disminuye problemas como la duplicidad de registros, el uso de información desactualizada, la pérdida de archivos, la confusión entre versiones o la publicación de datos sin autorización. Antes de utilizarlos, deben considerarse su procedencia, exactitud, finalidad y condiciones de uso.
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Organización de la información digital
      p.mb-5 Organizar información digital implica clasificar, nombrar y estructurar archivos y recursos para facilitar su localización, uso, recuperación y protección. Una organización adecuada mejora el control de la información, reduce pérdidas y favorece la productividad y el trabajo colaborativo. Antes de definirla, conviene considerar su finalidad, ubicación, responsables y nivel de protección.
      .caja-1.color-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Una estructura organizada requiere considerar las siguientes preguntas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué tipo de información se está almacenando?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Para qué se utilizará?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Quién necesita acceder a ella?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Dónde debe guardarse?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cada cuánto debe actualizarse?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué nivel de protección requiere?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se recuperará si se pierde o elimina accidentalmente?
      p.mb-5 La información puede organizarse mediante diferentes criterios según la necesidad de uso:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Por tema").ajuste-cajaAcordion.ajuste-vineta
              p Agrupa archivos según el asunto principal al que pertenecen.
              p.mb-3 #[b Ejemplo:] “Ciberseguridad”, “Búsqueda de información” y “Evidencias”.
            .row(titulo="Por fecha").ajuste-cajaAcordion.ajuste-vineta
              p Clasifica documentos por año, mes o día para facilitar su identificación temporal.
              p.mb-3 #[b Ejemplo:] “2026-01”, “2026-02” e “Informes marzo”.
            .row(titulo="Por tipo de archivo").ajuste-cajaAcordion.ajuste-vineta
              p Separa documentos, imágenes, videos, hojas de cálculo o presentaciones.
              p.mb-3 #[b Ejemplo:] “PDF”, “Imágenes”, “Videos” y “Excel”.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img23.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img24.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Por proyecto").ajuste-cajaAcordion.ajuste-vineta
              p Organiza los recursos según una actividad, proyecto o proceso específico.
              p.mb-3 #[b Ejemplo:] “Proyecto diagnóstico digital” y “Actividad final”.
            .row(titulo="Por responsable").ajuste-cajaAcordion.ajuste-vineta
              p Clasifica los archivos según la persona o el equipo encargado de producirlos.
              p.mb-3 #[b Ejemplo:] “Instructor”, “Aprendiz” y “Equipo técnico”.
            .row(titulo="Por estado").ajuste-cajaAcordion.ajuste-vineta
              p Permite diferenciar los archivos de acuerdo con su nivel de avance.
              p.mb-3 #[b Ejemplo:] “Borradores”, “Finales” y “Entregados”.
      p.mb-5 La organización también depende del uso de nombres claros para los archivos. Un nombre como “documento1_final_final_ahora_si.pdf” genera confusión y dificulta la búsqueda. En cambio, un nombre estructurado permite identificar el contenido sin abrir el archivo. Para identificar y recuperar los archivos con mayor facilidad, se recomiendan las siguientes prácticas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Usar nombres claros y descriptivos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo no recomendado:] archivo nuevo.docx
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo recomendado:] Guia_busqueda_informacion_2026.docx
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img26.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Incluir fecha cuando sea necesario
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo no recomendado:] informe.pdf
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo recomendado:] Informe_seguridad_digital_2026-03-15.pdf
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img27.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Evitar caracteres especiales innecesarios
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo no recomendado:] trabajo%%%final.docx
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo recomendado:] Trabajo_final_recursos_digitales.docx
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img28.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Diferenciar versiones
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo no recomendado:] presentación final.pptx
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo recomendado:] Presentacion_recursos_digitales_v2.pptx
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t1/img29.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Mantener una estructura uniforme
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo no recomendado:] datos actividad.xlsx
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | #[b Ejemplo recomendado:] Datos_actividad_grupoA_2026.xlsx
      p.mb-5 Además del nombre del archivo, es importante utilizar carpetas y subcarpetas para organizar los recursos según categorías específicas. Esta estructura facilita la localización de la información y contribuye a mantener el orden en dispositivos o servicios en la nube. Una estructura de carpetas puede organizarse de la siguiente manera:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Ejemplo de estructura de carpetas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Nivel
                      th.ajuste-border-tabla.texto-left Carpeta
                      th.texto-left Contenido
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Carpeta principal
                      td.ajuste-border-tabla.texto-left Gestión de información digital
                      td.texto-left Archivos generales del tema.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subcarpeta 1
                      td.ajuste-border-tabla.texto-left Fuentes consultadas
                      td.texto-left Documentos, enlaces y recursos usados como referencia.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subcarpeta 2
                      td.ajuste-border-tabla.texto-left Evidencias
                      td.texto-left Actividades, capturas, reportes o productos elaborados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subcarpeta 3
                      td.ajuste-border-tabla.texto-left Imágenes y recursos
                      td.texto-left Recursos gráficos utilizados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subcarpeta 4
                      td.ajuste-border-tabla.texto-left Versiones finales
                      td.texto-left Documentos revisados y aprobados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Subcarpeta 5
                      td.ajuste-border-tabla.texto-left Copias de seguridad
                      td.texto-left Respaldo de archivos importantes.
          p.mb-5 La organización debe mantenerse durante todo el ciclo de uso de los archivos. Cuando un documento cambia, es importante distinguir si corresponde a un borrador, una versión corregida o una versión final para evitar el uso de información equivocada o incompleta. Para mantener una estructura ordenada y funcional, conviene aplicar estas prácticas:
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Crear una estructura de carpetas antes de iniciar un proyecto o actividad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Nombrar los archivos de forma clara, breve y coherente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar guardar todos los documentos en el escritorio o en una sola carpeta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Eliminar duplicados innecesarios después de confirmar que existe una versión correcta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantener separadas las versiones en borrador y las versiones finales.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Usar etiquetas, colores o categorías cuando la herramienta lo permita.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Revisar periódicamente archivos antiguos o desactualizados.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Realizar copias de seguridad de información importante.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Verificar permisos de acceso cuando la información se almacena en la nube.
              p.mb-0 Organizar información no consiste únicamente en almacenar archivos. Implica establecer una lógica de clasificación que permita encontrarlos, comprenderlos, protegerlos y utilizarlos de manera eficiente
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img30.png', alt='').m-auto
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Elementos de calidad de la información: utilidad, fiabilidad, precisión e integridad
      p.mb-5 La calidad de la información indica si un contenido, dato o recurso digital reúne las condiciones necesarias para ser utilizado adecuadamente. Su evaluación considera cuatro elementos principales: utilidad, fiabilidad, precisión e integridad, los cuales ayudan a reducir errores y favorecer decisiones acertadas. Los principales elementos para valorar la calidad de la información son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Utilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilidad
              p #[b Pregunta orientadora:] ¿la información sirve para lo que se necesita?
              p La utilidad corresponde a la capacidad de una información para responder a una necesidad específica y aportar valor al proceso. Una información puede ser verdadera y, aun así, no resultar pertinente para todos los propósitos.
              p #[b Ejemplo aplicado:] un artículo sobre seguridad digital puede ser confiable, pero si está dirigido a especialistas técnicos avanzados, puede no responder a una persona que requiere recomendaciones básicas.
              p.mb-0 Para valorar la utilidad se considera la relación con el tema, el nivel de profundidad, el lenguaje utilizado, la aplicabilidad, el aporte al objetivo de búsqueda y la actualidad del contenido.
        .py-3.py-md-4(titulo="Fiabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fiabilidad
              p #[b Pregunta orientadora:] ¿la fuente es confiable?
              p La fiabilidad se relaciona con el nivel de confianza que ofrece una fuente. Permite identificar quién produce la información, qué propósito tiene, cuál es su respaldo y si incluye elementos que puedan comprobarse.
              p Entre las señales favorables se encuentran autor identificado, institución reconocida, fecha de publicación o actualización, referencias verificables, propósito claro, coherencia y sitio confiable.
              p.mb-0 Una fuente requiere mayor precaución cuando carece de autor o fecha, contiene enlaces rotos, presenta exceso de publicidad, utiliza títulos exagerados, incluye afirmaciones sin evidencia o solicita información personal innecesaria.
        .py-3.py-md-4(titulo="Precisión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Precisión
              p #[b Pregunta orientadora:] ¿los datos son exactos y claros?
              p La precisión corresponde a la exactitud con la que se presentan cifras, fechas, nombres, instrucciones o conceptos. La falta de precisión puede ocasionar errores en actividades personales, académicas o laborales.
              p #[b Ejemplo aplicado:] no ofrece el mismo nivel de precisión afirmar que “hace poco se actualizó la norma” que indicar la fecha exacta de actualización y el documento oficial correspondiente.
              p.mb-0 Para comprobar la precisión se recomienda comparar fuentes confiables, revisar fechas, cifras y nombres propios, confirmar enlaces, identificar información desactualizada, comprobar que los datos estén completos y detectar posibles errores de transcripción o interpretación.
        .py-3.py-md-4(titulo="Integridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Integridad
              p #[b Pregunta orientadora:] ¿la información está completa?
              p La integridad permite establecer si la información conserva los elementos necesarios para comprenderla y si no ha sido alterada de manera indebida. Un recurso íntegro mantiene coherencia interna y evita omisiones esenciales.
              p.mb-0 La integridad puede afectarse cuando un archivo procede de una fuente poco confiable, se modifica sin control, se fragmenta, pierde parte de su contenido o circula en una versión incompleta. En la gestión digital también se relaciona con la conservación adecuada de los archivos y la prevención de modificaciones no autorizadas.
      p.mb-5 Antes de utilizar un recurso digital, se recomienda comprobar los siguientes criterios:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Lista de verificación para evaluar información digital
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Sí
                      th.ajuste-border-tabla.texto-left No
                      th.texto-left Observación
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold La información responde al tema o necesidad de búsqueda.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold La fuente permite identificar autor o entidad responsable.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold El recurso tiene fecha de publicación o actualización.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El contenido presenta datos claros y verificables.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold La información está completa y organizada.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold El recurso no presenta señales evidentes de manipulación.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Se identifican condiciones de uso, licencia o derechos de autor.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold La información coincide con otras fuentes confiables.
                      td.ajuste-border-tabla.texto-left 
                      td.ajuste-border-tabla.texto-left 
                      td.texto-left 
          p.mb-0   La evaluación de la calidad debe integrarse a los procesos de búsqueda y uso de información digital. Utilizar recursos sin comprobar su utilidad, fiabilidad, precisión e integridad puede generar errores, afectar la credibilidad y propiciar usos inadecuados de los contenidos.

</template>

<script>
export default {
  name: 'Tema1',
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
