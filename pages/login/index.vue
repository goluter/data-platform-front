<template>
  <div id="ct">
    <div class="wrapper">
      <div class="welcome">
        <h1>로그인</h1>
        <span>고베이에 오신 것을 환영합니다!</span>
        <div class="signup">
          <p>아직 고베이 계정이 없으신가요?</p>
          <NuxtLink
            to="/signup/"
            style="
              margin-top: 10px;
              padding: 10px 20px;
              border: solid 1px dodgerblue;
              border-radius: 4px;
            "
          >
            <span style="font-weight: bold; color: dodgerblue">회원가입</span>
          </NuxtLink>
        </div>
      </div>

      <div style="display: none" class="login-type">
        <div class="social-login">
          <button class="kakao">
            <v-img src="/kakao.jpg" height="50px" width="50px" />
          </button>
          <button class="naver">
            <v-img src="/naver.jpg" height="50px" width="50px" />
          </button>
          <button class="google" @click="loginWithGoogle()">
            <v-img src="/google.jpg" height="50px" width="50px" />
          </button>
          <button class="apple">
            <v-img src="/apple.jpg" height="50px" width="50px" />
          </button>
        </div>
        <p>또는 이메일 로그인</p>
      </div>
      <div class="login">
        <div class="input">
          <h3>아이디</h3>
          <input
            id="account"
            v-model="id"
            style="padding: 0px 12px"
            placeholder="아이디를 입력하세요."
            required
          />
        </div>
        <div class="input" style="margin-top: 12px">
          <h3>비밀번호</h3>
          <input
            id=" password"
            v-model="password"
            style="padding: 0px 12px"
            type="password"
            placeholder="비밀번호를 입력하세요."
            required
          />
        </div>
        <div id="login-option" style="display: none">
          <div class="auto-login">
            <input type="checkbox" /><label>자동로그인</label>
          </div>
          <div id="forgot">
            <a href="/static">비밀번호 찾기</a>
          </div>
        </div>
        <input type="submit" value="로그인" @click="loginWithEmail()" />
      </div>
    </div>
  </div>
</template>

<script>
import { login } from 'govey/src/libs/auth'

export default {
  name: 'LoginPage',
  layout: 'login',
  data() {
    return {
      id: '',
      password: '',
    }
  },
  head: {
    title: 'Log In',
  },
  methods: {
    loginWithEmail() {
      if (!this.id || !this.password) {
        alert('로그인 정보를 입력해주세요!')
        return
      }

      login.call(this, this.id, this.password)
    },
    // loginWithGoogle() {
    //   this.$auth.loginWith('google')
    // },
  },
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

.login input {
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
