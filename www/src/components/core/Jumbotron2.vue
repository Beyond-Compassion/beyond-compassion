<template>
  <v-fade-transition mode="out-in">
    <!-- gradient="to top, rgba(240, 180, 41, .6), rgba(43, 176, 237, .7)" -->
    <!-- gradient="to bottom, rgb(240, 180, 41, .9), rgba(24, 111, 175, .2) 40%" -->
    <v-img
      v-if="namespace"
      :key="$route.path"
      gradient="to top, #243B53, #243B53"
      src="/static/blank-hero-003.jpg"
      :height="$vuetify.breakpoint.mdAndDown ? '16vh' : '16vh'"
      position="bottom"
    >
      <v-fade-transition mode="out-in">
        <v-container
          v-if="isBooted"
          :key="$route.path"
          fill-height
        >
          <v-layout align-center>
            <v-fade-transition mode="out-in">
              <v-flex
                :key="$route.path"
                text-xs-center
              >
                <div
                  v-if="subTitle"
                  class="body-1 greyLightest--text"
                  v-html="subTitle"
                />
                <v-btn
                  depressed
                  large
                  color="accentLightest"
                  class="greyDark--text cta mt-3"
                  :ripple="{ class: 'primaryLight--text' }"
                >
                  donate now
                </v-btn>
              </v-flex>
            </v-fade-transition>
          </v-layout>
        </v-container>
      </v-fade-transition>
    </v-img>
  </v-fade-transition>
</template>

<script>
  export default {
    data: () => ({
      isBooted: false
    }),

    computed: {
      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'white--text': true,
          'font-weight-thin': true
        }
      },

      isHome () {
        return this.$route.path === '/'
      },
      namespace () {
        return this.$route.name
      },
      title () {
        return this.$t(`${this.namespace}.jumbotronTitle`)
      },
      subTitle () {
        return this.$t(`${this.namespace}.jumbotronSubTitle`)
      },
      heroImage () {
        return `/static/${this.namespace.toLowerCase()}-hero.png`
      }
      // heroImage () {
      //   return `/static/shoes-003-BW.png`
      // }
    },

    mounted () {
      setTimeout(() => {
        this.isBooted = true
      }, 200)
    }
  }
</script>
