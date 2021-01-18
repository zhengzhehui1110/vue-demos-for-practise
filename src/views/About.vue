<template>
  <div class="about">
    <h1>This is test page</h1>
    <h3>动态路由</h3>
    <router-link to="/user/user 1/GuangZhou">user 1</router-link><br>
    <router-link to="/user/user 2/ShenZhen">user 2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  watch:{
    // '$route'() {
    //   alert(1);
    //   // 当父组件跳转子组件或子组件跳转到父组件时生效
    //   // 本页为父组件
    // }
  }
}
</script>