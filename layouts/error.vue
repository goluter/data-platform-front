<template>
  <div v-if="error.statusCode === 404" class="error-box">
    <div class="desc-box">
      <h1>{{ pageNotFound }}</h1>
    </div>
    <NuxtLink to="/">나중에 다시 찾아와주세요.</NuxtLink>
  </div>
  <div v-else class="error-box">
    <h1>{{ otherError }}</h1>
    <NuxtLink to="/servicecenter/">저희에게 알려주시겠어요?</NuxtLink>
  </div>
</template>

<script>

export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '아직 준비중이에요.',
      otherError: '흠... 무언가 잘못되었군요.',
    }
  },
  head() {
    const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '앗!')
  },
}
</script>

<style scoped>
.error-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 300px;
  text-align: center;
}
h1 {
  height: 50px;
  font-size: 20px;
}
</style>
