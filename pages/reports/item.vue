<template>
  <div>
    <report :report-data="reportData" />
    <v-container>
      <v-row>
        <v-col cols="12" style="font-size: 13px;">
          <v-row>
            <v-col class="pb-0" cols="auto" style="color: #30cdae">
              리포트
            </v-col>
            <v-col class="ml-auto" cols="auto" style="font-size: 10px;">
              <NuxtLink
                v-for="(item, i) in reportData.tags"
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
                <b>{{ reportData.title }}</b>
              </p>
              <span class="report-created">작성일: {{ reportData.created }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="likes-comments d-flex">
                <div>
                  <v-icon small>
                    mdi-thumb-up
                  </v-icon>{{ reportData.likes | comma }}
                </div>
                <div>
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>{{ reportData.comments | comma }}
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
          <span class="section-title">리포터</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-5" cols="12" style="font-size: 12px;">
          <v-icon left>
            mdi-account-circle
          </v-icon>{{ reportData.surveyor }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문 정보</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <survey-item :survey-data="surveyData" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">분석</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-5" col="12">
          {{ reportData.content }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-color: #eeeeee" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col
              v-for="(item, i) in commentData"
              :key="i"
              cols="12"
            >
              <v-row style="font-size: 12px;">
                <v-col class="pb-0 d-flex" cols="auto" style="align-items: center">
                  <div class="best">
                    BEST
                  </div>
                  {{ item.username }}
                </v-col>
                <v-col class="ml-auto pb-0" cols="auto">
                  {{ item.created }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" style="font-size: 12px;">
                  {{ item.content }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" style="font-size: 12px;">
          댓글 {{ commentCount | comma }}개 보기
        </v-col>
      </v-row>
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
      reportData: {
        title: '상명대 학생들에 대한 고찰',
        tags: ['대학생', '새내기', '축제'],
        created: '2022-05-05 13:00',
        likes: 14433,
        comments: 14433,
        surveyor: '상명대학교',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      surveyData: {
        title: '대학생들에게 묻습니다',
        start: '2022-01-05',
        end: '2022-01-21',
        count: 114300,
        tags: ['대학생', '새내기', '축제']
      },
      commentData: [
        { username: '상명인', created: '2022-01-06', content: '좀 치네?' },
        { username: '강주영', created: '2022-01-08', content: '오오~' }
      ],
      commentCount: 2042
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
  width: 105px;
  font-size: 10px;
}
.section-title {
  font-size: 10px;
}
.best {
  display: flex;
  justify-content: center;
  margin-right: 10px;
  width: 40px;
  height: 18px;
  background-color: #ed5e21;
  border-radius: 5px;
  font-size: 12px;
  color: white;
}
</style>
