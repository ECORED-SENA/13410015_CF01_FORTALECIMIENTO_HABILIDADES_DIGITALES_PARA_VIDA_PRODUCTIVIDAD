export default {
  global: {
    Name: 'Gestión segura de información y recursos digitales',
    Description:
      'Este componente aborda la búsqueda, selección, organización, almacenamiento y protección de información digital mediante herramientas de consulta, criterios de calidad, protocolos de gestión y prácticas de ciberseguridad. También integra el uso seguro de dispositivos y redes, con el propósito de prevenir riesgos, proteger los datos y gestionar los recursos digitales de manera responsable.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Información digital, datos y calidad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de información digital y su importancia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Datos: concepto, tipos y relación con la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Organización de la información digital',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Elementos de calidad de la información: utilidad, fiabilidad, precisión e integridad',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Búsqueda, selección y validación de recursos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Herramientas de búsqueda de información: navegadores, buscadores y bases de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Palabras clave, operadores lógicos y filtros de búsqueda',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Fuentes de información digital: procedencia, autoría y confiabilidad',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Patentes, licenciamiento y uso responsable de recursos digitales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión, almacenamiento y recuperación de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Protocolos de gestión de información digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Organización mediante carpetas, etiquetas y nombres de archivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Tipos de almacenamiento: local, dispositivos físicos y nube',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Copias de seguridad, acceso, recuperación y protección de archivos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Dispositivos digitales, redes y acceso seguro a la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Dispositivos digitales: concepto, tipos, partes básicas y funciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Uso de dispositivos para buscar, almacenar y gestionar información',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Redes públicas y privadas: concepto, características, ventajas y desventajas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Riesgos asociados al uso de dispositivos y redes digitales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad digital, vulnerabilidades y protección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Concepto de seguridad digital y seguridad de la información',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Riesgos y amenazas en la protección de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Vulnerabilidades digitales, contraseñas y procedimientos de seguridad',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Huella digital, reputación en línea y protección de la información personal',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normatividad, delitos informáticos y mitigación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Normativa digital y uso de datos por terceros',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Delitos informáticos y prácticas comunes de ataque en entornos digitales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Herramientas y procedimientos de protección contra amenazas digitales',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Plan básico de mitigación de riesgos para la gestión segura de información',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Almacenamiento en la nube',
      significado:
        'modalidad que permite guardar información en servidores accesibles mediante internet para consultarla, editarla, compartirla o sincronizarla desde diferentes dispositivos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto estructurado de datos que permite almacenar, organizar, consultar y recuperar información mediante criterios definidos.',
    },
    {
      termino: 'Copia de seguridad',
      significado:
        'duplicado de información importante que se conserva para facilitar su recuperación ante pérdida, eliminación, daño o alteración de los archivos originales.',
    },
    {
      termino: 'Fiabilidad',
      significado:
        'grado de confianza que ofrece una información según la procedencia, autoría, actualidad, respaldo y posibilidad de verificar su contenido.',
    },
    {
      termino: 'Huella digital',
      significado:
        'rastro de datos y actividades que se genera al utilizar internet, aplicaciones, dispositivos, plataformas y servicios digitales.',
    },
    {
      termino: 'Integridad',
      significado:
        'propiedad que permite mantener la información completa, coherente y protegida frente a modificaciones o alteraciones no autorizadas.',
    },
    {
      termino: 'Licenciamiento',
      significado:
        'mecanismo mediante el cual se establecen las condiciones para usar, copiar, distribuir o modificar una obra o recurso digital.',
    },
    {
      termino: 'Malware',
      significado:
        'programa malicioso diseñado para dañar, alterar, bloquear, robar información o afectar el funcionamiento de un dispositivo o sistema.',
    },
    {
      termino: 'Mitigación de riesgos',
      significado:
        'proceso orientado a reconocer amenazas, valorar sus posibles consecuencias y aplicar medidas que reduzcan su probabilidad de ocurrencia o su impacto.',
    },
    {
      termino: 'Operadores lógicos',
      significado:
        'recursos utilizados para combinar, relacionar o excluir términos dentro de una consulta con el fin de delimitar y mejorar los resultados de búsqueda.',
    },
    {
      termino: 'Phishing',
      significado:
        'práctica de engaño que utiliza mensajes o recursos falsos para intentar obtener contraseñas, códigos, información personal o datos financieros.',
    },
    {
      termino: 'Protocolo de gestión de información digital',
      significado:
        'conjunto de reglas, pasos o criterios que orientan la clasificación, almacenamiento, denominación, acceso, actualización, respaldo y recuperación de la información.',
    },
    {
      termino: 'Red pública',
      significado:
        'red digital disponible para múltiples usuarios, cuyas condiciones de seguridad y configuración no siempre están bajo el control de la persona que se conecta.',
    },
    {
      termino: 'Seguridad digital',
      significado:
        'conjunto de prácticas, herramientas y procedimientos orientados a proteger información, dispositivos, cuentas, comunicaciones y servicios tecnológicos frente a riesgos y accesos no autorizados.',
    },
    {
      termino: 'Vulnerabilidad digital',
      significado:
        'debilidad que puede ser aprovechada para afectar un dispositivo, cuenta, red, aplicación o archivo y que puede originarse en factores técnicos, humanos, físicos, de configuración o de procedimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2009, 5 de enero). Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado —denominado «de la protección de la información y de los datos»— y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1676699',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Departamento Administrativo de la Función Pública.',
      link: 'https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Equipo editorial de IONOS. (2025, 6 de noviembre). Almacenamiento en la nube: qué es y cómo funciona. IONOS.',
      link: 'https://www.ionos.com/es-us/digitalguide/servidores/know-how/almacenamiento-en-la-nube-que-es-y-como-funciona/',
    },
    {
      referencia:
        'MCM Business Tech-Co. (s. f.). Amenazas digitales: ¿Qué son y cómo prevenirlas en tu empresa?',
      link: 'https://blog.mcmtechco.com/amenazas-digitales',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (s. f.). 2FA.Computer Security Resource Center.',
      link: 'https://csrc.nist.gov/glossary/term/2fa',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2025, 20 de agosto). How do I create a good password?',
      link: 'https://www.nist.gov/cybersecurity-and-privacy/how-do-i-create-good-password',
    },
    {
      referencia:
        'Patterson, N. (2025, 19 de septiembre). What is cybersecurity and why is it important? Southern New Hampshire University.',
      link: 'https://www.snhu.edu/about-us/newsroom/stem/what-is-cyber-security',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
