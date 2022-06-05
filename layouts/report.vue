<template>
  <default-layout>
    <div class="nested-header">
      <div class="arraow-title">
        <v-icon>mdi-chevron-left</v-icon>
        <span>{{ title }}</span>
      </div>
      <div class="function">
        <v-icon>mdi-export-variant</v-icon>
        <v-icon>mdi-bookmark-outline</v-icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </div>
    </div>
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default'

export default {
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
.nested-header {
  display: flex;
  justify-content: space-between;
}
</style>
