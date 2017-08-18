<template lang="pug">
  div
    h2 
      a(data-toggle='collapse', :href='"#" + param')
        slot
    div.panel-collapse.collapse.in(:id='param')
      div `{{param.split('').join(' ')}} = {{expression.split('').join(' ')}} = `
      span.result
        input(ref='input', :value='result', @input='update($event.target.value)', :disabled='true')
        span.units {{params[param].units}}
      table
        param-field(v-for='(p,k) in subset()', :ref='k', :name='k', :param='p', v-model='localparams[k]')
</template>

<script>
  import ParamField from './ParamField'
  import math from 'mathjs'
  
  export default {
    props: ['param', 'params', 'expression', 'heading', 'value'],
    data () {
      return {
        localparams: this.updateParams()
      }
    },
    computed: {
      result () {
        let v = math.eval(this.expression, this.localparams)
        if (!isNaN(v) && isFinite(v)) {
          return v.toExponential(2)
        }
        return ''
      },
      compound () {
        return [this.params.EF.value, this.params.ET.value, this.params.ED.value, this.params.LT.value].join()
      }
    },
    methods: {
      update (value) {
        this.$emit('input', value)
      },
      subset () {
        let list = math.parse(this.expression, this)
          .filter(node => { return node.isSymbolNode })
          .map(x => x.name)

        return Object.keys(this.params)
          .filter(key => list.includes(key))
          .reduce((obj, key) => {
            obj[key] = this.params[key]
            return obj
          }, {})
      },
      updateParams () {
        let obj = {}
        Object.keys(this.subset()).forEach(k => {
          obj[k] = this.subset()[k].value || ''
        })
        return obj
      }
    },
    watch: {
      result (v) {
        this.$refs.input.value = v
        this.update(v)
      },
      compound () {
        this.localparams = this.updateParams()
        Object.keys(this.localparams).forEach(p => {
          this.$refs[p][0].$refs.input.value = this.localparams[p]
        })
      }
    },
    components: { ParamField }
  }
</script>

<style lang="stylus">
  .units
    margin-left 10px
</style>
