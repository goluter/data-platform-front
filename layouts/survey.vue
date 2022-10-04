<template>
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
          {{ surveyData.subject }}
        </v-toolbar-title>
        <v-spacer />
        <div class="d-flex justify-content-between">
          <v-menu offset-y :close-on-content-click="false" :nudge-width="300">
            <template #activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on" @click="copyURL(url)">
                <v-icon>mdi-export-variant</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-text-field
                outlined
                single-line
                :value="getURL()"
                class="ma-auto pa-3"
                style="height: 80px"
              />
              <v-card-text class="pt-0 pb-3">
                <v-icon color="#30cdae">
                  mdi-check
                </v-icon>
                클립보드에 복사되었습니다!
              </v-card-text>
            </v-card>
          </v-menu>
          <v-dialog v-model="bookmark" max-width="600px">
            <template #activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on">
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </template>
            <v-card style="border-radius: 10px">
              <div class="d-flex">
                <span class="bookmark-title ma-auto my-3">북마크</span>
              </div>
              <survey-card-single :survey-data="surveyData" />
              <v-form>
                <v-container>
                  <!--                  <v-row>-->
                  <!--                    <v-col class="pb-0" cols="12">-->
                  <!--                      <v-text-field-->
                  <!--                        placeholder="내용을 입력하세요."-->
                  <!--                        outlined-->
                  <!--                        color="#30cdae"-->
                  <!--                        style="height: 70px; background-color: #f7f7f8"-->
                  <!--                      />-->
                  <!--                    </v-col>-->
                  <!--                  </v-row>-->
                  <v-row>
                    <v-col class="pt-0" cols="12">
                      <div class="bookmark-save">
                        <v-btn color="#30cdae" style="color: white" @click="addBookmark">
                          저장
                        </v-btn>
                      </div>
                      <div v-if="saved || err" class="pt-3" style="display: flex; justify-content: flex-end">
                        <div v-if="saved">
                          <v-icon color="#30cdae">
                            mdi-check
                          </v-icon> 저장되었습니다!
                        </div>
                        <div v-if="err !== ''">
                          <v-icon color="red">
                            mdi-close
                          </v-icon> {{ err }}
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>
          </v-dialog>
          <!--          <v-menu offset-y>-->
          <!--            <template-->
          <!--              #activator="-->
          <!--                {-->
          <!--                  on,-->
          <!--                  attrs-->
          <!--                }"-->
          <!--            >-->
          <!--              <v-btn-->
          <!--                icon-->
          <!--                small-->
          <!--                v-bind="attrs"-->
          <!--                v-on="on"-->
          <!--              >-->
          <!--                <v-icon>mdi-dots-vertical</v-icon>-->
          <!--              </v-btn>-->
          <!--            </template>-->
          <!--            <v-list>-->
          <!--              <v-list-item>-->
          <!--                <v-list-item-title>삭제</v-list-item-title>-->
          <!--              </v-list-item>-->
          <!--            </v-list>-->
          <!--          </v-menu>-->
        </div>
      </v-app-bar>
    </v-col>
    <v-divider />
  </v-container>
</template>

<script>
import axios from 'govey/src/libs/http-client'
import SurveyCardSingle from '../components/SurveyCardSingle.vue'

export default {
  components: { SurveyCardSingle },
  props: {
    surveyData: {
      type: Array
    }
  },
  data () {
    return {
      bookmark: false,
      url: '',
      temp: 0,
      page: 0,
      limit: 10,
      id: null,
      users: null,
      saved: false,
      err: ''
    }
  },
  methods: {
    back () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    getURL () {
      this.url = 'https://govey.app/surveys/view/?id=' + this.surveyData.id
      return this.url
    },
    async copyURL (url) {
      try {
        await navigator.clipboard.writeText(url)
      } catch ($e) {}
    },
    addBookmark () {
      axios.post(
        '/users/v1/surveys/' +
          this.surveyData.id +
          '/bookmark',
        {
          subject: 'empty',
          content: '',
          duplicable: true,
          type: 'objective',
          priority: 0
        }
      ).then(() => {
        this.saved = true
      }).catch((err) => {
        if (err.response) {
          this.err = err.response.data.message
        }
      }).finally(() => {
        this.saved = false
      })
    }
  }
}
</script>

<style scoped>
.bookmark-title {
  font-size: 14px;
  font-weight: 600;
}
.bookmark-save {
  display: flex;
  justify-content: flex-end;
}
</style>
