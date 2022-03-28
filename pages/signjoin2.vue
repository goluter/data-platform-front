<template>
<v-container fluid style="width:80%">
    <div class="wrap">
        <header class="pb-5">
            <NuxtLink to="/" style="color:black;  text-decoration-line: none;">
                <h1 class="pb-3">govey</h1>
            </NuxtLink>
            <hr>
        </header>
        <v-container>
        <section class="pt-3">
            <div class="text-center pb-4">
                <span style="font-size:40px">고베이에 오신걸 환영합니다!</span>
            </div>
            <br><br>
            <div class="text-center pt-4">
                <v-row>
                    <v-col>
                        <span style="font-size:30px">관심사 등록</span>
                    </v-col>
                    <v-col>
                         <NuxtLink to="/" style="color:black;  text-decoration-line: none;">
                            <v-btn>다음에 할게요</v-btn>
                         </NuxtLink>
                    </v-col>
                </v-row>
            </div>
            <br><br>
            <div class="text-center">
                관심사를 기준으로 설문을 추천하고 알려드려요!
            </div>
            <br><br>
            <div class="text-center">
                <v-row>
                    <v-col v-for="(inter,i) in 3" :key="inter">
                        <v-card
                        class=" blue"
                        tile
                        outlined
                        height="100px"
                        >
                        <v-card-title class="justify-center">  
                            {{sections[i]}}
                        </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-for="(que,i) in 3" :key="que">
                        <v-card
                        class=" blue"
                        tile
                        outlined
                        height="100px"
                        >
                        <v-card-title class="justify-center">   
                            {{sections2[i]}}
                        </v-card-title>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </section>
        </v-container>
        <footer>
            <hr>
            <div class="text-md-center">
                Copyright © goveycompany. All rights reserved.
            </div>
        </footer>
    </div>
</v-container>
</template>

<script>
export default {
  name: 'signjoin2-Page',
   data(){
       return{
           sections : ['코딩', '대학생활', '취업'],
           sections2 : ['패션', '디지털', '부동산']
       }
   }
}
</script>

<style >
    .wrap{
        color:black;
    }
</style>
