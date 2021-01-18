<template>
    <div>
        <h3>列表动画</h3>
        <el-row :gutter="10">
            <el-col :span="12">
                <h4>排序过渡</h4>
                <transition-group name="flip-list">
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

        <el-row :gutter="10">
            <el-col :span="12">
                <h4>列表进入/退出</h4>
                <transition-group name="list" tag="ul">
                    <li class="list-item"
                    v-for="item in subject" v-bind:key="item">
                        {{item}}
                    </li>
                </transition-group>
            </el-col>
            <el-col :span="6">
                <el-input v-model="newSubject" placeholder="请输入新增项"></el-input>
            </el-col>
            <el-col :span="3">
                <el-button type="primary" 
                icon="el-icon-plus" circle
                @click="add"></el-button>
            </el-col>
            <el-col :span="3">
                <el-button type="primary" 
                icon="el-icon-minus" circle
                @click="remove"></el-button>
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
            subject:[
                'Math',
                'English',
                'Data Science',
                'Deep Learning',
                'Software Engeneer'
            ],
            newSubject:'',
        }
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.subject.length)
        },
        shuffle: function () {
            // 这里引入了lodash.js库
            this.todoList = this._.shuffle(this.todoList)
        },
        remove: function () {
            this.subject.splice(this.randomIndex(), 1)
        },
        add: function () {
            this.subject.splice(this.randomIndex(), 0, this.newSubject)
        },
  },

}
</script>

<style lang="css">
    .flip-list-move {
        transition: transform 1s;
    }

    .list-item {
        transition: all 1s;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
        
    }
    /* .list-leave{
        position: relative;
        left: 0px;
    } */
    .list-leave-active {
        position: absolute;
        /*元素进入页面占据位置的时机是enter,
        离开页面让出位置的时机是leave-to,
        改变位置的动画只能在active时机进行
         */
    }
</style>