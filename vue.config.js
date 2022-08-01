module.exports = {
    lintOnSave: false, //关闭语法监测（eslint）
    // 代理跨域 webpack 官网
    devServer: {
        inline: true,
        port: 8031,
        proxy: {
            '/api': {
                // target: 'http://39.98.123.211:8510',
                target: "http://gmall-h5-api.atguigu.cn"
                // changeOrigin:true,
                // pathRewrite: { '^/api': '' },
            },
        },
    },
}