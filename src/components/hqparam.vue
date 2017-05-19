<template lang="pug">
  tr
    td {{ symbol }}#[sub(v-if='sub') {{ sub }}] = 
    td
      input(ref='input', type='number', v-bind:value='value', v-on:input='updateValue($event.target.value)', :disabled='disabled')
    td {{ units }}
    td.desc(v-if='desc') {{ desc }}
</template>

<script>
  export default {
    props: ['name', 'value', 'units', 'disabled', 'desc'],
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
    width 200px
    margin-right 5px
    padding-left 5px

  td.desc
    padding-left 20px
</style>
