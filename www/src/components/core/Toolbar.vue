<template>
  <v-toolbar
    v-scroll="onScroll"
    app
    dense
    :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : 'greyLightest'"
  >
    <!-- <img
      src="/static/logo-small.svg"
      width="40"
    > -->

    <v-toolbar-title>
      <router-link
        class="title primaryLight--text"
        tag="span"
        to="/"
      >
        <a :style="{ textDecoration: 'none' }">Beyond Compassion</a>
      </router-link>
      <span class="title primaryLight--text" />
    </v-toolbar-title>
 
    <v-spacer />

    <v-toolbar-items
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <!-- navigation buttons -->
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        class="button-class"
        active-class="primaryLight--text"
        :to="item.to"
        flat
      >
        <span
          v-text="item.text"
        />
      </v-btn>

      <!-- donate button -->
      <v-btn
        depressed
        color="accentLighter cta"
        class="greyDark--text"
        :ripple="{ class: 'primaryLight--text' }"
      >
        donate
      </v-btn>
    </v-toolbar-items>
    <v-btn
      v-else
      icon
      @click="toggleDrawer"
    >
      <v-icon color="greyDark">
        mdi-menu
      </v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  // Utilities
  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false
    }),

    computed: {
      items () {
        return this.$t('View.items')
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>

<style scoped>
.button-class {
  color: #243B53;
}
</style>
