<template>
  <v-dialog
    v-model="inputValue"
  >
    <v-layout
      justify-center
      @click="handleClick"
    >
      <slot />
    </v-layout>
  </v-dialog>
</template>
