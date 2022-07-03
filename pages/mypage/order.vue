<template>
  <v-container class="container" style=" background-color: #eee">
    <order-item :order-data="orderData" />
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
</style>
