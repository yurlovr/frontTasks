export const getUser = state => state.user
export const getLoggedIn = state => !!state.token
export const getUserSelectClass = state => state.selectedClass
export const getUserSelectSubject = state => state.selectedSubject
export const getSelectedSubject = state => state.subjectSelected
export const getUserSelectCategory = state => state.selectedCategory
export const getSelectedCategory = state => state.categorySelected
export const getAllTaskCategory = state => state.allTaskCategory
export const getSolutionTasks = state => state.solutionTask
export const getReceivedAnswers = state => state.receivedAnswers
export const getAwards = state => state.awards