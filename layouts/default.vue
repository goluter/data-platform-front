<template>
  <v-app>
    <v-main>
      <v-container class="pa-0">
        <v-col class="pa-0" cols="12">
          <v-app-bar dense class="elevation-0" color="transparent">
            <v-app-bar-nav-icon icon @click="back">
              <v-icon>mdi-chevron-left</v-icon>
            </v-app-bar-nav-icon>
            <v-spacer />
            <v-toolbar-title class="title-text" style="margin-left: -32px;">
              {{ $store.getters.getPageTitle }}
            </v-toolbar-title>
            <v-spacer />
          </v-app-bar>
        </v-col>
      </v-container>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.title-text {
  font-size: 14px;
  font-weight: 600;
}
</style>
