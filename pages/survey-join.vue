<template>
  <div class ="container">
    <div class="green-box rounded-t-lg"></div>
    <div class="title-box rounded-b-lg">
      <div class="pa-5">
        <b>상명대 대학생 설문조사</b>
      </div>
    </div>
    <div class="answer-box mt-5 rounded-lg">
      <div class="ma-2 pt-3">
        <h3>상명대 축제에 싸이 오는 것에 찬성하시나요?</h3> 
      </div>
      <div class="mt-3 ml-3">
        <v-radio-group
          v-model="check1">
          <v-radio
            value="찬성"
          >
          <template v-slot:label>
            <b>찬성</b>
          </template></v-radio>
          <v-radio
            value="반대"
            class="pt-2"
          >
          <template v-slot:label>
            <b>반대</b>
          </template></v-radio>
        </v-radio-group>
      </div>
      <div v-if="check1 == null" class="ml-3 pb-3 hide-box">
        답변이 필요한 질문이에요!
      </div>
    </div>
    <div class="answer-box mt-5 rounded-lg">
      <div class="ma-2 pt-3">
        <h3>축제가 오후 6시에 시작하는 것에 찬성하시나요?</h3> 
      </div>
      <div class="mt-3 ml-3">
        <v-radio-group
          v-model="check2">
          <v-radio
            value="찬성"
          >
          <template v-slot:label>
            <b>찬성</b>
          </template></v-radio>
          <v-radio
            value="반대"
            class="pt-2"
          >
          <template v-slot:label>
            <b>반대</b>
          </template></v-radio>
        </v-radio-group>
      </div>
      <div v-if="check2 == null" class="ml-3 pb-3 hide-box">
        답변이 필요한 질문이에요!
      </div>
    </div>
    <div class="response-box d-flex justify-center align-center">
      <div style="font-size: 18px; color:#eeeeee;">
        0/2 응답 (0.0%)
      </div>
    </div>   
  </div>
</template>

<script>


export default {
  name: 'SurveyJoin-Page',
  layout: 'empty',
  data() {
    return{
      title : ['상명대 축제에 싸이 오는 것에 찬성하시나요?', '축제가 오후 6시에 시작하는 것에 찬성하시나요?'],
      answer : ['찬성','반대'],
      check1 : null,
      check2 : null
    }
  },
 
  
}
</script>

<style scoped>
  .container{
    max-width: 500px;
    background-color: #eeeeee;
    height: 800px;
    position: relative;
  }
  .green-box{
    background-color: #1cddb7;
    height: 10px;
  }
  .title-box{
    background-color: #ffffff;
    font-size: 20px;
  }
  .answer-box{
    background-color: #ffffff;
  }
  .hide-box{
    color: #e43e3e;
  }
  .response-box{
    background-color : #68c9ff;
    position: absolute;
    bottom: 0;
    height: 60px;
    font-size: 20px;
    width: 95%;
    
  }
</style>