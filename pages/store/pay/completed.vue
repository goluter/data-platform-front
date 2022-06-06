<template>
  <div class="wrapper">
    <v-container class="fill-height d-flex pa-0 align-content-space-between" style="background-color: #f0f0f0">
      <v-container>
        <v-row style="height: 200px; background-color: white">
          <v-col class="ma-auto text-center" cols="8" style=" font-size: 20px;">
            <div class="text-center">
              <img src="../../../static/circle-check.svg">
              <p>
                <b>구매를 완료했습니다.</b>
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" style="font-size: 12px;">
            <b>구매 상품</b>
          </v-col>
        </v-row>
        <v-row style="margin-bottom: 13px; background-color: white">
          <v-col cols="12">
            <store-items :store-data="storeData" />
          </v-col>
        </v-row>
        <v-row class="d-flex" style="justify-content: space-evenly; font-size: 12px">
          <v-col cols="5" class="text-center" style="background-color: white; border: #d9d9d9 solid 1px;">
            <b>주문내역</b>
          </v-col>
          <v-col cols="5" class="text-center" style="background-color: white; border: #d9d9d9 solid 1px;">
            <b>홈으로</b>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import StoreItems from '../../../components/StoreItems.vue'
export default {
  components: { StoreItems },
  data () {
    return {
      storeData: [
        { title: '[스타벅스] 카페 아메리카노 T', price: 4000 }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '구매 완료')
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
</style>
