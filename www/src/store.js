import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'
import { repeaterAPIInstance } from './axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    events: null,
    loading: false
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer'),
    setEvents: set('events'),
    toggleLoading: toggle('loading')
  },
  actions: {
    getEvents ({ commit }) {
      commit('toggleLoading')
      repeaterAPIInstance.get('').then(({ data }) => {
        commit('toggleLoading')
        commit('setEvents', data)
      })
    }
  }
})
