<template>
  <div>
    <v-container fill-height>
      <v-layout
        justify-center
        align-center
        wrap
      >
        <!-- testimonial -->
        <v-flex
          v-for="(testimonial, i) in testimonials.slice(0,1)"
          :key="i"
          xs12
          sm8
          md6
          class="my-5 pb-5"
        >
          <alpha-testimonial
            :author="testimonial.author"
            :title="testimonial.title"
            :quote="testimonial.quote"
          />
        </v-flex>

        <!-- events title -->
        <v-flex
          xs12
          class="mt-3 mb-4 text-xs-center"
        >
          <span class="display-3 font-weight-thin">
            {{ 'events' | titleCase }}
          </span>
        </v-flex>

        <!-- card carousel -->
        <v-flex
          v-if="!loading"
          class="mt-4"
          :style="{ height: '100%' }"
          xs12
        >
          <!-- card carousel window -->
          <v-window
            v-model="window"
          >
            <v-window-item
              v-for="eventGroup in eventGroups"
              :key="eventGroup[0].name"
            >
              <v-layout
                row
                wrap
                justify-center
              >
                <!-- cards -->
                <v-flex
                  v-for="event in eventGroup"
                  :key="event.name"
                  xs6
                  md4
                >
                  <v-card class="ma-2">
                    <v-img
                      class="white--text"
                      :src="event.thumbnail"
                    />
                    <v-card-title>
                      <span class="headline text-truncate">
                        {{ event.name }}
                      </span>
                    </v-card-title>
                    <v-card-text>
                      <span class="grey--text">Starts {{ event.start }}</span><br>
                      <span class="grey--text">Ends {{ event.end }}</span><br><br>
                      <span
                        v-for="line in event.address"
                        :key="line"
                        v-html="`<span>${line}</span><br>`"
                      />
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        color="accent"
                        flat
                        :href="event.url"
                        target="_blank"
                        :ripple="false"
                      >
                        more info
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-window-item>
          </v-window>
        </v-flex>

        <!-- loading spinner -->
        <v-flex
          v-else
          class="mt-5 text-xs-center"
          xs12
        >
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </v-flex>

        <!-- card carousel controls -->
        <v-flex
          xs12
          class="mt-5"
        >
          <v-layout
            row
            wrap
            justify-center
          >
            <v-flex xs3>
              <v-card
                color="transparent"
                class="elevation-0"
              >
                <v-card-actions>
                  <!-- back button -->
                  <v-btn
                    outline
                    color="primaryDark"
                    @click="prev"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>

                  <v-spacer />

                  <!-- forward button -->
                  <v-btn
                    outline
                    color="primaryDark"
                    @click="next"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
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
  import { mapState } from 'vuex'
  import * as R from 'ramda'

  export default {
    metaInfo: {
      title: 'Vuetify Alpha',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    data: () => ({
      items: ['/static/home-parallax.png'],
      // MIKE: length should be computed based on number of events + length of groups
      length: 3,
      window: 0
    }),

    computed: {
      ...mapState(['events', 'loading']),

      eventGroups () {
        // MIKE: change the length of based on screen width
        return R.splitEvery(2, this.events)
      },

      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },

      testimonials () {
        return this.$t('Home.testimonials')
      }
    },

    methods: {
      next () {
        this.window = this.window + 1 === this.length
          ? 0
          : this.window + 1
      },
      prev () {
        this.window = this.window - 1 < 0
          ? this.length - 1
          : this.window - 1
      }
    }
  }
</script>
