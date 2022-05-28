<<<<<<< HEAD
<template></template>

<script>
export default {
  name: 'index',
  layout: 'DefaultLayout',

  componets: {},
}
</script>

<style></style>
=======
<template>
  <v-container class="pa-0">
    <div class="wrapper">
      <div class="section" style="margin-top: 25px;">
        <div class="section-title-box">
          <h1 class="section-title">추천 설문</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">홍길동님이 좋아하실만한 설문을 준비했어요!</p>
      </div>
      <Carousels :carousel-data="carouselData"></Carousels>
      <Banner :banner-data="bannerData[0]"
      ></Banner>
      <div class="section">
        <div class="section-title-box">
          <h1 class="section-title">인기 설문</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">지금 핫한 설문이에요. 한번 살펴보세요!</p>
      </div>
      <SurveyBox :survey-data="surveyData"></SurveyBox>
      <Banner :banner-data="bannerData[1]"
      ></Banner>
      <div class="section">
        <div class="section-title-box">
          <h1 class="section-title">이벤트</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">다양한 이벤트를 진행중이에요</p>
      </div>
      <EventBanner :event-data="eventData"></EventBanner>
      <div class="section">
        <div class="section-title-box">
          <h1 class="section-title">공지사항</h1> <a class="section-more" href="">더보기</a>
        </div>
        <p class="section-desc">새로운 소식을 알려드려요</p>
      </div>
      <NoticeBanner :notice-data="noticeData"></NoticeBanner>
    </div>
  </v-container>
</template>

<script>
import Carousels from "../components/Carousels.vue";
import Banner from "../components/Banner.vue"
import SurveyBox from "../components/SurveyBanner.vue";
import EventBanner from "../components/EventBanner.vue";
import NoticeBanner from "../components/NoticeBanner.vue";

export default {
  name: 'IndexPage',
  components: {NoticeBanner, EventBanner, SurveyBox, Banner, Carousels},
  data() {
    return{
      carouselData: [
        {target: '2022 대학생들에게 묻습니다!', surveyor: '상명대학교', count: 1234, color:'indigo accent-4'},
        {target: '2022 직장인들에게 묻습니다!', surveyor: '상명대학교', count: 2345, color:'#ed2121'},
        {target: '2022 구직자들에게 물어봅니다!', surveyor: '상명대학교', count: 3456, color:'pink accent-2'}
      ],
      bannerData: [
        { title: '설문 등록', msg: '지금 등록하시면 1000P 를 바로 적립해드려요!', icon: 'mdi-vote', to: '/surveymaker' },
        { title: '가이드', msg: '더 재미있게 즐기실 수 있도록 가이드를 모아봤어요!', icon: 'mdi-bookmark-box-multiple', to: '/' }
      ],
      surveyData: [
        { title:'대학생들에게 묻습니다', left:'4', count:'114,300', tags: ['대학생', '새내기', '축제'], rewards: [{title: '스타벅스', icon: 'mdi-gift', color: 'red'}, {title: '100P', icon: 'mdi-circle-multiple', color: 'yellow darken-3'}] },
        { title:'대학생들에게 묻습니다', left:'4', count:'114,300', tags: ['대학생', '새내기', '축제'], rewards: [{title: '스타벅스', icon: 'mdi-gift', color: 'red'}, {title: '100P', icon: 'mdi-circle-multiple', color: 'yellow darken-3'}] },
        { title:'대학생들에게 묻습니다', left:'4', count:'114,300', tags: ['대학생', '새내기', '축제'], rewards: [{title: '스타벅스', icon: 'mdi-gift', color: 'red'}, {title: '100P', icon: 'mdi-circle-multiple', color: 'yellow darken-3'}] },
      ],
      eventData: [
        { title: '이벤트1', msg: '이벤트에요!', to: '/EventList', color: 'deep-purple accent-2' },
        { title: '이벤트2', msg: '이벤트에요!', to: '/EventList', color: 'cyan lighten-1' },
      ],
      noticeData: [
        { title: '공지사항1' },
        { title: '공지사항2' },
        { title: '공지사항3' }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 24px;
  margin-bottom: 80px;
  padding-left: 24px;
}
.section {
  margin-top: 45px;
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
  margin: 8px 8px 0 0;
  text-decoration: none;
  color: black;
  font-size: 15px;
}
.section-desc {
  font-size: 15px;
}
</style>

>>>>>>> c130b57436acbb273f180a477042c27b8d6bfd4d
