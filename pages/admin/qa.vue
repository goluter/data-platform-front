<template>
  <div>
    <h2>{{ QAdata[$route.params.id].title }}</h2>
    <div style="font-size: large">
      Q: {{ QAdata[$route.params.id].question }}
    </div>
    <div style="font-size: large">A: {{ QAdata[$route.params.id].answer }}</div>
  </div>
</template>

<script type="module">
import QAdata from '../../assets/data/QAdata'
export default {
  name: 'qa',
  layout: 'Admin',
  data() {
    return {
      QAdata,
    }
  },
}
</script>

<style></style>
