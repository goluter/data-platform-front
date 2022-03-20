<template>
  <div>
    <h2>{{ QAdata[$route.params.id].title }}</h2>
    <div style="font-size: large">
      Q: {{ QAdata[$route.params.id].question }}
    </div>
    <div style="font-size: large">A: {{ QAdata[$route.params.id].answer }}</div>
  </div>
</template>

<script>
import QAdata from 'assets/data/QAdata.js'
export default {
  name: 'app',
  layout: 'Admin',
  data() {
    return {
      QAdata: QAdata,
    }
  },
}
</script>

<style></style>
