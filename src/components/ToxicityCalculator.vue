<template lang='pug'>
  .toxic
    button.btn.btn-success(@click='reset') Reset
    table.table.table-striped
      thead
        tr
          th
          th Chemical
          th Concentration
          th TEF
          th TEQ
      tbody(v-for='group in groups')
        tr
          td
          td(colspan='4') {{group}}
        tr(v-for='(chemical, i) in chemicals[group]')
          td
            button.btn.btn-danger(@click='chemicals[group].splice(i, 1) && save()') x
          td {{chemical['Chemical']}}
          td
            input(v-model='chemical["Concentration"]', @input='save')
          td {{chemical['TEF']}}
          td {{Math.round(chemical['TEF'] * chemical['Concentration'] * 1000000) / 1000000}}
      tfoot
        tr
          td(colspan='4') SUM TEQ
          td {{total}}
</template>

<script>
import chemicals from '../toxicities'
export default {
  data () {
    return {
      chemicals: chemicals,
      original: {},
      total: 0
    }
  },
  computed: {
    groups () {
      return Object.keys(this.chemicals)
    }
  },
  watch: {
    chemicals: {
      handler (val) {
        this.total = 0
        this.groups.forEach(g => val[g].map(c => { this.total += c['TEQ'] }))
        this.total = Math.round(this.total * 1000000) / 1000000
      },
      deep: true
    }
  },
  methods: {
    save () {
      window.localStorage.setItem('chemicals', JSON.stringify(this.chemicals))
    },
    reset () {
      let originalJson = JSON.stringify(this.original)
      this.chemicals = JSON.parse(originalJson)
      window.localStorage.setItem('chemicals', originalJson)
    }
  },
  mounted () {
    this.original = JSON.parse(JSON.stringify(this.chemicals))
    let savedChemicals = JSON.parse(window.localStorage.getItem('chemicals'))
    if (savedChemicals) {
      this.chemicals = savedChemicals
    }
  }
}
</script>
