<template>
  <v-container class="pa-0" style="max-width: 960px">
    <v-col class="pa-0" cols="12">
      <v-app-bar dense class="elevation-0" color="transparent">
        <v-app-bar-nav-icon icon @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title
          class="title-text pa-0"
          style="font-size: 14px; font-weight: 600"
        >
        </v-toolbar-title>
        <v-spacer />
        <div class="d-flex justify-content-between">
          <v-btn icon small>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon small>
            <!-- 북마크-->
            <v-icon @click="id = users[$route.params.id].id"
              >mdi-bookmark-outline</v-icon
            >
          </v-btn>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn icon small v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>삭제</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
    </v-col>
    <v-divider />
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    reportData: {
      type: Object,
    },
  },
  data() {
    return {
      temp: 0,
      page: 0,
      limit: 10,
      id: null,
      users: null,
    }
  },
  methods: {
    back() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    fetchData(page, limit) {
      axios
        .get(
          'https://api.govey.app/users/v1/reports/page?' +
            'page=' +
            this.page +
            '&limit=' +
            this.limit
        )
        .then((res) => {
          this.users = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetch() {
      axios
        .post(
          'https://api-stage.govey.app/users/v1/posts/page?category=공지&page=0&limit=10'
        )
        .then((res) => {
          this.users2 = res.data.content
          console.log('success')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped></style>
