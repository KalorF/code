<template>
  <div class="mydemandPage">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="未删除"  name="first"><noDel /></el-tab-pane>
      <el-tab-pane label="已删除" lazy  name="scond"><hadDel /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import noDel from './noDel'
import hadDel from './hadDel'

export default {
  components: { noDel, hadDel },
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
