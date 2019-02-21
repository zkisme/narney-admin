module.exports = {
  devServer: {
    port: 6001,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:6002',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}