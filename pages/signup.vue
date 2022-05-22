<template>
  <div id="ct">
    <div class="wrapper">
      <div class="welcome">
        <h1>회원가입</h1>
        <div class="login">
          <p>이미 고베이 계정이 있으신가요?</p>
          <a href="/login">로그인</a>
        </div>
      </div>
      <div class="signup-type">
        <div class="social-signup">
          <p>30초 안에 가입하기</p>
          <button class="kakao"><v-img src="/kakao.jpg" height="50px" width="50px"></v-img></button>
          <button class="naver"><v-img src="/naver.jpg" height="50px" width="50px"></v-img></button>
          <button class="google"><v-img src="/google.jpg" height="50px" width="50px"></v-img></button>
          <button class="apple"><v-img src="/apple.jpg" height="50px" width="50px"></v-img></button>
        </div>
        <p>또는 이메일 회원가입</p>
      </div>
      <div class="signup">
        <form action="" method="post">
          <h3>이메일</h3>
          <div class="input-email">
            <span class="box">
              <input type="email" id="account" placeholder="example@gmail.com" required>
            </span>
            <input type="submit" id="verify" value="인증번호 발송">
          </div>
          <div class="input-email-verify">
            <h3>인증번호</h3>
            <span class="box">
              <input type="text" id="verify-code" placeholder="1234" required>
            </span>
            <p>이메일로 도착한 인증번호를 입력해주세요. 인증번호 발송에 최대 20초 까지 소요될 수 있습니다.</p>
          </div>
          <div class="input-password">
            <h3>비밀번호</h3>
            <span class="box">
              <input type="password" id="password" placeholder="비밀번호를 입력하세요." required>
            </span>
          </div>
          <input type="submit" id="signup" value="회원가입">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  layout: 'layout_login',
  head: {
    title: 'Sign Up'
  }
}
</script>

<style scoped>
h3 {
  font-size: 16px;
}

.box {
  display: block;
  height: 50px;
  padding: 15px 15px;
  border-radius: 10px;
  background: #f7f7f8;
  vertical-align: top;
}

#ct {
  max-width: 500px;
  margin: 0 auto;
}

.wrapper {
  margin: 0 16px;
}

.welcome {
  padding: 77px 0 4px 0;
}

.welcome h1 {
  font-size: 48px;
  letter-spacing: -2.4px;
}

.welcome span {
  font-weight: 500;
  letter-spacing: -0.9px;
}

.login {
  margin-top: 20px;
  text-align: right;
}

.login p {
  white-space: nowrap;
  font-size: 20px;
}

.login a {
  margin-top: 10px;
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 4px;
  text-decoration: dodgerblue;
  font-weight: bold;
}

.signup-type {
  display: inline-block;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 45px auto 36px auto;
}

.signup-type .social-signup {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

.signup-type button {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border-radius: 70%;
  overflow: hidden;
}

.signup-type v-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.signup {
  display: inline-block;
  position: relative;
  width: 100%;
}

.signup .input-email {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 21px;
  padding-right: 150px;
}

.signup .input-email input[type=email] {
  width: 100%;
}

.signup .input-email input[type=submit] {
  position: absolute;
  top: 0;
  right: 0;
  width: 138px;
  height: 50px;
  margin-left: 12px;
  border: solid 1px dodgerblue;
  border-radius: 10px;
  background: dodgerblue;
  color: white;
  font-weight: bold;
}

.signup .input-email-verify {
  display: block;
  position: relative;
  margin-bottom: 16px;
}

.signup .input-email-verify input[id=verify-code] {
  width: 100%;
}

.signup .input-email-verify p {
  margin-top: 10px;
  font-size: 14px;
}

.signup .input-password input[type=password] {
  width: 100%;
}

.signup input[id=signup] {
  width: 100%;
  margin-top: 17px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: solid 1px dodgerblue;
  border-radius: 10px;
  background: dodgerblue;
  color: white;
  font-weight: bold;
}
</style>