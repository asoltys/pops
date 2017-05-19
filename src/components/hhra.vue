<template lang="pug">
  div
    tov(@update='update')

    formula(v-model='CDIsi', param='CDIsi', :params='params', list='Csoil,EF,ED,IRs,RBA,AT,BW', expression='(Csoil * EF * ED * IRs * RBA * 0.000001) / (AT * BW)', heading='Accidental Soil Ingestion Dose')

    h2 Dermal contact with contaminated soil Dose Calculation
    div `CDIderm = (Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW) = `
    input.result(v-model='CDIderm', disabled)
    table
      hqparam(name='Csoil', units='mg/kg', v-model='Csoil', desc='concentration in soil (dry weight)')
      hqparam(name='EF', units='days/year', v-model='EF', desc='exposure frequency')
      hqparam(name='ED', units='years', v-model='ED', desc='exposure duration')
      hqparam(name='SA', units='cm2/day', v-model='SA', desc='surface area')
      hqparam(name='AF', units='mg/cm2', v-model='AF', desc='soil adherence factor')
      hqparam(name='ABSd', units='proportion', v-model='ABSd', desc='dermal absorption')
      hqparam(name='AT', units='days', v-model='AT', desc='averaging time (365 days*ED)')
      hqparam(name='BW', units='kg', v-model='BW', desc='body weight')

    h2 Water Ingestion Dose Calculation
    div `CDIwater = (Cwater*0.001*EF*ED*IRw)/(AT*BW) = `
    input.result(v-model='CDIwater', disabled)
    table
      hqparam(name='Cwater', units='ug/L', v-model='Cwater', desc='water concentration (total)')
      hqparam(name='EF', units='days/year', v-model='EF', desc='exposure frequency')
      hqparam(name='ED', units='years', v-model='ED', desc='exposure duration')
      hqparam(name='IRw', units='L/day', v-model='IRw', desc='intake rate of water')
      hqparam(name='AT', units='days', v-model='AT', desc='averaging time (365 days*ED)')
      hqparam(name='BW', units='kg', v-model='BW', desc='body weight')

    h2 Food Ingestion Dose Calculations
    h3 Fish
    div `CDIfish=(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW) = `
    input.result(v-model='CDIfish', disabled)
    table
      hqparam(name='Cfish', units='mg/kg fresh weight', v-model='Cfish', desc='fish tissue concentrations')
      hqparam(name='EF', units='days/year', v-model='EF', desc='exposure frequency')
      hqparam(name='ED', units='years', v-model='ED', desc='exposure duration')
      hqparam(name='IRfish', units='mg/day', v-model='IRfish', desc='intake rate of fish')
      hqparam(name='CFfish', units='proportion', v-model='CFfish', desc='contaminated fraction of fish')
      hqparam(name='AT', units='days', v-model='AT', desc='averaging time (365 days*ED)')
      hqparam(name='BW', units='kg', v-model='BW', desc='body weight')

    h3 Produce
    div `CDIp rod=(Cp rod*EF*ED*IRP*0.000001*CFp rod)/(AT*BW) = `
    input.result(v-model='CDIprod', disabled)
    table
      hqparam(name='Cprod', units='mg/kg fresh weight', v-model='Cprod', desc='')
      hqparam(name='EF', units='days/year', v-model='EF', desc='exposure frequency')
      hqparam(name='ED', units='years', v-model='ED', desc='exposure duration')
      hqparam(name='IRprod', units='mg/day', v-model='IRprod', desc='intake rate of produce')
      hqparam(name='CFprod', units='proportion', v-model='CFprod', desc='contaminated fraction of produce')
      hqparam(name='AT', units='days', v-model='AT', desc='averaging time (365 days*ED)')
      hqparam(name='BW', units='kg', v-model='BW', desc='body weight')

    h3 Beef
    div `CDIbeef=(Cbeef*EF*ED*IRbeef*0.000001*CFbeef)/(AT*BW) = `
    input.result(v-model='CDIbeef', disabled)
    table
      hqparam(name='Cbeef', units='mg/kg fresh weight', v-model='Cbeef', desc='concentration in beef')
      hqparam(name='EF', units='days/year', v-model='EF', desc='exposure frequency')
      hqparam(name='ED', units='years', v-model='ED', desc='exposure duration')
      hqparam(name='IRbeef', units='mg/day', v-model='IRbeef', desc='intake rate of beef')
      hqparam(name='CFbeef', units='proportion', v-model='CFbeef', desc='contaminated fraction of beef')
      hqparam(name='AT', units='days', v-model='AT', desc='averaging time (365 days*ED)')
      hqparam(name='BW', units='kg', v-model='BW', desc='body weight')

    h3 Hazard Quotient/Index
    table
      hqparam(name='TVoral', units='mg/kg-day', v-model='TVoral', desc='toxicity value oral route')
      hqparam(name='TVinhal', units='mg/m3', v-model='TVinhal', desc='toxicity value inhalation route')

    table.table
      tr
        th Exposure Route
        th Dose
        th
        th Hazard Quotient
        th
      tr
        td soil ingestion
        td CDIsi (mg/kg-d)
        td
          input(v-model='CDIsi')
        td HQsi
        td
          input(v-model='HQsi')
      tr
        td particulate inhalation
        td CDIinhal (mg/kg-d)
        td
          input(v-model='CDIinhal')
        td HQinhal
        td
          input(v-model='HQinhal')
      tr
        td dermal contact
        td CDIderm (mg/kg-d)
        td
          input(v-model='CDIderm')
        td HQderm
        td
          input(v-model='HQderm')
      tr
        td water ingestion
        td CDIwater (mg/kg-d)
        td
          input(v-model='CDIwater')
        td HQwater
        td
          input(v-model='HQwater')
      tr
        td fish ingestion
        td CDIfish (mg/kg-d)
        td
          input(v-model='CDIfish')
        td HQfish
        td
          input(v-model='HQfish')
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import hqparam from './hqparam'
import tov from './tov'
import formula from './formula'

export default {
  data () {
    let obj = {
      params: {
        Csoil: { units: 'mg/kg', desc: 'concentration in soil (dry weight)' },
        EF: { units: 'days/year', desc: 'exposure frequency' },
        ED: { units: 'years', desc: 'exposure duration' },
        IRs: { units: 'mg/d', desc: 'ingestion rate soil' },
        RBA: { units: 'unitless', desc: 'relative bioavailability factor for soil' },
        AT: { units: 'days', desc: 'averaging time (365 days*ED)' },
        BW: { units: 'kg', desc: 'body weight' }
      },
      Csoil: 0.000774,
      Cwater: 0.000014,
      Cfish: 0.00000000108,
      Cprod: 0.0000000997,
      Cbeef: 0.000000273,
      VFs: 1960000,
      PEFw: 1360000000,
      ABSd: 0.03,
      RBA: 1,
      CFfish: 1,
      CFprod: 1,
      CFbeef: 1,
      TVoral: 0.0000000007,
      TVinhal: 0.00000004
    }

    for (let f of 'EF,ED,IRs,IRw,IRfish,IRprod,IRbeef,AT,BW,ET,SA,AF'.split(',')) {
      obj[f] = null
    }

    return obj
  },
  methods: {
    format (v) {
      if (!isNaN(v) && isFinite(v)) return Math.round(v * 100000000000000) / 100000000000000
      return ''
    },
    update (values) {
      Object.assign(this, values)
    },
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
      $('.collapse').collapse('hide')
    }
  },
  computed: {
    CDIsi () {
      let v = (this.Csoil * this.EF * this.ED * this.IRs * this.RBA * 0.000001) / (this.AT * this.BW)
      return this.format(v)
    },
    CDIinhal () {
      let v = (this.Csoil * this.EF * this.ED * this.ET * ((1 / (this.VFs)) + (1 / (this.PEFw))) / (this.AT))
      return this.format(v)
    },
    CDIderm () {
      let v = (this.Csoil * this.EF * this.ED * this.SA * this.AF * this.ABSd * 0.00001) / (this.AT * this.BW)
      return this.format(v)
    },
    CDIwater () {
      let v = (this.Cwater * 0.001 * this.EF * this.ED * this.IRw) / (this.AT * this.BW)
      return this.format(v)
    },
    CDIfish () {
      let v = (this.Cfish * this.EF * this.ED * this.IRfish * 0.000001 * this.CFfish) / (this.AT * this.BW)
      return this.format(v)
    },
    CDIprod () {
      let v = (this.Cprod * this.EF * this.ED * this.IRprod * 0.000001 * this.CFprod) / (this.AT * this.BW)
      return this.format(v)
    },
    CDIbeef () {
      let v = (this.Cbeef * this.EF * this.ED * this.IRbeef * 0.000001 * this.CFbeef) / (this.AT * this.BW)
      return this.format(v)
    },
    HQsi () {
      let v = (this.CDIsi / this.TVoral)
      return this.format(v)
    },
    HQinhal () {
      let v = (this.CDIinhal / this.TVinhal)
      return this.format(v)
    },
    HQderm () {
      let v = (this.CDIderm / this.TVoral)
      return this.format(v)
    },
    HQwater () {
      let v = (this.CDIwater / this.TVoral)
      return this.format(v)
    },
    HQfish () {
      let v = (this.CDIfish / this.TVoral)
      return this.format(v)
    },
    HQprod () {
      let v = (this.CDIprod / this.TVoral)
      return this.format(v)
    },
    HQbeef () {
      let v = (this.CDIbeef / this.TVoral)
      return this.format(v)
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
  components: { hqparam, tov, formula }
}
</script>
