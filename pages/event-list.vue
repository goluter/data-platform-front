<template>
  <div>
    <div class="banner">
      <div style="padding: 22px 0px 0px 18px">브루스 배너</div>
    </div>
    <v-tabs fixed-tabs color="#1cddb7">
      <v-tab
        @click="
          planned = true
          ongoing = false
          ended = false
        "
        >예정</v-tab
      >
      <v-tab
        @click="
          planned = false
          ongoing = true
          ended = false
        "
        >진행중</v-tab
      >
      <v-tab
        @click="
          planned = false
          ongoing = false
          ended = true
        "
        >마감</v-tab
      >
    </v-tabs>
    <div
      v-for="(a, i) in PlannedEvent"
      :key="a"
      v-if="planned == true"
      class="contents"
    >
      <NuxtLink
        :to="PlannedEvent[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="eventtitle">{{ PlannedEvent[i].title }}</div>
        <div class="date">{{ PlannedEvent[i].date }}</div>
      </NuxtLink>
    </div>
    <div
      v-for="(a, i) in OngoingEvent"
      :key="a"
      v-if="ongoing == true"
      class="contents"
    >
      <NuxtLink
        :to="OngoingEvent[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="eventtitle">{{ OngoingEvent[i].title }}</div>
        <div class="date">{{ OngoingEvent[i].date }}</div>
      </NuxtLink>
    </div>
    <div
      v-for="(a, i) in EndedEvent"
      :key="a"
      v-if="ended == true"
      class="contents"
    >
      <NuxtLink
        :to="EndedEvent[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="eventtitle">{{ EndedEvent[i].title }}</div>
        <div class="date">{{ EndedEvent[i].date }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import EndedEvent from '../assets/data/EndedEvent'
import PlannedEvent from '../assets/data/PlannedEvent'
import OngoingEvent from '../assets/data/OngoingEvent'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      num: 0,
      planned: true,
      ongoing: false,
      ended: false,
      OngoingEvent,
      EndedEvent,
      PlannedEvent,
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '이벤트')
  },
}
</script>

<style scoped>
.v-tab {
  font-size: 18px;
}
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
