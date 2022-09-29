<template>
  <div class="wrapper">
    <div class="survey-wrapper">
      <v-container>
        <v-row>
          <v-col class="survey-img-box col-3">
            <div class="survey-img" />
          </v-col>
          <v-col class="survey-content col-9">
            <span class="survey-title">
              {{ surveyData.subject }}
            </span>
            <span class="survey-period"> {{ surveyData.startAt | date }} ~ {{ surveyData.endAt | date }} </span>
            <div class="survey-count-tags">
              <span class="survey-count"> {{ surveyData.hits }}명이 참여 중 </span>
              <span class="survey-tags">
                {{ surveyData.tag }}
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyCardSingle',
  props: {
    surveyData: {
      type: Array
    }
  }
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
  font-weight: bold;
  font-size: 14px;
}
.survey-period {
  margin-bottom: 20px;
  font-size: 14px;
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
