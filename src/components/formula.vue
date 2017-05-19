<template lang="pug">
  div
    h2 
      a(data-toggle='collapse' href='"#" + param') {{heading}}
        div.panel-collapse.collapse.in(:id='param')
    div `{{param}} = {{expression}} = `
    input.result(:value='value', @input='update(value)')
    table
      hqparam(v-for='p in subset', :key='param + p', :name='Object.keys(p)[0]', :units='p[Object.keys(p)[0]]["units"]', :desc='p[Object.keys(p)[0]]["desc"]', v-model='this[p]')
</template>

<script>
  import hqparam from './hqparam'
  export default {
    props: ['param', 'list', 'params', 'expression', 'heading', 'value'],
    data () {
      let obj = {}
      for (let p of this.list.split(',')) {
        console.log(p)
        obj[p] = null
      }
      return obj
    },
    methods: {
      update () {
        this.$emit('input', this.value)
      }
    },
    computed: {
      subset () {
        const _this = this
        let r = this.list.split(',').map(function (p) {
          let o = {}
          o[p] = _this.params[p]
          return o
        })
        return r
      }
    },
    components: { hqparam }
  }
</script>
