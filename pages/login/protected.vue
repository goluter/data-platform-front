<template>
  {{ $auth.user.email }}
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style scoped>

</style>