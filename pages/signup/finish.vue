<template>
  <div class="wrapper" style="padding: 24px">
    <div class="welcome">
      <h1>가입완료</h1>
    </div>
    <a class="welcomeButton" href="/">홈으로</a>
  </div>
</template>

<script>
export default {
  name: 'SignupFinish',
  head: {
    title: 'Sign Up',
  },
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
.welcomeButton {
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
