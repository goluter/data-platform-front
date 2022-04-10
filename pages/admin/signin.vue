<template>
  <div class="login">
    <form class="loginform">
      <h2>관리자로그인</h2>
      <p>
        <label for="memberIdInput">아이디</label>
        <input
          id="memberIdInput"
          ref="memberIdInput"
          v-model.trim="memberId"
          type="text"
          class="input_text"
          placeholder="아이디를 입력하세요."
        />
      </p>
      <p>
        <label for="memberPasswordInput">패스워드</label>
        <input
          id="memberPasswordInput"
          ref="memberPasswordInput"
          v-model.trim="memberPassword"
          type="password"
          class="input_text"
          placeholder="패스워드를 입력하세요."
        />
      </p>
      <p class="buttons">
        <button class="button blue" @click.prevent="doLogin">로그인</button>
        <button class="button" @click.prevent="doCancel">취소</button>
      </p>
    </form>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script type="module">
export default {
  name: 'Login',
  layout: 'AdminLayout',
  data() {
    return {
      memberId: '',
      memberPassword: '',
      errorMessage: '',
    }
  },
  mounted() {
    this.$refs.memberIdInput.focus()
  },
  methods: {
    doLogin() {
      if (this.memberId == '') {
        alert('아이디를 입력하세요.')
        this.$refs.memberIdInput.focus()
      } else if (this.memberPassword == '') {
        alert('패스워드를 입력하세요.')
        this.$refs.memberPasswordInput.focus()
      }
    },
    doCancel() {
      this.$router.push('../')
    },
  },
}
</script>

<style scoped>
.login {
  width: 800px;
  margin: 20px auto;
}
.loginform {
  width: 400px;
  margin: auto;
}
.loginform p > label {
  display: inline-block;
  width: 100px;
  font-size: 14px;
  padding-right: 10px;
}
.loginform p > .input_text {
  width: 200px;
  font-size: 14px;
  height: 32px;
}
.buttons {
  position: relative;
  height: 32px;
  margin-top: 20px;
}
.buttons > .button {
  overflow: visible;
  cursor: pointer;
  min-width: 125px;
  height: 32px;
  margin: 0 2px;
  padding: 0 15px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dfdfdf;
  background: #fff;
  border-radius: 10px;
}
.buttons > .button.blue {
  color: #fff;
  border-color: #0099d2 !important;
  background: #0099d2 !important;
}
</style>
