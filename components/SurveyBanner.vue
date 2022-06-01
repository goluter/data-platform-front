<template>
  <div class="banner">
    <div v-for="item in surveyData" class="banner-wrapper">
      <div class="survey-box rounded-xl elevation-1">
        <div class="banner-img-box">
          <div class="banner-img" />
        </div>
        <div class="banner-content">
          <span class="banner-title">
            {{ item.title }}
          </span>
          <span class="banner-left-time"> {{ item.left }}일 남음 </span>
          <div class="banner-count-tags">
            <span class="banner-count"> {{ item.count }}명이 참여 중 </span>
            <span v-for="tags in item.tags" class="banner-tags">
              <a href="">#{{ tags }}</a>
            </span>
          </div>
        </div>
      </div>
      <div class="survey-box-bottom rounded-xl elevation-5">
        <div class="reward-box">
          <div
            v-for="reward in item.rewards"
            class="reward-item-box rounded-x1"
          >
            <v-icon small :color="reward.color">
              {{ reward.icon }}
            </v-icon>
            {{ reward.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
  width: 100%;
  height: 130px;
  z-index: 1;
}
.survey-box {
  display: flex;
  position: relative;
  margin: auto auto auto 0;
  width: 90%;
  height: 90px;
  background-color: white;
  z-index: 1;
}
.banner-img-box {
  display: inline-block;
  margin: 2%;
  width: 65px;
  height: 70px;
  background-color: #a7a7a7;
  border-radius: 14px;
}
.banner-content {
  display: flex;
  flex-direction: column;
  padding: 3% 3% 3% 3px;
  width: 80%;
}
.banner-title {
  display: block;
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 14px;
}
.banner-left-time {
  margin-bottom: 2px;
  text-align: right;
  font-size: 10px;
}
.banner-count-tags {
  font-size: 10px;
}
.banner-tags {
  float: right;
  margin: 1px;
}
.banner-tags a {
  color: rgba(48, 205, 174, 0.87);
  text-decoration: none;
}
.survey-box-bottom {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  width: 90%;
  height: 130px;
  top: -90px;
  border: 1px solid;
  background-color: #494949;
  z-index: 0;
}
.reward-box {
  height: 32px;
}
.reward-item-box {
  display: inline;
  vertical-align: center;
  margin: 0 5px 0 7px;
  padding: 3px;
  width: 70px;
  height: 30px;
  background-color: white;
  border-radius: 24px;
}
</style>
