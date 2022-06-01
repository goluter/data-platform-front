<template>
  <div>
    <div class="header">
      <NuxtLink
        to="/"
        style="color: black; text-decoration-line: none"
      >
        <img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
        >
      </NuxtLink>

      <a><span>포인트 이력</span></a>
    </div>
    <div v-for="(a, i) in PointData" :key="a" class="pointbox">
      <NuxtLink
        :to="PointData[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="boxdate">
          {{ PointData[i].date }}
        </div>
        <div class="boxtitle">
          {{ PointData[i].title }}
        </div>
        <div v-if="PointData[i].sign == '+'" class="boxreward1">
          {{ PointData[i].sign }}{{ PointData[i].reward }}
          <div class="pointsum">
            {{ PointData[i].sum }}
          </div>
        </div>
        <div v-if="PointData[i].sign == '-'" class="boxreward2">
          {{ PointData[i].reward }}
          <div class="pointsum">
            {{ PointData[i].sum }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import PointData from '../assets/data/Pointdata'
export default {
  name: 'Point',
  layout: 'default',
  data () {
    return {
      PointData,
      sumpoint: 0
    }
  }
}
</script>

<style>
.pointsum {
  flex-grow: 0;
  padding: 5px 0px 0px 0px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: #8f8f8f;
}
.boxdate {
  flex-grow: 0;
  padding: 15px 0 0 11px;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  float: left;
  font-family: DMSans;
  color: #8f8f8f;
}
.boxreward1 {
  flex-grow: 0;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  float: right;
  font-family: DMSans;
  color: #1087f4;
  padding: 15px 14px 0px 0px;
}
.boxreward2 {
  flex-grow: 0;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  float: right;
  font-family: DMSans;
  color: #ff2323;
  padding: 15px 14px 0px 0px;
}
.boxtitle {
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  float: left;
  color: #000;
  font-family: DMSans;
  padding: 15px 0px 0px 54px;
}
.pointbox {
  height: 76px;
  flex-grow: 0;
  margin: 0 0 0 0;
  border-bottom: 1px solid #dedede;
  overflow: hidden;
}
.container {
  padding: 0px;
}
.banner {
  background-color: #eee;
  height: 96px;
  padding: 2%;
  width: 100%;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
  width: 100%;
  background-color: white;
}
.header span {
  flex-grow: 0;
  margin: auto;
  display: table;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  color: #434343;
  z-index: 1;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: hidden;
  height: 87px;
}
.contents a {
  text-decoration: none;
}
</style>
