<template>
  <div class="banner-wrapper">
    <div class="banner-box elevation-5"
         v-for="item in bannerData"
    >
      <div class="banner-title-box">
        <v-icon color="white">mdi-vote</v-icon>
      <span class="banner-title">
        {{ item.title }}
      </span>
      </div>
      <div class="banner-msg-box">
        <span class="banner-msg">
          {{ item.msg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    }
  }
}
</script>

<style scoped>
.banner-box {
  margin: 30px auto 45px 0;
  padding: 3%;
  width: 85%;
  height: 80px;
  background-color: black;
  color: white;
  border-radius: 15px;
}
.banner-title {
  margin-top: 10px;
  padding-top: 3px;
  font-size: 20px;
}
.banner-msg {
  font-size: 13px;
}
</style>