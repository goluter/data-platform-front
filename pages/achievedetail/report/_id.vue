<template>
  <div class="mainbox">
    <div style="text-align: center">
      <img class="img" src="../../../assets/Male User.png" />
      <div class="title">{{ achievereportdata[$route.params.id].title }}</div>
      <div class="count">
        리포트 {{ achievereportdata[$route.params.id].count }}회 생성
      </div>
    </div>

    <div class="smallgray">
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
      v-for="(a, i) in achievereportdata[$route.params.id].recent"
      class="list"
      v-if="recent == true"
    >
      <div>
        <img
          class="profileimg"
          style="text-align: left"
          align="middle"
          src="../../../assets/Male User.png"
        />
        <span style="padding-left: 3px">
          {{ achievereportdata[$route.params.id].recent[i][0] }}
        </span>
        <div class="point2">
          {{ achievereportdata[$route.params.id].recent[i][1] }}
        </div>
      </div>
    </div>
    <div
      v-for="(a, i) in achievereportdata[$route.params.id].stack"
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
        <span style="padding-left: 3px">
          {{ achievereportdata[$route.params.id].stack[i][0] }}
        </span>
        <div class="point2">
          {{ achievereportdata[$route.params.id].stack[i][1] }}
        </div>
      </div>
    </div>
    <div style="overflow: hidden; height: 100%"><div class="gray"></div></div>
  </div>
</template>

<script>
import achievereportdata from '../../../assets/data/achievereportdata'
export default {
  name: 'Planneddetail',
  layout: 'default',
  data() {
    return {
      achievereportdata,
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
  padding: 25px 0px 8px 9px;
}
.smallgray {
  height: 50px;
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
