<template>
  <v-card class="alpha-gallery">
    <v-tabs>
      <v-tab
        v-for="(category, i) in categories"
        :key="i"
        @click="select(category)"
      >
        <span v-text="category.text" />
      </v-tab>
    </v-tabs>
    <v-container
      :grid-list-sm="$vuetify.breakpoint.xs"
      :grid-list-md="$vuetify.breakpoint.smAndUp"
      fluid
      style="min-height: 450px"
    >
      <transition-group
        tag="v-layout"
        name="fade-transition"
        class="wrap child-flex"
      >
        <v-flex
          v-for="project in computedProjects"
          :key="project.name"
          sm2
          xs3
          gallery-card
        >
          <slot
            v-if="$scopedSlots.default"
            :project="project"
          />
          <v-img
            v-else
            v-ripple
            hover
            class="white--text"
            :src="`/static/${project.img}`"
            aspect-ratio="1"
            :style="{cursor: 'pointer'}"
            @click="handleSelectImg(project.img, project.video)"
          />
        </v-flex>
      </transition-group>
    </v-container>
  </v-card>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: 'CoreGallery',

    props: {
      categories: {
        type: Array,
        default: () => []
      },
      projects: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        category: null
      }
    },

    computed: {
      computedProjects () {
        return !this.category
          ? this.projects
          : this.projects.filter(p => p.categories.includes(this.category))
      }
    },

    methods: {
      ...mapMutations(['toggleImageDialog']),

      handleSelectImg (img, video) {
        this.toggleImageDialog()
        this.$emit('selectImg', { img, video })
      },

      select (category) {
        this.category = category.filter
      }
    }
  }
</script>

<style scoped>
.gallery-card {
  transform-origin: center center 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.fade-transition-leave,
.fade-transition-leave-active,
.fade-transition-leave-to {
  display: none;
}
</style>
