<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="头像" width="150">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.imgUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="desc" label="个人介绍" width="300"></el-table-column>
      <el-table-column prop="type" label="角色" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="handleJoin(scope.row)"
            type="success"
            size="small">
            批准加入
          </el-button>
          <el-button
            @click.native.prevent="handleDel(scope.row)"
            type="danger"
            size="small">
            删除该成员
          </el-button>
          <el-button
            @click.native.prevent="handleCaptain(scope.row)"
            type="primary"
            size="small">
            授予队长
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
          name: '对方是否',
          desc: '太热太热太热也同样入',
          type: '队长'
        },
        {
          imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
          name: 'fdsd',
          desc: '广泛大锅饭',
          type: '成员'
        }
      ]
    }
  },
  methods: {
    // 批准加入
    handleJoin (item) {

    },
    // 删除操作 传个id
    handleDel (item) {

    },
    // 授予队长操作
    handleCaptain (item) {

    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
</style>
