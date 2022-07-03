<template>
  <div class="wrap">
    <div>
        <div class="pt-4 pl-4 mb-3" style="color:#636363; font-size:10px">
            설문 결과
        </div>
        <div class="whitebox pt-3 pb-3">
            <center>
                <div class="pb-3">
                    <b>설문이 아직 진행 중이에요!</b>
                </div>
                <div class="d-flex justify-space-between downbox rounded-lg" >
                    <div class="pt-4 pl-2" style="color:#a4a4a4; font-size:12px;">
                        다운로드 하기 
                    </div>
                    <div class="pt-4 pr-2">
                        <img src="../assets/Vector_gray.png">
                    </div>
                </div>
            </center>
        </div>
        <div style="background-color:#eeeeee; height:300px;">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveydetaildownloaderrorPage',
  layout: 'survey',
  data () {
    return{
        modal : false,
    }
  }
}
</script>

<style scoped>
.wrap {
  background-color: #eeeeee;
  height: 100%;
}
.whitebox{
    background-color: white;
}
.downbox{ 
    width: 80%;
    background-color: #eeeeee;
    height: 50px;
}

.gray-box {
  background-color: gray;
  
}
</style>
