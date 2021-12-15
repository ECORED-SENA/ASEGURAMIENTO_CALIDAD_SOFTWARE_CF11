<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Los Fundamentos de Calidad del 
      em Software
      | , contiene elementos que permiten hacerse una idea del contexto en el que se mueve el aseguramiento de la calidad del software en sus dos manifestaciones (procesos y producto) y en sus dimensiones de gestión y desarrollo.
    p Contempla desde la idea de negocio, teniendo en cuenta las características misionales empresariales, como elemento señalizador del horizonte que provee este tipo de proyectos, hasta los marcos de referencia que existen no solo desde el ISO, sino además involucrando el modelo CMMI, junto con lo correspondiente a la calidad del 
      em software 
      | relacionada con el producto y con las personas.
    p En relación a éste último componente relacionado con las personas, involucra modelos como PSP/TSP, SCRUM, y las características correspondientes a las metodologías ágiles y XP.
    p Por último, se describe la documentación requerida en el proceso de diseño, aplicación y análisis de resultados, esto con el fin de comprobar y verificar idoneidad desde el proceso de calidad del 
      em software
      | , además de garantizar un producto bien hecho. En el mapa conceptual podrá hacer un breve recorrido sobre las temáticas abordadas.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/CF11_SINTESIS.jpg", alt="alt")
      //.col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
