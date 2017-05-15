<template lang="pug">
  tr
    td {{ symbol }}#[sub(v-if='sub') {{ sub }}] = 
    td
      input(ref='input', type='number', v-bind:value='value', v-on:input='updateValue($event.target.value)')
    td {{ units }}
</template>

<script>
  export default {
    props: ['name', 'value', 'units'],
    computed: {
      symbol: function () {
        return this.name.match(/[A-Z]+|[a-z]+/g)[0]
      },
      sub: function () {
        return this.name.match(/[A-Z]+|[a-z]+/g)[1]
      }
    },
    methods: {
      updateValue (value) {
        this.$refs.input.value = value
        this.$emit('input', value)
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
