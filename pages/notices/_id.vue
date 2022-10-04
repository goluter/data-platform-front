<template>
  <v-container v-if="users">
    <v-row>
      <v-col cols="12">
        <div style="border-bottom: 1px solid #d3d3d3">
          <div class="noticetitle">
            {{ users.subject }}
          </div>
          <div class="date">
            {{ users.createdAt | moment('YYYY-MM-DD hh:mm') }}
          </div>
        </div>
        <div v-if="users.imageUrl != null">
          <img style="width: 100%; padding: 8px" :src="users.imageUrl" />
        </div>
        <div>
          <div class="noticemain" v-html="users.content" />
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
  layout: 'default',
  data() {
    return {
      selectnum: 0,
      category: '공지',
      page: 0,
      limit: 10,
      users: null,
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
        .get('/users/v1/posts/' + this.$route.params.id)
        .then((res) => {
          this.users = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.noticemain {
  height: 16px;
  font-size: 14px;
  padding: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.noticeimg {
  width: 322px;
  height: 251px;
  margin: 67px 0 0 18px;
  border-radius: 20px;
}
.noticetitle {
  flex-grow: 0;
  margin: 12px 0px 0px 18px;
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
  padding: 2%;
  width: 100%;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
  width: 100%;
  background-color: white;
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
  z-index: 1;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: hidden;
  height: 87px;
}
.contents a {
  text-decoration: none;
}

.date {
  height: 14px;
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
