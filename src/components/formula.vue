<template lang="pug">
  div
    h2 
      a(data-toggle='collapse' href='"#" + param') {{heading}}
        div.panel-collapse.collapse.in(:id='param')
    div `{{param.split('').join(' ' )}} = {{expression}} = `
    input.result(ref='input', :value='result', @input='update($event.target.value)')
    table
      hqparam(v-for='(p,k) in subset()', :key='param + p', :name='k', :units='p["units"]', :desc='p["desc"]', :value='p["default"]', v-model='theseparams[k]')
</template>

<script>
  import hqparam from './hqparam'
  import math from 'mathjs'
  
  export default {
    props: ['param', 'params', 'expression', 'heading', 'value'],
    data () {
      return { theseparams: this.updateParams() }
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
        this.$emit('input', value)
      },
      subset () {
        let node = math.parse(this.expression, this)

        let list = node.filter(function (node) {
          return node.isSymbolNode
        }).map(x => x.name)

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
          obj[k] = this.subset()[k].default || ''
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
      }
    },
    components: { hqparam }
  }
</script>
