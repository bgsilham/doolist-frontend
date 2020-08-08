const initialState = {
  isLoading: false,
  isLoadingRegister: false,
  isLogin: false,
  isError: false,
  errorMsg: '',
  token: null,
  dataLogin: []
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
        token: action.payload.data.token,
        dataLogin: action.payload.data
      }
    }
    case 'REGISTER_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }
    case 'REGISTER_REJECTED': {
      return {
        ...state,
        isLoadingRegister: false,
        isError: true,
        errorMsg: 'failed!',
      }
    }
    case 'REGISTER_FULFILLED': {
      return {
        ...state,
        isLoadingRegister: false,
        isError: false
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
        token: null
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default auth