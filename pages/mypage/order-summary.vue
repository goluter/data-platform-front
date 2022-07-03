<template>
  <v-container>
    <order-item :order-data="orderData" />
    <order-payment-info :payment-data="paymentData" />
  </v-container>
</template>

<script>
import OrderItem from '../../components/OrderItem.vue'
import OrderPaymentInfo from '../../components/OrderPaymentInfo.vue'
export default {
  components: { OrderPaymentInfo, OrderItem },
  data () {
    return {
      orderData: [
        { date: '2022.06.01 12:42:12', name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스', count: 1, price: 4000 }
      ],
      paymentData: { sum: 324324, points: 324324 }
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '구매 상세')
  }
}
</script>

<style scoped>
.container {
  height: calc(100% - 48px);
  background-color: #eee;
}
</style>
