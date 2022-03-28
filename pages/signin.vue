<template>
    <div>
        <header class="pb-5">
            <NuxtLink to="/" style="color:black; text-decoration-line: none;">
                <h1 class="pb-3">govey</h1>
            </NuxtLink>
            <hr>
        </header>
        <nav class="pt-5 pb-3">
            <v-container>
                <v-row justify="space-around">
                    <div>
                        <h1>로그인</h1><br>
                        고베이에 오신걸 환영합니다.
                        <div class="d-flex pt-5 pl-5">
                        <div class="pr-2"><v-img src="/kakao.png" height="50px" width="50px"></v-img></div>
                        <div class="pr-2"><v-img src="/naver.png" height="50px" width="50px"></v-img></div>
                        <div><v-img src="/google.svg" height="50px" width="50px"></v-img></div>
                    </div>
                    </div>
                    <div>
                        아직 고베이 계정이 없나요?<br><br>
                        <NuxtLink to="/signjoin1">
                            <v-btn class="float-right">
                                회원가입
                            </v-btn>
                        </NuxtLink>
                    </div>
                    
                </v-row>
                    
            </v-container>
        </nav>
        <hr >
        <section class="pt-3">
            <v-container style=" width:50%; ">
                    <div >
                        이메일
                        <v-text-field label="example@gamil.com"></v-text-field>
                    </div>
                    <div >
                        비밀번호
                        <v-text-field type="password" label="password"></v-text-field>
                    </div>
                    <v-btn >
                        로그인
                    </v-btn>
            </v-container>
        </section>
    </div>
</template>

<script>

export default {
  name: 'signin-page',
}
</script>


