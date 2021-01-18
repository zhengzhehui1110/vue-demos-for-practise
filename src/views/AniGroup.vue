<template>
    <div>
        <h3>列表动画</h3>
        <el-row :gutter="10">
            <el-col :span="12">
                <h4>排序过渡</h4>
                <transition-group name="flip-list" tag="ul">
                    <li v-for="item in todoList" v-bind:key="item">
                        {{item}}
                    </li>
                </transition-group>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" 
                icon="el-icon-check" circle
                @click="shuffle"></el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoList:[
                'buy milk',
                'feed cat',
                'wash clothes',
                'make a phone call',
                'do my homework',
            ],
        }
    },
    methods: {
    shuffle: function () {
        // 这里引入了lodash.js库
      this.todoList = this._.shuffle(this.todoList)
    }
  },

}
</script>

<style lang="css">
    .flip-list-move {
        transition: transform 1s;
    }
</style>