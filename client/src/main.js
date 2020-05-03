import Vue from 'vue'
import App from './App.vue'

// import API service
import StateAPIService from '@/services/stateService'

import BootstrapVue from 'bootstrap-vue'

//import vue-router library and the app's routes
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter) //use VueRouter


//config bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService


//Add Leaflet's CSS
import "leaflet/dist/leaflet.css"


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router /* include the routes */
}).$mount('#app')
