<template>
  <div class="projectPage">
    <!-- 选择区 -->
    <div class="selBox">
      <div class="selItem" v-for="(item, index) in selList" :key="index">
        <div class="title">{{ item.title }}：</div>
        <div class="sel">
          <div v-for="(ite,idx) in item.items" :key="idx" :class="{active: item.type.data === ite.type}" @click="sel(item, index, ite)">{{ ite.text }}</div>
        </div>
      </div>
    </div>
    <!-- 项目聊表区 -->
    <div class="projectBox">
      <div class="header">
        <el-input placeholder="请输入内容" size="medium" style="width: 25%" v-model="keyword" class="input-with-select">
          <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
        </el-input>
        <el-button class="btn" size="medium" type="primary" icon="el-icon-tickets" @click="$router.push('/pub')">发布项目</el-button>
      </div>
      <div class="projectItem" v-for="i in 10" :key="i" @click="viewDetail(i)">
        <img src="https://dn-coding-net-production-pp.codehub.cn/5f67d712-348e-435c-9599-d9cd292267bc.png" alt="">
        <div class="msg">
          <div class="tl">范德萨范德萨发的<span>招募中</span></div>
          <div class="ce">
            <div class="item"><span>招募：</span><span>应用开发</span></div>
            <div class="item"><span>类型：</span><span>其他</span></div>
            <div class="item"><span>周期：</span><span>20天</span></div>
          </div>
          <div class="time">发布时间：2020-03-29 12:22</div>
        </div>
        <div class="price">¥3000</div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '',
      status: '',
      roleTypeId: '',
      keyword: '',
      currentPage: 0,
      pageSize: 10,
      total: 100,
      selList: [
        {
          title: '项目类型',
          type: { type: 'type', data: '' },
          items: [
            { text: '全部', type: '' },
            { text: 'Web 网站开发', type: 'WEB' },
            { text: 'APP 开发', type: 'APP' },
            { text: '微信公众号', type: 'WECHAT' },
            { text: 'HTML5应用', type: 'HTML5' },
            { text: '小程序', type: 'WEAPP' },
            { text: '其他', type: 'OTHER' }
          ]
        },
        {
          title: '项目进度',
          type: { type: 'status', data: '' },
          items: [
            { text: '全部', type: '' },
            { text: '招募中', type: 1 },
            { text: '开发中', type: 2 },
            { text: '已结束', type: 3 }
          ]
        },
        {
          title: '项目角色',
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
    search () {
      // 发起请求，带上keyword参数
    },
    handleCurrentChange (page) {
      this.currentPage = page
      // 发起请求
    },
    viewDetail (id) {
      const { href } = this.$router.resolve({
        path: '/projectDetail',
        query: { id: id }
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.projectPage {
  position: absolute;
  margin-top: 80px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  z-index: -1;
  .paging {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .selBox {
    background: #feffff;
    padding: 35px 40px 10px;
    .selItem {
      display: flex;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eeeeee;
      .title {
        width: 14%;
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
    .selItem:last-child {
      border: 0;
      margin-bottom: 0;
    }
  }
  .projectBox {
    margin-top: 15px;
    padding: 20px 30px;
    background: #feffff;
    .header {
      display: flex;
      border-bottom: 1px solid #eff2f7;
      padding-bottom: 15px;
      .btn {
        margin-left: auto;
      }
    }
    .projectItem {
      padding: 20px 30px;
      display: flex;
      border-bottom: 1px solid #eff2f7;
      img {
        height: 80px;
        width: 150px;
        object-fit: cover;
      }
      .msg {
        width: 80%;
        margin-left: 20px;
        .tl {
          font-size: 17px;
          span {
            display: inline-block;
            font-size: 14px;
            margin-left: 10px;
            color: #61c279;
          }
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
        }
        .time {
          margin-top: 8px;
          font-size: 13px;
          color: #8796a8;
        }
      }
      .price {
        color: #f75288;
      }
    }
    .projectItem:hover {
      background: #FCFCFC;
    }
  }
}
</style>
