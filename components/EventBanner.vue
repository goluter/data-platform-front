<template>
  <div class="banner-wrapper">
    <v-sheet class="banner-sheet elevation-5"
             v-for="item in eventData"
             :key="item"
             :color="item.color">
      <NuxtLink :to="item.to" style="text-decoration: none; color: white">
        <div class="banner-title-box">
        <span class="banner-title">
            {{ item.title }}
        </span>
        </div>
        <div class="banner-msg-box">
        <span class="banner-msg">
          {{ item.msg }}
        </span>
        </div>
      </NuxtLink>
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    eventData: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.banner-sheet {
  margin: 10px auto 15px 0;
  padding: 3%;
  width: 85%;
  height: 100px;
  color: white;
  border-radius: 15px;
}
.banner-title-box {
  margin-bottom: 15px;
}
.banner-title {
  padding-top: 3px;
  font-size: 20px;
}
.banner-msg {
  font-size: 15px;
}
</style>