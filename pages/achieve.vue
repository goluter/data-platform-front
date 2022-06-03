<template>
  <div class="container">
    <v-tabs
      next-icon="mdi-arrow-right"
      prev-icon="mdi-arrow-left"
      show-arrows
      center-active
      color="#1cddb7"
      style="margin-right: 1000px"
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
    <div
      v-for="(a, i) in pointEvent"
      v-if="point == true"
      :key="a"
      class="contents"
    ></div>
    <div class="banner2">
      {{ username }}님은 현재 {{ participatenum }}회 참여하셨어요!
    </div>
    <div v-for="" class="banner3">ㅁㄴㅇ</div>
  </div>
</template>

<script>
import userdata from '../assets/data/UserData.js'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      point: true,
      join: false,
      make: false,
      username: '준구파워',
      participatenum: 2,
      userdata,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '업적')
  },
}
</script>

<style scoped>
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
  margin: 26px 0px 26px 0px;
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
