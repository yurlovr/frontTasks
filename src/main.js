import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router/router'
// import VeeValidate from 'vee-validate'

const token = localStorage.getItem('token')
if (token) {
  localStorage.removeItem('token')
}

Vue.config.productionTip = false
// Vue.use(VeeValidate)

new Vue({
  vuetify,
  store,
  render: h => h(App),
  router,
}).$mount('#app')
