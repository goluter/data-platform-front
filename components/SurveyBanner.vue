<template>
  <v-container>
    <v-row
      v-for="(item, i) in surveyData"
      :key="i"
      class="banner-wrapper mb-6"
    >
      <v-col class="pt-0" cols="12">
        <v-row class="survey-box rounded-xl elevation-3">
          <v-col cols="3" sm="2" md="1">
            <div class="banner-img-box" />
          </v-col>
          <v-col class="ml-auto pl-0" cols="9" sm="10" md="11">
            <v-row class="banner-title">
              <v-col class="" cols="12">
                {{ item.title }}
              </v-col>
            </v-row>
            <v-row class="mt-0 pl-0">
              <v-col cols="1" />
              <v-col class="ml-auto pt-0 pb-0" cols="auto">
                <span class="banner-left-time"> {{ item.left }}일 남음 </span>
              </v-col>
            </v-row>
            <v-row class="banner-count-tags">
              <v-col class="pt-0" cols="auto">
                {{ item.count }}명이 참여 중
              </v-col>
              <v-col class="ml-auto pt-0" cols="auto">
                <a v-for="(tags, i) in item.tags" :key="i" class="banner-tags" href="/">
                  #{{ tags }}
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="survey-box-bottom rounded-xl elevation-3">
          <v-col
            class="reward-box pb-2 d-flex"
            cols="12"
            style="align-items: flex-end"
          >
            <v-col
              v-for="(reward, i) in item.rewards"
              :key="i"
              cols="auto"
              class="reward-item-box pa-2 rounded-x1"
            >
              <v-icon small :color="reward.color">
                {{ reward.icon }}
              </v-icon>
              {{ reward.title }}
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SurveyBox',
  props: {
    surveyData: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.banner-wrapper {
  margin-top: 20px;
  height: 130px;
  z-index: 1;
}
.survey-box {
  display: flex;
  position: relative;
  background-color: white;
  z-index: 1;
}
.banner-img-box {
  display: inline-block;
  width: 100%;
  height: 100%;
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
  height: 110%;
  margin-top: -84px;
  border: 1px solid;
  background-color: #494949;
  z-index: 0;
}
.reward-box {
  height: 32px;
}
.reward-item-box {
  display: inline;
  align-items: center;
  margin: 0 7px 0 0;
  height: 30px;
  background-color: white;
  border-radius: 24px;
  font-size: 10px;
}
</style>
