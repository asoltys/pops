<template lang="pug">
  table.table.table-hover(@mouseout='col = null')
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
  export default {
    data () {
      return {
        headers1: ',,Residential,,Workers,,Recreator'.split(','),
        headers2: ',,Child,Adult,Outdoor,Construction,Child,Adult'.split(','),
        col: null,
        data: {
          EF: [350, 350, 225, 250, 75, 75],
          ED: [6, 26, 25, 1, 6, 26],
          ET: [1, 1, 0.33, 0.33, 0.0416, 0.0416],
          AT: [2190, 9490, 9125, 350, 2190, 9490],
          BW: [15, 80, 80, 80, 15, 80],
          IRs: [200, 100, 100, 330, 200, 100],
          SA: [2337, 6032, 3527, 3527, 2337, 6032],
          AF: [0.2, 0.07, 0.12, 0.3, 0.2, 0.07],
          IRw: [0.78, 2.5, null, null, 0.12, 0.071],
          IRfish: [19500, 54000],
          IRprod: [109800, 302500],
          IRbeef: [40100, 178000]

        }
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
  
