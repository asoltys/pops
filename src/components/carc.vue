<template lang="pug">
  div
    button(type='button', data-toggle='modal', data-target='.modal') Set Parameter Values
    button(type='button', @click="collapse") Toggle Formulae

    tov(@update='setParams')
    formula(v-for='f in formulae', :value='params[f[0]].value', @input='params[f[0]].value = $event.target.value', :param='f[0]', :expression='f[1]') {{f[2]}}
    pre {{params.CDIsi}}

    h2 Hazard Quotient/Index
    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', v-model='params[r.symbol].value', :route='r')
    div Combined ILCR: {{sum}}
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import hqparam from './hqparam'
import tov from './tov'
import formula from './formula'
import ExposureRoute from './ExposureRoute'
import params from '../params'

export default {
  data () {
    return {
      params: params,
      formulae: [
        ['CDIsi', '(Csoil*IFsoil*RBA*0.000001) / (365*LT)', 'Accidental Soil Ingestion Dose'],
        ['CDIinhal', '(Csoil*EF*ED*ET*((1/(VF))+(1/(PEF)))/(365*LT*0.001))', 'Inhalation of Contaminated Particles Dose'],
        ['CDIderm', '(Csoil*IFderm*ABSd*0.000001)/(365*LT)', 'Dermal contact with contaminated soil Dose Calculation'],
        ['CDIwater', '(Cwater*0.001*(IFwater))/(365*LT)', 'Water Ingestion Dose Calculation'],
        ['CDIfish', '(Cfish*IFfish*0.000001*CFfish)/(365*LT)', 'Fish Ingestion Dose'],
        ['CDIprod', '(Cprod*IFprod*0.000001*CFprod)/(365*LT)', 'Produce Ingestion Dose'],
        ['CDIbeef', '(Cbeef*IFbeef*0.000001*CFbeef)/(365*LT)', 'Beef Ingestion Dose']
      ]
    }
  },
  computed: {
    exposureRoutes () {
      return [
        { dose: 'soil ingestion', symbol: 'CDIsi', units: '(mg/kg-d)', multiplier: 'SFO' },
        { dose: 'particulate inhalation', symbol: 'CDIinhal', units: '(mg/kg-d)', multiplier: 'IUR' },
        { dose: 'dermal contact', symbol: 'CDIderm', units: '(mg/kg-d)', multiplier: 'SFO' },
        { dose: 'water ingestion', symbol: 'CDIwater', units: '(mg/kg-d)', multiplier: 'SFO' },
        { dose: 'fish ingestion', symbol: 'CDIfish', units: '(mg/kg-d)', multiplier: 'SFO' },
        { dose: 'produce ingestion', symbol: 'CDIprod', units: '(mg/kg-d)', multiplier: 'SFO' },
        { dose: 'beef ingestion', symbol: 'CDIbeef', units: '(mg/kg-d)', multiplier: 'SFO' }
      ]
    },
    sum () {
      return Object.keys(this.params)
        .filter(w => { return w.match(/^ILCR/g) })
        .reduce((a, b) => { return a + parseFloat(this.params[b].value) }, 0)
        .toExponential(2)
    }
  },
  methods: {
    collapse () {
      $('.collapse').collapse('toggle')
    },
    popover (e) {
      this.$el.querySelector('#tov').modal()
    },
    setParams (values) {
      for (let v in values) {
        this.params[v].value = values[v]
      }
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
  components: { hqparam, tov, formula, ExposureRoute }
}
</script>
