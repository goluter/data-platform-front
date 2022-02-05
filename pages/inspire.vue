<template>
  <div style="padding-top: 5%">
    <div class="wrap">
      <main>
        <form>
          <h1>관리자 로그인</h1>
          <br />
          <div>
            <label>이메일</label><br />
            <input class="Login" placeholder="name@example.com" />
          </div>
          <div class="form-floating">
            <label>패스워드</label><br />
            <input class="Login" placeholder="Password" />
          </div>
          <div>
            <label>
              <input type="checkbox" />
              자동로그인
            </label>
          </div>

          <div>
            <v-btn
              elevation="2"
              style="width: 100%; background-color: #11aacc"
              href="/UserWindow"
            >
              login
            </v-btn>
          </div>
        </form>
      </main>
    </div>
  </div>
</template>

<script></script>

<style>
.wrap {
  min-width: 20%;
  max-width: 30%;
  min-height: 20%;
  max-height: 30%;
  padding: 0.5%;
  margin: auto;
  border-radius: 10px;
  background-color: #383838;
}
.Login {
  width: 100%;
}
</style>
