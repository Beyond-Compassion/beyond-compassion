<template>
  <!-- v-model="dialog" -->
  <v-dialog width="500">
    <template v-slot:activator="{ on }">
      <v-btn
        color="red lighten-2"
        dark
        v-on="on"
      >
        expand test
      </v-btn>
    </template>

    <v-carousel height="500">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="`/static/${item.img}`"
      />
    </v-carousel>
  </v-dialog>
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

      <!-- <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title
      >
        Privacy Policy
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          flat
          @click="dialog = false"
        >
          I accept
        </v-btn>
      </v-card-actions>
    </v-card> -->
