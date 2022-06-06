<template>
  <div class="wrapper">
    <v-container class="fill-height d-flex pa-0 align-content-space-between" style="background-color: #f0f0f0">
      <v-container>
        <v-row style="height: 140px; background-color: white">
          <v-col cols="12" style=" font-size: 12px;">
            <v-row>
              <v-col class="" cols="12">
                <b>결제 유의사항</b>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0" cols="12">
                <p>- 결제 후 환불이 불가합니다.</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" />
        </v-row>
        <v-row style="background-color: white">
          <v-col cols="12" style="font-size: 12px;">
            <b>주문 내용 및 결제조건을 확인했으며, 결제 진행에 동의합니다.</b>
          </v-col>
        </v-row>
      </v-container>
      <v-row class="ma-auto">
        <v-col cols="12">
          <v-row>
            <v-col cols="10" sm="4" md="4" class="ma-auto d-flex justify-center" style="background-color: #515151; border-radius: 5px;">
              <NuxtLink to="/store/pay/completed/" style="text-decoration: none; color: white;">
                <b>구매 확정</b>
              </NuxtLink>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-center" style="font-size: 12px;">
              <NuxtLink to="/store/" style="text-decoration: none; color: black;">
                <b>취소하기</b>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '구매 확정')
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
</style>
