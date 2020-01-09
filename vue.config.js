module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/test': {
        target: 'http://localhost:3000/api/test',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/test': '' }
      },
      '^/createUser': {
        target: 'http://localhost:3000/api/register',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/createUser': '' }
      },
      '^/login': {
        target: 'http://localhost:3000/api/login',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/login': '' }
      },
      '^/allClass': {
        target: 'http://localhost:3000/api/allClass',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/allClass': '' }
      },
       '^/allSubject': {
        target: 'http://localhost:3000/api/allSubject',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/allSubject': '' }
      },
       '^/allCategory': {
        target: 'http://localhost:3000/api/allCategory',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/allCategory': '' }
      },
       '^/allTaskForCategory': {
        target: 'http://localhost:3000/api/allTaskForCategory',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/allTaskForCategory': '' }
      },
    }
  }
}