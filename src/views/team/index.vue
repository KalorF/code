<template>
  <div class="teamPage">
     <!-- 选择区 -->
    <div class="selBox">
      <div class="selItem" v-for="(item, index) in selList" :key="index">
        <div class="title">{{ item.title }}：</div>
        <div class="sel">
          <div v-for="(ite,idx) in item.items" :key="idx" :class="{active: item.type.data === ite.type}" @click="sel(item, index, ite)">{{ ite.text }}</div>
        </div>
      </div>
    </div>
    <div class="teamBox">
      <div class="teamItem" v-for="i in 10" :key="i">
        <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="头像">
        <div class="msg">
          <div class="name">范德萨发颠倒是非</div>
          <div class="ce">
            <div class="item"><span>招聘岗位：</span><span>应用开发</span></div>
            <div class="item"><span>薪资：</span><span>3000</span></div>
            <div class="item"><span>现有人数：</span><span>5人</span></div>
          </div>
          <div class="desc">
            <div>岗位介绍：</div>
            <div>建国饭店给你快乐的菲拉格慕兰桂坊喀麦隆队福建省浪费国家的立法感觉到了记得给客服廉洁奉公发的肌肤抵抗力就犯嘀咕</div>
          </div>
          <div class="desc">
            <div>团队介绍：</div>
            <div>范德萨对方告诉你个大客流高峰你发的老姑娘了疯狂过</div>
          </div>
        </div>
        <div>
          <el-button size="medium" type="primary">申请加入</el-button>
        </div>
      </div>
      <!-- 分页 -->
      <div class="paging">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>

    <!-- 排行榜 -->
    <div class="ranking">
      <div class="title">排行榜</div>
      <div class="box">
        <div class="boxItem" v-for="(item, index) in 10" :key="index">
          <img v-if="index === 0" src="https://codemart.com/images/number/1.png" alt="">
          <img v-if="index === 1" src="https://codemart.com/images/number/2.png" alt="">
          <img v-if="index === 2" src="https://codemart.com/images/number/3.png" alt="">
          <div v-if="index !== 0 && index !== 1 && index !== 2" class="number">{{ index + 1 }}</div>
          <img class="header" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
          <div class="msg">
            <div class="name">跟复古风蛋糕</div>
            <div>参与项目：43</div>
            <div><span>总收入：</span><span>543535</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '',
      currentPage: 0,
      pageSize: 10,
      total: 100,
      selList: [
        {
          title: '招聘岗位',
          type: { type: 'roleTypeId', data: '' },
          items: [
            { text: '全部', type: '' },
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
      ]
    }
  },
  methods: {
    sel (item, index, ite) {
      this[item.type.type] = ite.type
      this.selList[index].type.data = ite.type
      // 每次选择的时候发起一个请求获取项目列表
    },
    handleCurrentChange (page) {
      this.currentPage = page
      // 发起请求
    }
  }
}
</script>

<style lang="scss" scoped>
.teamPage {
  position: absolute;
  margin-top: 80px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  z-index: -1;
  .paging {
    display: flex;
    justify-content: center;
  }
  .selBox {
    background: #feffff;
    padding: 30px 30px 0;
    .selItem {
      display: flex;
      margin-bottom: 20px;
      padding-bottom: 10px;
      // border-bottom: 1px solid #eeeeee;
      .title {
        width: 10%;
        color: #727f8f;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
      }
      .sel {
        width: 70%;
        div {
          margin-right: 15px;
          cursor: pointer;
          border-radius: 5px;
          display: inline-block;
          color: #273444;
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          margin-bottom: 10px;
        }
        div.active {
          background: #4289dc;
          color: #ffffff;
        }
      }
    }
  }
  .teamBox {
    padding: 10px 30px;
    background: #feffff;
  }
  .teamItem {
    margin-top: 20px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 10px;
    margin-bottom: 15px;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    .msg {
      width: 70%;
      margin-left: 20px;
      .name {
        font-size: 17px;
        margin-bottom: 5px;
      }
      .ce {
        position: relative;
        margin-top: 8px;
        .item {
          display: inline-block;
          margin-right: 20px;
          font-size: 14px;
          span:nth-child(1) {
            color: #727f8f;
          }
          span:nth-child(2) {
            color: #3c4858;
          }
        }
        .item:nth-child(2) > span:nth-child(2) {
          color: #eb4d4b;
        }
      }
      .people {
        font-size: 14px;
        color: #888888;
        margin-bottom: 5px;
      }
      .desc {
        display: inline-flex;
        margin-top: 10px;
        font-size: 14px;
        color: #777777;
        width: 100%;
        div:nth-child(1) {
          height: 20px;
          overflow: hidden;
        }
        div:nth-child(2) {
          width: 80%;
        }
      }
    }
  }
  .ranking {
    padding: 30px;
    .title {
      text-align: center;
      font-size: 25px;
      font-weight: bold;
    }
    .box {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      height: 600px;
      .boxItem {
        height: 110px;
        box-sizing: border-box;
        padding: 20px 40px;
        width: 455px;
        margin: 10px 10px 0px;
        background: #feffff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        img {
          height: 40px;
        }
        .header {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 13px;
        }
        .number {
          font-size: 20px;
          color: #777777;
          width: 35px;
          text-align: center;
        }
        .msg {
          font-size: 15px;
          margin-left: 15px;
        }
        div:nth-child(2), div:nth-child(3) {
          color: #8796A8;
          font-size: 12px;
          margin-top: 5px;
        }
        div:nth-child(3) > span:nth-child(2) {
          color: #FF709F;
        }
      }
    }
  }
}
</style>
