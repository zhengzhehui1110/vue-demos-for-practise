<template>
  <div class="hello">
    <h3>使用component 的 is特性</h3>
    <ul>
      <li 
      v-for="(item,index) in tabList" 
      :key="index" 
      style="cursor:pointer" 
      @click="changeView(index)"> 
      <!-- 1.每一项都有一个index,
      将用户所点击的项对应的index获取并传入 -->
      {{item}}</li>
    </ul>
    <component :is="currentView"></component>
    <!-- 5.is获取组件名,将对应的组件动态挂载 -->
  </div>
</template>

<script>
// 从别的文件引入组件
import shouji from "./shouji";
import pc from "./pc";
import shuma from "./shuma";
export default {
  name: "HelloWorld",
  components: { // 组件名放在这里
    shouji,
    pc,
    shuma,
  },
  data() {
    return {
      index: 0,
      arr: ["shuma", "shouji", "pc"], // 4.引入的组件的名字集合
      tabList: ["数码", "手机", "电脑"], // 给用户点击的文字提示
    };
  },
  computed: {
    currentView() { // 3.根据数据域内的index,动态返回挂载的组件的名字
      return this.arr[this.index];
    }
  },
  methods: {
    changeView(index) {
      this.index = index;
    //   2.得到用户点击的index,修改数据域内的index的值
    }
  },
};
</script>
