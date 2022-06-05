<template>
  <v-container>
    <v-row>
      <v-col class="pl-0 pr-0" cols="12">
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
      </v-col>
    </v-row>
  </v-container>
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto 0 0;
  padding: 2% 2% 2% 20px;
  height: 80px;
  background-color: black;
  color: white;
  border-radius: 15px;
}
.banner-title {
  padding-top: 3px;
  font-size: 20px;
}
.banner-msg {
  font-size: 13px;
}
</style>
