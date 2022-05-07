<template>
    <div>
        
    <v-footer class="footer">
        
        <v-row>
            <v-col cols="3" class="text-md-center">
                <NuxtLink to="/" style="color:black; text-decoration-line: none;">
                    <div><img src="../assets/home.png"/></div>
                    <div>홈</div>
                </NuxtLink>
            </v-col>
            <v-col cols="3" class="text-md-center">
                <NuxtLink to="/list/" style="color:black; text-decoration-line: none;">
                    <div><img src="../assets/survey.png"/></div>
                    <div>설문</div>
                </NuxtLink>
            </v-col>
            <v-col cols="3" class="text-md-center">
                <NuxtLink to="/" style="color:black; text-decoration-line: none;">
                    <div><img src="../assets/store.png"/></div>
                    <div>스토어</div>
                </NuxtLink>
            </v-col>
            <v-col cols="3" class="text-md-center">
                <NuxtLink to="/meminfo/" style="color:black; text-decoration-line: none;">
                    <div><img src="../assets/Male User.png"/></div>
                    <div>마이</div>
                </NuxtLink>
            </v-col>
        </v-row>
    </v-footer>
    </div>
</template>

<script>

export default{
    name: 'layout_footer',
    layout: 'DefaultLayout'
    
}
</script>
<style>
.footer{
    position: fixed;
    bottom: 50px;
    width: 100%;
}
</style>