<template>
  <div class="wrapper">
    <div class="welcome">
      <h1>가입완료</h1>
      <a href="/">홈으로</a>
    </div>
    <span class="desc">고베이를 즐기기 위한 다양한 가이드들을 살펴보세요!</span>
    <div class="qa-container">
      <div class="question"><a href="/" class="question-item">포인트 시스템이 뭔가요?</a></div>
      <div class="question"><a href="/" class="question-item">칭호는 어떻게 얻을 수 있나요?</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupFinish",
  layout: "layout_login",
  head: {
    title: 'Sign Up'
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
  width: 81px;
  height: 42px;
  padding-top: 10px;
  float: right;
  border: solid 1px;
  border-radius: 4px;
  text-align: center;
  text-decoration: #1a9efe;
  font-weight: bold;
}
.desc {
  display: block;
  margin-top: 30px;
  margin-bottom: 14px;
  font-size: 14px;
}
.question {
  position: relative;
  width: 100%;
  height: 47px;
  margin-bottom: 8px;
  padding: 14px;
  border: solid 1px #c4c4c4;
}
.question-item {
  width: 100%;
  height: 100%;
  text-decoration: transparent;
  color: initial;
}
</style>