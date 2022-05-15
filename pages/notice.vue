<template>
  <div>
    <div class="header">
      <NuxtLink to="/m_index" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <NuxtLink to="/notice" style="color: black; text-decoration-line: none"
        ><span>공지사항</span></NuxtLink
      >
    </div>
    <div class="banner">
      <div style="padding: 22px 0px 0px 18px">브루스 배너</div>
    </div>

    <div v-for="(a, i) in NoticeData" :key="a" class="contents">
      <NuxtLink
        :to="NoticeData[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="noticetitle">{{ NoticeData[i].title }}</div>
        <div class="date">{{ NoticeData[i].date }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import NoticeData from '../assets/data/NoticeData.js'
export default {
  name: 'notice',
  layout: 'default',
  data() {
    return {
      NoticeData,
      num: 0,
    }
  },
}
</script>

<style>
.noticetitle {
  flex-grow: 0;
  margin: 24px 0px 0px 18px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.container {
  padding: 0px;
}
.banner {
  background-color: #eee;
  height: 96px;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 9px 10px 12px 11px;
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
  margin: 13px 0px 19px 18px;
  font-family: Roboto;
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
