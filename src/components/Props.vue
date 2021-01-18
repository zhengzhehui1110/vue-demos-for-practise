<template>
    <div>
        <h3>props test</h3>
        <Props1
            v-bind:msg1="stringMsg"
            v-bind:msg2="35"
            v-bind:msg4="{name:'zzh',birth:'2000.1.1'}"
            v-bind="myObject"
            v-bind:msg5="['go to school', 'go to work', 'eat breakfast']"
        ></Props1>
        <!-- 可以传入参数变量名,js表达式,都要用v-bind
        让vue知道这是一个js表达式,即使它是静态的 -->
        <!-- 可以将数据域的整个对象传入,使用不带参数的v-bind -->
        <Attributes
        class=""
        title="from father"
        name="hello"
        ></Attributes>
        <!-- 父元素传入3个参数,因为缺少prop,都作为属性 -->
        <!-- 以下是子组件传给父组件 -->
        <Props2 @receive1="receive"></Props2>
        <!-- 3.监听到子组件的receive1事件被触发,父组件的receive事件也被触发 -->
        <p>father msg:{{childMsg}}</p>
        <button @click="childMsg='i am father'">reset</button>
    </div>
</template>

<script>
import Props1 from '@/components/propschild/Props1'
import Attributes from '@/components/propschild/Attributes'
import Props2 from '@/components/propschild/Props2'



export default {
    components: {
        Props1,
        Attributes,
        Props2
    },
    data() {
        return {
            stringMsg:'hello',
            myObject:{
                id:1234567,
                score:100
                // 作为一整个对象传入时,子组件中要有两个参数
                // 名为id和score来接收这两个值
            },
            childMsg:'i am father',
        }
    },
    methods:{
        receive(data){
            // 4.改变父组件的参数的值,完成子组件到父组件的传值
            this.childMsg = data;
        }
    }
}
</script>