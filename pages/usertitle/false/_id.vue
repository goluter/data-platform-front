<template>
  <div class="mainbox">
    <div style="text-align: center">
      <img class="img" src="../../../assets/Male User.png" />
      <div class="title">{{ UsertitleData[$route.params.id].title }}</div>
      <div class="count">
        {{ UsertitleData[$route.params.id].title }} 인증 시 획득 가능합니다
      </div>
    </div>
    <div class="smallgray">
      <v-btn
        style="
          margin: 19px 0px 0px 34px;
          font-size: 16px;
          color: white;
          width: 82%;
          height: 55px;
        "
        nuxt
        elevation="2"
        :to="UsertitleData[$route.params.id].certurl"
        color="#1a9efe"
        >획득하기</v-btn
      >
      <div class="smallgrayboxtext">획득 유저</div>
    </div>
    <v-tabs fixed-tabs centered color="#1cddb7">
      <v-tab
        @click="
          recent = true
          stack = false
        "
      >
        최근 획득
      </v-tab>
      <v-tab
        @click="
          recent = false
          stack = true
        "
      >
        누적
      </v-tab>
    </v-tabs>
    <div
      v-for="(a, i) in UsertitleData[$route.params.id].recent"
      class="list"
      v-if="recent == true"
    >
      <div style="overflow: auto">
        <img
          class="profileimg"
          style="text-align: left"
          align="middle"
          src="../../../assets/Male User.png"
        />
        <span class="imgspan">
          {{ UsertitleData[$route.params.id].recent[i][0] }}
        </span>
        <div class="point2">
          {{ UsertitleData[$route.params.id].recent[i][1] }}
        </div>
      </div>
    </div>
    <div
      v-for="(a, i) in UsertitleData[$route.params.id].stack"
      class="list"
      v-if="stack == true"
    >
      <div>
        <img
          class="profileimg"
          style="text-align: left"
          align="middle"
          src="../../../assets/Male User.png"
        />
        <span class="imgspan">
          {{ UsertitleData[$route.params.id].stack[i][0] }}
        </span>
        <div class="point2">
          {{ UsertitleData[$route.params.id].stack[i][1] }}
        </div>
      </div>
    </div>
    <div style="overflow: hidden; height: 70%"><div class="gray"></div></div>
  </div>
</template>

<script>
import UsertitleData from '../../../assets/data/UsertitleData'
export default {
  name: 'falsecert',
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
    this.$store.commit('setPageTitle', '업적 상세')
  },
}
</script>

<style scoped>
.v-application a {
  color: white !important;
  text-decoration: none !important;
}
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
