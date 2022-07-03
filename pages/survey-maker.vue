<template>
     <div class="container">
          <div class="header d-flex justify-end pb-2 pt-1">
              <div class="pr-2">
                <img src="../assets/Ios share.png">
              </div>
              <div class="pr-2">
                <img src="../assets/ant-design_save-outlined.png">
             </div>
              <div class="pr-2">
                <img src="../assets/More vert.png">
              </div>
              <div class="pr-2">
                <v-btn
                  color="teal accent-4"
                  style="color: white; height:30px; width:45px;"
                >
                  제출
                </v-btn>
              </div>
          </div>
    <div class="ma-3 pt-11">
      <b>제목 <span style="color:red;">*</span></b>
    </div>
    <div class="pl-3">
      <input 
        placeholder="   제목을 입력하시오"
        required
        class="title-box">
    </div>
    <div class="ma-3">
      <b>설문기간 <span style="color:red;">*</span></b>
    </div>
    <div>
      <v-row>
      <v-col
        cols="5"
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col
        cols="5"
       
      >
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="computedDateFormatted"
              persistent-hint
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    </div>
    <div class="ma-3">
      <b>태그 <span style="color:red;">*</span></b>
    </div>
    <div class="pl-3">
      <v-select
            v-model="tag"
            :items="tag_items"
            chips
            multiple
            solo
          ></v-select>
    </div>
    <div class="ma-3" style="color: #030229;">
      콤마로 구분합니다.
    </div>
    <div class="d-flex">
      <div class="rounded-lg round-box ma-3 pl-2 pr-2">
        #대학교  
      </div>
      <div class="rounded-lg round-box ma-3 pl-2 pr-2">
        #학생 
      </div>
    </div>
    <v-tabs style="width: 100%; color: black" fixed-tabs color="#1cddb7" class="pt-3">
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = true
          tab2 = false
          tab3 = false
          tab4 = false
          tab5 = false
        "
      >
        <b>항목</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = true
          tab3 = false
          tab4 = false
          tab5 = false
        "
      >
        <b>스토리</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = false
          tab3 = true
          tab4 = false
          tab5 = false
        "
      >
        <b>응답</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = false
          tab3 = false
          tab4 = true
          tab5 = false
        "
      >
        <b>보상</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1 = false
          tab2 = false
          tab3 = false
          tab4 = false
          tab5 = true
        "
      >
        <b>설정</b>
      </v-tab>
    </v-tabs>
    <div class="gray-box">
    </div>
    <div v-if="tab1 == true">
      <div class="div_check">
        <div>
          <div class="d-flex">
            <div class="ma-3">
              <input placeholder="  항목 제목" class="que-box pr-5 pl-2">
            </div>
            <div>
              <v-select
              :items="select_items"
              v-model="select_box"
              placeholder="객관식">
              </v-select>
              
            </div>
          </div>
          
          <div v-if=" select_box===null">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-circle-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div v-if=" select_box==='객관식'">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-circle-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div v-else-if="select_box ==='주관식'">
            <div>
              
            </div>
          </div>
          <div v-else-if="select_box ==='체크박스'">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div class="d-flex justify-end">
            <div class="pt-5 pr-4">
              <a @click="addDiv">
                <img src="../assets/akar-icons_copy.png">
              </a>
            </div>
            <div class="pt-5 pr-4">
              <img src="../assets/fa-regular_trash-alt.png">
            </div>
            <div class="d-flex" >
              <div class="pr-3 pt-5"> 
                Required 
              </div>
              <div>
                <v-switch
                v-model="que_switch1"
                ></v-switch>
              </div>
            </div>
            <div class="pt-5 pr-3">
              <img src="../assets/More vert.png">
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div class="ma-3">
              <input placeholder="  항목 제목" class="que-box pr-5 pl-2">
            </div>
            <div>
              <v-select
              :items="select_items"
              v-model="select_box"
              placeholder="객관식">
              </v-select>
              
            </div>
          </div>
          
          <div v-if=" select_box===null">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-circle-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div v-if=" select_box==='객관식'">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-circle-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div v-else-if="select_box ==='주관식'">
            <div>
              
            </div>
          </div>
          <div v-else-if="select_box ==='체크박스'">
            <div>
              <table style="width:100%">
                <tr v-for="(row,i) in rows" :key="i">
                  <td style="width:90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-outline</v-icon><input v-model="rows[i]" placeholder="option"  style="width:90%" class="pl-2">
                  </td>
                  <td style="width:10%"><a @click="removeRow(i)">
                    <img src="../assets/carbon_close.png"></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3;">
              <a @click="addRow">
                <img src="../assets/carbon_add.png">
              </a>
            </div>
          </div>
          <div class="d-flex justify-end">
            <div class="pt-5 pr-4">
              <a @click="addDiv">
                <img src="../assets/akar-icons_copy.png">
              </a>
            </div>
            <div class="pt-5 pr-4">
              <img src="../assets/fa-regular_trash-alt.png">
            </div>
            <div class="d-flex" >
              <div class="pr-3 pt-5"> 
                Required 
              </div>
              <div>
                <v-switch
                v-model="que_switch1"
                ></v-switch>
              </div>
            </div>
            <div class="pt-5 pr-3">
              <img src="../assets/More vert.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab2 == true">
      <div class="ma-3">
        궁금하지 않으세요?
      </div>
      <div>
        <img src="../assets/budget_chart.png">
      </div>
      <div style="border-top: 1px solid #d3d3d3;">
        <v-btn class="camera" icon @click="addImage">
          <v-icon>mdi-camera-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <div v-if="tab3 == true">
      <v-tabs style="width: 100%; color: black" fixed-tabs color="#1cddb7" class="pt-3">
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1_1 = true
          tab1_2 = false
          tab1_3 = false
          tab1_4 = false
        "
      >
        <b>설문</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1_1 = false
          tab1_2 = true
          tab1_3 = false
          tab1_4 = false
        "
      >
        <b>감정표현</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1_1 = false
          tab1_2 = false
          tab1_3 = true
          tab1_4 = false
        "
      >
        <b>다운로드</b>
      </v-tab>
      <v-tab
        style="color: black; font-size: 18px"
        @click="
          tab1_1 = false
          tab1_2 = false
          tab1_3 = false
          tab1_4 = true
        "
      >
        <b>리포트</b>
      </v-tab>
      </v-tabs>
      <div v-if="tab1_1 == true">
        <div class="d-flex justify-space-between pt-7">
          <div class="pl-3" style="font-size:22px;">
            <b>3개의 설문</b>
          </div>
          <div>
            <img src="../assets/uiw_file-excel.png" class="pr-2">
            <img src="../assets/More vert.png" class="pr-2">
          </div>
        </div>
        <v-tabs style="width: 100%; color: black" fixed-tabs color="#1cddb7" class="pt-3">
        <v-tab
          style="color: black; font-size: 18px"
          @click="
            tab2_1 = true
            tab2_2 = false
            tab2_3 = false
          "
        >
          <b>요약</b>
        </v-tab>
        <v-tab
          style="color: black; font-size: 18px"
          @click="
            tab2_1 = false
            tab2_2 = true
            tab2_3 = false
          "
        >
          <b>항목별</b>
        </v-tab>
        <v-tab
          style="color: black; font-size: 18px"
          @click="
            tab2_1 = false
            tab2_2 = false
            tab2_3 = true
          "
        >
          <b>개인별</b>
        </v-tab>
      </v-tabs>
      <div class="gray-box">
      </div>
      <div v-if="tab2_1 == true">
        <div class="d-flex justify-space-between ma-3 pt-2">
          <div>
            <div style="font-size:20px;">
              <b>문항제목</b>
            </div>
            <div style="font-size:12px;" class="pt-2">
              <b>3개의 응답</b>
            </div>
          </div>
          <div class="pt-2">
            <img src="../assets/Content copy.png" class="pr-2">
          </div>
        </div>
        <div class="d-flex justify-center">
          <div>
            <img src="../assets/budget_chart.png">
          </div>
        </div>
        <div class="gray-box">
        </div>
        <div class="d-flex justify-space-between ma-3 pt-2">
          <div>
            <div style="font-size:20px;">
              <b>문항제목</b>
            </div>
            <div style="font-size:12px;" class="pt-2">
              <b>3개의 응답</b>
            </div>
          </div>
          <div class="pt-2">
            <img src="../assets/Content copy.png" class="pr-2">
          </div>
        </div>
        <div class="d-flex justify-center">
          <div>
            <img src="../assets/budget_chart.png">
          </div>
        </div>
      </div>
      <div v-if="tab2_2 == true">
        <v-select
        :items="que_items"
        label="문항"
        style="width:50%;"
        ></v-select>
        <div class="gray-box2">
        </div>
        <div>
          <div style="font-size:20px;" class="pa-3">
            <b>찬성</b>
          </div>
          <div class="pl-3 pb-3">
            <b>3개의 응답</b>
          </div>
        </div>
        <div class="gray-box2">
        </div>
         <div>
          <div style="font-size:20px;" class="pa-3">
            <b>반대</b>
          </div>
          <div class="pl-3 pb-3">
            <b>1개의 응답</b>
          </div>
        </div>
        <div class="gray-box2">
        </div>
      </div>
      <div v-if="tab2_3 == true">
        <div>
          <div style="font-size:20px;" class="pa-3">
            <b>상명대학생님의 응답</b>
          </div>
          <div class="d-flex justify-space-between">
            <div class="pl-3 pb-3">
              <b>20개 문항에 응답</b>
            </div>
            <div style="color:#858585;">
              2022.05.23 12:42:33
            </div>
          </div>
        </div>
        <div class="gray-box2">
        </div>
         <div>
          <div style="font-size:20px;" class="pa-3">
            <b>강주영님의 응답</b>
          </div>
          <div class="d-flex justify-space-between">
            <div class="pl-3 pb-3">
              <b>21개 문항에 응답</b>
            </div>
            <div style="color:#858585;">
              2022.05.23 12:42:33
            </div>
          </div>
        </div>
        <div class="gray-box2">
        </div>
      </div>
      </div>
      <div v-if="tab1_2 == true">
        감정표현
      </div>
      <div v-if="tab1_3 == true">
        다운로드
      </div>
      <div v-if="tab1_4 == true">
        리포트
      </div>
    </div>
    <div v-if="tab4 == true">
      보상
    </div>
    <div v-if="tab5 == true">
      <div>
        <div class="d-flex justify-space-between">
          <div style="font-size:20px;" class="pa-3">  
            <b>응답</b>
          </div>
          <div class="pt-3">
            <button @click="show1 = !show1">
              <img src="../assets/Keyboard arrow down.png" >
            </button>
          </div>
        </div>
        <div v-if="show1 == true">
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>응답수정 가능</b>
            </div>
            <div>
              <v-switch
              v-model="switch1"
              ></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>인증 유저만 참여 가능</b>
            </div>
            <div>
              <v-switch
              v-model="switch2"
              ></v-switch>
            </div>
          </div>
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>칭호를 가진 유저만 참여 가능</b>
            </div>
            <div>
              <v-switch
              v-model="switch3"
              ></v-switch>
            </div>
          </div>
          <div class="d-flex justify-end">
            <div v-if="switch3 == true">
              <v-btn
                color="teal accent-4"
                style="color: white; height:30px; width:45px;"
              >
                추가
              </v-btn>
              <div class="d-flex pt-2">
                <div class="pt-1 pr-2">
                  상명대학생
                </div> 
                <div>
                  <img src="../assets/carbon_close.png" >
                </div>
              </div>
              <div class="d-flex pt-2">
                <div class="pt-1 pr-2">
                  국민대학생
                </div> 
                <div>
                  <img src="../assets/carbon_close.png" >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gray-box">
      </div>
      <div>
        <div class="d-flex justify-space-between">
          <div style="font-size:20px;" class="pa-3">  
            <b>알림</b>
          </div>
          <div class="pt-3">
            <button @click="show2 = !show2">
              <img src="../assets/Keyboard arrow down.png" >
            </button>
          </div>
        </div>
        <div v-if="show2 == true">
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>응답수정 가능</b>
            </div>
            <div>
              <v-switch
              v-model="switch4"
              ></v-switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SurveyMakePage',
  layout: 'empty',
  data: vm => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
      tab1_1: true,
      tab1_2: false,
      tab1_3: false,
      tab1_4: false,
      tab2_1: true,
      tab2_2: false,
      tab2_3: false,
      tag:['대학생','학생'],
      tag_items:['대학생','학생'],
      que_items:['1번 문항','2번 문항','3번 문항'],
      que_switch1:false,
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      show1:true,
      show2:true,
      rows:[null,,],
      select_items:['객관식','주관식','체크박스'],
      select_box:null
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      
      addDiv:function(){
        let element = document.querySelector(".div_check");
        let template = `
        <div data-v-8c00a6ec=""><div data-v-8c00a6ec="" class="d-flex"><div data-v-8c00a6ec="" class="ma-3"><input data-v-8c00a6ec="" placeholder="  항목 제목" class="que-box pr-5 pl-2"></div> <div data-v-8c00a6ec=""><div data-v-8c00a6ec="" class="v-input theme--light v-text-field v-text-field--is-booted v-text-field--placeholder v-select"><div class="v-input__control"><div role="button" aria-haspopup="listbox" aria-expanded="false" aria-owns="list-301" class="v-input__slot"><div class="v-select__slot"><div class="v-select__selections"><input id="input-301" placeholder="객관식" readonly="readonly" type="text" aria-readonly="false" autocomplete="off"></div><div class="v-input__append-inner"><div class="v-input__icon v-input__icon--append"><i aria-hidden="true" class="v-icon notranslate mdi mdi-menu-down theme--light"></i></div></div><input type="hidden"></div><div class="v-menu"><!----></div></div><div class="v-text-field__details"><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div></div></div></div></div> <div data-v-8c00a6ec=""><table data-v-8c00a6ec="" style="width: 100%;"><tr data-v-8c00a6ec=""><td data-v-8c00a6ec="" class="pl-2" style="width: 90%;"><i data-v-8c00a6ec="" aria-hidden="true" class="v-icon notranslate mdi mdi-checkbox-blank-circle-outline theme--light"></i><input data-v-8c00a6ec="" placeholder="option" class="pl-2" style="width: 90%;"></td> <td data-v-8c00a6ec="" style="width: 10%;"><a data-v-8c00a6ec=""><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTAAAAAAAAAAAAAAAANOsCP8AAAAEdFJOUwCgYF/0whw4AAAAQklEQVQY02NgoCNgFgCRjAZQLqMjiBQRgEmDWBAxuDRCEsRGkgRJI0sCpR0ZcHPRFKMahWYRqjPQHMkE8YICPYMNADjDBR6ZXW7VAAAAAElFTkSuQmCC"></a></td></tr><tr data-v-8c00a6ec=""><td data-v-8c00a6ec="" class="pl-2" style="width: 90%;"><i data-v-8c00a6ec="" aria-hidden="true" class="v-icon notranslate mdi mdi-checkbox-blank-circle-outline theme--light"></i><input data-v-8c00a6ec="" placeholder="option" class="pl-2" style="width: 90%;"></td> <td data-v-8c00a6ec="" style="width: 10%;"><a data-v-8c00a6ec=""><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTAAAAAAAAAAAAAAAANOsCP8AAAAEdFJOUwCgYF/0whw4AAAAQklEQVQY02NgoCNgFgCRjAZQLqMjiBQRgEmDWBAxuDRCEsRGkgRJI0sCpR0ZcHPRFKMahWYRqjPQHMkE8YICPYMNADjDBR6ZXW7VAAAAAElFTkSuQmCC"></a></td></tr></table></div> <div data-v-8c00a6ec="" class="pl-1" style="border-bottom: 1px solid rgb(211, 211, 211);"><a data-v-8c00a6ec=""><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUdwTBCH9E0eH6gAAAABdFJOUwBA5thmAAAAGElEQVQI12NgIBYwNhAk/v+HEUQoJg4AAHB0Cwtegb04AAAAAElFTkSuQmCC"></a></div> <div data-v-8c00a6ec="" class="d-flex justify-end"><div data-v-8c00a6ec="" class="pt-5 pr-4"><a data-v-8c00a6ec=""><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUREREdwTERERENDQ0FBQUNDQ0RERENDQ1BQUENDQ0JCQkNDQ0JCQkBAQENDQwVyyNUAAAAOdFJOU4EAQL8g38+nEDDvcFgQ+iIsLgAAAH5JREFUCNdjEBQUlJikpAmkBBiAhOu7d+8qoOy8ZGPTZ40Q9jtBQZG4DDhb0PUZiC1kCmKLxB0Esr3egdiCfIxANl8JEpuRWux1m5SUlOo2gtl8QHe+e+oIZssYG9s9LhEEs4Gq5R6C3a/32NjYOC8RzBaAqIb4ywloylyQfwEryzK+KSdRPgAAAABJRU5ErkJggg=="></a></div> <div data-v-8c00a6ec="" class="pt-5 pr-4"><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATBAMAAABvvEDBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTENDQ0JCQkFBQUJCQkNDQ0NDQ1BQUENDQ0NDQ0VFRUJCQkNDQ/peuhwAAAAMdFJOUwDfoCDvjb8Qz0gwcK82Y5MAAABRSURBVAjXY2BAAsyJgkIFYBbTibScACDNbjxH2NjipHEBA8sZCHBgYHVRAgEXBQYGQbBiQTAOBUIICwIpZSkBoSADsh0iYHs9gKw9YKccZQAAxGQWqOqVNPMAAAAASUVORK5CYII="></div> <div data-v-8c00a6ec="" class="d-flex"><div data-v-8c00a6ec="" class="pr-3 pt-5"> 
              Required 
            </div> <div data-v-8c00a6ec=""><div data-v-8c00a6ec="" class="v-input theme--light v-input--selection-controls v-input--switch"><div class="v-input__control"><div class="v-input__slot"><div class="v-input--selection-controls__input"><input aria-checked="false" id="input-308" role="switch" type="checkbox" aria-disabled="false" value=""><div class="v-input--selection-controls__ripple"></div><div class="v-input--switch__track theme--light"></div><div class="v-input--switch__thumb theme--light"><!----></div></div></div><div class="v-messages theme--light"><div class="v-messages__wrapper"></div></div></div></div></div></div> <div data-v-8c00a6ec="" class="pt-5 pr-3"><img data-v-8c00a6ec="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUdwTENDQ0NDQ0NDQ0JCQkNDQ++uikQAAAAFdFJOUwDv319gujMFEQAAAB5JREFUGNNjYCAXGCojcVQDkTiiQUgcJ5Ehbxo2AADMjgSWAlau5gAAAABJRU5ErkJggg=="></div></div></div>`;
        element.insertAdjacentHTML('beforeend',template);
        
      },
      addRow:function(){
        this.rows.push(null);
      },
      removeRow: function(row){
        this.rows.splice(row, 1);
      },
    },
    
}
</script>

<style scoped>
  .container{
    max-width: 500px;
    height: 100%;
    
  }
  .header {
  border-bottom: 1px solid #d3d3d3;
  max-width: 500px;
  width: 90%;
  background-color: white;
  position: fixed;
  z-index: 1;
}
 .title-box{
  width: 95%;
  height: 50px;
  border-radius: 10px;
  background: #f7f7f8;
}
.round-box{
  background-color: #eaeaea;
}
.gray-box{
  background-color: #eeeeee;
  height: 20px;
}
.gray-box2{
  background-color: #eeeeee;
  height: 10px;
}
.que-box{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #f7f7f8;
}

</style>
