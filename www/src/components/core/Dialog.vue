<template>
  <v-dialog
    v-model="inputValue"
  >
    <v-layout
      justify-center
      @click="handleClick"
    >
      <v-flex
        :xs11="!isVideo"
        :xs12="isVideo"
      >
        <vue-plyr
          v-if="isVideo"
          ref="plyr"
        >
          <video
            poster="this.currentImage"
            :src="`/static/${video}`"
            :style="{maxHeight: `${maxHeights[$vuetify.breakpoint.name]}px`}"
          />
        </vue-plyr>

        <v-img
          v-else
          contain
          :max-height="maxHeights[$vuetify.breakpoint.name]"
          :src="`/static/${currentImage}`"
        />
      </v-flex>
    </v-layout>
  </v-dialog>
</template>

<script>
  import * as RA from 'ramda-adjunct'
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      currentImage: {
        type: String,
        required: true
      },
      video: {
        type: String,
        required: false,
        default: ''
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

      isVideo () {
        return !RA.isNilOrEmpty(this.video)
      },

      currentImageExtension () {
        return this.currentImage.split('.').pop()
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
    },

    watch: {
      imageDialog (newVal) {
        if (!newVal) {
          this.stopPlayer()
        }
      }
    },

    methods: {
      ...mapMutations(['setImageDialog', 'toggleImageDialog']),

      handleClick () {
        if (!this.isVideo) {
          this.toggleImageDialog()
        }
      },

      stopPlayer () {
        this.$refs.plyr.player.stop()
      }
    }
  }
</script>

<style lang="stylus">
// .v-dialog--active {
// box-shadow: unset !important;
// -webkit-box-shadow: unset !important;
// }
.v-dialog {
  box-shadow: unset !important;
  -webkit-box-shadow: unset !important;
}
</style>
