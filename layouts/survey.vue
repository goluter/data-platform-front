<template>
  <div>
    <div class="header">
      <v-row>
        <v-col cols="1">
          <NuxtLink to="/list/" style="color: black; text-decoration-line: none">
            <img src="../assets/Arrow back ios.png"/>
          </NuxtLink>
        </v-col>
        <v-col cols="8">
          <b>상명대학교 학생들에게 묻습니다.</b>
        </v-col>
        <v-col cols="1">
          <img src="../assets/Ios share.png"/>
        </v-col>
        <v-col cols="1">
          <img src="../assets/Bookmark border.png"/>
        </v-col>
        <v-col cols="1">
          <img src="../assets/More vert.png"/>
        </v-col>
      </v-row>
    </div>
    <Nuxt />
    <div class="footer">
      <hr>
      <div class="d-flex ">
        <div class="pl-2 pt-2">
          <img src="../assets/mdi_thumb-up-outline.png"/>
        </div>
        <div class="pl-3 pt-2">
          <img src="../assets/Chat Bubble2.png"/>
        </div>
        <div class="survey_box rounded mt-1">
          <div class="pt-1 pl-2">
            설문 참여하기
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  max-width: 500px;
  font-family: DMSans;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
  width: 100%;
  background-color: white;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 95%;
  height: 40px;
  background-color: white;
  max-width: 500px;
  z-index: 3;
}
.survey_box{
  margin-left:auto;
  background-color: #30cdae;
  color : white;
  font-size: 13px;
  width: 100px;
  height: 30px;
}
</style>