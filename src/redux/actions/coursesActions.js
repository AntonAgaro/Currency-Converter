import getData from "../../utils/getData"

const getCurrencyCourses = () => {
  return dispatch => {
  getData()
      .then(res => {
        dispatch(getCurrencyCoursesSuccess(res))
      })
      .catch(err => {
        dispatch(getCurrencyCoursesError(err))
      })
  }
}

const getCurrencyCoursesSuccess = courses => {
  return {
    type: 'GET_COURSES_SUCCESS',
    payload: {
      ...courses
    }
  }
}

const getCurrencyCoursesError = error => {
  return {
    type: 'GET_COURSES_ERROR',
    payload: {
      error
    }
  }
}

export {getCurrencyCourses}