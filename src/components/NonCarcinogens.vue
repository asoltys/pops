<template lang="pug">
  div
    button.btn.btn-primary(type='button', data-toggle='modal', data-target='#values') Set Parameter Values
    button.btn.btn-danger(type='button', @click="clear") Clear Parameter Values
    button.btn(type='button', @click="collapse") Show/Hide Formulae

    h2 
      span Receptor Profile: {{params.profile}}
      br
      span Chemical: {{params.chemicalName}}

    values-table(:params='params', @update='setParams')

    formula(v-model='params.CDIsi.value', :params='params', param='CDIsi', expression='(Csoil*EF*ED*IRs*RBA*0.000001) / (AT*BW)') Accidental Soil Ingestion Dose
    formula(v-model='params.CDIinhal.value', :params='params', param='CDIinhal', expression='(Csoil*EF*ED*ET*((1/(VF))+(1/(PEF)))/(AT))') Inhalation of Contaminated Particles Dose
    formula(v-model='params.CDIderm.value', :params='params', param='CDIderm', expression='(Csoil*EF*ED*SA*AF*ABSd*0.000001)/(AT*BW)') Dermal contact with contaminated soil Dose Calculation
    formula(v-model='params.CDIwater.value', :params='params', param='CDIwater', expression='(Cwater*0.001*EF*ED*IRwater)/(AT*BW)') Water Ingestion Dose Calculation
    formula(v-model='params.CDIfish.value', :params='params', param='CDIfish', expression='(Cfish*EF*ED*IRfish*0.000001*CFfish)/(AT*BW)') Fish Ingestion Dose
    formula(v-model='params.CDIprod.value', :params='params', param='CDIprod', expression='(Cprod*EF*ED*IRprod*0.000001*CFprod)/(AT*BW)') Produce Ingestion Dose
    formula(v-model='params.CDIpltry.value', :params='params', param='CDIpltry', expression='(Cpltry*EF*ED*IRpltry*0.000001*CFpltry)/(AT*BW)') Poultry Ingestion Dose

    h3 Hazard Quotient/Index
    table
      param-field(name='TVoral', :param='params.TVoral', v-model='params.TVoral.value', :value='params.TVoral.value')
      param-field(name='TVinhal', :param='params.TVinhal', v-model='params.TVinhal.value', :value='params.TVinhal.value')

    table.table
      tr
        th(v-for='v in "Exposure Route,Dose,,Hazard Quotient,".split(",")')
      exposure-route(v-for='r in exposureRoutes', :params='params', v-model='params[r.symbol].value', :route='r')

    h2 `HI = sum HQs = ` {{sum}}
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
        { dose: 'particulate inhalation', symbol: 'CDIinhal', units: '(mg/m3)', divisor: 'TVinhal' },
        { dose: 'dermal contact', symbol: 'CDIderm', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'water ingestion', symbol: 'CDIwater', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'fish ingestion', symbol: 'CDIfish', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'produce ingestion', symbol: 'CDIprod', units: '(mg/kg-d)', divisor: 'TVoral' },
        { dose: 'poultry ingestion', symbol: 'CDIpltry', units: '(mg/kg-d)', divisor: 'TVoral' }
      ]
    },
    sum () {
      return Object.keys(this.params)
        .filter(w => { return w.match(/^HQ/g) })
        .reduce((a, b) => { return a + parseFloat(this.params[b].value) }, 0)
        .toFixed(1)
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
    },
    clear () {
      if (window.confirm('Are you sure you want to clear all parameter values?')) {
        Object.keys(this.params).forEach(k => {
          if (this.params[k].value) {
            this.params[k].value = ''
          }
        })
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
  components: { ParamField, ValuesTable, Formula, ExposureRoute }
}
</script>

<style scoped lang="stylus">
  .total
    font-size 36px
    color black
</style>
