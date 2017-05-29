<template lang="pug">
  tr
    td {{route.dose}}
    td 
    td {{route.symbol}} {{route.units}}
    td
      input(ref='input' v-model='params[route.symbol].value', :disabled='true')
    td HQ{{sub}}
    td
      input(:disabled='true', v-model='HQ')
</template>

<script>
  import params from '../params'

  export default {
    data () {
      return {
        params: params
      }
    },
    props: ['route', 'value'],
    computed: {
      sub () {
        return this.route.symbol.match(/[A-Z]+|[a-z]+/g)[1]
      },
      HQ () {
        return this.format(this.params[this.route.symbol].value / this.route.divisor)
      }
    },
    methods: {
      format (v) {
        if (!isNaN(v) && isFinite(v)) return Math.round(v * 10) / 10
        return ''
      }
    }
  }
</script>
