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

  .topnav
    background #336799
    clear both
    height 76px
    position relative
    z-index 3

  .bodytext
    font-size 18px
    line-height 1.7em
    a
      text-decoration underline

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

  div, input, button
    box-sizing border-box
    box-sizing border-box

  input, button
    padding 5px 10px
    border none
    outline none
    vertical-align top

  button
    font-size 16px
    background #9d936d
    color #222
    cursor pointer
    &:hover
      background #ccc
      transition 300ms

  .intro-button
    width 250px
    padding 15px 10px

  table
    &.users
      width 100%
      border-collapse collapse
      tr
        &:nth-child(odd)
          background rgba(0,0,0,.2)
        &:nth-child(even)
          background rgba(0,0,0,.3)
        &:hover
          background rgba(255,255,255,.1)
</style>
