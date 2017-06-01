<template lang="pug">
  #myModal.modal.fade(tabindex='-1', role='dialog')
    .modal-dialog(role='document')
      .modal-content
        .modal-header
          button.close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true') ×
          h4 Set Parameter Values
        .modal-body
          label(for='chemical') Chemical: &nbsp;
          select(v-model='chemical', @change='setChemical')
            optgroup(v-for='g in Object.keys(chemicals)' :label='g')
              option(v-for='c in Object.keys(chemicals[g])' :value='chemicals[g][c]') {{c}}
          table.table
            tr
              th(v-for='t in Object.keys(chemical)') 
                abbr(:title='params[t].desc') {{t}}
            tr
              td(v-for='t in Object.keys(chemical)') {{chemical[t]}}
          table.table
            thead
              tr
                th(v-for='v in headers1') {{v}}
              tr
                th(v-for='v in headers2') {{v}}
            tbody
              tr(v-for='param in Object.keys(data)')
                td
                td
                  abbr(:title='params[param].desc') {{param}}
                td(v-for='v,i in data[param]' @click='update($event)', :class='{ odd: i % 2, highlight: i == col }' @mouseover='hover') {{v}}
</template>

<script>
  import params from '../params'
  import chemicals from '../chemicals'
  import $ from 'jquery'

  export default {
    data () {
      return {
        headers1: ',,Residential,,Workers,,Recreator'.split(','),
        headers2: ',,Child,Adult,Outdoor,Construction,Child,Adult'.split(','),
        col: null,
        params: params,
        data: params.data,
        chemicals: chemicals,
        chemical: {}
      }
    },
    methods: {
      hover (e) {
        this.col = e.target.cellIndex - 2
      },
      update (e) {
        let values = {}
        for (let key in this.data) {
          values[key] = this.data[key][e.target.cellIndex - 2]
        }
        this.$emit('update', values)
        this.col = e.target.cellIndex - 2
        $('#myModal').modal('hide')
      },
      setChemical () {
        Object.keys(this.chemical).forEach(c => {
          if (this.params[c]) {
            this.params[c].value = this.chemical[c]
          }
        })
      }
    },
    mounted () {
      this.$el.querySelectorAll('td')[2].click()
      this.chemical = this.chemicals['Dioxins']['TCDD, 2,3,7,8-']
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
</style>
  
