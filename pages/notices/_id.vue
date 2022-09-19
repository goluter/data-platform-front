<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div style="border-bottom: 1px solid #d3d3d3">
          <div class="noticetitle">
            {{ NoticeData[$route.params.id].title }}
          </div>
          <div class="date">
            {{ NoticeData[$route.params.id].date }}
          </div>
        </div>
        <div>
          <div class="noticemain">
            {{ NoticeData[$route.params.id].answer }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NoticeData from '../../assets/data/NoticeData'
export default {
  name: 'Notice',
  layout: 'default',
  data () {
    return {
      NoticeData,
      selectnum: 0
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '공지사항')
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 210b1e074ce5d873129abaf2ff58bfdc0968ad7e
}
</script>

<style scoped>
.noticemain {
  height: 16px;
  font-size: 14px;
  padding: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.noticeimg {
  width: 322px;
  height: 251px;
  margin: 67px 0 0 18px;
  border-radius: 20px;
}
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
  width: 200px;
}
.container {
  padding: 0px;
}
.banner {
  background-color: #eee;
  height: 96px;
  padding: 2%;
  width: 100%;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
  width: 100%;
  background-color: white;
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
  z-index: 1;
}
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: hidden;
  height: 87px;
}
.contents a {
  text-decoration: none;
}

.date {
  width: 100px;
  height: 14px;
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
