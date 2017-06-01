<template lang="pug">
  #myModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='gridSystemModalLabel')
    .modal-dialog(role='document')
      .modal-content
        .modal-header
          button.close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true') ×
          h4.gridSystemModalLabel Modal title
        .modal-body
          table.table(@mouseout='col = null')
            thead
              tr
                th(v-for='v in headers1') {{v}}
              tr
                th(v-for='v in headers2') {{v}}
            tbody
              tr(v-for='row in Object.keys(data)')
                td
                td
                  strong {{row}}
                  td(v-for='v,i in data[row]' @click='update($event)', :class='{ odd: i % 2, highlight: i == col }' @mouseover='hover') {{v}}
</template>

<script>
  import params from '../params'
  export default {
    data () {
      return {
        headers1: ',,Residential,,Workers,,Recreator'.split(','),
        headers2: ',,Child,Adult,Outdoor,Construction,Child,Adult'.split(','),
        col: null,
        data: params.data
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
      }
    },
    mounted () {
      this.$el.querySelectorAll('td')[2].click()
    }
  }
</script>

<style lang="stylus" scoped>
  td:not(:first-child)
    cursor pointer

  .highlight
    background #eee
</style>
  
