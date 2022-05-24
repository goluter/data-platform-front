<template>
  <div>
    <div class="header">
      <NuxtLink to="/" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <a><span>내 댓글 이력</span></a>
    </div>
    <div class="box">
      <div class="boxtitle">상명대학교 학생들에게 물어봅니다.</div>
      <div class="boxcomment">아 ㅋㅋ 설문 재밌네</div>
      <div class="boxdate">2022.02.01 17:23:24</div>
    </div>
  </div>
</template>

<script>
import GuideData from '../assets/data/GuideData'
export default {
  name: 'comment',
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
