<template>
  <div class="loginPage">
    <!-- 头部 -->
    <header class="header">
      <div class="title" @click="$router.push('/')">码市</div>
      <div class="other">
        <span>还没有注册账号？</span>
        <button @click="$router.push('/registry')">注册</button>
      </div>
    </header>
    <!-- 登陆表单 -->
    <div class="loginBox">
      <div class="box">
        <div class="tl">登陆</div>
        <el-input v-model="username" size="medium" style="margin-bottom: 20px" placeholder="输入用户名"></el-input>
        <el-input v-model="password" size="medium" type="password" placeholder="输入密码"></el-input>
        <div class="fd" @click="$router.push('/forget')">找回密码</div>
        <el-button type="primary" @click="handleLogin" style="width: 100%;margin-top: 10px">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // 登陆操作
    handleLogin () {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.loginPage {
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
  .loginBox {
    padding-top: 40px;
    display: flex;
    justify-content: center;
    .box {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .tl {
        font-size: 20px;
        margin-bottom: 25px;
      }
      .fd {
        margin-left: auto;
        margin-top: 6px;
        font-size: 13px;
        cursor: default;
      }
    }
  }
}
</style>
