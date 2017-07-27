<template lang="pug">
  div
    button(type='button', data-toggle='modal', data-target='#values') Set Parameter Values
    button(type='button', @click="collapse") Show/Hide Formulae

    values-table(:params='params', @update='setParams')

    formula(v-model='params.CDIsi.value', :params='params', param='CDIsi', expression='(Csoil*IFsoil*RBA*0.000001) / (365*LT)') Accidental Soil Ingestion Dose
    formula(v-model='params.CDIinhal.value', :params='params', param='CDIinhal', expression='(Csoil*EF*ED*ET*((1/(VF))+(1/(PEF)))/(365*LT*0.001))') Inhalation of Contaminated Particles Dose
    formula(v-model='params.CDIderm.value', :params='params', param='CDIderm', expression='(Csoil*IFderm*ABSd*0.000001)/(365*LT)') Dermal contact with contaminated soil Dose Calculation
    formula(v-model='params.CDIwater.value', :params='params', param='CDIwater', expression='(Cwater*0.001*(IFwater))/(365*LT)') Water Ingestion Dose Calculation
    formula(v-model='params.CDIfish.value', :params='params', param='CDIfish', expression='(Cfish*IFfish*0.000001*CFfish)/(365*LT)') Fish Ingestion Dose
    formula(v-model='params.CDIprod.value', :params='params', param='CDIprod', expression='(Cprod*IFprod*0.000001*CFprod)/(365*LT)') Produce Ingestion Dose
    formula(v-model='params.CDIbeef.value', :params='params', param='CDIbeef', expression='(Cbeef*IFbeef*0.000001*CFbeef)/(365*LT)') Beef Ingestion Dose

    h2 Hazard Quotient/Index
    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', :params='params', v-model='params[r.symbol].value', :route='r')

    h2 Combined ILCR
      .total {{sum}}
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import ParamField from './ParamField'
import ValuesTable from './ValuesTable'
import Formula from './Formula'
import ExposureRoute from './ExposureRoute'
import params from '../carc-params'

export default {
  data () {
    return {
      params: params
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
      this.$el.querySelector('#ValuesTable').modal()
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
  components: { ParamField, ValuesTable, Formula, ExposureRoute }
}
</script>

<style scoped lang="stylus">
  .total
    font-size 36px
    color black
</style>
