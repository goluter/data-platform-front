<template>
  <div class="wrapper">
    <v-form>
      <v-text-field
          label="검색어를 입력하세요"
          single-line
          clearable
          outlined
          dense
      > </v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "ReportList",
  layout: 'nested',
  data() {
    return {
      reportData: [
        {title: '상명대 학생들에 대한 고찰', likes: 14423, comments: 14423, surveyor: '상명대학교' },
        {title: '대학생 탐구 리포트', likes: 14423, comments: 14423, surveyor: '상명대학교' },
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 10px;
}
</style>