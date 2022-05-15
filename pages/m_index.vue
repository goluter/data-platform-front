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
        <div>
            <NuxtLink to="/surveymaker/" style="color:black; text-decoration-line: none;">
            <div class="black rounded-xl ma-5 " style="color:white;">
                <v-row class="ml-4">
                    <v-col>
                        사진
                    </v-col>
                    <v-col>사진 설문 등록</v-col>
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
            <div class="rounded-xl ma-5 " style="border: 1px solid black;">
            대학생들에게 묻습니다
            </div>
        </div>
        <div>
            <div class="rounded-xl ma-5 " style="border: 1px solid black;">
            대학생들에게 묻습니다
            </div>
        </div>
        <div>
            <NuxtLink to="/surveymaker/" style="color:black; text-decoration-line: none;">
            <div class="black rounded-xl ma-5 " style="color:white;">
                <v-row class="ml-4">
                    <v-col>
                        사진
                    </v-col>
                    <v-col>가이드</v-col>
                    <v-col>보상</v-col>
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
        name: 'm_index',
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
</style>

