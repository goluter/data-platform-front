<template>
  <div>
    <div class="header">
      <img
        style="position: absolute"
        src="../assets/Arrow back ios.png"
        ALIGN="left"
      />
      <span>공지사항</span>
    </div>
    <div class="banner">
      <div>브루스 배너</div>
    </div>

    <div v-for="(a, i) in NoticeData" :key="a" class="contents">
      <div>{{ NoticeData[i].title }}</div>
      <div class="date">{{ NoticeData[i].date }}</div>
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
    }
  },
}
</script>

<style>
.container {
  padding: 0px;
}
.banner {
  background-color: #eee;
  height: 5rem;
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
  font-size: 1rem;
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
  padding: 2%;
  position: relative;
  overflow: hidden;
}

.date {
  font-size: 10px;
}
</style>
