<template lang="pug">
  .modal.fade#values
    .modal-dialog
      .modal-content
        .modal-header
          button.close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true') ×
          h4 Set Parameter Values
        .modal-body
          label(for='chemical') Chemical: &nbsp;
          select(v-model='chemical', @change='setChemical($event.target)')
            optgroup(v-for='g in Object.keys(chemicals)' :label='g')
              option(v-for='c in Object.keys(chemicals[g])' :value='chemicals[g][c]') {{c}}

          table.table
            tr
              th(v-for='t in Object.keys(chemical)', v-if='params[t]') 
                abbr(:title='params[t].desc') {{t}}
            tr
              td(v-for='t in Object.keys(chemical)', v-if='params[t]') {{chemical[t]}}

          table.table
            thead
              tr
                th(v-for='v in headers1') {{v}}
              tr
                th(v-for='v in headers2', @click='update($event)') 
                  | {{v}}
                  button.btn.btn-primary(v-if='v') choose
            tbody
              tr(v-for='param in Object.keys(params.data)')
                td
                td
                  abbr(:title='params[param].desc') {{param}}
                td(v-for='v,i in params.data[param]' @click='update($event)', :class='{ odd: i % 2, highlight: i == col }' @mouseover='hover') {{v}}
          
        .modal-footer
          button.btn.btn-danger(data-dismiss='modal') Cancel
</template>

<script>
  import chemicals from '../chemicals'
  import $ from 'jquery'

  export default {
    data () {
      return {
        headers1: ',,Residential,,Workers,,Recreator'.split(','),
        headers2: ',,Child,Adult,Outdoor,Construction,Child,Adult'.split(','),
        col: null,
        chemicals: chemicals,
        chemical: {},
        firstRun: true
      }
    },
    props: ['params'],
    methods: {
      hover (e) {
        this.col = e.target.cellIndex - 2
      },
      update (e) {
        if (this.firstRun || window.confirm('Overwrite existing parameter values?')) {
          let target = e.target
          if (!target.cellIndex) target = target.parentElement
          let values = {}
          for (let key in this.params.data) {
            values[key] = this.params.data[key][target.cellIndex - 2]
          }
          this.$emit('update', values)
          this.col = target.cellIndex - 2
          $('.modal').modal('hide')
          this.params.profile = `${this.headers1[target.cellIndex - target.cellIndex % 2]} - ${this.headers2[target.cellIndex]}`
        }

        this.firstRun = false
      },
      setChemical (target) {
        this.params.chemical = target.options[target.selectedIndex].value
        Object.keys(this.chemical).forEach(c => {
          if (this.params[c]) {
            this.params[c].value = this.chemical[c]
          }
        })
      }
    },
    mounted () {
      this.$el.querySelectorAll('td')[3].click()
      this.chemical = this.chemicals['Dioxins'][this.params.chemical]
    }
  }
</script>

<style lang="stylus" scoped>
  td:not(:first-child)
    cursor pointer

  .highlight
    background #eee

  abbr
    text-decoration none

  .btn-primary
    padding 1px 4px 1px 4px
    display block
</style>
  
