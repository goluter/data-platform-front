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
               <div class="cardbox1  pb-5">
                <v-row>
                    <v-col cols="6">
                        <input placeholder="제목 없는 질문1" class="input_title1">
                    </v-col>
                    <v-col cols="2">
                        사진
                    </v-col>
                    <v-col cols="4">
                        박스
                    </v-col>
                </v-row>
                <div class="boxplus1">
                    <div class="que_list1">
                        <v-row>
                            <input placeholder="옵션1" class="input_que1">
                        </v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <button type="button" class="add_btn">
                            생성
                        </button>
                       <button type="button" class="delete_btn">
                            삭제
                        </button>
                    </div>
                </v-row>
               </div>
           </div>
           <div class="pt-5">
               <v-btn id="card_btn1" >
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
        $(".add_btn").click(function(){
            i++;
            $(".boxplus1").append(
                `<div class="que_list${i}"><v-row><input placeholder="옵션${i}" class="input_que${a}"></v-row></div>`
            );
        });
        $(".delete_btn").click(function(){
            $(".que_list"+i+"").remove();
            i--;
        });
        var k = 2;
        $("#card_btn1").click(function(){
           $("#bigboxplus").append(
               `<div =class="cardbox${k} pt-5">
                <v-row>
                    <v-col cols="6">
                        <input placeholder="제목 없는 질문${k}" class="input_title${k}">
                    </v-col>
                    <v-col cols="2">
                        사진
                    </v-col>
                    <v-col cols="4">
                        박스
                    </v-col>
                </v-row>
                <div class="boxplus${k}">
                    <div class="que_list_${k}_1">
                        <v-row>
                            <input placeholder="옵션1" class="input_que_${k}_1">
                        </v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <button type="button" class="add_btn" data-id="${k}">
                            생성
                        </button>
                       <button type="button" class="delete_btn" data-id="${k}">
                            삭제
                        </button>
                    </div>
                </v-row>
               </div>`
           );
           k++;
        });
        var option = [];
        for(var t = 2; t<=100; t++){
            option[t] = 2;
        }
        var a = 2;
        $("#bigboxplus").on('click','.add_btn',function(){
            var dataid = $(this).data("id");
            var check = option[dataid];
            $(".boxplus"+dataid+"").append(
                `<div class="que_list_${dataid}_${check}"><v-row><input placeholder="옵션${check}" class="input_que_${dataid}_${check}"></v-row></div>`
            );
            option[dataid]++;
        });
         $("#bigboxplus").on('click','.delete_btn',function(){
            var dataid = $(this).data("id");
            var check = option[dataid];
            $(".que_list_"+dataid+"_"+check+"").remove();
            option[dataid]--;
        });
    }
  
  
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>