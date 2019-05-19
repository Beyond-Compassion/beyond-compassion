<template>
  <v-container
    fill-height
    class="mb-5"
  >
    <v-layout
      justify-space-between
      wrap
    >
      <v-flex
        xs12
        md5
      >
        <h2
          class="headline mb-2"
          v-text="$t('Contact.heading1')"
        />
        <p
          class="mb-4"
          v-text="$t('Contact.headingText1')"
        />
        <v-card>
          <v-card-text>
            <v-text-field
              label="Name"
              prepend-icon="mdi-account"
            />
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
            />
            <v-textarea
              label="Message"
              prepend-icon="mdi-message-text"
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              large
              class="px-5"
              color="primary"
            >
              {{ $t('Contact.submit') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        sm3
      >
        <v-card>
          <div class="pa-3">
            <v-img
              src="/static/alpha-construction-logo-dark.png"
              alt="logo"
              class="my-3"
            />
          </div>
          <v-card-text>
            <div
              class="mb-3"
              v-text="$t('Contact.phone')"
            />
            <div v-text="$t('Contact.address')" />
            <div v-text="$t('Contact.cityState')" />
            <div v-text="$t('Contact.zip')" />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Contact',
      meta: [
        { name: 'description', content: 'Customized vue-cli templates for Vue and Vuetify' }
      ]
    }
  }
</script>
