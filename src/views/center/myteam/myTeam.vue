<template>
  <div class="myTeamPage">
    <el-button size="small" type="primary" @click="handleCreate">创建团队</el-button>
    <el-button size="small" type="warning">解散团队</el-button>
    <div class="msg">
      <div class="one">
        <span>头像：</span>
        <img :src="teamInfo.imgUrl" alt="">
        <div class="item">
          <span>团队名：</span>
          <span>{{ teamInfo.name }}</span>
        </div>
        <el-button size="small" @click="edit">编辑</el-button>
      </div>
      <div class="two">
        <div>个人介绍：</div>
        <div>{{ teamInfo.desc }}</div>
      </div>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="团队成员"  name="first"><members /></el-tab-pane>
      <el-tab-pane label="团队项目" lazy name="second"><project /></el-tab-pane>
    </el-tabs>

    <!-- 弹窗 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" :modal="false">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="头像">
          <div class="input">
            <img :src="form.imgUrl" alt="">
            <input type="file" accept="image/*" @change="upload">
          </div>
        </el-form-item>
        <el-form-item label="团队名">
          <el-input v-model="form.name" placeholder="输入手机"></el-input>
        </el-form-item>
        <el-form-item label="团队介绍">
          <el-input type="textarea" placeholder="输入简介" :rows="5" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleConfirm">确认</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios' // 对接的时候打开
import members from './members'
import project from './project'

export default {
  components: { members, project },
  data () {
    return {
      title: '编辑团队信息',
      activeName: 'first',
      dialogVisible: false,
      teamInfo: {
        imgUrl: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg',
        name: '范德萨发的',
        desc: '哈哈哈哈哈哈'
      },
      form: {
        name: '',
        desc: '',
        imgUrl: ''
      }
    }
  },
  methods: {
    handleCreate () {
      // 操作千判断是否有团队
      this.title = '创建团队'
      this.dialogVisible = true
    },
    edit () {
      this.title = '编辑团队信息'
      this.form.name = this.teamInfo.name
      this.form.desc = this.teamInfo.desc
      this.form.imgUrl = this.teamInfo.imgUrl
      this.dialogVisible = true
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
    handleClose () {
      this.dialogVisible = false
      this.form.name = ''
      this.form.desc = ''
      this.form.imgUrl = ''
    },
    handleConfirm () {
      if (this.title === '创建团队') {
        // 创建团队api
      } else {
        // 编辑api
      }
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.myTeamPage {
  padding: 20px 20px 10px;
  .msg {
    position: relative;
    margin-bottom: 10px;
    margin-top: 10px;
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
      // border-bottom: 1px solid #eeeeee;
      div:nth-child(2) {
        width: 60%;
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
