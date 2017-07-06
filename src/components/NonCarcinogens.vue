<template lang="pug">
  div
    button(type='button', data-toggle='modal', data-target='.modal') Set Parameter Values
    button(type='button', @click="collapse") Show/Hide Formulae

    values-table(:params='params', @update='update')

    formula(v-model='params.CDIsi.value', :params='params', param='CDIsi', expression='(Csoil*EF*ED*IRs*RBA*0.000001) / (AT*BW)') Accidental Soil Ingestion Dose
    formula(v-model='params.CDIinhal.value', :params='params', param='CDIinhal', expression='(Csoil*EF*ED*ET*((1/VFs)+(1/PEFw))/(AT))') Inhalation of Contaminated Particles Dose
    formula(v-model='params.CDIderm.value', :params='params', param='CDIderm', expression='(Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW)') Dermal contact with contaminated soil Dose Calculation
    formula(v-model='params.CDIwater.value', :params='params', param='CDIwater', expression='(Cwater*0.001*EF*ED*IRw)/(AT*BW)') Water Ingestion Dose Calculation
    formula(v-model='params.CDIfish.value', :params='params', param='CDIfish', expression='(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW)') Fish Ingestion Dose
    formula(v-model='params.CDIprod.value', :params='params', param='CDIprod', expression='(Cprod*EF*ED*IRprod*0.000001*CFprod)/(AT*BW)') Produce Ingestion Dose
    formula(v-model='params.CDIbeef.value', :params='params', param='CDIbeef', expression='(Cbeef*EF*ED*IRbeef*0.000001*CFbeef)/(AT*BW)') Beef Ingestion Dose

    h3 Hazard Quotient/Index
    table
      param-field(name='TVoral', :param='params.TVoral', v-model='params.TVoral.value', :value='params.TVoral.value', :disabled='true')
      param-field(name='TVinhal', :param='params.TVinhal', v-model='params.TVinhal.value', :value='params.TVinhal.value', :disabled='true')

    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', :params='params', v-model='params[r.symbol].value', :route='r', :value='params[r.symbol].value')
</template>

<script>
import $ from 'jquery'
import MathJax from 'MathJax'
import ParamField from './ParamField'
import ValuesTable from './ValuesTable'
import Formula from './Formula'
import ExposureRoute from './ExposureRoute'
import params from '../nc-params'

export default {
  data () {
    return {
      params: params
    }
  },
  computed: {
    exposureRoutes () {
      return [
        { dose: 'soil ingestion', symbol: 'CDIsi', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'particulate inhalation', symbol: 'CDIinhal', units: '(mg/kg-d)', divisor: 'TVinhal' },
        { dose: 'dermal contact', symbol: 'CDIderm', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'water ingestion', symbol: 'CDIwater', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'fish ingestion', symbol: 'CDIfish', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'produce ingestion', symbol: 'CDIprod', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'beef ingestion', symbol: 'CDIbeef', units: '(mg/kg-d)', divisor: 'TVoral' }
      ]
    }
  },
  methods: {
    collapse () {
      $('.collapse').collapse('toggle')
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
