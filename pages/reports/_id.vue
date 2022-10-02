<template>
  <div v-if="users" class="ma-auto" style="max-width: 960px">
    <v-container class="pa-0" style="max-width: 960px">
      <v-col class="pa-0" cols="12">
        <v-app-bar dense class="elevation-0" color="transparent">
          <v-app-bar-nav-icon icon @click="back">
            <v-icon>mdi-chevron-left</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title
            class="title-text pa-0"
            style="font-size: 14px; font-weight: 600"
          >
          </v-toolbar-title>
          <v-spacer />
          <div class="d-flex justify-content-between">
            <v-btn icon small>
              <v-icon>mdi-export-variant</v-icon>
            </v-btn>
            <v-btn icon small>
              <!-- 북마크-->
              <v-icon
                @click="
                  bookmark1()
                  id = users[$route.params.id].id
                "
                >mdi-bookmark-outline</v-icon
              >
            </v-btn>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn icon small v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>삭제</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-app-bar>
      </v-col>
      <v-divider />
    </v-container>
    <v-container>
      <v-row>
        <v-col class="my-2" cols="12" style="font-size: 13px">
          <v-row>
            <v-col class="pb-0" cols="auto" style="color: #30cdae">
              리포트
            </v-col>
            <v-col class="ml-auto" cols="auto" style="font-size: 10px">
              <NuxtLink to="" style="text-decoration: none">
                {{ users[$route.params.id].survey.tag }}
              </NuxtLink>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-0 pb-0" cols="12">
              <p class="report-title">
                <b>{{ users[$route.params.id].subject }}</b>
              </p>
              <span class="report-created"
                >작성일: {{ users[$route.params.id].createdAt }}</span
              >
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="likes-comments d-flex">
                <div>
                  <v-icon small> mdi-thumb-up </v-icon>
                  {{ users[$route.params.id].goods | comma }}
                </div>
                <!-- <div>
                  <v-icon small> mdi-comment-processing </v-icon>
                  {{ reportData.comments | comma }}
                </div> -->
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
        <v-col class="py-5" cols="12" style="font-size: 12px">
          <v-icon left> mdi-account-circle </v-icon
          >{{ users[$route.params.id].author }}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">설문 정보</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="d-flex pr-0" cols="auto">
              <div class="survey-img" />
            </v-col>
            <v-col class="d-flex" cols="auto" style="align-self: center">
              <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col class="pb-0" cols="12" style="font-size: 12px">
                      {{ users[$route.params.id].survey.subject }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="py-0" cols="12" style="font-size: 10px">
                      {{ users[$route.params.id].survey.startAt }} ~
                      {{ users[$route.params.id].survey.endAt }}
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="auto" style="font-size: 10px">
                      {{ users[$route.params.id].survey.hits | comma }}명이 참여
                      중
                    </v-col>
                    <v-col
                      class="ml-auto pr-0"
                      cols="auto"
                      style="font-size: 10px"
                    >
                      <span>
                        <NuxtLink
                          to=""
                          style="
                            text-decoration: none;
                            color: rgba(37, 144, 222, 0.87);
                          "
                          >{{ users[$route.params.id].survey.tag }}
                        </NuxtLink>
                      </span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pt-4 pb-1" cols="12" style="background-color: #eeeeee">
          <span class="section-title">분석</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-5" col="12">
          {{ users[$route.params.id].content }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-color: #eeeeee" />
      </v-row>
      <!-- <v-row>
        <v-col cols="12">
          <v-row>
            <v-col v-for="(item, i) in commentData" :key="i" cols="12">
              <v-row style="font-size: 12px">
                <v-col
                  class="pb-0 d-flex"
                  cols="auto"
                  style="align-items: center"
                >
                  <div class="best">BEST</div>
                  {{ item.username }}
                </v-col>
                <v-col class="ml-auto pb-0" cols="auto">
                  {{ item.created }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" style="font-size: 12px">
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
        <v-col class="text-center" cols="12" style="font-size: 12px">
          댓글 {{ commentCount | comma }}개 보기
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="background-color: #eeeeee" />
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn icon small>
            <v-icon> mdi-thumb-up-outline </v-icon>
          </v-btn>
          <v-btn icon small>
            <v-icon> mdi-comment-processing </v-icon>
          </v-btn>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>

<script>
import Report from '../../layouts/report.vue'
import SurveyCard from '../../components/SurveyCard.vue'
import axios from 'axios'

export default {
  components: { SurveyCard, Report },
  layout: 'empty',
  data() {
    return {
      commentCount: 2042,
      users: null,
      bookmark: null,
      page: 0,
      limit: 10,
      id: null,
      content: null,
      duplicable: null,
      subject: null,
      type: null,
    }
  },
  methods: {
    fetchData(category, page, limit) {
      axios
        .get(
          'https://api.govey.app/users/v1/reports/page?' +
            'page=' +
            this.page +
            '&limit=' +
            this.limit
        )
        .then((res) => {
          this.users = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    },
    bookmark1() {
      axios
        .post(
          'https://api.govey.app/users/v1/reports/' + this.id + '/bookmark',
          {}
        )
        .then((res) => {
          this.users2 = res.data.content
          console.log('success')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created() {
    this.fetchData(this.pageNum)
  },
}
</script>

<style scoped>
.survey-img {
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: #a7a7a7;
  border-radius: 14px;
}
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
