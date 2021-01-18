<template>
    <div class="root">
        <h3>Attributes test</h3>
        <p>press f12 to see what happened</p>
        <div class="red" v-bind="$attrs"></div>
        <!-- 子元素通过绑定$attrs获得继承来的所有属性
        除了class和style -->
        <div class="yellow"></div>
    </div>
</template>

<script>
export default {
    inheritAttrs:false,
}
</script>

<style lang="css">
    .red{
        background-color: red;
    }
    .yellow{
        background-color: yellow;
    }
    .small{
        height: 20px;
        width: 20px;
    }
    .big{
        height: 100px;
        width: 100px;
    }
    .root{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>