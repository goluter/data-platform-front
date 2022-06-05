<template>
  <div class="wrapper">
    <v-container class="fill-height d-flex pa-0 align-content-space-between" style="background-color: #f0f0f0">
      <v-container class="">
        <v-row style="background-color: white">
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <store-items :store-data="storeData" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="auto">
                <b>최종 결제 포인트:</b>
              </v-col>
              <v-col class="ml-auto" cols="auto">
                <b class="sum">{{ sum() | comma }} P</b>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" />
        </v-row>
        <v-row style="background-color: white">
          <v-col cols="12">
            <b>결제 수단</b>
          </v-col>
          <v-col class="ma-auto" cols="12" sm="6" mb="6">
            <div class="payment-method d-flex flex-column">
              <div class="payment-method-name">
                <b>Govey 페이</b>
              </div>
              <div class="balance-box">
                <div class="balance">
                  <v-row>
                    <v-col class="pb-0" cols="auto">
                      소유 포인트:
                    </v-col>
                    <v-col class="ml-auto pb-0" cols="auto">
                      {{ balanceData | comma }} P
                    </v-col>
                  </v-row>
                </div>
                <div class="balance-after">
                  <v-row>
                    <v-col cols="auto">
                      결제 후 잔액:
                    </v-col>
                    <v-col class="ml-auto" cols="auto" style="color: white;">
                      {{ balanceData - sum() | comma }} P
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-row class="ma-auto">
        <v-col cols="12" class="place-order d-flex justify-center" style="background-color: #515151; color: white;">
          <b>{{ sum() | comma }} P 결제하기</b>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StoreItems from '../../components/StoreItems.vue'

export default {
  components: { StoreItems },
  data () {
    return {
      storeData: [
        { title: '[스타벅스] 카페 아메리카노 T', price: 4000 }
      ],
      balanceData: 324324
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '구매 확인')
  },
  methods: {
    sum: function () {
      let total = 0
      for (let i = 0; i < this.storeData.length; i++) {
        total += this.storeData[i].price
      }
      return total
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
.sum {
  color: #ed5e21;
}
.payment-method {
  justify-content: space-between;
  padding: 13px 16px;
  height: 170px;
  background-color: #05b1fb;
  border-radius: 10px;
}
.payment-method-name {
  font-size: 16px;
}
.balance-box {
  font-size: 12px;
}
.balance-after {
  color: white;
}
</style>
