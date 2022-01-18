<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-form :inline="true" class="demo-form-inline" size="mini">
          <el-form-item>
            <el-select v-model="search.type">
              <el-option label="title" value="shanghai"></el-option>
              <el-option label="user" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="search.value"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">Find</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-edit"
          @click="$router.push({ name: 'PostCreate' })"
        ></el-button>
      </el-col>
    </el-row>

    <el-table
      :data="rows"
      border
      size="mini"
      style="width: 100%"
    >
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="title" label="title">
        <template slot-scope="scope">
          <el-link
            type="primary"
            :href="`/posts/${scope.row.id}`"
          >{{ scope.row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="user">
        <template slot-scope="scope">{{ scope.row.user.email }}</template>
      </el-table-column>
      <el-table-column label="created_at">
        <template slot-scope="scope">{{ scope.row.created_at | moment('YYYY-MM-DD HH:mm:SS') }}</template>
      </el-table-column>
      <el-table-column label="updated_at">
        <template slot-scope="scope">{{ scope.row.updated_at | moment('YYYY-MM-DD HH:mm:SS') }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: {
        page: 1,
        per_page: 20,
        type: 'title',
        value: ''
      },
      total: 0,
      rows: []
    }
  },
  mounted () {
    this.getRows()
  },
  methods: {
    handleSearch () {
      this.search.page = 1
    },
    async getRows () {
      const params = this.search
      const { status, data } = await this.axios.get('posts', { params })
      if (status === 200) {
        this.total = data.count
        this.rows = data.results
      }
    }
  }
}
</script>
