import { STATUS } from '../../const/const'
import router from '../../router/router'

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    store.subscribe((mutation, state) => {
      let payload = mutation.payload
      switch(mutation.type) {
        case 'user/SET_REGISTRATION':
          if (payload.status === STATUS.USER_WAS_CREATED) {
            router.push('/userCreated')
          }
          break
        case 'user/SET_USER_LOG_OUT':
          router.push('/')
          break
        case 'user/SET_USER_LOG_IN':
          if (payload.userId) {
            router.push('/logIn')
          }
          break
        case 'user/SET_USER_SELECT_SUBJECT':
          router.push('/selectSubject')
          break
        case 'user/SET_USER_SELECT_CATEGORY':
          router.push('/selectCategoty')
          break
        case 'user/SET_ALL_TASK_CATEGORY':
          router.push('/tasks')
          break
      }
    })
  }
}
