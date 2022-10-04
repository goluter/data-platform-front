<template>
  <v-container v-if="userinfo" style="align-items: center; height: 100%">
    <v-row style="height: 95px; background-color: #f8f8f8">
      <v-col cols="12" align-self="center">
        <v-icon x-large left> mdi-account-circle </v-icon>
        <span class="username">{{ userinfo.nickname }}</span>
        <p style="margin-top: 8px; font-size: 14px">
          남은 포인트: {{ userinfo.point }}
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-0" cols="12">
        <v-tabs v-model="tab" grow center-active>
          <v-tabs-slider color="teal accent-3" />
          <v-tab
            v-for="(item, i) in tabsData"
            :key="i"
            style="color: black; font-weight: 600"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div v-for="(item, i) in timelinedata" :key="i" class="achievement">
              <h5>
                <div class="pl-1 timeline-text">
                  {{ userinfo.username }}님이
                  <a>{{ timelinedata[i].content }}</a>
                </div>
                <v-divider />
              </h5>
            </div>
            <div
              v-if="!timelinedata || timelinedata.length === 0"
              style="height: 150px"
              class="ma-2 pt-3 d-flex justify-center align-center"
            >
              <p>아직 데이터가 없습니다!</p>
            </div>
          </v-tab-item>

          <v-tab-item class="pa-2 pt-0">
            <div class="wrapper">
              <div
                v-for="(item, i) in mysurveydata"
                :key="i"
                class="survey-wrapper"
              >
                <NuxtLink
                  :to="{
                    path: '/surveys/view',
                    query: { id: mysurveydata[i].id },
                  }"
                >
                  <v-row>
                    <v-col class="survey-img-box col-3">
                      <div class="survey-img" />
                    </v-col>
                    <v-col class="survey-content col-9">
                      <span class="survey-title">
                        {{ mysurveydata[i].subject }}
                      </span>
                      <span class="survey-left-time">
                        {{
                          mysurveydata[i].endAt | moment('YYYY-MM-DD hh:mm')
                        }}에 종료
                      </span>
                      <div class="survey-count-tags">
                        <span class="survey-count">
                          {{ mysurveydata[i].answers }}명이 참여 중
                        </span>
                        <span v-for="tags in item.tags" class="survey-tags">
                          <a href="">#{{ mysurveydata[i].tag }}</a>
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                </NuxtLink>
              </div>
            </div>
            <div
              v-if="!mysurveydata || mysurveydata.length === 0"
              style="height: 150px"
              class="ma-2 pt-3 d-flex justify-center align-center"
            >
              <p>아직 데이터가 없습니다!</p>
            </div>
          </v-tab-item>

          <v-tab-item class="pa-2 pt-0">
            <div class="wrapper">
              <div
                v-for="(item, i) in partisurveydata"
                :key="i"
                class="survey-wrapper"
              >
                <NuxtLink
                  :to="{
                    path: '/surveys/view',
                    query: { id: partisurveydata[i].survey.id },
                  }"
                >
                  <v-row>
                    <v-col class="survey-img-box col-3">
                      <div class="survey-img" />
                    </v-col>
                    <v-col class="survey-content col-9">
                      <span class="survey-title">
                        {{ partisurveydata[i].survey.subject }}
                      </span>
                      <span class="survey-left-time">
                        {{
                          partisurveydata[i].survey.endAt
                            | moment('YYYY-MM-DD hh:mm')
                        }}에 종료
                      </span>
                      <div class="survey-count-tags">
                        <span class="survey-count">
                          {{ partisurveydata[i].survey.answers }}명이 참여 중
                        </span>
                        <span v-for="tags in item.tags" class="survey-tags">
                          <a href="">#{{ partisurveydata[i].survey.tag }}</a>
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                </NuxtLink>
              </div>
            </div>
            <div
              v-if="!partisurveydata || partisurveydata.length === 0"
              style="height: 150px"
              class="ma-2 pt-3 d-flex justify-center align-center"
            >
              <p>아직 데이터가 없습니다!</p>
            </div>
          </v-tab-item>
          <v-tab-item>
            <v-list v-for="(item, i) in listData" :key="i">
              <v-subheader>{{ item.subheader }}</v-subheader>
              <v-list-item-group>
                <v-list-item
                  v-for="(link, i) in item.item"
                  :key="i"
                  @click.native="() => handleItemClick($router, link)"
                >
                  {{ link.title }}
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'govey/src/libs/http-client'
import { signOut } from 'govey/src/libs/auth'
import SurveyCard from '../../components/SurveyCard.vue'
import vueMoment from 'vue-moment'
import Vue from 'vue'
Vue.use(vueMoment)
export default {
  name: 'MyPage',
  components: { SurveyCard },
  layout: 'main',
  data(context) {
    return {
      routerO: context.router,
      page: 0,
      limit: 10,
      mysurveydata: null,
      partisurveydata: null,
      userinfo: null,
      timelinedata: null,
      tab: null,
      username: 'jooyoung',
      tabsData: [
        { title: '타임라인' },
        { title: '등록설문' },
        { title: '참여설문' },
        { title: '더보기' },
      ],
      achievement: ['설문 참여', '대학생'],
      listData: [
        {
          subheader: '설문',
          item: [
            { title: '내 설문', to: '/mypage/mysurvey/' },
            { title: '내 리포트', to: '/mypage/reports/' },
            { title: '북마크한 리포트', to: '/mypage/saved-reports/' },
            { title: '북마크한 설문', to: '/mypage/saved-survey' },
          ],
        },
        {
          subheader: '보상',
          item: [
            { title: '내 포인트', to: '/point-list/' },
            { title: '내 칭호', to: '/mypage/my-title-list/' },
            { title: '내 업적', to: '/mypage/my-reward-list/' },
            { title: '구매내역', to: '' },
          ],
        },
        {
          subheader: '기타',
          item: [
            { title: '로그아웃', to: 'logout' },
            // { title: '회원탈퇴', to: '' },
          ],
        },
      ],
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', this.username)
  },
  created() {
    this.fetchData(this.pageNum)
  },
  methods: {
    handleItemClick: ($router, link) => {
      console.log('link.to', link.to)
      if (link.to === 'logout') {
        signOut($router)
      } else {
        console.log('gogo~')
        $router.push(link.to)
      }
    },
    fetchData(page, limit) {
      axios
        .get(
          '/users/v1/self/surveys/registrations?' +
            this.page +
            '&limit=' +
            this.limit
        )
        .then((res) => {
          this.mysurveydata = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
      axios
        .get(
          '/users/v1/self/surveys/answers?' + this.page + '&limit=' + this.limit
        )
        .then((res) => {
          this.partisurveydata = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
      axios
        .get('/users/v1/self/info')
        .then((res) => {
          this.userinfo = res.data
        })
        .catch((err) => {
          console.log(err)
        })
      axios
        .get('/users/v1/self/timelines?' + this.page + '&limit=' + this.limit)
        .then((res) => {
          this.timelinedata = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.timeline-text {
  margin: 25px 0;
}
.wrapper {
  margin-top: 10px;
}
.survey-img {
  padding: 3%;
  width: 100%;
  height: 100%;
  background-color: #a7a7a7;
  border-radius: 14px;
}
.survey-content {
  display: flex;
  flex-direction: column;
  margin-top: 1%;
}
.survey-title {
  display: block;
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 14px;
}
.survey-left-time {
  margin-bottom: 2px;
  text-align: right;
  font-size: 10px;
}
.survey-count-tags {
  font-size: 10px;
}
.survey-tags {
  float: right;
  margin: 1px;
}
.survey-tags a {
  color: rgba(48, 205, 174, 0.87);
  text-decoration: none;
}
</style>
