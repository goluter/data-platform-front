<template>
  <div class="container">
    <div v-for="(a, i) in MyTitleData" :key="a">
      <div class="contents">
        <img
          class="profileimg"
          src="../../assets/Male User.png"
          align="middle"
        />
        <span style="margin-top: 100px">{{ MyTitleData[i].title[i][0] }}</span>
        <div class="point-true">{{ MyTitleData[i].title[i][1] }} 획득</div>
      </div>
    </div>
  </div>
</template>

<script>
import MyTitleData from '../../assets/data/MyTitleData.js'
export default {
  name: 'Notice',
  data() {
    return {
      MyTitleData,
      num: 0,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '내 칭호')
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
.point-true {
  float: right;
  margin: 3px 12px 0px 0px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: #696969;
}
.profileimg {
  width: 27px;
  height: 27px;
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
  font-size: 14px;
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
