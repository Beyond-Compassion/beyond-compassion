<template>
  <v-container fill-height>
    <v-layout
      justify-center
      align-center
      wrap
    >
      <v-flex
        xs12
        class="text-xs-center"
      >
        <core-dialog
          :current-image="currentImage"
          :video="currentVideo"
        />
      </v-flex>

      <v-flex
        xs11
        class="mb-5"
      >
        <core-gallery
          id="test"
          :categories="categories"
          :projects="projects"
          @selectImg="handleSelectImg"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as R from 'ramda'
  import CoreGallery from '@/components/core/Gallery.vue'
  import CoreDialog from '@/components/core/Dialog.vue'

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
      CoreDialog,
      CoreGallery
    },

    data () {
      return {
        // dialog: false,
        currentImage: '',
        currentVideo: ''
      }
    },

    computed: {
      categories () {
        return this.$t('Projects.categories')
      },

      projects () {
        return this.$t('Projects.projects')
      }
    },

    beforeCreate () {},

    methods: {
      handleSelectImg ({ img, video }) {
        this.currentImage = img
        this.currentVideo = video
        this.dialog = true
      },

      setCurrentImage (image) {
        this.currentImage = image
      }
    }
  }
</script>
