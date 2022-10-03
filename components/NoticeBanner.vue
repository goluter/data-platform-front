<template>
  <div class="banner-wrapper">
    <div>
      <ul>
        <li v-for="(item, i) in users" v-if="users" :key="i" class="notice-box">
          <NuxtLink :to="{ name: 'notices-id', params: { id: users[i].id } }">
            <h5>{{ users[i].subject }}</h5>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'

export default {
  data() {
    return {
      users: null,
      totalpage: null,
      category: '공지',
      page: 0,
      limit: 10,
    }
  },
  methods: {
    fetchData(category, page, limit) {
      axios
        .get(
          'https://api-stage.govey.app/users/v1/posts/page?category=공지' +
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
  created() {
    this.fetchData(this.pageNum)
  },
}
</script>

<style scoped>
.banner-wrapper {
  margin-top: 24px;
}
.notice-box {
  margin-bottom: 10px;
  width: 90%;
}
</style>
