// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Carcinogens from './components/Carcinogens'
import NonCarcinogens from './components/NonCarcinogens'
import ProblemFormulation from './components/ProblemFormulation'

window.Vue = Vue
window.Carcinogens = Carcinogens
window.NonCarcinogens = NonCarcinogens
window.ProblemFormulation = ProblemFormulation

/* eslint-disable no-new */

new Vue({
  el: '#app',
  template: '<NonCarcinogens/>',
  components: { NonCarcinogens }
})
