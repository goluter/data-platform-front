<template>
  <div>
    <v-container>
      <v-row>
        <v-col />
        <v-col class="ml-auto" cols="auto">
          <span class="purchase-history">구매내역</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex" cols="12" style="height: 65px; background-color: #d7f5ff">
          <div class="guide">
            <span>적립 방법 알아보기</span>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <NuxtLink to="/store/item/" style="text-decoration: none; color: initial;">
        <StoreItems :store-data="storeData" />
      </NuxtLink>
    </v-container>
  </div>
</template>

<script>
import StoreItems from '../../components/StoreItems.vue'

export default {
  components: { StoreItems },
  layout: 'main',
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
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
</style>
