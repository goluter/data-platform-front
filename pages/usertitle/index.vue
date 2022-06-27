<template>
  <div class="container">
    <div v-for="(a, i) in UsertitleData" :key="a">
      <NuxtLink
        :to="UsertitleData[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="contents">
          <img
            class="profileimg"
            src="../../assets/Male User.png"
            align="middle"
          />
          <span style="margin-top: 100px">{{ UsertitleData[i].title }}</span>
          <!-- <div class="point">{{ UsertitleData[i].whether }}</div> -->
          <div v-if="UsertitleData[i].whether == true" class="point-true">
            획득
          </div>
          <div v-if="UsertitleData[i].whether == false" class="point-false">
            미획득
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import UsertitleData from '../../assets/data/UsertitleData'
export default {
  name: 'Notice',
  data() {
    return {
      UsertitleData,
      num: 0,
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
.point-true {
  float: right;
  margin: 6px 12px 0px 0px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: #1087f4;
}
.point-false {
  color: #ed5e21;
  float: right;
  margin: 6px 12px 0px 0px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
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
