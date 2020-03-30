<template>
  <div class="homePage">
    <!-- 按钮 -->
    <div class="title">交易与服务流程</div>
    <div class="odd">
      <div class="left">
        <div>// 01</div>
        <h1>发布需求</h1>
        <div class="p">覆盖 App、Web、HTML5、微信公众号等常用功能。</div>
      </div>
      <img src="https://codemart.com/images/index/index-content-slice-1@2x.png" alt="">
    </div>
    <div class="even">
      <img src="https://codemart.com/images/index/index-content-slice-2@2x-new.png" alt="">
      <div class="right">
        <div>// 02</div>
        <h1>确认合作</h1>
        <div class="p">
          海量开发者，技能多样化，<br>
          实现技能需求匹配，<br>
          确认合作开发者。
        </div>
      </div>
    </div>
    <div class="odd">
      <div class="left">
        <div>// 03</div>
        <h1>无忧交付</h1>
        <div class="p">
          云计算软件协作工具，<br>
          提供代码托管、文档管理、代码质量报告等，<br>
          让项目过程的每一步都有迹可循，随时监管。
        </div>
      </div>
      <img src="https://codemart.com/images/index/index-content-slice-4@2x.png" alt="">
    </div>
    <div class="even">
      <img src="https://codemart.com/images/index/index-content-slice-5@2x.png" alt="">
      <div class="right">
        <div>// 04</div>
        <h1>无忧质保</h1>
        <div class="p">
          项目质保期内，开发者义务修复BUG及调优，<br>
          保障运营无忧。
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 引入请求函数
import requestApi from '@/request/request'

export default {
  data () {
    return {
      listData: []
    }
  },

  methods: {
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
  padding: 30px;
  margin-bottom: 10px;
  z-index: -1;
  .title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
  }
  .odd {
    display: flex;
    align-items: center;
    padding-left: 40px;
    height: 300px;
    border-bottom: 1px solid #eeeeee;
    .left {
      width: 50%;
      div {
        color: #2D3238;
        margin-bottom: 10px;
      }
      .p {
        color: #979FA8;
        font-size: 13px;
        margin-top: 10px;
      }
    }
    img {
      width: 50%;
      object-fit: contain;
    }
  }
  .even {
    display: flex;
    align-items: center;
    padding-left: 40px;
    height: 300px;
    border-bottom: 1px solid #eeeeee;
    .right {
      width: 50%;
      div {
        color: #2D3238;
        margin-bottom: 10px;
      }
      .p {
        color: #979FA8;
        font-size: 13px;
        margin-top: 10px;
      }
    }
    img {
      width: 50%;
      object-fit: contain;
    }
  }
}
</style>
