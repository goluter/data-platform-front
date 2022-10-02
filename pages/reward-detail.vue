<template>
<div>
    <div class="d-flex justify-center pt-5">
        <div>
            <img class="profileimg" src="../assets/man.png" align="middle" />
        </div>
    </div>
    <div class="d-flex justify-center pt-5">
        <div>
            <b>{{reward.name}}</b>
        </div>
    </div>
    <div class="d-flex justify-center pt-5">
        <div>
            <b>{{reward.requirements}}</b>
        </div>
    </div>

    <hr>
</div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'EventList',
  layout: 'default',
  data() {
    return {
      reward:[]
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', ' 업적 상세')
  },
  created(){
    this.fetchData(this.$route.query.id)
  },
   methods: {
    fetchData (id) {
      axios.get(
        'https://api.govey.app/users/v1/rewards/'+
        id 
          
      )
      .then((res) => {
        this.reward = res.data
      })
      .catch((err) =>{
        console.log(err)
      })
    }
  }
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
.point-box{
  background-color: #1087f4;
  height: 80px;
  color:white;
}
.click-box{
  background-color: white;
  color:black;
  border-radius: 1rem;
}
.profileimg{
    height: 100px;
    width: 100px;
}
</style>
