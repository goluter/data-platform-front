<template>
  <div class="wrap">
        <div class="black-bg" v-if="modal1 == true">
            <div class="white-bg">
                <div class="d-flex justify-space-between">
                    <div>
                    </div>
                    <div class="pt-1">
                        <b>설문 다운로드</b>
                    </div>
                    <div @click="modal1 = false">
                        <img src="../assets/carbon_close.png">
                    </div>
                </div>
                <div class="d-flex">
                    <div class="rounded-xl gray-box col-4"></div>
                    <div class="col-8" style="font-size:12px;">
                        <div>
                            <b>상명대학교 학생들에게 물어봅니다.</b>
                        </div>
                        <div>
                            <b>2022.01.12~2022.04.23</b>
                        </div>
                        <div class="pt-8 d-flex" style="font-size:10px;">
                            <div style="color:rgba(115, 115, 115, 0.87);">
                                114,300명이 참여 중입니다.
                            </div>
                            <div  style="color:rgba(37, 144, 222, 0.87);">
                                #대학생 #새학기
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="pt-5" style="color:rgba(115, 115, 115, 0.87);">
                    다운로드 용도(선택)
                    <v-textarea
                    filled
                    label="내용을 입력해주세요."></v-textarea>
                </div>
                <div>
                   <v-checkbox>
                    <template v-slot:label >
                        <span style="font-size:12px;">올바른 문화를 위한 <span style="color:#1087f4;">데이터 다운로드 약관</span>에 동의합니다.</span>
                    </template> 
                    </v-checkbox> 
                </div>
                <center>
                    <v-btn
                    color="#30cdae"
                    @click="modal1 = false, modal2 = true">
                        다운로드
                    </v-btn>
                </center>
            </div>
        </div>
        <div class="black-bg" v-if="modal2 == true">
            <div class="white-bg">
                <div class="d-flex justify-space-between">
                    <div>
                    </div>
                    <div class="pt-1">
                        <b>설문 다운로드</b>
                    </div>
                    <div @click="modal2 = false">
                        <img src="../assets/carbon_close.png">
                    </div>
                </div>
                <center>
                    <div class="pt-10">
                        <img src="../assets/ant-design_check-circle-twotone.png">
                    </div>
                    <div style="font-size:20px;" class="pt-5 pb-5">
                        <b>다운로드 신청을 완료했습니다.</b>
                    </div>
                    <div class="pt-3 pb-3 downloadbox" >
                        <b>다운로드 내역 바로가기</b>
                    </div>
                </center>
            </div>
        </div>
    <div>
        <div class="pt-4 pl-4 mb-3" style="color:#636363; font-size:10px">
            설문 결과
        </div>
        <div class="whitebox pt-3 pb-3">
            <center>
                <div class="d-flex justify-space-between downbox rounded-lg" @click="modal1 = true">
                    <div class="pt-4 pl-2" style="color:white; font-size:12px;">
                        다운로드 하기 
                    </div>
                    <div class="pt-4 pr-2">
                        <img src="../assets/Vector_white.png">
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
  name: 'SurveydetaildownloadPage',
  layout: 'survey',
  data () {
    return{
        modal1 : false,
        modal2 : false
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
    background-color: #1a9efe;
    height: 50px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
.gray-box {
  background-color: gray;
  
}
.downloadbox{
    border: 1px solid #d9d9d9;
    width: 60%;
}
</style>
