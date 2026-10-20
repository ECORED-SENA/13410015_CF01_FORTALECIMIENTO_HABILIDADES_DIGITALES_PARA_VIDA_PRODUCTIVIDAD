<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Normatividad, delitos informáticos y mitigación de riesgos
      p.mb-5 La gestión segura de información también requiere reconocer responsabilidades, límites y medidas de actuación frente al uso de datos y recursos tecnológicos. La normativa, la prevención de acciones que pueden comprometer la seguridad digital y la gestión de riesgos contribuyen a proteger la información y orientar decisiones responsables en los entornos digitales. 
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Normativa digital y uso de datos por terceros
      p.mb-5 La normativa digital orienta el tratamiento responsable de la información y establece responsabilidades sobre su uso. En Colombia, la #[b Ley 1581 de 2012] regula la protección de datos personales y su recolección, almacenamiento, uso, circulación y supresión. Los aspectos esenciales para comprender su tratamiento se presentan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Protección de datos personales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Protección de datos personales
              p Antes de entregar, publicar o compartir información personal, es necesario considerar quién la solicita, cuál es su finalidad, cómo será utilizada, durante cuánto tiempo se conservará y qué medidas de protección se aplicarán.
              p.mb-0 La Ley 1581 establece que el tratamiento debe responder a una finalidad legítima e informada y, como regla general, contar con consentimiento previo, expreso e informado del titular, salvo las excepciones previstas legalmente.
        .py-3.py-md-4(titulo="Uso de datos por terceros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Uso de datos por terceros
              p El uso por terceros ocurre cuando una persona, empresa, institución, plataforma o aplicación recolecta, almacena, analiza, comparte o utiliza información de otra persona.
              p.mb-0 Este tratamiento requiere una finalidad legítima, condiciones de seguridad y cumplimiento de las reglas aplicables. El riesgo aumenta cuando los datos se solicitan sin justificación, se comparten sin autorización o se utilizan para finalidades diferentes a las informadas
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Información y datos que requieren especial cuidado
      p El nivel de protección debe responder a la naturaleza de la información. Algunos datos, credenciales y registros pueden generar mayores riesgos para la privacidad o la seguridad cuando se divulgan o utilizan indebidamente. Las agrupaciones que se presentan corresponden a una organización didáctica del contenido y no a categorías jurídicas establecidas por la Ley 1581 de 2012.
      p.mb-5 La información que requiere mayor cuidado puede agruparse en las siguientes categorías:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificación y contacto
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Nombres completos y números de identificación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Direcciones de residencia o ubicación en tiempo real. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Teléfonos personales y correos principales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Fotografías de documentos personales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso y seguridad
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Contraseñas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Códigos de verificación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Preguntas o datos utilizados para recuperar cuentas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información personal de especial cuidado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Información financiera o bancaria. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Datos de salud. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Registros biométricos, como huellas, rostro o voz.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información reservada o de terceros
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Información académica o laboral reservada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Fotografías, videos o información relacionada con niñas, niños y adolescentes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Información suministrada mediante formularios, encuestas o aplicaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Al diligenciar formularios o instalar aplicaciones, conviene revisar qué información y permisos se solicitan y con qué finalidad. El acceso a contactos, cámara, micrófono, ubicación o archivos debe corresponder con las funciones que realmente requiere el servicio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para el uso responsable de datos
      p.mb-5 La siguiente información relaciona seis criterios prácticos con su aplicación en el tratamiento responsable de los datos. La estructura comparativa justifica el uso de una tabla.
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Criterios para el uso responsable de datos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.texto-left Aplicación práctica
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad
                      td.texto-left Los datos deben solicitarse para un propósito claro y legítimo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Autorización
                      td.texto-left La persona debe conocer y aceptar el tratamiento cuando corresponda.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad
                      td.texto-left La información debe protegerse frente a pérdida, acceso o modificación no autorizada.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Necesidad
                      td.texto-left Solo debe solicitarse la información necesaria para el trámite o servicio.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Transparencia
                      td.texto-left Debe ser posible conocer quién utiliza los datos y con qué propósito.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Confidencialidad
                      td.texto-left La información personal debe protegerse frente a divulgaciones no autorizadas.
          p.mb-0 El uso responsable también incluye respetar la información de otras personas. Fotografías, documentos, conversaciones, teléfonos, direcciones u otros datos personales no deben publicarse o compartirse sin considerar la autorización y los derechos de quienes aparecen relacionados.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Delitos informáticos y prácticas comunes de ataque en entornos digitales
      p.mb-5 Los delitos informáticos comprenden conductas realizadas mediante tecnologías que pueden afectar información, datos o sistemas. En Colombia, la #[b Ley 1273 de 2009] incorporó al Código Penal disposiciones para proteger la información y los datos. Estas conductas pueden iniciarse mediante acciones como acceder a enlaces falsos, descargar archivos maliciosos, entregar credenciales o utilizar plataformas poco confiables.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Prácticas comunes de ataque
      p.mb-5 Las prácticas comunes de ataque pueden agruparse según la forma en que comprometen la información:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Engaño y manipulación").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b #[i Phishing]:] utiliza mensajes falsos para intentar obtener contraseñas, códigos, información personal o datos financieros.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ingeniería social:] manipula a una persona para inducirla a entregar información o realizar una acción insegura.
            .row(titulo="Suplantación y fraude").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Suplantación de identidad:] utiliza el nombre, imagen, cuenta o datos de otra persona para engañar o cometer fraude.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fraude digital:] emplea correos, plataformas, redes sociales, tiendas falsas u otros medios digitales para realizar engaños.
            .row(titulo="Programas maliciosos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b #[i Malware:]] corresponde a programas maliciosos capaces de robar, dañar o bloquear información.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b #[i Ransomware:]] bloquea archivos o sistemas y exige un pago para intentar recuperar el acceso.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicaciones maliciosas:] aparentan cumplir una función legítima, pero pueden recopilar datos o afectar el dispositivo.
            .row(titulo="Acceso e interceptación").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Interceptación de datos: consiste en capturar información transmitida mediante redes o sistemas sin autorización.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Acceso abusivo: implica ingresar o permanecer en cuentas, sistemas, archivos o plataformas sin autorización.
            .row(titulo="Enlaces y sitios falsos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Enlaces falsos:] conducen a páginas que imitan servicios legítimos con el propósito de obtener credenciales u otra información.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Sugerencia de imagen:] conjunto de amenazas digitales representadas mediante mensaje falso, identidad suplantada, programa malicioso y acceso indebido.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img7.png", alt="" style="width: 350px").m-auto
      p.mb-5 Una situación cotidiana permite relacionar varias señales y prácticas de ataque:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t6/img8.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Una persona recibe un mensaje que informa que su cuenta será bloqueada de inmediato y solicita ingresar mediante un enlace. La dirección no coincide con el sitio oficial y la página solicita contraseña y código de verificación. La urgencia, el enlace diferente y la solicitud de credenciales constituyen señales que requieren detener la acción y comprobar la información por un canal oficial.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Señales de posible ataque digital
      p.mb-5 Las siguientes señales pueden indicar un intento de ataque o una situación que requiere verificación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Urgencia y solicitudes de información
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Mensajes que exigen actuar de inmediato. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Solicitudes de contraseñas o códigos de verificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enlaces y archivos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Direcciones diferentes al sitio oficial. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Archivos adjuntos que no fueron solicitados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ofertas y páginas imitadas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Promociones demasiado atractivas o poco realistas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Páginas que imitan nombres, logotipos o apariencia de entidades conocidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actividad no reconocida
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Cambios inesperados en una cuenta. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Publicaciones, mensajes o inicios de sesión no autorizados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicaciones y permisos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Aplicaciones que solicitan permisos excesivos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Comportamientos que no corresponden con la función esperada de la aplicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img13.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Ante una señal de alerta, se recomienda detener la acción, evitar entregar información o descargar archivos y verificar la situación mediante canales oficiales.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Herramientas y procedimientos de protección contra amenazas digitales
      p.mb-5 La protección digital requiere combinar herramientas tecnológicas con prácticas responsables. Las soluciones técnicas pueden ayudar a detectar amenazas, restringir accesos o recuperar información, pero deben mantenerse actualizadas y utilizarse junto con procedimientos adecuados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de protección digital
      p.mb-5 La información relaciona cada herramienta con una función específica, por lo que una tabla sencilla permite organizarla con claridad. Las herramientas más comunes y su función principal se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Herramientas de protección digital
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Herramienta
                      th.texto-left Función principal
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Antivirus o #[i antimalware]
                      td.texto-left Detecta y bloquea programas maliciosos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold #[i Firewall]
                      td.texto-left Controla conexiones entrantes y salientes del dispositivo o red.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gestor de contraseñas
                      td.texto-left Ayuda a crear y almacenar claves seguras.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Verificación en dos pasos
                      td.texto-left Agrega una capa adicional para acceder a cuentas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Copias de seguridad
                      td.texto-left Permiten recuperar archivos ante pérdida o daño.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cifrado
                      td.texto-left Protege la información para que no pueda ser leída sin autorización.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Actualizaciones
                      td.texto-left Corrigen fallas y mejoran la seguridad del sistema o aplicación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Filtros antispam
                      td.texto-left Reducen correos maliciosos o no deseados.
      p.mb-5 Estas herramientas deben seleccionarse según el tipo de información y el nivel de riesgo. Los datos personales, laborales o reservados requieren medidas de protección más rigurosas que la información destinada a divulgación pública.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimientos básicos de protección
      p.mb-5 Los procedimientos de protección pueden organizarse en tres grupos de acciones:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Dispositivos y aplicaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dispositivos y aplicaciones
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Mantener actualizados el sistema operativo, navegador y aplicaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Revisar permisos antes de instalar aplicaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Descargar programas únicamente desde sitios oficiales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Utilizar bloqueo de pantalla. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Eliminar aplicaciones que ya no se utilizan.
        .py-3.py-md-4(titulo="Cuentas y accesos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cuentas y accesos
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Utilizar contraseñas diferentes en las cuentas importantes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Activar la verificación en dos pasos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | No compartir códigos de verificación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Cerrar sesiones en equipos compartidos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Revisar y retirar accesos concedidos a terceros.
        .py-3.py-md-4(titulo="Información y comunicaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Información y comunicaciones
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Evitar enlaces o archivos de origen desconocido. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Configurar las opciones de privacidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Realizar copias de seguridad periódicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Verificar los destinatarios antes de enviar información.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Procedimiento para reportar abusos o amenazas en línea
      p Cuando se identifica una amenaza, abuso, suplantación, acoso, fraude o publicación indebida, conviene actuar de forma ordenada para reducir la exposición y conservar información que facilite el reporte. 
      p.mb-5 La respuesta puede organizarse en una única secuencia distribuida entre una fase inicial y una fase de seguimiento y reporte:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Respuesta inicial").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 1.] No responder al atacante o remitente sospechoso.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 2.] Conservar evidencias como capturas, enlaces, correos, fechas, nombres de usuario o mensajes.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 3.] Cambiar las contraseñas cuando exista sospecha de acceso no autorizado.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 4.] Cerrar sesiones abiertas en otros dispositivos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 5.] Reportar el contenido o la cuenta mediante las opciones disponibles en la plataforma.
            .row(titulo="Seguimiento y reporte").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 6.] Informar a los contactos cuando pudieron recibir mensajes falsos desde una cuenta comprometida.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 7.] Revisar permisos y accesos vinculados a la cuenta.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 8.] Eliminar aplicaciones sospechosas o desconocidas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 9.] Consultar canales oficiales de soporte o denuncia cuando corresponda.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Paso 10.] Evitar eliminar evidencias antes de realizar el reporte.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img17.png", alt="" style="width: 250px").m-auto
      p.mb-0 La información utilizada para reportar debe ser clara y verificable. Capturas, enlaces, fechas y registros pueden contribuir a documentar lo ocurrido, mientras que la publicación abierta de detalles puede aumentar la exposición de información personal.
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Plan básico de mitigación de riesgos para la gestión segura de información
      p.mb-5 La mitigación de riesgos consiste en reconocer posibles amenazas, analizar sus consecuencias y definir medidas que permitan reducir la probabilidad de ocurrencia o disminuir su impacto. Un plan básico ayuda a organizar decisiones preventivas y acciones de respuesta frente a situaciones como pérdida de archivos, acceso no autorizado, daño de información o exposición de datos. Un plan básico articula tres decisiones fundamentales antes, durante y después de una situación de riesgo:
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img18.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Identificar
            p.mb-0.text-center Se reconoce qué información requiere mayor protección y cuáles riesgos pueden afectarla.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t6/img19.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Valorar y prevenir
            p.mb-0.text-center Se considera la probabilidad y el impacto del riesgo y se establecen medidas para reducir su ocurrencia.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img20.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Responder y revisar
            p.mb-0.text-center Se definen acciones para actuar cuando el riesgo ocurre y se revisan periódicamente las medidas establecidas.
      p.mb-5 Se invita a consultar el siguiente video para aplicar una secuencia práctica de identificación, valoración, prevención, respuesta y seguimiento de riesgos asociados con la gestión segura de información digital:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2IzaQ6tiGVw?si=plCbvVI4s6kJ-rFL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Del riesgo a la acción: plan básico de mitigación”

</template>

<script>
export default {
  name: 'Tema6',
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
