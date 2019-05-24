import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'

// NOTE: pallete 2 has a yellow secondary and blue primary
// NOTE: pallete 13 is reversed of 2

// MIKE: save these colors somewhere else and import them here - that way u can
// refer to them in different places
Vue.use(Vuetify, {
  theme: {
    // primary: '#F7C948',

    // // MIKE: replace above with:
    // primaryLight: '#F7C948',
    // primaryDark: '#40C3F7',

    primary: '#2680C2',

    // MIKE: replace above with:
    primaryLightest: '#62B0E8',
    primaryLighter: '#4098D7',
    primaryLight: '#2680C2',
    primaryDark: '#186FAF', // #186FAF = rgba(24, 111, 175, 1)

    secondary: '#243B53', // NOTE: used as a grey right now - rename to grey and replace with new greys

    greyDark: '#243B53',
    greyLessDark: '#9FB3C8',
    greyLight: '#829AB1',
    greyLightest: '#F0F4F8',

    // accent: '#40C3F7',
    // accent: '#CB6E17',
    accent: '#F0B429',

    // accentLight: '#DE911D', // #DE911D = rgba(222, 145, 29, 1)
    accentLight: '#F0B429', // #F0B429 = rgb(240, 180, 41, 1)
    accentLighter: '#F7C948',
    accentLightest: '#FADB5F',
    // accentDark: '#CB6E17', // #CB6E17 = rgba(203, 110, 23, 1)
    accentDark: '#F0B429',
    accentDarker: '#B44D12', // #B44D12 = rgba(180, 77, 18, 1)

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
