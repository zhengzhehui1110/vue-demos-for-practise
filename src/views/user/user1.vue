<template>
    <div>
        <p>user is {{$route.params.id}}</p>
        <p>place is {{$route.params.place}}</p>
        <p>path is {{$route.path}}</p>
        <!-- 点击返回home -->
        <el-button type="primary" @click="goBackHome">Home</el-button>
    </div>
</template>

<script>
export default {
    methods: {
        goBackHome(){
            this.$router.push("/")
            // 编程路由导航,跳转到指定的路径
            // 可以设置某个按钮的点击事件调用该函数
        }
    },
}
</script>