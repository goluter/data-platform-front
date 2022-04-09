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

<script type="module">
import FAQdata from '../../assets/data/FaqData'

export default {
  name: 'Faq',
  layout: 'Admin',
  data() {
    return {
      FAQdata,
      layout: 'admin',
    }
  },
}
</script>
