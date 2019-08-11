<template>
  <!-- width="500" -->
  <v-dialog
    v-model="inputValue"
    max-width="80%"
    :max-height="maxHeights[$vuetify.breakpoint.name]"
  >
    <v-img
      :src="`static/${currentImage}`"
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
      },

      maxHeights () {
        return {
          xs: 500,
          sm: 500,
          md: 900,
          lg: 900,
          xl: 900
        }
      }

      // maxWidths () {
      //   return {
      //     xs: 500,
      //     sm: 500,
      //     md: 900,
      //     lg: 900,
      //     xl: 900
      //   }
      // }
    },

    methods: {
      ...mapMutations(['setImageDialog', 'toggleImageDialog'])
    }
  }
</script>
