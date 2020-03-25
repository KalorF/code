<template>
  <div id="app">
    <div id="nav">
      <div id="header">
        <div class="title">码市</div>
        <router-link to="/">首页</router-link>
        <router-link to="/bbs">论坛</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

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
    margin-right: 20px;
    &:link {
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: #1A85FF;
    }
  }
}
</style>
