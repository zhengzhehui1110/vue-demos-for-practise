import Vue from 'vue'
import App from './App.vue'
// 引入elementUi 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
// 引入lodash.js库
import  _ from 'lodash'
Vue.prototype._ = _

import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
// 引入vue-router


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
