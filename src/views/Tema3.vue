<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 
      h1 

    .row.mb-5
      .col-lg-6
        p 
      .col-lg-6.order-first.order-lg-last
        figure
          img(src='@/assets/curso/t3/f1.jpg' alt='imagen relacionada')
        
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 

    p 
    img(src='@/assets/curso/t3/f2.jpg' alt='imagen relacionada').mb-5
    
    .row.align-items-center.mb-5
      .col-lg-6
        h3 
        p 
        p 
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
            h2 
            p 

    p.mb-5 

    .bg5
      SlyderD.mb-5(:datos="datosSlyderT3")

    h3 
    p 

    .bg1.row.justify-content-center.p-4.mb-5
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f8.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center 
              p 
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f9.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center 
              p 
      .col-lg-3
        .tarjeta-avatar
          img(src='@/assets/curso/t3/f10.svg' alt='AvatarTop')
          .tarjeta.fblanco.boxShadow
            .p-4
              h2.text-center 
              p 

    h3 
    p 
    p 

    .col-lg-7.mx-auto.mb-5
      .titulo-quinto.color-acento-contenido
        span 
    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f11.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 
            p 
    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f12.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 
            p 
    .col-lg-7.mx-auto.mb-5
      .tarjeta-avatar-b.mb-5
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/t3/f13.svg' alt='AvatarTop')
        .tarjeta.tarjeta--azul
          .p-4
            h2 
            p 
        
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 

    p 
    p 
    p 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t3/f14.svg', alt='imagen relacionada')

      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 

    h3 
    p.mb-5 

    tabla

    h3 
    p.mb-5 

    .row.align-items-center.mb-5
      .col-lg-6
        figure
          img(src='@/assets/curso/t3/f15.svg', alt='imagen relacionada')
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
    p 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f16.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f17.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f18.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f19.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f20.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/t3/f21.svg' alt='AvatarTop')
        h2.text-center.text-white 
        p.text-center.text-white 

    .row.align-items-center.mb-5
      .col-lg-6
        p 
        p 
        p 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | 
          li 
            .lista-ol--cuadro__vineta
              span 3
            | 
          li 
            .lista-ol--cuadro__vineta
              span 4
            | 
          li 
            .lista-ol--cuadro__vineta
              span 5
            | 
          li 
            .lista-ol--cuadro__vineta
              span 6
            | 
          li 
            .lista-ol--cuadro__vineta
              span 7
            | 

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 

    p.mb-5 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t3/f22.svg', alt='imagen relacionada')

      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 
      .bg1.p-3(x="20%" y="20%" numero="")
        p.mb-0 

    h3 
    p 
    p 
    p 

    .titulo-quinto.color-acento-contenido
      span 

    img(src='@/assets/curso/t3/f23.svg' alt='mapa conceptual')

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t3/f5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
        imagen: require('@/assets/curso/t3/f6.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: '',
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
