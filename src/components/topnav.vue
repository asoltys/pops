<template lang="pug">
  .container
    .row
      nav.navbar(role='navigation')
        .navbar
          ul.nav.navbar-nav
            li 
              router-link(to='about') About POPs
            li 
              router-link(to='prioritization') Site Prioritization for Risk Assessment
            li 
              router-link(to='sampling') Field Sampling Procedures
            li 
              router-link(to='hhra') Human Health Risk Assessment
            li 
              router-link(to='risk') Risk Management
</template>

<script>
  export default {
    name: 'topnav'
  }
</script>

<style lang="stylus">
  .topnav
    background #336799
    clear both
    height 76px
    position relative
    z-index 3

  nav 
    a 
      display block
      color white
      height 68px 

  ul.nav 
    height 76px
  
  .nav>li>a:focus, .nav>li>a:hover 
    background #002F6C
    color white

  footer 
    padding-top 40px
</style>
