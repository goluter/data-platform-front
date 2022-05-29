<template>
  <default-layout>
    <div class="nested-header elevation-1">
      <div class="arrow">
        <v-icon>mdi-chevron-left</v-icon>
      </div>
      <div class="title">
        <span class="title-text">{{ $store.getters.getPageTitle }}</span>
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
  width: 100%;
  height: 45px;
  justify-content: center;
}
.arrow {
  display: inline;
  float: left;
  margin-left: 12px;
  align-self: center;
}
.title {
  display: inline;
  justify-self: center;
  align-self: center;
  width: 100%;
  text-align: center;
}
.title-text {
  margin-left: -36px;
  font-size: 14px;
  font-weight: 600;
}
</style>