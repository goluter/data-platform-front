<template>
  <v-container fluid class="wrap">
    <div>
      <v-tabs style="width:100%" fixed-tabs >
        <v-tab
        @click="
        tab1=true
        tab2=false
        tab3=false
        ">예정</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=true
        tab3=false
        ">진행중</v-tab>
        <v-tab
        @click="
        tab1=false
        tab2=false
        tab3=true
        ">마감</v-tab>
      </v-tabs>
    </div>
    <hr>

    <hr>
    <div>
      <div v-if="tab1 == true">
        하이루
      </div>
      <div v-if="tab2 == true">
        gh
      </div>
      <div v-if="tab3 == true">
        하이루geg
      </div>
    </div>
  </v-container>
</template>


<script>


export default {
  name: 'list-Page',
  layout: 'DefaultLayout',
  data(){
    return{
      tab1 : true,
      tab2 : false,
      tab3 : false
    }
  },
  
  componets:{
    
  }
}
</script>

<style>
.wrap{
    max-width: 500px;
}
</style>