<template>
    <div class="wrap">
        <header class="pb-5">
            <h1 class="pb-3">govey</h1>
            <hr>
        </header>
        
        <section class="pt-3">
            <v-container style="width:80%; font-size:25px;">
                <v-row>
                    <v-col>
                        <v-img src=/lion.jpg height="300px" width="300px"></v-img>
                    </v-col>
                    <v-col>
                        <br>
                        닉네임 : {{meminfo[0].nickname}}<br>
                        칭호 : {{meminfo[0].title}} <br>
                        포인트 : {{meminfo[0].point}}<br>
                        이름 : {{meminfo[0].name}}<br>
                        성별 : {{meminfo[0].gender}}<br>
                        생일 : {{meminfo[0].birth}}
                    </v-col>
                </v-row>
                <br><br>
                <div class="text-md-center">   
                <v-btn>수정하기</v-btn>
                </div>
            </v-container>
        </section>
        <footer>
            <hr>
            <div class="text-md-center">
                Copyright © goveycompany. All rights reserved.
            </div>
        </footer>
    </div>
</template>

<script>
import mem_info from 'assets/data/mem_info.js'

export default {
  name: 'meminfo-Page',
  data(){
      return{
          meminfo : mem_info
      }
  }
  
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>