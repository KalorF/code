<template>
  <div class="homePage">
    <!-- 按钮 -->
    <el-button type="primary" @click="dialogVisible = true">点一下弹窗</el-button>

    <!-- 弹窗 -->
    <el-dialog title="提示" :modal="false" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleClose">立即创建</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
// 引入请求函数
import requestApi from '@/request/request'

export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      listData: []
    }
  },

  methods: {
    // 关闭的时候要把什么清空就在下面写
    handleClose () {
      this.dialogVisible = false
    },
    // 定义请求方法
    getdata () {
      requestApi({
        name: 'getdata',
        data: { id: '32132', state: 1 } // 要传给后台的参数
      }).then(res => {
        // 进行赋值 为res.data 或者 res.data.data 看后台怎么写
        // this.listData = res.data.xxxxxx
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.homePage {
  position: absolute;
  margin-top: 80px;
  background: #feffff;
  width: 70%;
  margin-left: 15%;
  padding: 10px;
  margin-bottom: 10px;
  z-index: -1;
}
</style>
