
<template lang="pug">
  table
    thead
      tr
        th Residential
        th  
        th Workers
        th  
        th Recreator
        th  
    tbody
      tr
        td Child
        td Adult
        td Outdoor
        td Construction
        td Child
        td Adult
      tr(v-for='row in Object.keys(data)')
        td(v-for='v in data[row]' @click='update($event)') {{v}}

</template>

<script>
  export default {
    data () {
      return {
        data: {
          EF: [350, 350, 225, 250, 75, 75],
          ED: [6, 26, 25, 1, 6, 26],
          ET: [1, 1, 0.333333333333333, 0.333333333333333, 0.041666666666667, 0.041666666666667],
          AT: [2190, 9490, 9125, 350, 2190, 9490],
          BW: [15, 80, 80, 80, 15, 80],
          IRs: [200, 100, 100, 330, 200, 100],
          SA: [2337, 6032, 3527, 3527, 2337, 6032],
          AF: [0.2, 0.07, 0.12, 0.3, 0.2, 0.07],
          IRw: [0.78, 2.5, null, null, 0.12, 0.071]
        }
      }
    },
    methods: {
      update (e) {
        let values = {}
        for (let key in this.data) {
          values[key] = this.data[key][e.target.cellIndex]
        }
        console.log(values)
        this.$emit('update', values)
      }
    },
    mounted () {
      this.$el.querySelectorAll('td').forEach(td => td.addEventListener('click', this.update))
    }
  }
</script>

<style lang="stylus">
  .child
    background red
</stylus>
  
