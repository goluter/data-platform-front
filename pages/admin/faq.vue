<template>
  <div>
    <h2>{{ FAQdata[$route.params.id].title }}</h2>
    <div style="font-size: large">
      Q: {{ FAQdata[$route.params.id].question }}
    </div>
    <div style="font-size: large">
      A: {{ FAQdata[$route.params.id].answer }}
    </div>
  </div>
</template>

<script>
import FAQdata from 'assets/data/FAQdata.js'
export default {
  name: 'app',
  layout: 'admin',
  data() {
    return {
      FAQdata: FAQdata,
    }
  },
}
</script>

