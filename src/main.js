// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.__webpack_public_path__ = 'http://localhost:8080'
import Vue from 'vue'
import carc from './components/carc'
import ProblemFormulation from './components/ProblemFormulation'

window.Vue = Vue
window.carc = carc
window.ProblemFormulation = ProblemFormulation

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<carc/>',
  components: { carc }
})
*/
