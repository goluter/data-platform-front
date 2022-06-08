<template>
  <v-app>
    <v-main>
      <v-container class="pa-0">
        <v-col class="pa-0" cols="12">
          <v-app-bar dense class="elevation-0" color="transparent">
            <v-app-bar-nav-icon icon @click="back">
              <v-icon>mdi-chevron-left</v-icon>
            </v-app-bar-nav-icon>
            <v-spacer />
            <v-col cols="8">
              <b>상명대학교 학생들에게 묻습니다.</b>
            </v-col>

            <v-col cols="1">
              <img src="../assets/Ios share.png" />
            </v-col>
            <v-col cols="1">
              <img src="../assets/Bookmark border.png" />
            </v-col>
            <v-col cols="1">
              <img src="../assets/More vert.png" />
            </v-col>
            <v-spacer />
          </v-app-bar>
          <v-divider />
        </v-col>
        <Nuxt />
        <div class="footer">
          <hr />
          <div class="d-flex">
            <div class="pl-2 pt-2">
              <img src="../assets/mdi_thumb-up-outline.png" />
            </div>
            <div class="pl-3 pt-2">
              <img src="../assets/Chat Bubble2.png" />
            </div>
            <div class="survey_box rounded mt-1">
              <NuxtLink :to="'/surveys/join'" style="text-decoration: none">
                <div class="pt-1 pl-2">설문 참여하기</div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'SurveyLayout',
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
}
</script>
<style scoped>
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 12px;
  width: 100%;
  background-color: white;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: white;
  z-index: 3;
}
.survey_box {
  margin-left: auto;
  background-color: #30cdae;
  color: white;
  font-size: 13px;
  width: 100px;
  height: 30px;
}
</style>
