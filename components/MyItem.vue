<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in itemsData"
        :key="i"
        cols="6"
        style="height: 230px"
      >
        <v-row style="justify-content: center">
          <div class="item-img">
            <img class="mx-auto" src="" alt="404">
          </div>
        </v-row>
        <v-row>
          <span>{{ item.provider }}</span>
        </v-row>
        <v-row>
          <span>{{ item.name }}</span>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    itemsData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.item-img {
  width: 180px;
  height: 170px;
}
</style>
