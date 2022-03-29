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
                    <input placeholder="제목 없는 설문지" style="width:70%; outline:none;" class="title">
                </v-card-title>
                <v-card-subtitle class="pt-2">
                    <input placeholder="설문지 내용" style="width:50%; outline:none;" class="sub_title">
                </v-card-subtitle>
            </v-card>
           </div>
           <div class="pt-5" id="bigboxplus">
                <div class="cardbox1 cardboxcss">
                    <input placeholder="제목 없는 질문1" class="input_title1" style="width:70%">   사진 
                    <select class="selectbox" style="float:right">
                        <option value="객관식 질문">객관식 질문</option>
                        <option value="주관식 질문">주관식 질문</option>
                        <option value="날짜 질문">날짜 질문</option>
                        <option value="시간 질문">시간 질문</option>
                    </select>
                    <div class="boxplus1">
                        <div class="que_list_1_1 pt-1">
                            <input placeholder="옵션1" class="input_que_1_1" style="width:50%">
                        </div>
                    </div>
                    <div class="pt-3">
                        <v-btn class="add_btn">
                            추가
                        </v-btn>
                        <v-btn class="delete_btn">
                            삭제
                        </v-btn>
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
               <v-btn id="send_btn" style="float:right">
                   보내기
               </v-btn>
           </div>
       </section> 
        <footer class="pt-2">
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
                `<div class="que_list_1_${i} pt-1">
                    <input placeholder="옵션${i}" class="input_que_1_${a}" style="width:50%">
                </div>`
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
                `<div class="cardbox${k} cardboxcss mt-5">
                    <input placeholder="제목 없는 질문${k}" class="input_title${k}" style="width:70%">   사진  
                    <select class="selectbox" data-select="${k}" style="float:right">
                        <option value="객관식 질문">객관식 질문</option>
                        <option value="주관식 질문">주관식 질문</option>
                        <option value="날짜 질문">날짜 질문</option>
                        <option value="시간 질문">시간 질문</option>
                    </select>
                    <div class="boxplus${k}">
                        <div class="que_list_${k}_1 pt-1">
                            <input placeholder="옵션1" class="input_que_${k}_1" style="width:50%">
                        </div>
                    </div>
                    <div class="pt-3">
                        <button type="button" data-id="${k}" class="add_btn v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default"><span class="v-btn__content">
                            추가
                        </span></button>
                        <button type="button" data-id="${k}" class="delete_btn v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default"><span class="v-btn__content">
                            삭제
                        </span></button>
                    </div>
                </div>`            
           ).trigger("create");
           k++;
           content.trigger("create");
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
                `<div class="que_list_${dataid}_${check} pt-1">
                    <input placeholder="옵션${check}" class="input_que_${dataid}_${check}" style="width:50%">
                </div>`
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

        //객관식 주관식 
        $(".selectbox").change(function(){
            if($(this).val() == "주관식 질문"){
                $(".boxplus1").after(
                    `<div class = "essay_div1 pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:50%;">
                        주관식 텍스트
                    </div>`
                );
                $(".boxplus1").hide();
                $(".date_div1").remove();
                $(".time_div1").remove();
            }
            else if($(this).val() == "객관식 질문"){
                $(".boxplus1").show();
                $(".essay_div1").remove();
                $(".date_div1").remove();
                $(".time_div1").remove();
            }
            else if($(this).val() == "날짜 질문"){
                $(".boxplus1").after(
                    `<div class = "date_div1 pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:25%;">
                        월, 일, 년
                    </div>`
                );
                $(".boxplus1").hide();
                $(".essay_div1").remove();
                $(".time_div1").remove();
            }
            else if($(this).val() == "시간 질문"){
                $(".boxplus1").after(
                    `<div class = "time_div1 pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:25%;">
                        시간
                    </div>`
                );
                $(".boxplus1").hide();
                $(".essay_div1").remove();
                $(".date_div1").remove();
            }
        });

        //2번부터 객관식 주관식
        $(document).on('change','.selectbox',function(){
            var select_id = $(this).data("select");
            if($(this).val() == "주관식 질문"){
                $(".boxplus"+select_id+"").after(
                    `<div class = "essay_div${select_id} pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:50%;">
                        주관식 텍스트
                    </div>`
                );
                $(".boxplus"+select_id+"").hide();
                $(".date_div"+select_id+"").remove();
                $(".time_div"+select_id+"").remove();
            }
            else if($(this).val() == "객관식 질문"){
                $(".boxplus"+select_id+"").show();
                $(".essay_div"+select_id+"").remove();
                $(".date_div"+select_id+"").remove();
                $(".time_div"+select_id+"").remove();
            }
            else if($(this).val() == "날짜 질문"){
                $(".boxplus"+select_id+"").after(
                    `<div class = "date_div${select_id} pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:25%;">
                        날짜 테스트
                    </div>`
                );
                $(".boxplus"+select_id+"").hide();
                $(".essay_div"+select_id+"").remove();
                $(".time_div"+select_id+"").remove();
            }
            else if($(this).val() == "시간 질문"){
                $(".boxplus"+select_id+"").after(
                    `<div class = "time_div${select_id} pt-1" style="border-bottom:2px dotted black; font-weight:lighter; width:25%;">
                        시간 테스트
                    </div>`
                );
                $(".boxplus"+select_id+"").hide();
                $(".essay_div"+select_id+"").remove();
                $(".date_div"+select_id+"").remove();
            }
        });
    }
  
  
}
</script>

<style>
  .wrap{
    color:black;
  }

  .cardboxcss{
      border : 1px solid black;
      background-color : skyblue;
  }

  button{
      border : 1px solid blue;
      background-color : white;
  }

  .title:focus{
      border-bottom:1px solid black;
  }

  .sub_title:focus{
      border-bottom:1px solid black;
  }
</style>