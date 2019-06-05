<template>
  <v-toolbar
    v-scroll="onScroll"
    app
    dense
    :flat="!isScrolling"
    :color="!isScrolling ? 'transparent' : 'greyLightest'"
  >
    <v-toolbar-title>
      <router-link
        class="title primaryLight--text"
        tag="span"
        to="/"
      >
        <a :style="{ textDecoration: 'none' }">
          Beyond Compassion
          <img
            src="/static/logo-sun.svg"
            width="40"
          >
        </a>
      </router-link>
      <span class="title primaryLight--text" />
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <!-- navigation buttons -->
      <v-btn
        v-for="(item, i) in items"
        :key="i"
        class="button-class"
        active-class="primaryLight--text"
        :to="{ path: item.to, ...(item.hash ? { hash: item.hash } : {}) }"
        flat
      >
        <span v-text="item.text" />
      </v-btn>

      <!-- donate button -->
      <v-btn
        depressed
        color="accentLightest cta"
        class="greyDark--text"
        :ripple="{ class: 'primaryLight--text' }"
        :to="{ path: '/', hash: 'donate-section' }"
      >
        <span>donate</span>
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
        this.isScrolling =
          (window.pageYOffset || document.documentElement.scrollTop || 0) > 100
      }
    }
  }
</script>

<style scoped>
.button-class {
  color: #243b53;
}
</style>
