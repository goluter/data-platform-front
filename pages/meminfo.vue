<template>
    <div>
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
                        닉네임 : {{nickname}}<br>
                        칭호 : {{title}} <br>
                        포인트 : {{point}}<br>
                        이름 : {{name}}<br>
                        성별 : {{gender}}<br>
                        생일 : {{birth}}
                    </v-col>
                </v-row>
                <br><br>
                   
                    <v-btn>수정하기</v-btn>
            </v-container>
        </section>
        <footer>
            <hr>
            Copyright © goveycompany. All rights reserved.
        </footer>
    </div>
</template>

<script>
export default {
  name: 'meminfo-Page',
  data(){
      return{
          name : '고베이',
          nickname : '고베이판다',
          gender : '여',
          birth : '1998-01-21',
          point : 150,
          title : '멋쟁이 사자'
      }
  }
  
}
</script>
