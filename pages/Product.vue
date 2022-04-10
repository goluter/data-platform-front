<template>
  <div>
    <h2>{{ Productdata[$route.params.id].reward }}</h2>
    <div style="font-size: large">
      획득날짜: {{ Productdata[$route.params.id].date }}
    </div>
    <div style="font-size: large">
      획득사유: {{ Productdata[$route.params.id].title }}
      {{ Productdata[$route.params.id].img }}
    </div>
    <img :src="Productdata[$route.params.id].img" alt="qr" />
  </div>
</template>

<script>
import Productdata from '../assets/data/Productdata.js'

export default {
  name: 'app',
  data() {
    return {
      Productdata: Productdata,
    }
  },
}
</script>

<style></style>
