// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import store from './store/index.js'
Vue.use(Mint)
Vue.prototype.$http = axios


Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
