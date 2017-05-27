<template lang="pug">
  tr
    td {{ symbol }}#[sub(v-if='sub') {{ sub }}] = 
    td
      input(ref='input', type='number', :value='param.value', @input='updateValue($event.target.value)', :disabled='disabled')
    td {{ param.units }}
    td.desc(v-if='param.desc') {{ param.desc }}
</template>

<script>
  export default {
    props: ['disabled', 'param', 'name'],
    computed: {
      symbol () {
        return this.name.match(/[A-Z]+|[a-z]+/g)[0]
      },
      sub () {
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
