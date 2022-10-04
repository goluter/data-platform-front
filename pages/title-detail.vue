<template>
  <div>
    <div class="d-flex justify-center pt-5">
      <div>
        <img class="profileimg" src="../assets/man.png" align="middle" />
      </div>
    </div>
    <div class="d-flex justify-center pt-5">
      <div>
        <b>{{ title.name }}</b>
      </div>
    </div>
    <div class="d-flex justify-center pt-5 pb-8">
      <div>
        <b>{{ title.requirements }}</b>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col
          class="d-flex justify-center"
          cols="12"
          style="background-color: #1a9efe; color: white"
          @click="acbtn"
        >
          <b style="color: white">획득하기</b>
        </v-col>
      </v-row>

      
    </v-container>

    <div class="pt-4 pl-4">
      <b>획득 유저</b>
    </div>
    <div>
      <v-tabs fixed-tabs>
        <v-tab
          @click="
            Tab1 = true
            Tab2 = false
          "
        >
          <b>최근획득</b>
        </v-tab>
        <v-tab
          @click="
            Tab1 = false
            Tab2 = true
          "
        >
          <b>누적</b>
        </v-tab>
      </v-tabs>
    </div>
    <div v-if="Tab1 == true">
      <div v-for="(a, i) in list" :key="a" class="contents">
        <img class="profileimg2" src="../assets/man.png" align="middle" />
        <span>{{ list[i].user.nickname }}</span>
        <div class="point2">
          {{ list[i].createdAt | yyyyMMdd }}
        </div>
      </div>
    </div>
    <div v-if="Tab2 == true">
      <div v-for="(a, i) in list" :key="a" class="contents">
        <img class="profileimg2" src="../assets/man.png" align="middle" />
        <span>{{ list[i].user.nickname }}</span>
        <div class="point2">
          {{ list[i].createdAt | yyyyMMdd }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'
import { isLogin } from 'govey/src/libs/auth'

export default {
  name: 'EventList',
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
      title: [],
      list: [],
      Tab1: true,
      Tab2: false,
      userinfo: [],
      id: null
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', ' 칭호 상세')
  },
  created() {
    this.fetchData(this.$route.query.id)
  },
  methods: {
    fetchData(id) {
      axios
        .get('/users/v1/self/info')
        .then((res) => {
          this.userinfo = res.data
        })
        .catch((err) => {
          console.log(err)
        })
      Promise
        .all([
          axios.get('/users/v1/rewards/' + id),
          axios.get(
            '/users/v1/rewards/' + id + '/users?page=0&limit=20&isDesc=true'
          ),
        ])
        .then(
          ([res1, res2]) => {
            this.title = res1.data
            this.list = res2.data.content
            
          }
        )
        .catch((err) => {
          console.log(err)
        })
    },
    
    acbtn(event) {
      if(isLogin()){
        axios
        .post('/users/v1/rewards/' + this.$route.query.id + '/users?id=' + this.userinfo.id)
        .then((res) => {
          alert('획득하셨습니다.')
        })
        .catch((err) => {
          alert('이미 획득하셨습니다.')
        })
        }
      else{
        alert('획득하시려면 로그인을 하셔야 합니다')
      }
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
.profileimg2 {
  width: 20px;
  height: 20px;
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
