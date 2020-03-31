<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="头像" width="150">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.imgUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="180"></el-table-column>
      <el-table-column prop="desc" label="个人介绍" width="300"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
           <el-button
            @click.native.prevent="handleEval(scope.row)"
            size="small">
            查看评价
          </el-button>
          <el-button
            @click.native.prevent="handleJoin(scope.row)"
            type="success"
            size="small">
            批准加入
          </el-button>
          <el-button
            @click.native.prevent="handleReject(scope.row)"
            type="warning"
            size="small">
            拒绝加入
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="评价" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" :modal="false">
      <div class="eval" v-for="(item, index) in evalList" :key="index">
        <div>评价{{ index + 1 }}：</div>
        <div>{{ item }}</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      evalList: ['retort范德萨的范德萨发', '规范地方更丰富更多'],
      userId: '',
      tableData: [
        {
          imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
          name: '对方是否',
          desc: '太热太热太热也同样入',
          type: '队长',
          phone: 15678787878
        },
        {
          imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
          name: 'fdsd',
          desc: '广泛大锅饭',
          type: '成员',
          phone: 15678787878
        }
      ]
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    // 删除操作 传个id
    handleJoin (item) {

    },
    // 评价项目操作
    handleEval (item) {
      this.dialogVisible = true
      this.userId = item.id
    },
    // 授予队长操作
    handleReject (item) {

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
.eval {
  display: flex;
  div:nth-child(1) {
    width: 10%;
    margin-bottom: 10px;
  }
}
</style>
