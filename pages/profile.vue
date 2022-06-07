<template>
  <v-container>
    <v-row style="height: 95px; background-color: #f8f8f8">
      <v-col cols="12" align-self="center">
        <v-icon x-large left>
          mdi-account-circle
        </v-icon>
        <span class="username">@{{ username }}</span>
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col class="pa-0" cols="12">
        <v-tabs v-model="tab" grow>
          <v-tabs-slider color="teal accent-3" />
          <v-tab
            v-for="(tabs, i) in tabsData"
            :key="i"
            style="color: black; font-weight: 600;"
          >
            {{ tabs.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <div v-for="(item, i) in achievement" :key="i" class="achievement">
              <div class="pl-1 timeline-text">
                <h4>
                  @{{ username }}님이
                  <h4 style="display: inline; color: red">
                    {{ item }}
                  </h4>
                  업적을 남기셨습니다
                </h4>
              </div>
              <v-divider />
            </div>
          </v-tab-item>
          <v-tab-item class="pa-2 pt-0">
            <SurveyCard :survey-data="surveyData" />
          </v-tab-item>
          <v-tab-item class="pa-2 pt-0">
            <SurveyCard :survey-data="surveyData" />
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SurveyCard from '../components/SurveyCard.vue'
export default {
  components: { SurveyCard },
  data () {
    return {
      username: 'jooyoung',
      tab: null,
      tabsData: [
        { title: '타임라인' },
        { title: '등록설문' },
        { title: '참여설문' }
      ],
      achievement: ['설문참여', '메롱'],
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
              color: 'yellow darken-3'
            }
          ]
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
              color: 'yellow darken-3'
            }
          ]
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
              color: 'yellow darken-3'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', this.username)
  }
}
</script>

<style scoped>
.timeline-text {
  margin: 25px 0;
}
</style>
