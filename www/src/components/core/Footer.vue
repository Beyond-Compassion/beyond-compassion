<template>
  <alpha-footer
    :company="$t('Footer.company')"
    :social="social"
    :categories="categories"
  >
    <span>
      &copy; 2017
      {{ $t('Footer.company') }}
      &mdash;
      {{ $t('Footer.rights') }}
    </span>
  </alpha-footer>
</template>

<script>
  export default {
    computed: {
      social () {
        return this.$t('Footer.social')
      },
      categories () {
        return this.$t('Footer.categories')
      }
    }
  }
</script>
