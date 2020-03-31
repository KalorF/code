<template>
  <div class="askpage">
    <div class="box" v-for="i in 10" :key="i">
      <div class="bbsItem" @click="viewDetail(i)">
        <div class="author">
          <span>发布时间：2020-03-25 22:00</span>
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
      <div>
        <el-button @click="handleDel(xxx)" icon="el-icon-delete" circle></el-button>
      </div>
    </div>
    <el-pagination
      style="margin-top: 10px"
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 0,
      pageSize: 10,
      total: 100,
      list: []
    }
  },
  methods: {
    viewDetail (id) {
      const { href } = this.$router.resolve({
        path: '/bbsDetial',
        query: { id: id }
      })
      window.open(href, '_blank')
    },
    handleCurrentChange (page) {
      this.currentPage = page
      // 发起请求
    },
    // 删除操作
    handleDel (xx) {
    }
  }
}
</script>

<style lang="scss" scoped>
.askpage {
  padding: 20px 20px 10px;
  .box {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: 5px 30px;
    background: #feffff;
  }
  .bbsItem {
    width: 90%;
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

  .box:hover {
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
