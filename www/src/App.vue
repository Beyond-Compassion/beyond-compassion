<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-jumbotron />

    <core-view />

    <!-- <core-footer /> -->
    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/CoreFooter'),
      CoreJumbotron: () => import('@/components/core/Jumbotron'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View')
    },

    created () {
      // MIKE: dispatch action here

      this.$store.dispatch('getEvents')

      // const { data } = this.$repeaterAPI.get('')
      // this.data = data
    }

  }
</script>
