<template>
  <v-container class="container" style=" background-color: #eee">
    <v-row class="pa-2">
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
              <v-col cols="1" />
              <v-col class="ml-auto py-0 pr-0" cols="auto">
                <span
                  class="item-more"
                >
                  상세보기
                  <v-btn
                    icon
                    x-small
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pa-0" cols="12">
                <v-divider />
              </v-col>
            </v-row>
            <v-row style="background-color: white">
              <v-col cols="1">
                <img src="" alt="404">
              </v-col>
              <v-col cols="11">
                <v-row>
                  <v-col class="py-0" cols="12">
                    <span class="item-provider">{{ item.provider }}</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="py-0" cols="12">
                    <span class="item-name">{{ item.name }}</span>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1" />
                  <v-col class="py-0 ml-auto" cols="auto">
                    <span class="item-count">수량: {{ item.count }}개</span>
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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orderData: [
        { date: '2022.06.01 12:42:12', name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스', count: 1, price: 4000 }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '내 구매내역')
  }
}
</script>

<style scoped>
.container {
  height: calc(100% - 48px);
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
  font-weight: 600;
}
</style>
