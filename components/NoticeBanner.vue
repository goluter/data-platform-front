<template>
  <div class="banner-wrapper">
    <div>
      <ul>
        <li
          v-for="(item, i) in noticeData"
          :key="i"
          class="notice-box"
        >
          <NuxtLink :to="item.to">
            <h5>{{ item.title }}</h5>
          </NuxtLink>
        </li>
      </ul>
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
