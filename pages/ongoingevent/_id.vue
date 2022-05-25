<template>
  <div>
    <div class="header">
      <NuxtLink to="/eventlist" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <a><span>이벤트</span></a>
    </div>

    <div style="border-bottom: 1px solid #d3d3d3">
      <div class="noticetitle">
        {{ OngoingEvent[$route.params.id].title }}
      </div>
      <div class="date">{{ OngoingEvent[$route.params.id].date }}</div>
    </div>
    <div>
      <div class="noticemain">
        {{ OngoingEvent[$route.params.id].maininfo }}
      </div>
      <img class="noticeimg" src="../../assets/2021042901003307000280711.jpg" />
    </div>
  </div>
</template>

<script>
import OngoingEvent from '../../assets/data/OngoingEvent'
export default {
  name: 'planneddetail',
  layout: 'default',
  data() {
    return {
      OngoingEvent,
      selectnum: 0,
    }
  },
}
</script>

<style scoped>
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
  padding: 3%;
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
  amily: Roboto;
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
