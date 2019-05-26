module.exports = {
  publicPath: '/',
  devServer: {
    host: 'localhost',
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'https://coin.zhenly.cn/api/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false
}
