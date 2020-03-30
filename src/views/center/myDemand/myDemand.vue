<template>
  <div class="mydemandPage">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="竞选中"  name="first"><campaign /></el-tab-pane>
      <el-tab-pane label="进行中" lazy name="second"><ongoing /></el-tab-pane>
      <el-tab-pane label="已完成" lazy name="third"><finish /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import campaign from './campaign'
import ongoing from './ongoing'
import finish from './finish'

export default {
  components: { campaign, ongoing, finish },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.mydemandPage {
  padding: 20px 20px 10px;
}
</style>
