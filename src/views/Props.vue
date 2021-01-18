<template>
    <div>
        <h3>路由传参</h3>
        <p>porps is {{name}}</p>
    </div>
</template>

<script>
export default {
    props:{
        name:String
        // 接收别的页面传入的参数
    }
}
</script>