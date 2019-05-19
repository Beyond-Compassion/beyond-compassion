<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreJumbotron: () => import('@/components/core/Jumbotron'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View')
    }

    // created () {
    //   this.$eventbriteAPI.get(
    //     '/events/search/',
    //     {
    //       params: {
    //         categories: 103
    //       },
    //       crossdomain: true
    //     }
    //   ).then(response => console.log(response))
    // }
  }
</script>
