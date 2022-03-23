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
                <div class="cardbox1">
                    <input placeholder="제목 없는 질문1" class="input_title1">   사진  박스
                    <div class="boxplus1">
                        <div class="que_list_1_1">
                            <input placeholder="옵션1" class="input_que_1_1">
                        </div>
                    </div>
                    <div>
                        <button type="button" class="add_btn">
                            생성
                        </button>
                        <button type="button" class="delete_btn">
                            삭제
                        </button>
                    </div>
                </div>
           </div>
           <div class="pt-5">
               <v-btn id="card_add_btn" >
                   카드 생성
               </v-btn>
               <v-btn id="card_delete_btn" >
                   카드 삭제
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
        //1번 질문 옵션 추가
        var i = 1;
        $(".add_btn").click(function(){
            i++;
            $(".boxplus1").append(
                `<div class="que_list_1_${i}"><v-row><input placeholder="옵션${i}" class="input_que_1_${a}"></v-row></div>`
            );
        });
        
        //1번 질문 옵션 제거
        $(".delete_btn").click(function(){
            if(i == 1){
                alert("삭제하실 수 없습니다.");
            }
            else{
                $(".que_list_1_"+i+"").remove();
                i--;
            }
        });
        
        //카드 생성
        var k = 2;
        $("#card_add_btn").click(function(){
           $("#bigboxplus").append(
                `<div class="cardbox${k} pt-5">
                    <input placeholder="제목 없는 질문${k}" class="input_title${k}">   사진  박스
                    <div class="boxplus${k}">
                        <div class="que_list_${k}_1">
                            <input placeholder="옵션1" class="input_que_${k}_1">
                        </div>
                    </div>
                    <div>
                        <button type="button" class="add_btn" data-id="${k}">
                            생성
                        </button>
                        <button type="button" class="delete_btn" data-id="${k}">
                            삭제
                        </button>
                    </div>
                </div>`            
           );
           k++;
        });

        //카드 제거
        $(document).on("click","#card_delete_btn",function(){
            var t = k - 1;
            if(t == 1){
                alert("삭제하실 수 없습니다.");
            }
            else{
                $(".cardbox"+t+"").remove();
                k--;
            }
        });
       
        //2번 이상 질문 옵션 추가
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

        //2번 이상 질문 옵션 제거
         $("#bigboxplus").on('click','.delete_btn',function(){
            var dataid = $(this).data("id");
            var check = option[dataid] - 1;
            if(check == 1){
                alert("삭제하실 수 없습니다.");
            }
            else{
                $(".que_list_"+dataid+"_"+check+"").remove();
                option[dataid]--;
            }
        });
    }
  
  
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>