<template lang="pug">
  footer
    .row
      .col-md-12.footerbar
    .row
      .col-md-12.footerlinks
        .container
          .row
            .col-md-4
              .footerlinkgroup
                a.heading(href='#')
                  i.glyphicon.glyphicon-home
                  |  Home
              .footerlinkgroup
                a.heading(href='#') About POPs
              .footerlinkgroup
                a.heading(href='#') Site Prioritization for Risk Assessment
            .col-md-4
              .footerlinkgroup
                a.heading(href='#') Field Sampling Procedures
              .footerlinkgroup
                a.heading(href='#') Human Health Risk Assessment
              .footerlinkgroup
                a.heading(href='#') Risk Management
            .col-md-4
              .footermeta
</template>

<script>
  export default {
    name: 'topnav'
  }
</script>

<style lang="stylus">
  .footerbar
    min-height 55px
    background #336799
    border-bottom 6px solid #61a4e5

  .footerlinks
    padding-top 10px

  .footerlinkgroup
    padding-top 10px
    .heading
      font-weight bold

  footer 
    padding-top 40px
</style>
