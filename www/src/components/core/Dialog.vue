<template>
  <!-- width="500" -->
  <v-dialog
    v-model="inputValue"
  >
    <!-- MIKE: try using a v-card with an "img" attribute! -->
    <!-- MIKE: try using a v-card with an "img" attribute! -->
    <!-- MIKE: try using a v-card with an "img" attribute! -->
    <!-- aspect-ratio="1.7" -->
    <v-img
      :src="`static/${currentImage}`"
      contain
    />
  </v-dialog>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      currentImage: {
        type: String,
        required: true
      }
    },

    computed: {
      ...mapState(['imageDialog']),

      inputValue: {
        get () {
          return this.imageDialog
        },
        set (val) {
          this.setImageDialog(val)
        }
      }
    },

    methods: {
      ...mapMutations(['setImageDialog', 'toggleImageDialog'])
    }
  }
</script>
