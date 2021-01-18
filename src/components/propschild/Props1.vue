<template>
    <div>
        <div class="string">string message:{{msg1}}</div>
        <div class="number">number message:{{msg2}}</div>
        <div class="bool">bool message: {{msg3}}</div>
        <div class="object">
            <h4>object message</h4>
            <div>name is {{msg4.name}}</div>
            <div>birthday is {{msg4.birth}}</div>
            <div class="id">id is {{id}}</div>
            <div class="score">score is {{score}}</div>
        </div>
        <div class="array" v>
            <h4>array message</h4>
            <li v-for="(item, index) in msg5" :key="index">
                {{item}}
            </li>
            <!-- item是被迭代的数组元素的别名
            index是数组元素在数组中的索引号 -->
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        msg1:String,
        msg2:{
            type:[Number,String], // 多个可能类型
            required:true
            },
        msg3:{
            type:Boolean,
            required:true //设置是否为必需项
            },
        msg4:{
            type:Object,
            // 设置默认值,对象或数组的默认值为function形式
            default: function() {return{name:'未填写',birth:'未填写'}}
            },
        msg5:{
            type:Array,
            required:true,
            default: function() {
                return[1,2,3,4] // 返回一个数组
                }
            },
        id:Number,
        score:Number, // 这两个是作为一整个对象传进来后再拆开的
        
    }
}
</script>