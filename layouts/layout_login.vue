<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="login-header">
          <a href="/"><img src="/govey.svg" alt="govey"></a>
        </div>
          <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "LayoutLogin"
}
</script>

<style scoped>
.login-header {
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 45px;
  top: 0; left: 0;
  border-bottom: 1px solid #ddd;
  background: white;
}
.login-header a {
  display: table;
  text-align: center;
  margin: 0 auto;
  padding-top: 3px;
  width: 157px;
  font-weight: 500;
  font-size: 24px;
  text-decoration: none;
}
.login-header img {
  vertical-align: middle;
  color: dodgerblue;
}
</style>