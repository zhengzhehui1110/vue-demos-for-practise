<template>
    <div>
        <h3>emit test</h3>
        <!-- 1.子组件触发sendData事件 -->
        <button @click="sendData()">send to father</button>
        <p>child msg: {{msgChild}}</p>
    </div>
</template>

<script>
export default {
    props:{},
    data() {
        return {
            msgChild:'I am from child',
        }
    },
    methods:{
        sendData() {
            // 2.子组件的emit触发子组件的receive1事件,同时传递参数msgChild
            this.$emit('receive1',this.msgChild);
        }
    }
}
</script>