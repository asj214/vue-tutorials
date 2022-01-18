<template>
  <el-form status-icon label-width="120px" size="mini">
    <el-form-item label="제목">
      <el-input v-model="post.title"></el-input>
    </el-form-item>
    <el-form-item label="본문">
      <el-input type="textarea" v-model="post.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="$router.go(-1)">목록</el-button>
      <el-button type="primary" @click="handleSubmit">작성</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.post)
    }
  }
}
</script>
