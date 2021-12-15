<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Marco de referencia

    .row.mb-5
      .col-lg-6
        p Un Marco de Referencia aporta las directrices y saberes teóricos obtenidos con base en un estudio, una investigación y un análisis previo, que permite estimar en este caso que un proceso de calidad fundamentado a través del estudio e investigación; estaría en la capacidad de plantear mejores prácticas y definir procedimientos que optimicen dicho proceso, para garantizar que éste represente una mejora en el proceso de calidad y en la calidad del producto. Por lo anterior este marco de referencia contiene los fundamentos de la calidad del software que permitirá construir un plan de pruebas teniendo en cuenta el proceso de desarrollo de software, los modelos de desarrollo, metodologías de desarrollo tradicionales y ágiles, estándares de calidad, planificación de pruebas de software y la documentación que se debe realizar en el proceso de calidad de software tal como se describen a continuación. 

      .col-lg-6(data-aos='flip-down')
        figure
          img(src='@/assets/curso/t2/f1.jpg' alt='imagen relacionada')

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Proceso de desarrollo de Software

    .row.mb-5
      .col-lg-6
        p El proceso de desarrollo o ciclo de vida del 
          em software
          | , requiere de una serie de etapas con el objetivo de garantizar que el programa desarrollado es fiable, eficiente, seguro y cumple con los requerimientos de los usuarios finales.          
        p Este proceso de desarrollo contiene una serie de fases que permiten validar el proceso de desarrollo del 
          em software 
          | garantizando que se cumplan con los requerimientos para la verificación y aplicación de los procedimientos de desarrollo, comprobando las metodologías y técnicas usadas. Este proceso es muy aplicable en los casos en donde se utilicen metodologías tradicionales como la metodología en cascada, que se describe a continuación, las fases que ésta contiene y en qué momento se realiza las pruebas de calidad de 
          em software.
        h4 Metodología cascada
        p El desarrollo en cascada es un proceso lineal por lo que se identifica en separar los procesos del desarrollo de 
          em software 
          | en diferentes fases que son sucesivas en el contexto de la ejecución del proyecto. A diferencia de los modelos iterativos, cada una de las fases se ejecuta una sola vez, y el resultado de cada fase es un insumo para la siguiente. Esta metodología es usada especialmente en el proceso de desarrollo de 
          em software.
      .col-lg-6.order-lg-last.order-first
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t2/f2.svg' alt='imagen relacionada')

    .row.align-items-center.fcap.tarjeta.justify-content-around.p-4.mb-5
      .col-lg-5(data-aos='fade-right')
        figure
          img(src='@/assets/curso/t2/f3.svg' alt='imagen relacionada')
      .col-lg-6.text-white
        img(src='@/assets/curso/interrogacion.svg' alt='?' style='width: 85px;margin-top: -2.5rem;' data-aos='flip-left').mb-5
        h3 ¿Cómo funciona el modelo en cascada?
        p El modelo se atribuye al teórico de la informática Winston W. Royce, aunque él no fue su creador.
        p Al contrario, en su ensayo de 1970 titulado 
          em Managing the Development of Large Software Systems
          | , proporciona una reflexión constructiva acerca de los procedimientos lineales y a modo de alternativa, presenta un modelo iterativo incremental en la que cada una de las fases se basa en el resultado de la fase la anterior y valida los resultados de esta.

    p.mb-5 La metodología en cascada está acotada por cada una de las fases o etapas anteriores, dado que no es posible acceder a la fase de diseño sino se ha terminado la fase de requisitos, por lo cual son de naturaleza bloqueante. Este tipo de metodologías también es conocida como tradicional, ya que fueron los primeros modelos que se incorporaron en el proceso de desarrollo de software, aunque con el tiempo se identificaron las problemáticas al necesitar obtener productos a corto plazo. 

    .bg1
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-5(data-aos='fade-right')
          h3 Representación del modelo de cascada
          figure
            img(src='@/assets/curso/t2/f4.svg' alt='Representación del modelo de cascada')
        .col-lg-5(data-aos='fade-left')
          figure
            img(src='@/assets/curso/t2/f5.svg' alt='imagen relacionada')

      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo='Análisis')
          .row.align-items-center.justify-content-around
            .col-lg-4
              figure
                img(src='@/assets/curso/t2/f6.svg' alt='imagen relacionada')
            .col-lg-6
              h3 Análisis
              p Todo proyecto de 
                em software 
                | inicia con una fase de análisis, en el documento de especificación del software se determina la viabilidad y la definición de requisitos funcionales y no funcionales. 
              p En la viabilidad se evalúa la rentabilidad, factibilidad y los costos de la construcción, además se define un pliego de condiciones, un plan y una estimación financiera, también la propuesta para el cliente de ser necesario. 
              p Posteriormente, se realiza la definición detallada de los requisitos, que debe incluir, el análisis de la situación de salida y un concepto. Los análisis de salida definen la problemática, y el concepto define qué funciones y características debe ofrecer el producto 
                em software 
                | para satisfacer las necesidades del cliente. 
        .py-3.py-md-4(titulo='Diseño')
          .row.align-items-center.justify-content-around
            .col-lg-6
              h3 Diseño
              p En esta fase se formula una solución específica para la problemática definida o establecida en los requisitos, aquí los desarrolladores de 
                em software 
                | se encargarán de construir un diseño de la arquitectura del sistema, así como un plan de diseño, enfocados en los componentes, interfaces, entornos de trabajos y bibliotecas. Esta fase da como resultado un estimado del plan de diseño y los planes de prueba para los diferentes componentes. 
            .col-lg-4
              figure
                img(src='@/assets/curso/t2/f7.svg' alt='imagen relacionada')
        .py-3.py-md-4(titulo='Implementación')
          .row.align-items-center.justify-content-around
            .col-lg-4
              figure
                img(src='@/assets/curso/t2/f8.svg' alt='imagen relacionada')
            .col-lg-6
              h3 Implementación
              p La arquitectura otorgada en la fase de diseño se desarrolla en la fase de implementación, en la que se construye el código fuente que representa dicha arquitectura en un lenguaje de programación, también incluye la búsqueda de errores y pruebas unitarias. 
              p Esta fase genera como resultado un producto software que se despliega por primera vez como insumo de la siguiente fase. 
        .py-3.py-md-4(titulo='Prueba')
          .row.align-items-center.justify-content-around
            .col-lg-6
              h3 Prueba
              p Esta fase incluye el proceso de integración y despliegue del producto 
                em software 
                | en el entorno seleccionado, por lo general se prueba y envía con una serie de usuarios finales seleccionados. Se aplican las pruebas de aceptación incluidas en la fase de análisis y con ello se puede determinar si el software cumple o no con las necesidades definidas. 
              p Los productos que superan estas pruebas, son aquellos que pueden continuar hacia el proceso de liberación hacia el público en general o su target específico. 
            .col-lg-4
              figure
                img(src='@/assets/curso/t2/f9.svg' alt='imagen relacionada')
        .py-3.py-md-4(titulo='Servicio')
          .row.align-items-center.justify-content-around
            .col-lg-3
              figure
                img(src='@/assets/curso/t2/f10.svg' alt='imagen relacionada')
            .col-lg-6
              h3 Servicio
              p Después que la fase de prueba haya finalizado con éxito, se autoriza para que la aplicación pase a un ambiente productivo, en esta última etapa se incluye la entrega, mantenimiento, garantía y mejoras del producto software. Cabe destacar que la fase de mantenimiento incluye tres elementos:
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  p.mb-0 
                    b Mantenimiento correctivo: 
                    | eliminar los defectos detectados durante su vida útil.
                li
                  i.fas.fa-angle-right
                  p.mb-0 
                    b Mantenimiento adaptativo: 
                    | adaptar el 
                    em software 
                    | a nuevas necesidades.
                li
                  i.fas.fa-angle-right
                  p.mb-0 
                    b Mantenimiento perfectivo: 
                    | añadir al 
                    em software 
                    | nuevas funcionalidades.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Estándares ISO/IEC 25000 SQuaRE, ISO/IEC 15504, IEEE.

    .row.mb-5
      .col-lg-6.order-lg-last(data-aos='fade-left')
        figure
          img(src='@/assets/curso/t2/f11.jpg' alt='imagen relacionada')
      .col-lg-6(style='z-index:1' data-aos='fade-right')  
        p En un proceso de calidad de 
          em software 
          | se debe identificar las normas ISO (Organización Mundial para la Estandarización), que proporcionan guías que a su vez aportarán especificaciones, de aspecto internacional, a los servicios, productos y sistemas de una empresa para garantizar una óptima eficiencia y calidad en cuanto a un producto o servicio y a su funcionamiento y resultados. Por lo tanto, se deben tener en cuenta los estándares descritos en este apartado con el objetivo de seguir patrones que permitan asegurar la calidad a través del análisis de los estándares que se utilizan en la actualidad.
        .fcp20.p-4.ctrderecho
          p.mb-0 La norma ISO/IEC 25000, también reconocida como 
            em System and Software Quality Requirements and Evaluation (SQuaRE)
            | , tiene el objetivo de especificar en un documento el conjunto de guías y patrones que aseguran la óptima utilización del 
            em software 
            | de un negocio. No obstante, este procedimiento se realiza en compañías que realizan sus propias aplicaciones para la organización y gestión interna, en consecuencia, se refuerza la creación de forma correcta y usabilidad en los procesos internos.

    .row.justify-content-center
      .col-lg-4.tarjeta.fcap.p-4.text-white.mx-3.mb-4(data-aos='flip-right')
        figure
          img(src='@/assets/curso/t2/f12.svg' alt='ISO/IEC 25000').mb-4
        h4.text-center ISO/IEC 25000
        p.text-center Es reconocida como 
          em System and Software Quality Requirements and Evaluation (SQuaRE)
          | , esta familia de normas tiene el objetivo de crear un marco de trabajo que evalúa la calidad del producto 
          em software
          | .
      .col-lg-4.tarjeta.fcap.p-4.text-white.mx-3.mb-4(data-aos='flip-left')
        figure
          img(src='@/assets/curso/t2/f13.svg' alt='¿cómo evoluciona?').mb-4
        h4.text-center ¿Cómo evoluciona?
        p.text-center La ISO/IEC 25000, evoluciona de anteriores normas tales como las normas ISO/IEC 9126, que describe las características de un modelo de calidad del producto 
          em software
          | , e ISO/IEC 14598, que involucraba el proceso de evaluación de productos 
          em software
          | .

    p.mb-5 La familia de normas ISO/IEC 25000 está constituida en cinco divisiones, tal como se aprecia a continuación.
    h3.text.center Familia de normas ISO/IEC 25000

    img(src='@/assets/curso/t2/f14.svg' alt='división ISO/IEC' data-aos='fade-up').mb-4
    figcaption.mb-5 Nota. 
      a(href='https://iso25000.com/index.php/normas-iso-25000' target='_blank')
        | ISO 25000

    h3 División de Gestión de Calidad - ISO/IEC 2500n
    p Las normas en este punto definen todos los modelos, términos y definiciones comunes referenciados por todas las otras normas de la familia 25000. Actualmente esta división se encuentra formada por:

    .row.justify-content-center.mb-5
      .col-lg-4.tarjeta.fcp20.mx-2.mb-4(data-aos='fade-right')
        .p-4.text-center
          h3 ISO/IEC 25000
          p 
            em Guide to SQuaRE
            | : está compuesta por un modelo de la arquitectura de 
            em SQuaRE
            | , la terminología de la familia, un resumen de las partes, los usuarios previstos, las partes asociadas y los modelos de referencia.
      .col-lg-4.tarjeta.fcp20.mx-2.mb-4(data-aos='fade-left')
        .p-4.text-center
          h3 ISO/IEC 25001
          p 
            em Planning and Management
            | : determina los requerimientos y disposiciones para gestionar la especificación y evaluación de los requerimientos del producto 
            em software
            | .

    p En el siguiente recurso podrá apreciar las características de cada una de las normas, en relación a los productos de 
      em software
      | , veamos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2/f15.svg', alt='división ISO/IEC')
      .fcp20.p-4(x="20%" y="20%" numero="")
        h5 Las normas de esta división presentan modelos detallados de calidad, así como las características para calidad externa, interna y en uso del producto 
          em software 
          |  Actualmente esta división está conformada por:
        p ISO/IEC 25010 - 
          em System and software quality models
          | : define el modelo de calidad para el producto 
          em software.
        p ISO/IEC 25012 - 
          em Data Quality model
          | : describe un modelo general para la calidad de los datos, específicamente a los datos que se encuentran almacenados de forma estructurada y hacen parte de un sistema de información.
      .fcp20.p-4(x="20%" y="20%" numero="")
        h5 Involucran un modelo de referencia de la medición de la calidad del producto, descripciones de medidas de calidad (externa, interna y en uso) así como guías con prácticas para su respectiva aplicación. Actualmente esta división está conformada por:
        p ISO/IEC 25020 - Measurement reference model and guide: representa una explicación introductoria y un modelo de referencia común a los elementos de medición de la calidad.
        p Proporciona una guía para que los usuarios apliquen y desarrollen medidas planteadas por normas ISO.
        p ISO/IEC 25021 - 
          em Quality measure elements
          | : Especifica un conjunto de métricas base que podrían ser utilizadas en el transcurso de todo el ciclo de vida del desarrollo 
          em software.
        p ISO/IEC 25022 - 
          em Measurement of quality in use
          | : especifica métricas para efectuar la medición de la calidad en uso del producto.
        p ISO/IEC 25023 - 
          em Measurement of system and software product quality
          | : especifica métricas para efectuar la medición de la calidad de productos y sistemas 
          em software.
        p ISO/IEC 25024 - 
          em Measurement of data quality
          | : especifica métricas para efectuar la medición de la calidad de datos.
      .fcp20.p-4(x="20%" y="20%" numero="")
        h5 Las normas de esta división especifican requerimientos de calidad que podrían ser usados en el proceso de elicitación de requisitos de calidad del producto 
          em software 
          | a desarrollar. Actualmente esta división está conformada por: 
        p ISO/IEC 25030 - 
          em Quality requirements
          | : contiene una serie de recomendaciones para efectuar la especificación de los requisitos de calidad del producto 
          em software.
      .fcp20.p-4(x="20%" y="20%" numero="")
        h5 Esta división involucra normas que aportan guías, recomendaciones y requerimientos para proceder a realizar el proceso de evaluación del producto 
          em software 
          |  Actualmente esta división está conformada por:
        p ISO/IEC 25040 - 
          em Evaluation reference model and guide
          | : plantea un modelo de referencia general para la evaluación, por lo tanto, tiene en cuenta las entradas en el proceso de evaluación, las restricciones y los recursos requeridos para alcanzar las adecuadas salidas.
        p ISO/IEC 25041 - 
          em Evaluation guide for developers, acquirers and independent evaluators
          | : detalla las recomendaciones y requerimientos para la implementación práctica de la evaluación del producto 
          em software 
          | según las percepciones de los desarrolladores, de los que adquieren el 
          em software 
          | y los respectivos evaluadores independientes.
        p ISO/IEC 25042 - 
          em Evaluation modules
          | : define lo que la Norma considera un módulo de evaluación y la documentación, estructura y contenido que se debe utilizar a la hora de definir uno de estos módulos.
        p ISO/IEC 25045 - 
          em Evaluation module for recoverability
          | : describe un módulo para la evaluación de la recuperabilidad 
          em (Recoverability).

    h3 Ventajas y desventajas de la ISO 25000:
    p.mb-5 Cuando se implementa esta norma, es importante reconocer tanto las ventajas como las desventajas de la ISO 25000, que mostrará un panorama para entender su reconocimiento en el sector de la calidad.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5.text-white(data-aos='fade-right')
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t2/f16.svg', alt='Ventajas')
        h2.text-center Ventajas
        p Asegurar que la aplicación, servicios y productos que se vendan o utilicen tienen la confianza y calidad requerida.
        p Minimiza la cantidad de errores 
          em (Bugs).
        p Permite ahorrar tiempo en los procedimientos de entrega.
        p Determina la constante calidad a partir de evaluaciones periódicas.
        p Lo anterior genera en el cliente un aumento de la satisfacción.
      .col-md.tarjeta.color-secundario.p-5.text-white(data-aos='fade-left')
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/t2/f17.svg', alt='Desventajas')
        h2.text-center Desventajas
        p No se definen desventajas específicamente en cuanto a estas normas puesto que se crea un marco de calidad a nivel internacional.
        p Tener en cuenta estas normas es un proceso tedioso, no obstante, el resultado es óptimo y positivo.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Modelo CMMI

    .row.mb-5
      .col-lg-6.order-lg-last(data-aos='fade-left')
        figure
          img(src='@/assets/curso/t2/f18.jpg' alt='imagen relacionada')
      .col-lg-6(style='z-index:1')
        p Este modelo es uno de los que más utilizan las empresas de desarrollo de software, por lo tanto, se debe comprender que si se utiliza este modelo su objetivo es auditar el cumplimiento de normas de calidad partiendo de la medición con niveles de madurez, además se enfoca en la mejora continua del producto en todo su ciclo de vida, impulsar la eficiencia y asegurar la calidad, de esta forma se reducen los riesgos en el proceso de desarrollo. A continuación, se presentan los elementos de un modelo CMMI.
        .fcp20.p-4.ctrderecho
          h4 Modelo de desarrollo CMMI (Capability Maturity Model Integration)
          p Cuando se desea mejorar algunos procesos de negocio, construir productos de calidad para satisfacer las necesidades del cliente y colaborar en el cumplimiento de los requerimientos de la norma ISO e instaurar prácticas de mejora continua se debe utilizar este modelo puesto que es un modelo de capacidad y madurez, que además permite efectuar una apreciación de la madurez del proceso de desarrollo de software en las empresas.

    h3 Los objetivos de CMMI:
    ul.lista-ul
      li 
        i.fas.fa-angle-right
        | Producción de calidad de productos o servicios. 
      li 
        i.fas.fa-angle-right
        | Creación de valor para los accionistas. 
      li 
        i.fas.fa-angle-right
        | Mejora continua en la satisfacción de los clientes. 
      li 
        i.fas.fa-angle-right
        | Aumento en la cuota de mercado
      li 
        i.fas.fa-angle-right
        | Obtener reconocimiento de excelencia en la industria
    p CMMI presenta dos modelos una está estructurada en cinco niveles de madurez y la otra está estructurada en seis niveles de capacidad. Las áreas de proceso están categorizadas en administración de procesos, administración de proyectos, ingeniería y soporte. 

    h3 Estructurada por nivel de madurez
    p Un nivel de madurez bien definido con las bases necesarias para evolucionar hacia un proceso de 
      em software 
      | maduro, Cada nivel proporciona un nivel para la mejora continua del proceso. 
    p Los niveles representados por etapas, consideran cinco niveles de nivel desde el literal 1 hasta el 5, (figura 2.) los cuales son: 
    ul.lista-ul
      li 
        i.fas.fa-angle-right
        | Inicial 
      li 
        i.fas.fa-angle-right
        | Gestionado
      li 
        i.fas.fa-angle-right
        | Definido 
      li 
        i.fas.fa-angle-right
        | Cuantitativamente gestionado 
      li 
        i.fas.fa-angle-right
        | Optimizado 

    .col-lg-10.mx-auto
      .titulo-sexto.color-acento-contenido
        span <b>Figura 2</b> Niveles de maduración CMMI por etapas
      img(src='@/assets/curso/t2/f19.svg' alt='diagrama relacionado' data-aor='flip-up')
      figcaption Nota. 
        a(href='https://www.tutorialspoint.com/es/cmmi/cmmi_maturity_levels.htm' target='_blank')
          | Tutorialspoint


    p.mb-5 Los niveles de madurez contienen un conjunto de áreas de proceso predefinidas, los cuales se miden por objetivos generales y específicos, estos se aplican a cada conjunto predefinidos de áreas de proceso, veamos su distribución:
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f20.svg' alt='imagen relacionada')
      .col-lg-8
        LineaTiempoD.color-primario
          .p-4(titulo='Nivel de madurez inicial' numero='Nivel 1')
            p Los procesos suelen ser ad hoc y caóticos, en el cual se gestionan y crean, productos o servicios que no funcionan, excediendo el presupuesto y el calendario de entregas. Las organizaciones en este nivel abandonan los proyectos ante una crisis y no tienen la capacidad de replicar los éxitos y buenas prácticas de procesos previos. 
          .p-4(titulo='Nivel de madurez administrativo' numero='Nivel 2')
            p Los objetivos generales y específicos han sido alcanzados, por decirlo de alguna manera, los proyectos han asegurado que los requisitos son gestionados, los procesos son planificados, y ejecutados de manera controlada. Se garantiza que los procesos se sigan ejecutando bajo presión y alto nivel de estrés, conforme a los planes documentados, y los productos o servicios satisfacen las necesidades del cliente en los requisitos especificados, también los objetivos y normas. 
          .p-4(titulo='Nivel de madurez definida' numero='Nivel 3')
            p La organización ha logrado alcanzar todos los objetivos específicos de las áreas asignadas en los niveles 2 y 3. En este nivel los procesos están bien caracterizados, entendidos y donde se definen normas, procedimientos, herramientas y métodos para su aplicación. Entre el nivel 2 y el 3 hay una diferencia bien marcada desde los estándares, las descripciones de los procesos y los procedimientos dependiendo de las instancias, -por decirlo así- por proyecto en específico. Por decirlo de otra manera en el nivel 3, los procesos de la organización se adaptan a la ejecución de un proyecto en específico permitiendo de esta manera adaptarse fácilmente a nuevos retos. 
          .p-4(titulo='Nivel de madurez administrativo cuantitativamente' numero='Nivel 4')
            p Se ha logrado con éxito obtener los objetivos específicos de los niveles 2, 3 y 4 y los objetivos genéricos en los niveles 2 y 3. En este nivel se seleccionan los procesos que aportan significativamente al rendimiento del proceso en general, concluyendo subprocesos que se controlan por medio de métricas, reportes y estadísticas que permiten medir la capacidad. Estas métricas posibilitan identificar casos que generen problemas para ser corregidos y no se repitan en el futuro, también para tomar decisiones de negocio que proyectan el crecimiento de la organización. 
            p Una diferencia importante entre el nivel 3 y 4, es que en el nivel 3 los procesos son medidos de forma cualitativamente predecibles, dando paso a la especulación, mientras que en el nivel 4 se evalúa el rendimiento real de los mismos procesos, y esto se determina por medio de técnicas estadísticas y otras técnicas cuantitativas lo previsible dentro de la organización. 
          .p-4(titulo='Nivel de madurez optimización' numero='Nivel 5')
            p En este nivel la organización ha logrado alcanzar todos los goalsof definidos en los niveles 1, 2, 3, 4 y 5, y los objetivos genéricos en los niveles 2 y 3. Este nivel está centrado en optimizar y en la mejora continua del rendimiento de los procesos de la organización. Una de las diferencias entre el nivel 4 y el 5 es que, en el nivel 4, los procesos están diseñados para causas especiales y proporcionan métricas para ser evaluadas por técnicas estadísticas; mientras que en el nivel 5, los procesos están diseñados para que se encarguen de las causas comunes de la variación y el cambio de los procesos, conservando las estadísticas para poder prever acciones futuras, este ajuste permite llegar a los objetivos cuantitativos de mejora continua. 

    h3 Estructurada por nivel de capacidad
    .tarjeta.fcap.p-4.mb-5
      .row.align-items-center.justify-content-around.text-white
        .col-lg-5(data-aos='fade-right')
          figure
            img(src='@/assets/curso/t2/f21.svg' alt='Niveles de capacidad del modelo CMMI')
        .col-lg-6
          p Un nivel de capacidad bien definida y establecida sobre una meseta evolutiva, permite describir la capacidad de la organización en relación con un área de proceso determinada, en donde deben tenerse en cuenta las prácticas específicas y genéricas, las mismas que puedan ser extendidas a otras áreas o a otros procesos de la organización relacionados. Cada nivel es una capa en la base que permite una mejora continua con respecto a un proceso particular.
          p En otras palabras, podemos decir que los niveles de capacidad son acumulativos, los cuales a medida que se está en las capas superiores de los niveles, también se impactan las características de los inferiores. 

    p En CMMI en una representación continua se cuenta con seis niveles de capacidad asignados por los rangos de números del 0 al 5 descritos de tal manera:

    .ms-lg-5
      ul.lista-ul
        li
          i.fas.fa-angle-right
          | 0 - Incompleto
        li
          i.fas.fa-angle-right
          | 1 - Se ha realizado 
        li
          i.fas.fa-angle-right
          | 2 - Administrativo 
        li
          i.fas.fa-angle-right
          | 3 - Definido
        li
          i.fas.fa-angle-right
          | 4 - Cuantitativamente gestionado 
        li
          i.fas.fa-angle-right
          | 5 - Optimizado

    p Esta representación es un conjunto predefinido de áreas de proceso, que se mide por el logro de los objetivos tanto genéricos como específicos. En el siguiente recurso educativo se describen las características de cada nivel de madurez en detalle, veamos:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2/f22.svg', alt='Niveles de capacidad')
      .fcp20.p-4(x="20%" y="20%" numero="")
        h4 Nivel de capacidad 0: incompleta
        p Estar en el nivel de capacidad 0, indica que un proceso se realiza parcialmente o no se realiza, dado que uno o más objetivos no se cumplen y no presenta objetivos genéricos. 
      //.fcp20.p-4(x="20%" y="20%" numero="")
        h4 
        p 
      .fcp20.p-4(x="20%" y="20%" numero="")
        h4 Nivel de capacidad 2: administración
        p Se denominan como procesos administrados, ya que se puede contar con una planeación, una trazabilidad y un control en los proyectos individuales o grupales. 
      .fcp20.p-4(x="20%" y="20%" numero="")
        h4 Nivel de capacidad 3: definir
        p Son procesos que están diseñados a partir de un conjunto de procesos estándar en la organización, con productos de trabajo, modelos, medidas y otras características relacionadas a herramientas que faciliten la identificación y ejecución del proceso. 
      .fcp20.p-4(x="20%" y="20%" numero="")
        h4 Nivel de capacidad 4: administrada cuantitativamente
        p En este nivel se realiza un seguimiento al proceso por medio de métricas estadísticas y otras técnicas cuantitativas, para poder establecer el rendimiento de los procesos, con esto se realiza una gestión en el proceso. En este nivel los atributos de calidad y rendimiento se entienden como términos estadísticos usados para la administración del producto a lo largo de la vida del proceso. 
      .fcp20.p-4(x="20%" y="20%" numero="")
        h4 Nivel de capacidad 5: optimización 
        p Este nivel se centra en la mejora continua del rendimiento de los procesos por medio de mejoras continuas que buscan la innovación. Mientras que en el nivel 4 el enfoque es crear un marco de referencia y las mediciones de rendimiento, el nivel 5 se centra en buscar causas comunes para los problemas y arreglar esos problemas de proceso.  

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Calidad en el proceso de desarrollo de 
        em software

    .row.mb-5
      .col-lg-6.order-lg-last
        figure
          img(src='@/assets/curso/t2/f23.jpg' alt='imagen relacionada')
      .col-lg-6(style='z-index:1')
        p Recordemos que la construcción de software está basada en unas fases que permiten incrementar el producto desde sus cimientos hasta obtener un producto base, esto es posible ya que en el proceso se implementan diferentes estrategias y metodologías, el gran desafío está, en cómo construir un producto que se pueda validar rápidamente y que contenga los niveles adecuados de calidad. La naturaleza de los requisitos de software es cambiante lo cual complica la precisión de los equipos, demorando posiblemente el tiempo, los recursos y el presupuesto asignado.
        .fcp20.p-4.ctrderecho
          p.mb-0 La calidad de software es un área importante en el proceso de desarrollo que busca estar en constante validación de la calidad del producto software, por lo general en el diseño de un plan de aseguramiento de calidad. Por ello es de importancia tener en cuenta los siguientes conceptos y su aplicación práctica en el ciclo de desarrollo de software: 

    .col-lg-10.mx-auto.mb-5.bg1.tarjeta.p-5
      .px-5.bg-2.mb-4
        h3 Calidad
        p Es un conglomerado de características de una entidad, que son esenciales y que además permiten calificar su valor.
        p A nivel de empresa, está relacionado con el conjunto de estándares y normas que debe tener un producto o servicio para ser reconocido y percibido en el mercado satisfaciendo las necesidades de los clientes.
      .px-5.bg-2.mb-4
        h3 Calidad de 
          em software 
          | (QA)
        p Es el nivel que tienen los clientes para determinar según su percepción que el producto 
          em software 
          | satisface sus necesidades y expectativas.
        p A nivel empresarial la calidad de 
          em software 
          | hace referencia a las actividades que se establecen de manera común para asegurar que el desarrollo de 
          em software 
          | en todos los proyectos es de calidad.
        p También se puede definir como la relación coherente del producto 
          em software 
          | con los requerimientos funcionales y no funcionales.
      .px-5.bg-2.mb-4
        h3 Aseguramiento de la calidad de 
          em software 
          | (SQA)
        p Es el conjunto de actividades, métodos y técnicas planificadas y sistemáticas necesarias para asegurar que el producto software satisfará los requerimientos dados de calidad. 
        p Se encarga de garantizar que el producto haya sido construido siguiendo los procesos establecidos por la organización.
      .px-5.bg-2.mb-4
        h3 Propósito del aseguramiento de la calidad de 
          em software 
          | (SQA)
        p El propósito principal del SQA es detectar diversos problemas en las fases iniciales del desarrollo del 
          em software 
          | estimando que es menos costoso su corrección.
      p La calidad del 
        em software
        | , puede medirse hasta la fase de implementación, pero de ser detectados allí los problemas de construcción del producto, implicaría costos extras, por esta razón se aconseja atender y solucionar los posibles errores en las fases iniciales, como en el diseño. Por lo tanto, es necesario tener en cuenta el proceso de SQA durante las etapas iniciales de la construcción del producto, puesto que es donde se definen las características de éste y lo que debe garantizar para satisfacer las necesidades implícitas y explícitas. Si el diseño y los requerimientos no están correctamente definidos, es decir que son ambiguos, incompletos o son incoherentes, al momento de implementar el producto va a ser muy costosa su corrección.

    h3 Funciones del aseguramiento de la calidad del 
      em software 
      | (SQA)
    p.mb-5 El rol para SQA es brindar a la metodología de desarrollo de 
      em software
      | , y a la administración, la seguridad de que procesos oficialmente establecidos están siendo implementados, teniendo en cuenta:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.align-items-center
        .col-lg-5
          p Establecer estándares, procesos y planes con el objetivo de satisfacer las políticas de la organización y que se ajusten a las necesidades de cada proyecto en particular, para así asegurar la calidad del producto 
            em software.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f25.svg' alt='imagen relacionada')
      .row.align-items-center
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f26.svg' alt='imagen relacionada')
        .col-lg-2
        .col-lg-5
          p Auditar y revisar los productos y actividades desarrolladas para verificar que satisfacen los procesos y estándares definidos.
      .row.align-items-center
        .col-lg-5
          p Proporcionar las herramientas necesarias que den soporte al proceso definido, facilitando su ejecución, visualización, administración y seguimiento.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f27.svg' alt='imagen relacionada')
      .row.align-items-center
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f28.svg' alt='imagen relacionada')
        .col-lg-2
        .col-lg-5
          p Proveer al equipo de proyecto y a otros interesados, los resultados sobre las revisiones, auditorías y actividades. 
      .row.align-items-center
        .col-lg-5
          p Determinar las funcionalidades esperadas por el cliente.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f29.svg' alt='imagen relacionada')
      .row.align-items-center
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f30.svg' alt='imagen relacionada')
        .col-lg-2
        .col-lg-5
          p Escalar problemas presentados dentro del equipo de un proyecto, hacia un nivel apropiado de administración para su resolución.
      .row.align-items-center
        .col-lg-5
          p Garantizar que se cumpla el plan generado para el desarrollo del proyecto y del proceso de desarrollo de 
            em software.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f31.svg' alt='imagen relacionada')

    h3 Principios de aseguramiento de la calidad de 
      em software 
      | (SQA)
    p.mb-5 Para poder realizar el aseguramiento de la calidad de 
      em software 
      | (SQA) se deben tener en cuenta diversos principios básicos:

    ImagenInfografica
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2/f32.svg', alt='7 principios de aseguramiento de la calidad del software (SQA)')
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 La calidad debe ser una constante a lo largo de todo el ciclo de vida del 
          em software
          | . Es una acción que se construye en la medida que el producto se va desarrollando, mas no cuando el producto está terminado, es por esta razón que todo el equipo o involucrados en el proceso deben también enfocarse en la calidad del producto.
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 La calidad de 
          em software 
          | solo se logra con la contribución de todas las personas involucradas, es decir que la calidad no es un proceso solo del equipo de aseguramiento de la calidad de 
          em software
          | , sino más bien una actividad sincrónica entre todas las personas que colaboran para el desarrollo del producto.
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 La gestión y la planificación de la calidad debe ser eficaz y previamente definido y ejecutado, por lo tanto, se deben establecer procesos, estándares y una planeación claramente definida para poder asegurar la calidad del producto, donde contengan puntos de verificación y un proceso claro y definido que incluya que, quien, y cuando, va a realizar la verificación o medición de la calidad. 
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 Se deben dirigir los esfuerzos a la prevención de defectos, es decir que una vez que un defecto es detectado además de corregirlo se deben tomar medidas necesarias para que no vuelva a ocurrir. Es en este punto donde se tiene en cuenta lo que es el análisis de las causas raíces, una vez que se encuentra un defecto se debe analizar por qué se ocasionó y cuál fue la causa que lo originó, por ejemplo si es un problema en el proceso, o si es un problema con las herramientas que se están utilizando, o si fue una mala definición de los requerimientos, lo que constata que un error no solamente se soluciona o resuelve, sino que hay que indagar más en la causa raíz; porque de no hacerlo en el futuro se va a presentar el mismo problema.
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 Hay que reforzar los sistemas de detección y eliminación de defectos durante las etapas iniciales, lo que reafirma que eliminando los defectos en las etapas de requerimientos y diseño, estamos asegurando que esos defectos no van a ser replicados en las etapas subsiguientes, por ende es menos costoso detectar y corregir los defectos en las etapas iniciales, por ejemplo si detectamos un defecto en los requerimientos o en el diseño del 
          em software
          | , lo más posible es que se tenga que corregir documentos o diagramas, pero si se espera a la etapa de desarrollo o cuando el 
          em software 
          | ya está en producción, tenemos que volver hacia atrás en todas las fases del ciclo de vida del desarrollo del 
          em software.
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 La calidad al igual que la productividad, los costos y los plazos de entrega están al mismo nivel, lo que quiere decir que el cumplimiento de los plazos de entrega y mantenerse dentro del presupuesto también son variables que se evalúan dentro del proceso de aseguramiento de calidad de 
          em software
          | , pues de que sirve un producto sin defectos cuando ha costado mucho más de lo presupuestado y se ha entregado cuando ya no será útil.
      .fcp20.p-4(x="20%" y="20%" numero="")
        p.mb-0 Es esencial la participación de la dirección, que ha de propiciar la calidad, esto quiere decir que la dirección debe ser el primer interesado en asegurar la calidad y de proveer las directrices, herramientas y el apoyo necesarios para que se pueda lograr, por lo tanto si no hay apoyo de la dirección para implementar y ejecutar el proceso de aseguramiento de calidad del 
          em software
          | , será difícil que se pueda llevar a cabo la calidad y por ende los productos no van a salir con la calidad requerida.

    h3 Componentes del aseguramiento de la calidad de 
      em software 
      | (SQA)
    p.mb-5 El aseguramiento de la calidad de 
      em software 
      | debe incluir los siguientes componentes.

    AcordionA(tipo='b' clase-tarjeta='tarjeta tarjeta--azul')
      .row(titulo='Procedimientos e instrucciones de trabajo')
        .col-lg-6
          p Procesos claramente definidos e instructivos que ayuden al personal a realizar sus actividades con cierto nivel de estandarización.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f33.svg', alt='imagen relacionada')
      .row(titulo='Plantillas y listas de verificación')
        .col-lg-6
          p Se crean plantillas base para estandarizar la documentación producida y también crear instrumentos que permitan medir la calidad de dichos documentos.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f34.svg', alt='imagen relacionada')
      .row(titulo='Capacitación del personal, la readaptación profesional y la certificación')
        .col-lg-6
          p El personal debe estar capacitado para ejecutar las actividades que le corresponden a su rol, por eso la capacitación juega un papel muy importante dentro de SQA.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f35.svg', alt='imagen relacionada')
      .row(titulo='Acciones preventivas y correctivas')
        .col-lg-6
          p Se deben realizar acciones para prevenir que un problema se presente y acciones para corregir los problemas que ya se presentaron, usualmente estas acciones preventivas y correctivas surgen a raíz de las verificaciones y de las auditorías.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f36.svg', alt='imagen relacionada')
      .row(titulo='Gestión de la configuración')
        .col-lg-6
          p En la organización se deben de tener procesos que especifiquen cómo serán llevadas a cabo las actividades cotidianas como son la recepción de los requerimientos y movimientos de activos de software entre las áreas tales como el código fuente.
        .col-lg-2
        .col-lg-2
          figure
            img(src='@/assets/curso/t2/f37.svg', alt='imagen relacionada')
      .row.justify-content-center(titulo='Control de la documentación')
        .col-lg-10
          p Esto incluye controlar las versiones de los documentos y garantizar la disponibilidad y el acceso a los mismos por todos los involucrados en el proceso.

    h3 Proceso del aseguramiento de la calidad de 
      em software 
      | (SQA)
    p En el proceso de aseguramiento de la calidad de 
      em software 
      | se encuentran tres etapas.

    .bg1.p-5
      .row.justify-content-center
        .col-lg-3
          .tarjeta.fblanco.boxShadow.p-4
            figure
              img(src='@/assets/curso/t2/f38.svg', alt='imagen relacionada').mb-4
            h3.text-center Planificación
            p.text-center En el proceso de aseguramiento de la calidad de software se encuentran tres etapas.
        .col-lg-3
          .tarjeta.fblanco.boxShadow.p-4
            figure
              img(src='@/assets/curso/t2/f39.svg', alt='imagen relacionada').mb-4
            h3.text-center Construcción
            p.text-center Se crean los artefactos de prueba y el 
              em script 
              | de pruebas.
        .col-lg-3
          .tarjeta.fblanco.boxShadow.p-4
            figure
              img(src='@/assets/curso/t2/f40.svg', alt='imagen relacionada').mb-4
            h3.text-center Ejecución
            p.text-center En esta etapa se encuentran los defectos y se ejecutan los 
              em scripts 
              | de pruebas creados previamente.

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5 Modelos de Referencia para la calidad en el proceso

    .bg1.p-5.mb-5
      .row
        .col-lg-6
          p En la calidad de 
            em software 
            | es importante involucrar el valor de los requerimientos explícitos e implícitos del producto, con el propósito de medir la calidad, los estándares y modelos de calidad existentes. 
          p Estos modelos de calidad tienen un conjunto de factores que pueden ser medidos directamente como unidades de tiempo y errores, pero también indirectamente como la facilidad de mantenimiento.
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t2/f41.svg' alt='Estándares y modelos de calidad del software')

    p Los modelos de calidad son documentos que constituyen una parte importante de las mejores prácticas, plantean aspectos de administración en la cual las organizaciones deben hacer énfasis, además componen diversas prácticas que facilitan la medición de los avances en la calidad. 
    p Los estándares de calidad además de ser una guía para alcanzar la calidad y la productividad, permiten especificar una serie de criterios de desarrollo para orientar la manera en que se emplea la ingeniería de software. A continuación, se nombran los modelos más importantes que evalúan la calidad del producto de software:

    .bg3.p-4.mb-5
      h3 Modelo Mc Call
      p Este modelo fue diseñado por Jim Mc Call en 1977. Para el análisis de la calidad de software, este modelo determina 3 aspectos, también describe 11 factores y menciona 23 criterios. Las métricas encontradas en este modelo son una serie de preguntas que ponderan un determinado atributo del producto de software numéricamente. En la siguiente tabla se establecen los criterios de calidad relacionados con los factores de calidad.
      .titulo-sexto.color-acento-contenido
        span <b>Tabla 1</b> Modelo Mc Call, factores de calidad del <em>software</em>

      .tabla-b.color-secundario.mb-5
        table
          thead.tabla-b__header
            tr
              th
                h5.mb-0.text-white PERSPECTIVAS
              th
                h5.mb-0.text-white FACTORES
              th
                h5.mb-0.text-white CRITERIOS
          tbody
            tr
              td(rowspan='5')
                p
                  | Operatividad del Producto: factores de calidad que influyen en el grado en que el software cumple con su especificaci&oacute;n.
              td
                p Usabilidad: La facilidad de uso del software.
              td
                p Operatividad
                p Entrenamiento
                p Comunicaci&oacute;n
            tr
              td
                p Integridad: La protecci&oacute;n de programa del acceso no autorizado
              td
                p Control de Acceso
                p Auditor&iacute;a de Acceso
            tr
              td
                p Correcci&oacute;n: El grado en que una funcionalidad coincide con su especificaci&oacute;n.
              td
                p Rastreabilidad
                p Completitud
                p Consistencia
            tr
              td
                p
                  | Fiabilidad &ndash; confiabilidad: La capacidad de los sistemas de no fallar / la medida en que falla el sistema
              td
                p Consistencia
                p Exactitud
                p Tolerancia a fallos
            tr
              td
                p
                  | Fiabilidad &ndash; confiabilidad: La capacidad de los sistemas de no fallar / la medida en que falla el sistema
              td
                p Eficiencia en Ejecuci&oacute;n
                p Eficiencia en Almacenamiento
            tr
              td(rowspan='3' width='170')
                p
                  | Revisi&oacute;n del Producto: factores de calidad que influyen en la capacidad de cambiar el producto de software.
              td
                p
                  | Mantenibilidad: Esfuerzo requerido para localizar y arreglar un fallo en el programa dentro de su entorno operativo.
              td
                p Simplicidad
                p Concreci&oacute;n
            tr
              td
                p
                  | Facilidad de Prueba: La facilidad del programa de realizar pruebas para asegurarse de que est&aacute; libre de errores y cumple con su especificaci&oacute;n.
              td
                p Simplicidad
                p Instrumentaci&oacute;n
                p Auto-descripci&oacute;n
                p Modularidad
            tr
              td
                p
                  | Flexibilidad: La facilidad de hacer los cambios necesarios seg&uacute;n lo solicitado en el entorno operativo
              td
                p Auto-descripci&oacute;n
                p Capacidad de expansi&oacute;n Generalidad
                p Modularidad
            tr
              td(rowspan='3' width='170')
                p
                  | Transici&oacute;n del Producto: factores de calidad que influyen en la capacidad de adaptar el software a los nuevos entornos
              td
                p
                  | Reusabilidad: La facilidad de reutilizaci&oacute;n de software en un contexto diferente.
              td
                p &nbsp;Auto-descripci&oacute;n
                p &nbsp;Generalidad
                p &nbsp;Modularidad
            tr
              td
                p Interoperabilidad: El esfuerzo requerido para acoplar el sistema a otro sistema.
              td
                p &nbsp;Modularidad
                p Similitud de comunicaci&oacute;n
                p Similitud de datos Independencia del sistema Independencia de la m&aacute;quina
            tr
              td
                p Interoperabilidad: El esfuerzo requerido para acoplar el sistema a otro sistema.
              td
                p Auto-descripci&oacute;n Independencia del sistema Independencia de la m&aacute;quina
          caption Nota. https://bit.ly/30x66Bv

    .col-lg-8.p-4.mx-auto.mb-5
      .row.align-items-center
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f42.svg' alt='icono relacionado')
        .col-lg-8.text-white
          p 

    .bg3.p-4.mb-5
      h3 
      p 
      .row
        .col-lg-6
          figure
            img(src='@/assets/curso/t2/f43.svg' alt='imagen relacionada')
        .col-lg-6
          .titulo-sexto.color-acento-contenido
            span 
          
          tabla

    .bg3.p-4.mb-5
      h3 
      .row.mb-5
        .col-lg-6
          p 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
          p 
        .col-lg-6
          figure
            img(src='@/assets/curso/t2/f44.jpg' alt='imagen relacionada')

      .col-lg-8.mx-auto.mb-5
        tabla

    h3 
    p.mb-5

    .col-lg-8.mx-auto.mb-5
      tabla

    Separador
    #t_2_6.titulo-segundo.color-acento-contenido
      h2 

    .row.mb-5
      .col-lg-6
        p 
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f45.jpg' alt='imagen relacionada')

    .col-lg-8.fcap.p-4.mx-auto.mb-5
      .row.align-items-center
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f46.svg' alt='imagen relacionada')
        .col-lg-8.text-white
          p 
          ul.lista-ul
            li 
              i.fas.fa-angle-right 
              | 
            li 
              i.fas.fa-angle-right 
              | 

    p 
    ul.lista-ul
      li
        i.fas.fa-angle-right
        | 
      li
        i.fas.fa-angle-right
        | 
      li
        i.fas.fa-angle-right
        | 

    h3 
    p 

    .row.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f47.svg' alt='imagen relacionada')
      .col-lg-6
        LineaTiempoD.color-primario
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 

    .row.align-items-center
      .col-lg-6
        LineaTiempoD.color-primario
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
      .col-lg-6.noMobile
        figure
          img(src='@/assets/curso/t2/f48.svg' alt='imagen relacionada')

    .row.align-items-center
      .col-lg-6.noMobile
        figure
          img(src='@/assets/curso/t2/f49.svg' alt='imagen relacionada')
      .col-lg-6
        LineaTiempoD.color-primario
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 

    h3 

    .row.align-items-center.mb-5
      .col-lg-6
        p 
        p 
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f50.jpg' alt='imagen relacionada')

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f51.jpg' alt='imagen relacionada')
      .col-lg-6
        h4 
        p 

    Separador
    #t_2_7.titulo-segundo.color-acento-contenido
      h2 

    .row.align-items-center.mb-5 
      .col-lg-6
        p 
        h3 
        p 
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f52.svg' alt='imagen relacionada')

    .col-lg-6.mx-auto.mb-5
      .titulo-quinto.color-acento-contenido
        span 
      figure
        img(src='@/assets/curso/t2/f53.svg' alt='CMM, TSP, PSP')

    .bg1.p-4.mb-5
      .row
        .col-lg-6
          figure
            img(src='@/assets/curso/t2/f54.svg' alt='imagen relacionada')
        .col-lg-6
          p 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p 
    ul.lista-ul
      li 
        i.fas.fa-angle-right
        | 
      li 
        i.fas.fa-angle-right
        | 

    img(src='@/assets/curso/t2/f55.svg' alt='Formato del registro del tiempo')
    figcaption.mb-5 

    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 
            p 

    .titulo-quinto.color-acento-contenido
      span 

    img(src='@/assets/curso/t2/f57.svg' alt='Resumen del plan del proyecto')
    figcaption.mb-5 

    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 
            p 

    .titulo-quinto.color-acento-contenido
      span 

    img(src='@/assets/curso/t2/f58.svg' alt='Resumen del plan del proyecto')
    figcaption.mb-5 

    h3 
    .row.mb-4
      .col-lg-6
        .p-4.fcp20.mb-4
          p.mb-0 
        p 
      .col-lg-6.order-lg-last.order-first
        figure
          img(src='@/assets/curso/t2/f59.svg' alt='imagen relacionada')

    .row.mb-4
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f60.svg' alt='imagen relacionada')
      .col-lg-6
        h3 
        ul.lista-ul
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 
          li
            i.fas.fa-angle-right  
            | 

    h3 
    p 

    .row.justify-content-around.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f61.svg' alt='imagen relacionada')
      .col-lg-6
        LineaTiempoD.color-primario
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 

    h3 
    p.mb-5 

    AcordionA.mb-5(tipo='b' clase-tarjeta='tarjeta tarjeta--azul')
      .row(titulo='')
        .col-lg-6
          p 
        .col-lg-1
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f62.svg' alt='imagen relacionada')
      .row(titulo='')
        .col-lg-6
          p 
        .col-lg-1
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f63.svg' alt='imagen relacionada')
      .row(titulo='')
        .col-lg-6
          p 
        .col-lg-1
        .col-lg-3
          figure
            img(src='@/assets/curso/t2/f64.svg' alt='imagen relacionada')

    p.mb-5 

    .titulo-quinto.color-acento-contenido
      span 
    img(src='@/assets/curso/t2/f65.svg' alt='imagen relacionada').mb-5

    p.mb-5 

    img(src='@/assets/curso/t2/f66.svg' alt='imagen relacionada').mb-5

    p.mb-5 

    .titulo-sexto.color-acento-contenido
      span 

    .row.mb-3
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f67.svg' alt='imagen relacionada').mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f68.svg' alt='imagen relacionada').mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f69.svg' alt='imagen relacionada').mb-5
    figcaption.mb-5 

    p.mb-4 
    .bg1.row.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/70.svg' alt='imagen relacionada')
        .p-4.text-center
          p 
          p 
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/71.svg' alt='imagen relacionada')
        .p-4.text-center
          p 
          p 
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/72.svg' alt='imagen relacionada')
        .p-4.text-center
          p 
          p 

    p.mb-5 
      
    SlyderD.mb-5(:datos="datosSlyder")

    p.mb-5 

    img(src='@/assets/curso/t2/f75.jpg' alt='imagen relacionada').mb-5

    TabsC.color-acento-contenido.mb-5
      .p-3.py-md-4(titulo='')
        .row
          .col-lg-6
            h3 
            p 
          .col-lg-6
            img(src='@/assets/curso/t2/f76.svg' alt='imagen relacionada')
      .p-3.py-md-4(titulo='')
        .row
          .col-lg-6
            img(src='@/assets/curso/t2/f77.svg' alt='imagen relacionada')
          .col-lg-6
            h3 
            p 
      .p-3.py-md-4(titulo='')
        .row
          .col-lg-6
            h3 
            p 
          .col-lg-6
            img(src='@/assets/curso/t2/f78.svg' alt='imagen relacionada')
      .p-3.py-md-4(titulo='')
        .row
          .col-lg-6
            img(src='@/assets/curso/t2/f79.svg' alt='imagen relacionada')
          .col-lg-6
            h3 
            p 
      .p-3.py-md-4(titulo='')
        .row
          .col-lg-6
            h3 
            p 
          .col-lg-6
            img(src='@/assets/curso/t2/f80.svg' alt='imagen relacionada')
            
    .row.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/t2/f80.svg' alt='imagen relacionada')
      .col-lg-6
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c1.svg' alt='1' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c2.svg' alt='2' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c3.svg' alt='3' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c4.svg' alt='4' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c5.svg' alt='5' style='width:60px')
          .col
            p.mb-0 
        hr

    h3 
    .row.align-items-center.mb-5
      .col-lg-6
        p 
        p 
        p 
      .col-lg-6.order-first.order-lg-last
        .titulo-quinto.color-acento-contenido
          span 
        figure
          img(src='@/assets/curso/t2/f81.svg' alt='imagen relacionada')

    h3 
    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f82.jpg' alt='imagen relacionada')
      .col-lg-6
        p 
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | 
          li
            i.fas.fa-angle-right
            | 
          li
            i.fas.fa-angle-right
            | 
          li
            i.fas.fa-angle-right
            |  

    .bg1.p-4.row.align-items-center
      .col-lg-6
        p 
      .col-lg-6
        .titulo-quinto.color-acento-contenido
          span 
        img(src='@/assets/curso/t2/f83.svg' alt='imagen relacionada')

    h3 
    p.mb-5 

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido--borde.p-4(titulo='')
        p 
      .tarjeta.color-acento-contenido--borde.p-4(titulo='')
        p 
      .tarjeta.color-acento-contenido--borde.p-4(titulo='')
        p 
      .tarjeta.color-acento-contenido--borde.p-4(titulo='')
        p 
      .tarjeta.color-acento-contenido--borde.p-4(titulo='')
        p 

    h3 
    p 
    p 

    .titulo-quinto.color-acento-contenido
      span 
    img(src='@/assets/curso/t2/f84.svg' alt='cuadrantes de las pruebas ágiles')
    figcaption.mb-5 

    p
    ul.lista-ul
      li
        i.fas.fa-angle-right
        | 
      li
        i.fas.fa-angle-right
        | 
    p.mb-5 
    
    img(src='@/assets/curso/t2/f85.svg' alt='especificaciones')
    figcaption.mb-5 

    .tarjeta.bg1.p-5.mb-5
      img(src='@/assets/curso/c1.svg' alt='1' style='width:60px')
      p 
      .row.align-items-center
        .col-lg-6
          h3 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
          h3 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
          p 
          p 
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t2/f86.svg' alt='imagen relacionada')

    .tarjeta.bg1.p-5.mb-5
      img(src='@/assets/curso/c2.svg' alt='2' style='width:60px')
      p 
      .row.align-items-center
        .col-lg-6
          h3 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
          h3 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
            li
              i.fas.fa-angle-right
              | 
        .col-lg-6.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t2/f87.svg' alt='imagen relacionada')

    h3 
    p 
    p 

    .tarjeta.bg4.mb-5
      img(src='@/assets/curso/t2/f88.svg' alt='imagen relacionada')
      .col-lg-8.mx-auto
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/ca1.svg' alt='1' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/ca2.svg' alt='2' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/ca3.svg' alt='3' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/ca4.svg' alt='4' style='width:60px')
          .col
            p.mb-0 
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/ca5.svg' alt='5' style='width:60px')
          .col
            p.mb-0 

    p.mb-5 

    .row.mb-md-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t2/f89.svg' alt='imagen relacionada')
      .col-lg-6
        LineaTiempoD.color-primario.mb-5
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 

    .row.mb-md-5
      .col-lg-6.order-lg-last
        figure
          img(src='@/assets/curso/t2/f90.svg' alt='imagen relacionada')
      .col-lg-6
        LineaTiempoD.color-primario.mb-5
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 
          .p-4(titulo='' numero='')
            p 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t2/f70.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t2/f71.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t2/f72.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t2/f73.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t2/f74.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
