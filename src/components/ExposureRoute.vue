<template lang="pug">
  tr
    td {{route.dose}}
    td 
    td {{route.symbol}} 
    td
      input(ref='input' v-model='params[route.symbol].value', :disabled='true') 
      | &nbsp; {{route.units}}
      td `{{expression}}`
    td
      input(:disabled='true', v-model='result')
</template>

<script>
  export default {
    props: ['route', 'value', 'params'],
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
      },
      expression () {
        if (this.route.divisor) {
          return `${this.output}${this.sub} = (${this.route.divisor}) / (${this.route.symbol}) =`.split('').join(' ')
        } else {
          return `${this.output}${this.sub} = ${this.route.multiplier} * ${this.route.symbol} =`.split('').join(' ')
        }
      }
    },
    methods: {
      format (v) {
        if (!isNaN(v) && isFinite(v)) {
          if (this.output === 'HQ') return v.toFixed(1)
          return v.toExponential(2)
        }
        return ''
      }
    }
  }
</script>
