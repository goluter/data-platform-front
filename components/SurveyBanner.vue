<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in surveyData"
        :key="i"
        class="banner-wrapper ma-auto"
        cols="12"
        sm="5"
        md="5"
      >
        <NuxtLink class="survey-box rounded-xl elevation-3" :to="'/surveys/view?id=' + item.id">
          <v-row class="">
            <v-col class="pl-2" cols="auto">
              <div class="banner-img-box">
                <img v-if="item.imageUrl" :src="item.imageUrl" width="60" height="60" style="border-radius: 14px;">
              </div>
            </v-col>
            <v-col class="pl-0 pr-2 grow" cols="auto">
              <v-row class="banner-title">
                <v-col class="" cols="12">
                  {{ item.subject }}
                </v-col>
              </v-row>
              <v-row class="mt-0 pl-0">
                <v-col cols="1" />
                <v-col class="ml-auto pt-0 pb-0" cols="auto">
                  <span class="banner-left-time"> {{ diffDate(item.createdAt, item.endAt) }}일 남음 </span>
                </v-col>
              </v-row>
              <v-row class="banner-count-tags">
                <v-col class="pt-0 pb-0" cols="auto">
                  {{ item.answers }}명 참여중!
                </v-col>
                <v-col class="ml-auto pt-0 pb-0 banner-tags" cols="auto">
                  {{ item.tag }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row class="rounded-xl elevation-3">
            <v-col
              class="pl-2 d-flex"
              cols="12"
              style="align-items: flex-end"
            >
              <v-icon>mdi-arrow-right-bottom</v-icon>
              <v-col
                v-for="(reward, i) in item.rewards"
                :key="i"
                cols="auto"
                class="reward-item-box pa-1"
              >
                <div v-if="reward.type === 'point'" class="reward">
                  <v-icon small color="yellow darken-3">
                    mdi-circle-multiple
                  </v-icon>
                  <b>{{ reward.value.substring(0, 3) }}</b>
                </div>
                <div v-if="reward.type === 'giftcon'">
                  <v-icon small color="red">
                    mdi-gift
                  </v-icon>
                  <b>{{ reward.value.substring(0, 3) }}</b>
                </div>
              </v-col>
            </v-col>
          </v-row>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  name: 'SurveyBox',
  props: {
    surveyData: {
      type: Array
    }
  },
  methods: {
    diffDate (date1, date2) {
      const d1 = moment(date1)
      const d2 = moment(date2)
      const dur = moment.duration(d2.diff(d1))
      const days = dur.asDays()
      return Math.round(days)
    }
  }
}
</script>

<style scoped>
.banner-wrapper {
  height: 150px;
  z-index: 1;
}
.survey-box {
  position: relative;
  background-color: white;
  z-index: 1;
}
.banner-img-box {
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #a7a7a7;
  border-radius: 14px;
}
.banner-title {
  display: block;
  font-weight: bold;
  font-size: 14px;
}
.banner-left-time {
  align-self: end;
  font-size: 10px;
}
.banner-count-tags {
  font-size: 10px;
}
.banner-tags {
  text-decoration: none;
  color: rgba(48, 205, 174, 0.87);
}
.survey-box-bottom {
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid;
  background-color: #494949;
  z-index: 0;
}
.reward-item-box {
  display: inline;
  align-items: center;
  background-color: white;
  border-radius: 24px;
  font-size: 10px;
}
.reward {
  display: flex;
  align-items: center;
}
</style>
