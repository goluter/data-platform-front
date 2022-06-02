<template>
  <div>
    <div
        v-for="(item, i) in storeData"
        :key="i"
    >
      <v-row class="pa-3">
        <v-col class="d-flex justify-center" cols="3" md="2">
          <div class="image">
          </div>
        </v-col>
        <v-col class="pa-auto" cols="9" md="10" style="display: flex; flex-direction: column; justify-content: space-evenly">
          <span class="item-title">
            {{ item.title }}
          </span>
          <span class="item-price">
            {{ item.price }} P
          </span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storeData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.image {
  padding: 3%;
  width: 60px;
  height: 60px;
  border: #f0f0f0 solid 1px;
  border-radius: 50%;
}
.item-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
}
.item-price {
  font-size: 12px;
}
</style>