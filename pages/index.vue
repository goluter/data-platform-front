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
  <v-container class="ma-auto mb-10">
    <v-row class="section" style="margin-top: 0">
      <v-col class="section-title-box pb-0" cols="12">
        <h1 class="section-title">추천 설문</h1>
      </v-col>
    </v-row>
    <v-row class="section-desc">
      <v-col class="pt-0 pb-0" cols="12">
        홍길동님이 좋아하실만한 설문을 준비했어요!
      </v-col>
    </v-row>
    <NuxtLink to="/surveys/">
      <Carousels :carousel-data="carouselData" />
    </NuxtLink>

    <v-row>
      <v-col cols="12" style="height: 20px" />
    </v-row>

    <Banner :banner-data="bannerData[0]" />
    <v-row class="section">
      <v-col class="section-title-box pb-0" cols="9">
        <h1 class="section-title">인기 설문</h1>
      </v-col>
      <v-col class="ml-auto" cols="auto">
        <NuxtLink class="section-more" to="/surveys/"> 더보기 </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="section-desc mb-1">
      <v-col class="pt-0" cols="12">
        지금 핫한 설문이에요. 한번 살펴보세요!
      </v-col>
    </v-row>
    <NuxtLink to="/surveys/">
      <SurveyBox :survey-data="surveyData" />
    </NuxtLink>

    <Banner :banner-data="bannerData[1]" />

    <v-row class="section">
      <v-col class="section-title-box pb-0" cols="9">
        <h1 class="section-title">이벤트</h1>
      </v-col>
      <v-col class="ml-auto" cols="auto">
        <NuxtLink class="section-more" to="/events/"> 더보기 </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="section-desc">
      <v-col class="pt-0" cols="12"> 다양한 이벤트를 진행중이에요! </v-col>
    </v-row>
    <EventBanner :event-data="eventData" />
    <v-row class="section">
      <v-col class="section-title-box pb-0" cols="9">
        <h1 class="section-title">공지사항</h1>
      </v-col>
      <v-col class="ml-auto" cols="auto">
        <NuxtLink class="section-more" to="/notice/"> 더보기 </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="section-desc">
      <v-col class="pt-0" cols="12"> 새로운 소식을 살펴보세요. </v-col>
    </v-row>
    <NuxtLink to="/notices/">
      <NoticeBanner :notice-data="noticeData" />
    </NuxtLink>
  </v-container>
</template>

<script>
import Carousels from '../components/Carousels.vue'
import Banner from '../components/Banner.vue'
import SurveyBox from '../components/SurveyBanner.vue'
import EventBanner from '../components/EventBanner.vue'
import NoticeBanner from '../components/NoticeBanner.vue'

export default {
  name: 'IndexPage',
  components: { NoticeBanner, EventBanner, SurveyBox, Banner, Carousels },
  layout: 'main',
  data() {
    return {
      carouselData: [
        {
          target: '2022 대학생들에게 묻습니다!',
          surveyor: '상명대학교',
          count: 1234,
          color: 'indigo accent-4',
        },
        {
          target: '2022 직장인들에게 묻습니다!',
          surveyor: '상명대학교',
          count: 2345,
          color: '#ed2121',
        },
        {
          target: '2022 구직자들에게 물어봅니다!',
          surveyor: '상명대학교',
          count: 3456,
          color: 'pink accent-2',
        },
      ],
      bannerData: [
        {
          title: '설문 등록',
          msg: '지금 등록하시면 1000P 를 바로 적립해드려요!',
          icon: 'mdi-vote',
          to: '/survey-maker',
        },
        {
          title: '가이드',
          msg: '더 재미있게 즐기실 수 있도록 가이드를 모아봤어요!',
          icon: 'mdi-bookmark-box-multiple',
          to: '/service-center/',
        },
      ],
      surveyData: [
        {
          title: '대학생들에게 묻습니다',
          left: '4',
          count: '114,300',
          tags: ['대학생', '새내기', '축제'],
          rewards: [
            { title: '스타벅스', icon: 'mdi-gift', color: 'red' },
            {
              title: '100P',
              icon: 'mdi-circle-multiple',
              color: 'yellow darken-3',
            },
          ],
        },
        {
          title: '대학생들에게 묻습니다',
          left: '4',
          count: '114,300',
          tags: ['대학생', '새내기', '축제'],
          rewards: [
            { title: '스타벅스', icon: 'mdi-gift', color: 'red' },
            {
              title: '100P',
              icon: 'mdi-circle-multiple',
              color: 'yellow darken-3',
            },
          ],
        },
        {
          title: '대학생들에게 묻습니다',
          left: '4',
          count: '114,300',
          tags: ['대학생', '새내기', '축제'],
          rewards: [
            { title: '스타벅스', icon: 'mdi-gift', color: 'red' },
            {
              title: '100P',
              icon: 'mdi-circle-multiple',
              color: 'yellow darken-3',
            },
          ],
        },
        {
          title: '대학생들에게 묻습니다',
          left: '4',
          count: '114,300',
          tags: ['대학생', '새내기', '축제'],
          rewards: [
            { title: '스타벅스', icon: 'mdi-gift', color: 'red' },
            {
              title: '100P',
              icon: 'mdi-circle-multiple',
              color: 'yellow darken-3',
            },
          ],
        },
      ],
      eventData: [
        {
          title: '고베이 회원가입 이벤트',
          msg: '회원가입하면 누구나 상품을 받을 수 있어요!',
          to: '/events',
          color: 'deep-purple accent-2',
        },
        {
          title: '고베이 설문 참여 이벤트',
          msg: '설문만 참여하셔도 치킨 기프티콘 얻을 수 있어요!',
          to: '/events',
          color: 'cyan lighten-1',
        },
      ],
      noticeData: [
        { title: '고베이 출시!' },
        { title: '개인정보 처리방침 의무화' },
      ],
    }
  },
}
</script>

<style scoped>
.section {
  margin-top: 30px;
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
  margin: 8px 0 0 0;
  text-decoration: none;
  color: black;
  font-size: 15px;
}
.section-desc {
  font-size: 15px;
}
</style>

>>>>>>> c130b57436acbb273f180a477042c27b8d6bfd4d
