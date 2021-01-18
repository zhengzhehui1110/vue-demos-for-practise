

<template>
    <div>
        <h3>animate test</h3>
        <div class="example-1">
            <button @click="show1 = !show1">toggle</button>
            <transition name="slide-fade">
                <p v-if="show1">hello example1</p>
            </transition>
        </div>
        <div class="example-2">
            <button @click="show2 = !show2">toggle</button>
            <transition name="expand-fade">
                <p v-if="show2">hello example2</p>
            </transition>
        </div>
        <!-- 使用第三方库animate.css -->
        <!-- 注意,从第4.0开始,每个类名的格式都是animate__*** -->
        <div class="example-3">
            <button @click="show3 = !show3">toggle</button>
            <transition name="animate-css-example"
                enter-active-class="animate__animated animate__tada animate__slower"
                leave-active-class="animate__animated animate__bounceOutRight animate__delay-2s">
                <p v-if="show3">hello example3</p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show1:true,
            show2:true,
            show3:true
        }
    },
}
</script>

<style lang="css">
/* example1 */
    .slide-fade-enter-active{
        transition: all .3s ease;
    }
    .slide-fade-leave-active{
        transition: all .8s cubic-bezier(1, .5, .8, 1);
    }
    /* 规定了组件在动画刚开始和结束的状态 */
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translate3d(10px,0,0);
        opacity: 0;
    }
/* example2 */
    .expand-fade-enter-active{
        animation: expand-in .6s;
    }
    .expand-fade-leave-active{
        animation: expand-in .6s reverse;
    }
    /* reverse表示动画倒放 */
    /* scale是等比缩放函数 */
    /* 动画函数expand-in设置了组件在各个时间点的等比缩放程度 */
    @keyframes expand-in{
        0%{
            transform: scale(0);
        }
        50%{
            transform: scale(1.3);
        }
        100%{
            transform: scale(1);
        }
    }
    
</style>