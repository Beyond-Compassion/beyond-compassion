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
          <p>
            We are currently not accepting donations through this site, but you can email us about it
            <a
              href="mailto:bcicharity@gmail.com"
            >here</a>
            if you would like to donate now.
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

    // MIKE: put the "projects" array into the localization file
    data: () => ({
      // projects: [
      //   {
      //     name: 'some charity project',
      //     description: 'A description of what is happening the picture. As you can see, there is a lot of great stuff happening here. I really did enjoy myself at this event.',
      //     // description: 'A description of what is happening the picture.',
      //     photo: '/static/event-001.jpg'
      //   },
      //   {
      //     name: 'weekly fundraiser in new york city',
      //     description: 'Allow me to explain this image. The image has some people doing some things.',
      //     // description: 'Allow me to explain this image. The image has some people.',
      //     photo: '/static/event-002.jpg'
      //   },
      //   {
      //     name: 'a different charity project',
      //     description: 'This image is very complex, but i can tell you about it. It was from an incredible event that happened some time in the past.',
      //     // description: 'This image is very complex, but i can tell you about it.',
      //     photo: '/static/event-003.jpg'
      //   }
      // ],
      window: 0
    }),

    computed: {
      testimonials () {
        return this.$t('Home.testimonials')
      },

      titleClass () {
        return {
          'display-1': this.$vuetify.breakpoint.xs,
          'display-3': this.$vuetify.breakpoint.smAndUp,
          'font-weight-thin': true
        }
      }
    }
  }
</script>
