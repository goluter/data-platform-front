<template>
  <div class="wrapper">
    <v-container class="upper-body">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="mx-auto" cols="auto">
              <div class="item-img" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-auto py-0" cols="auto">
              <span class="item-provider"> {{ itemData.provider }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-auto pt-1" cols="auto">
              <span class="item-name"> {{ itemData.name }} </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="pa-0" cols="12">
          <div class="item-activate d-flex">
            <span>아이템 사용</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemData: { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' }
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '아이템 상세')
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 48px);
}
.upper-body {
  height: calc(100% - 55px);
}
.item-img {
  margin: 3px;
  padding: 3px;
  width: 270px;
  height: 270px;
  background-color: #eee;
  border: #f0f0f0 solid 1px;
  border-radius: 15px;
}
.item-provider {
  font-size: 12px;
  color: #808080;
}
.item-name {
  font-size: 14px;
  font-weight: 600;
}
.item-activate {
  justify-content: center;
  align-items: center;
  height: 55px;
  background-color: #1a9efe;
  font-size: 16px;
  font-weight: 600;
  color: white;
}
</style>
