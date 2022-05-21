<template>
  <v-container fluid class="wrap">
    <div>
      <v-tabs style="width:100%" fixed-tabs >
        <v-tab
        @click="
        tab1=true
        tab2=false
        tab3=false
        ">예정</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=true
        tab3=false
        ">진행중</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=false
        tab3=true
        ">마감</v-tab>
      </v-tabs>
    </div>
    <div class="gray-line">
    </div>
    <div class="ma-2">
      <v-row class="mt-5">
        <v-col cols="5">
          <v-autocomplete
            v-model="tag_model"
            filled
            rounded
            solo
            dense
            :items="tag_models"
            label="태그"
          ></v-autocomplete>
        </v-col>
        <v-col cols="5">
          <v-autocomplete
            v-model="gift_model"
            filled
            rounded
            solo
            dense
            :items="gift_models"
            label="보상종류"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </div>
    <div class="gray-line">
    </div>
    <div v-if="tab1 == true">
      <div class="mt-3 d-flex justify-end">
        <div style="width:35%;">
        <v-autocomplete
        v-model="auto_model"
        filled
        rounded
        dense
        :items="auto_models"
        ></v-autocomplete>
        </div>
      </div>
      <div v-for="(list,i) in 5" :key="list">
        <div class="mt-3" style="position:relative;">
          <v-row>
            <v-col cols="4">
              <div class="rounded-xl gray-box"></div>
            </v-col>
            <v-col cols="6" >
              <v-row class="mt-1">
                상명대학교 학생들에게 물어봅니다.
              </v-row>
              <v-row>
                2022.01.12~2022.04.23
              </v-row>
              <v-row style="font-size:9px; position:absolute; bottom:25px;" >
                <div class="mr-7">
                  114,300명이 참여 중입니다.
                </div>
                <div>
                  #대학생 #새학기 #축제
                </div>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <div class="blue_box mt-2"></div>
      </div>
    </div>
  </v-container>
</template>


<script>


export default {
  name: 'list-Page',
  layout: 'DefaultLayout',
  data(){
    return{
      tab1 : true,
      tab2 : false,
      tab3 : false,
      auto_model : "최신순",
      auto_models:["최신순","참여순","포인트순"],
      gift_model : null,
      gift_models : ["포인트","기프티콘"],
      tag_model : null,
      tag_models : ["대학생","사회생활","코딩"]
    }
  },
  
  componets:{
    
  }
}
</script>

<style>
.wrap{
    max-width: 450px;
}
.gray-line{
  width:100%;   
  height:20px; 
  background-color:lightgray;
}
.gray-box{
  background-color: gray;
  width: 100%;
}
.gray-box:after{
  content:"";
  display:block;
  padding-bottom:100%;
}
.gray-sbox{
  background-color:lightgray;
}
.blue_box{
  background-color: #83e0fd;
  height: 41px;
  widows: 100%;
}
</style>