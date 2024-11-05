const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://zs.cqupt.edu.cn/hxapi/token?grant_type=password&username=HLS001&password=078f1061-b036-46a8-b389-07b687ea1888',
        changeOrigin: true,
      },
    },
  },
})
