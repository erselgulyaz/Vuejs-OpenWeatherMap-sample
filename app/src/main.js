import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App.vue'
import Main from './components/Main.vue'
import SingleCityFiveDay from './components/SingleCityFiveDay.vue'



Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(axios);

const store = new Vuex.Store({
  state: {
    appId: "e063e3cd798914cdf4843097a8fc52ad",
    cities: [
      {
        "id" : "323786",
        "name" : "Ankara",
        "countryCode" : "TR"
      },
      {
        "id" : "6539761",
        "name" : "Rome",
        "countryCode" : "IT"
      },
      {
        "id" : "3128760",
        "name" : "Barcelona",
        "countryCode" : "ES"
      },
      {
        "id" : "4298960",
        "name" : "London",
        "countryCode" : "US"
      },
      {
        "id" : "2867714",
        "name" : "Munich",
        "countryCode" : "DE"
      },
    ],
  },
  getters: {
    getAppId : state => {
      return state.appId
    },
    getCities: state => {
      return state.cities
    }
  },
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Main},
    {path: '/5GunlukTahmin/:name/:country', component: SingleCityFiveDay},
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
