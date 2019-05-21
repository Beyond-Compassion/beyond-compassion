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
          <span :class="titleClass">
            {{ 'upcoming events' | titleCase }}
          </span>
        </v-flex>

        <!-- card carousel -->
        <v-flex
          v-if="!loading"
          class="mt-3"
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
                <!-- text -->
                <v-flex
                  v-for="event in eventGroup"
                  :key="event.name"
                  xs12
                  sm6
                  lg4
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
          class="mt-4 mb-5 pb-5"
        >
          <v-layout
            row
            wrap
            justify-center
          >
            <v-flex
              xs10
              sm6
              lg3
            >
              <v-card
                color="transparent"
                class="elevation-0"
              >
                <v-card-actions>
                  <!-- back button -->
                  <v-btn
                    outline
                    left
                    color="primaryDark"
                    @click="prev"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>

                  <v-spacer />

                  <!-- forward button -->
                  <v-btn
                    outline
                    right
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

        <!-- photo carousel title -->
        <v-flex
          xs12
          class="mt-3 text-xs-center"
        >
          <span :class="titleClass">
            {{ 'past events' | titleCase }}
          </span>
        </v-flex>
      </v-layout>
    </v-container>

    <alpha-hero
      gradient="to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)"
      :height="$vuetify.breakpoint.mdAndUp ? 800 : 600"
      :jumbotron="false"
      :items="pastEventPhotos"
      :delimiter-icon="$vuetify.icons.delimiter"
      :hide-controls="true"
      class="mt-3"
      dark
      :cycle="false"
      @change="setPastEventIndex"
    >
      <v-container
        fill-height
        grid-list-xs
      >
        <v-layout
          align-end
          wrap
        >
          <v-flex
            xs12
            sm6
            xl4
          >
            <v-card
              color="transparent"
              class="elevation-0"
            >
              <v-card-title class="pb-0">
                <span class="headline">{{ pastEvent.name | titleCase }}</span>
              </v-card-title>
              <v-card-text>
                <span class="body-1">{{ pastEvent.description }}</span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="accent"
                  flat
                >
                  more info
                </v-btn>
              </v-card-actions>
            </v-card>
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
      title: 'Beyond Compassion',
      meta: [
        { name: 'description', content: 'A pretty cool NPO' }
      ]
    },

    data: () => ({
      pastEvents: [
        {
          name: 'annual fundraising event',
          description: 'A description of what is happening the picture. As you can see, there is a lot of great stuff happening here. I really did enjoy myself at this event.',
          photo: '/static/event-001.jpg'
        },
        {
          name: 'weekly event in new york city',
          description: 'Allow me to explain this image. The image has some people doing some things.',
          photo: '/static/event-002.jpg'
        },
        {
          name: 'best event ever 2018',
          description: 'This image is very complex, but i can tell you about it. It was from an incredible event that happened some time in the past.',
          photo: '/static/event-003.jpg'
        }
      ],
      pastEventIndex: 0,
      window: 0
    }),

    computed: {
      ...mapState(['events', 'loading']),

      pastEvent () {
        return this.pastEvents[this.pastEventIndex]
      },

      pastEventPhotos () {
        return R.map(R.prop('photo'), this.pastEvents)
      },

      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'font-weight-thin': true
        }
      },

      photoCarouselHeight () {
        if (this.$vuetify.breakpoint.xs) {
          return 300
        } else if (this.$vuetify.breakpoint.mdAndDown) {
          return 400
        }

        return 500
      },

      eventGroupLength () {
        if (this.$vuetify.breakpoint.xs) {
          return 1
        } else if (this.$vuetify.breakpoint.mdAndDown) {
          return 2
        }

        return 3
      },

      windowLength () {
        // MIKE: 5 happens to be the number of results im generating on the
        // server - this is placeholder so dont use a magic number when u
        // actually implement the real thing
        return 5 / Math.ceil(this.eventGroupLength)
      },

      eventGroups () {
        return R.splitEvery(this.eventGroupLength, this.events)
      },

      cardFeatures () {
        return this.$t('Home.cardFeatures')
      },

      testimonials () {
        return this.$t('Home.testimonials')
      }
    },

    methods: {
      // MIKE: modify the original component in the alpha plugin instead of
      // using this hack (the new text will change too early and it looks
      // slightly off)
      setPastEventIndex (i) {
        if (i !== undefined) {
          this.pastEventIndex = i
        }
      },

      next () {
        this.window = this.window + 1 === this.windowLength
          ? 0
          : this.window + 1
      },

      prev () {
        this.window = this.window - 1 < 0
          ? this.windowLength - 1
          : this.window - 1
      }
    }
  }
</script>

<style>
.v-carousel__controls {
  background-color: transparent !important;
  bottom: unset !important;
  top: 10px !important;
}
</style>
