const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  dataTodo: []
}

const todo = (state=initialState, action) => {
  switch(action.type){
    case 'CREATE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'CREATE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'CREATE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'GET_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'GET_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'GET_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataTodo: action.payload.data.data
      }
    }
    case 'DELETE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'DELETE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'DELETE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'PATCH_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'PATCH_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'PATCH_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
      }
    }
    case 'PUSH': {
      console.log(action.meta)
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataTodo: [...state.dataTodo, action.meta]
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        dataTodo: []
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default todo