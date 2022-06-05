<template>
  <div class="banner-wrapper">
    <div v-for="item in noticeData" class="notice-box">
      <h5>{{ item.title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticeData: {
      type: Array
    }
  }
}
</script>

<style scoped>
.banner-wrapper {
  margin-top: 24px;
}
.notice-box {
  margin-bottom: 10px;
  width: 90%;
}
</style>
