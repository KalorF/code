<template>
  <div class="detailPage">
    <div class="headerContent">
      <div class="title">范德萨发到了是非得失</div>
      <div class="type">应用开发</div>
      <div class="ce">
        <div class="item"><span>金额：</span><span>¥3000</span></div>
        <div class="item"><span>类型：</span><span>其他</span></div>
        <div class="item"><span>周期：</span><span>7天</span></div>
        <div class="item"><span>竞选人数：</span><span>6人</span></div>
        <div class="item"><span>竞选团队：</span><span>3支</span></div>
      </div>
      <div class="status">招募中</div>
      <el-dropdown split-button size="medium" class="pu" type="primary" @command="handleCommand">
        参与竞选
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='0'>个人参与</el-dropdown-item>
          <el-dropdown-item command='1'>团队参与</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="contentBox">
      <h2>项目描述</h2>
      <div class="content">范德萨范德萨的范德萨发的</div>
      <h2>项目要求</h2>
      <div class="content">范德萨发的地方是对方</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: ''
    }
  },
  methods: {
    handleCommand (type) {
      // 判断是个人参与还是团队参与 0是个人 1是团队
      // 参与成功后调用
      // this.$message({ type: 'success', message: '参与成功' })
    }
  }
}
</script>

<style lang="scss" scoped>
.detailPage {
  position: absolute;
  margin-top: 80px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  z-index: -1;
  .headerContent {
    padding: 20px;
    position: relative;
    background: #F7FAFC;
    border-bottom: 1px solid #eeeeee;
    .title {
      font-weight: bold;
      font-size: 19px;
    }
    .type {
      font-size: 13px;
      margin-top: 10px;
    }
    .ce {
      position: relative;
      margin-top: 8px;
      .item {
        display: inline-block;
        margin-right: 20px;
        font-size: 14px;
        span:nth-child(1) {
          color: #727f8f;
        }
        span:nth-child(2) {
          color: #3c4858;
        }
      }
    }
    .status {
      color: #61c279;
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .pu {
      position: absolute;
      right: 20px;
      bottom: 20px;
    }
  }
  .contentBox {
    background: #feffff;
    padding: 20px 30px;
    .content {
      margin-top: 10px;
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>
