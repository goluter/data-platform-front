<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="search">
        <v-form style="align-self: center; width: 90%; height: 40px">
          <v-text-field
            label="검색어를 입력하세요"
            single-line
            clearable
            outlined
            dense
            append-icon="mdi-magnify"
            style="height: 40px; border-radius: 45px"
          />
        </v-form>
      </div>
      <div class="content">
        <v-container class="pa-0">
          <v-row class="ma-0" justify="end" style="height: 60px">
            <v-col cols="4">
              <v-select :items="sort" label="최신순" solo flat dense />
            </v-col>
          </v-row>
          <v-divider />
          <v-row
            v-for="(item, i) in reportData"
            :key="i"
            class="ma-0 pt-1 pl-1"
          >
            <v-col class="thumbnail" cols="2" />
            <v-col class="pa-2" cols="10">
              <div class="report-title">
                {{ item.title }}
              </div>
              <div class="report-stat">
                <div class="report-likes">
                  <v-icon small>
                    mdi-thumb-up
                  </v-icon>
                  {{ item.likes }}
                </div>
                <div class="report-comments">
                  <v-icon small>
                    mdi-comment-processing
                  </v-icon>
                  {{ item.comments }}
                </div>
                <div class="report-surveyor">
                  <v-icon small>
                    {{ item.icon }}
                  </v-icon> {{ item.surveyor }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportList',
  layout: 'nested',
  data () {
    return {
      sort: ['최신순', '추천순', '댓글순'],
      reportData: [
        {
          title: '상명대 학생들에 대한 고찰',
          likes: 14423,
          comments: 14423,
          surveyor: '상명대학교',
          icon: 'mdi-account-circle'
        },
        {
          title: '대학생 탐구 리포트',
          likes: 13211,
          comments: 9654,
          surveyor: '상명대학교',
          icon: 'mdi-account-circle'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('setPageTitle', '리포트')
  }
}
</script>

<style scoped>
.wrapper {
  margin: auto;
  padding-top: 2px;
  max-width: 500px;
  height: 94%;
  background-color: #eeeeee;
}
.inner-wrapper {
  margin-top: 10px;
}
.search {
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 10px 0;
  background-color: white;
}
.content {
  margin-top: 10px;
  background-color: white;
}
.thumbnail {
  align-self: center;
  height: 70px;
  background-color: #eeeeee;
  border-radius: 10px;
}
.report-title {
  font-size: 14px;
  font-weight: bold;
}
.report-stat {
  margin-top: 30px;
  font-size: 12px;
}
.report-likes {
  display: inline;
}
.report-comments {
  display: inline;
}
.report-surveyor {
  display: inline;
  float: right;
}
</style>
