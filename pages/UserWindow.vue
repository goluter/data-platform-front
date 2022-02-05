<template>
  <div>
    <v-tabs>
      <!-- 상단 탭-->
      <v-tab
        @click="
          TopTab1 = true
          TopTab2 = false
        "
        >대시보드</v-tab
      >
      <v-tab
        @click="
          TopTab2 = true
          TopTab1 = false
        "
        >회원관리</v-tab
      >
      <v-tab>설문관리</v-tab>
      <v-tab>이벤트</v-tab>
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
            @click="ShowModal_Create = false"
            elevation="2"
            x-small
          >
            유저추가
          </v-btn>
        </div>
      </div>
    </div>
    <div style="z-index: 3">
      <div v-if="TopTab1 == true">
        <!-- 대시보드-->
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
      <div style="border: 1px solid green" v-if="TopTab2 == true">
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
            </div>
            <div class="text-center">
              <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
          </div>
        </div>
        <div style="border: 1px solid red; float: left; width: 80%">
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
            <div style="border: 1px solid snow">
              <h3>일반정보</h3>
              <ul style="font-size: 20pt">
                <li>닉네임 : -유저이름-</li>
                <li>이메일 : Example@email.com</li>
                <li>유저타입 : 구글로그인</li>
                <li>가입일 : 0000. 00. 00.</li>
              </ul>
            </div>
          </div>
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
  background: gray;
  margin: 2%;
  padding-top: 1%;
  width: 20%;
  float: left;
  text-align: center;
  font-size: larger;
  border-radius: 5px;
}
.Tab2_Sidebar {
  border: 1px solid gold;
  width: 20%;
  float: left;
}
.UserInfo {
  border: 1px solid blue;
}
</style>
