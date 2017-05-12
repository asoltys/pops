<template lang="pug">
  .container
    link(href='https://unpkg.com/animate.css@3.5.1/animate.min.css', rel='stylesheet', type='text/css')
    .row
      .col-md-12
        .page-header
          h1 Hazard Quotient Tool
        script(type="math/mml")
          math(xmlns='http://www.w3.org/1998/Math/MathML', display='block')
            msub 
              mi CDI 
              mi si
            mo =
            mrow
              mfrac
                mrow
                  mo (
                  msub#cs
                    mi C
                    mi soil
                  mo &times; 
                  msub
                    mi EF
                  mo &times; 
                  msub
                    mi ED
                  mo &times; 
                  msub
                    mi IR
                    mi s
                  mo &times; 
                  msub
                    mi RBA
                  mo &times; 
                  msub
                    mi 0.000001
                  mo &times; 
                  mo )
                mrow
                  mi AT
                  mo &times; 
                  mi BW
            mo#equals =
        input#CDIsi(v-model='CDIsi', ref='CDIsi')
        table
          tr
            td C#[sub soil] = 
            td
              input(type='number', ref='csinput', @keyup='calculate', v-model='Csoil')
            td mg/kg
          tr
            td EF = 
            td
              input(type='number', @keyup='calculate', v-model='EF')
            td days/year
          tr
            td ED =
            td
              input(type='number', @keyup='calculate', v-model='ED')
            td years
          tr
            td IR#[sub s] =
            td
              input(type='number', @keyup='calculate', v-model='IRs')
            td mg/d
          tr
            td RBA =
            td
              input(type='number', @keyup='calculate', v-model='RBA')
            td unitless
          tr
            td AT =
            td
              input(type='number', @keyup='calculate', v-model='AT')
            td days
          tr
            td BW =
            td
              input(type='number', @keyup='calculate', v-model='BW')
            td kg
</template>

<script>
import $ from 'jQuery'
import MathJax from 'MathJax'
window.MathJax = MathJax
window.$ = $

export default {
  data () {
    return {
      show: true,
      CDIsi: '',
      Csoil: '',
      EF: '',
      ED: '',
      IRs: '',
      RBA: '',
      AT: '',
      BW: 1
    }
  },
  methods: {
    calculate () {
      var CDIsi = (this.Csoil * this.EF * this.ED * this.IRs * this.RBA * 0.000001) / (this.AT * this.BW)
      if (!isNaN(CDIsi) && isFinite(CDIsi)) {
        this.CDIsi = CDIsi
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
      MathJax.Hub.Config({
        displayAlign: 'left'
      })

      MathJax.Hub.Register.StartupHook('End', function () {
        $('#CDIsi').offset({top: $('#equals').offset().top, left: $('#equals').offset().left + 30})
      })
    })
  }
}
</script>

<style lang="stylus">
  input[type=number]
    width 66px
    margin-right 5px
    padding-left 5px

  .fade-enter-active, .fade-leave-active 
    transition opacity .5s
  .fade-enter, .fade-leave-to 
    opacity 0

  .popover-title
    background #336799
    color white
</style>
