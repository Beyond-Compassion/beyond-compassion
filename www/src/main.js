import Vue from 'vue'
import './plugins/alpha'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import setupAxios from './axios'

setupAxios()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
