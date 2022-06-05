<template>
  <div>
    <div class="header">
      <NuxtLink
        to="/ServiceCenter"
        style="color: black; text-decoration-line: none"
      >
        <img
          style="position: absolute"
          src="../../assets/Arrow back ios.png"
          ALIGN="left"
        >
      </NuxtLink>

      <a><span>1대1 문의</span></a>
    </div>

    <div style="border-bottom: 1px solid #d3d3d3">
      <div class="Inquirytitle">
        {{ InquiryData[$route.params.id].question }}
      </div>
      <div class="date">
        {{ InquiryData[$route.params.id].date }}
      </div>
    </div>
    <div>
      <div class="Inquirymain">
        {{ InquiryData[$route.params.id].main }}
      </div>
    </div>
    <div>
      <div
        v-if="InquiryData[$route.params.id].check == '답변 후'"
        class="Inquiryanswer"
      >
        {{ InquiryData[$route.params.id].answer }}
      </div>
    </div>
  </div>
</template>

<script>
import InquiryData from '../../assets/data/Inquirydata'
export default {
  name: 'Inquiry',
  layout: 'default',
  data () {
    return {
      InquiryData,
      selectnum: 0
    }
  }
}
</script>

<style scoped>
.Inquiryanswer {
  height: 143px;
  margin: 0px 0px 0px 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  padding: 20px 21px 30px 17px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
  background-color: #efefef;
}
.Inquirymain {
  height: 143px;
  padding: 20px 21px 30px 17px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
}
.noticeimg {
  width: 322px;
  height: 251px;
  margin: 67px 0 0 18px;
  border-radius: 20px;
}
.Inquirytitle {
  flex-grow: 0;
  margin: 24px 0px 0px 18px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.7px;
  text-align: left;
  color: #000;
  width: 200px;
}
.container {
  padding: 0px;
}
.banner {
  background-color: #eee;
  height: 96px;
  padding: 2%;
  width: 100%;
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
.contents {
  border-bottom: 1px solid #d3d3d3;
  position: relative;
  overflow: hidden;
  height: 87px;
}
.contents a {
  text-decoration: none;
}

.date {
  width: 100px;
  height: 14px;
  flex-grow: 0;
  margin: 13px 0px 19px 18px;
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
