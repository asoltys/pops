<template lang="pug">
  div
    tov(@update='update')

    formula(v-model='CDIsi', param='CDIsi', :params='params', list='Csoil,EF,ED,IRs,RBA,AT,BW', expression='(Csoil*EF*ED*IRs*RBA*0.000001) / (AT*BW)', heading='Accidental Soil Ingestion Dose')
    formula(v-model='CDIinhal', param='CDIinhal', :params='params', list='Csoil,EF,ED,IRs,RBA,AT,BW', expression='(Csoil*EF*ED*ET*((1/VFs)+(1/PEFw))/(AT))', heading='Inhalation of Contaminated Particles Dose')
    formula(v-model='CDIderm', param='CDIderm', :params='params', list='Csoil,EF,ED,SA,AF,ABSd,AT,BW', expression='(Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW)', heading='Dermal contact with contaminated soil Dose Calculation')
    formula(v-model='CDIwater', param='CDIwater', :params='params', list='Cwater,EF,ED,IRw,AT,BW', expression='(Cwater*0.001*EF*ED*IRw)/(AT*BW)', heading='Dermal contact with contaminated soil Dose Calculation')
    formula(v-model='CDIfish', param='CDIfish', :params='params', list='Cfish,EF,ED,IRfish,CFfish,AT,BW', expression='(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW)', heading='Fish Ingestion Dose')
    formula(v-model='CDIprod', param='CDIprod', :params='params', list='Cfish,EF,ED,IRfish,CFfish,AT,BW', expression='(Cp rod*EF*ED*IRP*0.000001*CFp rod)/(AT*BW)', heading='Produce Ingestion Dose')
    formula(v-model='CDIbeef', param='CDIbeef', :params='params', list='Cfish,EF,ED,IRfish,CFfish,AT,BW', expression='(Cbeef*EF*ED*IRbeef*0.000001*CFbeef)/(AT*BW)', heading='Beef Ingestion Dose')

    h3 Hazard Quotient/Index
    table
      hqparam(name='TVoral', units='mg/kg-day', v-model='params.TVoral', desc='toxicity value oral route')
      hqparam(name='TVinhal', units='mg/m3', v-model='params.TVinhal', desc='toxicity value inhalation route')

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
    return {
      params: {
        EF: { units: 'days/year', desc: 'exposure frequency' },
        ET: { units: 'days/year', desc: 'exposure frequency' },
        ED: { units: 'years', desc: 'exposure duration' },
        AT: { units: 'days', desc: 'averaging time (365 days*ED)' },
        BW: { units: 'kg', desc: 'body weight' },
        IRs: { units: 'mg/day', desc: 'ingestion rate soil' },
        IRw: { units: 'L/day', desc: 'intake rate of water' },
        IRfish: { units: 'mg/day', desc: 'intake rate of fish' },
        IRprod: { units: 'mg/day', desc: 'intake rate of produce' },
        IRbeef: { units: 'mg/day', desc: 'intake rate of beef' },
        Csoil: { default: 0.000774, units: 'mg/kg', desc: 'concentration in soil (dry weight)' },
        Cwater: { default: 0.000014, units: 'ug/L', desc: 'water concentration (total)' },
        Cfish: { default: 0.00000000108, units: 'mg/kg fresh weight', desc: 'fish tissue concentrations' },
        Cprod: { default: 0.0000000997, units: 'mg/kg fresh weight', desc: 'concentration in produce' },
        Cbeef: { default: 0.000000273, units: 'mg/kg fresh weight', desc: 'concentration in beef' },
        VFs: { default: 1960000, units: 'm3/kg', desc: 'volatilization factor' },
        PEFw: { default: 1360000000, units: 'm3/kg', desc: 'particulate emission factor' },
        ABSd: { default: 0.03, units: 'proportion', desc: 'dermal absorption' },
        RBA: { units: 'unitless', desc: 'relative bioavailability factor for soil' },
        CFfish: { default: 1, units: 'proportion', desc: 'contaminated fraction of fish' },
        CFprod: { default: 1, units: 'proportion', desc: 'contaminated fraction of produce' },
        CFbeef: { default: 1, units: 'proportion', desc: 'contaminated fraction of beef' },
        TVoral: { default: 0.0000000007, units: '', desc: '' },
        TVinhal: { default: 0.00000004, units: '', desc: '' }
      }
    }
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
