<template>
  <div>
    <report :report-data="surveyData" />
    <v-container>
      <v-row>
        <v-col cols="12" style="font-size: 13px;">
          <v-row>
            <v-col class="pb-0" cols="auto" style="color: #30cdae; font-weight: 600;">
              진행중인 설문
            </v-col>
            <v-col class="ml-auto" cols="auto" style="font-size: 10px;">
              <NuxtLink
                v-for="(item, i) in surveyData.tags"
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
                <b>{{ surveyData.title }}</b>
              </p>
              <span class="report-created">설문기간: {{ surveyData.period[0] }} ~ {{ surveyData.period[1] }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="likes-comments d-flex">
                <div>
                  <v-icon small>
                    mdi-thumb-up
                  </v-icon>
                  {{ surveyData.likes | comma }}
                </div>
                <div>
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>
                  {{ surveyData.participants | comma }}
                </div>
                <div>
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>
                  {{ surveyData.downloads | comma }}
                </div>
                <div>
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>
                  {{ surveyData.comments | comma }}
                </div>
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
          </v-icon>{{ surveyData.surveyor }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문 정보</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          {{ surveyData.content }}
          <v-row>
            <v-col cols="12">
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
        <v-col cols="12" style="background-color: #eeeeee" />
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" style="background-color: #eeeeee" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            icon
            small
          >
            <v-icon>
              mdi-thumb-up-outline
            </v-icon>
          </v-btn>
          <v-btn
            icon
            small
          >
            <v-icon>
              mdi-comment-processing
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Report from '../../layouts/report.vue'
import SurveyCard from '../../components/SurveyCard.vue'
export default {
  components: { SurveyCard, Report },
  layout: 'empty',
  data () {
    return {
      surveyData: {
        title: '상명대 학생들에 대한 고찰',
        tags: ['대학생', '새내기', '축제'],
        period: ['2022-05-05 13:00', '2022-05-10 13:00'],
        likes: 14433,
        participants: 14433,
        downloads: 14433,
        comments: 14433,
        surveyor: '상명대학교',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
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
</style>
