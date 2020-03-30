<template>
  <div class="centerPage">
    <div class="header">个人中心</div>
    <div class="body">
      <div class="left" v-if="$route.query.type == 1">
        <div class="item" v-for="(item, index) in mysel" :key="index" @click="sel(index)" :class="{active: activeIndex === index}">{{ item }}</div>
      </div>
      <div class="left" v-if="$route.query.type == 2">
        <div class="item" v-for="(item, index) in demandsel" :key="index" @click="sel(index)" :class="{active: activeIndex === index}">{{ item }}</div>
      </div>
      <div class="right" v-if="$route.query.type == 1">
        <myMsg v-if="activeIndex === 0" />
        <mybigWord v-if="activeIndex === 1" />
        <myask v-if="activeIndex === 2" />
        <myProject v-if="activeIndex === 3" />
        <myTeam v-if="activeIndex === 4" />
      </div>
      <div class="right" v-if="$route.query.type == 2">
        <myMsg v-if="activeIndex === 0" />
        <mybigWord v-if="activeIndex === 1" />
        <myask v-if="activeIndex === 2" />
        <myDeamand v-if="activeIndex === 3" />
      </div>
    </div>
  </div>
</template>

<script>
import myMsg from './myMsg'
import myTeam from './myteam/myTeam'
import myProject from './myProject'
import mybigWord from './mybigWorld'
import myask from './myask'
import myDeamand from './myDemand/myDemand'

export default {
  components: { myMsg, myTeam, myProject, mybigWord, myask, myDeamand },
  data () {
    return {
      activeIndex: 0,
      mysel: ['个人信息', '我的大世界', '我的问答', '我的项目', '我的团队'],
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
