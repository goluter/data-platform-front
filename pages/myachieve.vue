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
    <div v-if="point == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum1 }}점 누적하셨어요!
      </div>
      <div v-for="(a, i) in achievepointdata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achievepointdata[i].title }}</span>
        <div class="point2">
          <div>포인트 {{ achievepointdata[i].count }}점 누적</div>
          <div class="grayfont">
            {{ achievepointdata[i].recent[i][1] }} 획득
          </div>
        </div>
      </div>
    </div>
    <div v-if="join == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum2 }}회 참여하셨어요!
      </div>
      <div v-for="(a, i) in achievejoindata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achievejoindata[i].title }}</span>
        <div class="point2">
          <div>{{ achievejoindata[i].count }}회 참여</div>
          <div class="grayfont">{{ achievejoindata[i].recent[i][1] }} 획득</div>
        </div>
      </div>
    </div>
    <div v-if="make == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum3 }}회 등록하셨어요!
      </div>
      <div v-for="(a, i) in achievemakedata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achievemakedata[i].title }}</span>
        <div class="point2">
          <div>{{ achievemakedata[i].count }}회 등록</div>
          <div class="grayfont">{{ achievemakedata[i].recent[i][1] }} 획득</div>
        </div>
      </div>
    </div>
    <div v-if="report == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum4 }}회 등록하셨어요!
      </div>
      <div v-for="(a, i) in achievereportdata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achievereportdata[i].title }}</span>

        <div class="point2">
          <div>{{ achievereportdata[i].count }}회 등록</div>
          <div class="grayfont">
            {{ achievereportdata[i].recent[i][1] }} 획득
          </div>
        </div>
      </div>
    </div>
    <div v-if="attend == true">
      <div class="banner2">
        {{ username }}님은 현재 {{ participatenum5 }}회 출석하셨어요!
      </div>
      <div v-for="(a, i) in achieveattenddata" :key="a" class="banner3">
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span style="padding-left: 3px">{{ achieveattenddata[i].title }}</span>
        <div class="point2">
          <div>{{ achieveattenddata[i].count }}회 출석</div>
          <div class="grayfont">
            {{ achieveattenddata[i].recent[i][1] }} 획득
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import achievejoindata from '../assets/data/achievejoindata.js'
import achievepointdata from '../assets/data/achievepointdata.js'
import achievemakedata from '../assets/data/achievemakedata.js'
import achievereportdata from '../assets/data/achievereportdata.js'
import achieveattenddata from '../assets/data/achieveattenddata.js'

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
      participatenum1: 2,
      participatenum2: 5,
      participatenum3: 6,
      participatenum4: 7,
      participatenum5: 8,
      achievejoindata,
      achievepointdata,
      achievemakedata,
      achievereportdata,
      achieveattenddata,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '내 업적')
  },
}
</script>

<style scoped>
.grayfont {
  padding-top: 7px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: #696969;
}
.point2 {
  float: right;
  margin: 12px 12px 0px 0px;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: var(--black);
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
  height: 66px;
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
