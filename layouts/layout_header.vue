<template>
<v-container>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-navigation-drawer 
        app v-model="drawer" 
        absolute
        temporary >
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">리포트</NuxtLink>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">공지사항</NuxtLink>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">이벤트</NuxtLink>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">명예의전당</NuxtLink>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">고객센터</NuxtLink>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">개인정보처리방침</NuxtLink>
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>
                  <NuxtLink to="/" style="color:black; text-decoration-line: none;">이용약관</NuxtLink>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <div class="sns_link" >
            <v-row>
              <v-col><a href="https://www.youtube.com/channel/UCpj4Mj4OFgl5T0kTk1T3L_w"><img src="../assets/image 4.png"/></a></v-col>
              <v-col><a href="https://www.instagram.com/govey_official/?hl=ko"><img src="../assets/image 5.png"/></a></v-col>
              <v-col><a href="https://www.facebook.com/고베이-104289228923939"><img src="../assets/image 6.png"/></a></v-col>
            </v-row>
            
            
            
          </div>
        </v-navigation-drawer>
      

      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-5 mt-2">
        <NuxtLink to="/" style="color:black; text-decoration-line: none;"><img src="../assets/govey.png"/></NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <img src="../assets/Vector.png"/>
      </v-btn>

      <v-btn icon>
        <img src="../assets/Notification.png"/>
      </v-btn>
    </v-toolbar>

</v-container>
</template>

<script>

export default{
    name: 'layout_header',
    layout: 'DefaultLayout',
    data(){
        return{
            drawer:false,
            group: null,
        }
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
    
}
</script>
<style>
.sns_link{
  position: fixed;
    bottom: 80px;
}

#footer{
    position: fixed;
    bottom: 0;
    width: 90%;
    background-color: white;
    max-width: 500px;
    
}

</style>
