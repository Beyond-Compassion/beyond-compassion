<template>
  <v-container fill-height>
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

  export default {
    metaInfo: {
      title: 'Gallery',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    },

    components: {
      // CoreDialog
    },

    data () {
      return {
        dialog: false
      }
    },

    computed: {
      categories () {
        return this.$t('Projects.categories')
      },
      projects () {
        return this.$t('Projects.projects')
      }
    }
  }
</script>
