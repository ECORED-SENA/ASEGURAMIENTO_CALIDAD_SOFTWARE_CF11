<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Documentar el proceso de calidad de 
        em software

    .row.mb-5
      .col-lg-6
        p La documentación de productos de 
          em software 
          | son artefactos importantes, dado que estos permiten transferir y comunicar aspectos que al revisar o inspeccionar un sistema no se pueden entender rápidamente y suele ser complicado, por tal razón es que se documenta para comprender, compartir y mostrar el comportamiento y la estructura de un sistema o de sus componentes, controlar y visualizar la arquitectura del sistema y controlar el riesgo, además la documentación debe utilizarse para el desarrollo del producto 
          em software 
          | y su mantenimiento en el futuro resaltando que no solo se documenta un proceso respecto a la calidad, sino, también las fases del desarrollo del 
          em software
          | , requerimientos, análisis, diseño, construcción y pruebas. Sin embargo, cuando se requiere documentar un proceso de calidad de 
          em software 
          | es pertinente tener en cuenta tanto el plan de pruebas como los resultados arrojados que se muestran en los apartados siguientes. 
      .col-lg-6.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t3/f1.jpg' alt='imagen relacionada')
        
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Diseñar los instrumentos de calidad de 
        em software

    p Los instrumentos de calidad de 
      em software 
      | al ser combinados con otras partes son útiles al momento de realizar mediciones, observar y almacenar datos que sean verificables y que se puedan utilizar para mejoras continuas en los procesos de calidad de un producto. Entonces para documentar pruebas de 
      em software 
      | es importante ver el plan de pruebas como un instrumento clave en el diseño y creación de pruebas de 
      em software.
    img(src='@/assets/curso/t3/f2.jpg' alt='imagen relacionada').mb-5
    
    .row.align-items-center.mb-5
      .col-lg-6
        h3 Plan de pruebas
        p Un instrumento de gran utilidad para estructurar el proceso de pruebas y la documentación es el plan de pruebas. Por lo tanto, la finalidad es suministrar la información requerida para planear y controlar las actividades relacionadas con las pruebas en el proceso de desarrollo de un producto 
          em software.
          |  Presenta el enfoque para realizar la verificación de los componentes del producto. Todo proceso de desarrollo de 
          em software 
          | debe contar con la implementación de la fase de pruebas. 
        p El personal que se dedica a ejecutar pruebas de 
          em software 
          | requiere de un plan de pruebas de 
          em software,
          |  cuyo objetivo es comunicar a todos los involucrados del proyecto: los entregables, ítems a ser certificados, criterios de aprobación y fallos, criterios de suspensión y reanudación, las necesidades de ambiente, las capacitaciones necesarias para los integrales del equipo, riesgos y el laboratorio de usabilidad.
      .col-lg-2
      .col-lg-6
        figure
          img(src='@/assets/curso/t3/f3.svg' alt='imagen relacionada')

    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f4.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 Plan de pruebas
            p El plan se puede aplicar a todo el proyecto y se ajusta a las necesidades de cada empresa, teniendo en cuenta el tamaño del proyecto, el tiempo, el costo, el ciclo de vida del 
              em software
              | , los involucrados.

    p.mb-5 Cada entidad puede definir su propio plan de pruebas basado en buenas prácticas, de acuerdo con las siguientes características, veamos:

    SlyderD.mb-5.bg5.p-5.img50pc(:datos="datosSlydert3")

    h3 Formatos
    p Recordemos que el estándar ISO/IEC/IEEE 29119-3:2013 es un instrumento que suministra una serie de artefactos validados a nivel internacional por las organizaciones a la vanguardia del proceso de desarrollo de 
      em software 
      | y a su vez al margen de la ejecución de pruebas de 
      em software
      | , los de mayor reconocimiento son:

    .bg1.row.justify-content-center.p-4.mb-5
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f8.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center Documentación de Proceso de Pruebas (a escala) Organizacional
              p.mb-0.text-small.text-center Política de Pruebas
              p.mb-0.text-small.text-center Estrategia Organizacional de Pruebas
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f9.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center Documentación del Proceso de Gestión de Pruebas
              p.mb-0.text-small.text-center Plan de Pruebas (incluyendo una estrategia de pruebas)
              p.mb-0.text-small.text-center Reporte de Estado de Prueba
              p.mb-0.text-small.text-center Reporte de Compleción de Pruebas
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f10.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center Documentación del Proceso de Pruebas Dinámicas
              p.mb-0.text-small.text-center Especificación de Diseño de Prueba 
              p.mb-0.text-small.text-center Especificación de Caso de Prueba
              p.mb-0.text-small.text-center Especificación de Procedimiento de Prueba
              p.mb-0.text-small.text-center Requerimientos de Datos de Prueba
              p.mb-0.text-small.text-center Reporte de Preparación de Datos de Prueba
              p.mb-0.text-small.text-center Requerimientos de Entorno de Prueba
              p.mb-0.text-small.text-center Reporte de Preparación de Entorno de Prueba
              p.mb-0.text-small.text-center Resultados Reales - Resultados de Prueba
              p.mb-0.text-small.text-center Registro de Ejecución de Prueba
              p.mb-0.text-small.text-center Reporte de Incidentes de Prueba

    h3 Artefactos de prueba
    p Los productos que resultan del proceso de desarrollo de 
      em software 
      | son identificados como artefactos, por ejemplo, el código fuente, defectos, plan y 
      em script 
      | de pruebas.
    p La calidad de 
      em software 
      | se compone de artefactos específicos que se forman en las diversas etapas del proceso de SQA, como podemos observar en la siguiente figura. 

    .col-lg-7.mx-auto.mb-5
      .titulo-quinto.color-acento-contenido
        span <b>Figura 15.</b><br>Artefactos de prueba en las etapas del proceso de SQA

    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f11.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 Planificación
            p 
              b Plan de pruebas: 
              | documento que describe un enfoque sistemático para probar un sistema.
            p 
              b Informe de resultados de pruebas: 
              | organiza y presenta un análisis resumido de los resultados de las pruebas para su auditoría y evaluación. Este informe debe incluir un listado de defectos detectados, la cantidad y tipos de pruebas elaboradas, así como su complejidad y los tipos de pruebas realizadas.
    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f12.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 Construcción
            p 
              b Caso de prueba: 
              | conjunto de condiciones con las cuales un 
              em tester 
              | debe determinar si un sistema funciona según lo requerido. 
            p 
              b Script de prueba: 
              | recopilación de instrucciones que se realizan al 
              em software 
              | sujeto a prueba para verificar que el sistema funciona de acuerdo con lo requerido. Hay scripts de pruebas automatizadas y manuales.
    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f13.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 Ejecución
            p 
              b Resultado de la ejecución de pruebas: 
              | recopilación de la información relacionada con los resultados de la ejecución de cada 
              em script 
              | de prueba, determinando si tuvieron una salida exitosa o un problema, respecto al comportamiento que debería tener. 
            p 
              b Defectos: 
              | un error produce un defecto y un defecto produce un fallo.
        
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Aplicar los instrumentos de calidad de 
        em software

    p En la elaboración de un plan de pruebas se debe tener bien claros los requerimientos de usuario que forman la iteración o proyecto, por lo tanto, se debe analizar la información de la especificación de requisitos, la matriz de trazabilidad, especificaciones y diseño funcional, casos de uso, requisitos no funcionales, prototipado e historias de usuario en el caso de metodologías ágiles.
    p Implementación del plan de pruebas.
    p El plan de pruebas es un documento que describe un conjunto de procedimientos, técnicas y normas para probar un sistema como podemos ver en el siguiente recurso educativo en donde se describen los elementos del mismo,

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t3/f14.svg', alt='imagen relacionada')

      .bg1.p-3(x="27.4%" y="9%" numero="")
        p.mb-0 Debe contener el nombre del sistema a probar, el nombre del documento y la versión.
      .bg1.p-3(x="27.4%" y="29.5%" numero="")
        p.mb-0 Especificar en qué consiste el sistema y cuál sistema se va a probar. También se incluye y describe el alcance de las pruebas.
      .bg1.p-3(x="27.4%" y="50%" numero="")
        p.mb-0 En esta parte se listan los tipos de prueba a realizar y los requerimientos a probar en el proceso. Especifica y describe las características a probar y las que no se van a probar.
      .bg1.p-3(x="27.4%" y="70.5%" numero="")
        p.mb-0 Representa el enfoque recomendado para la comprobación de las aplicaciones.
      .bg1.p-3(x="27.4%" y="91%" numero="")
        p.mb-0 En esta parte se especifica los criterios de entrada y salida de la aplicación al área de Aseguramiento de Calidad de 
          em Software 
          | (SQA).
      .bg1.p-3(x="42.5%" y="80.5%" numero="")
        p.mb-0 Se describen las actividades (plan, diseño, implementación y ejecución de pruebas, así como la evaluación de los resultados) que realizarán el equipo de SQA
      .bg1.p-3(x="70.7%" y="9%" numero="")
        p.mb-0 Se describe el informe de resultados de prueba y los defectos detectados durante el esfuerzo de pruebas
      .bg1.p-3(x="70.7%" y="29.5%" numero="")
        p.mb-0 Describe los recursos del sistema
      .bg1.p-3(x="70.7%" y="50%" numero="")
        p.mb-0 Describe las características del personal requerido para el esfuerzo de pruebas, así como las necesidades de entrenamiento.
      .bg1.p-3(x="70.7%" y="70.5%" numero="")
        p.mb-0 En este punto se plantean las fechas estimadas de inicio y fin de las principales actividades de prueba
      .bg1.p-3(x="70.7%" y="91%" numero="")
        p.mb-0 En este punto se plantea los riesgos identificados al momento de la planificación y su estrategia de mitigación

    h3 Elementos principales para redactar un caso de prueba
    p.mb-5 La estructuración de un caso de prueba se convierte en una actividad sin dificultad, si tenemos la información necesaria para su proceso de elaboración, así mismo al momento de verificar un 
      em software 
      | es de mucho aporte, puesto que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control. A continuación, en la siguiente tabla, se describen los elementos principales que debe contener un caso de prueba. 

    .col-lg-8.mx-auto.mb-5
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header
          h5.mb-0.text-white CASO DE PRUEBA
        table
          tbody
            tr
              td
                p Identificador
              td
                p Puede ser alfanum&eacute;rico o num&eacute;rico.
                p
                  strong &nbsp;
            tr
              td
                p Nombre
              td
                p Nombre del caso de prueba de manera concisa.
                p &nbsp;
            tr
              td
                p Descripci&oacute;n
              td
                p
                  | Objetivo del caso de prueba, tambi&eacute;n describe que probara, en ciertas ocasiones se incluye el ambiente de pruebas.
            tr
              td
                p Número de orden
                p Ejecuci&oacute;n
              td
                p
                  | Orden en la cual se ejecuta el caso de prueba, en la situaci&oacute;n de que se tengan m&uacute;ltiples casos de prueba.
            tr
              td
                p Requerimiento asociado
              td
                p
                  | Si se plantea un caso de prueba se debe saber a qu&eacute; requerimiento va asociado para mantener la trazabilidad.
            tr
              td
                p Precondici&oacute;n
              td
                p Estado en la cual se debe encontrar el sistema antes de comenzar la prueba.
            tr
              td
                p Postcondici&oacute;n
              td
                p El estado en que debe encontrarse el sistema luego de ejecutar la prueba.
                p
                  strong &nbsp;
            tr
              td
                p Resultado esperado
              td
                p Objetivo que debe ser alcanzado posterior a la prueba.

    h3 Elementos principales para redactar un 
      em script 
      | de prueba
    p.mb-5 Este artefacto es responsabilidad del 
      em tester
      | , siendo este quien lo escribe y lo ejecuta. En el siguiente recurso educativo, se nombran los elementos principales que debe contener un 
      em script 
      | de prueba. 

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t3/f15.svg', alt='imagen relacionada')
      .col-lg-1
      .col-lg-6
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c1.svg' alt='1' style='width:60px')
          .col
            p
              b Nombre: 
            p Identificador único para el 
              em script.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c2.svg' alt='2' style='width:60px')
          .col
            p
              b Descripción:
            p Describe el objetivo del 
              em script 
              | de pruebas.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c3.svg' alt='3' style='width:60px')
          .col
            p 
              b Pasos: 
            p Acciones que se van ejecutando en la aplicación.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c4.svg' alt='4' style='width:60px')
          .col
            p 
              b Puntos de verificación
            p Se comprueban aquellos puntos donde se verifica si la aplicación se está comportando de la forma esperada.
            p Son las observaciones puntuales que se realizan durante la ejecución de las pruebas para verificar que el producto cumple con los requerimientos específicos.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/c5.svg' alt='5' style='width:60px')
          .col
            p 
              b Resultado esperado
            p Por cada punto de verificación puede haber un resultado esperado asociado
        hr

    h3 Creación del plan de pruebas para proyectos ágiles 
      em (Agile Testing)
    p Un 
      em release 
      | define funcionalidades que ya están disponibles para el cliente. Por lo tanto, una planificación de un 
      em release 
      | tiene ciertos elementos:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f16.svg' alt='AvatarTop')
        h2.text-center.text-white Alcance
        p.text-center.text-white Se incluye el propósito del 
          em release 
          | y las historias de usuario.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f17.svg' alt='AvatarTop')
        h2.text-center.text-white Suposiciones
        p.text-center.text-white Se incluyen los supuestos del proyecto.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f18.svg' alt='AvatarTop')
        h2.text-center.text-white Análisis de riesgos
        p.text-center.text-white Define qué se incluye en la automatización de pruebas.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f19.svg' alt='AvatarTop')
        h2.text-center.text-white Automatización de pruebas
        p.text-center.text-white Define qué se incluirá en la automatización.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f20.svg' alt='AvatarTop')
        h2.text-center.text-white Ambiente de pruebas
        p.text-center.text-white Define qué se necesita en relación al ambiente de pruebas.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f21.svg' alt='AvatarTop')
        h2.text-center.text-white Datos de las pruebas
          br 
          | Resultados de las pruebas
        p.text-center.text-white Se establecen los datos arrojados en cada una de las pruebas, junto con los resultados encontrados.

    .row.align-items-center.mb-5
      .col-lg-6
        p Estos elementos se describen en un plan de pruebas, sin embargo, es posible que en los equipos se tome la decisión de no diseñarlo, en ese sentido se recomienda que los tester tomen notas o documente los factores más importantes relacionados con las pruebas en cada 
          em release
          | .
        p Para realizar pruebas de 
          em software 
          | en una metodología ágil, comenzamos por redactar el plan de pruebas teniendo en cuenta que se puede actualizar en cada sprint.
        p Un plan de pruebas ágiles debe incluir:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Introducción.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Alcance.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Recursos en este caso el nombre de los tester.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Descripción de funcionalidades a probar.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Los tipos de pruebas (Pruebas de rendimiento, pruebas de aceptación (UAT)) que se van a realizar.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Infraestructura lista.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Suposiciones, plan de riesgos y los entregables que se producirán al final.
      .col-lg-6.order-lg-last.order-first
        figure
          img(src='@/assets/curso/t3/f22.svg', alt='imagen relacionada')


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Análisis y entrega de resultados

    p.mb-5 Una vez ejecutadas las pruebas se deben analizar los resultados y los fallos detectados, teniendo en cuenta el reporte de defectos, directrices para detectarlos y el informe de resultados de pruebas. Para ello se puede realizar lo descrito a continuación:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t3/f23.svg', alt='imagen relacionada')
      .bg1.p-3(x="73.4%" y="17.5%" numero="")
        p.mb-0 Analizar el impacto del defecto.
      .bg1.p-3(x="87.5%" y="48.5%" numero="")
        p.mb-0 Investigar el problema, en qué condiciones se produce este fallo.
      .bg1.p-3(x="64.8%" y="85.5%" numero="")
        p.mb-0 Analizar la severidad, si es alta o baja.
      .bg1.p-3(x="30%" y="81.5%" numero="")
        p.mb-0 Variar los pasos realizados, se pueden ejecutar en orden diferente para observar si existe alguna variante en el resultado esperado.
      .bg1.p-3(x="13.3%" y="46.8%" numero="")
        p.mb-0 Variar opciones de configuración, si estamos probando una aplicación web podemos probar con diferentes navegadores.
      .bg1.p-3(x="32.8%" y="16.5%" numero="")
        p.mb-0 Determinar condiciones específicas bajo las cuales se reproduce el defecto, si estamos probando entradas de datos entonces probar con diferentes datos, es decir se va a tener más información sobre cómo se reproduce el defecto, si por ejemplo en los campos numéricos se prueba números positivos y negativos.

    h3 Incidencias detectadas
    p La gestión de incidencias es un elemento central e importante en el proceso de calidad de 
      em software 
      | puesto que es en este punto donde se tienen en cuenta los errores (Bugs). Por lo tanto, el propósito de las incidencias detectadas es precisamente generar su corrección, de tal manera que sea mínimamente probable que el error se repita.
    p Ciclo de vida de una incidencia
    p Un sistema de gestión de incidentes debe manejar los errores de 
      em software 
      | teniendo en cuenta el proceso (figura 16) este se adapta a proyectos de 
      em software 
      | en fase de desarrollo, mas no en ambiente de producción. 

    .titulo-quinto.color-acento-contenido
      span <b>Figura 16.</b><br>Ciclo de vida de una incidencia de 
        em software (Bug)
    img(src='@/assets/curso/t3/f24.svg' alt='mapa conceptual')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlydert3: [
      {
        titulo: 'El plan de prueba',
        texto:
          'Denota todos los procedimientos y métodos que serán empleados para la certificación del <em>software</em> determinando si este cumple con las especificaciones presentadas en los requisitos y dadas por el cliente. Este incluye los objetivos de calidad, los recursos, cronograma, asignaciones, y métodos, entre otros. ',
        imagen: require('@/assets/curso/t3/f5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Casos de prueba',
        texto:
          'Listar los ítems que serán certificados y describe detalladamente los pasos que serán ejecutados para evaluar la verificación de las funcionalidades del producto <em>software</em>.',
        imagen: require('@/assets/curso/t3/f6.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Reporte de pruebas',
        texto:
          'Describe los fallos encontrados en el proceso de ejecución de pruebas y las pruebas exitosas.',
        imagen: require('@/assets/curso/t3/f7.svg'),
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
