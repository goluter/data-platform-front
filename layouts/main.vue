<template>
  <v-app>
    <v-main>
      <div class="header-wrapper">
        <v-container
          v-if="!$vuetify.breakpoint.mobile"
          class="pa-3"
          style="max-width: 1250px"
        >
          <v-row style="">
            <v-col cols="12">
              <v-tabs hide-slider style="font-size: 20px">
                <v-tab class="pa-0 pt-1">
                  <NuxtLink to="/">
                    <img src="../static/govey.svg" width="120" height="38">
                  </NuxtLink>
                </v-tab>
                <v-tab
                  v-for="menu in menu"
                  :key="menu"
                  :href="menu.to"
                  class="pa-0 px-5"
                  style="font-size: 20px; font-weight: 600"
                >
                  {{ menu.page }}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
        <v-app-bar
          v-if="$vuetify.breakpoint.mobile"
          class="header"
          dense
          elevation="0"
          color="white"
        >
          <v-app-bar-nav-icon @click="drawer = !drawer" />
          <v-btn icon disabled />
          <v-spacer />
          <v-toolbar-title style="height: 22px">
            <NuxtLink to="/" style="color: black; text-decoration-line: none">
              <img src="../static/govey.svg">
            </NuxtLink>
          </v-toolbar-title>
          <v-spacer />
          <div class="func">
            <v-btn icon style="visibility: hidden">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <!-- 알림창 버튼(였던것) -->
            <v-icon style="opacity: 0">
              mdi-bell
            </v-icon>
          </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app temporary>
          <v-list nav dense>
            <!-- <v-list-item to="/login">
              <v-list-item-avatar>
                <img src="../assets/premium-icon-person-2815428.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>로그인</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
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
                  target="_blank"
                  href="https://www.youtube.com/channel/UCpj4Mj4OFgl5T0kTk1T3L_w"
                ><img
                  class="sns-icon"
                  src="../static/image 4.png"
                ></a>
              </v-col>
              <v-col>
                <a
                  target="_blank"
                  href="https://www.instagram.com/govey_official/?hl=ko"
                ><img
                  class="sns-icon"
                  style="margin-top: 6px; width: 50px; height: 50px"
                  src="../static/image 5.png"
                ></a>
              </v-col>
              <v-col>
                <a
                  target="_blank"
                  href="https://www.facebook.com/고베이-104289228923939"
                ><img
                  class="sns-icon"
                  style="margin-top: 6px; width: 50px; height: 50px"
                  src="../static/image 6.png"
                ></a>
              </v-col>
            </v-row>
          </div>
        </v-navigation-drawer>
      </div>
      <Nuxt v-if="!$slots.default" class="ma-auto" style="max-width: 960px" />
      <slot />
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-container style="max-width: 960px">
          <v-row>
            <v-col class="footer-pc">
              <div style="display: flex; justify-content: space-between; width: 250px;">
                <NuxtLink v-for="(item, i) in pcfitems" :key="i" :to="item.to">
                  <span>{{ item.page }}</span>
                </NuxtLink>
                <NuxtLink to="/">
                  <b>Govey</b>
                </NuxtLink>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div v-if="$vuetify.breakpoint.mobile" class="footer">
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
      menu: [
        { page: '설문', to: '/surveys/' },
        { page: '리포트', to: '/reports/' },
        { page: '스토어', to: '/store/' },
        { page: '명예의 전당', to: '/hall-of-fame/' },
        { page: '마이', to: '/mypage/' }
      ],
      items: [
        { page: '리포트', to: '/reports/' },
        { page: '공지사항', to: '/notices/' },
        { page: '이벤트', to: '/events/' },
        { page: '명예의전당', to: '/hall-of-fame/' },
        { page: '고객센터', to: '/service-center/' },
        { page: '개인정보처리방침', to: '/privacy-policy/' },
        { page: '이용약관', to: '/terms-of-service/' }
      ],
      fitems: [
        { page: '홈', icon: 'mdi-home', to: '/' },
        { page: '설문', icon: 'mdi-text-box-edit', to: '/surveys/' },
        { page: '스토어', icon: 'mdi-store', to: '/store/' },
        { page: '마이', icon: 'mdi-account-circle', to: '/mypage/' }
      ],
      pcfitems: [
        { page: '개인정보처리방침', to: '/privacy-policy/' },
        { page: '이용약관', to: '/terms-of-service/' }
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
.footer-pc {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>
