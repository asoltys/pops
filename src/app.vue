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

export default {
  name: 'app',
  components: {
    home,
    topnav,
    foot
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
