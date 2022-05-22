<template>
<div class="wrap">
    <Header/>
    <div class="gray_box"></div>
      <v-tabs style="width:100%;" fixed-tabs >
        <v-tab
        @click="
        tab1=true
        tab2=false
        tab3=false
        ">설문 항목</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=true
        tab3=false
        ">보상 결과</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=false
        tab3=true
        ">리포트</v-tab>
      </v-tabs>
    <div v-if="tab1 == true">
        <div class="d-flex">
            <div class=" rounded mt-5 ml-5 gray_box2">
                <div class="pt-1" style="font-size:13px;">
                    항목
                </div>
                <div class="pt-1" style="font-size:13px;">
                    총 34개
                </div>
                <div class="pt-1" style="font-size:8px;">
                    자세히 보기
                </div>
            </div>
            <div class=" rounded mt-5 ml-3 gray_box2">
                <div class="pt-1" style="font-size:13px;">
                    회원 유형
                </div>
                <div class="pt-1" style="font-size:13px;">
                    34% 일반 회원
                </div>
                <div class="pt-1" style="font-size:8px;">
                    자세히 보기
                </div>
            </div>
        </div>
        <div v-for="(list,i) in 3" :key="list" class="pt-3">
            <div class="rounded white_box pt-4">
                {{quelists[i]}}
            </div>
        </div>
        <div class="rounded ma-3 pt-2 gray_box3">
            <v-row>
            <v-col cols="10">
                설문 항목 전체 보기
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2" class="pl-8">
                <img src="../assets/right Arrow.png"/>
            </v-col>
            </v-row>
        </div>
    </div>
</div>





</template>

<script>
import Header from '/layouts/survey_header.vue'


export default {
  name: 'surveydetail2-Page',
  layout: 'DefaultLayout',
  data(){
      return{
        tab1 : true,
        tab2 : false,
        tab3 : false,
        quelists : ["1.비대면 후 가장 기대되는 학교 활동은?", "2.학교행정에 만족 하시나요?","3.블라블라블라"]
      }
  },
  components: {
    Header
  }
}
  

</script>

<style>
.wrap {
  max-width: 500px;
  font-family: DMSans;
 
}

.gray_box{
    width:100%; 
    height:20px;
    background-color: #eeeeee;
}
.gray_box2{
    height: 80px;
    width: 100px;
    text-align: center;
    background-color: #eeeeee;
}
.gray_box3{
    background-color: #eeeeee;
}
.white_box{
    border : 1px solid black;
    height: 60px;
    
}

</style>