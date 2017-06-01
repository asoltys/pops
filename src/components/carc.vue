<template lang="pug">
  div
    button(type='button', data-toggle='modal', data-target='#myModal') Launch modal
    tov(@update='update')

    formula(v-model='params.CDIsi.value', param='CDIsi', expression='(Csoil*IFsoil*RBA*0.000001) / (365*LT)') Accidental Soil Ingestion Dose
    formula(v-model='params.CDIinhal.value', param='CDIinhal', expression='(Csoil*EF*ED*ET*((1/(VFs))+(1/(PEFw)))/(365*LT*0.001))') Inhalation of Contaminated Particles Dose
    formula(v-model='params.CDIderm.value', param='CDIderm', expression='(Csoil*IFderm*ABSd*0.000001)/(365*LT)') Dermal contact with contaminated soil Dose Calculation
    formula(v-model='params.CDIwater.value', param='CDIwater', expression='(Cwater*0.001*(IFwater))/(365*LT)') Water Ingestion Dose Calculation
    formula(v-model='params.CDIfish.value', param='CDIfish', expression='(Cfish*IFfish*0.000001*CFfish)/(365*LT)') Fish Ingestion Dose
    formula(v-model='params.CDIprod.value', param='CDIprod', expression='(Cprod*IFprod*0.000001*CFprod)/(365*LT)') Produce Ingestion Dose
    formula(v-model='params.CDIbeef.value', param='CDIbeef', expression='(Cbeef*IFbeef*0.000001*CFbeef)/(365*LT)') Beef Ingestion Dose

    h3 Hazard Quotient/Index
    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', v-model='params[r.symbol].value', :route='r', :value='params[r.symbol].value')
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
      let s =
        parseFloat(this.params.ILCRsi.value) +
        parseFloat(this.params.ILCRinhal.value) +
        parseFloat(this.params.ILCRderm.value) +
        parseFloat(this.params.ILCRwater.value) +
        parseFloat(this.params.ILCRfish.value) +
        parseFloat(this.params.ILCRprod.value) +
        parseFloat(this.params.ILCRbeef.value)
      return s.toExponential(2)
    }
  },
  methods: {
    popover (e) {
      this.$el.querySelector('#tov').modal()
    },
    update (values) {
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
      // $('.collapse').collapse('hide')
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
