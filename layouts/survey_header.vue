<template>
<v-container>
    <div class="header">
        <v-row>
        <v-col cols="1">
        <NuxtLink to="/list/" style="color: black; text-decoration-line: none">
            <img src="../assets/Arrow back ios.png"/>
        </NuxtLink>
        </v-col>
        <v-col cols="8">
            상명대학교 학생들에게 묻습니다.
        </v-col>
        <v-col cols="1">
            <img src="../assets/Ios share.png"/>
        </v-col>
        <v-col cols="1">
            <img src="../assets/Bookmark border.png"/>
        </v-col>
        <v-col cols="1">
            <img src="../assets/More vert.png"/>
        </v-col>
        </v-row>
      
    </div>
</v-container>

</template>

<script>


export default {
  name: 'survey_header-Page',
  layout: 'DefaultLayout',
  
  
}
</script>

<style>
.wrap {
  max-width: 500px;
  font-family: DMSans;
}
.header {
  border-bottom: 1px solid #d3d3d3;
  padding: 3%;
  width: 100%;
  background-color: white;
}
</style>