<template>
  <div class="mainbox">
    <div style="text-align: center">
      <img class="img" src="../../../../assets/Male User.png" />
      <div class="title">{{ UsertitleData[$route.params.id].title }}</div>
      <div class="count">아래 링크를 눌러 획득 가능합니다</div>
    </div>

    <div class="smallgray">
      <v-btn
        color="#1a9efe"
        style="
          margin: 19px 0px 0px 34px;
          font-size: 16px;
          color: white !important;
          width: 82%;
          height: 55px;
        "
        elevation="2"
        nuxt
        to="/usertitle/complete"
        >획득하기</v-btn
      >
    </div>
    <div style="overflow: hidden; height: 200%"><div class="gray"></div></div>
  </div>
</template>

<script>
import UsertitleData from '../../../../assets/data/UsertitleData'
export default {
  name: 'linkcert',
  layout: 'default',
  data() {
    return {
      UsertitleData,
      selectnum: 0,
      recent: true,
      stack: false,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '칭호 획득')
  },
}
</script>

<style scoped>
.imgspan {
  padding-left: 3px;
  font-size: 12px;
}
.point2 {
  float: right;
  margin: 26px 12px 0px 0px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: var(--black);
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 21px 0px 22px 18px;
}
.list {
  height: 66px;
  flex-grow: 0;
  border: solid 1px #f0f0f0;
  background-color: #fff;
}
.smallgrayboxtext {
  padding: 19px 0px 8px 9px;
}
.smallgray {
  height: 115px;

  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: var(--black);
}
.count {
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: center;
  color: var(--black);
  padding-top: 23px;
  padding-bottom: 24px;
}
.title {
  flex-grow: 0;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  color: var(--black);
  padding-top: 5px;
}
.img {
  width: 74px;
  height: 74px;
  flex-grow: 0;
  margin: 29px 0 0px 0px;
}
.mainbox {
  height: 206px;
  flex-grow: 0;
  border: solid 1px #f0f0f0;
  background-color: #fff;
}
</style>
