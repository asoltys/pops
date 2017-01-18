// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app'
import topnav from './components/topnav'

import home from './components/home'
import about from './components/about'
import prioritization from './components/prioritization'
import sampling from './components/sampling'
import hhra from './components/hhra'
import risk from './components/risk'

const routes = [
  { path: '/', component: home },
  { path: '/home', component: home },
  { path: '/about', component: about },
  { path: '/prioritization', component: prioritization },
  { path: '/sampling', component: sampling },
  { path: '/hhra', component: hhra },
  { path: '/risk', component: risk }
]

const router = new VueRouter({
  routes // short for routes: routes
})

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  components: { app, topnav },
  router: router
})
