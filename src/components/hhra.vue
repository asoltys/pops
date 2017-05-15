<template lang="pug">
  div
    h2 Accidental Soil Ingestion Dose
    div `CDIsi = (Csoil * EF * ED * IRs * RBA * 0.000001) / (AT * BW) = `
    input.result(v-model='CDIsi', ref='CDIsi')
    table
      hqparam(name='Csoil', units='mg/kg', v-model='Csoil')
      hqparam(name='EF', units='days/year', v-model='EF')
      hqparam(name='ED', units='years', v-model='ED')
      hqparam(name='IRs', units='mg/d', v-model='IRs')
      hqparam(name='RBA', units='unitless', v-model='RBA')
      hqparam(name='AT', units='days', v-model='AT')
      hqparam(name='BW', units='kg', v-model='BW')

    h2 Inhalation of Contaminated Particles Dose
    div `CDIi nhal = (Csoil*EF*ED*ET*((1 / (VFs))+(1 / (PEFw)))/(AT)) = `
    input.result(v-model='CDIinhal', ref='CDIinhal')
    table
      hqparam(name='Csoil', units='mg/kg', v-model='Csoil')
      hqparam(name='EF', units='days/year', v-model='EF')
      hqparam(name='ED', units='years', v-model='ED')
      hqparam(name='ET', units='mg/d', v-model='ET')
      hqparam(name='VFs', units='unitless', v-model='VFs')
      hqparam(name='PEFw', units='unitless', v-model='PEFw')
      hqparam(name='AT', units='days', v-model='AT')

    input(v-model='banana')
    input(v-model='banana')
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import hqparam from './hqparam'

export default {
  data () {
    return {
      show: true,
      Csoil: '',
      EF: '',
      ED: '',
      IRs: '',
      RBA: '',
      AT: '',
      BW: '',
      VFs: '',
      PEFw: '',
      ET: ''
    }
  },
  methods: {
    moveInput () {
      $('.result').each(function () {
        let offset = $(this).prev().offset()
        let width = $(this).prev().find('.mjx-chtml').width()
        let height = $(this).prev().find('.mjx-chtml').height()
        $(this).offset({
          top: offset.top + (height / 2 - $(this).height()) + 5,
          left: offset.left + width
        })
      })
    }
  },
  computed: {
    CDIsi: function () {
      let v = (this.Csoil * this.EF * this.ED * this.IRs * this.RBA * 0.000001) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    CDIinhal: function () {
      let v = (this.Csoil * this.EF * this.ED * this.ET * ((1 / (this.VFs)) + (1 / (this.PEFw))) / (this.AT))
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub])
      MathJax.Hub.Queue(this.moveInput)
      MathJax.Hub.Config({
        displayAlign: 'left'
      })
    })
  },
  components: {
    hqparam: hqparam
  }
}
</script>
