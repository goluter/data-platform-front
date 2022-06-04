<template>
  <div class="banner-wrapper">
    <NuxtLink :to="bannerData['to']" style="text-decoration: none">
      <div class="banner-box elevation-5">
        <div class="banner-title-box">
          <v-icon color="white">
            {{ bannerData['icon'] }}
          </v-icon>
          <span class="banner-title">
            {{ bannerData['title'] }}
          </span>
        </div>
        <div class="banner-msg-box">
          <span class="banner-msg">
            {{ bannerData['msg'] }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      default: []
    }
  }
}
</script>

<style scoped>
.banner-box {
  margin: 30px auto 0 0;
  padding: 3%;
  width: 90%;
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
