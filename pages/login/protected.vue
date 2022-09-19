<template>
  <section class="tmp">
    {{ $auth.user.email }}
  </section>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style scoped>

</style>