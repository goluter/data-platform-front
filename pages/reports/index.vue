<template>
  <div class="wrapper">
    <v-container>
      <v-row style="padding: 10px 0; background-color: #eeeeee">
        <v-col cols="12">
          <v-row style="background-color: white">
            <v-col class="ma-auto" cols="12" sm="9" md="9">
              <v-form style="height: 40px">
                <v-text-field
                  label="검색어를 입력하세요"
                  single-line
                  clearable
                  outlined
                  dense
                  append-icon="mdi-magnify"
                  style="height: 40px; border-radius: 45px"
                />
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0">
      <v-row class="ma-0" justify="end" style="height: 60px">
        <v-col cols="4">
          <v-select :items="sort" label="최신순" solo flat dense />
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <v-container v-if="users">
      <NuxtLink
        v-for="(item, i) in users"
        :key="i"
        to="/reports/item"
        style="text-decoration: none; color: initial"
      >
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="auto">
                <div class="thumbnail" />
              </v-col>
              <v-col class="grow" cols="auto">
                <v-row>
                  <v-col cols="12">
                    <v-row>
                      <v-col class="report-title" cols="12">
                        {{ users[i].subject }}
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="report-stat d-flex" cols="12">
                        <div class="report-likes mr-2">
                          <v-icon small> mdi-thumb-up </v-icon>
                          {{ users[i].goods }}
                        </div>
                        <div class="report-comments">
                          <v-icon small> mdi-comment-processing </v-icon>
                          {{ users[i].hits }}
                        </div>
                        <div class="report-surveyor ml-auto">
                          <v-icon small> mdi-account-circle </v-icon>
                          {{ users[i].author }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </NuxtLink>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: null,
      totalpage: null,
      limit: 10,
      page: 0,
      category: '리포트',
      sort: ['최신순', '추천순', '댓글순'],
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '내 리포트')
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
          console.log(this.users)
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
.thumbnail {
  width: 60px;
  height: 60px;
  background-color: #eeeeee;
  border-radius: 10px;
}
.report-title {
  font-size: 14px;
  font-weight: bold;
}
.report-stat {
  font-size: 12px;
}
</style>
