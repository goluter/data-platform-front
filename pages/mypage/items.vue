<template>
  <v-container>
    <v-row>
      <v-col class="mx-auto" cols="auto">
        <span>사용 가능한 선물이 개 남았어요.</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-tabs v-model="tab" grow center-active>
          <v-tab
            v-for="(item, i) in tabsData"
            :key="i"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <my-item :items-data="itemsData" />
          </v-tab-item>
          <v-tab-item>
            test
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
      tabsData: ['사용가능', '사용완료'],
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

</style>
