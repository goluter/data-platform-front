<template>
  <v-container class="pa-0" style="max-width: 960px">
    <v-col class="pa-0" cols="12">
      <v-app-bar dense class="elevation-0" color="transparent">
        <v-app-bar-nav-icon icon @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="title-text pa-0" style="font-size: 14px; font-weight: 600">
          {{ reportData.subject }}
        </v-toolbar-title>
        <v-spacer />
        <div class="d-flex justify-content-between">
          <v-btn
            icon
            small
          >
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-dialog
            v-model="bookmark"
            max-width="600px"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </template>
            <v-card style="border-radius: 10px;">
              <div class="d-flex">
                <span class="bookmark-title ma-auto my-3">북마크</span>
              </div>
              <survey-card-single :survey-data="reportData" />
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field placeholder="내용을 입력하세요." outlined color="#30cdae" style="background-color: #f7f7f8" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <div class="bookmark-save ma-auto">
                        <NuxtLink to="/surveys/">
                          <div class="bookmark-save-btn">
                            <span class="ma-auto">저장</span>
                          </div>
                        </NuxtLink>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card>
          </v-dialog>
          <v-menu offset-y>
            <template
              #activator="
                {
                  on,
                  attrs
                }"
            >
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
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
</template>

<script>
import SurveyCard from '../components/SurveyCard.vue'
import SurveyCardSingle from '../components/SurveyCardSingle.vue'
export default {
  components: { SurveyCardSingle, SurveyCard },
  props: {
    reportData: {
      type: Array
    }
  },
  data () {
    return {
      bookmark: false
    }
  },
  methods: {
    back () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
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
  justify-content: center;
  align-items: center;
}
.bookmark-save-btn {
  display: flex;
  height: 30px;
  width: 80px;
  background-color: #30cdae;
  border-radius: 10px;
  font-size: 14px;
  color: white;
}
</style>
