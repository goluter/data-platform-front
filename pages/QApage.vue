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
<<<<<<< HEAD:pages/QApage.vue
import QAdata from '../assets/data/QAdata.js'
=======
import QAdata from 'assets/data/QAdata.js'
>>>>>>> 84865ac85ba501bb76e6f6a714840b77730b1f5e:pages/admin/qa.vue
export default {
  name: 'app',
  layout: 'admin',
  data() {
    return {
      QAdata: QAdata,
    }
  },
}
</script>

<style></style>
