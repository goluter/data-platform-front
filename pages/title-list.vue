<template>
  <div class="container">
    <div v-for="(a, i) in hofpoint" :key="a" class="contents">
      <img class="profileimg" src="../assets/Male User.png" align="middle" />
      <span>{{ hofpoint[i].name }}</span>
      <div class="point">{{ hofpoint[i].point }} P</div>
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
      hofpoint,
      hofnickname,
      hofachieve,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '칭호')
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
  border: solid 1px #f0f0f0;
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
</style>
