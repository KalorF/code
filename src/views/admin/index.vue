<template>
  <div class="centerPage">
    <div class="header">后台管理</div>
    <div class="body">
      <div class="left">
        <div class="item" v-for="(item, index) in mysel" :key="index" @click="sel(index)" :class="{active: activeIndex === index}">{{ item }}</div>
      </div>
      <div class="right">
        <developer v-if="activeIndex === 0" />
        <demand v-if="activeIndex === 1" />
        <project v-if="activeIndex === 2" />
        <big  v-if="activeIndex === 3"/>
        <ask  v-if="activeIndex === 4"/>
      </div>
    </div>
  </div>
</template>

<script>
import ask from './ask'
import big from './big'
import developer from './developer'
import demand from './demand'
import project from './project'

export default {
  components: { ask, big, developer, demand, project },
  data () {
    return {
      activeIndex: 0,
      mysel: ['开发者管理', '需求方管理', '项目管理', '大世界管理', '问答管理'],
      demandsel: ['个人信息', '我的大世界', '我的问答', '我的需求']
    }
  },
  methods: {
    sel (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.centerPage {
  background: #feffff;
  position:fixed;
  width:100%;
  height:100%;
  z-index: 3;
  .header {
    border: 1px solid #eeeeee;
    height: 60px;
    padding-left: 20px;
    color: #409DFF;
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
    position:absolute;
    width: 100%;
  }
  .body {
    margin-top: 60px;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .left {
      border-right: 1px solid #eeeeee;
      width: 15%;
      height: 100%;
      overflow: auto;
      padding-top: 10px;
      padding-bottom: 30px;
      .item {
        padding-left: 30px;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        text-align: left;
      }
      .item:hover {
        background: #fafafa;
        color: #409DFF;
      }
      .active {
        color: #1A85FF;
      }
    }
    .right {
      overflow: auto;
      height: 100%;
      width: 85%;
    }
  }
}
</style>
