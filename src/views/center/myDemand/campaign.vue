<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <h3 class="h3">项目描述</h3>
          <div class="div">{{ props.row.desc }}</div>
          <h3 class="h3">项目描述</h3>
          <div class="div">{{ props.row.askFor }}</div>
          <h3 class="h3">竞选者</h3>
          <div class="item">
            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
            <div class="name">哈哈哈哈</div>
            <div class="desc">介绍：回国后发个合法合规</div>
            <div class="type">个人开发者</div>
            <el-button size="mini" @click="viewEval('id')">查看评价</el-button>
            <el-button size="mini" type="success">授予项目</el-button>
          </div>
          <div class="item">
            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
            <div class="name">哈哈哈哈</div>
            <div class="desc">介绍：回国后发个合法合规</div>
            <div class="type">团队开发者</div>
            <el-button size="mini" @click="viewEval(xx)">查看评价</el-button>
            <el-button size="mini" type="success" @click="giveProject(xxx,xx)">授予项目</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="项目名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="项目类型"
        prop="type">
      </el-table-column>
      <el-table-column
        label="项目角色"
        prop="role">
      </el-table-column>
      <el-table-column
        label="项目金额"
        prop="money">
      </el-table-column>
      <el-table-column
        label="项目周期"
        prop="time">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="createTime">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除项目</el-button>
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
      desc: '',
      projectId: '',
      evalList: ['retort范德萨的范德萨发', '规范地方更丰富更多'],
      tableData: [
        {
          id: 1,
          name: '范德萨范德萨发',
          type: 'web网站',
          role: '前端开发',
          money: '3000',
          time: '32132',
          desc: '范德萨发的方式对法国代购的广告费',
          askFor: '好过分好过分个韩国发货',
          createTime: '2020-03-30 12:00'
        },
        {
          id: 2,
          name: '高富帅广泛大锅饭',
          type: '小程序',
          role: '后段开发',
          money: '3000',
          time: '32132',
          desc: '范德萨发的方式对法国代购的广告费',
          askFor: '好过分好过分个韩国发货',
          createTime: '2020-03-30 12:00'
        }
      ]
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
      this.desc = ''
    },
    viewEval (id) {
      // 根据id发起请求获取数据
      // this.evalList = xxxxxx
      this.dialogVisible = true
    },
    giveProject (xxx, xx) {
      // 项目id以及要给的人的id
    },
    // 评价项目操作
    handleEval (item) {
      this.dialogVisible = true
      this.projectId = item.id
    }
  }
}
</script>

<style lang="scss" scoped>
.h3 {
  margin-bottom: 5px;
}
.div {
  font-size: 14px;
  margin-bottom: 10px;
}
.demander {
  margin-top: 10px;
}
.item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  .name {
    margin-left: 20px;
    width: 15%;
  }
  .desc {
    margin-left: 20px;
    width: 40%;
  }
  .type {
    margin-left: 10px;
    width: 10%;
  }
}
.eval {
  display: flex;
  div:nth-child(1) {
    width: 10%;
    margin-bottom: 10px;
  }
}
</style>
