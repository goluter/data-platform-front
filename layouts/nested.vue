<template>
  <default-layout>
    <div class="nested-header">
      <div class="arraow">
        <v-icon>mdi-chevron-left</v-icon>
      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <Nuxt/>
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default'

export default {
  components: {
    DefaultLayout
  },
}
</script>

<style scoped>
.nested-header {
  display: flex;
  justify-content: space-between;
}
</style>