<template>
  <div class="container">
    <div class="header d-flex justify-end pb-2 pt-1">
      <div class="pr-2">
        <img src="../assets/Ios share.png" />
      </div>
      <div class="pr-2">
        <img src="../assets/ant-design_save-outlined.png" />
      </div>
      <div class="pr-2">
        <img src="../assets/More vert.png" />
      </div>
      <div class="pr-2">
        <v-btn
          color="teal accent-4"
          style="color: white; height: 30px; width: 45px"
          @click="summit"
        >
          제출
        </v-btn>
      </div>
    </div>
    <div class="ma-3 pt-11">
      <b>제목 <span style="color: red">*</span></b>
    </div>
    <div class="pl-3">
      <input
        v-model="title"
        placeholder="제목을 입력하시오"
        required
        class="title-box pl-3"
      />
    </div>
    <div class="ma-3 pt-3">
      <b>설문기간 <span style="color: red">*</span></b>
    </div>
    <div class="ml-3">
      <input v-model="startAt" class="date" type="date" /> ~
      <input v-model="endAt" class="date" type="date" />
    </div>
    <div class="ma-3 pt-3">
      <b>태그 <span style="color: red">*</span></b>
    </div>
    <div class="pl-3">
      <v-select v-model="tag" :items="tag_items" chips multiple solo />
    </div>

    <v-tabs
      style="width: 100%; color: black"
      fixed-tabs
      color="#1cddb7"
      class="pt-3"
    >
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
      <!-- <v-tab
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
      </v-tab> -->
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
    <div class="gray-box" />
    <div v-if="tab1 == true">
      <div class="div_check">
        <div v-for="(item, k) in lists" :key="k">
          <div class="d-flex">
            <div class="ma-3">
              <input
                v-model="item.que_title"
                placeholder=" 항목 제목"
                class="que-box pr-5 pl-2"
              />
              {{ item.que_title }}
            </div>
            <div>
              <v-select
                v-model="item.select_box"
                :items="select_items"
                placeholder="객관식"
              />
            </div>
          </div>
          <div v-if="item.select_box === '객관식'">
            <div>
              <table style="width: 100%">
                <tr v-for="(row, i) in item.rows" :key="i">
                  <td style="width: 90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-circle-outline</v-icon
                    ><input
                      v-model="item.rows[i]"
                      placeholder="option"
                      style="width: 90%"
                      class="pl-2"
                    />
                  </td>
                  <td style="width: 10%">
                    <a @click="removeRow(k, i)">
                      <img src="../assets/carbon_close.png"
                    /></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3">
              <a @click="addRow(k)">
                <img src="../assets/carbon_add.png" />
              </a>
            </div>
          </div>
          <div v-else-if="item.select_box === '주관식'">
            <div class="pl-3">
              <textarea placeholder="주관식 질문" class="que-box2 pr-5 pl-2" />
            </div>
          </div>
          <div v-else-if="item.select_box === '체크박스'">
            <div>
              <table style="width: 100%">
                <tr v-for="(row, i) in item.rows" :key="i">
                  <td style="width: 90%" class="pl-2">
                    <v-icon>mdi-checkbox-blank-outline</v-icon
                    ><input
                      v-model="item.rows[i]"
                      placeholder="option"
                      style="width: 90%"
                      class="pl-2"
                    />
                  </td>
                  <td style="width: 10%">
                    <a @click="removeRow(k, i)">
                      <img src="../assets/carbon_close.png"
                    /></a>
                  </td>
                </tr>
              </table>
            </div>
            <div class="pl-1" style="border-bottom: 1px solid #d3d3d3">
              <a @click="addRow(k)">
                <img src="../assets/carbon_add.png" />
              </a>
            </div>
          </div>
          <div class="d-flex justify-end">
            <div class="pt-5 pr-4">
              <a @click="addDiv">
                <img src="../assets/akar-icons_copy.png" />
              </a>
            </div>
            <div class="pt-5 pr-4">
              <a @click="minusDiv(k)">
                <img src="../assets/fa-regular_trash-alt.png" />
              </a>
            </div>
            <div class="d-flex">
              <div class="pr-3 pt-5">Required</div>
              <div>
                <v-switch />
              </div>
            </div>
            <div class="pt-5 pr-3">
              <img src="../assets/More vert.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="tab2 == true">
      <div class="ma-3">궁금하지 않으세요?</div>
      <div>
        <img src="../assets/budget_chart.png" />
      </div>
      <div style="border-top: 1px solid #d3d3d3">
        <v-btn class="camera" icon @click="addImage">
          <v-icon>mdi-camera-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <div v-if="tab3 == true">
      <v-tabs
        style="width: 100%; color: black"
        fixed-tabs
        color="#1cddb7"
        class="pt-3"
      >
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
          <div class="pl-3" style="font-size: 22px">
            <b>3개의 설문</b>
          </div>
          <div>
            <img src="../assets/uiw_file-excel.png" class="pr-2" />
            <img src="../assets/More vert.png" class="pr-2" />
          </div>
        </div>
        <v-tabs
          style="width: 100%; color: black"
          fixed-tabs
          color="#1cddb7"
          class="pt-3"
        >
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
        <div class="gray-box" />
        <div v-if="tab2_1 == true">
          <div class="d-flex justify-space-between ma-3 pt-2">
            <div>
              <div style="font-size: 20px">
                <b>문항제목</b>
              </div>
              <div style="font-size: 12px" class="pt-2">
                <b>3개의 응답</b>
              </div>
            </div>
            <div class="pt-2">
              <img src="../assets/Content copy.png" class="pr-2" />
            </div>
          </div>
          <div class="d-flex justify-center">
            <div>
              <img src="../assets/budget_chart.png" />
            </div>
          </div>
          <div class="gray-box" />
          <div class="d-flex justify-space-between ma-3 pt-2">
            <div>
              <div style="font-size: 20px">
                <b>문항제목</b>
              </div>
              <div style="font-size: 12px" class="pt-2">
                <b>3개의 응답</b>
              </div>
            </div>
            <div class="pt-2">
              <img src="../assets/Content copy.png" class="pr-2" />
            </div>
          </div>
          <div class="d-flex justify-center">
            <div>
              <img src="../assets/budget_chart.png" />
            </div>
          </div>
        </div>
        <div v-if="tab2_2 == true">
          <v-select :items="que_items" label="문항" style="width: 50%" />
          <div class="gray-box2" />
          <div>
            <div style="font-size: 20px" class="pa-3">
              <b>찬성</b>
            </div>
            <div class="pl-3 pb-3">
              <b>3개의 응답</b>
            </div>
          </div>
          <div class="gray-box2" />
          <div>
            <div style="font-size: 20px" class="pa-3">
              <b>반대</b>
            </div>
            <div class="pl-3 pb-3">
              <b>1개의 응답</b>
            </div>
          </div>
          <div class="gray-box2" />
        </div>
        <div v-if="tab2_3 == true">
          <div>
            <div style="font-size: 20px" class="pa-3">
              <b>상명대학생님의 응답</b>
            </div>
            <div class="d-flex justify-space-between">
              <div class="pl-3 pb-3">
                <b>20개 문항에 응답</b>
              </div>
              <div style="color: #858585">2022.05.23 12:42:33</div>
            </div>
          </div>
          <div class="gray-box2" />
          <div>
            <div style="font-size: 20px" class="pa-3">
              <b>강주영님의 응답</b>
            </div>
            <div class="d-flex justify-space-between">
              <div class="pl-3 pb-3">
                <b>21개 문항에 응답</b>
              </div>
              <div style="color: #858585">2022.05.23 12:42:33</div>
            </div>
          </div>
          <div class="gray-box2" />
        </div>
      </div>
      <div v-if="tab1_2 == true">감정표현</div>
      <div v-if="tab1_3 == true">다운로드</div>
      <div v-if="tab1_4 == true">리포트</div>
    </div>
    <div v-if="tab4 == true">보상</div>
    <div v-if="tab5 == true">
      <div>
        <div class="d-flex justify-space-between">
          <div style="font-size: 20px" class="pa-3">
            <b>응답</b>
          </div>
          <div class="pt-3">
            <button @click="show1 = !show1">
              <img src="../assets/Keyboard arrow down.png" />
            </button>
          </div>
        </div>
        <div v-if="show1 == true">
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>응답수정 가능</b>
            </div>
            <div>
              <v-switch v-model="switch1" />
            </div>
          </div>
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>인증 유저만 참여 가능</b>
            </div>
            <div>
              <v-switch v-model="switch2" />
            </div>
          </div>
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>칭호를 가진 유저만 참여 가능</b>
            </div>
            <div>
              <v-switch v-model="switch3" />
            </div>
          </div>
          <div class="d-flex justify-end">
            <div v-if="switch3 == true">
              <v-btn
                color="teal accent-4"
                style="color: white; height: 30px; width: 45px"
              >
                추가
              </v-btn>
              <div class="d-flex pt-2">
                <div class="pt-1 pr-2">상명대학생</div>
                <div>
                  <img src="../assets/carbon_close.png" />
                </div>
              </div>
              <div class="d-flex pt-2">
                <div class="pt-1 pr-2">국민대학생</div>
                <div>
                  <img src="../assets/carbon_close.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gray-box" />
      <div>
        <div class="d-flex justify-space-between">
          <div style="font-size: 20px" class="pa-3">
            <b>알림</b>
          </div>
          <div class="pt-3">
            <button @click="show2 = !show2">
              <img src="../assets/Keyboard arrow down.png" />
            </button>
          </div>
        </div>
        <div v-if="show2 == true">
          <div class="d-flex justify-space-between pl-6">
            <div class="pt-5">
              <b>응답수정 가능</b>
            </div>
            <div>
              <v-switch v-model="switch4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'govey/src/libs/http-client'

export default {
  name: 'SurveyMakePage',
  layout: 'empty',
  data: (vm) => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
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
    tag: ['대학생', '학교', '게임', '스포츠', '의류', '뮤지엄'],
    tag_items: ['대학생', '학교', '게임', '스포츠', '의류', '뮤지엄'],
    que_items: ['1번 문항', '2번 문항', '3번 문항'],
    que_switch1: false,
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    show1: true,
    show2: true,
    title: null,
    startAt: null,
    endAt: null,
    que_title: [],

    select_items: ['객관식', '주관식', '체크박스'],
    select_box: null,
    lists: [
      { rows: [, ,], select_box: '객관식' },
      { rows: [, ,], select_box: '객관식' },
    ],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },

  methods: {
    async summit() {
      axios
        .post('/users/v1/surveys/', {
          content: this.title,
          tags: this.tag_items,
          startAt: this.startAt,
          endAt: this.endAt,
        })
        .then((res) => {
          alert('설문이 등록되었습니다.')
        })
        .catch((err) => {
          alert('설문등록 실패.')
        })
    },
    // await function(){
    //   axios.post('/users/v1/surveys/id/polls/',{
    //     "":this.que_title, "":this.lists,
    //   })
    //   .then((res) =>{
    //     alert("설문이 등록되었습니다.");
    //   })
    //   .catch((err)=>{
    //     alert("설문등록 실패.");
    //   })
    // },

    formatDate(date) {
      if (!date) {
        return null
      }

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) {
        return null
      }

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },

    addDiv: function () {
      this.lists.push({ rows: [, ,], select_box: '객관식' })
    },
    minusDiv: function (i) {
      this.lists.splice(i, 1)
    },
    addRow: function (k) {
      this.lists[k].rows.push(null)
    },
    removeRow: function (k, row) {
      this.lists[k].rows.splice(row, 1)
    },
  },
}
</script>

<style scoped>
.container {
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
.title-box {
  width: 95%;
  height: 50px;
  border-radius: 10px;
  background: #f7f7f8;
}
.round-box {
  background-color: #eaeaea;
}
.gray-box {
  background-color: #eeeeee;
  height: 20px;
}
.gray-box2 {
  background-color: #eeeeee;
  height: 10px;
}
.que-box {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background: #f7f7f8;
}
.que-box2 {
  border-radius: 10px;
  background: #f7f7f8;
  width: 100%;
}
.date {
  background-color: ghostwhite;
  border-radius: 5px;
}
</style>
