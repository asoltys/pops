<template lang="pug">
  div
    table
      thead
        tr
          th Residential
          th  
          th Workers
          th  
          th Recreator
          th  
      tbody
        tr
          td Child
          td Adult
          td Outdoor
          td Construction
          td Child
          td Adult
        tr
          td 350
          td 350
          td 225
          td 250
          td 75
          td 75
        tr
          td 6
          td 26
          td 25
          td 1
          td 6
          td 26
        tr
          td 1
          td 1
          td 0.333333333333333
          td 0.333333333333333
          td 0.041666666666667
          td 0.041666666666667
        tr
          td 2190
          td 9490
          td 9125
          td 350
          td 2190
          td 9490
        tr
          td 15
          td 80
          td 80
          td 80
          td 15
          td 80
        tr
          td 200
          td 100
          td 100
          td 330
          td 200
          td 100
        tr
          td 2337
          td 6032
          td 3527
          td 3527
          td 2337
          td 6032
        tr
          td 0.2
          td 0.07
          td 0.12
          td 0.3
          td 0.2
          td 0.07

        h2 Accidental Soil Ingestion Dose
        div `CDIsi = (Csoil * EF * ED * IRs * RBA * 0.000001) / (AT * BW) = `
        input.result(v-model='CDIsi', ref='CDIsi', disabled)
        table
          hqparam(name='Csoil', units='mg/kg', v-model='Csoil', :desc='"concentration in soil (dry weight)"')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='IRs', units='mg/d', v-model='IRs', :desc='"ingestion rate soil"')
          hqparam(name='RBA', units='unitless', v-model='RBA', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h2 Inhalation of Contaminated Particles Dose
        div `CDIi nhal = (Csoil*EF*ED*ET*((1 / (VFs))+(1 / (PEFw)))/(AT)) = `
        input.result(v-model='CDIinhal', ref='CDIinhal', disabled)
        table
          hqparam(name='Csoil', units='mg/kg', v-model='Csoil', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='ET', units='mg/d', v-model='ET', :desc='"exposure time"')
          hqparam(name='VFs', units='m3/kg', v-model='VFs', :desc='""')
          hqparam(name='PEFw', units='m3/kg', v-model='PEFw', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')

        h2 Dermal contact with contaminated soil Dose Calculation
        div `CDIderm = (Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW) = `
        input.result(v-model='CDIderm', ref='CDIderm', disabled)
        table
          hqparam(name='Csoil', units='mg/kg', v-model='Csoil', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='SA', units='cm2/day', v-model='SA', :desc='"surface area"')
          hqparam(name='AF', units='mg/cm2', v-model='AF', :desc='"soil adherence factor"')
          hqparam(name='ABSd', units='proportion', v-model='ABSd', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h2 Water Ingestion Dose Calculation
        div `CDIwater = (Cwater*0.001*EF*ED*IRw)/(AT*BW) = `
        input.result(v-model='CDIwater', ref='CDIwater', disabled)
        table
          hqparam(name='Cwater', units='ug/L', v-model='Cwater', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='IRw', units='L/day', v-model='IRw', :desc='"intake rate of water"')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h2 Food Ingestion Dose Calculations
        h3 Fish
        div `CDIfish=(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW) = `
        input.result(v-model='CDIfish', ref='CDIfish', disabled)
        table
          hqparam(name='Cfish', units='mg/kg fresh weight', v-model='Cfish', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='IRfish', units='mg/day', v-model='IRfish', :desc='"intake rate of fish"')
          hqparam(name='CFfish', units='proportion', v-model='CFfish', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h3 Produce
        div `CDIp rod=(Cp rod*EF*ED*IRP*0.000001*CFp rod)/(AT*BW) = `
        input.result(v-model='CDIprod', ref='CDIprod', disabled)
        table
          hqparam(name='Cprod', units='mg/kg fresh weight', v-model='Cprod', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='IRprod', units='mg/day', v-model='IRprod', :desc='""')
          hqparam(name='CFprod', units='proportion', v-model='CFprod', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h3 Beef
        div `CDIbeef=(Cbeef*EF*ED*IRbeef*0.000001*CFbeef)/(AT*BW) = `
        input.result(v-model='CDIbeef', ref='CDIbeef', disabled)
        table
          hqparam(name='Cbeef', units='mg/kg fresh weight', v-model='Cbeef', :desc='""')
          hqparam(name='EF', units='days/year', v-model='EF', :desc='"exposure frequency"')
          hqparam(name='ED', units='years', v-model='ED', :desc='"exposure duration"')
          hqparam(name='IRbeef', units='mg/day', v-model='IRbeef', :desc='""')
          hqparam(name='CFbeef', units='proportion', v-model='CFbeef', :desc='""')
          hqparam(name='AT', units='days', v-model='AT', :desc='"averaging time (365 days*ED)"')
          hqparam(name='BW', units='kg', v-model='BW', :desc='"body weight"')

        h3 Hazard Quotient/Index
        table
          hqparam(name='TVoral', units='mg/kg-day', v-model='TVoral', disabled, :desc='""')
          hqparam(name='TVinhal', units='mg/m3', v-model='TVinhal', disabled, :desc='""')
          hqparam(name='CDIsi', units='mg/kg-day', v-model='CDIsi', :desc='""')
          hqparam(name='CDIinhal', units='mg/m3', v-model='CDIinhal', :desc='""')
          hqparam(name='CDIderm', units='mg/kg-day', v-model='CDIderm', :desc='""')
          hqparam(name='CDIwater', units='mg/kg-day', v-model='CDIwater', :desc='""')
          hqparam(name='CDIfish', units='mg/kg-day', v-model='CDIfish', :desc='""')
          hqparam(name='CDIprod', units='mg/kg-day', v-model='CDIprod', :desc='""')
          hqparam(name='CDIbeef', units='mg/kg-day', v-model='CDIbeef', :desc='""')

        input.result(v-model='HQsi', ref='HQsi')
        input.result(v-model='HQinhal', ref='HQinhal')
        input.result(v-model='HQderm', ref='HQderm')
        input.result(v-model='HQwater', ref='HQwater')
        input.result(v-model='HQfish', ref='HQfish')
        input.result(v-model='HQprod', ref='HQprod')
        input.result(v-model='HQbeef', ref='HQbeef')
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import hqparam from './hqparam'

export default {
  data () {
    return {
      show: true,
      Csoil: 1,
      Cwater: 1,
      Cfish: 1,
      Cprod: 1,
      Cbeef: 1,
      EF: 1,
      ED: 1,
      IRs: 1,
      IRw: 1,
      IRfish: 1,
      IRprod: 1,
      IRbeef: 1,
      CFfish: 1,
      CFprod: 1,
      CFbeef: 1,
      RBA: 1,
      AT: 1,
      BW: 1,
      VFs: 1,
      PEFw: 1,
      ET: 1,
      ABSd: 1,
      SA: 1,
      AF: 1,
      TVoral: 1,
      TVinhal: 1
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
      let v = (this.Cwater * 0.001 * this.EF * this.ED * this.IRw) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    CDIfish: function () {
      let v = (this.Cfish * this.EF * this.ED * this.IRfish * 0.000001 * this.CFfish) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    CDIprod: function () {
      let v = (this.Cprod * this.EF * this.ED * this.IRprod * 0.000001 * this.CFprod) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    CDIbeef: function () {
      let v = (this.Cbeef * this.EF * this.ED * this.IRbeef * 0.000001 * this.CFbeef) / (this.AT * this.BW)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQsi: function () {
      let v = (this.CDIsi / this.TVoral)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQinhal: function () {
      let v = (this.CDIinhal / this.TVinhal)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQderm: function () {
      let v = (this.CDIderm / this.TVoral)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQwater: function () {
      let v = (this.CDIwater / this.TVoral)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQfish: function () {
      let v = (this.CDIfish / this.TVoral)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQprod: function () {
      let v = (this.CDIprod / this.TVoral)
      if (!isNaN(v) && isFinite(v)) {
        return v
      } else {
        return ''
      }
    },
    HQbeef: function () {
      let v = (this.CDIbeef / this.TVoral)
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
