<template>
  <div class="wrapper">
    <div v-for="(item, i) in surveyData" :key="i" class="survey-wrapper">
      <v-row>
        <v-col class="survey-img-box col-3">
          <div class="survey-img" />
        </v-col>
        <v-col class="survey-content col-9">
          <span class="survey-title">
            {{ item.title }}
          </span>
          <span class="survey-left-time"> {{ item.left }}일 남음 </span>
          <div class="survey-count-tags">
            <span class="survey-count"> {{ item.count }}명이 참여 중 </span>
            <span v-for="tags in item.tags" class="survey-tags">
              <a href="">#{{ tags }}</a>
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyCard',
  props: {
    surveyData: {
      type: Array,
      default: [],
    },
  },
}
</script>

<style scoped>
.wrapper {
  margin-top: 10px;
}
.survey-img {
  padding: 3%;
  width: 100%;
  height: 100%;
  background-color: #a7a7a7;
  border-radius: 14px;
}
.survey-content {
  display: flex;
  flex-direction: column;
  margin-top: 1%;
}
.survey-title {
  display: block;
  margin-bottom: 13px;
  font-weight: bold;
  font-size: 14px;
}
.survey-left-time {
  margin-bottom: 2px;
  text-align: right;
  font-size: 10px;
}
.survey-count-tags {
  font-size: 10px;
}
.survey-tags {
  float: right;
  margin: 1px;
}
.survey-tags a {
  color: rgba(48, 205, 174, 0.87);
  text-decoration: none;
}
</style>
