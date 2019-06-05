<template>
  <v-navigation-drawer
    v-model="inputValue"
    class="greyLightest greyDark--text"
    temporary
    right
    fixed
    :width="175"
  >
    <v-list>
      <v-list-tile>
        <v-spacer />
        <v-btn
          icon
          @click="toggleDrawer"
        >
          <v-icon color="greyDark">
            mdi-close
          </v-icon>
        </v-btn>
      </v-list-tile>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="{ path: item.to, ...(item.hash ? { hash: item.hash } : {}) }"
      >
        <v-list-tile-title v-text="item.text" />
      </v-list-tile>
      <v-list-tile
        class="accentLightest"
        :to="{ path: '/', hash: 'donate-section' }"
      >
        <v-list-tile-title class="greyDark--text">Donate</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['drawer']),
      inputValue: {
        get () {
          return this.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('View.items')
      }
    },

    methods: {
      ...mapMutations(['setDrawer', 'toggleDrawer'])
    }
  }
</script>
