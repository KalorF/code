<template>
  <div class="myMsg">
    <div class="msg">
      <div class="one">
        <span>头像：</span>
        <img :src="userInfo.imgUrl" alt="">
        <div class="item">
          <span>用户名：</span>
          <span>{{ userInfo.name }}</span>
        </div>
        <div class="item">
          <span>手机号码：{{ userInfo.phone }}</span>
          <span></span>
        </div>
        <el-button size="small" @click="edit">编辑</el-button>
      </div>
      <div class="two">
        <div>个人介绍：</div>
        <div>{{ userInfo.desc }}</div>
      </div>
    </div>
    <div class="evaluate">
      <div class="header">收到的评价</div>
      <div class="item" v-for="i in 27" :key="i">
        <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
        <div>哈哈哈</div>
        <div>评价：踢啊好的的是否是对方是否</div>
      </div>
    </div>
    <!-- 弹窗 -->
    <el-dialog title="编辑信息" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" :modal="false">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="头像">
          <div class="input">
            <img :src="form.imgUrl" alt="">
            <input type="file" accept="image/*" @change="upload">
          </div>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" placeholder="输入手机"></el-input>
        </el-form-item>
         <el-form-item label="个人介绍">
          <el-input type="textarea" placeholder="输入简介" :rows="5" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleEdit">确认编辑</el-button>
          <el-button @click="handleClose">取消编辑</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
// import axios from 'axios' // 对接的时候打开
export default {
  data () {
    return {
      dialogVisible: false,
      userInfo: {
        imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
        name: '哈哈哈',
        phone: '15677777778',
        desc: '的撒的撒打算'
      },
      form: {
        imgUrl: '',
        name: '',
        phone: '',
        desc: ''
      }
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    edit () {
      this.dialogVisible = true
      this.form.imgUrl = this.userInfo.imgUrl
      this.form.desc = this.userInfo.desc
      this.form.phone = this.userInfo.phone
      this.form.name = this.userInfo.name
    },
    upload (e) {
      // 发起上传请求， 对接的时候打开
      // const url = e.target.files[0]
      // const formData = new FormData()
      // formData.append('file', url)
      // this.axios.post('xxxxx', formData, {
      //   'Content-Type': 'multipart/form-data'
      // }).then(res => {
      // this.form.imgUrl = res.xxx.xxx
      // })
      this.form.imgUrl = URL.createObjectURL(e.target.files[0]) // 对接的时候注释
    },
    // 确认修改操作 发起请求
    handleEdit () {

    },
    // 获取信息接口
    getInfo () {
    }
  }
}
</script>

<style lang="scss" scoped>
.myMsg {
  padding: 20px 20px 10px;
  .msg {
    position: relative;
    .one {
      display: flex;
      align-items: center;
      span {
        color: #666666;
      }
      img {
        height: 60px;
        width: 60px;
        object-fit: cover;
        margin-right: 30px;
      }
      .item {
        margin-right: 30px;
      }
    }
    .two {
      margin-top: 15px;
      font-size: 15px;
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #eeeeee;
      div:nth-child(2) {
        width: 60%;
      }
    }
  }
  .evaluate {
    margin-top: 15px;
    position: relative;
    .header {
      padding-left: 10px;
      border-left: 2px solid #409DFF;
      margin-bottom: 20px;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-top: 1px solid #eeeeee;
      img {
        width: 40px;
        height: 40px;
        object-fit: cover;
      }
      div {
        font-size: 15px;
        margin-left: 15px;
      }
    }
  }
  .input {
    height: 60px;
    width: 60px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    input {
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
  }
}
</style>
