<template>
  <v-container fluid>
    <div>
      <header>
        <v-layout>
          <v-row no-gutters>
            <v-col cols="2">
              <h1>govey</h1>
            </v-col>
            <v-col cols="8">
              <v-card>
                <v-tabs
                  background-color="deep-purple accent-4"
                  show-arrows
                  dark
                  fixed-tabs
                >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                  <v-tab>홈</v-tab>
                  <v-tab>설문예정</v-tab>
                  <v-tab>설문참여</v-tab>
                  <v-tab>설문등록</v-tab>
                  <v-tab>레포트</v-tab>
                  <v-tab>명예의전당</v-tab>
                  <v-tab>이벤트</v-tab>
                </v-tabs>
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-text-field label="검색"></v-text-field>
            </v-col>
          </v-row>
        </v-layout>
      </header>
      <nav>
            <div class="ma-5 pa-5">
              <v-container class="blue lighten-2" style="width:80%">
                <v-row>
                  <v-col md="4">
                    <v-card
                      class="pa-2 blue lighten-2"
                      tile
                      outlined
                    >
                      <h1>Event</h1>
                    </v-card>
                  </v-col>
                  <v-col
                    md="4"
                    class="ml-auto"
                  >
                    <v-card
                      class="pa-2 blue lighten-2"
                      outlined
                      tile
                    >
                      2032명 참여중
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    md="3"
                  >
                    <v-card
                      class="pa-2 blue lighten-2"
                      outlined
                      tile
                    >
                      설문을 참여하고 보상을 받아가세요!
                    </v-card>
                  </v-col>
                  
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-card
                      class="pa-2 blue lighten-2"
                      outlined
                      tile
                      center
                    >
                      <p class="text-md-center">
                      코로나를 경험한 대학생들에게 물어봅니다.
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
              <v-container class="blue lighten-1">
                <v-row>
                  <v-col md="4">
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                      3000명이 참여중입니다!
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    md="3"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                      비대면이 좋으시나요?
                    </v-card>
                  </v-col>
                  <v-col
                    md="3"
                    class="ml-md-auto blue lighten-1"
                  >
                    <v-card
                      class="pa-2 blue lighten-1"
                      outlined
                      tile
                    >
                      학비는 어느정도가 적당할까요?
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
                      2021 대학생들에게 물어봅니다!<br>
                      설문자: 상명대학교
                      </p>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>

          <v-col cols="6">
            <div class="ma-5 pa-5">
              <v-container class="red lighten-1">
                <v-row>
                  <v-col md="4">
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      3341명이 참여중입니다!
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    md="3"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      우왁굳이 최고다
                    </v-card>
                  </v-col>
                  <v-col
                    md="3"
                    class="ml-md-auto"
                  >
                    <v-card
                      class="pa-2 red lighten-1"
                      outlined
                      tile
                    >
                      감스트
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
                      가장 선호하는 유튜버 설문조사<br>
                      설문자: 상명대학교
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
          <div class="pt-5">
            <v-card
              elevation="2"
              outlined
              shaped
              class="red"
            >
            <v-card-title>
              유튜버들에게 묻습니다.
            </v-card-title>

            <v-card-subtitle>
              설문일자 
            </v-card-subtitle>
            </v-card>
          </div>
          <div class="pt-5">
            <v-card
              elevation="2"
              outlined
              shaped
              class="red"
            >
            <v-card-title>
              상명인에게 묻습니다.
            </v-card-title>

            <v-card-subtitle>
              설문일자 
            </v-card-subtitle>
            </v-card>
          </div>
          <div class="pt-5">
            <v-card
              elevation="2"
              outlined
              shaped
              class="red"
            >
            <v-card-title>
              BJ 좋아하시나요?
            </v-card-title>

            <v-card-subtitle>
              설문일자 
            </v-card-subtitle>
            </v-card>
          </div>
        </v-container>
      </section>
    </div>
  </v-container>
</template>


<script>

export default {
  name: 'InspirePage',
  
}
</script>
