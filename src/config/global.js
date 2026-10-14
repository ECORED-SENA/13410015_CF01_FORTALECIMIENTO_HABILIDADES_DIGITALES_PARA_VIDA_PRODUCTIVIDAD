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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
