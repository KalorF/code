<template>
  <div class="detailpPage">
    <!-- 头部内容 -->
    <div class="author">
      <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
      <div class="nameAndDate">
        <h5>鼓风机</h5>
        <div>2020-03-25</div>
      </div>
      <!-- 点赞，不要可以去掉 -->
      <div class="givelike">
        <i class="el-icon-thumb"></i>
        123
      </div>
    </div>
    <!-- 标题 -->
    <h2>反倒是反倒是广告烦恼的时刻烦恼是封疆大吏方面受到了法律</h2>
    <!-- 内容 -->
    <div class="content">
      今个哦十几分分手两年发电量是负能量负能量释放，每次v下，开发大脑苏里科夫哪里开始粉嫩的粉色控的烦恼开发浓缩咖啡
    </div>
    <!-- 评论区 -->
    <div class="ccomments">
      <div class="title">· 评论</div>
      <!-- 自己评论 -->
      <div class="myCmtBox">
        <div class="ctrl">
          <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="头像">
          <el-input size="medium" class="input" @focus="myFocus" @blur="myBlur" v-model="mycmtvalue" placeholder="输入评论..."></el-input>
        </div>
        <el-button class="btn" v-if="showCmtBtn" size="small" type="primary">评论</el-button>
      </div>
      <!-- 用户评论 -->
      <div class="otherCmt">
        <div class="item" v-for="(item, index) in cmtData" :key="index">
          <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
          <div class="otherMsg">
            <h5>放大镜哦</h5>
            <div class="content">评论内容55555555</div>
            <div class="footer">
              <div>2020-03-25</div>
              <div @click="handleReply(item, index)" class="reply"><i class="el-icon-chat-round"></i>回复</div>
            </div>
            <div class="replyToBox" v-if="item.status">
              <el-input size="medium" class="input" v-model="othercmtvalue"></el-input>
              <el-button size="mini" type="primary">回复</el-button>
            </div>
            <!-- 其它回复 -->
            <div class="otherReply" v-for="(ite, index) in item.children" :key="index">
              <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="">
              <div class="other">
                <h5>范德萨发大发</h5>
                <div class="content">哈哈哈哈</div>
                <div class="footer">
                  <div>2020-03-25</div>
                  <div @click="handleOtherReply(item, ite, index)" class="reply"><i class="el-icon-chat-round"></i>回复</div>
                </div>
                <div class="replyToBox" v-if="ite.status">
                  <el-input size="medium" class="input" v-model="othercmtvalue"></el-input>
                  <el-button size="mini" type="primary">回复</el-button>
                </div>
              </div>
            </div>
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
      mycmtvalue: '',
      othercmtvalue: '',
      showCmtBtn: false,
      cmtData: [{
        status: false,
        text: '哈哈哈',
        children: [{ status: false, text: 'sdads' }, { status: false, text: 'sdads' }]
      },
      {
        status: false,
        text: '哈哈哈',
        children: [{ status: false, text: 'sdads' }]
      },
      {
        status: false,
        text: '哈哈哈',
        children: []
      }
      ]
    }
  },
  methods: {
    // 聚焦的时候展示评论按钮
    myFocus () {
      this.showCmtBtn = true
    },
    // 失去焦点触发
    myBlur () {
      this.showCmtBtn = false
    },
    handleReply (item, index) {
      this.cmtData[index].status = !this.cmtData[index].status
    },
    handleOtherReply (item, ite, index) {
      this.cmtData[this.cmtData.indexOf(item)].children[index].status = !this.cmtData[this.cmtData.indexOf(item)].children[index].status
    }
  }
}
</script>

<style lang="scss" scoped>
.detailpPage{
  position: absolute;
  margin-top: 80px;
  background: #feffff;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  padding: 15px 20px;
  z-index: -1;
  .author {
    display: flex;
    height: 50px;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    .givelike {
      margin-left: auto;
    }
    .nameAndDate {
      margin-left: 10px;
      h5 {
        font-size: 17px;
      }
      div {
        font-size: 13px;
        color: #909090;
      }
    }
  }

  .content {
    margin-top: 10px;
    font-size: 14px;
  }

  .ccomments {
    margin-top: 20px;
    .title {
      font-size: 18px;
      color: #666666;
    }
    .myCmtBox {
      background: #FAFBFC;
      padding: 10px 20px;
      overflow: hidden;
      .ctrl {
        display: flex;
        align-items: center;
        img {
          width: 35px;
          height: 35px;
          object-fit: cover;
          border-radius: 50%;
        }
        .input {
          margin-left: 15px;
        }
      }
      .btn {
        margin-top: 12px;
       float: right;
      }
    }
  }

  .otherCmt {
    margin-top: 20px;
    padding-left: 70px;
    background: #ffffff;
    .item {
      display: flex;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #F1F1F1;
      img {
        height: 30px;
        width: 30px;
        object-fit: cover;
        border-radius: 50%;
      }
      .otherMsg {
        font-size: 14px;
        margin-left: 13px;
        width: 100%;
        .content {
          font-size: 13px;
        }
        .footer {
          margin-top: 20px;
          display: flex;
          color: #8A93A0;
          .reply {
            cursor: pointer;
            margin-left: auto;
          }
        }
        .replyToBox {
          background: #FAFBFC;
          padding: 10px 20px;
          overflow: hidden;
          margin-top: 8px;
          margin-bottom: 10px;
          .input {
            margin-bottom: 10px;
          }
        }
        .otherReply {
          background: #FAFBFC;
          display: flex;
          padding: 10px;
          .other {
            margin-left: 10px;
            width: 100%;
            border-bottom: 1px solid #efefef;
            padding-bottom: 5px;
            .replyToBox {
              background: #ffffff;
              border: 1px solid #F1F1F1;
            }
          }
        }
      }
    }
  }
}
</style>
