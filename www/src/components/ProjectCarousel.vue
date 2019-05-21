<template>
  <alpha-hero
    gradient="to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, .5), rgba(0, 0, 0, 1)"
    :height="$vuetify.breakpoint.mdAndUp ? 800 : 600"
    :jumbotron="false"
    :items="projectPhotos"
    :delimiter-icon="$vuetify.icons.delimiter"
    :hide-controls="true"
    class="mt-3"
    dark
    :cycle="false"
    @change="setProjectIndex"
  >
    <v-container
      fill-height
      :grid-list-xs="$vuetify.breakpoint.smAndDown"
      :grid-list-xl="$vuetify.breakpoint.mdAndUp"
    >
      <v-layout
        align-end
        wrap
      >
        <v-flex
          xs12
          sm6
          xl5
        >
          <v-card
            color="transparent"
            class="elevation-0"
          >
            <v-card-title class="pb-0">
              <span class="headline">{{ project.name | titleCase }}</span>
            </v-card-title>
            <v-card-text>
              <span class="body-1">{{ project.description }}</span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="accentLight"
                flat
              >
                view gallery
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </alpha-hero>
</template>

<script>
  import * as R from 'ramda'

  export default {
    props: {
      projects: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        projectIndex: 0
      }
    },

    computed: {
      project () {
        return this.projects[this.projectIndex]
      },

      projectPhotos () {
        return R.map(R.prop('photo'), this.projects)
      }
    },

    methods: {
      // MIKE: modify the original component in the alpha plugin instead of
      // using this hack (the new text will change too early and it looks
      // slightly off)
      setProjectIndex (i) {
        if (i !== undefined) {
          this.projectIndex = i
        }
      }
    }
  }
</script>
