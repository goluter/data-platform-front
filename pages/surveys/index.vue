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
                  :to="'users/v1/surveys/'+item.id"
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
                                  {{ item.subject }}
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="survey-period py-0" cols="12">
                                  {{ item.startAt | date }} ~ {{ item.endAt | date }}
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="survey-stat d-flex" cols="12">
                                  <div class="report-likes mr-2">
                                    {{ item.hit }} 명 참여 중!
                                  </div>
                                  <div class="survey-tag ml-auto">
                                    <span
                                      v-for="(tag, i) in item.tag"
                                      :key="i"
                                      style="color: dodgerblue"
                                    >
                                      {{ tag }}
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
                              <div v-if="reward.type === 'giftcon'">
                                <v-icon small color="red">
                                  mdi-gift
                                </v-icon>
                                <span>{{ reward.value }}</span>
                              </div>
                              <div v-if="reward.type === 'point'">
                                <v-icon small color="yellow darken-3">
                                  mdi-circle-multiple
                                </v-icon>
                                <span>{{ reward.value }}</span>
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
import axios from 'axios'

export default {
  data () {
    return {
      page: 0,
      limit: 10,
      tab: null,
      surveyTab: ['진행중', '마감'],
      surveyData: [],
      rewardsFilter: ['기프티콘', '포인트'],
      sort: ['최신순', '추천순', '댓글순']
    }
  },
  created () {
    this.fetchData(this.page, this.limit)
  },
  mounted () {
    this.$store.commit('setPageTitle', '설문')
  },
  methods: {
    fetchData (page, limit) {
      axios.get(
        'https://api.govey.app/users/v1/surveys/?page=' +
          page +
          '&limit=' +
          limit
      ).then(async (response) => {
        const dataWithRewards = response.data.content.map(async (survey) => {
          const rewards = await axios.get(
            'https://api.govey.app/users/v1/surveys/' +
              survey.id +
              '/rewards/'
          ).then((response) => {
            const rewardsData = []
            for (let i = 0; i < response.data.length; i++) {
              const dic = {
                type: response.data[i].type,
                value: response.data[i].value
              }
              rewardsData.push(dic)
            }
            console.log(rewardsData)
            return rewardsData
          }).catch((error) => {
            console.log(error)
          })
          const mix = Object.assign({}, survey, { rewards })
          console.log(mix)
          return mix
        })
        const data = await Promise.all(dataWithRewards)
        response.data.content = data
        this.surveyData = response.data.content
      }).catch((error) => {
        console.log(error)
      })
    }
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
