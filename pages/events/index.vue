<template>
  <div>
    <div class="banner">
      <div style="padding: 22px 0px 0px 18px">
        이벤트 참여하고 치킨 뜯고 가세요!
      </div>
    </div>
    <v-row>
      <v-col cols="12">
        <!-- <v-tabs fixed-tabs color="#1cddb7">
          <v-tab
            @click="
              planned = true
              ongoing = false
              ended = false
            "
          >
            예정
          </v-tab>
          <v-tab
            @click="
              planned = false
              ongoing = true
              ended = false
            "
          >
            진행중
          </v-tab>
          <v-tab
            @click="
              planned = false
              ongoing = false
              ended = true
            "
          >
            마감
          </v-tab>
        </v-tabs> -->
        <div v-for="(a, i) in users" v-if="users" :key="a" class="contents">
          <NuxtLink
            :to="{ name: 'events-id', params: { id: i } }"
            style="color: black; text-decoration-line: none"
          >
            <div class="eventtitle">
              {{ users[i].subject }}
            </div>
            <div class="date">
              {{ users[i].createdAt }}
            </div>
          </NuxtLink>
        </div>
        <!-- <div
          v-for="(a, i) in OngoingEvent"
          v-if="ongoing == true"
          :key="a"
          class="contents"
        >
          <NuxtLink
            :to="OngoingEvent[i].url"
            style="color: black; text-decoration-line: none"
          >
            <div class="eventtitle">
              {{ OngoingEvent[i].title }}
            </div>
            <div class="date">
              {{ OngoingEvent[i].date }}
            </div>
          </NuxtLink>
        </div>
        <div
          v-for="(a, i) in EndedEvent"
          v-if="ended == true"
          :key="a"
          class="contents"
        >
          <NuxtLink
            :to="EndedEvent[i].url"
            style="color: black; text-decoration-line: none"
          >
            <div class="eventtitle">
              {{ EndedEvent[i].title }}
            </div>
            <div class="date">
              {{ EndedEvent[i].date }}
            </div>
          </NuxtLink>
        </div> -->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      planned: true,
      ongoing: false,
      ended: false,

      users: null,
      totalpage: null,
      category: '이벤트',
      page: 0,
      limit: 10,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '이벤트')
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
.eventtitle {
  flex-grow: 0;
  margin: 24px 0px 0px 17px;
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
  margin: 13px 0px 19px 17px;
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
