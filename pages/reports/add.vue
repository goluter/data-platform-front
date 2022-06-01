<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="8" sm="10" md="10"></v-col>
        <v-col cols="4" sm="2" md="2">
          <v-btn icon><v-icon>mdi-content-save-outline</v-icon></v-btn>
          <v-btn color="teal accent-4" style="color: white; font-weight: 500">등록</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="mt-0 mb-3">
      <v-col class="pa-0" cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col cols="12">
          제목
          <v-text-field
              label="제목을 입력하세요."
              filled
              flat
              single-line
              color="teal accent-4"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          태그
          <v-combobox
              v-model="init"
              :search-input.sync="search"
              :items="tags"
              label="태그를 입력하세요."
              multiple
              chips
              deletable-chips
              filled
              flat
              single-line
              color="teal accent-4"
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <span style="font-size: 12px"><strong>{{ search }}</strong> 태그가 없습니다. <kbd>Enter</kbd>를 눌러 생성할 수 있습니다.</span>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" style="margin-bottom: 30px">
          분석 설문
          <survey-card :survey-data="surveyData" />
        </v-col>
      </v-row>
      <v-row style="background-color: #f7f7f8">
        <v-col cols="12"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Editor></Editor>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SurveyCard from "../../components/SurveyCard.vue";
import Editor from "../../components/Editor.vue";

export default {
  components: {Editor, SurveyCard},
  layout: 'empty',
  data() {
    return {
      search: null,
      surveyData: [
        {
          title: '대학생들에게 묻습니다',
          left: '4',
          count: '114,300',
          tags: ['대학생', '새내기', '축제'],
          rewards: [
            { title: '스타벅스', icon: 'mdi-gift', color: 'red' },
            {
              title: '100P',
              icon: 'mdi-circle-multiple',
              color: 'yellow darken-3'
            }
          ]
        }
      ],
      init: [],
      tags: ['대학생', '직장인']
    }
  }
}
</script>

<style scoped>
</style>