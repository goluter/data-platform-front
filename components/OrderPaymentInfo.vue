<template>
  <v-row class="mb-3" style="background-color: white;">
    <v-col cols="12">
      <v-row>
        <v-col cols="12">
          <span class="payment-info-title">결제 정보</span>
        </v-col>
      </v-row>
      <v-row class="price-sum">
        <v-col class="pa-5" cols="12">
          <v-row>
            <v-col cols="auto">
              총 상품금액
            </v-col>
            <v-col class="ml-auto" cols="auto">
              {{ paymentData.sum | comma }} P
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-1" cols="auto">
              <b>포인트 상품금액</b>
            </v-col>
            <v-col class="ml-auto pt-1" cols="auto">
              {{ paymentData.points | comma }} P
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
    paymentData: {
      type: Object
    }
  }
}
</script>

<style scoped>
.payment-info-title {
  font-size: 14px;
  font-weight: 600;
}
.price-sum {
  font-size: 12px;
}
</style>
