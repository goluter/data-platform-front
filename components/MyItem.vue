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
            <!--            <img class="mx-auto" src="" alt="404">-->
          </div>
        </v-row>
        <v-row class="mt-5">
          <span class="item-provider">{{ item.provider }}</span>
        </v-row>
        <v-row>
          <span class="item-name">{{ item.name }}</span>
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
  margin: 3px;
  padding: 3px;
  width: 180px;
  height: 170px;
  background-color: #eee;
  border: #f0f0f0 solid 1px;
  border-radius: 15px;
}
.item-provider {
  font-size: 12px;
  color: #808080;
}
.item-name {
  font-size: 12px;
  font-weight: 600;
}
</style>
