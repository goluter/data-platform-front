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
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-0" cols="12">
          <v-row
            class="my-0 py-2"
            style="background-color: #eeeeee"
          >
            <v-col class="" cols="12" style="display: flex; align-items: center">
              <v-row style="background-color: white">
                <v-col class="" cols="4" md="2">
                  <v-text-field
                    v-model="searchValue"
                    label="검색"
                    single-line
                    clearable
                    outlined
                    dense
                    append-icon="mdi-magnify"
                    style="height: 40px; border-radius: 45px"
                    @click:append="search(searchValue)"
                    @keyup.enter="search(searchValue)"
                  />
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
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0">
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-container class="pa-0">
                <v-row class="ma-0" justify="end" style="height: 60px">
                  <v-col cols="4" md="2">
                    <v-select
                      v-model="sortKey"
                      :items="sortOrder"
                      item-text="order"
                      item-value="sortKey"
                      label="정렬"
                      solo
                      flat
                      dense
                      single-line
                      @change="sort(sortKey)"
                    />
                  </v-col>
                </v-row>
              </v-container>
              <v-container>
                <NuxtLink
                  v-for="(item, j) in ongoingSurveyData"
                  :key="j"
                  :to="{path: 'view', query: { id: item.id }}"
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
                                    {{ item.answers }}명 참여중!
                                  </div>
                                  <div class="survey-tag ml-auto">
                                    <span
                                      style="color: dodgerblue"
                                    >
                                      {{ item.tag }}
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
            <v-tab-item>
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
                  v-for="(item, j) in endedSurveyData"
                  :key="j"
                  :to="{path: 'view', query: { id: item.id }}"
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
                                    {{ item.answers }}명 참여중!
                                  </div>
                                  <div class="survey-tag ml-auto">
                                    <span
                                      style="color: dodgerblue"
                                    >
                                      {{ item.tag }}
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
      searchKey: '',
      searchValue: '',
      sortKey: '',
      tab: null,
      bool: true,
      surveyTab: ['진행중', '마감'],
      surveyStatus: ['ongoing', 'end'],
      ongoingSurveyData: [],
      endedSurveyData: [],
      rewardsFilter: ['기프티콘', '포인트'],
      sortOrder: [
        { order: '최신순', sortKey: 'createdAt' },
        { order: '추천순', sortKey: 'goods' },
        { order: '마감순', sortKey: 'endAt' }
      ]
    }
  },
  created () {
    this.fetchData(0, 10, this.$route.query.searchKey, this.$route.query.searchValue)
  },
  mounted () {
    this.$store.commit('setPageTitle', '설문')
  },
  methods: {
    fetchData (page = 0, limit = 10, searchKey = false, searchValue = false, sortKey = false) {
      let url = ''
      if (searchKey && searchValue) {
        url = 'https://api.govey.app/users/v1/surveys/?page=' + page + '&limit=' + limit + '&searchKey=' + searchKey + '&searchValue=' + searchValue
      } else if (sortKey) {
        url = 'https://api.govey.app/users/v1/surveys/?sortKey=' + sortKey
      } else {
        url = 'https://api.govey.app/users/v1/surveys/?page=' + page + '&limit=' + limit
      }
      axios.get(url
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
            return rewardsData
          }).catch((error) => {
            console.log(error)
          })
          const mix = Object.assign({}, survey, { rewards })
          return mix
        })
        const data = await Promise.all(dataWithRewards)
        response.data.content = data
        this.surveyData = response.data.content
        const ongoingSurveyData = []
        const endedSurveyData = []
        const temp = this.surveyData
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].status === 'ongoing') {
            ongoingSurveyData.push(temp[i])
          } else {
            endedSurveyData.push(temp[i])
          }
        }
        this.ongoingSurveyData = ongoingSurveyData
        this.endedSurveyData = endedSurveyData
      }).catch((error) => {
        console.log(error)
      })
    },
    search (searchValue) {
      this.$router.push({ path: '/surveys/', query: { searchKey: 'subject', searchValue } }).catch(() => {})
      this.$router.replace(this.$router.currentRoute.fullPath)
    },
    sort (sortKey) {
      this.$router.push({ path: '/surveys/', query: { sortKey } }).catch(() => {})
      this.$router.replace(this.$router.currentRoute.fullPath)
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
