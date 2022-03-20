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
           <div class="pt-5">
               <v-card
                elevation="2"
                outlined
                class="red"
                >
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
                <div id="boxplus">
                    <div id="box1">
                        <v-row>설문 내용 추가</v-row>
                    </div>
                </div>
                <v-row class="pt-3">
                    <div>
                        <v-btn id="btn1">
                            생성
                        </v-btn>
                        <v-btn id="btn2">
                            삭제
                        </v-btn>
                    </div>
                </v-row>
               </v-card>
           </div>

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
import $ from 'jquery';

export default {
  name: 'survey-Page',
        
    mounted(){
        var i = 1;
        $("#btn1").click(function(){
            i++;
            $("#boxplus").append(
                "<div id='box"+i+"'><v-row>추가"+i+"</v-row></div>"
            );
        });
        $("#btn2").click(function(){
            $("box"+i+"").remove();
            i--;
        });
    }
  
  
}
</script>

<style>
  .wrap{
    color:black;
  }
</style>