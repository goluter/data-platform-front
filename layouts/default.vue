<template>
  <v-app>
    <v-main>
      <div class="nested-header">
        <div class="arrow">
          <v-btn icon @click="back">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </div>
        <div class="title">
          <span class="title-text">{{ $store.getters.getPageTitle }}</span>
        </div>
      </div>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.nested-header {
  display: flex;
  margin: auto;
  max-width: 500px;
  height: 45px;
  justify-content: center;
}
.arrow {
  display: inline;
  float: left;
  margin-left: 10px;
  align-self: center;
}
.title {
  display: inline;
  justify-self: center;
  align-self: center;
  width: 100%;
  text-align: center;
}
.title-text {
  margin-left: -46px;
  font-size: 14px;
  font-weight: 600;
}
</style>