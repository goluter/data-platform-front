<template>
  <v-container class="container ml-auto mb-15">
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
    <Carousels :carousel-data="carouselData" />
    <v-row>
      <v-col cols="12" style="height: 20px" />
    </v-row>

<!--    <Banner :banner-data="bannerData[0]" />-->
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
    <SurveyBanner :survey-data="surveyData" />
    <Banner :banner-data="bannerData[0]" />
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
    <EventBanner />
    <v-row class="section">
      <v-col class="section-title-box pb-0" cols="9">
        <h1 class="section-title">공지사항</h1>
      </v-col>
      <v-col class="ml-auto" cols="auto">
        <NuxtLink class="section-more" to="/notice/"> 더보기 </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="section-desc">
      <v-col class="pt-0 pb-0" cols="12"> 새로운 소식을 살펴보세요. </v-col>
    </v-row>
    <NoticeBanner />
  </v-container>
</template>

<script>
import axios from 'axios'
import Carousels from '../components/Carousels.vue'
import Banner from '../components/Banner.vue'
import SurveyBanner from '../components/SurveyBanner.vue'
import EventBanner from '../components/EventBanner.vue'
import NoticeBanner from '../components/NoticeBanner.vue'

export default {
  name: 'IndexPage',
  components: { NoticeBanner, EventBanner, SurveyBanner, Banner, Carousels },
  layout: 'main',
  data () {
    return {
      carouselData: [],
      surveyData: [],
      bannerData: [
        // {
        //   title: '설문 등록',
        //   msg: '지금 등록하시면 1000P 를 바로 적립해드려요!',
        //   icon: 'mdi-vote',
        //   to: '/survey-maker',
        // },
        {
          title: '가이드',
          msg: '더 재미있게 즐기실 수 있도록 가이드를 모아봤어요!',
          icon: 'mdi-bookmark-box-multiple',
          to: '/service-center/',
        },
      ],
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get(
        'https://api.govey.app/users/v1/surveys/curations?type=popular'
      ).then(async (response) => {
        const dataWithRewards = response.data.map(async (survey) => {
          const rewards = await axios.get(
            'https://api.govey.app/users/v1/surveys/' +
              survey.id +
              '/rewards/'
          ).then((response) => {
            const rewardsData = []
            for (let i = 0; i < response.data.length; i++) {
              const dic = {
                type: response.data[i].type,
                value: response.data[i].value
              }
              rewardsData.push(dic)
            }
            return rewardsData
          }).catch((error) => {
            console.log(error)
          })
          const mix = Object.assign({}, survey, { rewards })
          return mix
        })
        const finalData = await Promise.all(dataWithRewards)
        this.surveyData = finalData
      }).catch((error) => {
        console.log(error)
      })

      axios.get(
        'https://api.govey.app/users/v1/surveys/curations?type=recommended'
      ).then((response) => {
        const cr = response.data
        const colors = [{ color: 'indigo accent-4' }, { color: '#ed2121' }, { color: 'pink accent-2' }]
        const slicedCr = cr.slice(0, 3).map((card, i) => {
          const mix = Object.assign({}, card, colors[i])
          return mix
        })
        this.carouselData = slicedCr
      }).catch((error) => {
        console.log(error)
      })
    }
  }
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
