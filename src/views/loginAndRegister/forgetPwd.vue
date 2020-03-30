<template>
  <div class="forgetPage">
    <!-- 头部 -->
    <header class="header">
      <div class="title" @click="$router.push('/')">码市</div>
      <div class="other">
        <span>已有账号？</span>
        <button @click="$router.push('/login')">登陆</button>
      </div>
    </header>

    <div class="box">
      <div class="title">通过手机号码重制密码</div>
      <div v-if="!sel" class="msg">
        <div class="qr">
          <el-input v-model="phone" maxlength="11"  placeholder="手机号"></el-input>
          <el-button type="primary" @click="getCode" size="small" :disabled="disabled">{{ btnMsg }}</el-button>
        </div>
        <el-input class="btn" v-model="code" placeholder="输入手机验证码"></el-input>
        <el-input class="btn" v-model="pwd" placeholder="请输入密码"></el-input>
        <el-input class="btn" v-model="againPwd" placeholder="请确认密码"></el-input>
        <el-button @click="handleReset" type="primary" style="width: 100%;margin-top: 10px">重制密码</el-button>
        <div class="back" @click="$router.push('/login')">返回登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: '',
      pwd: '',
      againPwd: '',
      totalTime: 60,
      btnMsg: '获取验证码'
    }
  },
  methods: {
    getCode () {
      const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!reg.test(this.phone)) {
        this.$message('请输入正确手机号')
      } else if (this.phone === '') {
        this.$message('请输入手机号码')
      } else {
        if (this.disabled) return
        // 获取验证码api, 对接的时候记得开
        // this.getCodeApi()
        this.disabled = true
        this.btnMsg = this.totalTIme + 's'
        const timer = setInterval(() => {
          this.totalTIme--
          this.btnMsg = this.totalTIme + 's'
          if (this.totalTIme < 0) {
            clearInterval(timer)
            this.totalTIme = 60
            this.btnMsg = '重新获取验证码'
            this.disabled = false
          }
        }, 1000)
      }
    },
    // 重置操作
    handleReset () {

    }
  }
}
</script>

<style lang="scss" scoped>
.forgetPage {
  background: #feffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
   .header {
    cursor: pointer;
    height: 60px;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 30px;
    display: flex;
    align-items: center;
    .title {
      font-size: 30px;
      color: #409DFF;
    }
    .other {
      margin-left: auto;
      margin-right: 20px;
      font-size: 14px;
      button {
        outline: none;
        height: 30px;
        width: 60px;
        background: #fff;
        border: 1px solid #4289dc;
        color: #4289dc;
      }
      button:hover {
        color:#ffffff;
        background: #4289dc;
      }
    }
  }
  .box {
    position: relative;
    left: 50%;
    width: 25%;
    top: 20px;
    text-align: center;
    transform: translateX(-50%);
    .title {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .msg {
      position: relative;
      .btn {
        margin-bottom: 15px;
      }
      .qr {
        display: flex;
        margin-bottom: 15px;
      }
      .back {
        cursor: pointer;
        margin-top: 12px;
      }
    }
  }
}
</style>
