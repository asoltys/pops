<template lang="pug">
  .container
    .row
      .col-md-12
        .page-header
          h1 About POPs
    .row
      .col-md-12
        ol.breadcrumb
          li
            a(href='index.html') Home
          li.active About POPs
    .row
      .col-md-12.bodytext
        #carousel
          img(src='../assets/photo_1.jpg')
          img(src='../assets/photo_2.jpg')
        p
          | Over the past 50 years the chemical revolution has benefited the human population in countless ways but has also resulted in great harm. Chemicals have raised farming yields by killing crop pests and have allowed for the development of useful products including plastics. Our lives have been made more productive and comfortable because of chemicals but when stored, used or disposed of improperly, some chemicals can cause toxic reactions, persist in the environment for years, travel thousands of kilometers from where they originate, threaten long-term health, and have ecological and human health consequences that were never anticipated or intended.
        p
          | One class of chemicals called persistent organic pollutants (POPs) has aroused a lot of concern. Many POPs pose such a significant threat to health and the environment that in 2001, the world&rsquo;s governments met in Sweden and adopted the Stockholm Convention created to restrict and ultimately eliminate the production, use, release and storage of POPs.
</template>

<script>
  import $ from 'jquery'
  window.$ = $

  export default {
    name: 'about',
    mounted: function (event) {
      $('#carousel').slick({
        autoplay: true,
        arrows: false
      })
    }
  }
</script>

<style lang="stylus" scoped>
  #carousel
    width 600px
    float right
    margin-left 50px
    margin-bottom 50px

  img
    width 600px
    height 400px
</style>
