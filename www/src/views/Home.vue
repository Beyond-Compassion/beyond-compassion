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
        <!-- quote -->
        <v-flex
          v-for="(testimonial, i) in testimonials.slice(0,1)"
          :key="i"
          xs12
          sm8
          md6
          :class="{'mb-5': true, 'pb-4': true, 'mr-4': $vuetify.breakpoint.xs}"
        >
          <alpha-testimonial
            :author="testimonial.author"
            :title="testimonial.title"
            :quote="testimonial.quote"
          />
        </v-flex>
      </v-layout>
    </v-container>

    <jumbotron-two />

    <v-container
      fill-height
      class="greyDark--text"
    >
      <v-layout
        justify-center
        align-center
        wrap
      >
        <!-- mission title -->
        <v-flex
          xs12
          class="mt-5 pt-5 text-xs-center"
        >
          <span :class="titleClass">
            {{ 'Our Mission' | titleCase }}
          </span>
        </v-flex>

        <!-- mission body -->
        <v-flex
          xs12
          class="mt-2 mb-5"
        >
          <v-layout
            row
            wrap
            justify-space-around
            fill-height
          >
            <!-- mission item -->
            <v-flex
              v-for="item in missionItems"
              :key="item.title"
              xs12
              lg4
              class="mt-3 mb-1"
            >
              <v-layout
                row
                wrap
                class="text-xs-center"
              >
                <!-- image -->
                <v-flex xs12>
                  <v-layout
                    row
                    wrap
                    align-center
                    justify-space-around
                  >
                    <v-flex
                      sm2
                      md3
                      xs4
                    >
                      <v-img :src="item.src" />
                    </v-flex>
                  </v-layout>
                </v-flex>

                <!-- text -->
                <v-flex xs12>
                  <v-layout
                    row
                    wrap
                    align-center
                    justify-space-around
                  >
                    <v-flex
                      xs10
                      md7
                      sm6
                    >
                      <p class="headline">
                        {{ item.title | titleCase }}
                      </p>
                      <p>
                        {{ item.body }}
                      </p>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <!-- projects title -->
        <v-flex
          xs12
          class="mt-3 pt-4 text-xs-center"
        >
          <span :class="titleClass">
            {{ 'projects' | titleCase }}
          </span>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- project carousel -->
    <project-carousel :projects="projects" />

    <v-container
      fill-height
      class="greyDark--text"
    >
      <v-layout
        justify-center
        align-center
        wrap
      >
        <!-- events title -->
        <v-flex
          xs12
          class="mt-5 pt-5 mb-2 text-xs-center"
        >
          <span :class="titleClass">
            {{ 'upcoming events' | titleCase }}
          </span>
        </v-flex>

        <!-- event carousel -->
        <v-flex
          v-if="!loading"
          class=""
          :style="{ height: '100%' }"
          xs12
        >
          <event-carousel
            :event-groups="eventGroups"
            :window-length="windowLength"
          />
        </v-flex>

        <!-- events loading spinner -->
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

        <!-- calendar CTA -->
        <v-flex
          x12
          class="text-xs-center mt-4 mb-5 pb-5"
        >
          <v-btn
            depressed
            large
            color="accentLightest"
            class="greyDark--text cta"
            :ripple="{ class: 'primaryLight--text' }"
          >
            view past events
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import * as R from 'ramda'
  import EventCarousel from '@/components/EventCarousel'
  import ProjectCarousel from '@/components/ProjectCarousel'
  import JumbotronTwo from '@/components/core/Jumbotron2'

  export default {
    metaInfo: {
      title: 'Beyond Compassion',
      meta: [
        { name: 'description', content: 'A pretty cool NPO' }
      ]
    },

    components: {
      EventCarousel,
      ProjectCarousel,
      JumbotronTwo
    },

    // MIKE: put the "projects" array into the localization file
    data: () => ({
      missionItems: [
        {
          src: '/static/heart-sketch.svg',
          title: 'helping those in need',
          body: 'Lorem ipsum maecenas ullamcorper vivamus tortor, lorem egestas vestibulum eget volutpat inceptos, varius ultrices justo lacus.'
        },
        {
          src: '/static/earth-sketch.svg',
          title: 'giving globally',
          body: 'Duis imperdiet fusce aliquet adipiscing aliquet sed risus orci, fames tincidunt consequat nunc sit vulputate metus.'
        },
        {
          src: '/static/handshake-sketch.svg',
          title: 'working hands-on',
          body: 'Hendrerit sit consectetur porttitor turpis libero, curae phasellus cubilia blandit commodo risus, justo turpis litora in.'
        }
      ],
      projects: [
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
      window: 0
    }),

    computed: {
      ...mapState(['events', 'loading']),

      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'font-weight-thin': true
        }
      },

      windowGroupLength () {
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
        return Math.ceil(5 / this.windowGroupLength)
      },

      eventGroups () {
        return R.splitEvery(this.windowGroupLength, this.events)
      },

      testimonials () {
        return this.$t('Home.testimonials')
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

.alpha-testimonial__footer-bar {
  height: 2px !important;
  /* background-color: #829AB1 !important;
  border-color: #829AB1 !important; */
}

.v-navigation-drawer .v-list__tile:not(.v-list__tile--active) {
  color: #243B53
}

.v-btn--active.cta:before, .v-btn.cta:hover:before, .v-btn.cta:focus:before {
  background-color: #B44D12
}

p {
  line-height: 2;
}

.alpha-testimonial__content .mdi-format-quote-open:before {
  color: #829AB1;
}
</style>
