<template>
  <div class="wrapper">
    <div class="welcome">
      <h1>관심사 등록</h1>
      <a href="/">다음에 할게요</a>
    </div>
    <span class="desc">관심있는 분야를 선택해주세요! 관련 설문을 우선적으로 추천해 드릴 거에요!</span>
    <div class="box-container">
      <div class="tag-box">대학교</div>
      <div class="tag-box">축구</div>
      <div class="tag-box">미드</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTag",
  layout: "login",
  head: {
    title: 'Tag'
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 500px;
  margin: 55px auto 16px auto;
}
.welcome {
  margin-bottom: 10px;
}
.welcome h1 {
  display: inline-block;
}
.welcome a {
  width: 102px;
  height: 42px;
  padding-top: 10px;
  float: right;
  border: solid 1px;
  border-radius: 4px;
  text-decoration: #1a9efe;
  font-weight: bold;
}
.desc {
  display: block;
  margin-bottom: 14px;
}
.box-container {
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.tag-box {
  display: inline-block;
  min-width: 32%;
  height: 85px;
  padding-top: 28px;
  text-align: center;
  background: #1cddb7
}
</style>