<template>
  <v-row>
    <v-tabs v-model="tab">
      <v-tabs-slider color="teal accent-3"></v-tabs-slider>
      <v-tab v-for="(item, i) in tabsData"
             :key="i"
             style="color: black; font-weight: 600"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </v-row>
</template>

<script>
export default {
  props: {
    tabsData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      tab: null,
    }
  }
}
</script>

<style scoped>

</style>