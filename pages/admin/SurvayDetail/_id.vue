<template>
  <div>
    <div style="display: flex; justify-content: center">
      <v-alert
        v-if="applysuccess == true"
        style="position: absolute; z-index: 3; width: 300px"
        class="applysuccess"
        type="success"
        :value="overlay"
      >
        완료
        <v-btn style="float: right" x-small @click="applysuccess = false">
          X
        </v-btn>
      </v-alert>
    </div>

    <div v-if="showdetailmodal == true" class="modal-black">
      <div class="modal-white">
        <div
          style="background-color: white; font-size: larger; font-weight: bold"
        >
          {{ SurvayData[$route.params.id].question[selectnum][0] }}
        </div>
        <!--체크박스-->
        <div
          v-if="
            SurvayData[$route.params.id].question[selectnum][1] == '체크박스' ||
            SurvayData[$route.params.id].question[selectnum][1] == '객관식'
          "
        >
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th style="text-align: center">번호</th>
                  <th style="text-align: center">목록</th>
                  <th style="text-align: center">투표수</th>
                  <th style="text-align: center">자세히</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(a, s) in SurvayData[$route.params.id].question[
                    selectnum
                  ][2]"
                  :key="a"
                >
                  <td style="text-align: center">
                    {{ s + 1 }}
                  </td>
                  <!--목록-->
                  <td style="text-align: center">
                    {{ SurvayData[$route.params.id].question[selectnum][2][s] }}
                  </td>
                  <!--투표수-->
                  <td style="text-align: center">
                    {{ SurvayData[$route.params.id].question[selectnum][3][s] }}
                  </td>
                  <td style="text-align: center">
                    <v-btn
                      @click="
                        showquestiondetail = true
                        selectquestiondetail = s
                      "
                      small
                      >자세히</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <!--주관식-->
        <div
          v-if="SurvayData[$route.params.id].question[selectnum][1] == '주관식'"
        >
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th style="text-align: center">번호</th>
                  <th style="text-align: center">닉네임</th>
                  <th style="text-align: center">답변</th>
                  <th style="text-align: center">자세히</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(a, s) in SurvayData[$route.params.id].question[
                    selectnum
                  ][2]"
                  :key="a"
                >
                  <td style="text-align: center">
                    {{ s + 1 }}
                  </td>
                  <td style="text-align: center">
                    {{ SurvayData[$route.params.id].question[selectnum][2][s] }}
                  </td>
                  <td style="text-align: center">
                    {{ SurvayData[$route.params.id].question[selectnum][3][s] }}
                  </td>
                  <td style="text-align: center">
                    <v-btn
                      @click="
                        showtextquestiondetail = true
                        selectquestiondetail = s
                      "
                      small
                      >자세히</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div>
          <v-btn
            id="eventcancel"
            elevation="2"
            @click="showdetailmodal = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--체크박스, 객관식 자세히 모달창-->
    <div v-if="showquestiondetail == true" class="modal-black">
      <div class="modal-white">
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">보기</th>
                <th style="text-align: center">투표수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][2][
                      selectquestiondetail
                    ]
                  }}
                </td>
                <td style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][3][
                      selectquestiondetail
                    ]
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table style="margin-top: 10px; margin-bottom: 10px">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][2][
                      selectquestiondetail
                    ]
                  }}를 고른 사람들
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(rr, po) in SurvayData[$route.params.id].question[
                  selectnum
                ][4][selectquestiondetail]"
                :key="rr"
              >
                <td style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][4][
                      selectquestiondetail
                    ][po]
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div>
          <v-btn
            id="noticecancel"
            elevation="2"
            @click="showquestiondetail = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--주관식 자세히 모달창-->
    <div v-if="showtextquestiondetail == true" class="modal-black">
      <div class="modal-white">
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">질문</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">
                  {{ SurvayData[$route.params.id].question[selectnum][0] }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table style="margin-top: 10px; margin-bottom: 10px">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">답변</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(rr, po) in SurvayData[$route.params.id].question[
                  selectnum
                ][4][selectquestiondetail]"
                :key="rr"
              >
                <td style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][2][
                      selectquestiondetail
                    ]
                  }},
                  {{
                    SurvayData[$route.params.id].question[selectnum][3][
                      selectquestiondetail
                    ]
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-simple-table style="margin-top: 10px; margin-bottom: 10px">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">답변을 쓴 사람</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(rr, po) in SurvayData[$route.params.id].question[
                  selectnum
                ][4][selectquestiondetail]"
                :key="rr"
              >
                <td style="text-align: center">
                  {{
                    SurvayData[$route.params.id].question[selectnum][4][
                      selectquestiondetail
                    ][po]
                  }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <div>
          <v-btn
            id="noticecancel"
            elevation="2"
            @click="showtextquestiondetail = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>

    <!--본문-->
    <v-simple-table style="margin-top: 50px">
      <template #default>
        <thead>
          <tr>
            <th style="text-align: center">등록번호</th>
            <th style="text-align: center">제목</th>
            <th class="text-left">글쓴이</th>
            <th class="text-left">날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center">
              {{ SurvayData[$route.params.id].id + 1 }}
            </td>
            <td style="text-align: center">
              {{ SurvayData[$route.params.id].title }}
            </td>
            <td>{{ SurvayData[$route.params.id].name }}</td>
            <td>{{ SurvayData[$route.params.id].date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table style="margin-top: 50px">
      <template #default>
        <thead>
          <tr>
            <th style="text-align: center">질문</th>
            <th class="text-left">유형</th>
            <th class="text-left">자세히</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(a, i) in SurvayData[$route.params.id].question" :key="a">
            <td style="text-align: center">
              {{ SurvayData[$route.params.id].question[i][0] }}
            </td>
            <td>
              {{ SurvayData[$route.params.id].question[i][1] }}
            </td>
            <td>
              <v-btn
                small
                @click="
                  selectnum = i
                  showdetailmodal = true
                "
                >자세히</v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import SurvayData from '../../../assets/data/SurveyData'

export default {
  name: 'Inquiry',
  layout: 'admin',
  data() {
    return {
      SurvayData,
      selectnum: 0,
      selectquestion: 0,
      selectquestiondetail: 0,
      showdetailmodal: false,
      showtextquestiondetail: false,
      applysuccess: false,
      addsuccess: false,
      overlay: false,
      showquestiondetail: false,
    }
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false
        }, 2000)
    },
  },
}
</script>

<style scoped>
.modal-black {
  width: 100%;
  height: 100%;

  position: absolute;

  padding: 20px;
  text-align: center;
  z-index: 1;
}
.modal-white {
  margin-top: 6%;
  width: 30%;
  border-radius: 8px;
  background: #b8d2ea;
  padding: 1%;
  display: inline-block;
  z-index: 1;
  box-shadow: 10px 10px gray;
}
</style>
