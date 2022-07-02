<template>
  <div id="ct">
    <div style="text-align: center; border: 1px solid #f0f0f0">
      <img class="img" src="../../../../assets/Male User.png" />
      <div class="title">{{ UsertitleData[$route.params.id].title }}</div>
      <div class="count">아래 링크를 눌러 획득 가능합니다</div>
    </div>

    <div class="wrapper">
      <div class="signup">
        <form action="" method="post">
          <h3 style="padding-bottom: 8px">이메일</h3>
          <div class="input-email">
            <span class="box">
              <input
                id="account"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </span>
            <input id="verify" type="submit" value="인증번호 발송" />
          </div>
          <div class="input-email-verify">
            <h3 style="padding-bottom: 8px">인증번호</h3>
            <span class="box">
              <input id="verify-code" type="text" placeholder="1234" required />
            </span>
            <p>
              이메일로 도착한 인증번호를 입력해주세요. 인증번호 발송에 최대 20초
              까지 소요될 수 있습니다.
            </p>
          </div>
          <nuxt-link to="/usertitle/complete"
            ><input id="signup" type="submit" value="인증 완료하고 획득하기"
          /></nuxt-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UsertitleData from '../../../../assets/data/UsertitleData'
export default {
  name: 'emailcert',
  layout: 'default',
  data() {
    return {
      UsertitleData,
      selectnum: 0,
      recent: true,
      stack: false,
    }
  },
  mounted() {
    this.$store.commit('setPageTitle', '칭호 획득')
  },
}
</script>

<style scoped>
.v-application a {
  color: white !important;
  text-decoration: none !important;
}
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
  padding-top: 19px;
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

.signup .input-email input[type='email'] {
  width: 100%;
}

.signup .input-email input[type='submit'] {
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

.signup .input-email-verify input[id='verify-code'] {
  width: 100%;
}

.signup .input-email-verify p {
  margin-top: 10px;
  font-size: 14px;
}

.signup .input-password input[type='password'] {
  width: 100%;
}

.signup input[id='signup'] {
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
.imgspan {
  padding-left: 3px;
  font-size: 12px;
}
.point2 {
  float: right;
  margin: 26px 12px 0px 0px;
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: right;
  color: var(--black);
}
.profileimg {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 21px 0px 22px 18px;
}
.list {
  height: 66px;
  flex-grow: 0;
  border: solid 1px #f0f0f0;
  background-color: #fff;
}
.smallgrayboxtext {
  padding: 19px 0px 8px 9px;
}
.smallgray {
  height: 115px;

  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: left;
  color: var(--black);
}
.count {
  flex-grow: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: center;
  color: var(--black);
  padding-top: 23px;
  padding-bottom: 24px;
}
.title {
  flex-grow: 0;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.8px;
  color: var(--black);
  padding-top: 5px;
}
.img {
  width: 74px;
  height: 74px;
  flex-grow: 0;
  margin: 29px 0 0px 0px;
}
.mainbox {
  height: 206px;
  flex-grow: 0;
  border: solid 1px black;
  background-color: #fff;
}
</style>
