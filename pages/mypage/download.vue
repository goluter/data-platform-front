<template>
  <div class="wrapper">
    <v-container>
        <div class="d-flex all-box" v-for="(item,i) in list" :key="i">
            <div class="gray-box rounded-lg col-2 mt-2">
            </div>
            <div class="col-10">
                <div class="d-flex justify-space-between" >
                    <div style="font-size:12px;">
                        <b>{{item.title}}</b>
                    </div>
                    <div :class="{thiscolor:item.download, bacolor:item.backcolor}" class="rounded-lg gray-box2 " @click="changecolor(i)">  
                        <div class="pt-2">
                            <center>
                                <img src="../../assets/Vector_down.png">
                            </center>
                        </div>
                    </div>
                </div>
                <div style="font-size:10px;">
                    다운로드 가능 기간 : {{item.date}}
                </div>
            </div>
        </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '상명대 학생들에 대한 고찰',
          date: '2022-12-02 ~ 2022-12`05',
          download: false,
          backcolor: true
        },
        {
          title: '축제 기간',
          date: '2022-12-04 ~ 2022-12`08',
          download: false,
          backcolor: true
        }
      ],
      iscolor : false
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '내 다운로드 이력 ')
    
  },
  methods:{
    changecolor: function(i){
        if(this.list[i].download === false){
            this.list[i].download = true;
            this.list[i].backcolor = false;
        }
        
    }
  }
}
</script>

<style scoped>
.gray-box {
    background-color: #a7a7a7;
    width: 60px;
    height: 60px;
}
.thiscolor{
    background-color:#b3b3b3;
}
.bacolor{
    background-color:#1a9efe;
}
.gray-box2{
    
    width: 36px;
    height: 36px;
}
.all-box{
    border-bottom: 1px solid #f0f0f0;
}
</style>
