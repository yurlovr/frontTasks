import { OPTIONS, STATUS } from '../../../const/const'

function requestHeaders (object) {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token)
  if (!token) return object
    let newHeaders = { ...object.headers, Authorization: token }
    const {headers, ...obj} = object
    return {...obj, headers: newHeaders}
}

export const setRegistration = ({ commit }, payload) => {
  fetch('/createUser', { ...requestHeaders(OPTIONS), body: JSON.stringify(payload.data)})
    .then(res => res.json())
    .then(json => {
      const { displayName, email, classNumber, solutionTasks, receivedAnswers, awards } = json.user
      const { status, token } = json
      localStorage.setItem('token', JSON.stringify(token))
      commit('SET_REGISTRATION', { displayName, email, classNumber, status, token })
      commit('SET_SOLUTION_TASKS', solutionTasks)
      commit('SET_RECEIVED_ANSWERS', receivedAnswers)
      commit('SET_USER_AWARDS', awards)
    })
    .catch(error => commit('SET_REGISTRATION', error))
}

export const setUserLogOut = ({ commit }, payload) => {
  fetch('/logOut', { ...requestHeaders(OPTIONS)})
    .then(res => res.json())
    .then(json => {
      localStorage.removeItem('token')
      commit('SET_USER_LOG_OUT', payload)
    })
  
}

export const setUserLogIn = ({ commit }, payload) => {
  // зарос
  fetch('/login', { ...requestHeaders(OPTIONS), body: JSON.stringify(payload.data)})
    .then(res => res.json())
    .then(json => {
      const { token, ...payload } = json
      localStorage.setItem('token', JSON.stringify(token))
      commit('SET_USER_LOG_IN', payload)
    })
    .catch(err => console.log(err))
}


export const setUserSelectClass = ({ commit }, payload) => {
  console.log(payload)
  commit('SET_USER_SELECT_CLASS', payload.data)
  fetch('/allSubject', { ...requestHeaders(OPTIONS), body: JSON.stringify({classNumber: payload.data})})
    .then(res => res.json())
    .then(json => {
      commit('SET_USER_SELECT_SUBJECT', json.allSubject)
    })

}

export const setSelectedSubject = ({ commit }, payload) => {
  commit('SET_SELECTED_SUBJECT', payload.data)
}

export const setUserSelectCategory = ({ commit }, payload) => {
  console.log(payload.data)
  fetch('/allCategory', { ...requestHeaders(OPTIONS), body: JSON.stringify({subjectId: payload.data.subjectId, classNumber:  payload.data.classNumber })})
    .then(res => res.json())
    .then(json => {
      commit('SET_USER_SELECT_CATEGORY', json)
    })
    .catch(err => console.log(err))
}

export const setSelectedCategory = ({ commit }, payload) => {
  commit('SET_SELECTED_CATEGORY', payload)
}

export const setAllTaskCategory = ({ commit }, payload) => {
  fetch('/allTaskForCategory', { ...requestHeaders(OPTIONS), body: JSON.stringify({categoryId: payload.data })})
    .then(res => res.json())
    .then(json => {
      commit('SET_ALL_TASK_CATEGORY', json.tasks)
    })
    .catch(err => console.log(err))
}

export const setSolutionTasks = ({ commit }, payload) => {
  fetch('/getUserSolutionTasks',  { ...requestHeaders(OPTIONS)})
    .then(res => res.json())
    .then(json => {
      commit('SET_SOLUTION_TASKS', json)
    })
}

export const setReceivedAnswers = ({ commit }, payload) => {
  fetch('/getUserReceivedAnswers',  { ...requestHeaders(OPTIONS)})
    .then(res => res.json())
    .then(json => {
      commit('SET_RECEIVED_ANSWERS', json)
    })
}