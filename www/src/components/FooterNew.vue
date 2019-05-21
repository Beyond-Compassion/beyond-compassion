<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      flat
      tile
      color="greyDark"
      class="white--text text-xs-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <!-- <v-icon size="24px">{{ icon }}</v-icon> -->
          <v-icon medium>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Check us out on social media!
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        &copy;2019 — <strong>{{ 'beyond compassion' | titleCase }}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook-box',
        'mdi-twitter-box',
        'mdi-instagram',
        'mdi-google-plus-box',
        'mdi-linkedin-box'
      ]
    })
  }
</script>
