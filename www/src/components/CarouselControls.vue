<template>
  <v-layout
    row
    wrap
    justify-center
  >
    <v-flex
      xs10
      sm6
      lg3
    >
      <v-card
        color="transparent"
        class="elevation-0"
      >
        <v-card-actions>
          <!-- back button -->
          <v-btn
            flat
            large
            left
            color="primaryDark"
            @click="(e) => this.$emit('prev', e)"
          >
            <v-icon x-large>
              mdi-chevron-left
            </v-icon>
          </v-btn>

          <v-spacer />

          <!-- forward button -->
          <v-btn
            flat
            large
            right
            color="primaryDark"
            @click="(e) => this.$emit('next', e)"
          >
            <v-icon x-large>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
