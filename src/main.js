import Vue from 'vue'
import App from './App.vue'
import animate from "animate.css"
Vue.use(animate)
// 引入Animate.css库
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
