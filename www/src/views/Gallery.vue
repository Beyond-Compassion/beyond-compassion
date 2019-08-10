<template>
  <v-container fill-height>
    <!-- currentImage: {{ currentImage }} -->
    <v-layout
      justify-center
      align-center
      wrap
    >
      <!-- <v-flex
        xs12
        class="text-xs-center"
      >
        <core-dialog :items="projects" />
      </v-flex> -->
      <v-flex
        xs10
        class="mb-5"
      >
        <!-- :projects="populatedProjects()" -->
        <alpha-gallery
          id="test"
          :categories="categories"
          :projects="projects"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import CoreDialog from '@/components/core/Dialog.vue'
  import * as R from 'ramda'

  export default {
    metaInfo: {
      title: 'Gallery',
      meta: [
        {
          name: 'description',
          content: 'Customized vue-cli templates for Vue and Vuetify'
        }
      ]
    },

    components: {
    // CoreDialog
    },

    data () {
      return {
        dialog: false,
        currentImage: 'unset'
      }
    },

    computed: {
      categories () {
        return this.$t('Projects.categories')
      },

      projects () {
        return this.$t('Projects.projects')

      // return R.map(
      //   x => {
      //     return R.assoc(
      //       'action'
      //       // MIKE: blarg, a callback, really?
      //     )
      //   },
      //   this.$t('Projects.projects')
      // )
      }
    },

    beforeCreate () {
      
    },

    methods: {
      setCurrentImage (image) {
        this.currentImage = image
      },

      populatedProjects () {
        const projects = this.$t('Projects.projects')

        // const setCurrentImage = this.setCurrentImage.bind(this)

        const ret = R.map(project => {
          return R.assoc(
            'action',
            // setCurrentImage(project.img),
            this.setCurrentImage(project.img),
            project
          )
        }, this.$t('Projects.projects'))

        console.log('(populatedProjects) projects:')
        console.log(projects)

        console.log('(populatedProjects) ret:')
        console.log(ret)

        return ret
      }
    }
  }
</script>
