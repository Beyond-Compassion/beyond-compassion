<template>
  <div>
    <v-container fill-height>
      <v-layout
        justify-center
        align-center
        wrap
      >
        <!-- <v-flex
          xs12
          mb-5
        >
          <alpha-card-feature :features="cardFeatures" />
        </v-flex> -->
        
        <!-- <v-flex
          xs12
          mb-3
        >
          <h2>{{ $t('Home.testimonialsTitle') }}</h2>
        </v-flex> -->

        <v-flex
          v-for="(testimonial, i) in testimonials.slice(0,1)"
          :key="i"
          xs12
          sm6
        >
          <alpha-testimonial
            :author="testimonial.author"
            :title="testimonial.title"
            :quote="testimonial.quote"
          />
        </v-flex>
      </v-layout>
    </v-container>

    <alpha-hero
      :height="$vuetify.breakpoint.mdAndUp ? 500 : 'auto'"
      :jumbotron="false"
      :items="items"
      class="mt-5"
      dark
      gradient="to top, rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)"
    >
      <v-container
        fill-height
        grid-list-xl
      >
        <v-layout
          align-center
          justify-space-around
          wrap
        >
          <v-flex
            xs10
            md6
          >
            <alpha-testimonial
              :author="testimonials[2].author"
              :title="testimonials[2].title"
              :quote="testimonials[2].quote"
              dark
            />
          </v-flex>
        </v-layout>
      </v-container>
    </alpha-hero>
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Vuetify Alpha',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    data: () => ({
      items: ['/static/home-parallax.png']
    }),

    computed: {
      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },
      testimonials () {
        return this.$t('Home.testimonials')
      }
    }
  }
</script>
