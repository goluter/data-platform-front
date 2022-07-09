<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar absolute color="#1087f4">
      <v-app-bar-nav-icon
        color="#ffffff"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="color: white">관리자 페이지</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app dark>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <v-footer :absolute="fixed" app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-card>
</template>

<script>
export default {
  name: 'AdminLayout',
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>
