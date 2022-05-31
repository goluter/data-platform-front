<template>
  <div class="wrap">
    <div class="gray_box" />
    <v-tabs style="width: 100%; color: black" fixed-tabs color="#1cddb7">
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = true
          tab2 = false
          tab3 = false
        "
      >
        <b>설문 항목</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = true
          tab3 = false
        "
      >
        <b>보상 결과</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = false
          tab3 = true
        "
      >
        <b>리포트</b>
      </v-tab>
    </v-tabs>
    <div v-if="tab1 == true">
      <div class="d-flex">
        <div class="rounded mt-5 ml-5 gray_box2">
          <div class="pt-1" style="font-size: 13px">
            <b>항목</b>
          </div>
          <div class="pt-1" style="font-size: 13px">
            <b>총 34개</b>
          </div>
          <div class="pt-1" style="font-size: 8px">
            자세히 보기
          </div>
        </div>
        <div class="rounded mt-5 ml-3 gray_box2">
          <div class="pt-1" style="font-size: 13px">
            <b>회원 유형</b>
          </div>
          <div class="pt-1" style="font-size: 13px">
            <b>34% 일반 회원</b>
          </div>
          <div class="pt-1" style="font-size: 8px">
            자세히 보기
          </div>
        </div>
      </div>
      <div v-for="(list, i) in 3" :key="list" class="pt-3">
        <div class="rounded-lg white_box pt-4 pl-3">
          {{ quelists[i] }}
        </div>
      </div>
      <div class="rounded-lg ma-3 pt-2 gray_box3">
        <v-row>
          <v-col cols="10">
            설문 항목 전체 보기
          </v-col>
          <v-spacer />
          <v-col cols="2" class="pl-8">
            <img src="../assets/right Arrow.png">
          </v-col>
        </v-row>
      </div>
      <div class="black rounded-xl ma-5" style="color: white; height: 100px">
        <div class="pt-5 pl-5" style="font-size: 20px">
          배너
        </div>
      </div>
    </div>
    <div v-if="tab2 == true">
      <div class="pl-5 pt-3">
        <h4>이 설문은 총 2개의 보상이 있습니다!</h4>
      </div>
      <div class="rounded ma-5 gray_box4">
        <div class="d-flex pt-2">
          <div class="pl-2">
            <b>포인트 3,000</b>
          </div>
          <div style="margin-left: auto; font-size: 12px" class="pr-2">
            자세히 보기
          </div>
        </div>
        <div class="d-flex pt-3">
          <div class="pl-2">
            <b>전달 완료된 보상이에요!</b>
          </div>
          <div style="margin-left: auto" class="pr-2">
            <img src="../assets/akar-icons_circle-check.png">
          </div>
        </div>
      </div>
      <div class="rounded ma-5 gray_box4">
        <div class="d-flex pt-2">
          <div class="pl-2">
            <b>기프티콘 300개</b>
          </div>
          <div style="margin-left: auto; font-size: 12px" class="pr-2">
            자세히 보기
          </div>
        </div>
        <div class="d-flex pt-3">
          <div class="pl-2">
            <b>아직 대기 중인 보상이에요!</b>
          </div>
          <div style="margin-left: auto" class="pr-2">
            <img src="../assets/bx_time-five.png">
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab3 == true">
      <div class="pl-5 pt-3">
        <h4>총 N개의 리포트가 있습니다.</h4>
      </div>
      <div class="rounded ma-5 gray_box4">
        <div class="d-flex pt-2">
          <div class="pl-2">
            <b>상명대 학생들에 대한 탐구</b>
          </div>
          <div style="margin-left: auto; font-size: 12px" class="pr-2">
            자세히 보기
          </div>
        </div>
        <div class="d-flex pt-3">
          <div class="pl-2">
            <b>작성일: 2022.04.23</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Surveydetail2Page',
  layout: 'survey',
  data () {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      quelists: [
        '1.비대면 후 가장 기대되는 학교 활동은?',
        '2.학교행정에 만족 하시나요?',
        '3.블라블라블라'
      ]
    }
  }
}
</script>

<style scoped>
.wrap {
  max-width: 500px;
  font-family: DMSans;
}

.gray_box {
  width: 100%;
  height: 20px;
  background-color: #eeeeee;
}
.gray_box2 {
  height: 80px;
  width: 100px;
  text-align: center;
  background-color: #eeeeee;
}
.gray_box3 {
  background-color: #eeeeee;
}
.gray_box4 {
  background-color: #eeeeee;
  height: 80px;
}
.white_box {
  border: 1px solid black;
  height: 60px;
}
</style>
