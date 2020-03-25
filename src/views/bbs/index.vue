<template>
  <div class="bbsPage">
    <div class="bbsHead">
      <span class="sp" :class="{ active: activeIndex === 0 }">热门</span>
      <span> | </span>
      <span class="sp" :class="{ active: activeIndex === 1 }">最新</span>
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
  </div>
</template>

<script>

export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    // 比如说传id
    viewDetail (id) {
      const { href } = this.$router.resolve({
        path: '/bbsDetial',
        query: { id: id }
      })
      window.open(href, '_blank')
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

  .bbsHead {
    position: relative;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #f5f5f5;
    padding: 10px 30px;
    .sp {
      font-size: 14px;
      &.active {
        color: #409DFF;
      }
    }
  }

  .bbsItem {
    height: 100px;
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
