<template>
  <div>
    <!--문의 상세 내용 모달창-->
    <div v-if="ShowModal_Inquiry == true" class="modal-black">
      <div class="modal-white">
        <h4>문의게시판 상세</h4>
        <v-simple-table style="background: #b8d2ea; margin: 10px">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th style="text-align: center">제목</th>
                <th class="text-left">글쓴이</th>
                <th class="text-left">날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center">
                  {{ InquiryData[inquirynum].id + 1 }}
                </td>
                <td style="text-align: center">
                  {{ InquiryData[inquirynum].question }}
                </td>
                <td>{{ InquiryData[inquirynum].name }}</td>
                <td>{{ InquiryData[inquirynum].date }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div>
          <v-textarea
            :value="InquiryData[inquirynum].question"
            label="제목"
            auto-grow
            outlined
            disabled
          />
          <v-textarea
            :value="InquiryData[inquirynum].main"
            label="본문"
            auto-grow
            outlined
            disabled
          />
          <v-textarea
            :value="InquiryData[inquirynum].answer"
            label="답변"
            auto-grow
            outlined
            v-if="InquiryData[inquirynum].check == '답변 후'"
          />
          <v-textarea
            :value="InquiryData[inquirynum].answer"
            label="답변"
            auto-grow
            outlined
            v-if="InquiryData[inquirynum].check == '답변 전'"
          />
        </div>

        <div>
          <v-btn
            id="usraddapply"
            elevation="2"
            @click="
              ShowModal_Inquiry = false
              addsuccess = true
              overlay = !overlay
            "
          >
            확인
          </v-btn>
          <v-btn
            id="usraddcancel"
            elevation="2"
            @click="ShowModal_Inquiry = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--유저추가 모달창-->
    <div v-if="ShowModal_UserAdd == true" class="modal-black">
      <div class="modal-white">
        <h4>회원 추가</h4>
        <div>
          <div>
            <input
              id="username"
              type="text"
              class="form-control"
              placeholder="Username"
              required
            />
          </div>
          <div class="col-12">
            <input
              id="address2"
              type="text"
              class="form-control"
              placeholder="Example@gmail.com"
            />
          </div>
          <div class="col-12">
            <input
              id="address2"
              type="text"
              class="form-control"
              placeholder="추가정보"
            />
          </div>
        </div>

        <div>
          <v-btn
            id="usraddapply"
            elevation="2"
            @click="
              ShowModal_UserAdd = false
              addsuccess = true
              overlay = !overlay
            "
          >
            추가
          </v-btn>
          <v-btn
            id="usraddcancel"
            elevation="2"
            @click="ShowModal_UserAdd = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--설문상세 모달창-->
    <div v-if="ShowSurveyInfo == true" class="modal-black">
      <div class="modal-white">
        <h3>설문상세</h3>

        <div style="border: 1px solid #323232; text-align: left">
          <p>제목 : {{ SurveyData[SurveyDataClick].title }}</p>
          <p>날짜 : {{ SurveyData[SurveyDataClick].date }}</p>
          <p>작성자 : {{ SurveyData[SurveyDataClick].name }}</p>
        </div>
        <div>
          <a :href="SurveyData[SurveyDataClick].url">설문 링크</a>
        </div>
        <div>
          <form>
            <v-radio-group v-model="row" row style="display: inline-block">
              <v-radio label="승인" value="radio-1" @click="value = 0" />
              <v-radio label="거절" value="radio-2" @click="value = 1" />
            </v-radio-group>
            <textarea
              v-if="value == 1"
              name="content"
              style="width: 98%; height: 10%; background: whitesmoke"
              placeholder="사유입력"
            />
          </form>
          <div>
            <v-btn
              id="surveyinfoapply"
              elevation="2"
              @click="
                ShowSurveyInfo = false
                applysuccess = true
                overlay = !overlay
              "
            >
              적용
            </v-btn>
            <v-btn
              id="surveyinfocancel"
              elevation="2"
              @click="ShowSurveyInfo = false"
            >
              닫기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <!--이벤트추가 모달창-->
    <div v-if="ShowEventAdd == true" class="modal-black">
      <div class="modal-white">
        <h3>이벤트 등록</h3>
        <div>
          이벤트 기간
          <input class="date" type="date" />~<input class="date" type="date" />
        </div>
        <div>
          <v-file-input
            truncate-length="15"
            prepend-icon="mdi-camera"
            placeholder="이벤트 배너사진 등록"
          />
        </div>

        <textarea
          name="content"
          style="width: 98%; height: 2rem; background: whitesmoke"
          placeholder="이벤트 제목"
        />
        <textarea
          name="content"
          style="width: 98%; height: 10rem; background: whitesmoke"
          placeholder="이벤트 내용"
        />

        <div>
          <v-btn
            id="eventadd"
            elevation="2"
            @click="
              ShowEventAdd = false
              addsuccess = true
              overlay = !overlay
            "
          >
            등록
          </v-btn>
          <v-btn id="eventcancel" elevation="2" @click="ShowEventAdd = false">
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--공지사항추가 모달창-->
    <div v-if="ShowNoticeAdd == true" class="modal-black">
      <div class="modal-white">
        <h3>공지사항 등록</h3>

        <v-textarea
          filled
          auto-grow
          label="공지사항 제목"
          rows="2"
          row-height="20"
        />

        <v-textarea
          clearable
          clear-icon="mdi-close-circle"
          label="공지사항 내용"
        />
        <div>
          <v-btn
            id="noticeadd"
            elevation="2"
            @click="
              ShowNoticeAdd = false
              addsuccess = true
              overlay = !overlay
            "
          >
            등록
          </v-btn>
          <v-btn id="noticecancel" elevation="2" @click="ShowNoticeAdd = false">
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--FAQ추가 모달창-->
    <div v-if="ShowFAQAdd == true" class="modal-black">
      <div class="modal-white">
        <h3>FAQ 추가</h3>
        <div>
          <v-textarea
            filled
            auto-grow
            label="FAQ 제목"
            rows="2"
            row-height="20"
          />

          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="FAQ 내용"
          />
        </div>

        <div>
          <v-btn
            id="faqadd"
            elevation="2"
            @click="
              addsuccess = true
              ShowFAQAdd = false
              overlay = !overlay
            "
          >
            등록
          </v-btn>
          <v-btn id="faqcancel" elevation="2" @click="ShowFAQAdd = false">
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--Q&A추가 모달창-->
    <div v-if="ShowQAAdd == true" class="modal-black">
      <div class="modal-white">
        <h3>Q&A 추가</h3>

        <v-textarea
          filled
          auto-grow
          label="Q&A 제목"
          rows="2"
          row-height="20"
        />

        <v-textarea clearable clear-icon="mdi-close-circle" label="Q&A 내용" />
        <div>
          <v-btn
            id="qaadd"
            elevation="2"
            @click="
              addsuccess = true
              overlay = !overlay
              ShowQAAdd = false
            "
          >
            등록
          </v-btn>
          <v-btn id="qacancel" elevation="2" @click="ShowQAAdd = false">
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--등급조정 모달창-->
    <div v-if="ShowGradeSetting == true" class="modal-black">
      <div class="modal-white">
        <h3>회원등급조절</h3>

        <v-select :items="items" filled />

        <div>
          <v-btn
            id="gradeapply"
            elevation="2"
            @click="
              applysuccess = true
              ShowGradeSetting = false
              overlay = !overlay
            "
          >
            적용
          </v-btn>
          <v-btn
            id="gradecancel"
            elevation="2"
            @click="ShowGradeSetting = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--포인트조정 모달창-->
    <div v-if="ShowPointSetting == true" class="modal-black">
      <div class="modal-white">
        <h3>포인트조정</h3>
        현재 포인트: 9999포인트
        <v-textarea
          filled
          auto-grow
          label="부여할 포인트"
          rows="2"
          row-height="20"
        />

        <v-textarea filled clear-icon="mdi-close-circle" label="부여 내용" />
        <div>
          <v-btn
            id="pointapply"
            elevation="2"
            @click="
              applysuccess = true
              ShowPointSetting = false
              overlay = !overlay
            "
          >
            적용
          </v-btn>
          <v-btn
            id="pointcancel"
            elevation="2"
            @click="ShowPointSetting = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--유저정보수정 모달창-->
    <div v-if="ShowUserModify == true" class="modal-black">
      <div class="modal-white">
        <h3>정보수정</h3>
        <v-textarea
          :label="UserData[UserNum].UserName"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        />
        <v-textarea
          :label="UserData[UserNum].Email"
          auto-grow
          outlined
          rows="1"
          row-height="15"
        />
        <v-select
          solo
          :label="UserData[UserNum].UserType"
          :items="typelist"
          filled
          auto-grow
        />

        <input class="date" type="date" />
        <div>
          <v-btn
            id="modifyapply"
            elevation="2"
            @click="
              applysuccess = true
              ShowUserModify = false
              overlay = !overlay
            "
          >
            적용
          </v-btn>
          <v-btn
            id="modifycancel"
            elevation="2"
            @click="ShowUserModify = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
    <!--필터 모달창-->

    <div v-if="ShowModal_Filter == true" class="modal-black">
      <div class="modal-white">
        <h4>필터</h4>
        <div>
          <input type="checkbox" name="fruits" value="orange" />인증회원
          <input type="checkbox" name="fruits" value="orange" />공인회원
          <input type="checkbox" name="fruits" value="orange" />정지회원
        </div>

        <div>
          <v-btn
            class="filterapply"
            elevation="2"
            @click="
              ShowModal_Filter = false
              applysuccess = true
              overlay = !overlay
            "
          >
            적용
          </v-btn>

          <v-btn
            id="filtercancel"
            elevation="2"
            @click="ShowModal_Filter = false"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>

    <v-tabs fixed-tabs style="padding-top: 50px">
      <!-- 상단 탭-->
      <v-tab
        @click="
          TopTab1 = true
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        대시보드
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = true
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        회원관리
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = true
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        설문관리
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = true
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        이벤트
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = true
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        스토어
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = true
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        보상관리
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = true
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        리포트
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = true
          TopTab9 = false
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        공지사항
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = true
          TopTab10 = false
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        FAQ
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = true
          TopTab11 = false
          ShowUserInfo = false
        "
      >
        Q&A
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          TopTab5 = false
          TopTab6 = false
          TopTab7 = false
          TopTab8 = false
          TopTab9 = false
          TopTab10 = false
          TopTab11 = true
          ShowUserInfo = false
        "
      >
        문의게시판
      </v-tab>
    </v-tabs>
    <div style="display: flex; justify-content: center">
      <v-alert
        v-if="applysuccess == true"
        style="position: absolute; z-index: 3; width: 300px"
        class="applysuccess"
        type="success"
        :value="overlay"
      >
        적용완료
        <v-btn style="float: right" x-small @click="applysuccess = false">
          X
        </v-btn>
      </v-alert>
    </div>
    <div style="display: flex; justify-content: center">
      <v-alert
        v-if="addsuccess == true"
        style="position: absolute; z-index: 3; width: 300px"
        class="addsuccess"
        type="success"
        :value="overlay"
      >
        추가완료
        <v-btn style="float: right" x-small @click="addsuccess = false">
          X
        </v-btn>
      </v-alert>
    </div>

    <!-- 대시보드-->
    <div style="z-index: 3">
      <div v-if="TopTab1 == true">
        <h2>대시보드</h2>
        <v-btn
          @click="
            showchart1 = true
            showchart2 = false
            showchart3 = false
            showchart4 = false
          "
          class="dashbtn"
          color="#1087f4"
          x-large
          :key="a"
        >
          유저<br />
          all: {{ UserchartData[4][3] }}<br />
          new:
          {{
            UserchartData[1][1] +
            UserchartData[2][1] +
            UserchartData[3][1] +
            UserchartData[4][1]
          }}</v-btn
        >
        <v-btn
          @click="
            showchart1 = false
            showchart2 = true
            showchart3 = false
            showchart4 = false
          "
          class="dashbtn"
          color="#1087f4"
          x-large
          >설문등록<br />
          all: {{ SurvayregData[4][3] }}<br />
          new:
          {{
            SurvayregData[1][1] +
            SurvayregData[2][1] +
            SurvayregData[3][1] +
            SurvayregData[4][1]
          }}</v-btn
        >
        <v-btn
          @click="
            showchart1 = false
            showchart2 = false
            showchart3 = true
            showchart4 = false
          "
          class="dashbtn"
          color="#1087f4"
          x-large
          >설문참여<br />
          all: {{ SurvaypartData[4][3] }}<br />
          new:
          {{
            SurvaypartData[1][1] +
            SurvaypartData[2][1] +
            SurvaypartData[3][1] +
            SurvaypartData[4][1]
          }}</v-btn
        >
        <v-btn
          @click="
            showchart1 = false
            showchart2 = false
            showchart3 = false
            showchart4 = true
          "
          class="dashbtn"
          color="#1087f4"
          x-large
          >방문자수<br />

          new:
          {{
            UserComeData[1][1] +
            UserComeData[2][1] +
            UserComeData[3][1] +
            UserComeData[4][1]
          }}</v-btn
        >

        <div style="float: left">
          <v-date-picker
            v-model="dates"
            color="#1087f4"
            range
            locale="ko-KR"
            width="400"
          />
        </div>
        <div v-if="showchart1 == true" style="float: left; width: 70%">
          <GChart
            type="LineChart"
            :data="UserchartData"
            :options="chartOptions"
          />
        </div>
        <div v-if="showchart2 == true" style="float: left; width: 70%">
          <GChart
            type="LineChart"
            :data="SurvayregData"
            :options="chartOptions"
          />
        </div>
        <div v-if="showchart3 == true" style="float: left; width: 70%">
          <GChart
            type="LineChart"
            :data="SurvaypartData"
            :options="chartOptions"
          />
        </div>
        <div v-if="showchart4 == true" style="float: left; width: 70%">
          <GChart
            type="LineChart"
            :data="UserComeData"
            :options="chartOptions"
          />
        </div>
      </div>
      <!-- 유저목록-->
      <div v-if="TopTab2 == true">
        <div style="width: 20rem">
          <h2>회원관리</h2>
          <div>
            <input
              type="text"
              placeholder="검색어 입력"
              style="
                background: #001111;
                width: 10rem;
                border: 1px solid gray;
                border-radius: 4px;
              "
            />
            <v-btn elevation="2" x-small> 검색 </v-btn>
            <v-btn
              class="modalbtn"
              elevation="2"
              x-small
              @click="ShowModal_Filter = true"
            >
              필터
            </v-btn>
            <v-btn
              class="modalbtn"
              elevation="2"
              x-small
              @click="ShowModal_UserAdd = true"
            >
              +
            </v-btn>
          </div>
        </div>
        <v-banner outlined class="Tab2_Sidebar">
          <div>
            <div
              v-for="(a, i) in UserData"
              :key="a"
              class="UserInfo"
              @click="ShowUserInfo = true"
            >
              <v-btn style="text-align: left" color="#1087f4" block large>
                <dl @click="UserNum = i">
                  <dd>{{ UserData[i].UserName }}</dd>
                  <dd>{{ UserData[i].Email }}</dd>
                </dl>
              </v-btn>
            </div>
          </div>
        </v-banner>
        <!-- 유저상세정보-->
        <div v-if="ShowUserInfo == true" style="float: left; width: 80%">
          <v-card outlined shaped style="margin: 1%; padding: 1%">
            <v-btn
              style="float: right"
              elevation="2"
              small
              @click="ShowUserModify = true"
            >
              ℹ
            </v-btn>
            <!-- 이름 -->
            <div>
              <img
                src="../../assets/premium-icon-person-2815428.png"
                class="iconsize"
                style="vertical-align: top"
              />
              <p style="display: inline-block">
                Name
                <br />
                {{ UserData[UserNum].UserName }}
              </p>
            </div>
            <!-- 이메일 -->
            <div>
              <img
                src="../../assets/premium-icon-open-mail-2468421.png"
                class="iconsize"
                style="vertical-align: top"
              />
              <p style="display: inline-block">
                Email
                <br />
                {{ UserData[UserNum].Email }}
              </p>
            </div>
            <!-- 유저타입 -->
            <div>
              <img
                src="../../assets/premium-icon-login-3682245.png"
                class="iconsize"
                style="vertical-align: top"
              />
              <p style="display: inline-block">
                Type
                <br />
                {{ UserData[UserNum].UserType }}
              </p>
            </div>
            <!-- 가입날짜 -->
            <div>
              <img
                src="../../assets/premium-icon-calendar-4511116.png"
                class="iconsize"
                style="vertical-align: top"
              />
              <p style="display: inline-block">
                Date
                <br />
                {{ UserData[UserNum].RegisterDate }}
              </p>
            </div>
          </v-card>
          <div>
            <v-tabs color="#1087f4" fixed-tabs>
              <v-tab
                @click="
                  ShowUnivCertify = true
                  ShowHistory = false
                  ShowAgreeOrNot = false
                  ShowUserTitle = false
                  ShowUserGrade = false
                  ShowUserPoint = false
                  ShowUserProduct = false
                "
              >
                인증정보
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = true
                  ShowAgreeOrNot = false
                  ShowUserTitle = false
                  ShowUserGrade = false
                  ShowUserPoint = false
                  ShowUserProduct = false
                "
              >
                설문 참여이력
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = true
                  ShowUserTitle = false
                  ShowUserGrade = false
                  ShowUserPoint = false
                  ShowUserProduct = false
                "
              >
                동의 여부
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = false
                  ShowUserTitle = true
                  ShowUserGrade = false
                  ShowUserPoint = false
                  ShowUserProduct = false
                "
              >
                칭호관리
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = false
                  ShowUserTitle = false
                  ShowUserGrade = true
                  ShowUserPoint = false
                  ShowUserProduct = false
                "
              >
                등급관리
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = false
                  ShowUserTitle = false
                  ShowUserGrade = false
                  ShowUserPoint = true
                  ShowUserProduct = false
                "
              >
                포인트관리
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = false
                  ShowUserTitle = false
                  ShowUserGrade = false
                  ShowUserPoint = false
                  ShowUserProduct = true
                "
              >
                상품관리
              </v-tab>
            </v-tabs>
          </div>
          <div v-if="ShowUnivCertify == true">
            <h2>대학교 인증</h2>
            <div>
              <div style="float: left; font-size: larger">
                {{ UserData[UserNum].UnivCert }}
              </div>
              <div style="float: right; font-size: larger">
                {{ UserData[UserNum].UnivCertDate }}
              </div>
            </div>
          </div>
          <div v-if="ShowHistory == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th class="text-left">참여설문</th>
                    <th class="text-left">참여날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in UserData[UserNum].SurveyRecord" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td>{{ UserData[UserNum].SurveyRecord[i] }}</td>
                    <td>{{ UserData[UserNum].SurveyRecordDate[i] }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <div v-if="ShowAgreeOrNot == true">
            <h2>동의 여부</h2>
            <div>
              <div style="float: left; font-size: larger">
                {{ UserData[UserNum].TermAgree }}
              </div>
            </div>
          </div>

          <div v-if="ShowUserGrade == true">
            <h2>등급관리</h2>
            <div>
              <div style="float: left; font-size: larger">
                현재회원등급 : {{ UserData[UserNum].UserGrade }}
              </div>
            </div>
            <v-btn elevation="2" x-small @click="ShowGradeSetting = true">
              회원등급조절
            </v-btn>
          </div>
          <div v-if="ShowUserPoint == true">
            <div style="font-size: larger">현재포인트 : 9999포인트</div>
            <v-btn elevation="2" x-small @click="ShowPointSetting = true">
              포인트조정
            </v-btn>
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="width: 3%">번호</th>
                    <th style="text-align: center">상품 획득사유</th>
                    <th class="text-left">획득날짜</th>
                    <th class="text-left">내역</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in UserData[UserNum].UserPoint" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td style="text-align: center">
                      {{ UserData[UserNum].UserPoint[i][0] }}
                    </td>
                    <td>{{ UserData[UserNum].UserPoint[i][1] }}</td>
                    <td>{{ UserData[UserNum].UserPoint[i][2] }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <!--상품관리탭-->
          <div v-if="ShowUserProduct == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th style="text-align: center">포인트 획득사유</th>
                    <th class="text-left">획득날짜</th>
                    <th class="text-left">내역</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in UserData[UserNum].UserProduct" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td style="text-align: center">
                      {{ UserData[UserNum].UserProduct[i][0] }}
                    </td>
                    <td>{{ UserData[UserNum].UserProduct[i][1] }}</td>
                    <td>{{ UserData[UserNum].UserProduct[i][2] }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <div v-if="ShowUserTitle == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th class="text-left">칭호이름</th>
                    <th class="text-left">획득날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in QaData" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td>
                      {{ QaData[i].title }}
                    </td>
                    <td>
                      {{ QaData[i].date }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </div>
      <!-- 설문관리-->
      <div v-if="TopTab3 == true">
        <h2>설문관리</h2>
        <v-btn
          style="margin: 5px"
          small
          elevation="2"
          @click="
            ShowOngoingSurvay = false
            ShowReviewSurvay = true
            ShowEndedSurvay = false
            ShowAllSurvay = false
          "
        >
          심사 중인 설문
        </v-btn>
        <v-btn
          style="margin: 5px"
          small
          elevation="2"
          @click="
            ShowOngoingSurvay = true
            ShowReviewSurvay = false
            ShowEndedSurvay = false
            ShowAllSurvay = false
          "
        >
          설문 중인 설문
        </v-btn>
        <v-btn
          style="margin: 5px"
          small
          elevation="2"
          @click="
            ShowOngoingSurvay = false
            ShowReviewSurvay = false
            ShowEndedSurvay = true
            ShowAllSurvay = false
          "
        >
          종료된 설문
        </v-btn>
        <v-btn
          style="margin: 5px"
          small
          elevation="2"
          @click="
            ShowOngoingSurvay = false
            ShowReviewSurvay = false
            ShowEndedSurvay = false
            ShowAllSurvay = true
          "
        >
          모든 설문
        </v-btn>
        <!--모든 설문-->
        <v-simple-table v-if="ShowAllSurvay == true">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">작성자</th>
                <th class="text-left">작성일</th>
                <th class="text-left">설문조사기간</th>
                <th class="text-left">현재 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in SurveyData" :key="a">
                <td style="text-align: center">
                  {{ i + 1 }}
                </td>
                <td>
                  <a :href="SurveyData[i].url" style="text-decoration: none">{{
                    SurveyData[i].title
                  }}</a>
                </td>
                <td>{{ SurveyData[i].name }}</td>
                <td>{{ SurveyData[i].date }}</td>
                <td>{{ SurveyData[i].period }}</td>
                <td>{{ SurveyData[i].type }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--심사 중인 설문-->
        <v-simple-table v-if="ShowReviewSurvay == true">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">작성자</th>
                <th class="text-left">작성일</th>
                <th class="text-left">설문조사기간</th>
                <th class="text-left">현재 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in SurveyData" :key="a">
                <td
                  v-if="SurveyData[i].type == '심사중'"
                  style="text-align: center"
                >
                  {{ i + 1 }}
                </td>
                <td v-if="SurveyData[i].type == '심사중'">
                  <a :href="SurveyData[i].url" style="text-decoration: none">{{
                    SurveyData[i].title
                  }}</a>
                </td>
                <td v-if="SurveyData[i].type == '심사중'">
                  {{ SurveyData[i].name }}
                </td>
                <td v-if="SurveyData[i].type == '심사중'">
                  {{ SurveyData[i].date }}
                </td>
                <td v-if="SurveyData[i].type == '심사중'">
                  {{ SurveyData[i].period }}
                </td>
                <td v-if="SurveyData[i].type == '심사중'">
                  {{ SurveyData[i].type }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--설문 중인 설문-->
        <v-simple-table v-if="ShowOngoingSurvay == true">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">작성자</th>
                <th class="text-left">작성일</th>
                <th class="text-left">설문조사기간</th>
                <th class="text-left">현재 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in SurveyData" :key="a">
                <td
                  v-if="SurveyData[i].type == '설문중'"
                  style="text-align: center"
                >
                  {{ i + 1 }}
                </td>
                <td v-if="SurveyData[i].type == '설문중'">
                  <a :href="SurveyData[i].url" style="text-decoration: none">{{
                    SurveyData[i].title
                  }}</a>
                </td>
                <td v-if="SurveyData[i].type == '설문중'">
                  {{ SurveyData[i].name }}
                </td>
                <td v-if="SurveyData[i].type == '설문중'">
                  {{ SurveyData[i].date }}
                </td>
                <td v-if="SurveyData[i].type == '설문중'">
                  {{ SurveyData[i].period }}
                </td>
                <td v-if="SurveyData[i].type == '설문중'">
                  {{ SurveyData[i].type }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <!--종료된 설문-->
        <v-simple-table v-if="ShowEndedSurvay == true">
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">작성자</th>
                <th class="text-left">작성일</th>
                <th class="text-left">설문조사기간</th>
                <th class="text-left">현재 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in SurveyData" :key="a">
                <td
                  v-if="SurveyData[i].type == '종료'"
                  style="text-align: center"
                >
                  {{ i + 1 }}
                </td>
                <td v-if="SurveyData[i].type == '종료'">
                  <a :href="SurveyData[i].url" style="text-decoration: none">{{
                    SurveyData[i].title
                  }}</a>
                </td>
                <td v-if="SurveyData[i].type == '종료'">
                  {{ SurveyData[i].name }}
                </td>
                <td v-if="SurveyData[i].type == '종료'">
                  {{ SurveyData[i].date }}
                </td>
                <td v-if="SurveyData[i].type == '종료'">
                  {{ SurveyData[i].period }}
                </td>
                <td v-if="SurveyData[i].type == '종료'">
                  {{ SurveyData[i].type }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!-- 이벤트-->
      <div v-if="TopTab4 == true">
        <h2>이벤트</h2>
        <div>
          <v-btn
            style="margin: 5px"
            small
            elevation="2"
            @click="
              ShowOngoingEvent = true
              ShowPlannedEvent = false
              ShowEndedEvent = false
            "
          >
            진행 중인 이벤트
          </v-btn>
          <v-btn
            style="margin: 5px"
            small
            elevation="2"
            @click="
              ShowOngoingEvent = false
              ShowPlannedEvent = true
              ShowEndedEvent = false
            "
          >
            진행 예정 이벤트
          </v-btn>
          <v-btn
            style="margin: 5px"
            small
            elevation="2"
            @click="
              ShowOngoingEvent = false
              ShowPlannedEvent = false
              ShowEndedEvent = true
            "
          >
            지난 이벤트
          </v-btn>
        </div>
        <div>
          <v-btn elevation="2" @click="ShowEventAdd = true">
            이벤트 등록
          </v-btn>
          <!-- 진행 이벤트-->
          <div v-if="ShowOngoingEvent == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th class="text-left">제목</th>
                    <th class="text-left">작성자</th>
                    <th class="text-left">날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in OngoingEvent" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td>
                      <a
                        :href="OngoingEvent[i].url"
                        style="text-decoration: none"
                        >{{ OngoingEvent[i].title }}</a
                      >
                    </td>
                    <td>{{ OngoingEvent[i].name }}</td>
                    <td>{{ OngoingEvent[i].date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
          <!-- 예정 이벤트-->
          <div v-if="ShowPlannedEvent == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th class="text-left">제목</th>
                    <th class="text-left">작성자</th>
                    <th class="text-left">날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in PlannedEvent" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td>
                      <a
                        :href="PlannedEvent[i].url"
                        style="text-decoration: none"
                        >{{ PlannedEvent[i].title }}</a
                      >
                    </td>
                    <td>{{ PlannedEvent[i].name }}</td>
                    <td>{{ PlannedEvent[i].date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
          <!-- 지난 이벤트-->
          <div v-if="ShowEndedEvent == true">
            <v-simple-table>
              <template #default>
                <thead>
                  <tr>
                    <th style="text-align: center">번호</th>
                    <th class="text-left">제목</th>
                    <th class="text-left">이름</th>
                    <th class="text-left">날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(a, i) in EndedEvent" :key="a">
                    <td style="text-align: center">
                      {{ i + 1 }}
                    </td>
                    <td>
                      <a
                        :href="EndedEvent[i].url"
                        style="text-decoration: none"
                        >{{ EndedEvent[i].title }}</a
                      >
                    </td>
                    <td>{{ EndedEvent[i].name }}</td>
                    <td>{{ EndedEvent[i].date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
        </div>
      </div>
      <!-- 스토어-->
      <div v-if="TobTab5 == true"></div>
      <!-- 보상관리-->
      <div v-if="TobTab6 == true"></div>
      <!-- 리포트-->
      <div v-if="TobTab7 == true"></div>

      <!-- 공지사항-->
      <div v-if="TopTab8 == true">
        <h2>공지사항</h2>
        <v-btn
          elevation="2"
          style="margin-bottom: 1%"
          @click="ShowNoticeAdd = true"
        >
          공지사항 등록
        </v-btn>

        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">이름</th>
                <th class="text-left">날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in data" :key="a">
                <td style="text-align: center">
                  {{ i + 1 }}
                </td>
                <td>
                  <a :href="data[i].url" style="text-decoration: none">{{
                    data[i].title
                  }}</a>
                </td>
                <td>{{ data[i].name }}</td>
                <td>{{ data[i].date }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!--FAQ-->
      <div v-if="TopTab9 == true">
        <h2>FAQ</h2>
        <v-btn
          elevation="2"
          style="margin-bottom: 1%"
          @click="ShowFAQAdd = true"
        >
          FAQ 추가
        </v-btn>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">이름</th>
                <th class="text-left">날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in data" :key="a">
                <td style="text-align: center">
                  {{ i + 1 }}
                </td>
                <td>
                  <a :href="FaqData[i].url" style="text-decoration: none">
                    {{ FaqData[i].title }}
                  </a>
                </td>
                <td>{{ FaqData[i].name }}</td>
                <td>{{ FaqData[i].date }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!--Q&A-->
      <div v-if="TopTab10 == true">
        <h2>Q&A</h2>
        <v-btn
          elevation="2"
          style="margin-bottom: 1%"
          @click="ShowQAAdd = true"
        >
          Q&A 추가
        </v-btn>

        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">이름</th>
                <th class="text-left">날짜</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(a, i) in data" :key="a">
                <td style="text-align: center">
                  {{ i + 1 }}
                </td>
                <td>
                  <a :href="QaData[i].url" style="text-decoration: none">
                    {{ QaData[i].title }}
                  </a>
                </td>
                <td>
                  {{ QaData[i].name }}
                </td>
                <td>
                  {{ QaData[i].date }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
      <!--문의게시판-->
      <div v-if="TopTab11 == true">
        <h2>문의게시판1</h2>
        <v-simple-table>
          <template #default>
            <thead>
              <tr>
                <th style="text-align: center">번호</th>
                <th class="text-left">제목</th>
                <th class="text-left">이름</th>
                <th class="text-left">날짜</th>
                <th class="text-left">답변여부</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(a, i) in data"
                :key="a"
                @click="
                  ShowModal_Inquiry = true
                  inquirynum = i
                "
              >
                <td style="text-align: center">
                  {{ i + 1 }}
                </td>
                <td>
                  {{ InquiryData[i].question }}
                </td>
                <td>{{ InquiryData[i].name }}</td>
                <td>{{ InquiryData[i].date }}</td>
                <td>{{ InquiryData[i].check }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import data from '../../assets/data/NoticeData.js'
import FaqData from '../../assets/data/FAQdata'
import InquiryData from '../../assets/data/Inquirydata'
import UserData from '../../assets/data/UserData'
import SurveyData from '../../assets/data/SurveyData'
import QnAdata from 'assets/data/QnAdata'
import EndedEvent from '../../assets/data/EndedEvent'
import OngoingEvent from '../../assets/data/OngoingEvent'
import PlannedEvent from '../../assets/data/PlannedEvent'

export default {
  name: 'Index',
  components: {
    GChart,
  },
  layout: 'admin',

  data() {
    return {
      ShowAllSurvay: true,
      ShowOngoingSurvay: false,
      ShowReviewSurvay: false,
      ShowEndedSurvay: false,
      ShowModal_Inquiry: false,
      EndedEvent,
      OngoingEvent,
      PlannedEvent,
      page: 1,
      ShowOngoingEvent: false,
      ShowEndedEvent: false,
      ShowPlannedEvent: false,
      TopTab1: true,
      TopTab2: false,
      TopTab3: false,
      TopTab4: false,
      TopTab5: false,
      TopTab6: false,
      TopTab7: false,
      TopTab8: false,
      UserchartData: [
        ['유저가입날짜', '신규가입 유저', '기존유저', '총 유저'],
        ['22.04.09', 1000, 322, 1000 + 322],
        ['22.04.10', 150, 1000 + 322, 1000 + 322 + 150],
        ['22.04.11', 660, 1000 + 322 + 150, 1000 + 322 + 150 + 660],
        [
          '22.04.12',
          1030,
          1000 + 322 + 150 + 660,
          1030 + 1000 + 322 + 150 + 660,
        ],
      ],
      SurvayregData: [
        ['설문등록날짜', '기존설문', '신규등록설문', '총 설문'],
        ['22.04.09', 0, 12, 0 + 12],
        ['22.04.10', 12, 5, 12 + 5],
        ['22.04.11', 17, 15, 17 + 15],
        ['22.04.12', 32, 9, 32 + 9],
      ],
      SurvaypartData: [
        ['설문등록날짜', '기존참여유저', '신규참여유저', '총 참여유저'],
        ['22.04.09', 0, 22, 0 + 22],
        ['22.04.10', 22, 21, 22 + 21],
        ['22.04.11', 43, 10, 43 + 10],
        ['22.04.12', 53, 25, 53 + 25],
      ],
      UserComeData: [
        ['방문날짜', '기존 유저', '재방문유저'],
        ['22.04.09', 1000 + 322, 322],
        ['22.04.10', 1000 + 322 + 150, 460],
        ['22.04.11', 1000 + 322 + 150 + 660, 1120],
        ['22.04.12', 1030 + 1000 + 322 + 150 + 660, 540],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      },
      TopTab9: false,
      TopTab10: false,
      TopTab11: false,
      items: ['A+', 'A', 'B', 'C', 'D'],
      typelist: ['구글로그인', '페이스북로그인', '일반로그인', '네이버로그인'],
      data,
      FaqData,
      QaData: QnAdata,
      InquiryData,
      UserData,
      SurveyData,
      value: 0, // option값 선택
      SurveyDataClick: 0, // surveydata 검색변수
      applysuccess: false,
      addsuccess: false,
      ShowModal_Filter: false,
      ShowModal_Create: false,
      ShowModal_UserAdd: false,
      ShowUserInfo: false,
      ShowUnivCertify: true,
      ShowHistory: false,
      ShowAgreeOrNot: false,
      ShowSurveyInfo: false,
      ShowEventAdd: false,
      ShowNoticeAdd: false,
      ShowFAQAdd: false,
      ShowQAAdd: false,
      ShowUserTitle: false,
      ShowUserGrade: false,
      ShowUserPoint: false,
      ShowUserProduct: false,
      ShowTitleadd: false,
      ShowGradeSetting: false,
      ShowPointSetting: false,
      ShowUserModify: false,
      showchart1: false,
      showchart2: false,
      showchart3: false,
      showchart4: false,
      UserNum: 0, // 사용자데이터 검색변수
      inquirynum: 0, //문의게시판 검색변수
      dates: [],
      overlay: false, // 적용 알림창 시간변수
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
.dashbtn {
  margin: 20px;
  color: white;
}
.iconsize {
  width: 50px;
  height: 50px;
}
.iconsize2 {
  width: 25px;
  height: 25px;
}
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
.date {
  background-color: gray;
  border-radius: 5px;
}
.icondiv {
  background: #323232;
  margin: 2%;
  padding-top: 1%;
  width: 20%;
  float: left;
  text-align: center;
  font-size: larger;
  border-radius: 5px;
}
.Tab2_Sidebar {
  float: left;
  height: 25rem;
  overflow: auto;
  width: 20rem;
}
.UserInfo {
  margin: 2%;
}
.UserInfo2 {
  border: 1px solid #e1e1e1;
  margin: 1%;
  border-radius: 5px;
}
</style>
