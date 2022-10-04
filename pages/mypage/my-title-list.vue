<template>
  <div>
    <div class="point-box">
      <div class="pt-3 pb-3  d-flex justify-space-between">
        <div class="pl-3 pt-2">
          칭호 어떻게 해야 얻을 수 있지?
        </div>
        <div class="mr-3 pa-2 click-box">
          <NuxtLink to="/title-list" style="color: black; text-decoration-line: none">
            <button>궁금하면 클릭!</button>
          </NuxtLink>
        </div>
      </div>
      <div
        v-for="(item, i) in title"
        :key="i"
        class="contents"
      >
        <NuxtLink
          :to="{path: '/title-detail', query: { id: item.reward.id }}"
          style="text-decoration: none; color: initial;"
        >
          <img class="profileimg" src="../../assets/Male User.png" align="middle">
          <span>{{ item.reward.name }}</span>
          <div class="point">
            {{ item.reward.createdAt | yyyyMMdd }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'

export default {
  name: 'EventList',
  filters: {

    yyyyMMdd: function (value) {
      if (value == '') { return '' }

      const js_date = new Date(value)

      const year = js_date.getFullYear()
      let month = js_date.getMonth() + 1
      let day = js_date.getDate()

      if (month < 10) {
          	month = '0' + month
      }

      if (day < 10) {
          	day = '0' + day
      }

      return year + '-' + month + '-' + day
    }
  },
  layout: 'default',
  data () {
    return {
      page: 0,
      limit: 10,
      type: '칭호',
      category: '정보인증',
      title: []
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '내 칭호')
  },
  created () {
    this.fetchData(this.page, this.limit, this.type, this.category)
  },
  methods: {
    fetchData (page, limit, type) {
      axios.get(
        '/users/v1/self/rewards?type=' +
            this.type +
            '&page=' +
            this.page +
            '&limit=' +
            this.limit
      )
        .then((res) => {
          this.title = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

}
</script>
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
  color: black;
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
.point-box{
  background-color: #1087f4;
  height: 100px;
  color:white;
}
.click-box{
  background-color: white;
  color:black;
  border-radius: 1rem;
}
</style>
