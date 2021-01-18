import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User1 from '../views/user/user1.vue'
import Page1 from '@/views/user/Page1'
import Page2 from '@/views/user/Page2'
import Props from '@/views/Props'
import AniGroup from '@/views/AniGroup'

// 1.导入页面组件
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component:Home,
  },
  {
    path: '/about',
    name: 'About',
    alias: '/alias',
    // 为about页添加别名
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'/user/:id/:place',
        component: User1
        // 2.将新的组件添加到routes表中,完成path到组件的映射
      },
    ]
  },
  {
    path:'/more',
    name:'More',
    components:{
      page1:Page1,
      page2:Page2,
    }
  },
  {
    path:'/redirect',
    name:'Redirect',
    redirect:{name:'About'}
  },
  {
    path:'/props',
    name:'Props',
    component:Props,
    // props:{name:'world'}
    // 对象模式,传入的数据给这个页面的props域
    props:(route)=>({name:route.path})
    // 函数模式,将数据简单处理后再传入
  },
  {
    path:'/anigroup',
    name:'AniGroup',
    component:AniGroup,
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
