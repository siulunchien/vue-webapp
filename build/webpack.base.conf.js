// 使用 Nodejs 自带的文件路径工具
const path = require('path')

// 获取 config/index.js 的默认配置
const config = require('../config')

// 使用一些小工具
const utils = require('./utils')

// 拼接工作区路径为一个绝对路径
const projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    //编译文件入口
    app: './src/main.js'
  },
  output: {
    // 编译输出的路径
    path: config.build.assetsRoot,

    // 正式发布环境下编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,

    // 编译输出的文件名
    filename: '[name].js'
  },
  resolve: {
    // 自动补全的扩展名
    extensions: ['', '.js', '.vue', 'scss'],

    // 不进行自动补全或处理的文件或文件夹
    fallback: [path.join(__dirname, '../node_modules')],

    alias: {
        // 默认路径代理，例如 import Vue from 'vue'， 会自动到 'vue/dist/vue.common.js' 中寻找
        'vue': 'vue/dist/vue.common.js',
        'src': path.resolve(__dirname, '../src'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'components': path.resolve(__dirname, '../src/components'),
        'views': path.resolve(__dirname, '../src/views'),
        'api': path.resolve(__dirname, '../src/api'),
        'sass': path.resolve(__dirname, '../src/assets/sass')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    // preLoaders: [
    //     // 预处理的文件及使用的 loader
    //     {
    //         test: /\.vue$/,
    //         loader: 'eslint',
    //         include: projectRoot,
    //         exclude: /node_modules/
    //     },
    //     {
    //         test: /\.js$/,
    //         loader: 'eslint',
    //         include: projectRoot,
    //         exclude: /node_modules/
    //     }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // eslint: {
  //     // eslint 代码检查配置工具
  //     formatter: require('eslint-friendly-formatter')
  // },
  vue: {
    // .vue 文件配置 loader 及工具 (autoprefixer)
    loaders: utils.cssLoaders()
  }
}