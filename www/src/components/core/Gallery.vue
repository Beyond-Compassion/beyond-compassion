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
    <v-container grid-list-xl>
      <transition-group
        tag="v-layout"
        name="fade-transition"
        class="wrap child-flex"
        style="min-height: 450px"
      >
        <v-flex
          v-for="project in computedProjects"
          :key="project.img"
          lg3
          md4
          sm6
          xs12
          gallery-card
        >
          <slot
            v-if="$scopedSlots.default"
            :project="project"
          />
          <v-card
            v-else
            v-ripple
            height="200px"
            hover
            class="white--text"
            :img="`/static/${project.img}`"
            @click="handleSelectImg(project.img)"
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

      handleSelectImg (img) {
        this.toggleImageDialog()
        this.$emit('selectImg', img)
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
