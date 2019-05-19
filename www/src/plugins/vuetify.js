import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

// NOTE: pallete 2 has a yellow secondary and blue primary
// NOTE: pallete 13 is reversed of 2

Vue.use(Vuetify, {
  theme: {
    primary: '#F7C948',

    // MIKE: replace above with:
    primaryLight: '#F7C948',
    primaryDark: '#F0B429',

    secondary: '#515151', // NOTE: used as a grey right now - rename to grey and replace with new greys

    accent: '#40C3F7',

    // MIKE: replace above with:
    // accentLight: '#40C3F7',
    // accentDark: '#2BB0ED',

    error: '#E12D39',

    info: '#2196F3', // MIKE: remove

    success: '#3EBD93',

    warning: '#FFC107' // MIKE: remove
  },
  components: {
    VLayout
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})
