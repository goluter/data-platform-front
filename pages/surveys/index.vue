<template>
  <div class="wrapper">
    <v-container>
      <v-row>
        <v-col class="pa-0" cols="12">
          <template>
            <v-tabs v-model="tab" slider-color="teal accent-3" grow>
              <v-tab
                v-for="(item, i) in surveyTab"
                :key="i"
                style="color: black; font-weight: 600;"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="(item, i) in surveyTab"
              :key="i"
            >
              <v-row
                class="my-0 py-2 px-1"
                style="background-color: #eeeeee"
              >
                <v-col class="" cols="12" style="display: flex; align-items: center">
                  <v-row style="background-color: white">
                    <v-col class="" cols="4" md="2">
                      <v-form style="height: 40px">
                        <v-text-field
                          label="검색"
                          single-line
                          clearable
                          outlined
                          dense
                          append-icon="mdi-magnify"
                          style="height: 40px; border-radius: 45px"
                        />
                      </v-form>
                    </v-col>
                    <v-col cols="4" md="2">
                      <v-select
                        :items="rewardsFilter"
                        label="보상 종류"
                        single-line
                        clearable
                        outlined
                        dense
                        style="height: 40px; border-radius: 45px"
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-container class="pa-0">
                <v-row class="ma-0" justify="end" style="height: 60px">
                  <v-col cols="4">
                    <v-select
                      :items="sort"
                      label="최신순"
                      solo
                      flat
                      dense
                    />
                  </v-col>
                </v-row>
              </v-container>
              <v-container>
                <NuxtLink
                  v-for="(item, i) in surveyData"
                  :key="i"
                  to="/surveys/1"
                  style="text-decoration: none; color: initial"
                >
                  <v-row>
                    <v-col class="pb-0" cols="12">
                      <v-row>
                        <v-col cols="auto">
                          <div class="thumbnail" />
                        </v-col>
                        <v-col class="grow" cols="auto">
                          <v-row>
                            <v-col cols="12">
                              <v-row>
                                <v-col class="survey-title pb-0" cols="12">
                                  {{ item.title }}
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="survey-period py-0" cols="12">
                                  {{ item.period[0] }} ~ {{ item.period[1] }}
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="survey-stat d-flex" cols="12">
                                  <div class="report-likes mr-2">
                                    {{ item.count }} 명 참여 중!
                                  </div>
                                  <div class="survey-tag ml-auto">
                                    <span
                                      v-for="(tag, i) in item.tags"
                                      :key="i"
                                      style="color: dodgerblue"
                                    >
                                      #{{ tag }}
                                    </span>
                                  </div>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pb-5" cols="12">
                      <div class="reward-box-triangle ma-auto" />
                      <div class="reward-box">
                        <v-container>
                          <v-row>
                            <v-col
                              v-for="(reward, i) in item.rewards"
                              :key="i"
                              cols="auto"
                              class="reward-item-box pa-1 rounded-x1"
                            >
                              <div>
                                <v-icon small :color="reward.color">
                                  {{ reward.icon }}
                                </v-icon>
                                <span>{{ reward.title }}</span>
                              </div>
                            </v-col>
                          </v-row>
                        </v-container>
                      </div>
                    </v-col>
                  </v-row>
                </nuxtlink>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      surveyTab: ['진행중', '마감'],
      rewardsFilter: ['기프티콘', '포인트'],
      sort: ['최신순', '추천순', '댓글순'],
      surveyData: [
        {
          id: 1,
          title: '대학생들에게 묻습니다',
          period: ['2022.09.22', '2022.09.27'],
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
          id: 2,
          title: '대학생들에게 묻습니다',
          period: ['2022.09.22', '2022.09.27'],
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
          id: 3,
          title: '대학생들에게 묻습니다',
          period: ['2022.09.22', '2022.09.27'],
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
          id: 4,
          title: '대학생들에게 묻습니다',
          period: ['2022.09.22', '2022.09.27'],
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
    this.$store.commit('setPageTitle', '설문')
  }
}
</script>

<style scoped>
.thumbnail {
  width: 60px;
  height: 60px;
  background-color: #eeeeee;
  border-radius: 10px;
}
.survey-title {
  font-size: 14px;
  font-weight: bold;
}
.survey-period {
  font-size: 14px;
}
.survey-stat {
  font-size: 12px;
}
.reward-box-triangle {
  height: 0;
  width: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #1de9b6;
  border-left: 5px solid transparent;
}
.reward-box {
  padding: 10px;
  width: 100%;
  height: 45px;
  background-color: #1de9b6;
  border-radius: 10px;
}
.reward-item-box {
  display: inline;
  align-items: center;
  margin: 0 7px 0 0;
  background-color: white;
  border-radius: 24px;
  font-size: 10px;
}
</style>
