<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="banner">
          <div style="padding: 22px 0px 0px 18px">
            고베이 공지사항을 확인해보세요!
          </div>
        </div>
        <div
          v-if="!users || users.length === 0"
          style="height: 150px"
          class="ma-2 pt-3 d-flex justify-center align-center"
        >
          <p>아직 데이터가 없습니다!</p>
        </div>
        <div v-for="(a, i) in users" v-if="users" :key="i" class="contents">
          <NuxtLink
            :to="{ name: 'notices-id', params: { id: users[i].id } }"
            style="color: black; text-decoration-line: none"
          >
            <div class="noticetitle">
              {{ users[i].subject }}
            </div>
            <div class="date">
              {{ users[i].createdAt | moment('YYYY-MM-DD hh:mm') }}
            </div>
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'govey/src/libs/http-client'
import vueMoment from 'vue-moment'
import Vue from 'vue'
Vue.use(vueMoment)

export default {
  name: 'Notice',
  data() {
    return {
      num: 0,
      category: '공지',
      page: 0,
      limit: 10,
      users: null,
      linknum: 0,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '공지사항')
  },
  created() {
    this.fetchData(this.pageNum)
  },
  methods: {
    fetchData(category, page, limit) {
      axios
        .get(
          '/users/v1/posts/page?category=' +
            this.category +
            '&page=' +
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
  },
}
</script>

<style scoped>
.noticetitle {
  flex-grow: 0;
  margin: 24px 0px 0px 18px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.banner {
  background-color: #eee;
  height: 96px;
}
.header span {
  flex-grow: 0;
  margin: auto;
  display: table;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  color: #434343;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: auto;
}
.contents a {
  text-decoration: none;
}
.date {
  flex-grow: 0;
  margin: 13px 0px 19px 18px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
}
</style>
