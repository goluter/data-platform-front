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
<<<<<<< HEAD:pages/FAQpage.vue
import FAQdata from '../assets/data/FAQdata.js'
=======
import FAQdata from 'assets/data/FAQdata.js'
>>>>>>> 84865ac85ba501bb76e6f6a714840b77730b1f5e:pages/admin/faq.vue
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

