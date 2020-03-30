<template>
  <div class="pubpage">
    <div class="title">发布项目</div>
    <div class="form">
      <el-form ref="form" label-width="80px">
        <el-form-item label="项目封面">
          <div class="file" :style="{backgroundImage: 'url(' + img + ')'}">
            添加封面图
            <input type="file" @change="uploadFile" accept="image/*">
          </div>
        </el-form-item>
        <el-form-item label="项目标题">
          <el-input v-model="title" placeholder="输入项目标题"></el-input>
        </el-form-item>
        <el-form-item label="项目周期">
          <el-input v-model="rang" placeholder="输入项目周期（数字）"></el-input>
        </el-form-item>
        <el-form-item label="项目金额">
          <el-input v-model="price" placeholder="输入项目金额"></el-input>
        </el-form-item>
        <el-form-item label="项目类型">
          <el-select v-model="projectType" placeholder="请选择">
            <el-option
              v-for="(item, index) in typeOptions"
              :key="index"
              :label="item.text"
              :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="招募角色">
          <el-select v-model="role" placeholder="请选择">
            <el-option
              v-for="(item, index) in roleOptions"
              :key="index"
              :label="item.text"
              :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目描述">
          <el-input type="textarea" placeholder="输入项目描述" :rows="6" v-model="desc"></el-input>
        </el-form-item>
        <el-form-item label="项目要求">
          <el-input type="textarea" placeholder="输入项目要求" :rows="6" v-model="askFor"></el-input>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="handlePub">发布项目</el-button>
          <el-button @click="$router.go(-1)">返回项目列表</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios' // 对接的时候打开
export default {
  data () {
    return {
      title: '',
      rang: '',
      price: '',
      askFor: '',
      desc: '',
      img: '',
      projectType: '', // 发布的时候用
      role: '', // 发布的时候用
      typeOptions: [
        { text: 'Web 网站开发', type: 'WEB' },
        { text: 'APP 开发', type: 'APP' },
        { text: '微信公众号', type: 'WECHAT' },
        { text: 'HTML5应用', type: 'HTML5' },
        { text: '小程序', type: 'WEAPP' },
        { text: '其他', type: 'OTHER' }
      ],
      roleOptions: [
        { text: '项目顾问', type: 1 },
        { text: '项目经理', type: 2 },
        { text: '产品经理', type: 3 },
        { text: '设计师', type: 4 },
        { text: 'Android开发', type: 5 },
        { text: 'ISO开发', type: 6 },
        { text: '前端开发', type: 7 },
        { text: '后段开发', type: 8 },
        { text: '全站开发', type: 9 },
        { text: '应用开发', type: 10 },
        { text: '开发团队', type: 11 },
        { text: '测试工程师', type: 12 }
      ]
    }
  },
  methods: {
    uploadFile (e) {
      // 发起上传请求， 对接的时候打开
      // const url = e.target.files[0]
      // const formData = new FormData()
      // formData.append('file', url)
      // this.axios.post('xxxxx', formData, {
      //   'Content-Type': 'multipart/form-data'
      // }).then(res => {
      // this.img = res.xxx.xxx
      // })
      this.img = URL.createObjectURL(e.target.files[0]) // 对接的时候注释
      // 传给后端的图片文件
    },
    handlePub () {}
  }
}
</script>

<style lang="scss" scoped>
.pubpage {
  position: absolute;
  margin-top: 80px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  z-index: -1;
  background: #feffff;
  padding: 20px;
  .title {
    font-size: 18px;
    border-left: 2px solid #409DFF;
    padding-left: 10px;
    color: #555555;
  }
  .form {
    margin-top: 10px;
    .file {
      height: 80px;
      width: 150px;
      text-align: center;
      line-height: 80px;
      color: #777777;
      cursor: pointer;
      background-size: cover;
      border: 1px dotted #dddddd;
      position: relative;
      overflow: hidden;
      input {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
      }
    }
  }
}
</style>
