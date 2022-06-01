<template>
  <div class="wrapper">
    <div class="welcome">
      <h1>칭호 획득</h1>
      <a href="/">다음에 할게요</a>
    </div>
    <span class="welcome-2">인증하고 나만의 유니크 칭호를 획득하세요!</span>
    <div class="box-container">
      <div class="title-box">
        <div class="title-icon-box">
          <img src="/" class="title-icon">
        </div>
        <div class="title-detail">
          <div class="title-desc">
            <span class="title-name"><h3>나는 대학생이다</h3></span>
            <span class="title-condition">획득조건: 학교 이메일로 인증을 진행합니다.</span><br>
          </div>
          <span class="recent-earned"><img src="/">
            <span class="counter">1234번째 획득자가 되어보세요!</span>
          </span>
        </div>
      </div>
    </div>
    <div class="box-container">
      <div class="title-box">
        <div class="title-icon-box">
          <img src="/" class="title-icon">
        </div>
        <div class="title-detail">
          <div class="title-desc">
            <span class="title-name"><h3>나는 대학생이다</h3></span>
            <span class="title-condition">획득조건: 학교 이메일로 인증을 진행합니다.</span><br>
          </div>
          <span class="recent-earned"><img src="/">
            <span class="counter">1234번째 획득자가 되어보세요!</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleEarned',
  layout: 'login',
  head: {
    title: 'Tag'
  }
}
</script>

<style scoped>
.wrapper {
  font-family: 'Roboto', sans-serif;
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
.welcome-2 {
  display: block;
  margin-bottom: 24px;
  font-size: 14px;
}
.title-box {
  height: 113px;
  padding: 14px 10px 10px 10px;
  margin-bottom: 15px;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
}
.title-box .title-icon-box {
  vertical-align: top;
  float: left;
}
.title-box .title-icon {
  width: 45px;
  height: 45px;
  margin: 0 5px;
  border-radius: 30%;
  background: red;
}
.title-box .title-desc {
  margin-bottom: 10px;
}
.title-box .title-condition {
  font-size: 13px;
}
.title-box .recent-earned img {
  width: 65px;
  height: 27px;
  margin: 0 5px;
  float: left;
  background: blue;
}
.counter {
  font-size: 13px;
}
.title-box .counter {
  padding-top: 5px;
  vertical-align: bottom;
  float: right;
}
</style>
