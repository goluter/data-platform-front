<template>
  <div class="flicking-wrapper">
    <Flicking :hideBeforeInit="true" :options="{ align: 'center', bound: true }">
      <div
          v-for="(item, i) in carouselData" :key="i"
          style="height: 320px; align-items: flex-end"
      >
        <v-sheet
            class="survey-sheet elevation-5"
            :color="item.color"
        >
          <div class="play-icon-box">
            <img class="play-icon" src="../assets/play_index.png">
          </div>
          <div class="count-box">
            <span class="survey-participate-count">
              {{ item.count }}명이 참여중이에요!
            </span>
          </div>
          <div class="target-box">
            <span class="surveyor">
              설문자: {{ item.surveyor }}
            </span>
            <span class="survey-target">
              {{ item.target }}
            </span>
          </div>
        </v-sheet>
      </div>
    </Flicking>
  </div>
</template>

<script>
import {Flicking} from "@egjs/vue-flicking";

export default {
  components: {
    Flicking: Flicking
  },
  props: {
    carouselData: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
@import url("../node_modules/@egjs/vue-flicking/dist/flicking.css");
.survey-sheet {
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  margin-right: 20px;
  padding: 15px;
  width: 330px;
  height: 280px;
  border-radius: 45px;
  justify-content: space-between;
}
.play-icon-box {
  display: flex;
  justify-content: flex-end;
}
.play-icon {
  width: 70px;
  height: 70px;
}
.count-box {
  display: flex;
  justify-content: flex-end;
  color: white;
  font-size: 18px;
}
.target-box {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  justify-content: flex-start;
  width: 100%;
  bottom: 10px;
  left: 10px;
  color: white;
}
.survey-target {
  bottom: 0;
  font-size: 18px;
}
.surveyor {
  color: #d1d5db;
}
</style>