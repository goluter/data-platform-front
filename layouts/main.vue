<template>
  <v-app>
    <v-main>
      <div class="header-wrapper">
        <v-app-bar
          class="header"
          dense
          elevation="0"
          color="white"
        >
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <v-btn icon disabled />
          <v-spacer />
          <v-toolbar-title style="height: 22px;">
            <NuxtLink to="/" style="color: black; text-decoration-line: none">
              <img src="../static/govey.svg">
            </NuxtLink>
          </v-toolbar-title>
          <v-spacer />
          <div class="func">
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </div>
        </v-app-bar>
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
            <v-divider />
            <v-list-item-group v-model="group" active-class="text--accent-4">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                @click="commitTitle(item.page)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.page" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="sns_link">
            <v-row>
              <v-col>
                <a
                  href="https://www.youtube.com/channel/UCpj4Mj4OFgl5T0kTk1T3L_w"
                ><img
                  class="sns-icon"
                  src="../static/image 4.png"
                ></a>
              </v-col>
              <v-col>
                <a href="https://www.instagram.com/govey_official/?hl=ko"><img
                  class="sns-icon"
                  src="../static/image 5.png"
                ></a>
              </v-col>
              <v-col>
                <a href="https://www.facebook.com/고베이-104289228923939"><img
                  class="sns-icon"
                  src="../static/image 6.png"
                ></a>
              </v-col>
            </v-row>
          </div>
        </v-navigation-drawer>
      </div>
      <Nuxt v-if="!$slots.default" />
      <slot />
      <div class="footer">
        <v-bottom-navigation grow class="elevation-0">
          <v-btn v-for="(item, i) in fitems" :key="i" :to="item.to">
            <span>{{ item.page }}</span>
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { page: '리포트', to: '/reports' },
        { page: '공지사항', to: '/notice/' },
        { page: '이벤트', to: '/event-list/' },
        { page: '명예의전당', to: '/rank/' },
        { page: '고객센터', to: '/service-center/' },
        { page: '개인정보처리방침', to: '/privacy-policy/' },
        { page: '이용약관', to: '/terms-of-service/' }
      ],
      fitems: [
        { page: '홈', icon: 'mdi-home', to: '/' },
        { page: '설문', icon: 'mdi-text-box-edit', to: '/survey-list/' },
        { page: '스토어', icon: 'mdi-store', to: '/store/' },
        { page: '마이', icon: 'mdi-account-circle', to: '/login/' }
      ],
      drawer: false,
      group: null
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  methods: {
    commitTitle (title) {
      this.$store.commit('setPageTitle', title)
    }
  }
}
</script>
<style scoped>
.header-wrapper {
  height: 48px;
}
.header {
  position: fixed;
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
