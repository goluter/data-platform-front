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
        <v-col cols="3">
          보상종류
        </v-col>
      </v-row>
    </div>
    <div class="gray-line">
    </div>
    <div v-if="tab1 == true">
      <div style="text-align:right;">
        최신순
      </div>
      <div class="mt-3">
        <v-row>
          <v-col cols="4">
            <div class="rounded-xl gray-box"></div>
          </v-col>
          <v-col cols="8">
            <v-row class="mt-1">
              상명대학교 학생들에게 물어봅니다.
            </v-row>
            <v-row>
              2022.01.12~2022.04.23
            </v-row>
            <v-row style="font-size:9px;" class="mt-15">
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
      tab3 : false
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