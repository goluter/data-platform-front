<template>
  <div class="wrapper">
    <v-container class="fill-height d-flex pa-0 align-content-space-between" style="background-color: #f0f0f0">
      <v-container>
        <v-row>
          <v-col class="pa-0" cols="12">
            <div class="item-img" />
          </v-col>
        </v-row>
        <v-row style="background-color: white;">
          <v-col class="d-flex flex-column" cols="12">
            <div class="title-wrapper">
              <p><b>{{ item.title }}</b></p>
              <p><b>{{ item.price | comma }}</b> P</p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" />
        </v-row>
        <v-row style="min-height: 300px; background-color: white;">
          <v-col class="pa-0 pl-2" cols="auto">
            <div class="item-desc">
              <br>{{ item.desc }}
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-center" cols="12" style="background-color: #515151;">
            <NuxtLink to="/store/cart/" style="text-decoration: none; color: white">
              <b>구매하기</b>
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      item: {
        title: '[스타벅스] 카페 아메리카노 T',
        price: 12000,
        desc: '상품설명\n - 스타벅스의 깔끔한 커피\n\n 유의사항\n - 본 상품은 매장 재고 상황에 따라 동일 상품으로 교환이 불가할 수 있습니다.'
      }
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '상품 상세')
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
.title-wrapper {
  margin-top: 16px;
  align-items: center;
}
.item-img {
  height: 205px;
  background-color: #faf6f2;
}
.item-desc {
  white-space: pre-wrap;
  font-size: 12px;
}
</style>
