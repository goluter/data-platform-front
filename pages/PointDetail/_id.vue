<template>
  <div>
    <div class="header">
      <NuxtLink
        to="/point"
        style="color: black; text-decoration-line: none"
      >
        <img
          style="position: absolute"
          src="../../assets/Arrow back ios.png"
          ALIGN="left"
        >
      </NuxtLink>

      <a><span>상세내역</span></a>
    </div>
    <div class="box">
      <div class="subbox">
        <img
          class="profileimg"
          src="../../assets/Male User.png"
          align="middle"
        >
        <span>{{ username }}</span>
      </div>
      <div v-if="PointData[$route.params.id].sign == '+'" class="point1">
        {{ PointData[$route.params.id].sign
        }}{{ PointData[$route.params.id].reward }}
      </div>
      <div v-if="PointData[$route.params.id].sign == '-'" class="point2">
        {{ PointData[$route.params.id].reward }}
      </div>
      <div class="onemain">
        <div class="onetitle">
          거래시간
        </div>
        <div class="time">
          {{ PointData[$route.params.id].datedetail }}
        </div>
      </div>
      <div class="onemain">
        <div class="onetitle">
          수신
        </div>
        <div class="time">
          {{ PointData[$route.params.id].reward }}
        </div>
      </div>
      <div class="onemain">
        <div class="onetitle">
          송금
        </div>
        <div class="time">
          {{ username }}
        </div>
      </div>
    </div>
    <div style="height: 50vh; background-color: #f0f0f0" />
  </div>
</template>

<script>
import PointData from '../../assets/data/Pointdata'
export default {
  name: 'Planneddetail',
  layout: 'default',
  data () {
    return {
      PointData,
      selectnum: 0,
      username: '고베이'
    }
  }
}
</script>

<style>
.onemain {
  height: 42px;
  flex-grow: 0;
  background-color: #fff;
}
.onetitle {
  float: left;
  margin: 4px 0px 0px 16px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: #8f8f8f;
}
.time {
  float: right;
  margin: 7px 16px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.point2 {
  flex-grow: 0;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.6px;
  text-align: left;
  color: #ff2323;
  padding: 0px 0px 0px 14px;
  font-family: Inter;
  height: 57px;
}
.point1 {
  flex-grow: 0;
  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.6px;
  text-align: left;
  color: #1087f4;
  padding: 0px 0px 0px 14px;
  font-family: Inter;
  height: 57px;
}
.subbox {
  padding: 29px 0px 0px 13px;
}
.box span {
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
  color: #000;
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.box {
  flex-grow: 0;
  height: 272px;
  background-color: #ffffff;
}
.noticemain {
  width: 204px;
  height: 16px;
  margin: 32px 0px 0px 18px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.noticeimg {
  width: 322px;
  height: 251px;
  margin: 30px 0px 0 15px;
  border-radius: 20px;
}
.noticetitle {
  flex-grow: 0;
  margin: 24px 0px 0px 18px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
  width: 200px;
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

  width: 100%;
  background-color: white;
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
.date {
  width: 200px;
  height: 14px;
  flex-grow: 0;
  margin: 13px 0px 19px 18px;
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
