<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/more">命名视图</router-link> | 
      <!-- 点击会去到about页 -->
      <router-link :to="{name:'Redirect'}">重定向</router-link> | 
      <!-- 点击会去到about页 -->
      <router-link to="/alias">别名</router-link> | 
      <!-- 路由传参 -->
      <router-link to="props">路由传参</router-link> | 
      <router-link to="/anigroup">列表动画</router-link>

    </div>
    <router-view name="default"/>
    <router-view name="page1"></router-view>
    <router-view name="page2"></router-view>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
/* 未选中 */
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
/* 选中 */
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
