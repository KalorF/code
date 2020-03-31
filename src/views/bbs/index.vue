<template>
  <div class="bbsPage">
    <div class="bbsHead">
      <span class="sp" @click="handleSel(0)" :class="{ active: activeIndex === 0 }">大世界</span>
      <span> | </span>
      <span class="sp" @click="handleSel(1)" :class="{ active: activeIndex === 1 }">问答区</span>
      <el-dropdown split-button size="medium" class="pu" type="primary" @command="handleCommand">
        发布
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='0'>发布大世界</el-dropdown-item>
          <el-dropdown-item command='1'>发布问答</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div v-for="i in 10" :key="i" class="bbsItem" @click="viewDetail(i)">
      <div class="author">
        <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="头像">
        <span>发布者：321321</span>
        <span>发布时间：2020-03-25</span>
      </div>
      <!-- 标题 -->
      <h3>饭店附近哦说的就是浪费那份孤苦伶仃反倒是反攻倒算方法地方</h3>
      <!-- 点赞以及评论 -->
      <div class="footer">
        <div>
          <i class="el-icon-thumb"></i>
          123
        </div>
        <div>
          <i class="el-icon-chat-dot-round"></i>
          4324
        </div>
      </div>
    </div>
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
    <!-- 发布弹窗 -->
    <el-dialog :title="type === 0 ? '发布大世界' : '发布问答'" :visible.sync="pubDialog" width="40%" :before-close="handleClose" :modal='false'>
      <el-form ref="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea"  :rows="6" v-model="desc"></el-input>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="handlePub">发布</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeIndex: 0,
      type: 0, // 0代表大世界，1代表问答
      pubDialog: false,
      title: '',
      desc: '',
      currentPage: 0,
      pageSize: 10,
      total: 100
    }
  },
  mounted () {
    // 初始化时默认发起一个获取数据请求
    this.getData()
  },
  methods: {
    handleSel (type) {
      this.activeIndex = type
      this.type = type
      // 发起一个获取数据api
      // this.getData()
    },
    handleClose () {
      this.pubDialog = false
      this.type = 0
      this.title = ''
      this.desc = ''
    },
    handleCommand (command) {
      this.pubDialog = true
      this.type = Number(command)
    },
    // 发布操作
    handlePub () {
      // 带上type区分是大世界还是问答
    },
    // 比如说传id
    viewDetail (id) {
      const { href } = this.$router.resolve({
        path: '/bbsDetial',
        query: { id: id, type: this.type }
      })
      window.open(href, '_blank')
    },
    getData () {

    }
  }
}
</script>

<style lang="scss" scoped>
.bbsPage {
  position: absolute;
  margin-top: 80px;
  background: #feffff;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  z-index: -1;
  .paging {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .bbsHead {
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid #f5f5f5;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    .pu {
      margin-left: auto;
    }
    .sp {
      font-size: 16px;
      margin-right: 10px;
      &.active {
        color: #409DFF;
      }
    }
    .sp:nth-child(3) {
      margin-left: 10px;
    }
  }

  .bbsItem {
    background: #feffff;
    padding: 10px 30px;
    border-bottom: 1px solid #f5f5f5;
    .author {
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 13px;
      margin-bottom: 4px;
      img {
        height: 28px;
        width: 28px;
        object-fit: cover;
      }
      span:nth-child(2) {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }

  .bbsItem:hover {
    background: #FCFCFC;
  }

  .footer {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    div:nth-child(1) {
      margin-right: 10px;
    }
  }
}
</style>
