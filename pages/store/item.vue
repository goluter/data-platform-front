<template>
  <div class="wrapper">
    <v-container
      class="fill-height d-flex pa-0 align-content-space-between"
      style="background-color: #f0f0f0"
    >
      <v-container>
        <v-row>
          <v-col class="pa-0" >
              <img :src= "item.imageUrl" width="80%" >  
          </v-col>
        </v-row>
        <v-row style="background-color: white">
          <v-col class="d-flex flex-column" cols="12">
            <div class="title-wrapper">
              <p>
                <b>{{ item.name }}</b>
              </p>
              <p>
                <b>{{ item.price | comma }}</b> P
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" />
        </v-row>
        <v-row style="min-height: 300px; background-color: white">
          <v-col class="pa-0 pl-2" cols="auto">
            <div class="item-desc"><br />
            <h3>상품설명</h3><br />
            -{{ item.description }} <br /><br />
            <h3>유의사항</h3> <br />
            -{{item.notice }}</div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            class="d-flex justify-center"
            cols="12"
            style="background-color: #515151"
            @click ="check"
          >
            
              <b style="color: white">구매하기</b>
            
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      item: {}
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '상품 상세')
  },
   created () {
    this.fetchData(this.$route.query.id)
    
  },
  methods: {
    fetchData (id) {
      axios.get(
        'https://api.govey.app/users/v1/store-items/'+
        id 
          
      )
      .then((res) => {
        this.item = res.data
      })
      .catch((err) =>{
        console.log(err)
      })
    },
    check(event){
      alert("포인트가 부족합니다.")
    }
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
