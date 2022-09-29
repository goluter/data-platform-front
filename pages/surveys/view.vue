<template>
  <div class="ma-auto" style="max-width: 960px; margin-bottom: 54px;">
    <report :report-data="surveyData" />
    <v-container>
      <v-row>
        <v-col class="my-2" cols="12" style="font-size: 13px;">
          <v-row>
            <v-col class="pb-0" cols="auto" style="color: #30cdae; font-weight: 600;">
              진행중인 설문
            </v-col>
            <v-col class="ml-auto" cols="auto" style="font-size: 10px;">
              <NuxtLink
                v-for="(item, i) in surveyData.tag"
                :key="i"
                to=""
                style="text-decoration: none;"
              >
                #{{ item }}
              </NuxtLink>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-0" cols="12">
              <p class="report-title">
                <b>{{ surveyData.subject }}</b>
              </p>
              <span class="report-created">설문기간: {{ surveyData.startAt | date }} ~ {{ surveyData.endAt | date }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="likes-comments d-flex">
                <div>
                  <v-icon small>
                    mdi-thumb-up
                  </v-icon>
                  {{ surveyData.good | comma }}
                </div>
                <div>
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>
                  {{ surveyData.hits | comma }}
                </div>
                <!--                <div>-->
                <!--                  <v-icon small>-->
                <!--                    mdi-comment-processing-->
                <!--                  </v-icon>-->
                <!--                  {{ surveyData.downloads | comma }}-->
                <!--                </div>-->
                <!--                <div>-->
                <!--                  <v-icon small>-->
                <!--                    mdi-comment-processing-->
                <!--                  </v-icon>-->
                <!--                  {{ surveyData.comments | comma }}-->
                <!--                </div>-->
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문자</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-5" cols="12" style="font-size: 12px;">
          <v-icon left>
            mdi-account-circle
          </v-icon>{{ surveyData.author }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문 정보</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-4" cols="12">
          {{ surveyData.content }}
          <v-row>
            <v-col class="pa-2 pb-1" cols="12">
              <div class="survey-more">
                <div class="survey-more-text">
                  <span style="font-size: 11px; font-weight: 600;">자세히 보기</span>
                </div>
                <div class="survey-more-btn ml-auto">
                  <v-icon>mdi-chevron-right</v-icon>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-4" cols="12" style="background-color: #eeeeee" />
      </v-row>
    </v-container>
    <div class="mb-8">
      <v-container>
        <v-row>
          <v-col class="pa-0" cols="12" style="background-color: #eeeeee" />
        </v-row>
        <v-row>
          <v-col class="pa-1" cols="12">
            <template>
              <v-tabs v-model="tab" slider-color="teal accent-3" grow>
                <v-tab v-for="(item, i) in tabs" :key="i" style="color: black; font-weight: 600;">
                  {{ item }}
                </v-tab>
              </v-tabs>
            </template>
            <v-tabs-items v-model="tab">
              <v-tab-item class="pa-2 py-5">
                <v-row style="padding: 5px;">
                  <v-col class="pa-2 pb-5" cols="12">
                    <div v-for="(item, i) in surveyStats" :key="i" class="survey-stat-box">
                      <span class="survey-stat-box-title">항목</span>
                      <span class="survey-stat-box-desc">{{ item.questions }}개</span>
                      <span class="survey-stat-box-more">자세히 보기</span>
                    </div>
                  </v-col>
                </v-row>
                <v-container>
                  <v-row v-for="(item, i) in surveyQs" :key="i">
                    <v-col class="my-1 pa-2 elevation-1" cols="12" style="border: 1px solid black; border-radius: 10px;">
                      <div>
                        <span class="survey-q ma-auto">
                          {{ i+1 }}. {{ item }}
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="mt-2 pa-0" cols="12">
                      <div class="survey-q-more">
                        <div class="survey-more-text">
                          <span style="font-size: 11px; font-weight: 600;">설문 항목 전체 보기</span>
                        </div>
                        <div class="survey-more-btn ml-auto">
                          <v-icon>mdi-chevron-right</v-icon>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col class="pa-2 py-3" cols="12" style="background-color: #eeeeee">
            <Banner :banner-data="bannerData[0]" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row
        style="
        max-width: 960px;
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background-color: white;"
      >
        <v-col cols="12">
          <div class="d-flex">
            <v-btn
              icon
              small
            >
              <v-icon>
                mdi-thumb-up-outline
              </v-icon>
            </v-btn>
            <NuxtLink class="ml-auto" to="/surveys/join">
              <div class="part-btn">
                설문 참여하기
              </div>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Report from '../../layouts/report.vue'
import Banner from '../../components/Banner.vue'
export default {
  components: { Banner, Report },
  layout: 'empty',
  data () {
    return {
      tab: null,
      tabs: ['질문', '보상'],
      surveyData: [],
      surveyStats: [{ questions: 34 }],
      surveyQs: ['대면 전환 후 가장 기대되는 활동은?', '학교 행정 편의 만족도는?', '현재 학식 가격에 대한 만족도는?', '가장 필요하다고 생각하는 개선점은?'],
      bannerData: [{ icon: 'mdi-vote', title: '임시 배너', msg: '임시 메시지', to: '/' }]
    }
  },
  methods: {
    fetchData (id) {
      id = this.$route.params.id
      axios.get(
        'https://api.govey.app/users/v1/surveys/' +
          id
      ).then((response) => {
        this.surveyData = response.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.report-title {
  margin: 0 0 3px 0;
  font-size: 20px;
}
.report-created {
  font-size: 12px;
}
.likes-comments {
  justify-content: space-between;
  width: 220px;
  font-size: 10px;
}
.section-title {
  font-size: 10px;
}
.survey-more {
  display: flex;
  flex-display: column;
  vertical-align: center;
  margin: 20px 0;
  padding: 14px;
  background-color: #eeeeee;
  border-radius: 10px;
}
.part-btn {
  display: flex;
  height: 30px;
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: #30cdae;
  color: white;
  border-radius: 5px;
  font-size: 14px;
}
.survey-stat-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 90px;
  padding: 3px;
  background-color: #ececec;
  border-radius: 10px;
}
.survey-stat-box-title {
  font-size: 12px;
}
.survey-stat-box-desc {
  font-size: 14px;
  font-weight: 600;
}
.survey-stat-box-more {
  padding-top: 3px;
  font-size: 10px;
}
.survey-q {
  padding: 5px;
  color: black;
  font-size: 12px;
  font-weight: 500;
}
.survey-q-more {
  padding: 14px;
  display: flex;
  background-color: #eeeeee;
  border-radius: 10px;
}
</style>
