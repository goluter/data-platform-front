<template>
  <div class="banner-wrapper">
    <div class="notice-box"
        v-for="item in noticeData">
      <h5>{{ item.title }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noticeData: {
      type: Array,
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
  width: 85%;
}
</style>