<template>
  <div v-if="users && all" class="wrapper">
    <!-- <v-container>
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
    </v-container> -->
    <!-- <v-container class="pa-0">
      <v-row class="ma-0" justify="end" style="height: 60px">
        <v-col cols="4">
          <v-select :items="sort" label="최신순" solo flat dense />
        </v-col>
      </v-row>
    </v-container> -->
    <v-container class="pa-0">
      <v-divider />
    </v-container>
    <div
      v-if="all.totalElements == 0"
      style="text-align: center; padding: 10px"
    >
      북마크한 설문이 아직 없어요
    </div>
    <v-container>
      <v-row v-for="(item, i) in users" :key="i">
        <v-col cols="12">
          <v-row>
            <NuxtLink
              :to="{
                name: 'surveys-id',
                params: { id: users[i].survey.id },
              }"
              style="text-decoration: none; color: initial"
            >
              <v-col cols="auto">
                <div v-if="users[i].survey.imageUrl != null">
                  <img class="thumbnail" :src="users[i].survey.imageUrl" />
                </div>
              </v-col>
            </NuxtLink>
            <v-col class="grow" cols="auto">
              <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="12">
                      <v-row>
                        <NuxtLink
                          :to="{
                            path: '/surveys/view',
                            query: { id: users[i].id },
                          }"
                          style="text-decoration: none; color: initial"
                        >
                          <v-col class="report-title" cols="auto">
                            {{ users[i].survey.subject }}
                          </v-col>
                        </NuxtLink>
                        <v-col class="ml-auto py-0 pt-2" cols="auto">
                          <v-menu offset-y>
                            <template #activator="{ on, attrs }">
                              <v-btn x-small icon v-bind="attrs" v-on="on">
                                <v-icon small> mdi-dots-vertical </v-icon>
                              </v-btn>
                            </template>
                            <v-list style="font-size: 12px">
                              <v-list-item-group>
                                <v-list-item> 삭제 </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-menu>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="report-stat d-flex" cols="12">
                      <div class="report-likes mr-2">
                        <v-icon small> mdi-thumb-up </v-icon>
                        {{ users[i].survey.goods }}
                      </div>
                      <!-- <div class="report-comments">
                        <v-icon small> mdi-comment-processing </v-icon>
                        {{ item.comments }}
                      </div> -->
                      <div class="report-surveyor ml-auto">
                        <v-icon small> mdi-account-circle </v-icon>
                        {{ users[i].survey.author }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'

export default {
  data() {
    return {
      users: null,
      all: null,
      page: 0,
      limit: 10,
      sort: ['최신순', '추천순', '댓글순'],
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '북마크한 설문')
  },
  created() {
    this.fetchData(this.pageNum)
  },
  methods: {
    fetchData(category, page, limit) {
      axios
        .get(
          '/users/v1/self/surveys/bookmarks?' +
            'page=' +
            this.page +
            '&limit=' +
            this.limit
        )
        .then((res) => {
          this.users = res.data.content
          this.all = res.data
          console.log(this.users)
          console.log(this.all)
        })
        .catch((err) => {
          console.log(err)
        })
    },
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
.v-list-item {
  min-height: 25px;
}
</style>
