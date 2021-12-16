<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Le damos la bienvenida al componente formativo “Fundamentos de la calidad del 
      em Software
      | ”. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se muestra a continuación:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XccIv4DurGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
