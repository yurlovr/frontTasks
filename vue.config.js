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
      '^/notSolutionTasks': {
        target: 'http://localhost:3000/api/notSolutionTasks',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/notSolutionTasks': '' }
      },
      '^/alreadySolutionTasks': {
        target: 'http://localhost:3000/api/alreadySolutionTasks',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/alreadySolutionTasks': '' }
      },
      '^/alreadyReceivedAnswers': {
        target: 'http://localhost:3000/api/alreadyReceivedAnswers',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/alreadyReceivedAnswers': '' }
      },
      '^/getTask': {
        target: 'http://localhost:3000/api/getTask',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/getTask': '' }
      },
      '^/solution': {
        target: 'http://localhost:3000/api/solution',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/solution': '' }
      },
      '^/checkAnswer': {
        target: 'http://localhost:3000/api/checkAnswer',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/checkAnswer': '' }
      },
      '^/getUserAwards': {
        target: 'http://localhost:3000/api/getUserAwards',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/getUserAwards': '' }
      },
      '^/getUserSolutionTasks': {
        target: 'http://localhost:3000/api/getUserSolutionTasks',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/getUserSolutionTasks': '' }
      },
      '^/getUserReceivedAnswers': {
        target: 'http://localhost:3000/api/getUserReceivedAnswers',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/getUserReceivedAnswers': '' }
      },
      '^/logOut': {
        target: 'http://localhost:3000/api/logOut',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/logOut': '' }
      },
    }
  }
}