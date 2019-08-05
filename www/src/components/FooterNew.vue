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
      <!-- <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon medium>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text> -->

      <!-- <v-card-text class="white--text pt-0"> -->
      <v-card-text class="white--text">
        <!-- Check us out on social media or send us an email -->
        If you have any questions, please send us an email
        <!-- <router-link
          tag="span"
          to="/"
        > -->
        <a
          class="white--text"
          href="mailto:bcicharity@gmail.com"
        >here</a>
        <!-- </router-link> -->
        to get in touch
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        <span>Beyond compassion is applying for 501(c)(3) status so all Donations are currently NOT tax exempt</span>
        <br>
        <span>&copy;2019 — <strong>{{ 'beyond compassion' | titleCase }}</strong></span>
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
