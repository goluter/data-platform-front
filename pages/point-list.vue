<template>
  <div>
    <div v-for="(item, i) in point" :key="i" class="contents">
      <NuxtLink
        :to="{ path: '/point-detail', query: { id: item.id } }"
        style="text-decoration: none; color: initial"
      >
        <span>{{ item.createdAt | yyyyMMdd }}</span>
        <span>{{ item.title }}</span>
        <span>{{ item.content }}</span>
        <div class="point">+{{ item.amount }} P</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'
export default {
  name: 'PointList',
  filters: {
    yyyyMMdd: function (value) {
      if (value == '') {
        return ''
      }

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
    },
  },
  layout: 'default',
  data() {
    return {
      page: 0,
      limit: 10,
      point: [],
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '  포인트 이력')
  },
  created() {
    this.fetchData(this.page, this.limit)
  },
  methods: {
    fetchData(page, limit) {
      axios
        .get('/users/v1/self/points?page=' + this.page + '&limit=' + this.limit)
        .then((res) => {
          this.point = res.data.content
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.Ellipse-21 {
  width: 74px;
  height: 74px;
  flex-grow: 0;
  margin: 0 59px 23px 58px;
  background-color: #c4c4c4;
}
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
.profileimg {
  height: 100px;
  width: 100px;
}
</style>
