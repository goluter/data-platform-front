<template>
<v-container fluid style="width:80%">
    <div class="wrap">
        <header class="pb-5">
            <NuxtLink to="/" style="color:black;  text-decoration-line: none;">
                <h1 class="pb-3">govey</h1>
            </NuxtLink>
            <hr>
        </header>
        <nav class="pt-5 pb-3">
            <v-container>
                <v-row justify="space-around">
                    <div>
                        <h1>회원가입</h1><br>
                        고베이에 오신걸 환영합니다.
                        <div class="d-flex pt-5 pl-5">
                        <div class="pr-2"><v-img src="/kakao.png" height="50px" width="50px"></v-img></div>
                        <div class="pr-2"><v-img src="/naver.png" height="50px" width="50px"></v-img></div>
                        <div><v-img src="/google.svg" height="50px" width="50px"></v-img></div>
                    </div>
                    </div>
                    <div>
                        아직 고베이 계정이 있으세요?<br><br>
                        <NuxtLink to="/signin">
                            <v-btn class="float-right">
                                로그인
                            </v-btn>
                        </NuxtLink>
                    </div>
                    
                </v-row>
                    
            </v-container>
        </nav>
        <hr >
        <section class="pt-3">
            <v-container style=" width:50%; ">
                    <div>
                        <v-text-field label="example@gamil.com"></v-text-field>
                    </div>
                    <div>
                        <v-text-field type="password" label="비밀번호"></v-text-field>
                    </div>
                    <div>
                        <v-text-field type="password" label="비밀번호 확인"></v-text-field>
                    </div>
                    <div>
                        <v-text-field label="이름"></v-text-field>
                    </div>
                    <div>
                        <v-text-field label="닉네임"></v-text-field>
                    </div>
                    <div>  
                        <v-select
                        :items="['남자', '여자', '무응답',]"
                        label="성별"
                        >
                        <template v-slot:item="{ item, attrs, on }">
                        <v-list-item
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-list-item-title
                            :id="attrs['aria-labelledby']"
                            v-text="item"
                            ></v-list-item-title>
                        </v-list-item>
                        </template>
                    </v-select>
                    </div>
                    <div>
                            <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                            >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                v-model="date"
                                label="생년월일"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                :active-picker.sync="activePicker"
                                :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                                min="1950-01-01"
                                @change="save"
                            ></v-date-picker>
                            </v-menu>
                    </div>
                    <NuxtLink to="/signjoin2">
                        <v-btn>
                            다음
                        </v-btn>
                    </NuxtLink>
            </v-container>
        </section>
        <footer>
            <hr>
            <div class="text-md-center">
                Copyright © goveycompany. All rights reserved.
            </div>
        </footer>
    </div>
</v-container>
</template>

<script>
export default {
  name: 'signjoin1-Page',
 data: () => ({
      activePicker: null,
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
    
}
</script>

<style >
    .wrap{
        color:black;
    }
</style>