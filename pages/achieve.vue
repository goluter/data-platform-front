<template>
  <div class="container">
    <v-tabs
      next-icon="mdi-arrow-right"
      prev-icon="mdi-arrow-left"
      show-arrows
      center-active
      color="#1cddb7"
    >
      <v-tab
        @click="
          point = true
          join = false
          make = false
          report = false
          attend = false
        "
      >
        포인트
      </v-tab>
      <v-tab
        @click="
          point = false
          join = true
          make = false
          report = false
          attend = false
        "
      >
        설문 참여
      </v-tab>
      <v-tab
        @click="
          point = false
          join = false
          make = true
          report = false
          attend = false
        "
      >
        설문 등록
      </v-tab>
      <v-tab
        @click="
          point = false
          join = false
          make = false
          report = true
          attend = false
        "
      >
        리포트
      </v-tab>
      <v-tab
        @click="
          point = false
          join = false
          make = false
          report = false
          attend = true
        "
      >
        출석
      </v-tab>
    </v-tabs>
    <div v-if="join == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum }}회 참여하셨어요!
      </div>
      <div v-for="(a, i) in achievedata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achievedata[i].title }}</span>
        <div class="point2">{{ achievedata[i].count }}회 참여</div>
      </div>
    </div>
  </div>
</template>

<script>
import achievedata from '../assets/data/achievedata.js'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      point: true,
      join: false,
      make: false,
      report: false,
      attend: false,
      username: '준구파워',
      participatenum: 2,
      achievedata,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '업적')
  },
}
</script>

<style scoped>
.point2 {
  float: right;
  margin: 20px 12px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 20px 0px 20px 0px;
}
.container {
  max-width: 500px;
}
.v-tab {
  font-size: 18px;
}
.eventtitle {
  flex-grow: 0;
  margin: 24px 0px 0px 17px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.banner3 {
  flex-grow: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  border: 1px solid #f0f0f0;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  color: #000;
}
.banner2 {
  flex-grow: 0;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  margin: 26px 0px 26px 0px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: center;
  color: #000;
}
.header span {
  flex-grow: 0;
  margin: auto;
  display: table;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  color: #434343;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: auto;
}
.contents a {
  text-decoration: none;
}
.date {
  flex-grow: 0;
  margin: 13px 0px 19px 17px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
}
</style>
