<template>
  <div class="teamPage">
    <div class="teamItem" v-for="i in 10" :key="i">
      <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="头像">
      <div class="msg">
        <div class="name">范德萨发的是</div>
        <div class="people">现有人数：6人</div>
        <div class="desc">介绍：范德萨发似懂非懂范德萨</div>
      </div>
      <div>
        <el-button size="medium" type="primary">申请加入</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.teamPage {
  position: absolute;
  margin-top: 80px;
  background: #feffff;
  width: 70%;
  margin-left: 15%;
  padding: 30px;
  margin-bottom: 10px;
  z-index: -1;
  .teamItem {
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
      .people {
        font-size: 14px;
        color: #888888;
        margin-bottom: 5px;
      }
      .desc {
        font-size: 14px;
        color: #777777;
      }
    }
  }
}
</style>
