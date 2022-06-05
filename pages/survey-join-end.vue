<template>
  <div class ="container">
    <div class="green-box rounded-t-lg"></div>
    <div class="title-box rounded-b-lg">
      <div class="pa-5">
        <b>상명대 대학생 설문조사</b>
      </div>
    </div>
    <div class="pt-5 pl-3">
        소중한 의견 정말 감사드립니다!
    </div>
    <div class="pt-8 pl-3">
        <b>설문결과는 예외없이 무료로 오픈하고 있으며, 함께 쌓은 데이터가 값진 곳에
        쓰일 수 있도록 노력하겠습니다.</b>
    </div>
    
    <div class="response-box d-flex justify-center align-center">
      <div style="font-size: 18px; color:#eeeeee;">
        설문 상세로 돌아가기
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
  .response-box{
    background-color : #68c9ff;
    position: absolute;
    bottom: 0;
    height: 60px;
    font-size: 20px;
    width: 95%;
  }
</style>