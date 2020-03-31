<template>
  <div class="page">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <h3 class="h3">项目描述</h3>
          <div class="div">{{ props.row.desc }}</div>
          <h3 class="h3">项目描述</h3>
          <div class="div">{{ props.row.askFor }}</div>
          <el-progress :text-inside="true" :stroke-width="24" :percentage="props.row.percentage" status="success"></el-progress>
          <br>
          <el-button  icon="el-icon-plus" size="mini" @click="increase(props.$index, props.row)"></el-button>
          <div style="margin-top: 10px">
            Coding URL：https://cn.bing.com/
          </div>
          <h3 class="h3" style="margin-top: 10px">需求方</h3>
          <div class="item">
            <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
            <div class="name">哈哈哈哈</div>
            <div class="desc">介绍：回国后发个合法合规</div>
          </div>
          <!-- <div class="demander" v-if="props.row.demanderEval !== ''">
            <h3 class="h3">需求方评价</h3>
            <div class="div">{{ props.row.demanderEval }}</div>
          </div> -->
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
      <el-table-column fixed="right" width="300" label="操作">
        <template slot-scope="scope">
          <el-button  size="mini" @click="handleCode(scope.row)">填写Coding</el-button>
          <el-button type="success" size="mini" @click="handleEval(scope.row)">评价</el-button>
          <el-button type="danger" size="mini" @click="handleDel(scope.row)">删除项目</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="paging">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

    <el-dialog title="评价" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" :modal="false">
      <el-form ref="form" label-width="80px">
        <el-form-item label="评价项目">
          <el-input type="textarea" placeholder="输入评价" :rows="5" v-model="desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleConfirm">确认</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- coding弹窗 -->
    <el-dialog title="评价" :visible.sync="dialogVisibleCode" width="40%" :before-close="handleCloseCode" :modal="false">
      <el-form ref="form" label-width="100px">
        <el-form-item label="URL">
          <el-input type="text" placeholder="输入coding的URL" v-model="codeUrl"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleConfirmCode">确认</el-button>
          <el-button @click="handleCloseCode">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      dialogVisibleCode: false,
      desc: '',
      projectId: '',
      codeUrl: '',
      currentPage: 0,
      pageSize: 10,
      total: 100,
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
          percentage: 0,
          demanderEval: '范德萨范德萨发'
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
          percentage: 10,
          demanderEval: ''
        }
      ]
    }
  },
  methods: {
    increase (index, item) {
      this.tableData[index].percentage += 5
      if (this.tableData[index].percentage > 100) {
        this.tableData[index].percentage = 100
      }
    },
    handleClose () {
      this.dialogVisible = false
      this.desc = ''
    },
    handleCloseCode () {
      this.dialogVisibleCode = false
      this.codeUrl = ''
    },
    handleCode (item) {
      this.dialogVisibleCode = true
      this.projectId = item.id
    },
    // 确认填写codingUrl操作
    handleConfirmCode () {

    },
    // 分页请求
    handleCurrentChange (page) {
      this.currentPage = page
      // 发起请求
    },
    // 确认评价操作
    handleConfirm () {
      // 发起接口
    },
    // 删除项目操作
    handleDel (item) {

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
.page {
  padding: 20px 20px 10px;
}
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
.paging {
  float: right;
  margin-top: 15px;
}
</style>
