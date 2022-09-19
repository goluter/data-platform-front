<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="banner">
          <div style="padding: 22px 0px 0px 18px">
            고베이 공지사항을 확인해보세요!
          </div>
        </div>
        <div v-for="(a, i) in NoticeData" :key="i" class="contents">
          <NuxtLink
            :to="NoticeData[i].url"
            style="color: black; text-decoration-line: none"
          >
            <div class="noticetitle">
              {{ NoticeData[i].title }}
            </div>
            <div class="date">
              {{ NoticeData[i].date }}
            </div>
          </NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NoticeData from 'assets/data/NoticeData.js'
export default {
  name: 'Notice',
  data() {
    return {
      NoticeData,
      num: 0,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '공지사항')
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
