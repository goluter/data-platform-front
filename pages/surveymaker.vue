<template>
<v-container fluid style="width:80%">
    <div class="wrap">
        <header class="pb-5">
            <h1 class="pb-3">govey</h1>
            <hr>
        </header>
       <section>
           <div>
            <v-card
                elevation="2"
                outlined
                shaped
                class="red"
                >
                <v-card-title>
                    <input placeholder="제목 없는 설문지">
                </v-card-title>
                <v-card-subtitle>
                    <input placeholder="설문지 내용">
                </v-card-subtitle>
            </v-card>
           </div>
           <div class="pt-5" id="bigboxplus">
               <div class="check">
                <v-row>
                    <v-col cols="6">
                        <input placeholder="제목 없는 질문">
                    </v-col>
                    <v-col cols="2">
                        사진
                    </v-col>
                    <v-col cols="4">
                        박스
                    </v-col>
                </v-row>
                <div class="boxplus">
                    <div class="que_list1">
                        <v-row>설문 내용 추가</v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <button type="button" class="btn1">
                            생성
                        </button>
                       <button type="button" class="btn2">
                            삭제
                        </button>
                    </div>
                </v-row>
               </div>
           </div>
           <div>
               <v-btn id="card_btn1">
                   카드 생성
               </v-btn>
           </div>
       </section> 
        <footer>
            <hr>
            <div class="text-center">
                Copyright © goveycompany. All rights reserved.
            </div>
        </footer>
    </div>
</v-container>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'survey-Page',
        
    mounted(){
        var i = 1;
        $(".btn1").click(function(){
            i++;
            $(".boxplus").append(
                `<div class="que_list${i}"><v-row>추가${i}</v-row></div>`
            );
        });
        $(".btn2").click(function(){
            $(".que_list"+i+"").remove();
            i--;
        });
        var k = 2;
        let $box = `<div id="pluscheck${k}">
                <v-row>
                    <v-col cols="6">
                        <input placeholder="제목 없는 질문">
                    </v-col>
                    <v-col cols="2">
                        사진
                    </v-col>
                    <v-col cols="4">
                        박스
                    </v-col>
                </v-row>
                <div class="boxplus${k}">
                    <div class="que_list1">
                        <v-row>설문 내용 추가</v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <button type="button" class="btn1">
                            생성
                        </button>
                       <button type="button" class="btn2">
                            삭제
                        </button>
                    </div>
                </v-row>
               </div>`;
        $("#card_btn1").click(function(){
           $("#bigboxplus").append(
               `<div id="pluscheck${k}">
                <v-row>
                    <v-col cols="6">
                        <input placeholder="제목 없는 질문">
                    </v-col>
                    <v-col cols="2">
                        사진
                    </v-col>
                    <v-col cols="4">
                        박스
                    </v-col>
                </v-row>
                <div class="boxplus${k}">
                    <div class="que_list1">
                        <v-row>설문 내용 추가</v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <button type="button" class="btn1">
                            생성
                        </button>
                       <button type="button" class="btn2">
                            삭제
                        </button>
                    </div>
                </v-row>
               </div>`
           );
           k++;
           });

        var a = 2;
        $("#bigboxplus").on('click','.btn1',function(){
            $(".boxplus2").append(
                `<div class="que_list${a}"><v-row>추가${a}</v-row></div>`
            );
            a++;
        });
         $("#bigboxplus").on('click','.btn1',function(){
            $(".boxplus3").append(
                `<div class="que_list${a}"><v-row>추가${a}</v-row></div>`
            );
            a++;
        });
    }
  
  
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>