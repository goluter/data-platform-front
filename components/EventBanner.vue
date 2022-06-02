<template>
  <v-container>
    <v-row
      v-for="(item, i) in eventData"
      :key="i"
      class="banner-wrapper"
    >
      <v-col
        class="pl-0 pr-0"
        cols="12"
      >
        <NuxtLink :to="item.to" style="text-decoration: none; color: white">
          <v-sheet
            class="banner-sheet elevation-5"
            :color="item.color"
          >
            <v-col class="banner-title" cols="12">
              {{ item.title }}
            </v-col>
            <v-col class="banner-msg" cols="12">
              {{ item.msg }}
            </v-col>
          </v-sheet>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.banner-sheet {
  color: white;
  border-radius: 15px;
}
.banner-title {
  font-size: 20px;
}
.banner-msg {
  font-size: 15px;
}
</style>
