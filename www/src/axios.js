import Vue from 'vue'
import axios from 'axios'

export default function setupAxios () {
  const repeaterAPIInstance = axios.create({
    baseURL: process.env.VUE_APP_REPEATER_BASE_URL
  })

  Vue.prototype.$repeaterAPI = repeaterAPIInstance
}
