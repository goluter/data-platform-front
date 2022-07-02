<template>
  <div class="mainbox">
    <div style="text-align: center">
      <img class="img" src="../../assets/ant-design_check-circle-twotone.png" />

      <div class="count">칭호 획득을 완료했습니다.</div>
    </div>

    <div style="overflow: hidden; height: 500px">
      <div class="gray">
        <v-btn
          style="
            font-size: 14px;
            color: black;
            width: 47.5%;
            height: 44px;
            margin: 9px 7.2px 0 6px;
          "
          nuxt
          elevation="2"
          to="/usertitle/mytitle"
          color="#ffffff"
          >내 칭호 내역</v-btn
        ><v-btn
          style="
            font-size: 14px;
            color: black;
            width: 47.5%;
            height: 44px;
            margin: 9px 0 0 0px;
          "
          nuxt
          to="/"
          elevation="2"
          color="#ffffff"
          >홈으로</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'truecert',
  layout: 'default',
  data() {
    return {
      selectnum: 0,
      recent: true,
      stack: false,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '칭호 상세')
  },
}
</script>

<style scoped>
.imgspan {
  padding-left: 3px;
  font-size: 12px;
}
.gray {
  background-color: #f0f0f0;
  height: 100%;
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
  background-color: #f0f0f0;
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
  padding-top: 18px;
  padding-bottom: 31px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: center;
  color: var(--black);
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
  width: 100px;
  height: 100px;
  flex-grow: 0;
  margin: 29px 0 0px 0px;
}
.mainbox {
  height: 206px;
  flex-grow: 0;

  background-color: #fff;
}
</style>
