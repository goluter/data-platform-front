<template>
  <div>
    <div v-for="(item, i) in reward" :key="i" class="contents">
      <NuxtLink
        :to="{ path: 'reward-detail', query: { id: item.id } }"
        style="text-decoration: none; color: initial"
      >
        <img class="profileimg" src="../assets/Male User.png" align="middle" />
        <span>{{ item.name }}</span>
        <div class="point">{{ item.count }} 회</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'

export default {
  name: 'RewardList',
  layout: 'default',
  data() {
    return {
      page: 0,
      limit: 10,
      type: '업적',
      category: '포인트',
      reward: [],
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', ' 업적')
  },
  created() {
    this.fetchData(this.page, this.limit, this.type, this.category)
  },
  methods: {
    fetchData(page, limit, type, catagory) {
      axios
        .get(
          '/users/v1/rewards/page?page=' +
            this.page +
            '&limit=' +
            this.limit +
            '&type=' +
            this.type +
            '&category=' +
            this.category
        )
        .then((res) => {
          this.reward = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.point2 {
  float: right;
  margin: 4px 12px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.point {
  float: right;
  margin: 6px 12px 0px 0px;
  flex-grow: 0;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.65px;
  text-align: left;
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.contents {
  height: 66px;
  flex-grow: 0;
  border-bottom: solid 1px #f0f0f0;
  padding: 20px 0px 0px 18px;
  background-color: #fff;
}
.contents span {
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #000;
  margin-left: 5px;
}
.container {
  max-width: 500px;
}
.v-tab {
  font-size: 18px;
}
.point-box {
  background-color: #1087f4;
  height: 80px;
  color: white;
}
.click-box {
  background-color: white;
  color: black;
  border-radius: 1rem;
}
</style>
