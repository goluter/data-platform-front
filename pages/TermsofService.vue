<template>
  <div>
    <div class="header">
      <NuxtLink to="/m_index" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <span>이용약관</span>
    </div>
    <div class="title1">제 1 장 환영합니다</div>
    <div class="sub1">
      제 1 조 (목적)<br />
      제 2 조 (약관의 효력 및 변경)<br />
      제 3 조 (약관 외 준칙)<br />
    </div>
    <div class="title2" style="margin: 0px 0px 0px 18px">제 2 장 계정 이용</div>
    <div class="sub2">
      제 4 조 (계약의 성립)<br />
      제 5 조 (계정 관리)
    </div>
    <div class="title3" style="margin: 40px 0px 0px 18px">제 1 조 (목적)</div>
    <div class="sub3">
      주식회사 고베이(이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
      회사는 여러분이 다양한 인터넷과 모바일 서비스(이하 ‘서비스’)를 좀 더
      편리하게 이용할 수 있도록 회사에서 제공하는 웹사이트 및
      응용프로그램(어플리케이션, 앱)에 모두 접속 가능한 통합로그인계정 체계를
      만들고 그에 적용되는 고베이 계정 약관(이하 ‘본 약관’)을 마련하였습니다. 본
      약관은 여러분이 고베이 계정(이하 ‘계정’) 서비스를 이용하는 데 필요한 권리,
      의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로
      조금만 시간을 내서 주의깊게 읽어주시기 바랍니다.
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
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.sub1 {
  margin: 12px 0px 0px 18px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
  height: 58px;
}
.sub2 {
  margin: 12px 0px 0px 18px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
}
.sub3 {
  margin: 12px 21px 0px 18px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: #8f8f8f;
}
.title3 {
  margin: 20px 0px 0px 18px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
</style>
