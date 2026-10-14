<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Dispositivos digitales, redes y acceso seguro a la información
      p.mb-5 El acceso a la información digital requiere utilizar adecuadamente los dispositivos y las conexiones que permiten consultar, crear, almacenar y compartir recursos. Además de facilitar actividades personales, académicas y laborales, estos medios deben emplearse con criterios de responsabilidad y seguridad para disminuir la exposición de la información. En este tema se presentarán los elementos que intervienen en el uso responsable de dispositivos y redes para acceder a información digital.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Dispositivos digitales: concepto, tipos, partes básicas y funciones
      p Un dispositivo digital es un equipo electrónico que permite recibir, procesar, almacenar y transmitir información. Entre los más comunes se encuentran computadores, tabletas, teléfonos inteligentes, servidores, cámaras, dispositivos de almacenamiento y equipos de red, cada uno con funciones y capacidades específicas según la tarea.
      p.mb-5 Algunos tipos de dispositivos y sus principales usos se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Tipos de dispositivos digitales, funciones y ejemplos de uso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de dispositivo
                      th.ajuste-border-tabla.texto-left Función principal
                      th.texto-left Ejemplo de uso
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Computador de escritorio
                      td.ajuste-border-tabla.texto-left Procesar información, crear documentos, instalar programas y gestionar archivos.
                      td.texto-left Elaborar informes, consultar información y almacenar documentos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Computador portátil
                      td.ajuste-border-tabla.texto-left Realizar tareas digitales con facilidad de traslado.
                      td.texto-left Trabajar desde diferentes lugares y conectarse a redes inalámbricas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Teléfono inteligente
                      td.ajuste-border-tabla.texto-left Comunicar, consultar información, capturar imágenes y utilizar aplicaciones móviles.
                      td.texto-left Revisar correo, acceder a plataformas y escanear documentos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tableta
                      td.ajuste-border-tabla.texto-left Consultar recursos, tomar notas, diseñar y desarrollar actividades digitales.
                      td.texto-left Revisar contenidos, realizar actividades y participar en reuniones virtuales.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dispositivo de almacenamiento
                      td.ajuste-border-tabla.texto-left Guardar, trasladar o respaldar información.
                      td.texto-left Utilizar una memoria USB o disco externo para conservar archivos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Equipo de red
                      td.ajuste-border-tabla.texto-left Permitir o distribuir la conexión entre dispositivos.
                      td.texto-left Utilizar un enrutador (#[i router]) para conectar varios equipos a internet.
          p.mb-5 Cada dispositivo responde mejor a determinadas necesidades. Un computador puede ser apropiado para archivos pesados o programas especializados; un teléfono inteligente facilita consultas rápidas y registro de evidencias; y una memoria USB permite trasladar información, aunque no conviene utilizarla como único respaldo.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Partes básicas de un dispositivo digital
          p Los dispositivos digitales integran componentes físicos y lógicos. Los componentes físicos corresponden a las partes materiales del equipo, mientras que los lógicos comprenden sistemas, programas y configuraciones que permiten su funcionamiento.
          p.mb-5 Los principales componentes pueden organizarse en dos grupos:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Componentes físicos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Componentes físicos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Pantalla:] presenta documentos, imágenes, videos, aplicaciones y páginas web. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Teclado:] permite ingresar textos, números, comandos y atajos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Ratón o panel táctil:] facilita seleccionar y desplazarse entre elementos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Procesador:] ejecuta instrucciones y permite el funcionamiento general del equipo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Memoria RAM:] mantiene temporalmente aplicaciones y procesos en ejecución. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Unidad de almacenamiento:] conserva archivos, programas y sistema operativo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Batería o fuente de energía:] suministra alimentación eléctrica. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Puertos de conexión:] permiten conectar memorias, cargadores y otros periféricos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Cámara y micrófono:] permiten capturar imágenes y audio y participar en comunicaciones digitales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Tarjeta o adaptador de red:] permite conectarse a internet o a una red local.
            .py-3.py-md-4(titulo="Componentes lógicos")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Componentes lógicos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Sistema operativo:] administra el funcionamiento general del dispositivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Aplicaciones o programas:] permiten desarrollar tareas específicas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Controladores:] facilitan la comunicación entre el sistema y los componentes físicos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Antivirus o herramientas de seguridad:] ayudan a detectar amenazas o comportamientos sospechosos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | #[b Configuraciones de usuario:] permiten ajustar privacidad, accesos, idioma, red, almacenamiento y seguridad.
      p.mb-5 La relación entre los componentes y el funcionamiento del dispositivo puede comprenderse mediante el siguiente ejemplo:
      .caja-2.color-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            h5 Ejemplo aplicado
            p.mb-0 Si un equipo no logra conectarse a internet, el inconveniente puede estar relacionado con la configuración inalámbrica, el adaptador de red, la propia red o el servicio contratado. Si un archivo no se almacena correctamente, pueden existir problemas de espacio disponible, permisos o funcionamiento de la unidad de almacenamiento.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img3.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Funciones básicas de los dispositivos digitales
      p.mb-5 Las principales funciones de los dispositivos digitales son:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Componentes físicos
                p.mb-0.text-center Permite recibir información mediante teclado, cámara, micrófono, pantalla táctil, escáner o formularios.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Procesamiento
                p.mb-0.text-center Permite organizar y transformar datos mediante programas o aplicaciones.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Almacenamiento
                p.mb-0.text-center Permite conservar documentos, imágenes, videos, archivos y configuraciones.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Salida de información
                p.mb-0.text-center Permite generar resultados mediante pantalla, impresora, altavoces o archivos digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img8.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Comunicación
                p.mb-0.text-center Permite enviar y recibir información mediante redes, correo electrónico, mensajería o plataformas.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img9.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Sincronización
                p.mb-0.text-center Permite mantener información actualizada entre diferentes dispositivos o servicios en la nube.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t4/img10.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Seguridad
                p.mb-0.text-center Permite configurar contraseñas, bloqueos, permisos y mecanismos de protección.
      p.mb-0 Antes de utilizar un dispositivo con información importante, conviene comprobar su estado general. La falta de actualizaciones, espacio insuficiente, ausencia de bloqueo o presencia de programas desconocidos puede aumentar los riesgos asociados con su uso.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Uso de dispositivos para buscar, almacenar y gestionar información
      p.mb-5 Los dispositivos digitales permiten acceder a información, organizar archivos, guardar recursos y desarrollar actividades en línea. Su selección y uso deben responder a la tarea que se realiza, la información utilizada y las condiciones de seguridad disponibles. El uso de los dispositivos puede organizarse según tres finalidades principales:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Buscar información")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Buscar información
              p.mb-0 Para realizar búsquedas se requiere un navegador actualizado, una conexión confiable y fuentes seguras. Deben evitarse las descargas desde sitios desconocidos, los enlaces sospechosos y el ingreso de información personal en plataformas no verificadas.
        .py-3.py-md-4(titulo="Almacenar información")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Almacenar información
              p.mb-0 Antes de guardar archivos se considera la capacidad disponible, su ubicación, el nombre asignado y la existencia de respaldos. Una organización deficiente dificulta la recuperación posterior, mientras que la ausencia de protección puede exponer los archivos a pérdida o acceso no autorizado.
        .py-3.py-md-4(titulo="Gestionar información")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Gestionar información
              p.mb-0 El dispositivo debe permitir clasificar archivos, revisar versiones, compartir recursos, proteger datos y recuperar documentos. Estas actividades pueden realizarse mediante carpetas locales, servicios en la nube, gestores documentales, correo electrónico, plataformas colaborativas o sistemas institucionales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para usar dispositivos en la búsqueda de información
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p Las principales recomendaciones según el tipo de uso son las siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar navegadores actualizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar que las páginas consultadas sean confiables.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar ingresar datos personales en sitios sospechosos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No descargar archivos desde enlaces desconocidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comparar información en varias fuentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cerrar sesiones cuando se utilicen equipos compartidos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar guardar contraseñas en dispositivos ajenos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar permisos solicitados por extensiones o aplicaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Usar redes seguras cuando se consulte información sensible.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img14.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recomendaciones para almacenar información en dispositivos
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Crear carpetas organizadas por tema, fecha o actividad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Usar nombres de archivo claros y coherentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Verificar que exista espacio suficiente de almacenamiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Eliminar archivos duplicados o innecesarios.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mantener separada la información personal, académica y laboral.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Guardar copias de respaldo en nube o dispositivo externo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Proteger archivos sensibles con contraseña cuando sea necesario.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar almacenar información importante únicamente en un solo equipo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Revisar periódicamente que los archivos puedan abrirse correctamente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Dispositivos compartidos
      .caja-2(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar guardar contraseñas en el navegador. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cerrar todas las sesiones al finalizar. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Eliminar archivos personales descargados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Limpiar el historial cuando se consulte información sensible. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | No dejar documentos abiertos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Evitar trámites con información financiera o privada. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Utilizar navegación privada cuando resulte pertinente. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Comprobar que no queden cuentas sincronizadas.
            p.mb-0 El uso adecuado de los dispositivos contribuye a mantener el control de la información. La seguridad no depende únicamente del equipo, sino también de los hábitos aplicados durante la búsqueda, almacenamiento y gestión de los recursos. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img16.png', alt='' style="width: 500px").m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Redes públicas y privadas: concepto, características, ventajas y desventajas
      p.mb-5 Una red digital conecta dispositivos para compartir información, servicios y recursos. Puede facilitar el acceso a internet, el intercambio de archivos y el trabajo colaborativo. Para un uso seguro, es importante diferenciar entre redes públicas y privadas, ya que ofrecen distintos niveles de control y exposición. Las características principales de cada tipo de red son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Red pública")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Red pública
              p Permite la conexión de numerosas personas y, generalmente, presenta menor control sobre la identidad de quienes acceden. Puede encontrarse en aeropuertos, hoteles, cafeterías, bibliotecas, centros comerciales o terminales. Entre sus características se encuentran:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | acceso disponible para muchas personas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | menor control sobre los dispositivos conectados; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | seguridad variable; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | posibilidad de redes falsas con nombres similares; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | ausencia de contraseña en algunos casos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | posibles límites de velocidad, tiempo o servicios. 
              p.mb-0 Estas redes requieren mayor precaución cuando se accede a información personal, institucional o financiera.
        .py-3.py-md-4(titulo="Red privada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Red privada
              p Su acceso está restringido a personas autorizadas y puede corresponder a una red doméstica, institucional o empresarial.
              p Entre sus características se encuentran:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | acceso mediante contraseña o autorización; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | mayor administración de dispositivos conectados; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | posibilidad de configurar permisos y restricciones; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | mayor control para compartir recursos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | uso frecuente en hogares, empresas e instituciones; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | posibilidad de aplicar políticas de seguridad. 
              p.mb-0 Una red privada ofrece mayor control, aunque puede presentar riesgos cuando se configura de manera inadecuada.
      p.mb-5 Las principales ventajas y desventajas de ambos tipos de red se presentan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventajas de las redes públicas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Facilitan una conexión rápida fuera del entorno habitual. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Permiten realizar consultas básicas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden ser útiles en situaciones de emergencia. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | No requieren disponer de un plan de datos propio. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Se encuentran disponibles en diferentes espacios. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desventajas de las redes públicas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden exponer información si la red no está protegida. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | No siempre se conoce quién administra la conexión. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Existe riesgo de interceptación de datos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden presentar baja velocidad o estabilidad. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | No son adecuadas para trámites sensibles. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden utilizarse redes falsas para capturar credenciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventajas de las redes privadas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Ofrecen mayor control frente a accesos desconocidos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Facilitan administrar los dispositivos conectados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Permiten compartir recursos con mayor control. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Favorecen la gestión de información interna. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Admiten contraseñas y mecanismos de cifrado. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Permiten limitar o administrar accesos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desventajas de las redes privadas
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Requieren una configuración adecuada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden ser vulnerables ante contraseñas débiles. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Necesitan mantenimiento y actualización. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Pueden afectarse por dispositivos comprometidos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Requieren controlar los usuarios autorizados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img22.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comparación entre redes públicas y privadas
      p.mb-5 La siguiente comparación sintetiza las diferencias relacionadas con acceso, seguridad, uso y riesgos de ambos tipos de red:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Comparación entre redes públicas y privadas
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Red pública
                      th.texto-left Red privada
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Acceso
                      td.ajuste-border-tabla.texto-left Abierto o disponible para muchas personas.
                      td.texto-left Restringido a usuarios autorizados.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad
                      td.ajuste-border-tabla.texto-left Menor control y mayor exposición.
                      td.texto-left Mayor control si está bien configurada.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Uso recomendado
                      td.ajuste-border-tabla.texto-left Consultas generales y navegación básica.
                      td.texto-left Trabajo, estudio, almacenamiento y gestión de información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo principal
                      td.ajuste-border-tabla.texto-left Interceptación de datos o redes falsas.
                      td.texto-left Accesos no autorizados por mala configuración.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ejemplo
                      td.ajuste-border-tabla.texto-left Wi-Fi de una cafetería o aeropuerto.
                      td.texto-left Red del hogar, empresa o institución.
          p.mb-0 Una red privada no es segura de manera automática: su protección depende de la contraseña, el cifrado, la actualización del equipo de red y el control de los dispositivos conectados. De igual forma, utilizar una red pública no implica necesariamente que ocurra un incidente, pero sí requiere mayor precaución.
          Separador
          #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.4 Riesgos asociados al uso de dispositivos y redes digitales
      p.mb-5 Una red privada no es segura de manera automática: su protección depende de la contraseña, el cifrado, la actualización del equipo de red y el control de los dispositivos conectados. De igual forma, utilizar una red pública no implica necesariamente que ocurra un incidente, pero sí requiere mayor precaución.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Riesgos frecuentes
      p.mb-5 Los riesgos más frecuentes pueden diferenciarse según afecten al dispositivo o a la red utilizada:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Dispositivos digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Dispositivos digitales
              p Los principales riesgos son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | pérdida o robo del equipo; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | daño físico; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | ausencia de bloqueo de pantalla; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | contraseñas débiles o compartidas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | instalación de aplicaciones no confiables; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | descarga de archivos con #[i malware]; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | sistemas desactualizados; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | ausencia de copias de seguridad; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | acceso de terceros a archivos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | conexión de memorias USB infectadas. 
        .py-3.py-md-4(titulo="Redes digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Redes digitales
              p Los principales riesgos son:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | conexión a redes Wi-Fi falsas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | interceptación de información en redes públicas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | robo de contraseñas o credenciales; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | acceso no autorizado a dispositivos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | captura de información enviada sin protección; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | redireccionamiento a sitios fraudulentos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | archivos compartidos con permisos incorrectos; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | contraseñas débiles en redes privadas; 
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | falta de actualización del enrutador o equipo de red.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Señales de alerta 
      p.mb-5 Las siguientes señales pueden indicar comportamientos anormales o situaciones que requieren precaución:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Funcionamiento inusual
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | El dispositivo funciona más lento de lo habitual sin una causa identificable. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Se calienta excesivamente o consume batería de manera inusual.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicaciones y navegador
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Aparecen ventanas emergentes o publicidad extraña. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Se instalan aplicaciones que no se reconocen o el navegador redirige a sitios desconocidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conexión sospechosa
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Una red Wi-Fi tiene un nombre similar al de una red conocida, pero no coincide. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Una página solicita datos personales sin una razón clara.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuentas y archivos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Aparecen inicios de sesión no reconocidos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Un archivo cambia de nombre, desaparece o deja de abrirse.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mensajes sospechosos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Se reciben correos o mensajes que solicitan verificar cuentas mediante enlaces desconocidos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Se presentan solicitudes inesperadas de información o credenciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas para reducir riesgos en dispositivos y redes
      p Para reducir los riesgos asociados con dispositivos y redes, se recomiendan las siguientes medidas:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mantener actualizado el sistema operativo y las aplicaciones. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Usar contraseñas fuertes y diferentes para cada cuenta. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Activar autenticación de dos factores cuando sea posible. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evitar redes públicas para trámites financieros o acceso a información sensible. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Verificar el nombre de la red antes de conectarse. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | No abrir enlaces o archivos de remitentes desconocidos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Descargar aplicaciones solo desde tiendas o sitios oficiales. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mantener herramientas de seguridad activas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Bloquear la pantalla del dispositivo cuando no se esté usando. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Realizar copias de seguridad periódicas. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Revisar permisos antes de compartir archivos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Cerrar sesiones en equipos ajenos o compartidos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evitar conectar dispositivos USB desconocidos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Usar redes privadas o conexiones confiables para trabajar con información importante. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img30.png', alt='').m-auto
      p.mb-5 La aplicación conjunta de estas medidas puede comprenderse mediante el siguiente ejemplo:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img31.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-1_p
            h5 Ejemplo aplicado
            p.mb-0 Una persona necesita consultar información institucional desde un lugar público y encuentra dos redes Wi-Fi con nombres muy similares. Antes de conectarse, verifica cuál corresponde al establecimiento. Como debe acceder posteriormente a documentos con información sensible, evita realizar esa actividad mediante la red pública y utiliza una conexión confiable. Al finalizar, cierra las sesiones abiertas y comprueba que el dispositivo no haya almacenado credenciales.
      p.mb-0 El acceso seguro a la información depende tanto de las condiciones del dispositivo y la red como de las prácticas aplicadas durante su uso. Reconocer los riesgos, identificar señales de alerta y adoptar medidas preventivas contribuye a proteger archivos, cuentas y datos frente a posibles amenazas.

</template>

<script>
export default {
  name: 'Tema4',
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
