export default {
  filters: {
    defineIsActive (isActive) {
      return (isActive) ? '사용' : '사용안함'
    }
  },
  methods: {
    successMessage (msg) {
      this.$message({ message: msg, type: 'success' })
    },
    errorMessage (msg) {
      this.$message.error(msg)
    },
    commingSoon () {
      this.$alert('준비중입니다.', '메시지')
    }
  }
}
