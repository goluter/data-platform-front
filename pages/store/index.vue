<template>
  <div>
    <v-container class="pa-0">
      <v-row class="pt-3">
        <v-col cols="1" />
        <v-col class="ml-auto" cols="auto">
          <span class="purchase-history">구매내역</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-4 pl-7" cols="12" style="background-color: #d7f5ff">
          <div class="guide">
            적립 방법 알아보기
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </v-col>
      </v-row>
      <StoreItems :store-data="storeData" />
    </v-container>
  </div>
</template>

<script>
import StoreItems from '../../components/StoreItems.vue'

export default {
  components: { StoreItems },
  layout: 'base',
  data () {
    return {
      storeData: [
        { title: '[스타벅스] 카페 아메리카노 T', price: 4000 },
        { title: '[BHC] 뿌링클콤보', price: 12000 }
      ]
    }
  }
}
</script>

<style scoped>
.purchase-history {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #1087f4;
}
.guide {
  display: flex;
  font-size: 16px;
  font-weight: 600;
}
</style>
