<template>
  <!-- MIKE: you have to set a resize event listener to reset the cards when a
breakpoint is hit -->
  <div>
    <v-container
      fill-height
      class="greyDark--text"
    >
      <v-layout
        justify-center
        align-center
        wrap
      >
        <!-- class="mt-5 pt-5 text-xs-center" -->
        <v-flex
          id="mission-section"
          xs12
          class="text-xs-center"
        >
          <p :class="titleClass">
            {{ 'Ways to Donate' }}
          </p>
          <p>Click here to donate through our paypal:</p>
          <p class="mb-5">
            <v-btn
              depressed
              large
              color="accentLightest"
              class="greyDark--text cta"
              :ripple="{ class: 'primaryLight--text' }"
              href="https://www.paypal.me/beyondcompassion"
              :loading="loading"
              @click="loading = !loading"
            >
              <v-img
                width="90"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png"
              />
            </v-btn>
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Beyond Compassion',
      meta: [{ name: 'description', content: 'A pretty cool NPO' }]
    },

    data: () => ({
      loading: false
    }),

    computed: {
      testimonials () {
        return this.$t('Home.testimonials')
      },

      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'font-weight-thin': true,
          'mb-5': true
        }
      }
    }
  }
</script>
