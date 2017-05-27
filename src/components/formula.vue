<template lang="pug">
  div
    h2 
      a(data-toggle='collapse', :href='"#" + param')
        slot
    div.panel-collapse.collapse.in(:id='param')
      div `{{param.split('').join(' ')}} = {{expression.split('').join(' ')}} = `
      input.result(ref='input', :value='result', @input='update($event.target.value)')
      table
        hqparam(v-for='(p,k) in subset()', :key='param + k', :name='k', :param='p', v-model='theseparams[k]')
    pre {{result}}
    pre {{theseparams}}
    pre {{subset()}}
</template>

<script>
  import hqparam from './hqparam'
  import math from 'mathjs'
  import params from '../params'
  
  export default {
    props: ['param', 'expression', 'heading', 'value'],
    data () {
      return {
        params: params,
        theseparams: this.updateParams()
      }
    },
    computed: {
      result () {
        let v = math.eval(this.expression, this.theseparams)
        if (!isNaN(v) && isFinite(v)) return Math.round(v * 100000000000000) / 100000000000000
        return ''
      }
    },
    methods: {
      update (value) {
        this.params[this.param].value = value
        this.$emit('input', value)
      },
      subset () {
        let list = math.parse(this.expression, this)
          .filter(node => { return node.isSymbolNode })
          .map(x => x.name)

        return Object.keys(params)
          .filter(key => list.includes(key))
          .reduce((obj, key) => {
            obj[key] = params[key]
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
      result: {
        handler (v) {
          this.$refs.input.value = v
          this.update(v)
        },
        deep: true
      },
      params: {
        handler (v) {
          this.theseparams = this.updateParams()
        },
        deep: true
      }
    },
    components: { hqparam }
  }
</script>
