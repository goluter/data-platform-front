<template>
  <div>
    <v-tabs fixed-tabs color="#1cddb7">
      <v-tab
        @click="
          point = true
          nickname = false
          achieve = false
        "
      >
        포인트
      </v-tab>
      <v-tab
        @click="
          point = false
          nickname = true
          achieve = false
        "
      >
        칭호
      </v-tab>
      <v-tab
        @click="
          point = false
          nickname = false
          achieve = true
        "
      >
        업적
      </v-tab>
    </v-tabs>
    <div v-if="point == true">
      <div class="point-box">
        <div class="pt-5  d-flex justify-space-between">
          <div class = "pl-3 pt-2">
            포인트 어떻게 해야 얻을 수 있지?
          </div>
          <div class = "mr-3 pa-2 click-box">
            <NuxtLink to="/reward-list" style="color: black; text-decoration-line: none">
              <button>궁금하면 클릭!</button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        v-for="(a, i) in hofpoint"
        :key="a"
        class="contents"
      >
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span>{{ hofpoint[i].name }}</span>
        <div class="point">{{ hofpoint[i].point }} P</div>
      </div>
    </div>
        <div v-if="nickname == true">
      <div class="point-box">
        <div class="pt-5  d-flex justify-space-between">
          <div class = "pl-3 pt-2">
            칭호 어떻게 해야 얻을 수 있지?
          </div>
          <div class = "mr-3 pa-2 click-box">
            <NuxtLink to="/title-list" style="color: black; text-decoration-line: none">
              <button>궁금하면 클릭!</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    <div
      v-for="(a, i) in hofnickname"
      :key="a"
      
      class="contents"
    >
      <img class="profileimg" src="../assets/Male User.png" align="middle" />
      <span>{{ hofnickname[i].name }}</span>
      <div class="point2">{{ hofnickname[i].point }} 개</div>
    </div>
        </div>
    <div v-if="achieve == true">
      <div class="point-box">
        <div class="pt-5  d-flex justify-space-between">
          <div class = "pl-3 pt-2">
            업적 어떻게 해야 얻을 수 있지?
          </div>
          <div class = "mr-3 pa-2 click-box">
            <NuxtLink to="/reward-list" style="color: black; text-decoration-line: none">
              <button>궁금하면 클릭!</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    <div
      v-for="(a, i) in hofachieve"
      :key="a"
      
      class="contents"
    >
      <img class="profileimg" src="../assets/Male User.png" align="middle" />
      <span>{{ hofachieve[i].name }}</span>
      <div class="point2">{{ hofachieve[i].point }} 개</div>
    </div>
  </div>
  </div>
</template>

<script>
import hofpoint from '../assets/data/hofpoint.js'
import hofnickname from '../assets/data/hofnickname.js'
import hofachieve from '../assets/data/hofachieve.js'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      point: true,
      nickname: false,
      achieve: false,
      hofpoint,
      hofnickname,
      hofachieve,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '명예의 전당')
  },
}
</script>

<style scoped>
.point2 {
  float: right;
  margin: 4px 12px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.point {
  float: right;
  margin: 6px 12px 0px 0px;
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
}
.contents {
  height: 66px;
  flex-grow: 0;
  border-bottom: solid 1px #f0f0f0;
  padding: 20px 0px 0px 18px;
  background-color: #fff;
}
.contents span {
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000;
  margin-left: 5px;
}
.container {
  max-width: 500px;
}
.v-tab {
  font-size: 18px;
}
.point-box{
  background-color: #1087f4;
  height: 80px;
  color:white;
}
.click-box{
  background-color: white;
  color:black;
  border-radius: 1rem;
}
</style>
