export default {
  global: {
    componenteFormativo: 'Fundamentos de la calidad del <em>software</em>',
    descripcionCurso:
      'En este módulo el aprendiz identifica que un <em>software</em> con calidad implica la utilización de metodologías o procedimientos estándares para el análisis, diseño, programación y prueba del <em>software</em> que permitan uniformar la filosofía de trabajo, en aras de lograr una mayor confiabilidad, mantenibilidad y facilidad de prueba, a la vez que eleven la productividad, tanto para la labor de desarrollo como para el control de la calidad del <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Descripción de la Idea de Negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Empresa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Misión',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Visión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Objetivos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proceso de desarrollo de <em>software</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estándares ISO/IEC 25000 SQuaRE, ISO/IEC 15504, IEEE.',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Modelo CMMI',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Calidad en el proceso de desarrollo de <em>software</em>',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Modelos de referencia para la calidad en el proceso',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Calidad del <em>software</em> relacionada con el producto',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Calidad relacionada con las personas',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Documentar el proceso de calidad de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diseñar los instrumentos de calidad de <em>software</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicar los instrumentos de calidad de <em>software</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Beck, K., & Andres, C. (2004b). Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series) (2nd ed.). Addison-Wesley.',
    },
    {
      referencia:
        'Bustamante Ramírez, J. (2011). Sistema de informes para pruebas de software. Obtenido de ',
      link:
        'http://bibliotecadigital.iue.edu.co/xmlui/handle/20.500.12717/153 ',
    },
    {
      referencia:
        'Clemente, P. J., & Gómez, A. (2014). Aplicación de un proceso de mejora continua en una. Obtenido de ',
      link: 'http://hdl.handle.net/2099/15497',
    },
    {
      referencia:
        'Jeffries, R. (2011). What is Extreme Programming? Ronjeffries.Com. ',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). The Rational Unified Process: An Introduction (3rd Edition) (3rd ed.). Addison-Wesley Professional.',
    },
    {
      referencia:
        'Maida, EG, Pacienzia, J. (2015). Metodologías de desarrollo de software [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería “Fray Rogelio Bacon”. Universidad Católica Argentina, 2015. Disponible en: ',
      link: 'https://bit.ly/3hJMwXP  [Fecha de consulta: 17-sep-2021]',
    },
    {
      referencia:
        'Manifiesto por el Desarrollo Ágil de Software. (2001). Agilemanifesto.Org. ',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Martin, J. (1991). Rapid Application Development. Macmillan Coll Div.',
    },
    {
      referencia:
        'Mera Paz, J. A. (19 de 10 de 2016). Pruebas de Calidad software. Obtenido de ',
      link: 'https://repository.ucc.edu.co/handle/20.500.12494/962',
    },
    {
      referencia:
        'Royce, W.W. (1970) Managing the Development of Large Software Systems. Proceedings of IEEE WESCON, 26, 328-388.',
    },
    {
      referencia:
        'SCRUMstudy. (2013). A Guide to the Scrum Body of Knowledge (SBOK Guide) (2013th ed.). VMEdu Inc.',
    },
    {
      referencia:
        'Sommerville, I., Galipienso, M. I. A., & Martinez, A. B. (2005). Ingenieria del Software. Pearson Educación.',
    },
  ],
  glosario: [
    {
      termino: 'Incidencia',
      significado:
        'Suceso que se produce durante una actividad y puede causar, una disminución de calidad de este.',
    },
    { termino: 'PSP', significado: '<em>Personal Software Personal</em>' },
    { termino: 'QA', significado: 'Calidad de <em>software</em>' },
    {
      termino: 'SQA',
      significado: 'Aseguramiento de la calidad de <em>software</em>',
    },
    { termino: 'TSP', significado: '<em>Teams Software Personal</em>' },
  ],
  complementario: [
    {
      texto:
        'Galin, D. (2004). <em>Software Quality From theory to implementation. Pearson Education Limited</em>. (Consultado 6/11/2021)',
      tipo: 'Libro',
      link:
        'http://desy.lecturer.pens.ac.id/Manajemen%20Kualitas%20Perangkat%20Lunak/ebook/Software%20Quality%20Assurance%20From%20Theory%20to%20Implementation.pdf',
    },
    {
      texto:
        'Galin, D. (2004). <em>Software Quality From theory to implementation. Pearson Education Limited.</em> (Consultado 6/11/2021)',
      tipo: 'Libro',
      link:
        'http://desy.lecturer.pens.ac.id/Manajemen%20Kualitas%20Perangkat%20Lunak/ebook/Software%20Quality%20Assurance%20From%20Theory%20to%20Implementation.pdf',
    },
    {
      texto:
        'Callejas Cuervo, M., Alarcón Aldana, A. C., & Álvarez Carreño, A. M. (01 de 06 de 2017).',
      tipo: 'Artículo',
      link:
        'https://revistas.unilibre.edu.co/index.php/entramado/article/view/428',
    },
    {
      texto:
        'Chavarría, A., Bayona Oré, S., & Pastor, C. (2016). Aseguramiento de la Calidad en el Proceso de Desarrollo de Software utilizando CMMI, TSP y PSp.',
      tipo: 'Artículo',
      link: 'https://scielo.pt/pdf/rist/n20/n20a06.pdf',
    },
    {
      texto:
        'Ch Ga, F. (2017). Plan de pruebas de <em>software</em>. Obtenido de mundotesting',
      tipo: 'Página Web',
      link: 'https://mundotesting.com/plan-de-pruebas-de-software/',
    },
    {
      texto:
        'Canós, J. H., Letelier, P., & Penad, C. (s.f.). Metodologías Ágiles en el Desarrollo de Software.',
      tipo: 'Artículo',
      link:
        'http://aleteya.cs.buap.mx/~jlavalle/papers/agileMethodology/TodoAgil.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ervin Andrade',
        cargo: 'Experto temático',
        centro: 'SENA Regional Cauca CTPI',
      },
      {
        nombre: 'Peter Pinchao',
        cargo: 'Experto temático',
        centro: 'SENA Regional Cauca CTPI',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luís Arévalo',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
