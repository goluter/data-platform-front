<template>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-row>
        <v-col class="d-flex pr-0" cols="auto">
          <div class="survey-img" />
        </v-col>
        <v-col class="d-flex" cols="auto" style="align-self: center">
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col class="pb-0" cols="12" style="font-size: 12px;">
                  {{ surveyData.title }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0" cols="12" style="font-size: 10px">
                  {{ surveyData.start }} ~ {{ surveyData.end }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto" style="font-size: 10px">
                  {{ surveyData.count | comma }}명이 참여 중
                </v-col>
                <v-col class="ml-auto pr-0" cols="auto" style="font-size: 10px">
                  <span
                    v-for="(item, i) in surveyData.tags"
                    :key="i"
                  >
                    <NuxtLink to="" style="text-decoration: none; color: rgba(37, 144, 222, 0.87)">#{{ item }} </NuxtLink>
                  </span>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
  align-self: center;
  width: 60px;
  height: 60px;
  background-color: #a7a7a7;
  border-radius: 14px;
}
</style>
