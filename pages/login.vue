<template>
  <div id="ct">
    <div class="wrapper">
      <div class="welcome">
        <h1>로그인</h1>
        <span>고베이에 오신 것을 환영합니다!</span>
        <div class="signup">
          <p>아직 고베이 계정이 없으신가요?</p>
          <a href="/SignUp">회원가입</a>
        </div>
      </div>
      <div class="login-type">
        <div class="social-login">
          <button class="kakao">
            <v-img src="/kakao.jpg" height="50px" width="50px" />
          </button>
          <button class="naver">
            <v-img src="/naver.jpg" height="50px" width="50px" />
          </button>
          <button class="google">
            <v-img src="/google.jpg" height="50px" width="50px" />
          </button>
          <button class="apple">
            <v-img src="/apple.jpg" height="50px" width="50px" />
          </button>
        </div>
        <p>또는 이메일 로그인</p>
      </div>
      <div class="login">
        <form action="" method="post">
          <div class="input">
            <label>이메일</label>
            <input
              id="account"
              type="email"
              placeholder="이메일을 입력하세요."
              required
            >
          </div>
          <div class="input">
            <label>비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              required
            >
          </div>
          <div id="login-option">
            <div class="auto-login">
              <input type="checkbox"><label>자동로그인</label>
            </div>
            <div id="forgot">
              <a href="/">비밀번호 찾기</a>
            </div>
          </div>
          <input type="submit" value="로그인">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'login',
  head: {
    title: 'Log In'
  }
}
</script>

<style scoped>
#ct {
  max-width: 500px;
  margin: 0 auto;
}

.wrapper {
  margin: 0 16px;
}

.welcome {
  padding: 77px 0 30px 0;
}

.welcome h1 {
  font-size: 48px;
  letter-spacing: -2.4px;
}

.welcome span {
  font-weight: 500;
  letter-spacing: -0.9px;
}

.signup {
  margin-top: 20px;
  text-align: right;
}

.signup p {
  white-space: nowrap;
  font-size: 20px;
}

.signup a {
  margin-top: 10px;
  padding: 10px 20px;
  border: solid 1px;
  border-radius: 4px;
  text-decoration: dodgerblue;
  font-weight: bold;
}

.login-type {
  display: inline-block;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 150px;
  margin: 45px auto 36px auto;
}

.login-type .social-login {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
}

.login-type button {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 5px;
  border-radius: 70%;
  overflow: hidden;
}

.login-type v-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login {
  display: block;
  position: relative;
}

.login input[type='email'],
input[type='password'] {
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  padding-left: 5px;
  border-radius: 10px;
  background: #f7f7f8;
}

.login input[type='submit'] {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: solid 1px dodgerblue;
  border-radius: 10px;
  background: dodgerblue;
  color: white;
  font-weight: bold;
}

.login input[type='checkbox'] {
  margin-right: 5px;
}

#login-option {
  display: flex;
  justify-content: space-between;
}
</style>
