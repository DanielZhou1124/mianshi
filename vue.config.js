const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
        proxy: {
            "/datas": {
                target: "https://mock.apifox.com/m1/4101695-0-default",
                changeOrigin: true,
            },
        },
    },

})
