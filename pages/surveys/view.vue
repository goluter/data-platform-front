<template>
  <div class="ma-auto" style="max-width: 960px; margin-bottom: 54px">
    <report :report-data="surveyData" />
    <v-container>
      <v-row>
        <v-col class="my-2" cols="12" style="font-size: 13px">
          <v-row>
            <v-col
              v-if="surveyData.status === 'ongoing'"
              class="pb-0"
              cols="auto"
              style="color: #30cdae; font-weight: 600"
            >
              진행중인 설문
            </v-col>
            <v-col
              v-if="surveyData.status === 'end'"
              class="pb-0"
              cols="auto"
              style="color: #30cdae; font-weight: 600"
            >
              마감된 설문
            </v-col>
            <v-col class="ml-auto" cols="auto" style="font-size: 10px">
              {{ surveyData.tag }}
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-0" cols="12">
              <p class="report-title">
                <b>{{ surveyData.subject }}</b>
              </p>
              <span class="report-created"
                >설문기간: {{ surveyData.startAt | date }} ~
                {{ surveyData.endAt | date }}</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="likes-comments">
              <div class="d-inline text-no-wrap mr-5">
                <v-icon small>
                  mdi-account
                </v-icon>
                {{ surveyData.answers }}
              </div>
              <div class="d-inline text-no-wrap">
                <v-icon small> mdi-thumb-up </v-icon>
                {{ surveyData.goods | comma }}
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
        <v-col class="py-5" cols="12" style="font-size: 12px">
          <v-icon left> mdi-account-circle </v-icon>{{ surveyData.author }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문 정보</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-show="!survVisible" cols="12">
          {{ surveyContent | trunc(200, '...') }}
        </v-col>
        <v-expand-transition>
          <v-col v-show="survVisible" cols="12">
            {{ surveyContent }}
          </v-col>
        </v-expand-transition>
      </v-row>
      <v-row v-if="surveyContent.length > 200">
        <v-col class="pa-2 pt-0" cols="12">
          <button class="survey-more" @click="survVisible = !survVisible">
            <span class="survey-more-text">자세히 보기</span>
            <v-icon class="ml-auto"> mdi-chevron-right </v-icon>
          </button>
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
                <v-tab
                  v-for="(item, i) in tabs"
                  :key="i"
                  style="color: black; font-weight: 600"
                >
                  {{ item }}
                </v-tab>
              </v-tabs>
            </template>
            <v-tabs-items v-model="tab">
              <v-tab-item class="pa-2 py-5">
                <v-row style="padding: 5px">
                  <v-col class="pa-2 pb-5" cols="12">
                    <div
                      v-for="(item, i) in surveyStats"
                      :key="i"
                      class="survey-stat-box"
                    >
                      <span class="survey-stat-box-title">{{ item.type }}</span>
                      <span class="survey-stat-box-desc">{{ item.val }}개</span>
                      <!--                      <span class="survey-stat-box-more">자세히 보기</span>-->
                    </div>
                  </v-col>
                </v-row>
                <v-container>
                  <v-row v-for="(item, i) in pollData.slice(0, 4)" :key="i">
                    <v-col
                      class="my-1 pa-2 elevation-1"
                      cols="12"
                      style="border: 1px solid black; border-radius: 10px"
                    >
                      <div>
                        <span class="survey-q ma-auto">
                          {{ i + 1 }}. {{ item.subject }}
                        </span>
                      </div>
                    </v-col>
                  </v-row>
                  <v-expand-transition>
                    <v-row
                      v-for="(item, i) in pollData.slice(4)"
                      v-show="visible"
                      :key="i"
                    >
                      <v-col
                        class="my-1 pa-2 elevation-1"
                        cols="12"
                        style="border: 1px solid black; border-radius: 10px"
                      >
                        <div>
                          <span class="survey-q ma-auto">
                            {{ i + 5 }}. {{ item.subject }}
                          </span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-expand-transition>
                  <v-row v-if="pollData.length > 4">
                    <v-col cols="12" class="pa-0">
                      <v-card-actions class="pa-0 mt-5" style="width: 100%">
                        <button
                          class="survey-q-more"
                          style="width: 100%"
                          @click="visible = !visible"
                        >
                          <div class="survey-more-text">
                            <span> 설문 항목 전체 보기 </span>
                          </div>
                          <div class="survey-more-btn ml-auto">
                            <v-icon>mdi-chevron-right</v-icon>
                          </div>
                        </button>
                      </v-card-actions>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
              <v-tab-item class="pa-2 py-5">
                <v-row style="padding: 5px">
                  <v-col v-if="surveyData.rewardsData" cols="12">
                    <v-row>
                      <v-col cols="12">
                        <span class="survey-rewards-title"
                          >이 설문에는 총
                          <b>{{ surveyData.rewardsData.length }}개</b>의 보상이
                          있습니다!</span
                        >
                      </v-col>
                    </v-row>
                    <v-row
                      v-for="(item, i) in surveyData.rewardsData"
                      :key="i"
                      class="pa-2"
                    >
                      <v-col
                        v-if="item.type === 'point'"
                        cols="12"
                        style="display: flex; align-items: center"
                        class="survey-rewards-box"
                      >
                        <v-icon color="yellow darken-3" class="mr-2">
                          mdi-circle-multiple
                        </v-icon>
                        {{ item.value | comma }} 포인트
                      </v-col>
                      <v-col
                        v-if="item.type === 'giftcon'"
                        cols="12"
                        style="display: flex; align-items: center"
                        class="survey-rewards-box"
                      >
                        <v-icon color="red" class="mr-2"> mdi-gift </v-icon>
                        {{ item.value }} 기프티콘
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
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
          background-color: white;
        "
      >
        <v-col cols="12">
          <div class="d-flex">
            <v-btn icon small>
              <v-icon> mdi-thumb-up-outline </v-icon>
            </v-btn>
            <NuxtLink class="ml-auto" :to="'/surveys/join?id=' + surveyData.id">
              <div class="part-btn">설문 참여하기</div>
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
  data() {
    return {
      tab: null,
      tabs: ['질문', '보상'],
      survVisible: false,
      visible: false,
      surveyData: [],
      surveyContent: '',
      surveyContentArr: [],
      pollData: [],
      surveyStats: [],
      bannerData: [
        { icon: 'mdi-vote', title: '임시 배너', msg: '임시 메시지', to: '/' },
      ],
    }
  },
  computed: {},
  created() {
    this.fetchData(this.$route.query.id)
    this.fetchPollData(this.$route.query.id)
  },
  methods: {
    fetchData(id) {
      axios
        .get('https://api.govey.app/users/v1/surveys/' + id)
        .then(async (response) => {
          if (response.data.goods === null) {
            response.data.goods = 0
          }
          if (response.data.hits === null) {
            response.data.hits = 0
          }
          this.surveyData = response.data
          this.surveyContent = response.data.content
          this.surveyContentArr.push(this.surveyContent)
          const rewardsData = await axios
            .get('https://api.govey.app/users/v1/surveys/' + id + '/rewards/')
            .then((response) => {
              const reward = []
              for (let i = 0; i < response.data.length; i++) {
                const dic = {}
                dic.type = response.data[i].type
                dic.value = response.data[i].value
                reward.push(dic)
              }
              return reward
            })
            .catch((error) => {
              console.log(error)
            })
          const mix = Object.assign({}, this.surveyData, { rewardsData })
          this.surveyData = mix
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchPollData(id) {
      axios
        .get('https://api.govey.app/users/v1/surveys/' + id + '/polls/')
        .then((response) => {
          this.pollData = response.data
          const arr = {}
          arr.type = '설문 항목'
          arr.val = this.pollData.length
          this.surveyStats.push(arr)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
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
  font-size: 10px;
}
.section-title {
  font-size: 10px;
}
.survey-more {
  display: flex;
  align-items: center;
  vertical-align: center;
  width: 100%;
  margin: 20px 0;
  padding: 14px;
  background-color: #eeeeee;
  border-radius: 10px;
}
.survey-more-text {
  display: flex;
  vertical-align: center;
  font-size: 12px;
  font-weight: 600;
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
.survey-stat-box {
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
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.survey-q {
  padding: 5px;
  color: black;
  font-size: 14px;
  font-weight: 500;
}
.survey-q-more {
  padding: 14px;
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 10px;
}
.survey-rewards-title {
  margin: 5px 0;
}
.survey-rewards-box {
  padding: 15px 10px;
  background-color: #ececec;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
}
</style>
