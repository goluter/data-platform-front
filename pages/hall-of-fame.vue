<template>
  <div class="container">
    <v-tabs fixed-tabs color="#1cddb7">
      <v-tab
        @click="
          point = true
          nickname = false
          achieve = false
        "
      >
        포인트
      </v-tab>
      <v-tab
        @click="
          point = false
          nickname = true
          achieve = false
        "
      >
        칭호
      </v-tab>
      <v-tab
        @click="
          point = false
          nickname = false
          achieve = true
        "
      >
        업적
      </v-tab>
    </v-tabs>
    <div v-if="point == true" class="contents">asd</div>
    <div v-if="nickname == true" class="contents">dsa</div>
    <div v-if="achieve == true" class="contents">dasd</div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      point: true,
      nickname: false,
      achieve: false,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '명예의 전당')
  },
}
</script>

<style scoped>
.container {
  max-width: 500px;
}
.v-tab {
  font-size: 18px;
}
.eventtitle {
  flex-grow: 0;
  margin: 24px 0px 0px 17px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.banner {
  background-color: #eee;
  height: 96px;
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
  margin: 13px 0px 19px 17px;
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
