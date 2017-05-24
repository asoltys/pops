<template lang="pug">
  div
    h2 
      a(data-toggle='collapse' href='"#" + param') {{heading}}
        div.panel-collapse.collapse.in(:id='param')
    div `{{param}} = {{expression}} = `
    input.result(:value='value', @input='update(value)')
    table
      hqparam(v-for='(p,k) in subset', :key='param + p', :name='k', :units='p["units"]', :desc='p["desc"]', v-model='theseparams[k]')
    p {{theseparams.Csoil}}
</template>

<script>
  import hqparam from './hqparam'

  export default {
    props: ['param', 'params', 'expression', 'heading', 'value', 'list'],
    data () {
      return {
        theseparams: Object.keys(this.params).filter(key => this.list.split(',').includes(key))
          .reduce((obj, key) => {
            obj[key] = null
            return obj
          }, {})
      }
    },
    computed: {
      subset () {
        return Object.keys(this.params).filter(key => this.list.split(',').includes(key))
          .reduce((obj, key) => {
            obj[key] = this.params[key]
            return obj
          }, {})
      }
    },
    methods: {
      update () {
        this.$emit('input', this.value)
      }
    },
    mounted () {
      this.$set(this.theseparams, 'Csoil', null)
    },
    components: { hqparam }
  }
</script>
