import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import userController from './controllers/userController'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user: userModule
  },
  plugins: [
  userController()
  ]
})
