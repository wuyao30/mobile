'use strict'
const path = require('path')
const px2rem = require('postcss-px2rem')
// const defaultSettings = require('./src/settings.js')
const name = '展厅手机管理' // page title
function resolve (dir) {
  return path.join(__dirname, dir)
}
const postcss = px2rem({
  remUnit: 16
})

module.exports = {
  publicPath: '/mobile',
  outputDir: 'mobile',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  productionSourceMap: false,
  devServer: {
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
