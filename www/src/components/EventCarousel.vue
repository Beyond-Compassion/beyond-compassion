<template>
  <!-- card carousel window -->
  <v-window
    v-model="window"
  >
    <v-window-item
      v-for="eventGroup in eventGroups"
      :key="eventGroup[0].name"
    >
      <v-layout
        row
        wrap
        justify-center
      >
        <!-- text -->
        <v-flex
          v-for="event in eventGroup"
          :key="event.name"
          xs12
          sm6
          lg4
        >
          <v-card
            class="ma-2 greyDark--text"
            color="greyLightest"
          >
            <v-img
              :src="event.thumbnail"
            />
            <v-card-title>
              <span class="headline text-truncate">
                {{ event.name }}
              </span>
            </v-card-title>
            <v-card-text>
              <span class="greyLight--text">Starts {{ event.start }}</span><br>
              <span class="greyLight--text">Ends {{ event.end }}</span><br><br>
              <span
                v-for="line in event.address"
                :key="line"
                class="greyLight--text"
                v-html="`<span>${line}</span><br>`"
              />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                class="primaryLight--text"
                flat
                :href="event.url"
                target="_blank"
                :ripple="false"
                dark
                large
              >
                more info
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-window-item>
  </v-window>
</template>

<script>
  export default {
    props: {
      window: {
        type: Number,
        required: true
      },
      eventGroups: {
        type: Array,
        required: true
      }
    }
  }
</script>
