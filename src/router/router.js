import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import HelloWorld from '../components/HelloWorld.vue'
import Test from '../components/Test.vue'
import Registaration from '../components/Registration.vue'
import UserCreated from '../components/UserCreated.vue'
import userLogIn from '../components/UserLogIn.vue'
import LogIn from '../components/LogIn.vue'
import UserSelectSubject from '../components/UserSelectSubject.vue'
import UserSelectCategory from '../components/UserSelectCategory.vue'

Vue.use(VueRouter)


const routes = [
  { 
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/registration',
    name: 'reg', 
    component: Registaration,
  },
  {
    path: '/userCreated',
    name: 'userCreated',
    component: UserCreated,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/userLogIn',
    name: 'userLogIn',
    component: userLogIn,
  },
  {
    path: '/logIn',
    name: 'logIn',
    component: LogIn,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/selectSubject',
    name: 'selectSubject',
    component: UserSelectSubject,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/selectCategoty',
    name: 'selectCategoty',
    component: UserSelectCategory,
    meta: {
      requiresAuth: true
    }
  }
]

let router =  new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let getter = store.getters
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (getter['user/getLoggedIn']) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

export default router