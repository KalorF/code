<template>
  <div class="msgPage">
    <div class="msgBox">
      <div class="item" v-for="i in 10" :key="i">
        <div class="d1">时间：2020-03-31 12:00</div>
        <div class="d2">什么什么说什么没什么事</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.msgPage {
  position: absolute;
  margin-top: 80px;
  background: #feffff;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 10px;
  padding: 30px;
  z-index: -1;
  .msgBox {
    position: relative;
    .item {
      padding: 10px 0px;
      border-bottom: 1px solid #eeeeee;
      .d1 {
        font-size: 13px;
        color: #727f8f;
      }
      .d2 {
        margin-top: 10px;
        font-size: 14px;
        color: #666666;
      }
    }
  }
}
</style>
