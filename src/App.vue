<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <FadeIn></FadeIn> -->
    <!-- <Props></Props> -->
    <div class="active-comp">
      <h2>active components</h2>
      <button @click="changeIndex()">change view</button>
      <component :is="compList[componentId]"></component>
      <!-- 动态组件 -->
    </div>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FadeIn from '@/components/FadeIn'
import Props from '@/components/Props'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FadeIn,
    Props
  },
  data() {
    return {
      componentId:0,
      compList:["FadeIn", "Props"]
    }
  },
  methods: {
    changeIndex(){
      this.componentId = (this.componentId + 1)%2;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active-comp{
  border: #2c3e50 2px solid;
  
}
</style>
