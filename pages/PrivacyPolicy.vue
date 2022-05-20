<template>
  <div>
    <div class="header">
      <NuxtLink to="/m_index" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <span>개인정보처리방침</span>
    </div>
    <div class="title1">기업사이트 개인정보처리방침</div>
    <div class="sub">
      고베이(이하 “회사)는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및
      제공’ 하고 있으며, ‘이용자의 권리(개인정보 자기결정권)를 적극적으로 보장’
      하며, 대한민국의 개인정보보호 규정 및 가이드라인을 준수하고 있습니다.
    </div>
    <div class="title2" style="margin: 57px 0px 0px 18px">
      1. 처리하는 개인정보 항목
    </div>
    <div class="sub">
      선택사항<br /><br />
      - 1) 학력사항(입학일, 졸업일, 졸업유무, 교육기관 이름, 전공, 학점)<br />
      - 2) 자격증정보(발급일, 자격증명칭, 발급기관, 급수)<br />
      - 3) 어학사항(언어, 시험명, 점수/급, 주관, 취득일)<br />
      - 4) 수상경력(수상일, 수상명, 발급기관, 급수)<br />
      - 5) 보훈사항(보훈대상)<br />
      - 6) 장애사항(장애유형, 장애급수)<br />
    </div>
    <div class="title2" style="margin: 40px 0px 0px 18px">
      2. 개인정보의 처리목적
    </div>
    <div class="sub">
      회사는 이용자의 소중한 개인정보를 다음과 같은 목적으로만 이용하며, 목적이
      변경될 경우에는 사전에 이용자의 동의를 구하도록 하겠습니다.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  layout: 'default',
  data() {
    return {
      num: 0,
    }
  },
}
</script>

<style>
.container {
  padding: 0px;
}

.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 9px 10px 12px 11px;
  width: 100%;
  background-color: white;
}
.header span {
  flex-grow: 0;
  margin: auto;
  display: table;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: center;
  color: #434343;
}
.title1 {
  height: 19px;
  margin: 28px 0px 0px 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  text-align: left;
  color: #000;
}
.title2 {
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.sub {
  margin: 20px 21px 0px 18px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
}
</style>
