<template>
  <v-container style="align-items: center">
    <v-row style="height: 95px; background-color: #f8f8f8">
      <v-col cols="1" align-self="center">
        <v-icon x-large>
          mdi-account-circle
        </v-icon>
      </v-col>
      <v-col cols="11" align-self="center">
        <span class="username">@{{ username }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs v-model="tab" grow>
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
            <div v-for="(item, i) in achievement" :key="i" class="achievement">
              <h4 class="achievement-text">
                @{{ username }}님이
                <h4 style="display: inline; color: red">
                  {{ item }}
                </h4>
                업적을 남기셨습니다
              </h4>
              <v-divider />
            </div>
          </v-tab-item>
          <v-tab-item>
            <survey-card :survey-data="surveyData" />
          </v-tab-item>
          <v-tab-item>
            <survey-card :survey-data="surveyData" />
          </v-tab-item>
          <v-tab-item>
            <v-list v-for="(item, i) in listData" :key="i">
              <v-subheader>{{ item.subheader }}</v-subheader>
              <v-list-item-group>
                <v-list-item
                  v-for="(link, i) in item.item"
                  :key="i"
                  :to="link.to"
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
import SurveyCard from '../components/SurveyCard.vue'
export default {
  name: 'MyPage',
  components: { SurveyCard },
  data () {
    return {
      tab: null,
      username: 'jooyoung',
      tabsData: [
        { title: '타임라인' },
        { title: '등록설문' },
        { title: '참여설문' },
        { title: '더보기' }
      ],
      achievement: ['설문 참여', '대학생'],
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
      ],
      listData: [
        {
          subheader: '설문',
          item: [
            { title: '내 설문', to: '/' },
            { title: '내 리포트', to: '/' },
            { title: '내 댓글', to: '/' },
            { title: '스크랩', to: '/' },
            { title: '다운로드 기록', to: '/' }
          ]
        },
        {
          subheader: '보상',
          item: [
            { title: '내 포인트', to: '/' },
            { title: '구매내역', to: '/' }
          ]
        },
        {
          subheader: '기타',
          item: [
            { title: '로그아웃', to: '/' },
            { title: '회원탈퇴', to: '/' }
          ]
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', 'jooyoung')
  }
}
</script>

<style scoped>
.username {
  margin-left: 15px;
}
.achievement-text {
  margin: 25px 0;
}
</style>
