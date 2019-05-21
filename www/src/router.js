import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: () => import('@/views/Gallery')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/views/Services')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('@/views/Projects')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact')
    }
  ]
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development'
    }
  })
}

export default router
