const { proxyConfig } = require('./src/config/request/proxy')

module.exports = {
  lintOnSave: false,
  /**
   * 本地开发时，需要代理转发的请求
   */
  proxyConfig,
  chainWebpack() {
    // use webpack-chain
  },
  configureWebpack: {
    // normal webpack config
    resolve: {
      alias: {
        react: 'nervjs',
        'react-dom': 'nervjs'
      }
    }
  }
}
