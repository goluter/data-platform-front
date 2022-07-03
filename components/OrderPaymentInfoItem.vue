<template>
  <v-row class="mb-3 pa-2">
    <v-col
      v-for="(item, i) in orderData"
      :key="i"
      cols="12"
    >
      <v-row>
        <v-col class="px-0 py-1" cols="12">
          <span class="item-date">주문일 {{ item.date }}</span>
        </v-col>
      </v-row>
      <v-row style="background-color: white">
        <v-col class="elevation-1" cols="12">
          <v-row>
            <v-col class="pa-0" cols="12">
              <v-divider />
            </v-col>
          </v-row>
          <v-row style="background-color: white">
            <v-col cols="3" sm="2" md="1">
              <div class="item-img mx-auto" />
              <!--                <img src="" alt="404">-->
            </v-col>
            <v-col cols="9" sm="10" md="11">
              <v-row>
                <v-col class="px-1 pt-2 pb-0" cols="12">
                  <span class="item-provider">{{ item.provider }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="px-1 py-0" cols="12">
                  <span class="item-name">{{ item.name }}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" />
                <v-col class="py-0 ml-auto" cols="auto">
                  <span class="item-count">수량 {{ item.count }}개</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" />
                <v-col class="pt-0 ml-auto" cols="auto">
                  <span class="item-price">{{ item.price | comma }} P</span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    orderData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.item-img {
  width: 70px;
  height: 70px;
  background-color: gray;
}
.item-date {
  font-size: 12px;
  font-weight: 600;
}
.item-more {
  font-size: 10px;
  color: #808080;
}
.item-provider {
  font-size: 12px;
  color: #808080;
}
.item-name {
  font-size: 12px;
  font-weight: 600;
}
.item-count {
  font-size: 10px;
  color: #808080;
}
.item-price {
  font-size: 12px;
  font-weight: 600;
}
</style>
