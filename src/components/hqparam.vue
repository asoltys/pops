<template lang="pug">
  tr
    td {{ symbol }}#[sub(v-if='sub') {{ sub }}] = 
    td
      input(type='number', v-model='internal')
    td {{ units }}
</template>

<script>
  export default {
    props: ['name', 'units'],
    data () {
      return {
        internal: ''
      }
    },
    computed: {
      symbol: function () {
        return this.name.match(/[A-Z]+|[a-z]+/g)[0]
      },
      sub: function () {
        return this.name.match(/[A-Z]+|[a-z]+/g)[1]
      }
    },
    watch: {
      'internal' () {
        this.$emit('input', this.internal)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  input[type=number]
    width 66px
    margin-right 5px
    padding-left 5px
</style>
