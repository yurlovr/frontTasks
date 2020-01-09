import { STATUS } from '../../../const/const'

export const SET_REGISTRATION = (state, payload) => {
  if (payload.status === STATUS.USER_WAS_CREATED) {
    state.user = payload.user
    state.token = !state.token
  }
}

export const SET_USER_LOG_OUT = (state, payload) => {
  state.user = null
  state.token = null
  state.selectedClass = null
  state.selectedSubject = null
  state.selectedCategory = null
  state.subjectSelected = null
  state.categorySelected = null
  state.allTaskCategory = null
  state.solutionTask = null
  state.receivedAnswers = null
}

export const SET_USER_LOG_IN = (state, payload) => {
  state.user = payload
  state.token = !state.token
}

export const SET_USER_SELECT_CLASS = (state, payload) => {
  state.selectedClass = payload
}

export const SET_USER_SELECT_SUBJECT = (state, payload) => {
  state.selectedSubject = payload
}

export const SET_SELECTED_SUBJECT = (state, payload) => {
  state.subjectSelected = payload
}

export const SET_USER_SELECT_CATEGORY = (state, payload) => {
  state.selectedCategory = payload.thems
}

export const SET_SELECTED_CATEGORY = (state, payload) => {
  state.categorySelected = payload.data
}
export const SET_ALL_TASK_CATEGORY = (state, payload) => {
  state.allTaskCategory = payload
}

export const SET_SOLUTION_TASKS = (state, payload) => {
  state.solutionTask = payload
}
export const SET_RECEIVED_ANSWERS = (state, payload) => {
  state.receivedAnswers = payload
}