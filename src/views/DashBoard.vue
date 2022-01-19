<template>
  <div>
    <h1>Hello, {{ currentUser.name }}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    currentUser: function () {
      return this.$store.getters.currentUser
    }
  }
}
</script>
