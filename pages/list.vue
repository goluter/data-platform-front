<template>
  <v-container fluid style="width:80%">
    <div class="wrap">
      <header>
          <v-row no-gutters>
            <v-col cols="2">
              <h1>govey</h1>
            </v-col>
            <v-col cols="7">
              <v-card>
                <v-tabs
                  background-color="blue accent-4"
                  show-arrows
                  dark
                  fixed-tabs
                >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                  <v-tab style="color:black">{{tabs[0]}}</v-tab>
                  <v-tab style="color:black">{{tabs[1]}}</v-tab>
                  <v-tab style="color:black">{{tabs[2]}}</v-tab>
                  <v-tab style="color:black">{{tabs[3]}}</v-tab>
                  <v-tab style="color:black">{{tabs[4]}}</v-tab>
                  <v-tab style="color:black">{{tabs[5]}}</v-tab>
                  <v-tab style="color:black">{{tabs[6]}}</v-tab>
                </v-tabs>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-text-field label="검색"></v-text-field>
            </v-col>
            <v-col cols="1">
              <v-img src="/manicon.png" height="50px" width="50px"></v-img>
            </v-col>
          </v-row>
      </header>
      
      <section>
        <v-container style=" width:70%;">
          <div>
            <v-card
              elevation="2"
              outlined
              shaped
              class="blue"
            >
            <v-card-title>
              설문 등록하러가기
            </v-card-title>

            <v-card-subtitle>
              무료로 설문을 등록하고 공유할 수 있어요!
            </v-card-subtitle>
            </v-card>
          </div>
          <div class="pt-5">
            <h1>인기 설문</h1>
          </div>
         
          <div v-for="(que,i) in 3" :key="que" class="pt-5">
            <v-card
              elevation="2"
              outlined
              shaped
              class="red"
            >
            <v-card-title>
              <v-row justify="space-between">
                <v-col cols="auto">
                  {{quelists[i]}}
                </v-col>
                <v-col cols="auto">
                  사진
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-subtitle>
              <v-row justify="space-between">
                <v-col cols="auto">
                  설문 일자 : {{quedates[i]}}
                </v-col>
                <v-col cols="auto">
                  {{que_num[i] }} 명 참여중
                </v-col>
              </v-row>
              
            </v-card-subtitle>
            </v-card>
          </div>
          <v-row>
              <v-col>
                <div class="pt-5">
                    <h1>코딩 설문</h1>
                </div>
              </v-col>
              <v-col>
                <div class="pt-5">
                    <h1>대학생활 설문</h1>
                </div>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                <div v-for="(que,i) in 3" :key="que" class="pt-5">
                    <v-card
                    elevation="2"
                    outlined
                    shaped
                    
                    >
                    <v-card-title>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        {{quelists[i]}}
                        </v-col>
                        <v-col cols="auto">
                        사진
                        </v-col>
                    </v-row>
                    </v-card-title>

                    <v-card-subtitle>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        설문 일자 : {{quedates[i]}}
                        </v-col>
                        <v-col cols="auto">
                        {{que_num[i] }} 명 참여중
                        </v-col>
                    </v-row>
                    
                    </v-card-subtitle>
                    </v-card>
                </div>
              </v-col>
              <v-col>
                <div v-for="(que,i) in 3" :key="que" class="pt-5">
                    <v-card
                    elevation="2"
                    outlined
                    shaped
                    class="green"
                    >
                    <v-card-title>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        {{quelists[i]}}
                        </v-col>
                        <v-col cols="auto">
                        사진
                        </v-col>
                    </v-row>
                    </v-card-title>

                    <v-card-subtitle>
                    <v-row justify="space-between">
                        <v-col cols="auto">
                        설문 일자 : {{quedates[i]}}
                        </v-col>
                        <v-col cols="auto">
                        {{que_num[i] }} 명 참여중
                        </v-col>
                    </v-row>
                    
                    </v-card-subtitle>
                    </v-card>
                </div>
              </v-col>
          </v-row>
        </v-container>
      </section>
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
  name: 'list-Page',
  data(){
    return{
      //탭
      tabs : ['홈', '설문예정', '설문참여', '설문등록', '레포트', '명예의 전당', '이벤트'  ],
      
     
      //설문 목록
      quelists : ['유튜버들에게 묻습니다', '상명인에게 묻습니다', 'BJ 좋아하시나요?'],
      quedates : ['예정', '2021.12.11~2021.12.15', '2022.02.03~2022.02.05'],
      que_num : [12,157,156]
    }
  },
  componets:{
    
  }
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>