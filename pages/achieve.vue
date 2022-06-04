<template>
  <div class="container">
    <v-tabs center-active centered color="#1cddb7">
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
        설문참여
      </v-tab>
      <v-tab
        @click="
          point = false
          nickname = false
          achieve = true
        "
      >
        설문등록
      </v-tab>
      <v-tab
        @click="
          point = true
          nickname = false
          achieve = false
        "
      >
        리포트
      </v-tab>
      <v-tab
        @click="
          point = true
          nickname = false
          achieve = false
        "
      >
        출석
      </v-tab>
    </v-tabs>
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
    this.$store.commit('setPageTitle', '업적')
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
.point {
  float: right;
  margin: 6px 12px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.contents {
  height: 66px;
  flex-grow: 0;

  border: solid 1px #f0f0f0;
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
