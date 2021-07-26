const initialState = {};

const coursesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COURSES_SUCCESS': 
      return {
        ...state,
        ...action.payload
        
      }
    case 'GET_COURSES_ERROR':
      console.log(action.payload)
      return {
        ...state
      }  
    default: 
      return state;
  }
}

export default coursesReducer;