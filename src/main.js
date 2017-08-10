// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Carcinogens from './components/Carcinogens'
import NonCarcinogens from './components/NonCarcinogens'
import ProblemFormulation from './components/ProblemFormulation'
import ToxicityCalculator from './components/ToxicityCalculator'

window.Vue = Vue
window.Carcinogens = Carcinogens
window.NonCarcinogens = NonCarcinogens
window.ProblemFormulation = ProblemFormulation
window.ToxicityCalculator = ToxicityCalculator

/* eslint-disable no-new */
new Vue({
  el: '#carc',
  template: '<Carcinogens/>',
  components: { Carcinogens }
})

new Vue({
  el: '#non-carc',
  template: '<NonCarcinogens/>',
  components: { NonCarcinogens }
})

new Vue({
  el: '#problem-formulation',
  template: '<ProblemFormulation/>',
  components: { ProblemFormulation }
})

new Vue({
  el: '#toxicity-calculator',
  template: '<ToxicityCalculator/>',
  components: { ToxicityCalculator }
})
