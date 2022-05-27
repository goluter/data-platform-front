<template>
  <v-container class="pa-0">
    <div class="wrapper">
      <div class="section">
        <div class="section-title-box">
          <h1 class="section-title">추천 설문</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">홍길동님이 좋아하실만한 설문을 준비했어요!</p>
      </div>
      <Carousels :carousel-data="carouselData"></Carousels>
      <Banner :banner-data="bannerData"
      ></Banner>
      <div class="section">
        <div class="section-title-box">
          <h1 class="section-title">인기 설문</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">지금 핫한 설문이에요. 한번 살펴보세요!</p>
      </div>
      <div>
        <NuxtLink to="/" style="color: black; text-decoration-line: none">
          <div
              class="rounded-xl ml-5 mr-5"
              style="
            background-color: white;
            border: 1px solid black;
            height: 110px;
            position: relative;
            z-index: 2;
          "
          >
            <v-row>
              <v-col cols="3">
                <div class="rounded-xl ma-2 gray-box"></div>
              </v-col>
              <v-col cols="9">
                <v-row class="mt-1" justify="start" style="font-size: 14px">
                  <v-col><b>대학생들에게 묻습니다</b></v-col>
                </v-row>
                <v-row justify="end" class="mr-1" style="font-size: 10px"
                >4일 남음</v-row
                >
                <v-row style="font-size: 10px" justify="space-between">
                  <v-col cols="6">110명이 참여 중입니다.</v-col>
                  <v-col class="" cols="6">#대학생 #새내기 #축제</v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div
              class="rounded-xl ml-5 mr-5"
              style="
            background-color: #494949;
            position: relative;
            top: -50px;
            height: 80px;
            z-index: 1;
          "
          >
            <div
                style="position: absolute; bottom: 2px; color: white"
                class="ml-5 d-flex"
            >
              <div
                  class="rounded-xl pl-2 pr-2"
                  style="background-color: white; color: black"
              >
                <img src="../assets/giftbox 2.png" /> 스타벅스
              </div>
              <div
                  class="rounded-xl pl-2 pr-2 ml-2"
                  style="background-color: white; color: black"
              >
                <img src="../assets/coin 2.png" /> 100P
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="/" style="color: black; text-decoration-line: none">
          <div
              class="rounded-xl ml-5 mr-5"
              style="
            background-color: white;
            border: 1px solid black;
            height: 110px;
            position: relative;
            z-index: 2;
          "
          >
            <v-row>
              <v-col cols="3">
                <div class="rounded-xl ma-2 gray-box"></div>
              </v-col>
              <v-col cols="9">
                <v-row class="mt-1" justify="start" style="font-size: 14px">
                  <v-col><b>대학생들에게 묻습니다</b></v-col>
                </v-row>
                <v-row justify="end" class="mr-1" style="font-size: 10px"
                >4일 남음</v-row
                >
                <v-row style="font-size: 10px" justify="space-between">
                  <v-col cols="6">110명이 참여 중입니다.</v-col>
                  <v-col class="" cols="6">#대학생 #새내기 #축제</v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div
              class="rounded-xl ml-5 mr-5"
              style="
            background-color: #494949;
            position: relative;
            top: -50px;
            height: 80px;
            z-index: 1;
          "
          >
            <div
                style="position: absolute; bottom: 2px; color: white"
                class="ml-5 d-flex"
            >
              <div
                  class="rounded-xl pl-2 pr-2"
                  style="background-color: white; color: black"
              >
                <img src="../assets/giftbox 2.png" /> 스타벅스
              </div>
              <div
                  class="rounded-xl pl-2 pr-2 ml-2"
                  style="background-color: white; color: black"
              >
                <img src="../assets/coin 2.png" /> 100P
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
            to="/surveymaker/"
            style="color: black; text-decoration-line: none"
        >
          <div class="black rounded-xl ma-5" style="color: white">
            <v-row class="ml-4">
              <v-col cols="1"
              ><img src="../assets/Collections bookmark.png"
              /></v-col>
              <v-col cols="3"> 가이드</v-col>
              <v-col>#보상 #기프티콘 #개이득</v-col>
            </v-row>
            <v-row class="ml-4">
              <v-col>더 재미있게 즐길 수 있도록 모아놨어요!</v-col>
            </v-row>
          </div>
        </NuxtLink>
      </div>
      <div class="ma-5">
        <v-row justify="space-between">
          <v-col cols="auto"><h1>이벤트</h1></v-col>
          <NuxtLink to="/" style="color: black; text-decoration-line: none">
            <v-col cols="auto">더보기</v-col>
          </NuxtLink>
        </v-row>
        <v-row>
          <v-col>다양한 이벤트를 준비중이예요.</v-col>
        </v-row>
      </div>
      <NuxtLink to="/" style="color: black; text-decoration-line: none">
        <div class="purple rounded-xl ma-5" style="color: white">
          <v-row class="ml-5">
            <v-col>이벤트 1</v-col>
          </v-row>
          <v-row class="ml-5">
            <v-col>이벤트 입니다.</v-col>
          </v-row>
        </div>
      </NuxtLink>
      <NuxtLink to="/" style="color: black; text-decoration-line: none">
        <div class="blue rounded-xl ma-5" style="color: white">
          <v-row class="ml-5">
            <v-col>이벤트 1</v-col>
          </v-row>
          <v-row class="ml-5">
            <v-col>이벤트 입니다.</v-col>
          </v-row>
        </div>
      </NuxtLink>
      <div class="ma-5">
        <v-row justify="space-between">
          <v-col cols="auto"><h1>공지사항</h1></v-col>
          <NuxtLink to="/" style="color: black; text-decoration-line: none">
            <v-col cols="auto">더보기</v-col>
          </NuxtLink>
        </v-row>
        <v-row>
          <v-col>각종 소식을 알려드려요!</v-col>
        </v-row>
      </div>
      <div class="ma-5">공지사항1</div>
      <div class="ma-5">공지사항2</div>
      <div class="ma-5">공지사항3</div>

      <br />
      <br />
      <br />
    </div>
  </v-container>
</template>

<script>
import Carousels from "../components/Carousels.vue";
import Banner from "../components/Banner.vue"

export default {
  name: 'IndexPage',
  components: {Banner, Carousels},
  data() {
    return{
      carouselData: [
        {target: '2022 대학생들에게 묻습니다!', surveyor: '상명대학교', count: 1234, color:'indigo accent-4'},
        {target: '2022 직장인들에게 묻습니다!', surveyor: '상명대학교', count: 2345, color:'#ed2121'},
        {target: '2022 구직자들에게 물어봅니다!', surveyor: '상명대학교', count: 3456, color:'pink accent-2'}
      ],
      bannerData: [
        { title: '설문 등록', msg: '지금 등록하시면 1000P 를 바로 적립해드려요!' }
      ],
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 24px;
  padding-left: 24px;
}
.section {
  width: 100%;
  height: 55px;
}
.section-title-box {
  display: flex;
  justify-content: space-between;
}
.section-title {
  font-size: 20px;
}
.section-more {
  margin-top: 8px;
  text-decoration: none;
  color: black;
  font-size: 15px;
}
.section-desc {
  font-size: 15px;
}
.gray-box {
  background-color: gray;
  width: 70px;
  height: 75px;
}
</style>
