<template>
  <!-- mission body -->
  <v-flex
    xs12
    class="mt-2 mb-5"
  >
    <v-layout
      row
      wrap
      justify-space-around
      fill-height
    >
      <!-- mission item -->
      <v-flex
        v-for="item in items"
        :key="item.title"
        xs12
        lg4
        class="mt-3 mb-1"
      >
        <v-layout
          row
          wrap
          class="text-xs-center"
        >
          <!-- image -->
          <v-flex xs12>
            <v-layout
              row
              wrap
              align-center
              justify-space-around
            >
              <v-flex
                xs4
                sm2
                md3
                lg4
              >
                <v-img :src="item.src" />
              </v-flex>
            </v-layout>
          </v-flex>

          <!-- text -->
          <v-flex xs12>
            <v-layout
              row
              wrap
              align-center
              justify-space-around
            >
              <v-flex
                xs10
                md7
                sm6
              >
                <p class="headline">
                  {{ item.title | titleCase }}
                </p>
                <p>
                  {{ item.body }}
                </p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
