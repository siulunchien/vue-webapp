import VueRouter from 'vue-router'

export default function (app) {
  // 创建一个路由器实例
  const router = new VueRouter({
    linkActiveClass: 'active'
  })

  // 路由路径规则配置
  router.map({
    // 商品列表页
    '/goods': {
      name: 'goods',
      component: resolve => require(['views/Goods/Goods'], resolve)
    },

    // 评价页
    '/ratings': {
      name: 'ratings',
      component: resolve => require(['views/Ratings/Ratings'], resolve)
    },

    // 商家详情页
    '/seller': {
      name: 'seller',
      component: resolve => require(['views/Seller/Seller'], resolve)
    }
  })

  // 路由重定向配置
  router.redirect({
    '/': '/goods'
  })

  // 路由器创建一个 app 实例，并挂载到选择符 #app 匹配的元素上
  router.start(app, '#app')
}