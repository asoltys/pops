<template lang="pug">
  tr
    td {{route.dose}}
    td 
    td {{route.symbol}} {{route.units}}
    td
      input(ref='input' v-model='CD', :value='value', @input='updateValue($event.target.value)')
    td HQ{{sub}}
    td
      input(:disabled='true', v-model='HQ')
</template>

<script>
  export default {
    data () {
      return {
        CD: this.value
      }
    },
    props: ['route', 'value'],
    computed: {
      sub () {
        return this.route.symbol.match(/[A-Z]+|[a-z]+/g)[1]
      },
      HQ () {
        return this.value / this.route.divisor
      }
    },
    methods: {
      format (v) {
        if (!isNaN(v) && isFinite(v)) return Math.round(v * 10) / 10
        return ''
      },
      updateValue (value) {
        this.CD = value
        this.HQ = this.format(this.CD / this.route.divisor)
        this.$refs.input.value = value
        this.$emit('input', value)
      }
    }
  }
</script>
