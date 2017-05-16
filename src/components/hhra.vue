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
      hqparam(name='VFs', units='m3/kg', v-model='VFs')
      hqparam(name='PEFw', units='m3/kg', v-model='PEFw')
      hqparam(name='AT', units='days', v-model='AT')

    h2 Dermal contact with contaminated soil Dose Calculation
    div `CDIderm = (Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW) = `
    input.result(v-model='CDIderm', ref='CDIderm')
    table
      hqparam(name='Csoil', units='mg/kg', v-model='Csoil')
      hqparam(name='EF', units='days/year', v-model='EF')
      hqparam(name='ED', units='years', v-model='ED')
      hqparam(name='SA', units='cm2/day', v-model='SA')
      hqparam(name='AF', units='mg/cm2', v-model='AF')
      hqparam(name='ABSd', units='proportion', v-model='ABSd')
      hqparam(name='AT', units='days', v-model='AT')
      hqparam(name='BW', units='kg', v-model='BW')

    h2 Water Ingestion Dose Calculation
    div `CDIwater = (Cwater*0.001*EF*ED*IRw)/(AT*BW) = `
    input.result(v-model='CDIwater', ref='CDIwater')
    table
      hqparam(name='Csoil', units='mg/kg', v-model='Csoil')
      hqparam(name='EF', units='days/year', v-model='EF')
      hqparam(name='ED', units='years', v-model='ED')
      hqparam(name='IRw', units='cm2/day', v-model='IRw')
      hqparam(name='AT', units='days', v-model='AT')
      hqparam(name='BW', units='kg', v-model='BW')
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
      IRw: '',
      RBA: '',
      AT: '',
      BW: '',
      VFs: '',
      PEFw: '',
      ET: '',
      ABSd: '',
      SA: '',
      AF: ''
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
    },
    CDIderm: function () {
      let v = (this.Csoil * this.EF * this.ED * this.SA * this.AF * this.ABSd * 0.00001) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    CDIwater: function () {
      let v = (this.Csoil * this.EF * this.ED * this.IRw) / (this.AT * this.BW)
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
