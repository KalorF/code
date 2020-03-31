<template>
  <div id="app">
    <div id="nav">
      <div id="header">
        <div class="title">码市</div>
        <router-link to="/">首页</router-link>
        <router-link to="/bbs">发现</router-link>
        <router-link to="/project">项目</router-link>
        <router-link to="/team">开发者招聘</router-link>
        <div class="my">
          <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4016333918,4269266815&fm=26&gp=0.jpg" alt="头像">
          <div class="name">哈哈哈哈</div>
          <div class="myce" @click="toCenter">个人中心</div>
          <div class="msg" @click="$router.push('/message')">
            <i class="el-icon-message-solid"></i>
            <span>12</span>
          </div>
        </div>
        <div class="lo" @click="$router.push('/login')">登陆</div>
        <div class="re" @click="$router.push('/registry')">注册</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    toCenter () {
    // 根据用户身份进行跳转 比如 1是开发者 2思需求方
      const { href } = this.$router.resolve({
        path: '/center',
        query: { type: 1 }
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss">
body {
  background: #F4F5F5;
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555555;
}

#nav {
  background: #feffff;
  padding: 10px;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}

#header {
  padding: 3px;
  width: 70%;
  margin-left: 15%;
  display: flex;
  align-items: center;
  .title {
    font-size: 30px;
    color: #409DFF;
    margin-right: 40px;
  }
  a {
    font-weight: bold;
    color: #71777C;
    margin-right: 30px;
    &:link {
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: #1A85FF;
    }
  }
  .my {
    margin-left: auto;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    .name {
      margin-left: 10px;
      font-size: 14px;
    }
    .myce {
      margin-left: 20px;
      cursor: pointer;
    }
    .msg {
      margin-left: 20px;
      cursor: pointer;
      font-size: 20px;
      span {
        font-size: 14px;
      }
    }
    .msg:hover {
      color: #4289dc;
    }
    .myce:hover {
      color: #1A85FF;
    }
  }
  .lo {
    margin-left: auto;
    cursor: pointer;
    margin-right: 30px;
  }
  .re {
    cursor: pointer;
  }
  .lo:hover,.re:hover {
    color: #1A85FF;
  }
}
</style>
