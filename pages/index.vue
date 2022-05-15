<<<<<<< HEAD
<template></template>

<script>
export default {
  name: 'index',
  layout: 'DefaultLayout',

  componets: {},
}
</script>

<style></style>
=======
<template>
    <v-container fluid class="wrap">
        <Header />
        <div class="ma-5">
            <v-row justify="space-between">
                <v-col cols="auto"><h1>추천 설문</h1></v-col>
                <v-col cols="auto">더보기</v-col>
            </v-row>
            <v-row>
                <v-col>홍길동님이 좋아하실만한 설문을 준비했어요!</v-col>
            </v-row>
        </div>
        <div>
            <NuxtLink to="/" style="color:black; text-decoration-line: none;">
            <div class="blue  rounded-xl ma-5">
                <v-row justify="end" class="mr-4">           
                    <img src="../assets/play.png"/>   
                </v-row>
                <v-row justify="end" class="mr-4">
                    2001명이 참여중이에요!
                </v-row>
                <v-row class="ml-4">
                    2021 대학생들에게 물어봅니다!
                </v-row>
                <v-row class="ml-4">
                    설문자:상명대학교
                </v-row>
            </div>
            </NuxtLink>
        </div>
        <div class="">
            <NuxtLink to="/surveymaker/" style="color:black; text-decoration-line: none;">
            <div class="black rounded-xl ma-5 " style="color:white;">
                <v-row class="ml-4">
                    <v-col><img src="../assets/survey.png"/> 설문 등록</v-col>
                </v-row>
                <v-row class="ml-4">
                    <v-col>지금 등록하시면 1000P를 바로 적립해드려요!</v-col>
                </v-row>
            </div>
            </NuxtLink>
        </div>
        <div class="ma-5">
            <v-row justify="space-between">
                <v-col cols="auto"><h1>인기 설문</h1></v-col>
                <v-col cols="auto">더보기</v-col>
            </v-row>
            <v-row>
                <v-col>지금 핫한 설문이에요. 한번 살펴보세요!</v-col>
            </v-row>
        </div>
        <div>
          <div class="rounded-xl ml-5 mr-5 " style="background-color:white; border: 1px solid black; height:110px; position:relative; z-index:2;">  
            <v-row>
              <v-col cols="3">
                <div class="rounded-xl ma-2 gray-box"></div>
              </v-col>
              <v-col cols="9">
                <v-row class="mt-1" justify="start" style="font-size:14px; ">
                  <v-col><b>대학생들에게 묻습니다</b></v-col>
                </v-row>
                <v-row justify="end" class="mr-1" style="font-size:10px;">4일 남음</v-row>
                <v-row style="font-size:10px;"  justify="space-between">
                  <v-col cols="6">110명이 참여 중입니다.</v-col>   
                  <v-col class="" cols="6">#대학생 #새내기 #축제</v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="rounded-xl ml-5 mr-5" style="background-color:#494949; position:relative; top:-50px; height:80px; z-index:1;">
            <div style="position:absolute; bottom:2px; color:white;" class="ml-5 d-flex">
              <div class="rounded-xl pl-2 pr-2" style="background-color:white; color:black;"><img src="../assets/giftbox 2.png"/> 스타벅스</div>
              <div class="rounded-xl pl-2 pr-2 ml-2" style="background-color:white; color:black;" ><img src="../assets/coin 2.png"/> 100P</div>
            </div>
          </div>
        </div>
        <div>
          <div class="rounded-xl ml-5 mr-5 " style="background-color:white; border: 1px solid black; height:110px; position:relative; z-index:2;">  
            <v-row>
              <v-col cols="3">
                <div class="rounded-xl ma-2 gray-box"></div>
              </v-col>
              <v-col cols="9">
                <v-row class="mt-1" justify="start" style="font-size:14px; ">
                  <v-col><b>대학생들에게 묻습니다</b></v-col>
                </v-row>
                <v-row justify="end" class="mr-1" style="font-size:10px;">4일 남음</v-row>
                <v-row style="font-size:10px;"  justify="space-between">
                  <v-col cols="6">110명이 참여 중입니다.</v-col>   
                  <v-col class="" cols="6">#대학생 #새내기 #축제</v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div class="rounded-xl ml-5 mr-5" style="background-color:#494949; position:relative; top:-50px; height:80px; z-index:1;">
            <div style="position:absolute; bottom:2px; color:white;" class="ml-5 d-flex">
              <div class="rounded-xl pl-2 pr-2" style="background-color:white; color:black;"><img src="../assets/giftbox 2.png"/> 스타벅스</div>
              <div class="rounded-xl pl-2 pr-2 ml-2" style="background-color:white; color:black;" ><img src="../assets/coin 2.png"/> 100P</div>
            </div>
          </div>
        </div>
        <div>
            <NuxtLink to="/surveymaker/" style="color:black; text-decoration-line: none;">
            <div class="black rounded-xl ma-5 " style="color:white;">
                <v-row class="ml-4">
                    <v-col cols="1"><img src="../assets/Collections bookmark.png"/></v-col>
                    <v-col cols="3"> 가이드</v-col>
                    <v-col>#보상 #기프티콘 #개이득</v-col>
                </v-row>
                <v-row class="ml-4">
                    <v-col>더 재미있게 즐길 수 있도록 모아놨어요!</v-col>
                </v-row>
            </div>
            </NuxtLink>
        </div>
        <div class="ma-5">
            <v-row justify="space-between">
                <v-col cols="auto"><h1>이벤트</h1></v-col>
                <v-col cols="auto">더보기</v-col>
            </v-row>
            <v-row>
                <v-col>다양한 이벤트를 준비중이예요.</v-col>
            </v-row>
        </div>
        <Footer />
            
        
    </v-container>
</template>

<script>
    import Header from '/layouts/layout_header.vue'
    import Footer from '/layouts/layout_footer.vue'

    export default{
        name: 'index',
        layout: 'DefaultLayout',
        components:{
            Header,
            Footer
        }
    }
</script>

<style>
.wrap{
    max-width: 500px;
}
.gray-box{
  background-color: gray;
  width: 70px;
  height: 75px;
}
</style>

>>>>>>> c130b57436acbb273f180a477042c27b8d6bfd4d
