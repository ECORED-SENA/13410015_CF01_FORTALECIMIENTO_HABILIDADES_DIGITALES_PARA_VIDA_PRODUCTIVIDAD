<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Seguridad digital, vulnerabilidades y protección de datos
      p.mb-5 La seguridad digital comprende prácticas orientadas a proteger la información, las cuentas, los dispositivos y las actividades realizadas en entornos tecnológicos. Su aplicación contribuye a reducir la exposición de datos y a mantener condiciones adecuadas de uso frente a situaciones que pueden afectar la privacidad o la disponibilidad de la información. En este tema se desarrollarán  los conceptos y prácticas fundamentales para fortalecer la protección de la información en entornos digitales.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto de seguridad digital y seguridad de la información
      p.mb-5 La seguridad digital protege información, dispositivos, cuentas y servicios tecnológicos frente a riesgos y usos no autorizados. La seguridad de la información se centra en resguardar los datos durante todo su ciclo de uso mediante medidas técnicas y hábitos responsables.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios básicos de la seguridad de la información
      p.mb-5 Los tres principios corresponden a conceptos paralelos con ejemplos breves, por lo que las tarjetas permiten diferenciarlos sin recurrir a una tabla.
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-4.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img1.png', alt="" ).m-auto
                  h4.text-center Confidencialidad
                  .caja-4_p
                    p La información debe estar disponible únicamente para las personas autorizadas.
                    p.mb-0 #[b Ejemplo:] restringir los permisos de un documento almacenado en la nube.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-4.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img2.png', alt="" ).m-auto
                  h4.text-center Integridad
                  .caja-4_p
                    p La información debe conservarse completa, correcta y sin modificaciones no autorizadas.
                    p.mb-0 #[b Ejemplo:] impedir que una persona sin permiso modifique un archivo.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-4.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
                  h4.text-center Disponibilidad
                  .caja-4_p
                    p La información debe poder consultarse cuando sea necesaria.
                    p.mb-0 #[b Ejemplo:] disponer de una copia de seguridad para recuperar un archivo importante.
      p.mb-5 La relación entre los tres principios puede comprenderse mediante la siguiente situación:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img4.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Un archivo personal puede encontrarse disponible en la nube, pero si cualquier persona tiene acceso, se afecta la #[b confidencialidad]. Si se elimina y no existe respaldo, se afecta la #[b disponibilidad]. Si alguien modifica su contenido sin autorización, se compromete la #[b integridad].
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad digital en la vida cotidiana
      p.mb-5 La seguridad digital se aplica cada vez que se utiliza correo electrónico, almacenamiento en la nube, mensajería, plataformas educativas, redes sociales, redes inalámbricas o aplicaciones. Aunque estas actividades son habituales, implican intercambio y almacenamiento de datos que requieren cuidado. Su aplicación cotidiana puede organizarse en los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img5.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Actividades frecuentes").ajuste-cajaAcordion.ajuste-vineta
              p La seguridad interviene al:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | ingresar al correo electrónico; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | almacenar documentos en la nube; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | descargar archivos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | utilizar mensajería; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | realizar trámites en línea; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | participar en plataformas educativas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | compartir fotografías o documentos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | utilizar redes sociales; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | conectarse a redes Wi-Fi; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | instalar aplicaciones.
              p.mb-3 Antes de proporcionar información, abrir archivos, aceptar permisos o compartir enlaces, conviene comprobar que el entorno sea confiable.
            .row(titulo="Buenas prácticas generales").ajuste-cajaAcordion.ajuste-vineta
              p Para fortalecer la seguridad digital se recomienda:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | usar contraseñas diferentes para las cuentas importantes; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | activar mecanismos adicionales de autenticación; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | mantener actualizados el sistema y las aplicaciones; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | evitar descargas desde sitios desconocidos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | no abrir enlaces sospechosos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | revisar permisos de aplicaciones; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | cerrar sesiones en equipos compartidos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | realizar copias de seguridad; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | utilizar bloqueo de pantalla; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | evitar compartir información sensible en espacios no confiables; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | verificar la dirección de las páginas antes de ingresar datos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | utilizar redes confiables para actividades con información sensible.
      p.mb-0 La seguridad digital no elimina todos los riesgos, pero permite reducir su probabilidad y responder con mayor oportunidad cuando se presenta una situación sospechosa.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Riesgos y amenazas en la protección de datos
      p Un riesgo digital corresponde a la posibilidad de que una situación afecte la información, las cuentas, los dispositivos o la privacidad. Una amenaza es el evento, acción o agente capaz de producir esa afectación. Los riesgos y amenazas pueden originarse en errores humanos, fallas técnicas, configuraciones inadecuadas, desconocimiento o acciones intencionales de terceros.
      p.mb-5 La diferencia entre ambos conceptos puede comprenderse mediante el siguiente ejemplo:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img6.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Utilizar una contraseña débil representa un riesgo, porque aumenta la posibilidad de acceso indebido. Una persona que intenta ingresar sin autorización a la cuenta representa una amenaza.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Riesgos frecuentes en la protección de datos
      p.mb-5 Los riesgos más frecuentes pueden presentarse en las siguientes situaciones:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Cuentas y contraseñas
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Acceso no autorizado a cuentas personales, académicas o laborales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Uso de contraseñas débiles o repetidas.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Documentos y datos personales
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Exposición de documentos mediante enlaces públicos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Publicación excesiva de información personal.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Aplicaciones y archivos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Instalación de aplicaciones no confiables.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Descarga de archivos infectados.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img10.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Redes y dispositivos
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Conexión a redes Wi-Fi inseguras.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Robo o pérdida de dispositivos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img11.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Uso indebido de información
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Uso indebido de datos por terceros.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-arrow-alt-circle-right
                    | Suplantación de identidad.
      p.mb-5 Estos riesgos pueden afectar la privacidad, la reputación, la continuidad de las actividades y la confianza en las personas u organizaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Amenazas digitales comunes
      p Las amenazas pueden actuar mediante engaños, programas maliciosos o aprovechamiento de debilidades de seguridad. Debido a que el contenido relaciona amenaza, descripción y posible consecuencia, la tabla resulta pertinente.
      p.mb-5 Las principales amenazas identificadas se relacionan con las siguientes consecuencias:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Amenazas digitales comunes y posibles consecuencias
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Amenaza
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Posible consecuencia
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Phishing]
                      td.ajuste-border-tabla.texto-left Mensajes falsos que buscan obtener contraseñas, datos personales o información financiera.
                      td.texto-left Robo de cuentas o suplantación de identidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Malware]
                      td.ajuste-border-tabla.texto-left Programa malicioso que puede dañar, alterar o robar información.
                      td.texto-left Pérdida de archivos o afectación del dispositivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Ransomware]
                      td.ajuste-border-tabla.texto-left Tipo de #[i malware] que bloquea archivos y exige pago para recuperarlos.
                      td.texto-left Secuestro de información y pérdida de acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Spyware]
                      td.ajuste-border-tabla.texto-left Programa que recopila información sin autorización.
                      td.texto-left Exposición de datos personales o actividad privada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingeniería social
                      td.ajuste-border-tabla.texto-left Manipulación psicológica para obtener información o acceso.
                      td.texto-left Entrega involuntaria de claves o datos sensibles.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Suplantación de identidad
                      td.ajuste-border-tabla.texto-left Uso indebido del nombre, imagen, cuenta o datos de otra persona.
                      td.texto-left Afectación reputacional, económica o legal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2  Señales de una posible amenaza
      p Una amenaza no siempre se presenta de manera evidente. Puede aparecer como un mensaje urgente, una promoción, un archivo adjunto, una llamada o una solicitud aparentemente legítima.
      p.mb-5 Las siguientes señales pueden ayudar a identificar situaciones sospechosas:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Solicitudes inusuales
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Mensajes que solicitan contraseñas o códigos de verificación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Alertas que presionan para actuar inmediatamente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Correos y archivos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Remitentes desconocidos o enlaces extraños. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Archivos adjuntos que no se esperaban.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sitios y promociones
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Promociones demasiado atractivas o poco creíbles.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Páginas que imitan sitios oficiales con direcciones diferentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicaciones y cuentas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Aplicaciones que solicitan permisos innecesarios. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Inicios de sesión desde ubicaciones desconocidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cambios inesperados
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Modificaciones en archivos, contraseñas o configuraciones sin autorización. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Dispositivos lentos, ventanas emergentes o comportamientos extraños.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Ante una señal de alerta, conviene evitar enlaces o descargas, no proporcionar información personal y comprobar la solicitud mediante un canal oficial.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Impacto de una mala protección de datos
      .caja-1.color-1(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img17.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            p Una protección inadecuada puede generar diferentes consecuencias:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Pérdida de documentos personales, académicos o laborales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Acceso de terceros a cuentas de correo o redes sociales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Publicación no autorizada de información privada.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso indebido de fotografías, nombres o datos de contacto.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Daño reputacional por publicaciones o mensajes falsos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Bloqueo de archivos importantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Riesgos económicos por fraudes digitales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Afectación de procesos educativos, laborales o administrativos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Dificultad para recuperar información eliminada o alterada.
            p.mb-0 Proteger los datos implica utilizar los recursos digitales con criterio, identificar posibles riesgos y aplicar medidas preventivas antes de compartir información, instalar aplicaciones o conceder permisos.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Vulnerabilidades digitales, contraseñas y procedimientos de seguridad
      p.mb-5 Una vulnerabilidad digital es una debilidad que puede ser aprovechada para comprometer un dispositivo, una cuenta, una red, una aplicación o un archivo. Puede originarse en fallas técnicas, configuraciones inadecuadas o prácticas como compartir contraseñas, mantener sesiones abiertas o conceder permisos excesivos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de vulnerabilidades digitales
      p.mb-5 Las vulnerabilidades pueden clasificarse según el origen de la debilidad:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Vulnerabilidades técnicas").ajuste-cajaAcordion.ajuste-vineta
              p Se presentan en sistemas, aplicaciones, dispositivos o redes.
              p.mb-3 #[b Ejemplo:] un sistema operativo sin actualizar o una aplicación con fallas de seguridad.
            .row(titulo="Vulnerabilidades humanas").ajuste-cajaAcordion.ajuste-vineta
              p Se relacionan con errores, descuidos o desconocimiento.
              p.mb-3 #[b Ejemplo:] abrir un enlace sospechoso o compartir una contraseña.
            .row(titulo="Vulnerabilidades de configuración").ajuste-cajaAcordion.ajuste-vineta
              p Aparecen cuando una herramienta utiliza permisos o ajustes inadecuados.
              p.mb-3 #[b Ejemplo:] mantener un documento privado con acceso público.
            .row(titulo="Vulnerabilidades físicas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Surgen cuando un dispositivo puede ser robado, manipulado o utilizado por personas no autorizadas.
            .row(titulo="Vulnerabilidades de procedimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se producen cuando no existen criterios claros para respaldar, compartir, eliminar o proteger información.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img18.png", alt="" style="width: 350px").m-auto
      p.mb-5 Reconocer estas condiciones permite corregirlas antes de que sean aprovechadas por una amenaza.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Contraseñas y mecanismos adicionales de autenticación
      p.mb-5 La protección de las cuentas requiere combinar contraseñas adecuadas con mecanismos adicionales de autenticación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Contraseñas seguras")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contraseñas seguras
              p.mb-0 Una contraseña debe ser difícil de adivinar y suficientemente larga. Como orientación actual, conviene priorizar contraseñas o frases de contraseña de al menos 15 caracteres, siempre que el servicio lo permita, evitar datos personales y utilizar una diferente para cada cuenta importante.
        .py-3.py-md-4(titulo="Prácticas que deben evitarse")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Prácticas que deben evitarse
              p Entre los errores frecuentes se encuentran:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Reutilizar una misma contraseña. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Emplear nombres, fechas o datos personales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Utilizar claves cortas o previsibles. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Compartirlas mediante correo o mensajes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Conservarlas en archivos sin protección. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Permitir que equipos compartidos las recuerden. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | No cambiarlas cuando existe evidencia de exposición. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Compartir códigos de verificación.
        .py-3.py-md-4(titulo="Segunda comprobación de identidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Segunda comprobación de identidad
              p.mb-0 La verificación en dos pasos agrega una comprobación adicional después de la contraseña. Cuando las credenciales utilizadas corresponden a factores distintos, como una contraseña y un dispositivo o dato biométrico, se habla de autenticación de dos factores.
      p.mb-5 Entre los mecanismos pueden encontrarse aplicaciones autenticadoras, llaves de seguridad, códigos o notificaciones de aprobación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos básicos de seguridad
      p.mb-5 Los procedimientos de seguridad son acciones organizadas que permiten prevenir, detectar y responder ante riesgos digitales. Pueden integrarse en las actividades cotidianas sin requerir procesos complejos.
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Entre los procedimientos recomendados se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener actualizado el sistema operativo y las aplicaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar los permisos antes de instalar aplicaciones. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar bloqueo de pantalla. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar copias de seguridad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Configurar opciones confiables de recuperación de cuenta. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar inicios de sesión recientes. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cerrar sesiones en equipos compartidos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Retirar accesos que ya no se utilizan. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Descargar #[i software] únicamente desde sitios oficiales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar redes públicas al manejar información sensible. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar archivos sospechosos antes de abrirlos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cambiar las credenciales cuando exista evidencia o sospecha de exposición.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img22.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actuación ante una situación sospechosa
      p.mb-5 Cuando existe sospecha de que una cuenta, archivo o dispositivo fue comprometido, resulta importante actuar de manera ordenada y oportuna. Ante una situación sospechosa, se recomienda seguir estas acciones:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img23.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 1
                p.mb-0.text-center Cambiar la contraseña de la cuenta afectada.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img24.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 2
                p.mb-0.text-center Cerrar las sesiones abiertas en otros dispositivos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img25.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 3
                p.mb-0.text-center Activar o revisar el mecanismo adicional de autenticación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img26.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 4
                p.mb-0.text-center Comprobar los correos y números asociados con la recuperación de la cuenta.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img27.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 5
                p.mb-0.text-center Revisar la actividad reciente.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img28.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 6
                p.mb-0.text-center Eliminar aplicaciones o accesos desconocidos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img29.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 7
                p.mb-0.text-center Revisar archivos modificados o compartidos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img30.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 8
                p.mb-0.text-center Informar a los contactos si pudieron recibir mensajes falsos.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img31.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 9
                p.mb-0.text-center Ejecutar las herramientas de seguridad disponibles en el dispositivo.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t5/img32.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Paso 10
                p.mb-0.text-center Recuperar la información desde una copia de seguridad cuando haya sido eliminada o alterada.
      p.mb-5 La aplicación de estas acciones puede comprenderse mediante el siguiente ejemplo:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img33.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Una cuenta de correo registra un inicio de sesión desconocido. Se cambia la contraseña, se cierran las sesiones abiertas, se revisa el mecanismo adicional de autenticación y se comprueban los accesos recientes. Después se eliminan permisos desconocidos y se revisa si fueron enviados mensajes o modificados archivos sin autorización.
      p.mb-0 La seguridad requiere atención continua. Una contraseña adecuada, dispositivos actualizados y configuraciones seguras deben complementarse con hábitos responsables.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Huella digital, reputación en línea y protección de la información personal
      p.mb-5 La huella digital es el rastro que se genera al utilizar internet, aplicaciones, dispositivos y plataformas. Incluye acciones como publicaciones, búsquedas, interacciones o registros de acceso, y puede influir en la reputación en línea. La huella digital puede generarse de las siguientes maneras:
      .bg-carrusel
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-4.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img34.png', alt="" ).m-auto
                  h4.text-center Huella activa
                  .caja-4_p
                    p.mb-0.text-center Se produce mediante acciones realizadas conscientemente, como publicar, comentar, compartir archivos o completar formularios.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-4.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img35.png', alt="" ).m-auto
                  h4.text-center Huella pasiva
                  .caja-4_p
                    p.mb-0.text-center Se genera mediante datos recopilados durante el uso de servicios digitales, como información de navegación, ubicación, preferencias o actividad.
      p La protección de la información personal implica decidir qué datos se comparten, con quién, mediante qué plataforma y bajo qué condiciones. También requiere considerar que las publicaciones, permisos e interacciones pueden tener efectos sobre la privacidad y la reputación.
      p.mb-5 Se invita a acceder al siguiente pódcast para reconocer cómo las acciones cotidianas construyen la huella digital y fortalecer prácticas responsables para proteger la reputación en línea y la información personal:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-5(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t5/img36.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Huella digital, reputación y protección de la información&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t5/img37.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t5/audios/audio-ej.mp3'
export default {
  name: 'Tema5',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
