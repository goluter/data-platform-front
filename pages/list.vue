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
      <v-row justify="start">
        <v-col cols="2">
          <div class="gray-sbox">
            #태그
          </div>
        </v-col>
        <v-col cols="2">
          <div class="gray-sbox">
            #태그
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          검색
        </v-col>
        <v-col cols="4">
          <v-autocomplete
            v-model="a"
            filled
            rounded
            solo
            dense
            :items="b"
            label="보상종류"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </div>
    <div class="gray-line">
    </div>
    <div v-if="tab1 == true">
      <div class="mt-3 d-flex justify-end">
        <div style="width:30%;">
        <v-autocomplete
        v-model="automodel"
        filled
        rounded
        dense
        :items="auto_models"
        ></v-autocomplete>
        </div>
      </div>
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
      automodel : "최신순",
      auto_models:["최신순","참여순","포인트순"],
      a : null,
      b : ["포인트","기프티콘"]
    }
  },
  
  componets:{
    
  }
}
</script>

<style>
.wrap{
    max-width: 500px;
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
</style>