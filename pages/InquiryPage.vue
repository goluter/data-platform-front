<template>
  <div>
    <div class="header">
      <NuxtLink
        to="/ServiceCenter"
        style="color: black; text-decoration-line: none"
        ><img
          style="position: absolute"
          src="../assets/Arrow back ios.png"
          ALIGN="left"
      /></NuxtLink>

      <a
        ><span>1대1 문의</span
        ><v-btn class="button" x-small color="#30cdae">제출</v-btn></a
      >
    </div>
    <div>
      <div class="titleinput">
        <input placeholder="제목을 입력해주세요" class="search2" />
      </div>
      <div class="maininput">
        <textarea
          placeholder="내용을 입력해주세요"
          style="font-size: 14px; width: 100%; height: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.button {
  min-width: 47px;
  min-height: 30px;
  flex-grow: 0;
  margin: 0 0 0 109px;
  padding: 7px 11px 7px 10px;
  border-radius: 5px;
  float: left;
  position: relative;
  margin: -24px 2% 0px 85%;
}
.titleinput {
  flex-grow: 0;
  margin: 25px 13px 14px 13px;
  padding: 10px 23.2px 10px 12px;
  background-color: #f7f7f8;
  border-radius: 10px;
  height: 50px;
}
.search2 {
  width: 100%;
  margin: 1px 0 1px 5px;
  font-size: 14px;
  height: 28px;
}
.maininput {
  flex-grow: 0;
  height: 335px;
  margin: 14px 13px 16px 13px;
  padding: 10px 23.2px 10px 12px;
  background-color: #f7f7f8;
  border-radius: 10px;
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
