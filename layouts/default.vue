<template>
  <v-app>
    <v-main>
      <v-container style="max-width: 500px; padding: 0">
        <div class="header_container">
          <v-toolbar class="header" dense elevation="0">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title class="ml-12 mt-2">
              <NuxtLink to="/" style="color: black; text-decoration-line: none"
              ><img src="../assets/govey.png"
              /></NuxtLink>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <img src="../assets/Vector.png" />
            </v-btn>
            <v-btn icon>
              <img src="../assets/Notification.png" />
            </v-btn>
          </v-toolbar>
          <v-navigation-drawer v-model="drawer" app temporary>
            <v-list nav dense>
              <v-list-item to="/Login">
                <v-list-item-avatar>
                  <img src="../assets/premium-icon-person-2815428.png">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>로그인</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item-group
                  v-model="group"
                  active-class="text--accent-4"
              >
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.page"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <div class="sns_link">
              <v-row>
                <v-col
                ><a href="https://www.youtube.com/channel/UCpj4Mj4OFgl5T0kTk1T3L_w"
                ><img class="sns-icon" src="../assets/image 4.png" /></a
                ></v-col>
                <v-col
                ><a href="https://www.instagram.com/govey_official/?hl=ko"
                ><img class="sns-icon" src="../assets/image 5.png" /></a
                ></v-col>
                <v-col
                ><a href="https://www.facebook.com/고베이-104289228923939"
                ><img class="sns-icon" src="../assets/image 6.png" /></a
                ></v-col>
              </v-row>
            </div>
          </v-navigation-drawer>
        </div>
        <Nuxt v-if="!$slots.default" />
        <slot />
        <div class="footer">
          <v-row no-gutters>
            <v-bottom-navigation
                grow
                class="elevation-0"
            >
              <v-btn
                  v-for="(item, i) in fitems"
                  :key="i"
                  :to="item.to"
              > <span>{{ item.page }}</span>
                <v-icon>{{ item.icon }}</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {page: '리포트', to: '/Report',},
        {page: '공지사항', to: '/Notice',},
        {page: '이벤트', to: '/EventList',},
        {page: '명예의전당', to: '/Rank',},
        {page: '고객센터', to: '/ServiceCenter',},
        {page: '개인정보처리방침', to: '/PrivacyPolicy',},
        {page: '이용약관', to: '/TermsofService',},
      ],
      fitems: [
        {page: '홈', icon: 'mdi-home', to: '/'},
        {page: '설문', icon: 'mdi-text-box-edit', to: '/SurveyList'},
        {page: '스토어', icon: 'mdi-store', to: '/Store'},
        {page: '마이', icon: 'mdi-account-circle', to: '/Login'},
      ],
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
<style scoped>
.header_container {
  height: 53px;
}
.header {
  position: fixed;
  width: 100%;
  max-width: 500px;
  padding: 0;
  z-index: 5;
}
.sns_link {
  position: fixed;
  bottom: 0;
}
.sns-icon {
  width: 58px;
  height: 58px;
}
.footer {
  position: fixed;
  max-width: 500px;
  height: 59px;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: white;
  font-size: 14px;
  z-index: 5;
}
</style>