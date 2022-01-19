<template>
  <form>
    <input type="text" v-model="authenticate.email" placeholder="email" />
    <br>
    <input type="password" v-model="authenticate.password" placeholder="password" />
    <br>
    <button type="button" @click="handleSubmit">로그인</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      authenticate: {
        email: "asj214@naver.com",
        password: "rewq1234"
      }
    }
  },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  mounted () {
    console.log(this.isAuthenticated)
  },
  methods: {
    async handleSubmit () {
      const resp = await this.$store.dispatch('LOGIN', { ...this.authenticate })
      if (resp.status === 200) {
        console.log(resp.data)
      }
    }
  }
}
</script>
