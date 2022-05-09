<template>
    <v-container>
            <Header />
            <div>
                <v-row>
                    <v-col>추천 설문</v-col>
                    <v-col>더보기</v-col>
                </v-row>
                <v-row>
                    홍길동님이 좋아하실만한 설문을 준비했어요!
                </v-row>
            </div>
            <div>
            <div class="blue lighten-1 rounded-xl ma-5">
                <v-row justify="end">
                   
                    사진
                  
                </v-row>
                <v-row>
                    2001명이 참여중이에요!
                </v-row>
                <v-row>
                    2021 대학생들에게 물어봅니다!
                </v-row>
                <v-row>
                    설문자:상명대학교
                </v-row>
            </div>
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

