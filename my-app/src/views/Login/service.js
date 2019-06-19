import Axios from 'axios'

const login = async (payload)=>{
  try {
    return await Axios.post(`${window.apiUrl}/thanh/login`, payload)
  } catch (error) {
    return error
  }
}

export default {
  login,
}