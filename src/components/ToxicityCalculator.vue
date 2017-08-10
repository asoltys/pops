<template lang='pug'>
  table
    thead
      tr
        th Chemical
        th Concentration
        th TEF
        th TEQ
    tbody(v-for='group in Object.keys(chemicals)')
      tr
        td(colspan='4') {{group}}
      tr(v-for='chemical in chemicals[group]')
        td {{chemical['Chemical']}}
        td {{chemical['Concentration']}}
        td {{chemical['TEF']}}
        td {{chemical['TEQ']}}
</template>

<script>
import chemicals from '../toxicities'
export default {
  data () {
    return {
      chemicals: chemicals
    }
  }
}
</script>
