import axios from '../../services/Axios'
const URL = 'http://54.144.221.209:8100/'

const createTodo = (dataSubmit, token)=>{
  return {
    type: 'CREATE',
    payload: axios(token).post(`${URL}todos`, dataSubmit)
  }
}

const patchTodo = (dataSubmit, id, token)=>{
  return {
    type: 'PATCH',
    payload: axios(token).patch(`${URL}todos/${id}`, dataSubmit)
  }
}

const pushTodo = (data) => {
  return {
    type: 'PUSH',
    meta: data
  }
}

const getTodo = (id, search)=>{
  return {
    type: 'GET',
    payload: axios().get(`${URL}todos/user/${id}?search=${search}`)
  }
}

const deleteTodo = (id, token) => {
  return {
    type: 'DELETE',
    payload: axios(token).delete(`${URL}todos/${id}`)
  }
}

export {createTodo, getTodo, pushTodo, deleteTodo, patchTodo}