// 使用 express 搭建 Node 服务器
const express = require('express')

// 写入模拟数据
const appData = require('../data.json')

// 商家数据
const seller = appData.seller

// 商品数据
const goods = appData.goods

// 评价数据
const ratings = appData.ratings

// 创建路由
const apiRoutes = express.Router()

// 获取商家数据接口
apiRoutes.get('/seller', (req, res) => {
  res.json({
    errno: 0,
    data: seller
  })
})

// 获取商品接口
apiRoutes.get('/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  })
})

// 获取评价接口
apiRoutes.get('/ratings', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  })
})

module.exports = apiRoutes