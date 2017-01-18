<template lang="pug">
  #content.container-fluid(tabindex='-1')
    header.container
      .row
        .col-md-6
          router-link(to='/home')
            img(src='/static/logo.png', width='200px', style='margin-bottom: 15px')
        .col-md-6.text-right.USAIDLogo
          a(href='https://www.usaid.gov')
            img(src='https://www.usaid.gov/sites/all/themes/usaid/logo.png', alt='U.S. Agency for International Development')
    .row
      .col-md-12.topnav
        topnav
    .row
      router-view
    foot
</template>

<script>
import home from './components/home'
import topnav from './components/topnav'
import foot from './components/foot'

import Tour from 'Tour'
import MathJax from 'MathJax'

window.Tour = Tour
window.MathJax = MathJax

export default {
  name: 'app',
  components: {
    home,
    topnav,
    foot
  },
  methods: {
    startTour () {
      var tour = new Tour({
        steps: [
          {
            element: '#cs',
            title: 'Concentration of contaminant in soils',
            content: 'Usually 90th percentile or maximum'
          },
          {
            element: '#ir',
            title: 'Accidental soil ingestion rate for adult',
            content: 'Content of my step'
          },
          {
            element: '#af',
            title: 'Title of my step',
            content: 'Content of my step'
          },
          {
            element: '#dhours',
            title: 'Title of my step',
            content: 'Content of my step'
          },
          {
            element: '#row',
            title: 'Title of my step',
            content: 'Content of my step'
          }
        ],
        storage: false
      })

      tour.init()
      console.log(tour)
      tour.start()
    }
  },
  mounted () {
    this.$on('tour', function () { this.startTour() })
    this.$nextTick(function () { MathJax.Hub.Queue(['Typeset', MathJax.Hub]) })
  }
}
</script>

<style lang="stylus">
  .logo
    font-size 36px
    font-weight bold

  .USAIDLogo
    padding 20px

  .bodytext
    font-size 18px
    line-height 1.7em
    a
      text-decoration underline

  html, body
    height 100%
    margin 0
    overflow visible
    text-size-adjust 100%

  body, div, table, input
    font-family "Open Sans",Helvetica,Arial,sans-serif
    font-size 16px

  a
    color #777
    cursor pointer
    background none
    border none
    outline none
    text-decoration none
    &:hover
      color #ccc
      transition 300ms
</style>
