<template lang="pug">
  tr
    td {{route.dose}}
    td 
    td {{route.symbol}} {{route.units}}
    td
      input(ref='input' v-model='params[route.symbol].value', :disabled='true')
    td {{output}}{{sub}}
    td
      input(:disabled='true', v-model='result')
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
      result () {
        let n = (this.route.divisor === undefined)
          ? this.params[this.route.multiplier].value
          : 1 / this.params[this.route.divisor].value

        let v = this.format(this.params[this.route.symbol].value * n)
        this.params[this.output + this.sub].value = v
        return v
      },
      output () {
        return (this.route.divisor === undefined) ? 'ILCR' : 'HQ'
      }
    },
    methods: {
      format (v) {
        if (!isNaN(v) && isFinite(v)) return v.toExponential(2)
        return ''
      }
    }
  }
</script>
