<template>
  <div class="wrapper">
    <div class="survey-wrapper">
      <v-row>
        <v-col class="mr-auto" cols="12" sm="5" md="5">
          <v-row>
            <v-col class="survey-img-box pr-0" cols="3">
              <div class="survey-img" />
            </v-col>
            <v-col class="survey-content pl-0" cols="9">
              <div>
                <span class="survey-title">
                  {{ surveyData.title }}
                </span>
                <span class="survey-period"> {{ surveyData.start }} ~ {{ surveyData.end }} </span>
                <div class="survey-count-tags">
                  <span class="survey-count"> {{ surveyData.count | comma }}명이 참여 중 </span>
                  <span
                    v-for="(item, i) in surveyData.tags"
                    :key="i"
                    class="survey-tags"
                  >
                    <NuxtLink to="">#{{ item }}</NuxtLink>
                  </span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    surveyData: {
      type: Object
    }
  }
}
</script>

<style scoped>
.survey-img {
  width: 60px;
  height: 60px;
  background-color: #a7a7a7;
  border-radius: 14px;
}
.survey-content {
  display: flex;
  flex-direction: column;
}
.survey-title {
  display: block;
  font-weight: bold;
  font-size: 14px;
}
.survey-period {
  margin-bottom: 13px;
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
  text-decoration: none;
}
</style>
