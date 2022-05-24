<template>
  <div>
    <div class="header">
      <NuxtLink to="/" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <a><span>알림</span></a>
    </div>
    <div class="box">
      <div class="boxtitle">설문 알림</div>
      <div class="boxcomment">
        <span>상명대 학생 설문</span>에 참여완료되셨어요!
      </div>
      <div class="boxdate">1일전</div>
    </div>
    <div class="box">
      <div class="boxtitle">보상 알림</div>
      <div class="boxcomment">
        <span>상명대 학생 설문</span>에 참여 보상으로 100포인트가
        지급되셨습니다!
      </div>
      <div class="boxdate">1일전</div>
    </div>
  </div>
</template>

<script>
import GuideData from '../assets/data/GuideData'
export default {
  name: 'push',
  layout: 'default',
  data() {
    return {
      GuideData,
      selectnum: 0,
    }
  },
}
</script>

<style>
.boxdate {
  flex-grow: 0;
  padding: 8px 14px 0px 233px;
  font-family: Inter;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: #000;
}
.boxcomment {
  flex-grow: 0;
  padding: 9px 0px 0px 12px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000;
}
.boxcomment span {
  color: #1087f4;
}
.boxtitle {
  flex-grow: 0;
  padding: 16px 0px 0px 12px;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.box {
  height: 96px;
  flex-grow: 0;
  margin: 0 0 0 0;
  border-bottom: 1px solid #dedede;
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
