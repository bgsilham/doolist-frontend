  
import axios from '../../services/Axios'
const URL = 'http://192.168.56.1:8100/'

const registerUser = (dataSubmit)=>{
  return {
    type: 'REGISTER',
    payload: axios().post(`${URL}users`, dataSubmit)
  }
}

const loginUser = (dataSubmit)=>{
  return {
    type: 'LOGIN',
    payload: axios().post(`${URL}users/login`, dataSubmit)
  }
}

const logout = ()=>{
  return {
    type: 'LOGOUT',
    payload: ''
  }
}

export {registerUser, loginUser, logout}