<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, i) in users"
        :key="i"
        class="banner-wrapper pl-0"
        cols="12"
        sm="4"
        md="4"
      >
        <NuxtLink
          :to="{ name: 'events-id', params: { id: users[i].id } }"
          style="text-decoration: none; color: white"
        >
          <v-sheet
            class="banner-sheet elevation-5"
            color="deep-purple accent-2"
          >
            <v-col class="banner-title" cols="12">
              {{ users[i].subject }}
            </v-col>
          </v-sheet>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: null,
      totalpage: null,
      category: '이벤트',
      page: 0,
      limit: 10,
    }
  },
  props: {
    eventData: {
      type: Array,
    },
  },
  methods: {
    fetchData(category, page, limit) {
      axios
        .get(
          'https://api-stage.govey.app/users/v1/posts/page?category=' +
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
  created() {
    this.fetchData(this.pageNum)
  },
}
</script>

<style scoped>
.banner-sheet {
  color: white;
  border-radius: 15px;
}
.banner-title {
  font-size: 20px;
}
.banner-msg {
  font-size: 15px;
}
</style>
