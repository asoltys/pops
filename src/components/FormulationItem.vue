<template lang="pug">
  tr
    td {{item}}
    td
      select(v-model='response', @change='save')
        option Yes
        option No
    td
      textarea(v-model='explanation', @input='save')
</template>

<script>
  export default {
    props: ['item'],
    data () {
      return {
        response: '',
        explanation: ''
      }
    },
    methods: {
      save () {
        window.localStorage.setItem(this.item, JSON.stringify(this.$data))
      }
    },
    mounted () {
      let obj = JSON.parse(window.localStorage.getItem(this.item))
      if (obj) {
        this.response = obj.response
        this.explanation = obj.explanation
      }
    }
  }
</script>

