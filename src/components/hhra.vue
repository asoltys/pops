<template lang="pug">
  div
    tov(@update='update')

    formula(v-model='params.CDIsi.value', param='CDIsi', expression='(Csoil*EF*ED*IRs*RBA*0.000001) / (AT*BW)') Accidental Soil Ingestion Dose
    formula(v-model='params.CDIinhal.value', param='CDIinhal', expression='(Csoil*EF*ED*ET*((1/VFs)+(1/PEFw))/(AT))') Inhalation of Contaminated Particles Dose
    formula(v-model='params.CDIderm.value', param='CDIderm', expression='(Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW)') Dermal contact with contaminated soil Dose Calculation
    formula(v-model='params.CDIwater.value', param='CDIwater', expression='(Cwater*0.001*EF*ED*IRw)/(AT*BW)') Water Ingestion Dose Calculation
    formula(v-model='params.CDIfish.value', param='CDIfish', expression='(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW)') Fish Ingestion Dose
    formula(v-model='params.CDIprod.value', param='CDIprod', expression='(Cprod*EF*ED*IRprod*0.000001*CFprod)/(AT*BW)') Produce Ingestion Dose
    formula(v-model='params.CDIbeef.value', param='CDIbeef', expression='(Cbeef*EF*ED*IRbeef*0.000001*CFbeef)/(AT*BW)') Beef Ingestion Dose

    h3 Hazard Quotient/Index
    table
      hqparam(name='TVoral', :param='params.TVoral', v-model='params.TVoral.value', :value='params.TVoral.value', :disabled='true')
      hqparam(name='TVinhal', :param='params.TVinhal', v-model='params.TVinhal.value', :value='params.TVinhal.value', :disabled='true')

    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', v-model='params[r.symbol].value', :route='r', :value='params[r.symbol].value')
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
        { dose: 'soil ingestion', symbol: 'CDIsi', units: '(mg/kg-d)', divisor: params.TVoral.value },
        { dose: 'particulate inhalation', symbol: 'CDIinhal', units: '(mg/kg-d)', divisor: params.TVinhal.value },
        { dose: 'dermal contact', symbol: 'CDIderm', units: '(mg/kg-d)', divisor: params.TVoral.value },
        { dose: 'water ingestion', symbol: 'CDIwater', units: '(mg/kg-d)', divisor: params.TVoral.value },
        { dose: 'fish ingestion', symbol: 'CDIfish', units: '(mg/kg-d)', divisor: params.TVoral.value },
        { dose: 'produce ingestion', symbol: 'CDIprod', units: '(mg/kg-d)', divisor: params.TVoral.value },
        { dose: 'beef ingestion', symbol: 'CDIbeef', units: '(mg/kg-d)', divisor: params.TVoral.value }
      ]
    }
  },
  methods: {
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
      $('.collapse').collapse('hide')
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
