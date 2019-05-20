import Vue from 'vue'
import axios from 'axios'

const repeaterAPIInstance = axios.create({
  baseURL: process.env.VUE_APP_REPEATER_BASE_URL
})

export default function setupAxios () {
  Vue.prototype.$repeaterAPI = repeaterAPIInstance
}

export {
  setupAxios,
  repeaterAPIInstance
}
