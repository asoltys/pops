<template lang="pug">
  table.table
    tr
      th
      th Potential
      th Explanation
    formulation-item(v-for='i in items', :item='i')
</template>

<script>
  import FormulationItem from './FormulationItem'
  export default {
    name: 'problem-group',
    props: ['items'],
    components: { FormulationItem }
  }
</script>

<style lang="stylus" scoped>

</style>
