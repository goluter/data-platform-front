<template>
  <v-app>
    <v-main>
      <v-app-bar class="nested-header elevation-0" color="transparent">
        <v-app-bar-nav-icon icon @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>
        <v-spacer />
        <v-toolbar-title class="title-text" style="margin-left: -32px;">
          {{ $store.getters.getPageTitle }}
        </v-toolbar-title>
        <v-spacer />
      </v-app-bar>
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
.nested-header {
  height: 45px;
}
.title-text {
  font-size: 14px;
  font-weight: 600;
}
</style>
