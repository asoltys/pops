<template lang="pug">
  tr
    td {{route.dose}}
    td 
    td {{route.symbol}} {{route.units}}
    td
      input(ref='input' v-model='params[route.symbol].default', :disabled='true')
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
        return this.params[this.route.symbol].default / this.route.divisor
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
