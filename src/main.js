// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import axios from 'axios'
import store from './store'

Vue.use(Vuetify);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
