<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Descripción de la idea de negocio

    img(src='@/assets/curso/t1/f1.jpg' alt='imagen relacionada' data-aos='flip-down').mb-5

    p.mb-5 La idea de negocio es el servicio o producto que se desea ofrecer al mercado, lo cual se requiere de un plan de negocio que debe incluir misión, visión, objetivos de la empresa y la estrategia para alcanzarlos, así como la estructura organizacional y la inversión para financiar el proyecto. No obstante, todo empieza cuando se tiene una idea de negocio para posteriormente materializarla por escrito en un documento teniendo en cuenta cinco elementos, veamos.

    .row.mb-5
      .col-lg-6(div data-aos="fade-right")
        figure
          img(src='@/assets/curso/t1/f2.png' alt='Estructura').mb-5
      .col-lg-6
        LineaTiempoD.color-primario
          .row.justify-content-right(numero='1' titulo='Estructura ideológica')
            .col-lg-4
            .col-lg-8
              p Contiene el nombre de la empresa, visión, misión, valores, objetivos y un detalle de las ventajas del negocio competitivas.
          .row.justify-content-right(numero='2' titulo='Estructura del entorno')
            .col-lg-4
            .col-lg-8
              p Es el arte y la ciencia, contiene un estudio de las fortalezas y las debilidades de la empresa, las tendencias del mercado, clientes potenciales y el comportamiento del sector donde se va a desarrollar. De organizar y etiquetar sitios web, intranets, comunidades en línea y 
                em software 
                | para apoyar la usabilidad y la facilidad de encontrar contenidos.

          .row.justify-content-right(numero='3' titulo='Estructura mecánica')
            .col-lg-4
            .col-lg-8
              p Se describen las actividades que se deben ejecutar para alcanzar el éxito de la idea de negocio tales como las ventas, las estrategias de distribución y publicidad.
          .row.justify-content-right(numero='4' titulo='Estructura financiera')
            .col-lg-4
            .col-lg-8
              p Se verifica en términos económicos y proyecciones de escenarios la viabilidad de la idea de negocio con el fin de observar si la utilidad es factible.
          .row.justify-content-right(numero='5' titulo='Recursos humanos')
            .col-lg-4
            .col-lg-8
              p Determina los puestos de trabajo requeridos, así como las obligaciones y derechos de cada miembro que integra la organización, independientemente de que el emprendedor sea una sola persona

    p.mb-5 La estructura ideológica corresponde con los valores misionales de cualquier empresa, por lo tanto, es necesario describir en la idea de negocio la misión, visión y los objetivos que se intentan lograr. La presentación ante sus potenciales inversionistas y demás colaboradores, recae de alguna forma en esta claridad, desde lo que es actualmente la empresa y cómo se proyecta a un futuro, como puede comprenderse en los elementos que le conforman:

    img(src='@/assets/curso/t1/f3.jpg' alt='imagen relacionada' data-aos='flip-up').mb-5

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      #t_1_1.row(titulo="Empresa")
        .col-lg-6
          p En esta sección se debe definir el nombre de la empresa, además debe expresar de forma simple a que se dedica el negocio y el entorno en el que se establece. El nombre debe ser corto, sencillo de recordar y pronunciar.
        .col-lg-1
        .col-lg-3.order-first.order-lg-last
          figure(data-aos='fade-left')
            img(src='@/assets/curso/t1/f4.svg' alt='imagen relacionada').mb-5
      #t_1_2.row(titulo="Misión")
        .col-lg-6
          p Como la misión describe la actividad que ejecuta la empresa dentro del mercado, entonces cabe resaltar que está en términos generales representa el objetivo por el cual se origina una empresa y le proporciona identidad, la cual integra las siguientes preguntas: 
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | ¿A qué se dedica el negocio?
            li
              i.fas.fa-angle-right
              | ¿Cuál es su público objetivo? Y ¿cuál es el tipo de negocio?
            li
              i.fas.fa-angle-right
              | ¿Con qué ventajas competitivas cuenta? Y ¿qué lo diferencia de la competencia?
        .col-lg-1
        .col-lg-3.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t1/f5.svg' alt='imagen relacionada').mb-5
      #t_1_3.row(titulo="Visión")
        .col-lg-6
          p Como la estructura ideológica es una parte muy importante de la empresa en este punto se especifica la imagen de la empresa a futuro, con el propósito de motivar al público e inversionistas para cumplir con las metas propuestas. Para la redacción de la visión se deben tener en cuenta los siguientes aspectos:
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | Debe tener objetivos factibles y alcanzables.
            li
              i.fas.fa-angle-right
              | La visión debe ser motivadora.
            li
              i.fas.fa-angle-right
              | Debe ser fácil de comunicar, sencilla y clara. 
        .col-lg-1
        .col-lg-3.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t1/f6.svg' alt='imagen relacionada').mb-5
      #t_1_4.row(titulo="Objetivos")
        .col-lg-6
          p En la estructura ideológica se presentan y describen los objetivos que se intentan lograr. Estos deben ser determinados teniendo en cuenta la misión y la visión de la empresa, pues forman un componente importante en el momento de estructurar y diseñar una organización. Por otra parte, cuando se definen de forma correcta los objetivos, estos permiten que la organización se centre en la obtención de un fin, pero objetivos definidos de forma incorrecta generan gastos y retrasos innecesarios. Por lo tanto, deben cumplir con las siguientes condiciones:
          ul.lista-ul
            li
              i.fas.fa-angle-right
              | Los objetivos deben poder medirse, y medir qué tan cerca está la empresa de conseguirlos.
            li
              i.fas.fa-angle-right
              | Alcanzables.
            li
              i.fas.fa-angle-right
              | Deben ser comprensibles, no deben ser indefinidos o abstractos.
            li
              i.fas.fa-angle-right
              | Deben exigir esfuerzo.
            li
              i.fas.fa-angle-right
              | Deben ser coherentes entre sí.

        .col-lg-1
        .col-lg-4.order-first.order-lg-last
          figure
            img(src='@/assets/curso/t1/f7.svg' alt='imagen relacionada').mb-5

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
