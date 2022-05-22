<template>
<div class="wrap">
    <Header/>
    <div>
        <v-row>
            <v-col>진행중인 설문</v-col>
            <v-col>#대학생 #새학기 #축제</v-col>
        </v-row>
        <v-row>
            <v-col><h2>상명대학교 학생들에게 묻습니다.</h2></v-col>
        </v-row>
        <v-row>
            <v-col>설문기간 : 000~000</v-col>
        </v-row>
        <v-row justify="start">
            <v-col cols="3">
                <img src="../assets/Thumbs Up.png"/><span style="font-size:10px;">14,423</span>
            </v-col>
            <v-col cols="3">
                <img src="../assets/Inspection.png"/> <span style="font-size:10px;">14,423</span>
            </v-col>
            <v-col cols="3">
                <img src="../assets/File download.png"/> <span style="font-size:10px;">14,423</span>
            </v-col>
            <v-col cols="3">
                <img src="../assets/Chat Bubble.png"/><span style="font-size:10px;">14,423</span>
            </v-col>
        </v-row>   
    </div>
    <div class="black_box mt-3">
        <div class="d-flex">
            <div class="white rounded mt-5 ml-5 white_box">
                <b>보상</b>
                <br>
                <span style="font-size:10px;">110,430포인트 + 1</span>
            </div>
            <div class="white rounded mt-5 ml-3 white_box">
                <b>자격요건</b>
                <br>
                <span style="font-size:10px;">모든 회원</span>
            </div>
        </div>
    </div>
    <div class="gray_box">
        <div class="pt-2 pl-2">
            설문자 정보
        </div>
    </div>
    <div style="height:80px;">
        상명대학교
    </div>
    <div class="gray_box">
        <div class="pt-2 pl-2">
            설문 정보
        </div>
    </div>
    <div style="height:80px;">
        블라블라블라 
         <div class="rounded ma-5 gray_box2">
            <v-row>
            <v-col cols="10">
                서베이 정보 자세히 보기
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
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
  name: 'surveydetail-Page',
  layout: 'DefaultLayout',
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
.black_box{
    background-color: #626262;
    width: 100%;
    height: 100px;
}
.white_box{
    height: 60px;
    width: 100px;
    text-align: center;
}
.gray_box{
    width:100%; 
    height:40px;
    background-color: #eeeeee;
}
.gray_box2{
    background-color: #eeeeee;
}

</style>