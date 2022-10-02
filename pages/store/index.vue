<template>
  <div>
    <v-container>
      <v-row>
        <v-col />
        <v-col class="ml-auto" cols="auto">
          <span class="purchase-history">구매내역</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex" cols="12" style="height: 65px; background-color: #d7f5ff">
          <div class="guide">
            <span>적립 방법 알아보기</span>
            <v-icon>
              mdi-chevron-right
            </v-icon>
          </div>
        </v-col>
      </v-row>
      
        <v-container v-for="(item, i) in storeData" :key="i" class="pa-0">
          <NuxtLink 
          :to="{path: 'item', query: { id: item.id }}" 
          style="text-decoration: none; color: initial;">
            <v-row class="pa-3">
              <v-col class="d-flex justify-center" cols="3" md="2">
                
                <img :src= "item.imageUrl" width="80%">
                
              </v-col>
              <v-col
                class="pa-auto"
                cols="9"
                md="10"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                "
              >
                <span class="item-title">
                  
                [{{category}}]  {{ item.name }}
                </span>
                <span class="item-price"> {{ item.price | comma }} P </span>
              </v-col>
            </v-row>
            <v-divider v-if="storeData.length > 1" />
          </NuxtLink>
        </v-container>
      
    </v-container>
  </div>
</template>

<script>
import StoreItems from '../../components/StoreItems.vue'
import axios from 'axios'

export default {
  components: { StoreItems },
  layout: 'main',
  data () {
    return {
      page : 0,
      limit:10,
      storeData: []
    }
  },
  created () {
    this.fetchData(this.page, this.limit)
  },
  methods: {
    fetchData(page,limit){
      axios.get(
        'https://api.govey.app/users/v1/store-items/page?page=' +
        this.page +
        '&limit='+
        this.limit
      )
      .then((res) => {
        this.storeData = res.data.content
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  },
}
</script>

<style scoped>
.purchase-history {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #1087f4;
}
.guide {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
}
.image {
  padding: 3%;
  width: 60px;
  height: 60px;
  border: #f0f0f0 solid 1px;
  border-radius: 50%;
}
.item-title {
  display: block;
  font-size: 12px;
  font-weight: 600;
}
.item-price {
  font-size: 12px;
}
</style>
