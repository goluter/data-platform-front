<template>
  <div>
    {{ $route.params.id }}
    asdasd
    {{ data[1].title }}
  </div>
</template>

<script>
import data from '../../assets/NoticeData.js'
export default {
  name: 'app',
  data() {
    return {
      data: data,
    }
  },
}
</script>

<style></style>
