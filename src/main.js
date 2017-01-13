import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import RouterMap from './router'
import Fastclick from 'fastclick'

// 使用 fastclick
Fastclick.attach(document.body)

// 注册 vue-router
Vue.use(VueRouter)

// 路由器根组件
const app = Vue.extend(App)

// 引入路由规则
RouterMap(app)