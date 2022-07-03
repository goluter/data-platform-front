<template>
  <div class="wrapper">
    <v-container class="upper-body">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="mx-auto" cols="auto">
              <div class="item-img" />
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-auto py-0" cols="auto">
              <span class="item-provider"> {{ itemData.provider }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="mx-auto pt-1" cols="auto">
              <span class="item-name"> {{ itemData.name }} </span>
            </v-col>
          </v-row>
          <v-row v-if="!auth">
            <v-col cols="12" />
          </v-row>
          <v-row v-if="!auth">
            <v-col cols="12" />
          </v-row>
          <v-row v-if="!auth">
            <v-col cols="12" />
          </v-row>
          <v-row v-if="!auth">
            <v-col cols="12">
              <v-card
                class="pa-3"
                elevation="0"
              >
                <p class="text-body-2">
                  아이템은 본인 인증을 통해 사용하실 수 있습니다.
                </p>
                <p class="text-caption">
                  탈취 및 분실에 대해서 책임지지 않습니다. 보안에 유의 부탁드립니다.
                </p>
                <div class="item-auth-form">
                  <form>
                    <input class="input-pw" name="password" type="password" placeholder="비밀번호를 입력해주세요.">
                    <div class="item-auth-checkbox d-flex justify-center align-items-center">
                      <input v-model="confirmAuth" type="checkbox">
                      <label class="ml-2" for="confirmItemActivate"><a class="term-link" href="#">아이템 사용 약관</a>에 동의하고 사용을 확정하겠습니다.</label><br>
                    </div>
                  </form>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="!auth">
      <v-row>
        <v-col class="pa-0" cols="12">
          <v-btn
            :disabled="!confirmAuth"
            tile
            color="#1a9efe"
            style="height: 55px; width: 100%;"
            to="/mypage/item-detail"
          >
            <span class="item-activate-btn-text">잠금 해제</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="auth">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col class="pa-0 d-flex justify-content-center" cols="12">
              <v-alert
                v-model="activated"
                dismissible
                prominent
                dense
                rounded
                type="success"
                style="position: fixed; z-index: 1; margin: 0 auto; right: 0; bottom: 45px; left: 0; width: 90%; max-width: 900px;"
              >
                사용이 확정되었습니다.<br>이메일을 확인해주세요.
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0" cols="12">
              <div class="item-activate d-flex">
                <v-dialog v-model="dialog">
                  <template
                    #activator="{ on, attrs }"
                  >
                    <v-btn
                      tile
                      color="#1a9efe"
                      v-bind="attrs"
                      :disabled="activated"
                      style="height: 55px; width: 100%;"
                      v-on="on"
                    >
                      <span class="item-activate-btn-text">아이템 사용</span>
                    </v-btn>
                  </template>
                  <v-card class="pa-3">
                    <v-row>
                      <v-col class="mx-auto mt-3" cols="auto">
                        <span class="item-activate-card-title">
                          아이템 사용 확정
                        </span>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="mx-auto" cols="12" md="auto">
                        <span class="item-activate-card-text">
                          아이템 사용 확정 링크는 인증된 이메일을 통해 전달됩니다.<br>
                          탈취 및 분실에 대해 책임지지 않습니다. 보안에 유의 부탁드립니다.
                        </span>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="auto" class="item-activate-card-checkbox mx-auto my-3">
                        <form>
                          <div class="d-flex align-items-center">
                            <input v-model="confirmItemActivate" type="checkbox">
                            <label class="ml-2" for="confirmItemActivate"><a class="term-link" href="#">아이템 사용 약관</a>에 동의하고 사용을 확정하겠습니다.</label><br>
                          </div>
                          <div class="d-flex mt-3" style="justify-content: center">
                            <v-btn depressed color="#1a9efe" :disabled="!confirmItemActivate" @click="dialog=false; activated=true">
                              <span class="item-activate-card-checkbox-btn">메일 발송</span>
                            </v-btn>
                          </div>
                        </form>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      auth: false,
      confirmAuth: false,
      dialog: false,
      confirmItemActivate: false,
      activated: false,
      itemData: { name: '[스타벅스] 카페 아메리카노 T', provider: '스타벅스' }
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '아이템 상세')
  }
}
</script>

<style scoped>
.wrapper {
  height: calc(100% - 49px);
}
.upper-body {
  height: calc(100% - 55px);
}
.item-img {
  margin: 3px;
  padding: 3px;
  width: 270px;
  height: 270px;
  background-color: #eee;
  border: #f0f0f0 solid 1px;
  border-radius: 15px;
}
.item-provider {
  font-size: 12px;
  color: #808080;
}
.item-name {
  font-size: 14px;
  font-weight: 600;
}
.input-pw {
  padding: 10px;
  width: 100%;
  height: 40px;
  background-color: #f7f7f8;
  border-radius: 10px;
  font-size: 12px;
}
.item-auth-checkbox {
  margin-top: 35px;
  font-size: 12px;
}
.item-activate {
  justify-content: center;
  align-items: center;
  height: 55px;
}
.item-activate-btn-text {
  font-size: 16px;
  font-weight: 600;
  color: white;
}
.item-activate-card-title {
  font-size: 16px;
  font-weight: 600;
}
.item-activate-card-text {
  font-size: 12px;
}
.item-activate-card-checkbox {
  font-size: 12px;
}
.term-link {
  color: #1976d2 !important;
}
.item-activate-card-checkbox-btn {
  font-size: 14px;
  color: white;
}
</style>
