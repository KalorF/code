<template>
  <div class="registryPage">
    <!-- 头部 -->
    <header class="header">
      <div class="title" @click="$router.push('/')">码市</div>
      <div class="other">
        <span>已有账号？</span>
        <button @click="$router.push('/login')">登陆</button>
      </div>
    </header>
    <!-- 表单及选择区 -->
    <div class="box">
      <div class="title">{{ title }}</div>
      <div class="one" v-if="sel">
        <div class="item" @click="selidentity('1')">
          <p>开发者</p>
          <p>可报名项目，赚取收益</p>
        </div>
        <div class="item" @click="selidentity('2')">
          <p>需求方</p>
          <p>发布项目，实现需求</p>
        </div>
      </div>
      <div v-if="!sel" class="msg">
        <el-input class="btn" v-model="username" placeholder="输入用户名"></el-input>
        <div class="qr">
          <el-input v-model="phone" maxlength="11"  placeholder="手机号"></el-input>
          <el-button type="primary" @click="getCode" size="small" :disabled="disabled">{{ btnMsg }}</el-button>
        </div>
        <el-input class="btn" v-model="code" placeholder="输入手机验证码"></el-input>
        <el-input class="btn" v-model="pwd" placeholder="请输入密码"></el-input>
        <el-input class="btn" v-model="againPwd" placeholder="请确认密码"></el-input>
        <el-button @click="handleRg" type="primary" style="width: 100%;margin-top: 10px">注册</el-button>
        <div class="back" @click="sel = true, title = '选择身份'">返回选择身份</div>
      </div>
    </div>
  </div>
</template>

<script>
import requestApi from '@/request/request'

export default {
  data () {
    return {
      title: '选择身份',
      sel: true,
      username: '',
      phone: '',
      code: '',
      pwd: '',
      againPwd: '',
      disabled: false,
      totalTIme: 60,
      btnMsg: '发送验证码',
      type: ''
    }
  },
  methods: {
    selidentity (type) {
      // 1为开发者，2为需求方
      this.type = type
      this.title = '注册'
      this.sel = false
    },
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
    getCodeApi () {
      requestApi({
        name: 'xxxx',
        data: { phone: this.phone }
      }).then(res => {
        // 拿到的验证码
      })
    },
    // 注册操作
    handleRg () {

    }
  }
}
</script>

<style lang="scss" scoped>
.registryPage {
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
    .one {
      position: relative;
      .item {
        background: #fff;
        border: 1px solid #dde3eb;
        border-radius: 4px;
        cursor: pointer;
        display: block;
        text-align: left;
        padding: 20px 40px;
        margin-bottom: 20px;
        p:nth-child(1) {
          color: #4289dc;
          font-size: 20px;
        }
        p:nth-child(2) {
          font-size: 13px;
          color: #777777;
        }
      }
      .item:hover {
        border: 1px solid #4289dc;
      }
    }
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
</style>
