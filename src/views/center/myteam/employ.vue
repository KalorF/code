<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true" size="medium">发布招聘信息</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="招聘标题" width="200"></el-table-column>
      <el-table-column prop="role" label="招聘岗位" width="120"></el-table-column>
      <el-table-column prop="price" label="岗位薪资" width="120"></el-table-column>
      <el-table-column prop="desc" label="岗位介绍" width="350"></el-table-column>
      <el-table-column prop="time" label="发布时间" width="150"></el-table-column>
       <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="handleBack(scope.row)"
            type="info"
            size="small">
            撤回
          </el-button>
          <el-button
            @click.native.prevent="handleDel(scope.row)"
            type="danger"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="评价" :visible.sync="dialogVisible" width="40%" :before-close="handleClose" :modal="false">
      <el-form ref="form" label-width="80px">
        <el-form-item label="招聘标题">
          <el-input v-model="title" placeholder="输入招聘标题"></el-input>
        </el-form-item>
        <el-form-item label="岗位薪资">
          <el-input v-model="price" placeholder="输入岗位薪资"></el-input>
        </el-form-item>
        <el-form-item label="招聘岗位">
          <el-select v-model="role" placeholder="请选择">
            <el-option
              v-for="(item, index) in roleOptions"
              :key="index"
              :label="item.text"
              :value="item.type">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="岗位描述">
          <el-input type="textarea" placeholder="输入岗位描述" :rows="5" v-model="desc"></el-input>
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
export default {
  data () {
    return {
      eyId: '',
      dialogVisible: false,
      title: '',
      role: '',
      desc: '',
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
      ],
      tableData: [
        {
          title: '广泛大锅饭的风格',
          role: '应用开发',
          price: 2000,
          desc: '符合规范和法规和规范和共和国回复光滑',
          time: '2020-03-31 12:00'
        }
      ]
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    handleConfirm () {
      // 确认操作
    },
    handleBack (id) {

    },
    handleDel (id) {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
