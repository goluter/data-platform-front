<template>
  <div>
    <div class="header">
      <NuxtLink to="/" style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <a><span>고객센터</span></a>
    </div>
    <div>
      <div class="asd" style="">
        <img src="../assets/magnify.png" class="mag" />
        <input placeholder="검색어를 입력해주세요" class="search" />
      </div>
    </div>
    <div>
      <v-tabs fixed-tabs color="#1cddb7">
        <v-tab
          @click="
            faq = true
            onebyone = false
            guide = false
          "
          >자주 묻는 질문</v-tab
        >
        <v-tab
          @click="
            faq = false
            onebyone = true
            guide = false
          "
          >1대1 문의</v-tab
        >
        <v-tab
          @click="
            faq = false
            onebyone = false
            guide = true
          "
          >가이드</v-tab
        >
      </v-tabs>
    </div>
    <div v-for="(a, i) in FaqData" :key="a" v-if="faq == true">
      <div class="box1">
        {{ FaqData[i].title }}
        <div style="display: none">{{ selectnum }} {{ chevrondown[i] }}</div>
        <img
          v-if="chevrondown[i] == true"
          @click="
            selectnum = i
            chevrondown[i] = false
            chevronup[i] = true
            showanswer[i] = true
          "
          class="chevron"
          src="../assets/chevrondown.png"
        />
        <img
          v-if="chevronup[i] == true"
          class="chevron"
          src="../assets/chevronup.png"
          @click="
            selectnum = -1
            chevrondown[i] = true
            chevronup[i] = false
            showanswer[i] = false
          "
        />
      </div>
      <div class="box2" v-if="showanswer[i] == true">
        {{ FaqData[i].answer }}
      </div>
    </div>
    <div v-if="onebyone == true">
      <div align="right">
        <NuxtLink
          to="/InquiryPage"
          style="color: black; text-decoration-line: none"
        >
          <v-btn
            depressed
            color="primary"
            style="
              width: 102px;
              height: 50px;
              border-radius: 10px;
              margin: 9px 13px 0px 0px;
            "
            >문의하기</v-btn
          >
        </NuxtLink>
      </div>

      <div v-for="(a, i) in InquiryData" :key="a" class="onemain">
        <nuxt-link
          style="color: black; text-decoration-line: none"
          :to="InquiryData[i].userurl"
          ><div class="onetitle">{{ InquiryData[i].question }}</div>
          <div class="time">{{ InquiryData[i].check }}</div></nuxt-link
        >
      </div>
    </div>
    <div
      v-for="(a, i) in GuideData"
      :key="a"
      class="onemain"
      v-if="guide == true"
    >
      <NuxtLink
        :to="GuideData[i].url"
        style="color: black; text-decoration-line: none"
      >
        <div class="onetitle">{{ GuideData[i].title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import FaqData from '../assets/data/FAQdata.js'
import GuideData from '../assets/data/GuideData.js'
import InquiryData from '../assets/data/Inquirydata.js'
export default {
  name: 'ServiceCenter',
  layout: 'default',
  data() {
    return {
      selectnum: -1,
      faq: true,
      onebyone: false,
      guide: false,
      chevronup: [false, false, false, false],
      chevrondown: [true, true, true, true],
      showanswer: [false, false, false, false],
      FaqData,
      GuideData,
      InquiryData,
    }
  },
}
</script>

<style scoped>
.onetitle {
  float: left;
  margin: 23.9px 0px 0px 18px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
}
.time {
  float: right;
  margin: 23.9px 18px 0px 0px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
}
.onemain {
  height: 65px;
  flex-grow: 0;
  background-color: #fff;
  border-bottom: 1px solid #e9e9e9;
}
.chevron {
  float: right;
  width: 24px;
  height: 22.9px;
  margin: 0px 16px 0px 0px;
}
.search {
  width: 80%;
  margin: 1px 0 1px 5px;
  font-size: 14px;
  height: 28px;
}
.asd {
  flex-grow: 0;
  margin: 14px 13px 16px 13px;
  padding: 10px 23.2px 10px 12px;
  background-color: #f7f7f8;
  border-radius: 10px;
  height: 50px;
}
.box2 {
  height: 65px;
  flex-grow: 0;
  padding: 18px 0px 0px 23.9px;
  background-color: #efefef;
  border-bottom: 1px solid #e9e9e9;
}
.box1 {
  height: 65px;
  flex-grow: 0;
  padding: 18px 0px 0px 23.9px;
  border-bottom: 1px solid #e9e9e9;
}
.mag {
  width: 30px;
  height: 30px;
  float: left;
  margin: 0px 5px 0px 0px;
}
.v-tab {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.9px;
  text-align: center;
  color: #000;
  padding: 0%;
}
.container {
  padding: 0px;
}

.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
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
  z-index: 1;
}
</style>
