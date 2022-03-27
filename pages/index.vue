<template>
  <v-container fluid style="width:80%">
    <div class="wrap">
      <header>
          <v-row no-gutters>
            <v-col cols="2">
              <h1>Govey</h1>
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
                  <v-tab style="color:black"><NuxtLink to="/meminfo" style="color:black;  text-decoration-line: none;">{{tabs[3]}}</NuxtLink></v-tab>
                  <v-tab style="color:black">{{tabs[4]}}</v-tab>
                  <v-tab style="color:black">{{tabs[5]}}</v-tab>
                  <v-tab style="color:black">{{tabs[6]}}</v-tab>
                </v-tabs>
              </v-card>
            </v-col>
            <v-col cols="1">
              <v-text-field label="검색" color="black"></v-text-field>
            </v-col>
            <v-col cols="1">
              <NuxtLink to="/meminfo">
                <v-img src="/manicon.png" height="50px" width="50px"></v-img>
              </NuxtLink>
            </v-col>
            <v-col cols="1">
              <div>
                <NuxtLink to="/admin">
                  관리자페이지
                </NuxtLink>
              </div>
              <div>
                <NuxtLink to="/signin">
                  로그인
                </NuxtLink>
              </div>
              <div>
                <NuxtLink to="/signjoin1">
                  회원가입
                </NuxtLink>
              </div>
            </v-col>
          </v-row>
      </header>
      <nav>
            <div class="ma-5 pa-5">
              <v-container class="blue">
                <v-row>
                  <v-col>
                    <v-card
                      class=" blue"
                      tile
                      outlined
                    >
                      <span style="font-size:40px; font-weight:500;">Event</span>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card
                      class="blue"
                      outlined
                      tile
                    >
                      <span style="font-size:40px; font-weight:500;"><span style="color:yellow">{{mainque[0].num}}</span>명 참여중</span>
                    </v-card>
                  </v-col>
                </v-row>
                <br><br>
                <v-row>
                  <v-col
                    md="6"
                  >
                    <v-card
                      class="pa-2 blue"
                      outlined
                      tile
                    >
                      <span style="font-size:25px;">설문을 참여하고 보상을 받아가세요!</span>
                    </v-card>
                  </v-col>
                </v-row>
                <br><br>
                <v-row>
                  <v-col cols="12">
                    <v-card
                      class="pa-2 blue"
                      outlined
                      tile
                      center
                    >
                      <p class="text-md-center">
                      <span style="font-size:20px;">{{mainque[0].subject}}</span>
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
      </nav>
      <section>
        <div>
          <h2>추천 설문</h2> 
        </div>
        <v-row>
          <v-col cols="6">
            <div class="ma-5 pa-5">
              <v-container class="blue lighten-1 rounded-xl">
                <v-row>
                  <v-col md="8">
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                      {{subque[0].num}}명이 참여중입니다!
                    </v-card>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col
                    md="6"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                       {{subque[0].que1}}
                    </v-card>
                  </v-col>
                  <v-col>
                  </v-col>
                </v-row>
                <v-row justify="end">
                  <v-col
                    md="6"
                    class="ml-md-auto blue lighten-1"
                  >
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                      {{subque[0].que2}}
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                      center
                    >
                      <p class="text-md-center">
                      {{subque[0].subject}}<br>
                      설문자: {{subque[0].orga}}
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="ma-5 pa-5">
              <v-container class="red lighten-1 rounded-xl">
                <v-row>
                  <v-col md="8">
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      {{subque[1].num}}명이 참여중입니다!
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    md="6"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      {{subque[1].que1}}
                    </v-card>
                  </v-col>
                  <v-col
                    md="6"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      {{subque[1].que2}}
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                      center
                    >
                      <p class="text-md-center">
                      {{subque[1].subject}}<br>
                      설문자: {{subque[1].orga}}
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </section>

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
                  {{mainlist[i].que}}
                </v-col>
                <v-col cols="auto">
                  사진
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-subtitle>
              <v-row justify="space-between">
                <v-col cols="auto">
                  설문 일자 : {{mainlist[i].date}}
                </v-col>
                <v-col cols="auto">
                  {{mainlist[i].num}} 명 참여중
                </v-col>
              </v-row>
              
            </v-card-subtitle>
            </v-card>
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
  </v-container>
</template>


<script>
import mainque from 'assets/data/main_que.js'
import subque from 'assets/data/main_subque.js'
import mainlist from 'assets/data/main_list.js'
export default {
  name: 'index',
  layout: 'DefaultLayout',
  data(){
    return{
     
      // 탭
      tabs : ['홈', '설문예정', '설문참여', '설문등록', '레포트', '명예의 전당', '이벤트'  ],
      
      // 메인 질문
      mainque,
      // 서브 질문
      subque,
      // 설문 목록
      mainlist,
    
      // 설문 목록
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
