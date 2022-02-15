<template>
  <div>
    <v-tabs>
      <!-- 상단 탭-->
      <v-tab
        @click="
          TopTab1 = true
          TopTab2 = false
          TopTab3 = false
          TopTab4 = false
          ShowUserInfo = false
        "
        >대시보드
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = true
          TopTab3 = false
          TopTab4 = false
          ShowUserInfo = false
        "
        >회원관리
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = true
          TopTab4 = false
          ShowUserInfo = false
        "
        >설문관리
      </v-tab>
      <v-tab
        @click="
          TopTab1 = false
          TopTab2 = false
          TopTab3 = false
          TopTab4 = true
          ShowUserInfo = false
        "
        >이벤트</v-tab
      >
      <v-tab>공지사항</v-tab>
      <v-tab>Q&A</v-tab>
      <v-tab>문의게시판</v-tab>
      <v-tab>칭호관리</v-tab>
      <v-tab>등급관리</v-tab>
      <v-tab>포인트관리</v-tab>
      <v-tab>상품관리</v-tab>
    </v-tabs>
    <!--필터 모달창-->
    <div class="modal-black" v-if="ShowModal_Filter == true">
      <div class="modal-white">
        <h4>필터</h4>
        <div>
          <input type="checkbox" name="fruits" value="orange" />인증회원
          <input type="checkbox" name="fruits" value="orange" />공인회원
          <input type="checkbox" name="fruits" value="orange" />정지회원
        </div>

        <div>
          <v-btn @click="ShowModal_Filter = false" elevation="2">적용</v-btn>
          <v-btn @click="ShowModal_Filter = false" elevation="2">닫기</v-btn>
        </div>
      </div>
    </div>
    <!--추가 모달창-->
    <div class="modal-black" v-if="ShowModal_Create == true">
      <div class="modal-white">
        <div>
          <label>회원정보</label>
          <div>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Example@gmail.com"
            />
          </div>
        </div>

        <div class="col-12">
          <input
            type="text"
            class="form-control"
            id="address2"
            placeholder="추가정보"
          />
        </div>

        <v-btn @click="ShowModal_Create = false" elevation="2">닫기</v-btn>

        <div>
          <v-btn
            style="float: right"
            @click="ShowModal_UserAdd = true"
            elevation="2"
            x-small
          >
            유저추가
          </v-btn>
        </div>
      </div>
    </div>
    <!--유저추가 모달창-->
    <div class="modal-black" v-if="ShowModal_UserAdd == true">
      <div class="modal-white">
        <h4>회원 추가</h4>
        <div>
          <div>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Example@gmail.com"
            />
          </div>
          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="추가정보"
            />
          </div>
        </div>

        <div>
          <v-btn @click="ShowModal_UserAdd = false" elevation="2">추가</v-btn>
          <v-btn @click="ShowModal_UserAdd = false" elevation="2">닫기</v-btn>
        </div>
      </div>
    </div>
    <!--설문상세 모달창-->
    <div class="modal-black" v-if="ShowSurveyInfo == true">
      <div class="modal-white">
        <h3>설문상세</h3>

        <div style="border: 1px solid #323232; text-align: left">
          <p>제목 : MBTI별 음식 성향</p>
          <p>생성일 : 0000. 00. 00.</p>
          <p>작성자 : -작성자 이름-</p>
          태그: #-- #-- #--
        </div>
        <div>
          <a href="#">설문 링크</a>
        </div>
        <div>
          <form>
            <select name="language">
              <option value="none" selected disabled>=== 선택 ===</option>
              <option value="approve">승인</option>
              <option value="decline">거절</option>
            </select>
            <textarea
              name="content"
              style="width: 98%; height: 10%; background: whitesmoke"
              placeholder="사유입력"
              v-if="value == decline"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
    <!--이벤트추가 모달창-->
    <div class="modal-black" v-if="ShowEventAdd == true">
      <div class="modal-white">
        <h3>이벤트 등록</h3>
        <div>
          이벤트 기간
          <input class="date" type="date" />~<input class="date" type="date" />
        </div>
        <v-btn elevation="2" style="margin: 1%">이벤트 배너 사진등록</v-btn>
        <textarea
          name="content"
          style="width: 98%; height: 2rem; background: whitesmoke"
          placeholder="이벤트 제목"
          v-if="value == decline"
        ></textarea>
        <textarea
          name="content"
          style="width: 98%; height: 10rem; background: whitesmoke"
          placeholder="이벤트 내용"
          v-if="value == decline"
        ></textarea>

        <div>
          <v-btn @click="ShowEventAdd = false" elevation="2">등록</v-btn>
          <v-btn @click="ShowEventAdd = false" elevation="2">닫기</v-btn>
        </div>
      </div>
    </div>
    <!-- 대시보드-->
    <div style="z-index: 3">
      <div v-if="TopTab1 == true">
        <h2>대시보드</h2>
        기간설정
        <input class="date" type="date" />~<input class="date" type="date" />
        <div>
          <div class="icondiv">
            <img src="../assets/free-icon-briefcase-3916670.png" />
            <p>새로운 유저 +100</p>
          </div>
          <div class="icondiv">
            <img src="../assets/free-icon-heart-3916579.png" />
            <p>새로운 유저 +100</p>
          </div>
          <div class="icondiv">
            <img src="../assets/free-icon-shopping-bag-add-.png" />
            <p>새로운 유저 +100</p>
          </div>
          <div class="icondiv">
            <img src="../assets/chess-clock-6627624.png" />
            <p>새로운 유저 +100</p>
          </div>
        </div>
      </div>
      <!-- 유저목록-->
      <div v-if="TopTab2 == true">
        <div class="Tab2_Sidebar">
          <div>
            <h2>회원관리</h2>
            <div>
              <input
                type="text"
                placeholder="검색어 입력"
                style="
                  background: #001111;
                  width: 70%;
                  border: 1px solid gray;
                  border-radius: 4px;
                "
              />
              <v-btn elevation="2" x-small> 검색 </v-btn>
            </div>
            <v-btn
              class="modalbtn"
              @click="ShowModal_Filter = true"
              elevation="2"
              x-small
            >
              필터
            </v-btn>
            <v-btn
              class="modalbtn"
              @click="ShowModal_Create = true"
              elevation="2"
              x-small
            >
              +
            </v-btn>
          </div>
          <div style="padding-top: 3%">--개의 데이터</div>
          <div>
            <div class="UserInfo" @click="ShowUserInfo = true">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo" @click="ShowUserInfo = true">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo" @click="ShowUserInfo = true">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="UserInfo" @click="ShowUserInfo = true">
              <ul>
                <li>-유저이름-</li>
                <li>생성일 : 0000. 00. 00.</li>
                <li>Example@email.com</li>
              </ul>
            </div>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
        </div>
        <!-- 유저상세정보-->
        <div style="float: left; width: 80%" v-if="ShowUserInfo == true">
          <div>
            <select style="float: right; background: gray; border-radius: 5px">
              <option selected>정지처리</option>
              <option>Option1</option>
              <option>Option2</option>
            </select>
            <v-btn style="float: right" elevation="2" small> 탈퇴 </v-btn>
            <h3>-유저이름-</h3>
          </div>
          <div style="padding: 1%">
            <div style="border: 1px solid #323232">
              <h3>일반정보</h3>
              <ul style="font-size: 20pt">
                <li>닉네임 : -유저이름-</li>
                <li>이메일 : Example@email.com</li>
                <li>유저타입 : 구글로그인</li>
                <li>가입일 : 0000. 00. 00.</li>
              </ul>
            </div>
          </div>
          <div>
            <v-tabs fixed-tabs dark>
              <v-tab
                @click="
                  ShowUnivCertify = true
                  ShowHistory = false
                  ShowAgreeOrNot = false
                "
              >
                인증정보
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = true
                  ShowAgreeOrNot = false
                "
              >
                설문 참여이력
              </v-tab>
              <v-tab
                @click="
                  ShowUnivCertify = false
                  ShowHistory = false
                  ShowAgreeOrNot = true
                "
              >
                동의 여부
              </v-tab>
            </v-tabs>
          </div>
          <div v-if="ShowUnivCertify == true">
            <h2>대학교 인증</h2>
            <div>
              <div style="float: left; font-size: larger">상명대학교</div>
              <div style="float: right; font-size: larger">0000. 00. 00.</div>
            </div>
          </div>
          <div v-if="ShowHistory == true">
            <h2>설문 참여이력</h2>
            <div>
              <div style="float: left; font-size: larger">설문A</div>
              <div style="float: right; font-size: larger">0000. 00. 00.</div>
            </div>
          </div>
          <div v-if="ShowAgreeOrNot == true">
            <h2>동의 여부</h2>
            <div>
              <div style="float: left; font-size: larger">
                개인정보처리방침 : 동의
              </div>
              <div style="float: right; font-size: larger">0000. 00. 00.</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 설문관리-->
      <div v-if="TopTab3 == true">
        <div style="padding: 1%">
          <div style="border: 1px solid #323232">
            <h2>설문관리</h2>
            <ul style="font-size: larger">
              <li>심사를 기다리는 설문: --개</li>
              <li>신규작성된 설문: --개</li>
              <li>지금까지 작성된 설문: --개</li>
            </ul>
          </div>
        </div>
        <div style="border: 1px solid #323232; margin-top: 1%">
          심사 대기 중 --개
          <div class="UserInfo">
            <v-btn elevation="2" x-small @click="ShowSurveyInfo = true">
              승인설정
            </v-btn>
            <ul>
              <li>MBTI별 음식 성향</li>
              <li>생성일 : 0000. 00. 00.</li>
              <li>-작성자 이름-</li>
            </ul>
          </div>
          <div class="UserInfo">
            <v-btn elevation="2" x-small @click="ShowSurveyInfo = true">
              승인설정
            </v-btn>
            <ul>
              <li>MBTI별 음식 성향</li>
              <li>생성일 : 0000. 00. 00.</li>
              <li>-작성자 이름-</li>
            </ul>
          </div>
          <div class="UserInfo">
            <v-btn elevation="2" x-small @click="ShowSurveyInfo = true">
              승인설정
            </v-btn>
            <ul>
              <li>MBTI별 음식 성향</li>
              <li>생성일 : 0000. 00. 00.</li>
              <li>-작성자 이름-</li>
            </ul>
          </div>
          <div class="UserInfo">
            <v-btn elevation="2" x-small @click="ShowSurveyInfo = true">
              승인설정
            </v-btn>
            <ul>
              <li>MBTI별 음식 성향</li>
              <li>생성일 : 0000. 00. 00.</li>
              <li>-작성자 이름-</li>
            </ul>
          </div>
        </div>
        <footer>
          <div class="text-center">
            <v-pagination v-model="page" :length="6"></v-pagination>
          </div>
        </footer>
      </div>
      <!-- 이벤트-->
      <div v-if="TopTab4 == true">
        <h2>이벤트</h2>
        <div>
          <input type="checkbox" name="fruits" value="orange" />진행중인 이벤트
          <input type="checkbox" name="fruits" value="orange" />지난 이벤트
        </div>
        <div>
          <v-btn elevation="2" @click="ShowEventAdd = true">
            이벤트 등록
          </v-btn>
          <div style="height: 10%">
            <img
              src="../assets/99A04B475BC982642A.jpg"
              style="width: 100%; height: 11rem; padding: 1%"
            />
            <img
              src="../assets/99A04B475BC982642A.jpg"
              style="width: 100%; height: 11rem; padding: 1%"
            />
            <img
              src="../assets/99A04B475BC982642A.jpg"
              style="width: 100%; height: 11rem; padding: 1%"
            />
          </div>
          <footer>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      TopTab1: false,
      TopTab2: false,
      TopTab3: false,
      TopTab4: false,
      TopTab5: false,
      TopTab6: false,
      TopTab7: false,
      TopTab8: false,
      TopTab9: false,
      TopTab10: false,
      TopTab11: false,
      ShowModal_Filter: false,
      ShowModal_Create: false,
      ShowModal_UserAdd: false,
      ShowUserInfo: false,
      ShowUnivCertify: false,
      ShowHistory: false,
      ShowAgreeOrNot: false,
      ShowSurveyInfo: false,
      ShowEventAdd: false,
    }
  },
}
</script>

<style>
.modal-black {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
  text-align: center;
  z-index: 2;
}
.modal-white {
  width: 30%;
  border-radius: 8px;
  background: gray;
  padding: 1%;
  display: inline-block;
  z-index: 1;
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
  border: 1px solid #323232;
  width: 20%;
  float: left;
}
.UserInfo {
  border: 1px solid #323232;
  margin: 1%;
  border-radius: 5px;
}
</style>
