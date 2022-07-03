<template>
  <v-container>
    <v-row style="height: 80px; background-color: #eee">
      <v-col class="mx-auto my-auto" cols="auto">
        <span class="item-remained">사용 가능한 선물이 {{ itemsData.length }}개 남았어요.</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0" cols="12">
        <v-tabs v-model="tab" grow center-active>
          <v-tabs-slider color="teal accent-3" />
          <v-tab
            class="tab-title"
            style="color: black; font-weight: 600"
          >
            사용가능 {{ itemsData.length }}
          </v-tab>
          <v-tab
            class="tab-title"
            style="color: black; font-weight: 600"
          >
            사용완료 {{ usedItemsData.length }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="pa-3">
          <v-tab-item>
            <NuxtLink to="/mypage/item-detail-auth">
              <my-item :items-data="itemsData" />
            </NuxtLink>
          </v-tab-item>
          <v-tab-item>
            <NuxtLink to="/mypage/item-detail-used">
              <my-item :items-data="usedItemsData" />
            </NuxtLink>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MyItem from '../../components/MyItem.vue'
export default {
  components: { MyItem },
  data () {
    return {
      tab: null,
      itemsData: [
        { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' },
        { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' },
        { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' }
      ],
      usedItemsData: [
        { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '내 아이템')
  }
}
</script>

<style scoped>
.tab-title {
  color: black;
  font-weight: 600;
}
.item-remained {
  font-size: 16px;
  font-weight: 600;
}
</style>
